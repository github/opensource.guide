---
layout: article
full_width: true
title: Understanding the GitHub Flow
read_time: 5 minute
updated_at: Dec 12, 2013
icon: git-branch
survey_tag: 'flow-1'

# optional
pattern: sine_waves
color: "#932d70"
pdf_download: githubflow-online.pdf

summary: GitHub Flow is a lightweight, branch-based workflow that supports teams and projects where deployments are made regularly. This guide explains how and why GitHub Flow works.

redirect_from:
  - /overviews/flow/index.html
---

GitHub Flow is a lightweight, branch-based workflow that supports teams and projects where deployments are made regularly. This guide explains how and why GitHub Flow works.

<script type="text/javascript" src="flow.js"></script>
<link rel="stylesheet" type="text/css" href="flow.css">

<div class="scrollable-diagram js-scrollable-diagram">
  <div class="features-branch-diagram" id="js-features-branch-diagram">
    <svg width="930px" height="350" id="js-features-branch-diagram-svg" xmlns="http://www.w3.org/2000/svg">
      <path d="M66.2711864,5.96363636 C135.523206,5.96363636 143.460673,112 191.02837,112 C238.596067,112 681.049887,112 725.83852,112 C770.627152,112 786.056674,5.95721244 855.110732,5.96363636" id="js-branch-diagram-branch" stroke="#4182C4" stroke-width="4" fill="none"></path>
      <path d="M0,7 L766,7 L920,7" id="js-branch-diagram-master" stroke="#c6d9ed" stroke-width="8"></path>
      <path id="js-branch-diagram-arrow" d="M907.2,10 C910.98,8.95 915.22,8.05 918,7 C914.22,5.95 910.98,5.05 907.2,4" stroke="#c6d9ed" stroke-width="8" fill="none"></path>
    </svg>

    <div class="diagram-icon js-diagram-icon diagram-icon-branch" data-diagram-step="branch">
      <span class="mega-octicon octicon-git-branch"></span>
    </div>
    <div class="diagram-icon-small js-diagram-icon-small diagram-icon-commit-1" data-diagram-step="commits">
      <span class="mega-octicon octicon-git-commit"></span>
    </div>
    <div class="diagram-icon-small js-diagram-icon-small diagram-icon-commit-2" data-diagram-step="commits">
      <span class="mega-octicon octicon-git-commit"></span>
    </div>
    <div class="diagram-icon-small js-diagram-icon-small diagram-icon-commit-3" data-diagram-step="commits">
      <span class="mega-octicon octicon-git-commit"></span>
    </div>
    <div class="diagram-icon js-diagram-icon diagram-icon-pr" data-diagram-step="pr">
      <span class="mega-octicon octicon-git-pull-request"></span>
    </div>
    <div class="diagram-icon js-diagram-icon diagram-icon-merge" data-diagram-step="merge">
      <span class="mega-octicon octicon-git-merge"></span>
    </div>
    <div class="diagram-icon-small js-diagram-icon-small diagram-icon-discussion-1" data-diagram-step="code-review">
      <span class="mega-octicon octicon-comment-discussion"></span>
    </div>
    <div class="diagram-icon-small js-diagram-icon-small diagram-icon-commit-4" data-diagram-step="code-review">
      <span class="mega-octicon octicon-git-commit"></span>
    </div>
    <div class="diagram-icon-small js-diagram-icon-small diagram-icon-discussion-2" data-diagram-step="code-review">
      <span class="mega-octicon octicon-comment-discussion"></span>
    </div>
    <div class="diagram-icon-small js-diagram-icon-small diagram-icon-commit-5" data-diagram-step="code-review">
      <span class="mega-octicon octicon-git-commit"></span>
    </div>
    <div class="diagram-icon-small js-diagram-icon-small diagram-icon-discussion-3" data-diagram-step="code-review">
      <span class="mega-octicon octicon-comment-discussion"></span>
    </div>
    <div class="diagram-icon-small js-diagram-icon-small diagram-icon-commit-6" data-diagram-step="code-review">
      <span class="mega-octicon octicon-git-commit"></span>
    </div>
    <div class="diagram-icon js-diagram-icon-small diagram-icon-deploy" data-diagram-step="deploy">
      <span class="mega-octicon octicon-squirrel"></span>
    </div>
  </div>
</div>

