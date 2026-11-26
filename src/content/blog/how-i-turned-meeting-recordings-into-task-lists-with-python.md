---
title: How I turned meeting recordings into task lists with Python
description: How a Python tool turns a recorded meeting into a checked list of tasks, owners and deadlines — no rewatching the call.
tags: [python, automation]
draft: true
portfolioLink: https://abrarshuvo.github.io/loom-to-tasks.html
# pubDate is set when this article is published. Do not invent one here.
---

<!-- DRAFT OUTLINE ONLY. Write the full text from your own experience.
     See WRITING.md for the rules before publishing. -->

## The problem

[Note: a design agency records its client meetings; afterwards one designer rewatched the whole recording and wrote down what the client asked for. It worked, but it cost a full rewatch every time, and anything missed was simply lost.]

## What I built

[Note: a Python tool that takes the transcript of a recorded meeting or Loom video and returns a clear list of decisions, tasks with owner, deadline and priority, and blockers. Built with Python and the Gemini API, using structured outputs and an automated test suite.]

## How it works

[Note: three steps — 1. Read the transcript: clean it up, split it into who said what and when. 2. Pull out the work: AI picks out tasks, owners, deadlines and decisions, and has to answer in one fixed format. 3. Check and save: every answer is checked against that format, asked again if it's wrong, then saved as a task list other tools can read.]

## One example

[Note: the Brightleaf pricing-page sample meeting — the three-column pricing table decision, Priya's icons by Thursday, Dan's copy by Friday, the missing logo files as a blocker. Show the input quote, then the fixed-shape output.]

## The rule that made it trustworthy

[Note: it never guesses. If nobody said who owns a task or when it's due, it writes "unknown". A tentative owner ("maybe Lena") is named but marked unconfirmed. The correct answer for every test meeting was written before running the tool. 67/67 checks across four sample meetings.]

## What it can't do yet

[Note: tested on sample meetings with answers prepared in advance — real client meetings are the next step. It starts from a transcript (Loom gives you one); it doesn't record the meeting itself. A human still reads the list before acting on it.]
