---
title: Python automation for agencies — what to automate first
description: Three kinds of repetitive agency work worth automating first — meeting notes, enquiries, dashboards — and how I decide what to build.
tags: [python, automation]
pubDate: 2026-11-26
draft: false
portfolioLink: https://abrarshuvo.github.io/python-automation-for-agencies.html
---

If you run an agency, your work arrives as meetings, emails and spreadsheets — and gets handled by hand every week. Small Python tools can take the repetitive parts off your team's plate. The question is where to start.

Here is how I decide, and the three kinds of work I automate first.

## 1. Meeting notes into tasks

A recorded meeting becomes a clear list of tasks, owners, deadlines and decisions, so nobody has to rewatch the call. This is the best first automation when your team spends its Mondays reconstructing what was agreed on Friday.

I built exactly this for a design agency: a Python tool that reads a meeting transcript and returns the work in one fixed shape. It passed 67 out of 67 checks across four sample meetings, and its most important rule is that it never guesses — if nobody said who owns a task, it writes "unknown".

## 2. Enquiries into a tracker

New enquiries file themselves into one Excel tracker, with a weekly dashboard, so no lead is typed in by hand or forgotten. Start here when new business arrives by email and gets filed by hand — that is where leads quietly go unanswered in a busy week.

The version I built reads enquiry emails, tidies names and dates, flags possible duplicates and writes everything into the tracker the team already uses. 156 automated checks, zero leads typed in by hand.

## 3. Dashboards that update themselves

A dashboard that refreshes from the same spreadsheet your team already keeps, so the week's numbers are visible without anyone rebuilding them. Start here when someone on your team rebuilds the same report every week.

## How I decide what to build first

Three questions, in order:

1. **Does it repeat every week?** A one-off task is not worth automating. A weekly copy-paste job is.
2. **Is the input and the output clear?** If you can show me a real example — a recording, a few sample emails, a spreadsheet — I can build it. If the task needs judgement every time, it stays with a person.
3. **Does a mistake cost a glance or a client?** I design so a wrong guess is flagged, never silently acted on. Duplicates get flagged, not deleted. Guessed owners get marked unconfirmed, not stated as fact.

## How a project runs

It is simple, from first call to handover:

1. **A short call.** We talk through the task and agree what a good result looks like.
2. **A clear plan.** You get a written plan: what I'll build, and when you'll see it.
3. **A working demo.** You see it running on your own data before anything is final.
4. **Handover.** You get the finished tool, simple instructions, and help if anything needs fixing.

To start, I need a real example of the task, a few sample files with private details removed, and one person who can answer questions. Every project comes with tests that check it does what we agreed — you see it working on your own data before anything is final.