<div class="flow-content">

  <div class="panel-content js-panel-content js-panel-content-branch" data-step="branch">
    <h3>Create a branch</h3>

    <p>When you're working on a project, you're going to have a bunch of different features or ideas in progress at any given time – some of which are ready to go, and others which are not. Branching exists to help you manage this workflow.</p>

    <p>When you create a branch in your project, you're creating an environment where you can try out new ideas. Changes you make on a branch don't affect the <code>master</code> branch, so you're free to experiment and commit changes, safe in the knowledge that your branch won't be merged until it's ready to be reviewed by someone you're collaborating with.</p>

    <h4>ProTip</h4>

    <p>Branching is a core concept in Git, and the entire GitHub Flow is based upon it. There's only one rule: anything in the <code>master</code> branch is always deployable.</p>

    <p>Because of this, it's extremely important that your new branch is created off of master when working on a feature or a fix. Your branch name should be descriptive (e.g., <code>refactor-authentication</code>, <code>user-content-cache-key</code>, <code>make-retina-avatars</code>), so that others can see what is being worked on.</p>

  </div>

  <div class="panel-content js-panel-content js-panel-content-commits" data-step="commits">
    <h3>Add commits</h3>

    <p>Once your branch has been created, it's time to start making changes. Whenever you add, edit, or delete a file, you're making a commit, and adding them to your branch. This process of adding commits keeps track of your progress as you work on a feature branch.</p>

    <p>Commits also create a transparent history of your work that others can follow to understand what you've done and why. Each commit has an associated commit message, which is a description explaining why a particular change was made. Furthermore, each commit is considered a separate unit of change. This lets you roll back changes if a bug is found, or if you decide to head in a different direction.</p>

    <h4>ProTip</h4>

    <p>Commit messages are important, especially since Git tracks your changes and then displays them as commits once they're pushed to the server. By writing clear commit messages, you can make it easier for other people to follow along and provide feedback.</p>

  </div>

  <div class="panel-content js-panel-content js-panel-content-pr" data-step="pr">
    <h3>Open a Pull Request</h3>

    <p>Pull Requests initiate discussion about your commits. Because they're tightly integrated with the underlying Git repository, anyone can see exactly what changes would be merged if they accept your request.</p>

    <p>You can open a Pull Request at any point during the development process: when you have little or no code but want to share some screenshots or general ideas, when you're stuck and need help or advice, or when you're ready for someone to review your work. By using GitHub's @mention system in your Pull Request message, you can ask for feedback from specific people or teams, whether they're down the hall or ten time zones away.</p>

    <h4>ProTip</h4>

    <p>Pull Requests are useful for contributing to open source projects and for managing changes to shared repositories. If you're using a Fork &amp; Pull Model, Pull Requests provide a way to notify project maintainers about the changes you'd like them to consider. If you're using a Shared Repository Model, Pull Requests help start code review and conversation about proposed changes before they're merged into the master branch.</p>

  </div>

  <div class="panel-content js-panel-content js-panel-content-code-review" data-step="code-review">

    <h3>Discuss and review your code</h3>

    <p>Once a Pull Request has been opened, the person or team reviewing your changes may have questions or comments. Perhaps the coding style doesn't match project guidelines, the change is missing unit tests, or maybe everything looks great and props are in order. Pull Requests are designed to encourage and capture this type of conversation.</p>

    <p>You can also continue to push to your branch in light of discussion and feedback about your commits. If someone comments that you forgot to do something or if there is a bug in the code, you can fix it in your branch and push up the change. GitHub will show your new commits and any additional feedback you may receive in the unified Pull Request view.</p>

    <h4>ProTip</h4>

    <p>Pull Request comments are written in Markdown, so you can embed images and emoji, use pre-formatted text blocks, and other lightweight formatting.</p>

  </div>

  <div class="panel-content js-panel-content js-panel-content-deploy" data-step="deploy">

    <h3>Deploy</h3>

    <p>Once your pull request has been reviewed and the branch passes your tests, you can deploy your changes to verify them in production. If your branch causes issues, you can roll it back by deploying the existing master into production.</p>
  </div>

  <div class="panel-content js-panel-content js-panel-content-merge" data-step="merge">

    <h3>Merge</h3>

    <p>Now that your changes have been verified in production, it is time to merge your code into the master branch.</p>

    <p>Once merged, Pull Requests preserve a record of the historical changes to your code. Because they're searchable, they let anyone go back in time to understand why and how a decision was made.</p>

    <h4>ProTip</h4>

    <p>By incorporating certain keywords into the text of your Pull Request, you can associate issues with code. When your Pull Request is merged, the related issues are also closed. For example, entering the phrase <code>Closes #32</code> would close issue number 32 in the repository. For more information, check out our <a href="https://help.github.com/articles/closing-issues-via-commit-messages">help article</a>.</p>

  </div>

  <a href="#" class="panel-nav prev js-panel-nav-prev" title="Previous" data-proofer-ignore>
    <span class="mega-octicon octicon-chevron-left"></span>
  </a>

  <a href="#" class="panel-nav next js-panel-nav-next" title="Next" data-proofer-ignore>
    <span class="mega-octicon octicon-chevron-right"></span>
  </a>


</div>
