---
layout: article
title: Getting Started with GitHub Pages
read_time: 10 minute
updated_at: Dec 1, 2013
icon: file-text
survey_tag: 'pages-automatic-generators'

summary: GitHub Pages are a great way to showcase some open source projects, host a blog, or even share your résumé. This guide will help get you started on creating your next website.
---

<a id="intro" title="Intro" class="toc-item"></a>
GitHub Pages are public webpages hosted and easily published through GitHub. The quickest way to get up and running is by using the Automatic Page Generator to create some starter HTML and CSS for us. You can then modify our GitHub Pages' content and style remotely via the web or locally on our computer.

![pages-home-page](pages-home-page.png)

<a id="setup" title="Create Your Website" class="toc-item"></a>

## Create Your Website

Once you've <a href="https://github.com/login" target="_blank">signed in</a>, you'll create a new repository to get started.

![new-repo-button](create-new-repo-button.png)

On the new repository screen, you need to give this repository a special name to generate your website.

![new-repo-screen](create-new-repo-screen.png)

Your website's HTML and CSS will all live in a repository named `username.github.io` (where "username" is your actual GitHub user name). To get an initial set of HTML and CSS, you have to open the Settings tab and enable the Automatic Page Generator

![settings-tab](settings-tab.png)

If you scroll down on the settings page, you should see the **Automatic Page Generator** button near the bottom. By clicking this button, you start the process of generating your content automatically.

![automatic-button](automatic-page-generator.png)

Once you've clicked the button, you'll be directed to the first step of the generation: The Content. You can keep this default content for now and make changes to it later. Let's go ahead and click **Continue to Layouts** at the bottom of the page to continue.

![continue-to-layout](continue-to-layout.png)

Now, you pick your theme. This part requires a bit more thought because it's easier to choose a theme now than to update your theme later. When you've looked at some of the options at the top of the page and found one that you love, click **Publish** to finish.

![pick-your-poison](selection-of-layout-publish.png)

Once you click **Publish**, GitHub does all the work to direct visitors to `username.github.io` to view your new website. This can take up to 10 minutes. After some time has passed, you can open a new tab in your browser to go to your site!

<a id="changes" title="Making Changes" class="toc-item"></a>

## Making Changes

One of the first things you can do is remove the default title of your index page, and add a friendlier message to it. Since this is a very quick change -- and your first one -- you're going to make it on the default branch: `master`.

If you click on the `index.html` file to navigate into that file, you can make edits to it by clicking **Edit**.

![edit-page](edit-index-page.png)

Let's find in this file where it says `username.github.io` and change this to a friendlier title. For the Octocat, I'm going to change it to "Welcome to the Octocat's homepage!". Feel free to do the same, except for your own username. Under this title, you should add a message about the purpose of the page and describe what you want people to do while they're here.

![change-message](welcome-message.png)

After you're done making this small change, scroll to the bottom of the page to make your first commit. You have two places to write about this change: a subject and an extended description. The extended description is optional, so let's leave a descriptive message in the subject.

When you're done, click **Commit Changes** and your change should go live in just a few seconds!

![be-descriptive](commit-messages-matter.png)

<a id="next-steps" title="Next Steps" class="toc-item"></a>

## Next Steps

Just because you've made some changes into your project doesn't mean you should stop! Check out these other guides to learn how to contribute to other projects or perfect the way you work on projects:

- [GitHub Flow] [1]
- [Contributing to Open Source] [2]

[1]: /introduction/flow
[2]: /activities/contributing-to-open-source/
