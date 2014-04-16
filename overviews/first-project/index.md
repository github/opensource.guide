---
layout: article
title: Hello World
read_time: 10 minutes
updated_at: April, 2014
icon: repo
survey_tag: 'pull-requests-1'

summary: Learn how to GitHub with this guide that will walk you through creating a repository, branching, making changes, and opening a Pull Request.

---

The `hello-world` project is a time honored tradition in computer programming. It is a simple exercise that gets your started, let's get started GitHubbing. 

GitHub is a platform for hosting and collaborating on projects. You don't have to worry about losing data on your hard drive or managing a project across multiple computers -- sync from anywhere. Most importantly, GitHub is a way of working that helps make you more awesome at developing software.

This guide walks you through the GitHub Essentials:

- Create a repository
- Start a new branch
- Make a commit
- Open and merge a Pull Request
- Open an Issue

With these skills, you'll go far. And with this hello-world repository you'll have a place to store ideas (aka future repositories), resources or other general notes, even discuss things with others. 

We're going to complete the tasks in this tutorial using GitHub's UI, so you don't have to know the command line or even install Git (which is the change-tracking software GitHub is built on). You don't even need to know how to code. You will, however, need a GitHub account, so sign up if you don't have one!

> probably they do if they're getting the email, but if this lives on Guides, maybe we should include that last line

Pro Tip: Keep this guide open in its own tab in your browser, so you can navigate back to it throughout the tutorial.

## Create a Repository

A repository is the basic unit of GitHub, most comonly a single project. They can contain folders and files -- whatever your project needs. Because most repositories contain a README, a file explaining the project, GitHub makes that an option with new repositories. _It also offers other common options such as a license file, but we can skip that for now._

### To create a new repository

1. Click the `+` icon or go directly to the [new repository page](http://github.com/new)
2. Name your repository "hello-world"
3. Write a short description
4. Select Initialize this repository with a README

![new-repo-form](create-new-repo.png)

Click 'Create repository'. :boom: repository!

---

## Create a new Branch

When you create a repository, by default it has one branch with the name 'master'. You could keep working on this branch and have only one, that's fine. But if you have another feature or idea you want to work on, you can create another branch, starting from 'master', so that you can leave 'master' in its working state.

When you create a branch, you're making a copy of the original branch as it was at that point in time (like a photo snapshot). If the original branch changes while you're working on your new branch, no worries, you can always pull in those updates. 

You may have, at some point in your life, saved different versions of a file like, "story.txt", "story-joe-edit.txt", "story-sue-edit.txt". Branches accomplish the same goals but are easier to manage on GitHub repositories. 

At GitHub, our developers, writers, and designers use branches for keeping bug fixes and feature work separate from our 'master' (production) branch. When a feature or fix is ready, the branch is merged into 'master'. 

### To create a new branch

1. Go to your new repository, hello-world. 
2. Click the drop down at the top of the file list that says 'branch: master'
3. Type a branch name, 'readme-changes', into the new branch text box
4. Select the blue 'Creat branch' box or hit 'Enter'

Now you've got two branches, 'master' and 'readme-changes'. They look exactly the same, but not for long! Next we'll add our changes to the new branch.

## Make a commit

On GitHub, saved changes are called commits. Commits are pretty glorious, because a bunch of them together read like the history of your work.

Each commit has an associated commit message, which is a description explaining why a particular change was made. Thanks to these messages, you and others can read through commits and understand what you've done and why. 

You should still be on the code view for your 'readme-changes' branch.

#### To commit changes

1. Click the README file.
2. Click 'Edit'
3. In the editor, write some text, tell us a bit about yourself.
4. Write a commit message that describes your changes.

![screen shot 2014-03-18 at 9 37 09 pm](https://f.cloud.github.com/assets/32535/2455775/0c325eae-af07-11e3-8e34-06aacf70c75a.png)

Click 'Commit your changes'. Now these changes have been made to the README file on your 'readme-changes' branch and now this branch contains different content and comments than 'master' (as it should!).

## Open a Pull Request

Pull Requests are the heart of collaboration on GitHub. When you make a pull request, you're proposing your changes and requesting that someone pull in your contribution - aka merge them into their branch. GitHub's Pull Request feature allows you to compare the content on two branches. The changes, addtions and substractions, are show in read and green and called diffs (differences).

As soon as you make a change, you can open a Pull Request. People use Pull Requests to start a discussion about commits (code review) even before the code is finished. This way you can get feedback as you go or help to get un-stuck. 

By using GitHub's [@mention system](https://github.com/blog/821-mention-somebody-they-re-notified) in your Pull Request message, you can ask for feedback from specific people or teams, whether they're down the hall or 10 time zones away.

You can even do, as we're doing here, a Pull Request in your own repository and merge it yourself. It's a great way to learn to process before doing it on larger projects. 

#### Create a Pull Request for changes to the README:

1. Click the Pull Requests icon on the sidebar, then from the Pull Request page, click green "Create pull request" button.

![create pr](https://cloud.githubusercontent.com/assets/1305617/2543808/73059f0a-b5f7-11e3-928e-745e9f9a5c75.gif) |

2. Select the branch you made, `readme-edits`, to compare with `master` (the original).

![screen shot 2014-03-13 at 2 42 27 pm](https://f.cloud.github.com/assets/1305617/2415666/788fc32e-aaf8-11e3-817c-16b958e31bb6.png)

3. Look over your changes in the diffs on the Compare page, make sure they're what you want to submit.

![create pr](https://cloud.githubusercontent.com/assets/1305617/2543868/2a6036d8-b5f8-11e3-8d03-093bfcfadc75.gif) |

4. When you're satisfied that these are the changes you want to submit, click the big green 'Send pull request' button.

![create-pull](https://f.cloud.github.com/assets/1305617/2415719/f38aa210-aaf8-11e3-80dc-aad14be6be95.png)

5. Give your pull request a title that briefly describes the changes you're proposing, e.g. "Update README." Then describe in more detail what you've changed, how, and why. If you're fixing a bug, describe how to recreate the original error. If you're feeling fancy, you can write in Markdown, drag in images from your computer, or express your emotion with some emoji. :boom:

When you're done with your message, click 'Send Pull Request'!

---

> **Tip**: When a branch contains recent changes, GitHub provides a link to start a pull request on the code view. From here click the green **Compare** button next to the Branches drop-down menu.

> **Tip**: If a pull request fixes, or "closes", an open issue, include the issue number in the pull request title. When the pull request is merged, GitHub will automatically close the issue!

## Merge your Pull Request

It's time to bring your changes together -- merge your 'readme-edits' branch into the 'master' branch.

1. Click the green button to merge the changes into 'master'.
2. Go ahead and delete the branch (the purple button) since its changes have been incorporated.

### Celebrate!

You've learned to make a pull request on GitHub! :tada: :octocat: :zap: 

For your humblebrag, here are the things you accomplished in this tutorial:

* [x] Navigate the Code page
* [x] Navigate the Pull Request page
* [x] Create a branch
* [x] Create a new file
* [x] Commit changes
* [x] Compare your changes against `master`
* [x] Open a Pull Request
* [x] Merge a Pull Request
* [x] Delete a merged branch

If you want to learn more about the power of pull requests, we recommend reading the [GitHub Flow Guide](http://guides.github.com/overviews/flow/). You might also visit [GitHub Explore](http://github.com/explore) and get involved in an Open Source project :octocat:

---

> **Tip**: Check out our [Guides](http://guides.github.com) and [YouTube Channel](http://youtube.com/githubguides) for more GitHub how-tos.