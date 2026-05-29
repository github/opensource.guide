---
lang: bn
untranslated: true
title: Security Best Practices for your Project
description: Strengthen your project's future by building trust through essential security practices — from MFA and code scanning to safe dependency management and private vulnerability reporting.
class: security-best-practices
order: -1
image: /assets/images/cards/security-best-practices.png
---

Bugs and new features aside, a project's longevity hinges not only on its usefulness but also on the trust it earns from its users. Strong security measures are important to keep this trust alive. Here are some important actions you can take to significantly improve your project's security.

## Ensure all privileged contributors have enabled Multi-Factor Authentication (MFA)

### A malicious actor who manages to impersonate a privileged contributor to your project, will cause catastrophic damages.

Once they obtain the privileged access, this actor can modify your code to make it perform unwanted actions (e.g. mine cryptocurrency), or can distribute malware to your users' infrastructure, or can access private code repositories to exfiltrate intellectual property and sensitive data, including credentials to other services. 

MFA provides an additional layer of security against account takeover. Once enabled, you have to log in with your username and password and provide another form of authentication that only you know or have access to.

## Secure your code as part of your development workflow

### Security vulnerabilities in your code are cheaper to fix when detected early in the process than later, when they are used in production.

Use a Static Application Security Testing (SAST) tool to detect security vulnerabilities in your code. These tools are operating at code level and don't need an executing environment, and therefore can be executed early in the process, and can be seamlessly integrated in your usual development workflow, during the build or during the code review phases. 

It's like having a skilled expert look over your code repository, helping you find common security vulnerabilities that could be hiding in plain sight as you code. 

How to choose your SAST tool?
Check the license: Some tools are free for open source projects. For example GitHub CodeQL or SemGrep.
Check the coverage for your language(s)

* Select one that easily integrates with the tools you already use, with your existing process. For example, it's better if the alerts are available as part of your existing code review process and tool, rather than going to another tool to see them.
* Beware of False Positives! You don't want the tool to slow you down for no reason!
* Check the features: some tools are very powerful and can do taint tracking (example: GitHub CodeQL), some propose AI-generated fix suggestions, some make it easier to write custom queries (example: SemGrep).  

## Don't share your secrets

### Sensitive data, such as API keys, tokens, and passwords, can sometimes accidentally get committed to your repository.

Imagine this scenario: You are the maintainer of a popular open-source project with contributions from developers worldwide. One day, a contributor unknowingly commits to the repository some API keys of a third-party service. Days later, someone finds these keys and uses them to get into the service without permission. The service is compromised, users of your project experience downtime, and your project's reputation takes a hit. As the maintainer, you're now faced with the daunting tasks of revoking compromised secrets, investigating what malicious actions the attacker could have performed with this secret, notifying affected users, and implementing fixes. 

To prevent such incidents, "secret scanning" solutions exist to help you detect those secrets in your code. Some tools like GitHub Secret Scanning, and Trufflehog by Truffle Security can prevent you from pushing them to remote branches in the first place, and some tools will automatically revoke some secrets for you. 

## Check and update your dependencies

### Dependencies in your project can have vulnerabilities that compromise the security of your project. Manually keeping dependencies up to date can be a time-consuming task.

Picture this: a project built on the sturdy foundation of a widely-used library. The library later finds a big security problem, but the people who built the application using it don't know about it. Sensitive user data is left exposed when an attacker takes advantage of this weakness, swooping in to grab it. This is not a theoretical case. This is exactly what happened to Equifax in 2017: They failed to update their Apache Struts dependency after the notification that a severe vulnerability was detected. It was exploited, and the infamous Equifax breach affected 144 million users' data. 

To prevent such scenarios, Software Composition Analysis (SCA) tools such as Dependabot and Renovate automatically check your dependencies for known vulnerabilities published in public databases such as the NVD or the GitHub Advisory Database, and then creates pull requests to update them to safe versions. Staying up-to-date with the latest safe dependency versions safeguards your project from potential risks. 

## Understand and manage open source license risks

### Open source licenses come with terms and ignoring them can lead to legal and reputational risks.

