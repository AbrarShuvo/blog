---
title: How I turned meeting recordings into task lists with Python
description: How a Python tool turns a recorded meeting into a checked list of tasks, owners and deadlines — no rewatching the call.
tags: [python, automation]
pubDate: 2026-11-26
draft: false
portfolioLink: https://abrarshuvo.github.io/loom-to-tasks.html
---

A design agency I worked with recorded every client meeting. Afterwards, one designer rewatched the whole recording and wrote down what the client asked for. I built a Python tool that reads the transcript and turns it into a checked list of tasks, owners, deadlines and decisions, so nobody has to rewatch the call.

## The problem

The decisions were in the recording. Nobody had time to find them.

A design agency records its client meetings. Afterwards, one designer watches the whole recording, writes down what the client asked for and passes it on. It works, but it costs a full rewatch every time, and anything missed is simply lost.

The agency didn't need a new meeting tool. They needed someone to read the meeting they already had and pull the work out of it.

## What I built

A tool that reads the transcript and returns the work.

The tool takes the transcript of a recorded meeting or Loom video and returns a clear list of decisions, tasks with owner, deadline and priority, and blockers. It is built with Python and the Gemini API, using structured outputs and an automated test suite.

It works in three steps:

1. **Read the transcript.** The tool cleans up the transcript and splits it into who said what, and when.
2. **Pull out the work.** AI picks out the tasks, owners, deadlines and decisions, and has to answer in one fixed format.
3. **Check and save.** Every answer is checked against that format, asked again if it's wrong, then saved as a task list other tools can read.

## One example

A short meeting about a pricing page. Here is a sample meeting from the test set. Two decisions and three pieces of work, buried in one short update:

> "We decided to go with the three-column pricing table instead of the toggle, because the toggle confused people in the last test. Priya, can you update the icons to the new set by Thursday? Dan, I need you to send the final copy for the headlines by Friday. One blocker: we still don't have the logo files from the client, so I can't finish the header."

The tool returns this, in the same fixed shape every time:

```
Decision: use the three-column pricing table instead of the toggle
Task: update icons to the new set — Priya, Thursday
Task: send the final headline copy — Dan, Friday
Blocker: logo files from the client are missing
```

Because the output always has the same shape, it can go straight into a task tool instead of being retyped.

## The rule that made it trustworthy

It never guesses.

The rule that matters most is a simple one: if nobody said who owns a task or when it's due, the tool writes "unknown" instead of making something up. A tentative owner, like "maybe Lena", is named but marked unconfirmed.

I also wrote the correct answer for every test meeting before running the tool, so the tests measure accuracy, not just "it ran". Across four sample meetings — short, messy, long and written — it passed 67 out of 67 checks, finding every task, owner and deadline.

## What it can't do yet

It was tested on sample meetings with answers prepared in advance. Real client meetings are the next step. It starts from a transcript — Loom gives you one — it doesn't record the meeting itself. And a human still reads the list before acting on it. The tool drafts the work; it doesn't decide it.
