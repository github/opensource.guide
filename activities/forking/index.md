---
layout: article
title: Forking Projects
read_time: 4 minutes
updated_at: Jan 23, 2014
icon: repo-forked
survey_tag: 'project-forking-1'

summary: Ever find a project on GitHub that you want to work on? Find out how you can contribute with Forking.

redirect_from:
  - /overviews/forking/index.html
---
<a id="contributing" title="Contributing to a project" class="toc-item"></a>
After using GitHub by yourself for a while, you may find yourself wanting to contribute to someone else's project. Or maybe you'd like to use someone's project as the starting point for your own. This process is known as *forking.*

Creating a "fork" is producing a personal copy of someone else's project. Forks act as a sort of bridge between the original repository and your personal copy. You can submit *Pull Requests* to help make other people's projects better by offering your changes up to the original project. Forking is at the core of social coding at GitHub.

For this tutorial, we'll be using [the Spoon-Knife project](https://github.com/octocat/Spoon-Knife), a test repository that's hosted on GitHub.com that lets you test the Pull Request workflow.

<a id="fork" title="Fork the repository" class="toc-item"></a>
## Fork the repository

To fork the Spoon-Knife repository, click the **Fork** button in the header of the repository.

![A repository's fork button](https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png)

Sit back and watch the forking magic. When it's finished, you'll be taken to your copy of the Spoon-Knife repository.

<a id="clone" title="Clone your fork" class="toc-item"></a>
## Clone your fork

You've successfully forked the Spoon-Knife repository, but so far, it only exists on GitHub. To be able to work on the project, you will need to clone it to your computer.

If you're using [the GitHub for Desktop](http://guides.github.com/introduction/desktop) application, this process is a breeze. Under the **GitHub.com** title in the sidebar, click on your beautiful face, and start typing out the name "Spoon-Knife." You'll notice a button that says **Clone to Computer**. Clicking on this clones the repository to your computer.

![Clone in Desktop](clone-in-desktop.png)

<a id="making-changes" title="Making and pushing changes" class="toc-item"></a>
## Making and pushing changes

Go ahead and make a few changes to the project using your favorite text editor, like [Notepad++](http://www.notepad-plus-plus.org/) or [Sublime Text](http://www.sublimetext.com/). You could, for example, change the text in *index.html* to add your GitHub username.

When you're ready to submit your changes, type up a *commit summary* in GitHub for Desktop, and click **Commit**.

![GHfM commit changes view](https://github-images.s3.amazonaws.com/mac/changes/changes-view-20130108-143933.jpg)

Right now, you've essentially told Git, "Okay, I've taken a snapshot of my changes!" You can continue to make more changes, and take more commit snapshots. When you're ready to push your changes up to GitHub.com, click on the **Sync** button, which is right above your list of changes.

<a id="making-a-pull-request" title="Making a Pull Request" class="toc-item"></a>
## Making a Pull Request

At last, you're ready to propose changes into the main project! This is the final step in producing a fork of someone else's project, and arguably the most important. If you've made a change that you feel would benefit the community as a whole, you should definitely consider contributing back.

To do so, head on over to the repository on GitHub.com where your project lives. For this example, it would be at `https://www.github.com/<your_username>/Spoon-Knife`. You'll see a banner indicating that you've recently pushed a new branch, and that you can submit this branch "upstream," to the original repository:

![Recently pushed branch banner](https://github-images.s3.amazonaws.com/help/pull_requests/recently_pushed_branch.png)

Clicking on **Compare and Pull Request** sends you to a discussion page, where you can enter a title and optional description. It's important to provide as much useful information and a rationale for *why* you're making this Pull Request in the first place. The project owner needs to be able to determine whether your change is as useful to everyone as you think it is.

When you're ready typing out your heartfelt argument, click on **Send pull request**. You're done!

![Send Pull Request button](https://github-images.s3.amazonaws.com/help/pull_requests/pullrequest-send.png)

Pull Requests are an area for discussion. In this case, the Octocat is very busy, and probably won't merge your changes. For other projects, don't be offended if the project owner rejects your Pull Request, or asks for more information on why it's been made. It may even be that the project owner chooses not to merge your pull request, and that's totally okay. Your copy will exist in infamy on the Internet. And who knows--maybe someone you've never met will find your changes much more valuable than the original project. Share and share alike!

<a id="huzzah" title="Huzzah!" class="toc-item"></a>
## Huzzah!

You've successfuly forked and contributed back to a repository. Go forth, and
contribute some more!
