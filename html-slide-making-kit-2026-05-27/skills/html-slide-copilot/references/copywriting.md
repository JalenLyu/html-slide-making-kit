# HTML Slide Copywriting

Use this when writing or revising slide titles, speaker-facing narrative, and on-slide explanations.

## Core Narrative

- Make the main actor explicit: user, product, agent, workflow, data source, or system.
- Explain what changed and why it matters: read sources, call tools, transform information, generate candidates, or return to human confirmation.
- Treat product UI as evidence of a workflow, not the whole message.
- Keep the talk useful to the audience: show how they can reuse the method, not only what the example artifact looks like.

## Slide Title Rules

- Title equals audience takeaway, not author intent.
- Avoid process narration such as "how we will explain", "relationship can be seen as", or "this talk focuses on".
- Avoid "not X, but Y" unless the slide is explicitly about contrast.
- Prefer direct claims, e.g. "Tools turn static context into executable workflow".

## Term Translation

- Knowledge base: where source files, notes, reports, or examples live.
- Connector / MCP: a way for the agent to read external systems or services.
- CLI: local scripts or commands that run repeatable work.
- Skill: the agent's operating manual, including input, steps, output path, and validation.
- Dashboard / work surface: the human confirmation surface where results are reviewed.
- Avoid naked terms such as "contract", "action map", "audit", "source boundary", or plugin-specific names; if needed, explain as "what it reads, what it runs, what it writes, and who confirms".

## Sentence Pattern

Prefer:

- "Read X -> run Y -> produce Z -> confirm in W"
- "The agent reads X, generates Y, and the user confirms Z in the dashboard"
- "Connector reads external context, CLI runs scripts, Skill records the steps, and the agent strings them together"

Avoid:

- Internal deck-making notes.
- Feature descriptions without the workflow implication.
- Abstract labels that require private background knowledge.
- Long throat-clearing phrases before the actual point.

## Rewrite Examples

- "First explain the structure" -> "Files, tools, agent, and confirmation surface form the workflow"
- "Quick add writes to Inbox" -> "New tasks are saved as local files"
- "System runs reusable actions" -> "Skills call tools and save results"
- "Read, judge, execute, review, produce candidates" -> "Classify projects, summarize progress, and draft briefings"
- "Buttons have an auditable action map" -> "Each button says what it reads, runs, writes, and who confirms"

## Copy QA Checklist

- Does each page say why the audience should care?
- Can someone unfamiliar with the local toolchain understand the slide?
- Does every acronym have a concrete example near first use?
- Is there any deck-making narration instead of audience-facing message?
- Are UI features explained as evidence of a workflow rather than as feature marketing?