Using open source dependencies can speed up development, but each package includes a license that defines how it can be used, modified, or distributed. [Some licenses are permissive](https://opensource.guide/legal/#which-open-source-license-is-appropriate-for-my-project), while others (like AGPL or SSPL) impose restrictions that may not be compatible with your project's goals or your users' needs.

Imagine this: You add a powerful library to your project, unaware that it uses a restrictive license. Later, a company wants to adopt your project but raises concerns about license compliance. The result? You lose adoption, need to refactor code, and your project's reputation takes a hit.

To avoid these pitfalls, consider including automated license checks as part of your development workflow. These checks can help identify incompatible licenses early in the process, preventing problematic dependencies from being introduced into your project.

Another powerful approach is generating a Software Bill of Materials (SBOM). An SBOM lists all components and their metadata (including licenses) in a standardized format. It offers clear visibility into your software supply chain and helps surface licensing risks proactively.

Just like security vulnerabilities, license issues are easier to fix when discovered early. Automating this process keeps your project healthy and safe.

## Avoid unwanted changes with protected branches

### আপনার মূল শাখাগুলোর ওপর অনিয়ন্ত্রিত প্রবেশাধিকার দুর্ঘটনাজনিত বা ক্ষতিকর পরিবর্তন ঘটাতে পারে, যা দুর্বলতা তৈরি করতে পারে বা আপনার প্রকল্পের স্থিতিশীলতা নষ্ট করতে পারে।

একজন নতুন অবদানকারী মূল শাখায় লেখার অনুমতি পায় এবং ভুলবশত এমন পরিবর্তন পুশ করে যা পরীক্ষা করা হয়নি। এরপর সাম্প্রতিক পরিবর্তনের কারণে একটি গুরুতর নিরাপত্তা ত্রুটি ধরা পড়ে। এ ধরনের সমস্যা ঠেকাতে branch protection নিয়ম ব্যবহার করা হয়, যাতে গুরুত্বপূর্ণ শাখায় পরিবর্তন আগে পর্যালোচনা না হয়ে এবং নির্দিষ্ট status check পাস না করে push বা merge করা না যায়। এই অতিরিক্ত সুরক্ষা থাকলে আপনার প্রকল্প আরও নিরাপদ থাকে এবং প্রতিবারই মান বজায় থাকে।

## নিরাপত্তা সংক্রান্ত সমস্যা রিপোর্ট করা সহজ ও নিরাপদ করুন

### আপনার ব্যবহারকারীদের জন্য বাগ রিপোর্ট করা সহজ করা ভালো অভ্যাস, কিন্তু বড় প্রশ্ন হলো: যখন এই বাগটির নিরাপত্তাগত প্রভাব থাকে, তখন তারা কীভাবে নিরাপদে আপনাকে রিপোর্ট করবে, যাতে দুর্বৃত্ত হ্যাকারদের জন্য আপনি লক্ষ্যবস্তু না হয়ে যান?

ধরুন, একজন নিরাপত্তা গবেষক আপনার প্রকল্পে একটি দুর্বলতা খুঁজে পেলেন, কিন্তু সেটি জানানোর কোনো স্পষ্ট বা নিরাপদ উপায় পেলেন না। নির্দিষ্ট প্রক্রিয়া না থাকলে তারা হয়তো একটি public issue খুলে ফেলতে পারেন বা সামাজিক মাধ্যমে বিষয়টি প্রকাশ্যে আলোচনা করতে পারেন। এমনকি তারা সদিচ্ছায় সমাধানও প্রস্তাব করুক, public pull request-এর মাধ্যমে করলে সেটি merge হওয়ার আগেই অন্যরা তা দেখে ফেলবে। এই প্রকাশ্যতা আপনাকে তা ঠিক করার সুযোগ পাওয়ার আগেই দুর্বলতাটি ক্ষতিকর ব্যক্তিদের সামনে তুলে ধরবে, যা zero-day exploit-এর ঝুঁকি তৈরি করতে পারে এবং আপনার প্রকল্প ও ব্যবহারকারীদের ক্ষতি করতে পারে।

### Security Policy

এটি এড়াতে একটি security policy প্রকাশ করুন। `SECURITY.md` ফাইলে সংজ্ঞায়িত একটি security policy-তে নিরাপত্তা-সংক্রান্ত উদ্বেগ রিপোর্ট করার ধাপ, coordinated disclosure-এর জন্য স্বচ্ছ প্রক্রিয়া, এবং রিপোর্ট করা সমস্যাগুলো সমাধানে প্রকল্প দলের দায়িত্ব স্পষ্টভাবে উল্লেখ থাকে। এই security policy খুবই সহজ হতে পারে, যেমন: "দয়া করে public issue বা PR-এ বিস্তারিত প্রকাশ করবেন না, বরং security@example.com-এ আমাদের private ইমেইল পাঠান"। তবে এতে আরও তথ্য থাকতে পারে, যেমন তারা কখন আপনার কাছ থেকে উত্তর আশা করতে পারে। disclosure প্রক্রিয়ার কার্যকারিতা ও দক্ষতা বাড়াতে যা কিছু সাহায্য করে, তা এতে রাখা যেতে পারে।

### Private Vulnerability Reporting

কিছু প্ল্যাটফর্মে private issues ব্যবহার করে আপনি vulnerability management প্রক্রিয়া, intake থেকে broadcast পর্যন্ত, আরও দ্রুত ও শক্তিশালী করতে পারেন। GitLab-এ এটি private issues দিয়ে করা যায়। GitHub-এ একে private vulnerability reporting (PVR) বলা হয়। PVR maintainers-দের GitHub প্ল্যাটফর্মের মধ্যেই vulnerability report গ্রহণ ও সমাধান করতে দেয়। GitHub স্বয়ংক্রিয়ভাবে fixes লেখার জন্য একটি private fork এবং একটি draft security advisory তৈরি করে। আপনি সমস্যা প্রকাশ এবং fixes মুক্তি দেওয়ার সিদ্ধান্ত না নেওয়া পর্যন্ত সবকিছু গোপন থাকে। শেষ ধাপে security advisories প্রকাশ করা হয়, যা আপনার সব ব্যবহারকারীকে তাদের SCA tool-এর মাধ্যমে জানায় এবং সুরক্ষা দেয়。

### Define your threat model to help users and researchers understand scope

Before security researchers can report issues effectively, they need to understand what risks are in scope. A lightweight threat model can help define your project's boundaries, expected behavior, and assumptions.

A threat model doesn't need to be complex. Even a simple document outlining what your project does, what it trusts, and how it could be misused goes a long way. It also helps you, as a maintainer, think through potential pitfalls and inherited risks from upstream dependencies.

A great example is the [Node.js threat model](https://github.com/nodejs/node/security/policy#the-nodejs-threat-model), which clearly defines what is and isn't considered a vulnerability in the project's context.

If you're new to this, the [OWASP Threat Modeling Process](https://owasp.org/www-community/Threat_Modeling_Process) offers a helpful introduction to build your own.

Publishing a basic threat model alongside your security policy improves clarity for everyone.

## Prepare a lightweight incident response process

### Having a basic incident response plan helps you stay calm and act efficiently, ensuring the safety of your users and consumers.

Most vulnerabilities are discovered by researchers and reported privately. But sometimes, an issue is already being exploited in the wild before it reaches you. When this happens, your downstream consumers are the ones at risk, and having a lightweight, well-defined incident response plan can make a critical difference.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/ulisesgascon?s=180" class="pquote-avatar" alt="avatar">
  A vulnerability is basically a flaw, a security misconfiguration or a weak point in our system that can be exploited by third parties to behave in unintended ways.
  <p markdown="1" class="pquote-credit">
— [@UlisesGascon](https://github.com/ulisesgascon), ["What is a Vulnerability and What's Not? Making Sense of Node.js and Express Threat Models"](https://gitnation.com/contents/what-is-a-vulnerability-and-whats-not-making-sense-of-nodejs-and-express-threat-models)
  </p>
</aside>

Even when a vulnerability is reported privately, the next steps matter. Once you receive a vulnerability report or detect suspicious activity, what happens next?

Having a basic incident response plan, even a simple checklist, helps you stay calm and act efficiently when time matters. It also shows users and researchers that you take incidents and reports seriously.

Your process doesn't have to be complex. At minimum, define:

* Who reviews and triages security reports or alerts  
* How severity is evaluated and how mitigation decisions are made  
* What steps you take to prepare a fix and coordinate disclosure  
* How you notify affected users, contributors, or downstream consumers 

An active incident, if not well managed, can erode trust in your project from your users. Publishing this (or linking to it) in your `SECURITY.md` file can help set expectations and build trust.

For inspiration, the [Express.js Security WG](https://github.com/expressjs/security-wg/blob/main/docs/incident_response_plan.md) provides a simple but effective example of an open source incident response plan.

This plan can evolve as your project grows, but having a basic framework in place now can save time and reduce mistakes during a real incident.

## Treat security as a team effort

### Security isn't a solo responsibility. It works best when shared across your project's community.

While tools and policies are essential, a strong security posture comes from how your team and contributors work together. Building a culture of shared responsibility helps your project identify, triage, and respond to vulnerabilities faster and more effectively.

Here are a few ways to make security a team sport:

* **Assign clear roles**: Know who handles vulnerability reports, who reviews dependency updates, and who approves security patches.
* **Limit access using the principle of least privilege**: Only give write or admin access to those who truly need it and review permissions regularly.
* **Invest in education**: Encourage contributors to learn about secure coding practices, common vulnerability types, and how to use your tools (like SAST or secret scanning).
* **Foster diversity and collaboration**: A heterogeneous team brings a wider set of experiences, threat awareness, and creative problem-solving skills. It also helps uncover risks others might overlook.
* **Engage upstream and downstream**: Your dependencies can affect your security and your project affects others. Participate in coordinated disclosure with upstream maintainers, and keep downstream users informed when vulnerabilities are fixed.

Security is an ongoing process, not a one-time setup. By involving your community, encouraging secure practices, and supporting each other, you build a stronger, more resilient project and a safer ecosystem for everyone.

## Conclusion: A few steps for you, a huge improvement for your users

These few steps might seem easy or basic to you, but they go a long way to make your project more secure for its users, because they will provide protection against the most common issues.

Security isn't static. Revisit your processes from time to time as your project grows, so do your responsibilities and your attack surface.

## Contributors

### Many thanks to all the maintainers who shared their experiences and tips with us for this guide!

This guide was written by [@nanzggits](https://github.com/nanzggits) & [@xcorail](https://github.com/xcorail) with contributions from: 

[@JLLeitschuh](https://github.com/JLLeitschuh), [@intrigus-lgtm](https://github.com/intrigus-lgtm), [@UlisesGascon](https://github.com/ulisesgascon) + many others!
