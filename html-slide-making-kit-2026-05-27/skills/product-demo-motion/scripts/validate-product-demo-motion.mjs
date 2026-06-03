#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const file = process.argv[2];
if (!file) {
  console.error("Usage: validate-product-demo-motion.mjs <html-file>");
  process.exit(2);
}

const htmlPath = path.resolve(file);
const html = fs.readFileSync(htmlPath, "utf8");
const baseDir = path.dirname(htmlPath);
const issues = [];

const requiredTokens = [
  "pdm-demo",
  "pdm-base",
  "pdm-cursor",
  "pdm-lens",
  "pdm-result-card",
  "@keyframes pdm",
  "prefers-reduced-motion",
];

for (const token of requiredTokens) {
  if (!html.includes(token)) issues.push(`missing token: ${token}`);
}

const imageRefs = Array.from(html.matchAll(/<img[^>]+src=["']([^"']+)["']/g)).map(match => match[1]);
for (const src of imageRefs) {
  if (/^(https?:|data:|file:)/.test(src)) continue;
  const imagePath = path.resolve(baseDir, src);
  if (!fs.existsSync(imagePath)) issues.push(`missing image: ${src}`);
}

const openSections = (html.match(/<section\b/g) || []).length;
const closeSections = (html.match(/<\/section>/g) || []).length;
if (openSections !== closeSections) {
  issues.push(`section tag mismatch: open=${openSections} close=${closeSections}`);
}

const openFigures = (html.match(/<figure\b/g) || []).length;
const closeFigures = (html.match(/<\/figure>/g) || []).length;
if (openFigures !== closeFigures) {
  issues.push(`figure tag mismatch: open=${openFigures} close=${closeFigures}`);
}

if (issues.length) {
  console.error(JSON.stringify({ ok: false, file: htmlPath, issues }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  ok: true,
  file: htmlPath,
  images: imageRefs.length,
  sections: openSections,
}, null, 2));
