---
layout: article
title: Issues and notifications
read_time: 5 minute
updated_at: Aug 3, 2013
---

<a id="intro" title="Intro" class="toc-item"></a>
Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. Issues on public repositories can be seen and created by anyone with a GitHub account, but issues on private repositories can only be seen and created by those with access to the repository.

What makes GitHub's issue tracking special is our focus on collaboration, references, and excellent text formatting. A typical issue on GitHub looks a bit like this:

![](http://cl.ly/image/3Y3z1v3A020T/Image%202013-08-08%20at%203.59.07%20PM.png)

* **Title & Description** — Text based fields to describe what the issue is all about.

* **Labels** — These are color coded tags to apply to your issues to help categorize and filter the list of issues later. If you’ve used Gmail, these are similar to Gmail’s labels.

* **Milestone** — These are buckets of issues, useful for coordinating phases of projects (ex: *Weekly Sprint 9/5-9/16* or *Shipping 1.0*).

* **Assignee** — One person that’s responsible or working on this issue at any given time.

* **Comments** — Anyone with access to the repository can comment on  issues to weigh in on the process.

<a id="notifications" title="Notifications, @mentions, and references" class="toc-item"></a>

## Notifications, @mentions, and references

By using @mentions and references inside of Issues, you can notify other GitHub users & teams, and cross-connect issues to each other. These provide a flexible way to get the right people involved to resolve issues effectively, and are easy to learn and use. They work across all text fields on GitHub — they're a part of our text formatting syntax called **GitHub Flavored Markdown**.

![](http://cl.ly/image/0u422037413i/Image%202013-08-08%20at%204.33.12%20PM.png)

### Notifications

[Notifications](https://github.com/notifications) are GitHub’s way to keep up to date with your Issues. You can use them to find out about new issues on repositories, or just to know when someone needs your input to move forward on an issue. 

There are two ways to receive notifications: via email, and via the web. You can configure how you receive notifications [in your settings](https://github.com/settings/notifications). I like to recommend that you receive web + email notifications for **Participating** and web notifications for **Watching**.

![](http://cl.ly/image/3Y3S1b3M0h2U/content)

With these settings, you receive emails when people specifically mention you, then visit the web-based interface to keep up to date with repositories you're interested in.

You can access your notifications through the [notifications](/notifications) screen. This screen is nice for scanning many notifications at once and marking them as read or muting the thread. Try using keyboard shortcuts to speed up your workflow here — press `?` on the page to see which shortcuts are available.

![](http://cl.ly/image/1V1J0N0l1H2v/content)

Muted threads won’t show up as unread again until you are specifically @mentioned again. This makes muting a great strategy for threads that you have little interest in (perhaps a sub-system that you aren’t familiar with). If you mark an issue as read, it will stay that way until someone comments on the thread again.

GitHub also syncs read/unread status for notifications — if you read a notification in your email client, it will be marked as read in the web-based interface (make sure you allow your email client to display images if you’d like this functionality).

### @mentions

@mentions are the way that we reference other GitHub users inside of GitHub issues. Inside of the description or any comment of the issue, include the @username of another GitHub user to send them a notification. This works very similar to how Twitter uses @mentions.

We like to use the `/cc` syntax (an abbreviation for carbon copy) to include people in issues:

> It looks like the new widget form is broken on Safari. When I try and create the widget, Safari crashes. This is reproducible on 10.8, but not 10.9. Maybe a browser bug?
>
> /cc @kneath @jresig

This works great if you know the specific users to include, but many times we’re working across teams and don’t really know who might be able to help us. @mentions also work for Teams within your GitHub organization. If you create a Team called *browser-bugs* under the @acmeinc organization, you can reference the team with @mentions:

> /cc @acmeinc/browser-bugs

This will send notifications to every member of the browser-bugs team.

### References

Often times issues are dependent on other issues, or at least relate to them and you'd like to connect the two. The easiest way to reference another issue is to just type in the issue number:

> Hey @kneath, I think the problem started in #42

When you do this, we'll create an event inside of issue #42 that looks something like this:

![](http://cl.ly/image/1J2g0I0N3l0V/Image%202013-08-08%20at%204.47.08%20PM.png)

Issue in another repository? Just include the repository before the name like `kneath/example-project#42`. You can also reference issues from commits if you like. Include the issue number inside of the commit message.

![](http://cl.ly/image/3U2o202e1a1Q/Image%202013-08-08%20at%204.50.34%20PM.png) 

By prefacing your commits with "Fixes", "Fixed", "Fix", "Closes", "Closed", or "Close" when the commit is merged into master, it will also automatically close the issue.

References make it possible to deeply connect the work being done with the bug being tracked, and are a great way to add visibility into the history of your project.

<a id="filtering" title="Filters &amp; Milestones" class="toc-item"></a>

## Filters & Milestones

### Milestones

### Assignees

### Search

<a id="overviews" title="Overviews &amp; Reports" class="toc-item"></a>

## Overviews & Reports

### Pulse

### The Issue Dashboard

<a id="uses" title="Uses for Issues" class="toc-item"></a>

## Uses for Issues

* https://github.com/frabcus/house/issues?labels=building&state=open