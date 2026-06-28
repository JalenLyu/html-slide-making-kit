import fs from "node:fs/promises";
import fssync from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const runtimeModules = process.env.NODE_PATH?.split(":").find(Boolean);
const requireFromRuntime = runtimeModules
  ? createRequire(path.join(runtimeModules, "runtime.js"))
  : createRequire(import.meta.url);

const { chromium } = requireFromRuntime("playwright");
const sharp = requireFromRuntime("sharp");

const KIT_DIR = path.dirname(fileURLToPath(import.meta.url));
const BASE = path.resolve(KIT_DIR, "..");

function argValue(name, fallback) {
  const index = process.argv.indexOf(name);
  return index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : fallback;
}

const deckPath = path.resolve(argValue("--deck", path.join(BASE, "prompt-management-intro.html")));
const outDir = path.resolve(argValue("--out", path.join(BASE, "qa/deck-qa")));
const chromePath = argValue("--chrome", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome");
const viewports = [
  { name: "1280", width: 1280, height: 720 },
  { name: "1600", width: 1600, height: 900 },
];

function resolveAsset(fromFile, ref) {
  if (/^(https?:|data:|#)/.test(ref)) return null;
  return path.resolve(path.dirname(fromFile), ref);
}

async function readText(file) {
  return fs.readFile(file, "utf8");
}

async function staticAssetCheck() {
  const html = await readText(deckPath);
  const htmlRefs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/g)].map((match) => ({
    type: "html-img",
    ref: match[1],
    file: resolveAsset(deckPath, match[1]),
  }));
  const cssLinks = [...html.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/g)].map((match) =>
    resolveAsset(deckPath, match[1]),
  ).filter(Boolean);

  const cssRefs = [];
  for (const cssFile of cssLinks) {
    if (!fssync.existsSync(cssFile)) {
      cssRefs.push({ type: "css-file", ref: cssFile, file: cssFile });
      continue;
    }
    const css = await readText(cssFile);
    for (const match of css.matchAll(/url\(["']?([^)"']+)["']?\)/g)) {
      cssRefs.push({ type: "css-url", ref: match[1], file: resolveAsset(cssFile, match[1]) });
    }
  }

  const refs = [...htmlRefs, ...cssRefs];
  const missing = refs.filter((item) => item.file && !fssync.existsSync(item.file));
  const bannedText = [];
  const bannedPatterns = [
    { name: "derived asset reference", pattern: /assets\/screenshots\/[^"']*derived/i },
    { name: "mock asset reference", pattern: /assets\/screenshots\/[^"']*mock/i },
    { name: "old navy report color", pattern: /#254f91/i },
  ];
  const searchable = html + "\n" + (await Promise.all(cssLinks.filter((file) => fssync.existsSync(file)).map(readText))).join("\n");
  for (const item of bannedPatterns) {
    if (item.pattern.test(searchable)) bannedText.push(item.name);
  }
  for (const match of searchable.matchAll(/([^{}]+)\{[^{}]*object-fit:\s*cover/gi)) {
    const selector = match[1].trim();
    if (!selector.includes("crop-screen")) {
      bannedText.push(`unapproved screenshot cover fit: ${selector}`);
    }
  }

  return {
    refs: refs.map((item) => ({ type: item.type, ref: item.ref, exists: !item.file || fssync.existsSync(item.file) })),
    missing,
    bannedText,
  };
}

async function renderCheck() {
  await fs.mkdir(outDir, { recursive: true });
  const browser = await chromium.launch({ headless: true, executablePath: chromePath });
  const results = [];
  const screenshotPaths = [];

  for (const viewport of viewports) {
    const page = await browser.newPage({
      viewport: { width: viewport.width, height: viewport.height },
      deviceScaleFactor: 1,
    });
    await page.goto(`file://${deckPath}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(800);
    const slideCount = await page.locator(".slide").count();
    const slideDir = path.join(outDir, viewport.name);
    await fs.mkdir(slideDir, { recursive: true });

    for (let index = 0; index < slideCount; index += 1) {
      await page.evaluate((slideIndex) => {
        if (typeof window.showSlide === "function") {
          window.showSlide(slideIndex, { replace: true });
          return;
        }
        const slides = Array.from(document.querySelectorAll(".slide"));
        slides.forEach((slide, current) => slide.classList.toggle("active", current === slideIndex));
      }, index);
      await page.waitForTimeout(900);

      const check = await page.evaluate(() => {
        const active = document.querySelector(".slide.active");
        const viewport = { width: innerWidth, height: innerHeight };
        const keySelector = [
          "header",
          ".purpose-band",
          ".asset-workflow",
          ".workflow-shot",
          ".screen-frame",
          ".release-cell",
          ".status-card",
          ".evidence-thumb",
          ".scope-band",
          ".warn-band",
          ".footer",
          ".page-num",
          "img",
          "table",
        ].join(",");
        const textSelector = [
          "h1",
          "h2",
          "p",
          "li",
          "td",
          "th",
          ".shot-caption",
          ".release-cell",
          ".status-card",
          ".note-band",
          ".scope-band",
          ".warn-band",
          "figcaption",
        ].join(",");
        const visible = (el) => {
          const style = getComputedStyle(el);
          const rect = el.getBoundingClientRect();
          return style.visibility !== "hidden" && style.display !== "none" && rect.width > 0 && rect.height > 0;
        };
        const keyOverflow = Array.from(active.querySelectorAll(keySelector))
          .filter(visible)
          .map((el) => {
            const rect = el.getBoundingClientRect();
            return {
              tag: el.tagName,
              cls: String(el.className || ""),
              text: (el.textContent || "").trim().slice(0, 90),
              left: rect.left,
              top: rect.top,
              right: rect.right,
              bottom: rect.bottom,
              width: rect.width,
              height: rect.height,
            };
          })
          .filter((rect) => rect.left < -1 || rect.top < -1 || rect.right > viewport.width + 1 || rect.bottom > viewport.height + 1);

        const textOverflow = Array.from(active.querySelectorAll(textSelector))
          .filter(visible)
          .map((el) => {
            const style = getComputedStyle(el);
            return {
              tag: el.tagName,
              cls: String(el.className || ""),
              text: (el.textContent || "").trim().slice(0, 90),
              scrollWidth: el.scrollWidth,
              clientWidth: el.clientWidth,
              scrollHeight: el.scrollHeight,
              clientHeight: el.clientHeight,
              fontSize: Number.parseFloat(style.fontSize),
            };
          })
          .filter((item) => item.text && (item.scrollWidth > item.clientWidth + 2 || item.scrollHeight > item.clientHeight + 2));

        const smallText = Array.from(active.querySelectorAll(textSelector))
          .filter(visible)
          .map((el) => {
            const style = getComputedStyle(el);
            return {
              tag: el.tagName,
              cls: String(el.className || ""),
              text: (el.textContent || "").trim().slice(0, 90),
              fontSize: Number.parseFloat(style.fontSize),
            };
          })
          .filter((item) => item.text && item.fontSize > 0 && item.fontSize < 10);

        const images = Array.from(active.querySelectorAll("img")).map((img) => ({
          src: img.getAttribute("src"),
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
        }));

        const allowedRatioClasses = ["screen-wide", "screen-drawer", "screen-form", "screen-tall", "screen-free"];
        const frameRatioIssues = Array.from(active.querySelectorAll(".screen-frame"))
          .filter(visible)
          .filter((el) => !el.classList.contains("crop-screen"))
          .map((el) => {
            const rect = el.getBoundingClientRect();
            const declaredRatio = allowedRatioClasses.some((cls) => el.classList.contains(cls));
            return {
              cls: String(el.className || ""),
              ratio: rect.width / rect.height,
              width: rect.width,
              height: rect.height,
              declaredRatio,
            };
          })
          .filter((item) => !item.declaredRatio || item.ratio < 1.1 || item.ratio > 2.2);

        const slideNumber = Number((active.id || "").replace("slide-", ""));
        const activeText = active.textContent || "";
        const structureIssues = [];
        if (slideNumber >= 2) {
          if (!/How to (do it|use it)|How to use it/i.test(activeText)) {
            structureIssues.push("missing How explanation");
          }
          if (!/(Why it helps|What you see|What you check|What you need|Next step)/i.test(activeText)) {
            structureIssues.push("missing user-value or next-step explanation");
          }
        }

        return { keyOverflow, textOverflow, smallText, images, frameRatioIssues, structureIssues };
      });

      const screenshot = path.join(slideDir, `slide-${String(index + 1).padStart(2, "0")}.png`);
      await page.screenshot({ path: screenshot, fullPage: false });
      screenshotPaths.push(screenshot);
      results.push({
        viewport: viewport.name,
        slide: index + 1,
        keyOverflow: check.keyOverflow,
        textOverflow: check.textOverflow,
        smallText: check.smallText,
        brokenImages: check.images.filter((image) => !image.naturalWidth || !image.naturalHeight),
        frameRatioIssues: check.frameRatioIssues,
        structureIssues: check.structureIssues,
      });
    }
    await page.close();
  }

  await browser.close();
  return { results, screenshotPaths };
}

async function buildContactSheet(imagePaths) {
  const thumbs = await Promise.all(
    imagePaths.map(async (file) => {
      const buffer = await sharp(file)
        .resize({ width: 300 })
        .extend({ top: 12, bottom: 12, left: 12, right: 12, background: "#ffffff" })
        .png()
        .toBuffer();
      const meta = await sharp(buffer).metadata();
      return { input: buffer, width: meta.width, height: meta.height };
    }),
  );
  const columns = 4;
  const cellW = 324;
  const cellH = 210;
  const rows = Math.ceil(thumbs.length / columns);
  const composites = thumbs.map((thumb, index) => ({
    input: thumb.input,
    left: (index % columns) * cellW,
    top: Math.floor(index / columns) * cellH,
  }));
  const contactSheet = path.join(outDir, "contact-sheet.png");
  await sharp({
    create: {
      width: columns * cellW,
      height: rows * cellH,
      channels: 4,
      background: "#f8fafc",
    },
  }).composite(composites).png().toFile(contactSheet);
  return contactSheet;
}

function issueCount(report) {
  return (
    report.static.missing.length +
    report.static.bannedText.length +
    report.render.results.reduce(
      (sum, item) => sum + item.keyOverflow.length + item.textOverflow.length + item.brokenImages.length,
      0,
    ) +
    report.render.results.reduce((sum, item) => sum + item.frameRatioIssues.length + item.structureIssues.length, 0)
  );
}

async function writeReports(report) {
  await fs.mkdir(outDir, { recursive: true });
  const jsonPath = path.join(outDir, "report.json");
  await fs.writeFile(jsonPath, JSON.stringify(report, null, 2));
  const issues = issueCount(report);
  const md = [
    "# Deck QA Report",
    "",
    `Deck: \`${deckPath}\``,
    `Issues: ${issues}`,
    `Contact sheet: \`${report.contactSheet}\``,
    "",
    "## Static Checks",
    "",
    `- Asset references: ${report.static.refs.length}`,
    `- Missing assets: ${report.static.missing.length}`,
    `- Banned patterns: ${report.static.bannedText.length ? report.static.bannedText.join(", ") : "none"}`,
    "",
    "## Render Checks",
    "",
    `- States checked: ${report.render.results.length}`,
    `- Key element overflow: ${report.render.results.reduce((sum, item) => sum + item.keyOverflow.length, 0)}`,
    `- Text clipping: ${report.render.results.reduce((sum, item) => sum + item.textOverflow.length, 0)}`,
    `- Broken images: ${report.render.results.reduce((sum, item) => sum + item.brokenImages.length, 0)}`,
    `- Screenshot frame ratio issues: ${report.render.results.reduce((sum, item) => sum + item.frameRatioIssues.length, 0)}`,
    `- How/value structure issues: ${report.render.results.reduce((sum, item) => sum + item.structureIssues.length, 0)}`,
    `- Small text warnings: ${report.render.results.reduce((sum, item) => sum + item.smallText.length, 0)} (warnings only)`,
    "",
  ].join("\n");
  const mdPath = path.join(outDir, "report.md");
  await fs.writeFile(mdPath, md);
  return { jsonPath, mdPath };
}

const staticResult = await staticAssetCheck();
const renderResult = await renderCheck();
const contactSheet = await buildContactSheet(renderResult.screenshotPaths);
const report = {
  generatedAt: new Date().toISOString(),
  deck: deckPath,
  static: staticResult,
  render: renderResult,
  contactSheet,
};
const paths = await writeReports(report);
const issues = issueCount(report);

console.log(JSON.stringify({ issues, report: paths.mdPath, json: paths.jsonPath, contactSheet }, null, 2));
if (issues > 0) process.exit(1);
