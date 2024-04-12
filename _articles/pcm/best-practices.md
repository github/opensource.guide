---
lang: pcm
title: Best Practices for Maintainers
description: Learn how to make your life easy as an open source maintainer, from documentation to community collaboration. Make sense of maintaining open source projects with these top-notch tips.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## Wetin e mean to be maintainer?

If you dey maintain one open source project wey plenty people dey use, you fit don notice say you dey write code sote you no dey rest. For the early days of your project, you dey try new tins and you dey make decisions based on wetin you wan. But as your project dey popular, you go dey work with users and contributors.

To maintain project no be only about code. Plenty tins dey wey fit happen wey you no plan, but dem still dey important for your growing project. We don gather some ways wey go make your life easy, from writing down your process to involving your community.

## Write the way waeh you use

To write tins down, no be small work. E go make sense if you dey maintain your open source project.

Documentation no be only for you to clear your mind, e go help other people understand wetin you need or wetin you dey expect before dem even ask. To write tins down go make am easy for you to yarn no when something no follow your project plan. E go also make am easy for people to fit join put hand for your project. You no go sabi who go fit read your project or use am.

If you no get strength to dey update your documentation all the time, you fit delete the one wey don old or you fit talk say e don old so that people go sabi say dem fit update am.

### Yarn Wetin Your Project Fit Be (Write Your Project's Vision)

Start to write wetin you want make your project be. Put am for your README or create file wey you go call VISION. If you get other things wey fit help like project roadmap, e go make sense make you put dem for public make everybody sabi.

As @lord don talk, project vision fit help you know wetin you go fit work on. As new maintainer, e talk say e no follow him project scope when e see first feature request for [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  I mess up. I no put effort to find correct solution. Instead of one kain solution, I for talk say, "I no get time for this now, but I go add am to the list for future when I fit do am well."
  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Talk Wetin You Expect

E fit hard you to write down rules. Sometimes you fit think say you dey police people or say you dey dull dem vibe.

But if you write rules fairly and you dey follow am, e go empower you. E go prevent you from doing tins wey you no like. People wey see your project fit no sabi your condition or circumstances. Dem fit think say dem dey pay you for the work wey you dey do, especially if na wetin dem dey use well-well. Dem fit even think say you dey busy with new work or family matter.

E good make people sabi dis tins.

If to maintain your project na part-time or you dey do am because you volunteer, make you talk the time wey you get. E no be say na the time wey your project need or wetin people dey ask you for, na the time wey you get na e you go talk. E fit good if you write down some rules like:

* How dem go review contribution (dem need test? Issue template?)
* The kind of contribution wey dem go accept (you wan make dem help you with specific part of your code?)
* When e go make sense for dem to follow up (e.g., "you fit expect response from maintainer within 7 days, if you no see any response by then, you fit ping the thread")
* How much time you dey spend for the project (e.g., "we dey spend like 5 hours per week on this project")

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), and [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) na some examples of projects wey get rules for maintainers and contributors.

### Make Sure Your Communication Commot For Outside

No forget to write down your talks. Where you fit, make all your communication for your project public. If person try contact you for private to discuss feature request or support matter, tell am politely make e follow public channel yarn you like mailing list or issue tracker.

If you meet other maintainers or you take big decision for private, write the conversation for public so that person wey follow your community go see the same information wey dem wey dey for years see.

## Sabi To Say No

You don write down wetin you want, but people never read your documentation well. Sometimes you go still remind them say knowledge dey your documentation.

Saying "no" no dey fun, but make you try yarn "Your contribution no dey follow this project criteria" e no too personal like "I no like your contribution."

You go fit yarn no for plenty situations wey you go see as maintainer like feature requests wey no follow your project plan or person wey dey disturb discussion.

### Make the talk-talk dey friendly

One important place wey you go practice how to talk no be yes na for your issue and pull request queue. As person wey dey maintain project, e dey natural say you go dey see suggestions wey you no go want accept.

