---
layout: article
title: Forking Projects
read_time: 4 minutes
updated_at: Jan 23, 2014
icon: repo-forked
title_sha: b6933dc4ddce5382fb99d0e411ec046fe27ea921
survey_tag: 'project-forking-1'

summary: Ever find a project on GitHub that you want to work on? Find out how you can contribute with Forking.
---
<a id="contributing" title="Contributing to a project" class="toc-item"></a>
After using GitHub by yourself for a while, you may find yourself wanting to contribute to someone else's project, or would like to use someone's project as the starting point for your own. This process is known as "forking."

Creating a "fork" is producing a personal copy of someone else's code. Forks are attached to the original repository, so you can always submit a Pull Request to help make other people's projects better. Forking is at the core of social coding at GitHub. 

For this tutorial, we'll be using [the Spoon-Knife project](https://github.com/octocat/Spoon-Knife), a test repository that's hosted on GitHub.com and managed by the staff.

<a id="step-1" title="Step 1: Fork the repository" class="toc-item"></a>
## Step 1: Fork the repository

To fork the Spoon-Knife, click the **Fork** button in the GitHub.com repository.

![A repository's fork button](https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png)

You'll be asked where you want to fork this repository. Click on the gravatar that represents your beautiful face, then sit back and watch the forking magic.

<a id="step-2" title="Step 2: Clone your fork" class="toc-item"></a>
## Step 2: Clone your fork

You've successfully forked the Spoon-Knife repository, but so far, it only exists on GitHub. To be able to work on the project, you will need to clone it to your computer.

If you're using [the GitHub for Desktop](http://guides.github.com/overviews/desktop) application, this process is a breeze. Under the **GitHub.com** title in the sidebar, click on your beautiful face once more, and start typing out the name "Spoon-Knife." You'll notice a button that says **Clone to Computer**, which you should click to download the repository.

![Clone to computer button in GHfM](https://github-images.s3.amazonaws.com/mac/sync/ghfm_clone_repo_locally.png)

<a id="step-3" title="Step 3: Making and pushing changes" class="toc-item"></a>
## Step 3: Making and pushing changes

Go ahead and make a few changes to the project. Maybe you'll find a typo. Maybe you'll want to [practice some new Markdown](http://guides.github.com/overviews/mastering-markdown/). Maybe you'll add a new file.

When you're ready to submit your changes, type up a *commit summary*, and click **Commit**.

![GHfM commit changes view](https://github-images.s3.amazonaws.com/mac/changes/changes-view-20130108-143933.jpg)

Right now, you've essentially told Git, "Okay, I've taken a snapshot of my changes!" You can continue to make more changes, and take more commit snapshots. When you're ready to push your code onto GitHub.com, click on the **Sync** button, which is right above your list of changes.

<a id="step-4" title="Step 4: Making a Pull Request" class="toc-item"></a>
## Step 4: Making a Pull Request

At last, you're ready to propose changes into the main project! This is the final step in producing a fork of someone else's code, and arguably the most important. If you've made a change that you feel would benefit the community as a whole, you should definitely consider contributing back.

To do so, head on over to the repository on GitHub.com where your code lives. For this example, it would be at `https://www.github.com/<your_username>/Spoon-Knife`. You'll see a banner indicating that you've recently pushed a new branch, and that you can submit this branch "upstream," to the original repository:

![Recently pushed branch banner](https://github-images.s3.amazonaws.com/help/pull_requests/recently_pushed_branch.png)

Clicking on **Compare and Pull Request** sends you to a discussion page, where you can enter a title and optional description. It's important to provide as much useful information and a rationale for *why* you're making this Pull Request in the first place. The project owner needs to be able to determine whether your change is as useful to everyone as you think it is.

When you're ready typing out your heartfelt argument, click on **Send pull request**. You're done!

![Send Pull Request button](https://github-images.s3.amazonaws.com/help/pull_requests/pullrequest-send.png)

Don't be offended if the project owner rejects your pull request, or asks for more information on why it's been made. Pull Requests are an area for discussion, with code. It may be that the project owner chooses not to merge your pull request, and that's totally okay. Your copy will exist in infamy on the Internet. And who knows--maybe someone you've never met will find your changes much more valuable than the original project. Share and share alike!

