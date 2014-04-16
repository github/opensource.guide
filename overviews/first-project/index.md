---
layout: article
title: Your First GitHub Project
read_time: 10 minutes
updated_at: April, 2014
icon: 
survey_tag: 'pull-requests-1'

summary: Learn how to GitHub with this tutorial guide that will walk you through creating a repository, branching, making changes, and open a Pull Request.

---

Technically, GitHub is a platform for hosting and collaborating on projects. You don't have to worry about losing data on your hard drive or managing a project across multiple computers. Pull your code down from anywhere on any machine. More importantly, GitHub is a way of working that helps make you more awesome at developing software.

This tutorial guide will teach you how to:

- Create a repository
- Start a new branch
- Make a commit
- Open and merge a Pull Request

We're going to complete the tasks in this tutorial using GitHub's UI, so you don't have to know the command line or even how to code. It will be helpful if you keep this Guide open in its own tab, so you can navigate back to it throughout the tutorial.

## Create a Repository

Whether you're a beginner or a pro writing Python, HTML, or Markdown, getting your first project onto GitHub is the best way to learn how the platform works.

Seeing is believing, so let's get started by creating your first repository on GitHub with a README.

#### Your turn:

- **Step 1.** Create a repository](http://github.com/new)
- **Step 2.** Give your repository a name (ex. octostories)
- **Step 3.** Write a short description (ex. A website for stories about Octocats)
- **Step 4.** Select Initialize this repository with a README

Once you've created a repository with a README, you're ready to move onto branching.

---

> **Tip**: If you're feeling adventurous, move an existing project over to GitHub with the command line, GitHub apps, or by using the web UI. We've written a [guide](https://guides.github.com/overviews/desktop/) that will help you out.

## Start a new branch

When working on a project, you might have different features or ideas in progress at anytime. **Branching** is a technique that allows you to create an environment where you can try out ideas without breaking the main project.

By creating a branch, you're making a copy of the original project as it was at that point in time (like a photo snapshot). If the original branch changes while you're working on your new branch, no worries, you can always pull in those updates.

At GitHub, our developers, writers, and designers use branches for keeping bug fixes and feature work separate from our master (production) branch.

#### Your turn:

- **Step 1.** Go to your new repository. 
- **Step 2.** Click the `+` next to the repository name.

![screen shot 2014-03-18 at 4 44 58 pm](https://f.cloud.github.com/assets/1305617/2455079/5dce4350-aef7-11e3-8ae5-5f7fa3156e33.png)

- **Step 3.** Give your branch a name (ex. feature-branch).

Look closely at this animation we made you - it shows you how to create a branch named feature-branch from the Branch drop-down menu. Nice and quick!

![create-branch](https://f.cloud.github.com/assets/1305617/2464531/1e564384-af98-11e3-8e93-002a1d206e17.gif)

Once you've created a branch, you're ready to move onto making a commit.

## Make a commit

On GitHub, edits are called commits. Commits are pretty glorious, because they create a history of your work that people can follow to understand what you've done and why. 

Each commit has an associated commit message, which is a description explaining why a particular change was made.

#### Your turn:

- **Step 1.** Go to your 'feature-branch' and click "edit" on the README.
- **Step 2.** Add some copy to your README file.
- **Step 3.** Write a commit message that describes what you've done and why.

![screen shot 2014-03-18 at 9 37 09 pm](https://f.cloud.github.com/assets/32535/2455775/0c325eae-af07-11e3-8e34-06aacf70c75a.png)

- **Step 4.** Commit your changes.

![screen shot 2014-03-18 at 9 37 59 pm](https://f.cloud.github.com/assets/32535/2455777/2267bfe8-af07-11e3-9711-c9babcf03355.png) |

Once you've made a commit and have changes on a branch, you're ready to open a Pull Request.

## Open a Pull Request

Pull Requests are the heart of collaboration on GitHub. People use Pull Requests to start a discussion about commits (code review). When you make a pull request, you're proposing a change with your edits and requesting that someone pull in your contribution.

You can open a Pull Request at any point during the development process: when you have little or no code but want to share some screenshots or ideas about your proposal for feedback, when you're stuck and need help or advice from your team members, or when you're ready for someone to review your work.

By using GitHub's [@mention system](https://github.com/blog/821-mention-somebody-they-re-notified) in your Pull Request message, you can ask for feedback from specific people or teams, whether they're down the hall or 10 time zones away.

#### Your turn:

- **Step 1.** To create a pull request, click the Pull Requests icon on the sidebar, then from the Pull Request page, click green "Create pull request" button.

![create pr](https://cloud.githubusercontent.com/assets/1305617/2543808/73059f0a-b5f7-11e3-928e-745e9f9a5c75.gif) |

- **Step 2.** Select the branch you made, `feature-branch`, to compare with `master` (the original).

![screen shot 2014-03-13 at 2 42 27 pm](https://f.cloud.github.com/assets/1305617/2415666/788fc32e-aaf8-11e3-817c-16b958e31bb6.png)

- **Step 3.** The next page is the Compare page which displays the files that have changed between the two different branches.

- **Step 4.** Look over your changes to make sure they're what you want to submit.

![create pr](https://cloud.githubusercontent.com/assets/1305617/2543868/2a6036d8-b5f8-11e3-8d03-093bfcfadc75.gif) |

- **Step 5.** When you're satisfied that these are the changes you want to submit, click the big green 'Send pull request' button.

![create-pull](https://f.cloud.github.com/assets/1305617/2415719/f38aa210-aaf8-11e3-80dc-aad14be6be95.png)

- **Step 6.** Give your pull request a title that briefly describes the changes you're proposing, e.g. "Update README." Then describe in more detail what you've changed, how, and why. If you're fixing a bug, describe how to recreate the original error. If you're feeling fancy, you can write in Markdown, drag in images from your computer, or express your emotion with some emoji. :boom:

When you're done with your message, click 'Send Pull Request'!

---

> **Tip**: When a branch contains recent changes, GitHub provides a link to start a pull request on the code view. From here click the green **Compare** button next to the Branches drop-down menu.

> **Tip**: If a pull request fixes, or "closes", an open issue, include the issue number in the pull request title. When the pull request is merged, GitHub will automatically close the issue!

## Merge your Pull Request

It's time to bring your changes together.

- **Step 1.** Click the green button to merge your changes from 'feature' into `master`.

- **Step 2.** Go ahead and delete the branch, which will keep your repository nice and tidy.

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