Maybe the contribution wan change how your project dey work or e no dey follow your own idea. Maybe the idea make sense, but the way dem take do am no too correct.

No matter how e be, e fit possible to waka diplomatically for contributions wey no too follow your project standards.

If you come across one contribution wey you no wan accept, your first reaction fit be to dey do like say you no see am or to dey form say you no see am. If you do am like that, e fit wound the person way submit am and e fit even discourage other people wey wan contribute for your community.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
    The main trick for managing support for big open source projects be say make you dey make issues dey waka. Try no make issues dey hang. If you be iOS developer, you sabi as e dey vex when you submit radars. You fit dey wait for like 2 years before dem go reply you, and dem go talk say make you try again with the latest iOS version.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

No just allow one contribution wey you no want dey open because you dey feel bad or you dey try to dey nice. As time dey go, the issues and PRs wey you never answer go make your project come dey feel like say e too stress you and dey intimidate you.

E better make you quick-close contributions wey you sabi say you no wan accept am. If your project don already gather plenti matter wey never resolve, @steveklabnik get some advice on [how to quickly arrange the issues](https://words.steveklabnik.com/how-to-be-an-open-source-gardener) so e go dey efficient.

If you no wan accept one contribution:

* **Tell them thank you** for their contribution
* **Explain why e no follow** within the project's scope, and offer clear suggestions for how e fit improve, if you sabi. Make sure say you dey friendly but firm.
* **Link waeh get Relevant documentation na him you go add**, if you get am. If you dey see people dey request the same thing wey you no dey ready to accept, put am for your documentation so that you no go dey repeat yourself.
* **Close the request**

You no need talk pass 1-2 sentences for response. For example, when person wey dey use [celery](https://github.com/celery/celery/) report say e get one Windows-related error, @berkerpeksag [reply like this](https://github.com/celery/celery/issues/3383):

![Celery screenshot](/assets/images/best-practices/celery.png)

If the fear of saying "no" dey worry you, my brother, you no dey alone for this matter. As @jessfraz [talk am for here](https://blog.jessfraz.com/post/the-art-of-closing/):

> I don chook mouth with maintainers wey dey run different open source projects like Mesos, Kubernetes, Chromium, and all of them gree say one of the hardest part for person wey dey maintain na to talk "No" to patches wey e no wan.

No go dey feel bad say you no wan accept person contribution. The first law for open source, [as](https://twitter.com/solomonstre/status/715277134978113536) @shykes talk am: _"No na for time, yes na forever."_ While you dey reason the person wey get ginger, e no mean say you dey reject the person way submit contribution.

At the end of the day, if contribution no follow standard, you no dey owe anybody obligation to accept am. Just dey friendly and ready to answer when people wan contribute to your project, but make you dey accept only the changes wey you believe say e go make your project better. As you dey practice to talk "no" often, e go dey easier. I promise you.

### Dey Ahead of Time

To reduce the plenty unwanted contributions from the start, explain your project process for submitting and accepting contributions for your contributing guide.

If you dey receive plenty low-quality contributions, you fit tell contributors make them do small work before:

* Fill out one kind issue or PR template/checklist
* Open one issue before them submit PR

If them no follow your rules, close the issue sharp-sharp and show them your documentation.

Although e fit seem like say this approach no dey friendly at first, but e dey better for everybody. E dey reduce the chance say person go waste time dey work on top PR wey you no go accept. E also dey reduce your own work burden.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  Make e clear to them, for one CONTRIBUTING.md file, how them fit sabi whether you go accept their work or no go accept am before them start work.
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Sometimes, when you talk no, person fit vex or criticize your decision. If their behavior come bad, [take steps to defuse the situation](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) or even remove them from your community, if them no dey ready to work together positively.

### Dey Show Love for Mentorship

E fit happen say one person for your community dey always submit contributions wey no meet your project standards. E fit dey vex both parties as them dey reject their work every time.

If you see say person dey show interest for your project but e just need small touch, be patient. Make you clear for every situation why their contributions no dey up to the project standards. Try to show them where them fit do better, maybe by working on one small or less complex task, like issue wey dem mark "good first issue," to give them confidence. If you get time, you fit mentor them as them dey do their first contribution, or you find person for your community wey go fit mentor them.

## Put hand inside your community

You no need to do everything alone. Your project community dey exist for one reason! Even if you no get active community of contributors yet, if plenty people dey use your project, make them help you.

### Make you share the work

If you dey find people wey go fit help, start to ask around.

One way to get new contributors be to [label issues wey dey simple for beginners to work on](https://help.github.com/en/articles/helping-new-contributors-find-your-project-with-labels). GitHub go show these issues for different places for the platform, e go make them dey easier to see.

When you see new contributors wey dey make repeated contributions, make you acknowledge their work and give them more responsibility. Write down how other people fit grow into leadership roles if them wan. Make you encourage others to [share ownership of the project](../building-community/#share-the-person-waeh-get-your-project) because e fit reduce your own workload, just like @lmccart find out for her project, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  I been dey talk say, "Yes, anybody fit participate, e no need make you sabi plenty coding [...]." People come sign up to join [one event], and I con dey wonder whether na true I talk or not. 40 people show up, and I no fit sit down with all of them...But people come together, and e just dey work. As soon as one person sabi am, e fit teach their neighbor.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does "Open Source" Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

If you need to step away from your project, whether on leave or permanently, no shame dey ask another person to take over for you.

If other people dey happy about the project direction, give them access to make changes or formally hand over control to another person. If person don fork your project and dey actively maintain am for another place, consider put link to the fork from your original project. E good as plenty people dey show interest for your project!

@progrium [talk say](https://web.archive.org/web/20151204215958/https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) as him documenting the vision for his project, [Dokku](https://github.com/dokku/dokku), help others to carry on the goals even after he comot from the project:

> I write one wiki page wey describe wetin I want and why I want am. For some reason, e shock me as the maintainers begin move the project in that direction! E no always dey exactly how I go do am? Not every time. But e still bring the project close to wetin I write down.

### Make other pesin build them own solutions

If potential contributor get another idea for your project and e no follow your own idea, you fit encourage am gently to work on their own fork.

Creating one fork of the project no dey bad at all. Make people sabi say them fit copy and modify projects, and e dey good thing about open source. Encourage your community members to work on their own fork because e fit give them creative freedom wey no go dey against your project vision.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  I dey consider the 80% use case. If you be one of the special people, please fork my work. I no go vex! My public projects almost always dey solve common problems; I dey try make am easy for person to dive deeper by forking or extending my work.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

The same thing fit apply to one user wey need solution wey you no get time to build. Offer APIs and customization options wey fit help other people meet their needs, without them needing to modify the source directly. @orta [see](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) say as them dey encourage plugins for CocoaPods, e lead to "some of the most interesting ideas":

> Almost like magic, when project big well well, maintainers must dey more conservative about how them dey add new code. You go sabi how to talk "no," but plenty people get valid needs. Instead, you fit change your tool into one platform.

## Bring them robots

Just like how other people fit help you with some tasks, some tasks no go make sense for person to dey do. Robots go be your friends for this matter. Use them to make your life as one maintainer dey easier.

### Make you dey run tests and checks to upgrade your code quality

One important way wey you fit automate your project be to add tests.

Tests fit make contributors dey confident say them no go spoil anything. Them still dey make am easy for you to review and accept contributions quickly. The more responsive you dey, the more engaged your community fit dey.

Set up automatic tests wey go run on all incoming contributions, and make sure say your tests dey easy to run locally by contributors. You must require say all code contributions must pass your tests before them fit submit am. You go help set one minimum standard of quality for all submissions. [Required status checks](https://help.github.com/articles/about-required-status-checks/) for GitHub fit help ensure say no change go enter if your tests no pass.

If you add tests, make sure say you explain how them dey work for your CONTRIBUTING file.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  I believe that tests are necessary for all code that people work on. If the code was fully and perfectly correct, it wouldn't need changes – we only write code when something is wrong, whether that's "It crashes" or "It lacks such-and-such a feature". And regardless of the changes you're making, tests are essential for catching any regressions you might accidentally introduce.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Carry tools use am to automate basic maintenance tasks

The good news about maintaining a popular project be say other maintainers fit don face similar challenges and build solutions for them.

Plenty [tools dey available](https://github.com/showcases/tools-for-open-source) wey fit help automate some parts of maintenance work. Some examples include:

* [semantic-release](https://github.com/semantic-release/semantic-release) wey dey automate your releases
* [mention-bot](https://github.com/facebook/mention-bot) wey dey mention potential reviewers for pull requests
* [Danger](https://github.com/danger/danger) wey help automate code review
* [no-response](https://github.com/probot/no-response) wey close issues wey the author no respond to requests for more information
* [dependabot](https://github.com/dependabot) wey dey check your dependency files every day for outdated requirements and dey open individual pull requests for any wey e see.

For bug reports and other common contributions, GitHub get [Issue Templates and Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), wey you fit create to streamline the communication wey you dey receive. @TalAter create [Choose Your Own Adventure guide](https://www.talater.com/open-source-templates/#/) to help you write your issue and PR templates.

To manage your email notifications, you fit set up [email filters](https://github.com/blog/2203-email-updates-about-your-own-activity) to organize them by priority.

If you want to get more advanced, style guides and linters fit standardize project contributions and make them easy to review and accept.

However, if your standards too complex, them fit dey increase the obstacles to contribution. Make sure say you just add enough rules wey go make everyone's life easier.

If you no sure which tools to use, look at what other popular projects dey do, especially those for your ecosystem. For example, wetin the contribution process be like for other Node modules? Using similar tools and approaches go make your process more familiar to your target contributors.

## E dey okay to pause

Open source work wey once dey give you joy fit dey make you avoid or dey guilty now.

Maybe you dey feel overwhelmed or one growing sense of dread when you think about your projects. Meanwhile, issues and pull requests just dey pile up.

Burnout na real issue wey plenty maintainers dey face for open source work. As one maintainer, your happiness na one non-negotiable requirement for the survival of any open source project.

Though e suppose dey obvious, make you take break! You no need wait until you feel burnt out before you take vacation. @brettcannon, one Python core developer, decide to take [one month-long vacation](https://snarky.ca/why-i-took-october-off-from-oss-volunteering/) after 14 years of volunteer OSS work.

Just like any other work, make you dey take regular breaks so you go dey refreshed, happy, and excited about your work.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  In maintaining WP-CLI, I've discovered I need to make myself happy first, and set clear boundaries on my involvement. The best balance I've found is 2-5 hours per week, as a part of my normal work schedule. This keeps my involvement a passion, and from feeling too much like work. Because I prioritize the issues I'm working on, I can make regular progress on what I think is most important.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://web.archive.org/web/20220306014037/https://danielbachhuber.com/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Sometimes, e fit hard to take break from open source work when e look like everybody need you. People fit even try to make you feel guilty as you dey step away.

Try find support for your users and community if you dey away from one project. If you no fit find the support wey you need, just take break. Make you sure to communicate when you no dey available, so people no go dey confused when you no dey respond.

Taking breaks no only apply to vacations, e fit include say you no wan do open source work during weekends or work hours. Communicate those expectations to others, so them go know say dem no suppose disturb you.

## Make you dey take care of yourself first!

To maintaining one popular project require different skills from the first-first time of growth, but e no dey less rewarding. As one maintainer, you go dey practice leadership and personal skills for one level wey few people fit experience. Though e no dey easy to manage, setting clear boundaries and only taking on wetin you dey comfortable with go help you dey happy, refreshed, and productive.
