# Jialun Slide Copywriting

Use this when writing or revising Jialun's internal HTML slides, especially PM OS Workbench and Codex workflow sharing decks.

## Core Narrative

- Make Codex the active subject when the talk is about AI-assisted workflow building.
- Explain what Codex did for PM work: read sources, call tools, generate candidates or summaries, then return to human confirmation.
- Treat product UI as evidence of the workflow, not the main topic.
- Keep the talk useful to other PMs: show how they can build a tool that fits their own workflow.

## Slide Title Rules

- Title equals audience takeaway, not author intent.
- Avoid process narration such as "讲如何", "基础结构先讲清楚", "关系可以这样看", or "这次分享重点是".
- Avoid "不是 / 而是" unless the slide is explicitly about contrast.
- Prefer direct titles: "第二层工具：MCP、CLI、Skill 让 Codex 能行动".

## Term Translation

- Obsidian: Markdown 文件管理器 / 本地文件数据库.
- MCP: 让 Codex 读外部系统, such as Calendar, Email, Jira, web pages, or internal services.
- CLI: 跑本地脚本, refresh reports, check project files, or generate candidates.
- Skill: Agent 的操作手册, including input, steps, output path, and validation.
- Workbench: 日常确认面, where PMs decide what to accept or handle next.
- Avoid naked terms such as "contract", "action map", "audit", "QuickAdd", or "source boundary"; if needed, explain as "读什么、跑什么、写哪里、谁确认".

## Sentence Pattern

Prefer:

- "读什么 -> 调什么 -> 产出什么 -> 谁确认"
- "从 X 读 Y，生成 Z，PM 在 Workbench 确认"
- "MCP 读外部系统，CLI 跑脚本，Skill 写清步骤，Codex 负责串起来"

Avoid:

- "基础结构先讲清楚"
- "功能如何设计"
- "可审计 action map"
- "只把合约放到前台"
- "这是我们的 PPT 设计思路"

## Rewrite Examples

- "AI 先读文件边界" -> "文件夹就是 AI 的数据库"
- "Quick add 写入 Inbox" -> "新增待办写入本地文件"
- "System 跑可复用动作" -> "Skill 调 MCP/CLI，Reports 保存结果"
- "读取、判断、执行、复查，产出候选" -> "做项目归类、进度摘要、日程和邮件 brief"
- "按钮背后是一张可审计的 action map" -> "按钮把 source、tool 和 output 串起来"
- "Jira 保持只读报告" -> remove unless the slide is specifically about safety or governance.

## Copy QA Checklist

- Does each page say why the audience should care?
- Can a PM unfamiliar with Obsidian plugins understand it?
- Does every acronym have a concrete example near first use?
- Is there any deck-making narration instead of audience-facing message?
- Are UI features explained as evidence of the Codex workflow rather than as product feature marketing?
