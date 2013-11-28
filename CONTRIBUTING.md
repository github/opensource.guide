# Guide for Guides
Welcome to the Guide for Guides!

## How do I help?
We want everyone to feel okay with contributing to anything. Check out the [issues page](https://github.com/github/guides/issues) to see some issues to contribute to. If there's nothing there that piques your interest, you should help us write a guide!

## Working on your laptop
If you want to write code, or write a guide, let's start out with that code on your laptop!

1. Grab the repository: `git clone https://github.com/github/guides`
2. Create a feature branch: `git checkout -b MY-FEATURE`
3. Write your content, fix syntax, add new styles, whatever your change is.
4. When you're ready to get review: `git push -u origin HEAD`
5. Open your pull request and start the conversation

## How should I go about writing a Guide?
Not all of us are wordsmiths, but that's why we're in this together. If there's something you've
stumbled upon that you think should be a guide, follow the steps above to get the repository down
on your computer locally and start writing content.

If there isn't a category folder for your file yet, don't fret. Either create one you think is good,
or don't worry about it. We can suss this out in the pull request. Once you create your file, there's one
important thing to do first: yaml front matter.

```
---
layout: article
title: Mastering Issues & Notifications
read_time: 7 minute
updated_at: Aug 9, 2013
icon: issue-closed
title_sha: d145998e941f058151cadcc7489275a8bb5d31d5
survey_tag: 'issues-1'

summary: GitHub is great for managing all of the information <em>around</em> the code. This guide helps explain our issue tracking system and how to keep up to date with issues you’ve participated in.
---
```

** layout ** All guides are going to have a layout of article.
** title ** Pick any title you want here.
** read_time ** A good estimate for this is to take the word count and divide by 200.
** updated_at ** As you make edits to a guide, make sure this gets updated as well. It'll present itself at the bottom of the guide.
** icon ** This is the name of the icon you want to show up. Take a look at our [icon styleguide page](https://github.com/styleguide/icons) for more icons.
** title_sha ** This one is a little tricky. Currently we're taking the title and pasting it into [this sha1 generating tool](http://www.tools4noobs.com/online_php_functions/sha1/) to get the sha1 back.
** survey_tag ** Create a unique tag for this guide for survey feedback.
** Summary ** What short description would you want people to read when looking at this on the front page?

