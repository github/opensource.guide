---
layout: article
title: Kindly Closing Pull Requests
category: producing
credits:
- title: "Kindly Closing Pull Requests"
  attribution: "Mike McQuaid"
  license: "TODO"
  url: "https://github.com/blog/2124-kindly-closing-pull-requests"
---

Getting your first pull request from an outside contributor on GitHub is an exciting experience. Someone cared enough about the problem you were solving to check it out themselves, change something, and contribute that change back to your project. When your project has a relatively small number of high-quality, desirable incoming pull requests it is easy to happily merge them.

Where things can become more difficult is when your project becomes more notable and the quality, desirability, or number of pull requests you receive causes difficulties. Now the positive feeling you had about the time people spent can be reversed; you don't want to reject someone's work when they have already spent the time to get it included.

Let's discuss some common types of pull requests that can be closed and how to do so in a way that encourages positive behavior in your community (rather than discouraging participation).

## Close pull requests you will never accept

Sometimes outside contributors will submit pull requests for changes that you don't want to make to your project. For example, they may submit a feature you consider to be out-of-scope for your project. In this case the best option is to politely explain to users that, although you value their contribution, you are unwilling to accept it and close their pull request. Ideally, also explain to them and in a `CONTRIBUTING.md` file how they can get a better indication in the future on what would or would not be accepted before they begin the work. The github/git-lfs project's `CONTRIBUTING.md` file provides a good explanation of what features might be accepted: https://github.com/github/git-lfs/blob/2cf082fa14a738f73db6d172eba800ca118e6d97/CONTRIBUTING.md#feature-requests

## Close pull requests you cannot accept

Hopefully you have continuous integration set up for your project to test pull requests before they are merged. In some cases, outside contributors may submit a change that breaks continuous integration tests and they may be unable or unwilling to make the changes required for the pull request to be merged. Another situation that can occur is that you request changes be made but the contributor never responds. In this case, it's better to close the pull request after a fair amount of time with no response or fix (e.g. a couple of weeks) and note this policy in a `CONTRIBUTING.md` file (e.g. that merging a pull request requires passing tests). This does not need to be permanent; the contributor can always make more changes and submit another pull request in future.

## Close pull requests on unmaintained projects

You may have created a project to solve a particular problem that you no longer have and open-sourced it just to share it with the community. In this case, consider documenting it in the README that you will not be accepting pull requests and close any that are submitted. Hopefully the clarification of project status in the README means the project will not receive any pull requests. If this is decided when you already have open pull requests: politely close them and explain why.

If your community has enough interest in maintaining the project they may fork it and decide to manage contributions there. A great final thing you can do with your project is to point people to the new project in the README and "bless" it as the new version of your project.

## Close pull requests that turn sour

Discussions on pull requests can sometimes deviate from the original intent of the pull request and may even become unpleasant. In those cases, prioritize care for yourself and your community by closing (and optionally locking) pull requests. The original intent can be dealt with in another pull request.

---

For every pull request it's important to consider the users and maintainers of your project and ask yourself, "would merging this pull request make the project better or worse for them?". If you cannot answer "better" to this question: spend the time to help the outside contributor alter the pull request or submit another pull request for something you would be able to merge. Do not merge pull requests out of guilt for how much work the submitter has put in; you will only regret doing so in the long-term.

Although it's never nice to reject someone's work it's preferable to leaving pull requests open that you will never merge. Those pull requests will just hang over you and the contributor indefinitely. One of the indicators of a healthy project is its responsiveness to contributions, whether it is giving feedback, merging, or closing pull requests.

This post explains some of the reasons why you might want to close pull requests on your project and how to do so. We hope this helps project maintainers and contributors use pull requests to build software more effectively.
