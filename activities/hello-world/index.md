---
layout: article
title: Hello World
read_time: 10 minute
updated_at: April 7, 2016
icon: globe
survey_tag: 'hello-world-1'

summary: The easiest way to get started with GitHub. In this guide you'll complete a time honored "Hello World" exercise, and learn GitHub essentials.

---
<a id="intro" title="Intro" class="toc-item"></a>

The **Hello World** project is a time-honored tradition in computer programming. It is a simple exercise that gets you started when learning something new. Let's get started with GitHub!

**You'll learn how to:**

* Create and use a repository
* Start and manage a new branch
* Make changes to a file and push them to GitHub as commits
* Open and merge a pull request

<a id="what" title="What is GitHub?" class="toc-item"></a>

## What is GitHub?

GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

This tutorial teaches you GitHub essentials like *repositories*, *branches*, *commits*, and *Pull Requests*. You'll create your own Hello World repository and learn GitHub's Pull Request workflow, a popular way to create and review code.

#### No coding necessary

To complete this tutorial, you need a [GitHub.com account](http://github.com) and Internet access. You don't need to know how to code, use the command line, or install Git (the version control software GitHub is built on).

> **Tip:** Open this guide in a separate browser window (or tab) so you can see it while you complete the steps in the tutorial.

<a id="repository" title="Create a Repository" class="toc-item"></a>

## Step 1. Create a Repository

A **repository** is usually used to organize a single project. Repositories can contain folders and files, images, videos, spreadsheets, and data sets -- anything your project needs. We recommend including a *README*, or a file with information about your project. GitHub makes it easy to add one at the same time you create your new repository. _It also offers other common options such as a license file._

Your `hello-world` repository can be a place where you store ideas, resources, or even share and discuss things with others.

### To create a new repository

1. In the upper right corner, next to your avatar or identicon, click <span class="octicon octicon-plus"></span> and then select **New repository**.
2. Name your repository `hello-world`.
3. Write a short description.
4. Select **Initialize this repository with a README**.

![new-repo-form](create-new-repo.png)

Click **Create repository**. :tada:

<a id="branch" title="Create a Branch" class="toc-item"></a>

## Step 2. Create a Branch

**Branching** is the way to work on different versions of a repository at one time.

By default your repository has one branch named `master` which is considered to be the definitive branch. We use branches to experiment and make edits before committing them to `master`.

When you create a branch off the `master` branch, you're making a copy, or snapshot, of `master` as it was at that point in time. If someone else made changes to the `master` branch while you were working on your branch, you could pull in those updates.

This diagram shows:

* The `master` branch
* A new branch called `feature` (because we're doing 'feature work' on this branch)
* The journey that `feature` takes before it's merged into `master`

![a branch](branching.png)

Have you ever saved different versions of a file? Something like:

* `story.txt`
* `story-joe-edit.txt`
* `story-joe-edit-reviewed.txt`

Branches accomplish similar goals in GitHub repositories.

Here at GitHub, our developers, writers, and designers use branches for keeping bug fixes and feature work separate from our `master` (production) branch. When a change is ready, they merge their branch into `master`.

### To create a new branch

1. Go to your new repository `hello-world`.
2. Click the drop down at the top of the file list that says **branch: master**.
3. Type a branch name, `readme-edits`, into the new branch text box.
4. Select the blue **Create branch** box or hit "Enter" on your keyboard.

![branch gif](readme-edits.gif)

Now you have two branches, `master` and `readme-edits`. They look exactly the same, but not for long! Next we'll add our changes to the new branch.

<a id="commit" title="Make a Commit" class="toc-item"></a>

## Step 3. Make and commit changes

Bravo! Now, you're on the code view for your `readme-edits` branch, which is a copy of `master`. Let's make some edits.

On GitHub, saved changes are called *commits*. Each commit has an associated *commit message*, which is a description explaining why a particular change was made. Commit messages capture the history of your changes, so other contributors can understand what you’ve done and why.

#### Make and commit changes

1. Click the `README.md` file.
2. Click the <span class="octicon octicon-pencil"></span> pencil icon in the upper right corner of the file view to edit.
3. In the editor, write a bit about yourself.
4. Write a commit message that describes your changes.
5. Click **Commit changes** button.

![commit](commit.png)

These changes will be made to just the README file on your `readme-edits` branch, so now this branch contains content that's different from `master`.

<a id="pr" title="Open a Pull Request" class="toc-item"></a>

## Step 4. Open a Pull Request

Nice edits! Now that you have changes in a branch off of `master`, you can open a *pull request*.

Pull Requests are the heart of collaboration on GitHub. When you open a *pull request*, you're proposing your changes and requesting that someone review and pull in your contribution and merge them into their branch. Pull requests show *diffs*, or differences, of the content from both branches. The changes, additions, and subtractions are shown in green and red.

As soon as you make a commit, you can open a pull request and start a discussion, even before the code is finished.

By using GitHub's [@mention system](https://help.github.com/articles/about-writing-and-formatting-on-github/#text-formatting-toolbar) in your pull request message, you can ask for feedback from specific people or teams, whether they're down the hall or 10 time zones away.

You can even open pull requests in your own repository and merge them yourself. It's a great way to learn the GitHub Flow before working on larger projects.

#### Open a Pull Request for changes to the README

_Click on the image for a larger version_

| Step | Screenshot |
| --- | --- |
| Click the <span class="octicon octicon-git-pull-request"></span> **Pull Request** tab, then from the Pull Request page, click the green **New pull request** button. | ![pr-tab](pr-tab.gif) |
| Select the branch you made, `readme-edits`, to compare with `master` (the original). | [![branch](pick-branch.png)](pick-branch.png) |
| Look over your changes in the diffs on the Compare page, make sure they're what you want to submit. | [![diff](diff.png)](diff.png) |
| When you're satisfied that these are the changes you want to submit, click the big green **Create Pull Request** button. | [![create-pull](create-pr.png)](create-pr.png) |
| Give your pull request a title and write a brief description of your changes. | ![pr-form](pr-form.png)

When you're done with your message, click **Create pull request**!

---

> **Tip**: You can use [emoji](https://help.github.com/articles/basic-writing-and-formatting-syntax/#using-emoji) and [drag and drop images and gifs](https://help.github.com/articles/file-attachments-on-issues-and-pull-requests/) onto comments and Pull Requests.

<a id="merge" title="Merge Pull Request" class="toc-item"></a>

## Step 5. Merge your Pull Request

In this final step, it's time to bring your changes together -- merging your `readme-edits` branch into the `master` branch.

1. Click the green **Merge pull request** button to merge the changes into `master`.
2. Click **Confirm merge**.
2. Go ahead and delete the branch, since its changes have been incorporated, with the **Delete branch** button in the purple box.

![merge](merge-button.png)
![delete](delete-button.png)

### Celebrate!

By completing this tutorial, you've learned to create a project and make a pull request on GitHub! :tada: :octocat: :zap:

Here's what you accomplished in this tutorial:

* Created an open source repository
* Started and managed a new branch
* Changed a file and committed those changes to GitHub
* Opened and merged a Pull Request

Take a look at your GitHub profile and you'll see your new [contribution squares](https://help.github.com/articles/viewing-contributions)!

If you want to learn more about the power of Pull Requests, we recommend reading the [GitHub Flow Guide](http://guides.github.com/overviews/flow/). You might also visit [GitHub Explore](http://github.com/explore) and get involved in an Open Source project :octocat:

---

> **Tip**: Check out our other [Guides](http://guides.github.com) and [YouTube Channel](http://youtube.com/githubguides) for more GitHub how-tos.
