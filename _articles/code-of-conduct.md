---
lang: en
title: Your Code of Conduct
description: Facilitate healthy and constructive community behavior by adopting and enforcing a code of conduct.
class: coc
order: 8
image: /assets/images/cards/coc.png
related:
  - building
  - leadership
---

## Why do I need a code of conduct?

A code of conduct is a document that establishes expectations for behavior for your project's participants. Adopting, and enforcing, a code of conduct can help create a positive social atmosphere for your community.

Codes of conduct help protect not just your participants, but yourself. If you maintain a project, you may find that unproductive attitudes from other participants can make you feel drained or unhappy about your work over time.

A code of conduct empowers you to facilitate healthy, constructive community behavior. Being proactive reduces the likelihood that you, or others, will become fatigued with your project, and helps you take action when someone does something you don't agree with.

## Establishing a code of conduct

Try to establish a code of conduct as early as possible: ideally, when you first create your project.

In addition to communicating your expectations, a code of conduct describes the following:

- **Where** the code of conduct takes effect _(only on issues and pull requests, or community activities like events?)_
- **Whom** the code of conduct applies to _(community members and maintainers, but what about sponsors?)_
- **What** happens if someone violates the code of conduct
- **How** someone can report violations

Wherever you can, use prior art. The [Contributor Covenant](https://contributor-covenant.org/) is a drop-in code of conduct that is used by over 40,000 open source projects, including Kubernetes, Rails, and Swift.

The [Django Code of Conduct](https://www.djangoproject.com/conduct/) and the [Citizen Code of Conduct](https://web.archive.org/web/20200330154000/http://citizencodeofconduct.org/) are also two good code of conduct examples.

Place a CODE_OF_CONDUCT file in your project's root directory, and make it visible to your community by linking it from your CONTRIBUTING or README file.

### Accessibility & inclusivity

A code of conduct is only useful if people can find it, understand it, and use it without unnecessary friction. Accessibility and inclusivity should be part of how you write the policy and how you enforce it.

As you draft or revise your code of conduct, consider the following:

- Use plain language where possible, and avoid unnecessary legal or organizational jargon.
- Make reporting instructions easy to find in your README, CONTRIBUTING guide, community spaces, and event materials.
- Offer more than one way to report when you can, such as email, a form, or a direct message to a designated moderator.
- State whether you accept anonymous or third-party reports, and explain any limits on confidentiality.
- Account for time zones, language barriers, disability accommodations, and uneven power dynamics when setting response expectations.
- Make it explicit that disrespectful behavior related to identity, disability, accessibility needs, names, or pronouns is not acceptable.
- For live events or synchronous spaces, explain how participants can get immediate help if they feel unsafe or excluded.

## Deciding how you'll enforce your code of conduct

<aside markdown="1" class="pquote">
  A code of conduct that isn't (or can't be) enforced is worse than no code of conduct at all: it sends the message that the values in the code of conduct aren't actually important or respected in your community.
  <p markdown="1" class="pquote-credit">
— [Ada Initiative](https://webcache.googleusercontent.com/search?q=cache:YfqdTk5H9ikJ:https://adainitiative.org/2014/02/18/howto-design-a-code-of-conduct-for-your-community)
  </p>
</aside>

You should explain how your code of conduct will be enforced **_before_** a violation occurs. There are several reasons to do so:

- **It demonstrates commitment.** People can see that you are serious about taking action when it's needed.
- **It builds trust.** Your community will feel more reassured that complaints actually get reviewed.
- **It clarifies fairness.** People should know that the review process is deliberate and transparent, should they ever find themselves investigated for a violation.

You should give people a private way (such as an email address) to report a code of conduct violation and explain who receives that report. It could be a maintainer, a group of maintainers, or a code of conduct working group.

Don't forget that someone might want to report a violation about a person who receives those reports. In this case, give them an option to report violations to someone else. For example, @ctb and @mr-c [explain on their project](https://github.com/dib-lab/khmer/blob/HEAD/CODE_OF_CONDUCT.rst), [khmer](https://github.com/dib-lab/khmer):

> Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by emailing **khmer-project@idyll.org** which only goes to C. Titus Brown and Michael R. Crusoe. To report an issue involving either of them please email **Judi Brown Clarke, Ph.D.** the Diversity Director at the BEACON Center for the Study of Evolution in Action, an NSF Center for Science and Technology.*

For inspiration, check out Django's [enforcement manual](https://www.djangoproject.com/conduct/enforcement-manual/) (though you may not need something this comprehensive, depending on the size of your project).

### Reporting templates

Structured templates make it easier for people to report harm and easier for maintainers to review reports consistently.

Reporter template:

```text
Subject: Code of conduct report: [brief summary]

Preferred name:
Best way to contact me:
Person or people involved:
Date and time (with timezone, if relevant):
Where it happened:
What happened:
Links, screenshots, or logs:
Witnesses or others affected:
Immediate safety concerns:
What support or follow-up would help:
```

Witness or third-party template:

```text
Subject: Witness report: [brief summary]

Your name:
Relationship to the situation:
Person or people involved:
Date and time:
Where it happened:
What you observed directly:
Supporting evidence:
Whether the affected person knows you are reporting:
Urgency or safety concerns:
```

Maintainer intake template:

```text
Report received by:
Date received:
Conflict of interest check:
Summary of report:
Immediate safety actions taken:
People assigned to review:
Evidence reviewed:
Follow-up sent to reporter:
Decision:
Next review date or follow-up action:
```

## Reporting examples

Practical examples can help community members understand when to report and what details are useful.

- **Issue or pull request thread:** A contributor repeatedly insults another person, calls their work "stupid," and dismisses questions in a hostile tone. Report the thread link, note which comments are harmful, and include whether the behavior appears to be part of a pattern.
- **Direct messages:** Someone keeps sending unwanted messages after being asked to stop, or uses private messages to say things they would not post publicly. Include screenshots, usernames, and whether you have blocked or muted the sender.
- **Community chat or forum:** A participant posts slurs, mocks someone's accent, or ridicules accessibility requests such as captions or alt text. Share the channel name, approximate time, and any saved logs or screenshots.
- **Live event or call:** A speaker repeatedly talks over a participant, uses demeaning language, or ignores stated accessibility needs. If there is an immediate moderator or event contact, alert them first, then send a written follow-up with names, time, and what support is needed.
- **Maintainer conflict of interest:** The person receiving reports is the subject of the complaint, or is closely connected to the person being reported. Use the alternate reporting contact listed in the code of conduct, and say why you believe an alternate reviewer is needed.

## Enforcing your code of conduct

Sometimes, despite your best efforts, somebody will do something that violates the code of conduct. There are several ways to address negative or harmful behavior when it comes up.

### Gather information about the situation

Treat each community member's voice as important as your own. If you receive a report that someone violated the code of conduct, take it seriously and investigate the matter, even if it does not match your own experience with that person. Doing so signals to your community that you value their perspective and trust their judgment.

The community member in question may be a repeat offender who consistently makes others feel uncomfortable, or they may have only said or done something once. Both can be grounds for taking action, depending on context.

Before you respond, give yourself time to understand what happened. It often helps to work through a simple checklist:

- Review the relevant comments, messages, logs, or screenshots.
- Look for patterns in past behavior, not just the latest incident.
- Gather perspectives other than your own about the person and the behavior in question.
- Separate immediate safety needs from longer-term process questions.
- Document what you know, what you do not know, and what follow-up is still needed.

<aside markdown="1" class="pquote">
  Don’t get pulled into an argument. Don’t get sidetracked into dealing with someone else’s behavior before you’ve finished dealing with the matter at hand. Focus on what you need.
  <p markdown="1" class="pquote-credit">
— Stephanie Zvan, ["So You've Got Yourself a Policy. Now What?"](https://the-orbit.net/almostdiamonds/2014/04/10/so-youve-got-yourself-a-policy-now-what/)
  </p>
</aside>

### Take appropriate action

After gathering and processing sufficient information, you'll need to decide what to do. As you consider your next steps, remember that your goal as a moderator is to foster a safe, respectful, and collaborative environment. Consider not only how to deal with the situation in question, but how your response will affect the rest of your community's behavior and expectations moving forward.

When somebody reports a code of conduct violation, it is your job, not theirs, to handle it. Sometimes, the reporter is disclosing information at great risk to their career, reputation, or physical safety. Forcing them to confront their harasser could put the reporter in a compromising position. You should handle direct communication with the person in question, unless the reporter explicitly requests otherwise.

There are a few ways you might respond to a code of conduct violation:

- **Give the person in question a public warning** and explain how their behavior negatively impacted others, preferably in the channel where it occurred. Where possible, public communication conveys to the rest of the community that you take the code of conduct seriously. Be kind, but firm in your communication.
- **Privately reach out to the person** in question to explain how their behavior negatively impacted others. You may want to use a private communication channel if the situation involves sensitive personal information. If you communicate with someone privately, it's a good idea to CC those who first reported the situation, so they know you took action. Ask the reporting person for consent before CCing them.

Sometimes, a resolution cannot be reached. The person in question may become aggressive or hostile when confronted or does not change their behavior. In this situation, you may want to consider taking stronger action. For example:

- **Suspend the person** in question from the project, enforced through a temporary ban on participating in any aspect of the project.
- **Permanently ban** the person from the project.

Banning members should not be taken lightly and represents a permanent and irreconcilable difference of perspectives. You should only take these measures when it is clear that a resolution cannot be reached.

## Common violations FAQ

- **Does something have to be repeated before it counts as a violation?** No. A single incident can be enough if it includes harassment, threats, hate speech, doxxing, or other serious harm. Repeated low-level behavior can also matter because patterns often make the impact worse.
- **What if the person says they were "just joking"?** Intent can matter, but it does not erase impact. If a joke humiliates, excludes, or targets someone, it may still violate the code of conduct.
- **Is disagreement itself a violation?** No. Healthy technical disagreement is normal. Personal attacks, contempt, dogpiling, bad-faith harassment, and discriminatory remarks are not.
- **Do private messages count?** They can. If behavior in direct messages, email, or off-platform spaces is connected to the project or affects community safety, it may still require action.
- **What if the reported behavior does not clearly violate the written policy?** It may still signal a broader community problem. Review the impact carefully, explain your decision clearly, and consider whether the policy needs to be updated.
- **Can someone report on behalf of another person?** Yes, if your process allows third-party reports. This can be especially important when the affected person feels unsafe, overwhelmed, or worried about retaliation.

## Your responsibilities as a maintainer

A code of conduct is not a law that is enforced arbitrarily. You are the enforcer of the code of conduct and it's your responsibility to follow the rules that the code of conduct establishes.

As a maintainer, you establish the guidelines for your community and enforce those guidelines according to the rules set forth in your code of conduct. This means taking any report of a code of conduct violation seriously. The reporter is owed a thorough and fair review of their complaint. If you determine that the behavior that they reported is not a violation, communicate that clearly to them and explain why you're not going to take action on it. What they do with that is up to them: tolerate the behavior that they had an issue with, or stop participating in the community.

A report of behavior that doesn't _technically_ violate the code of conduct may still indicate that there is a problem in your community, and you should investigate this potential problem and act accordingly. This may include revising your code of conduct to clarify acceptable behavior and/or talking to the person whose behavior was reported and telling them that while they did not violate the code of conduct, they are skirting the edge of what is expected and are making certain participants feel uncomfortable.

In the end, as a maintainer, you set and enforce the standards for acceptable behavior. You have the ability to shape the community values of the project, and participants expect you to enforce those values in a fair and even-handed way.

## Encourage the behavior you want to see in the world 🌎

When a project seems hostile or unwelcoming, even if it's just one person whose behavior is tolerated by others, you risk losing many more contributors, some of whom you may never even meet. It's not always easy to adopt or enforce a code of conduct, but fostering a welcoming environment will help your community grow.
