---
title: How I stopped leads getting lost in the inbox
description: New enquiries used to be copied into a spreadsheet by hand. Now a Python tool files them into the Excel tracker and refreshes the dashboard.
tags: [python, excel, automation]
pubDate: 2026-11-26
draft: false
portfolioLink: https://abrarshuvo.github.io/lead-tracker.html
---

New business arrived faster than anyone could file it. Enquiries land in an inbox all week. Someone opens each one, copies the details into a spreadsheet and updates it later if it goes anywhere. The copying is dull, it comes in bursts, and in a busy week a lead quietly goes unanswered.

So I built a tool that collects new enquiries from the inbox, files them into one Excel tracker and keeps a weekly dashboard up to date — so no lead is typed in by hand or forgotten.

## Before and after

Before, the work looked like this:

- Copying details in, email by email
- The same lead entered twice
- No quick view of the week

After, the tracker fills itself, possible duplicates are flagged, and one dashboard shows the whole week.

## How it works

Three steps, in Python with pandas and Excel:

1. **Collect.** It reads new enquiry emails and pulls out who wrote, when, what they asked for and where they came from.
2. **Clean.** It tidies names and dates, spots possible duplicates and flags anything incomplete.
3. **Publish.** It writes everything into the Excel tracker the team already uses, and refreshes the dashboard.

## Three decisions that made it stick

**Excel, not a new app.** The team already works in a spreadsheet. A new tool to learn would have been ignored.

**Your edits always win.** If someone changed a status or added a note by hand, the automation leaves it alone and only adds what's new.

**Nothing is ever deleted.** A possible duplicate is flagged, not removed, so a wrong guess costs a glance, not a lost lead.

## The result

The week's leads, filed and visible, without anyone typing them in. 156 automated checks passed, each confirming one step works. Three manual steps removed, one tracker the whole team reads, zero leads typed in by hand.

## Honest limits

These results come from automated tests on sample data. Everything shown uses sample leads, not real client data — the sample week had 24 new leads, 11 contacted and 5 won. The next step is running it on a real inbox, where the messiness is the point.
