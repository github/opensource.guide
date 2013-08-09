---
layout: article
title: Issues and notifications
read_time: 7 minute
updated_at: Aug 3, 2013
---

<a id="intro" title="Intro" class="toc-item"></a>
Issues are a great way to keep track of tasks, enhancements, and bugs for your projects. Issues on public repositories can be seen and created by anyone with a GitHub account, but issues on private repositories can only be seen and created by those with access to the repository. 

**[Here's an example of Bootstrap's issues section](github.com/twbs/bootstrap/issues).**

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

Once you've collected a lot of issues, you may find it hard to find the ones you care about. We use **milestones**, **assignees**, and **labels** to help filter and categorize issues.

You can change the milestone and assignee through the grey bar at the top of issues, and assign labels on the right hand column.

![](http://cl.ly/image/120i3q0P0528/Image%202013-08-08%20at%206.06.30%20PM.png)

If you don't see edit buttons, that's because you don't have permission to edit the issue — ask the repository owner to add you as a collaborator.

### Milestones

The easiest way to create new milestones is through the editor dropdown. Type in the name of the milestone you want to create and we will offer an option to create a new milestone.

![](http://cl.ly/image/2E2q0j1L3s3D/Image%202013-08-08%20at%206.12.48%20PM.png)

If you'd like to add a due date or extended description, you can  [create a new one in the milestones tab](https://github.com/github/github/issues/milestones/new).

### Assignees

Each issue can have an assignee — one person responsible for moving the issue forward. Assignees are selected the same way milestones are, through the grey bar at the top of the issue.

<a id="search" title="Search" class="toc-item"></a>

## Search

At the very top of each page under the issues section is a search box that allows you to search through issues.

* [All issues mentioning the sidebar](https://github.com/twbs/bootstrap/search?q=sidebar&type=Issues)

* [… that are open](https://github.com/twbs/bootstrap/search?q=sidebar&state=open&type=Issues) (check out the links on the left hand sidebar to filter open/closed)

* [Assigned to @mdo](https://github.com/twbs/bootstrap/search?q=assignee%3Amdo&ref=cmdform&type=Issues)

* [Or search issues throughout all of GitHub by clicking the link in the sidebar](https://github.com/search?q=sidebar&ref=reposearch&state=open&type=Issues)

Visit our [advanced search](https://github.com/search/advanced?q=sidebar&ref=reposearch&state=open&type=Issues) page to learn other ways of searching through issues: using created/updated dates, labels, authors, comment counts, by repository owner, and more.

<a id="overviews" title="Overviews &amp; Reports" class="toc-item"></a>

## Overviews & Reports

Outside of the Issues section, there are two other pages that help summarize what's going on with Issues across your repository and across all of your repositories.

### The Issue Dashboard

If you're looking for a broader listing of all of your issues across many projects, the [Issues Dashboard](https://github.com/dashboard/issues) can be a great tool. The dashboard works very similar to the issues section, but collects issues differently:

* All issues in repositories you own and collaborate on
* Issues assigned to you
* Issues you've created

If you use organizations, each of your organizations has it's own Issues dashboard that separates out Issues within the organization.

### Pulse

Underneath each repository is a section called **Pulse** — Pulse is a snapshot of everything that's happened in the repository in the past week (or day, or past 3 months, etc).

![](http://cl.ly/image/0K3E1e3N1J0q/Image%202013-08-08%20at%207.53.24%20PM.png)

It's a great way to catch up with repositories when you've been away, and don't want the granularity notifications offer when watching a repository.

<a id="uses" title="Uses for Issues" class="toc-item"></a>

## Uses for Issues

Issues are great for tracking all kinds of things — and GitHub is a great place to easily share and collaborate on your issues.  Here's some of our favorites:

* [Bug tracker for you house](https://github.com/frabcus/house/issues?labels=building&state=open) including such gems as *[the door being hung incorrectly](https://github.com/frabcus/house/issues/58)

* [Bug tracker for open source projects](https://github.com/joyent/node/issues)

* [Request for recipes](https://github.com/newmerator/recipes/issues) (maybe you have a good [gluten-free pizza dough recipe?](https://github.com/newmerator/recipes/issues/3)