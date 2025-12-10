---
lang: en
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

### Unrestricted access to your main branches can lead to accidental or malicious changes that may introduce vulnerabilities or disrupt the stability of your project.

A new contributor gets write access to the main branch and accidentally pushes changes that have not been tested. A dire security flaw is then uncovered, courtesy of the latest changes. To prevent such issues, branch protection rules ensure that changes cannot be pushed or merged into important branches without first undergoing reviews and passing specified status checks. You're safer and better off with this extra measure in place, guaranteeing top-notch quality every time.

## Make it easy (and safe) to report security issues

### It's a good practice to make it easy for your users to report bugs, but the big question is: when this bug has a security impact, how can they safely report them to you without putting a target on you for malicious hackers?

Picture this: A security researcher discovers a vulnerability in your project but finds no clear or secure way to report it. Without a designated process, they might create a public issue or discuss it openly on social media. Even if they are well-intentioned and offer a fix, if they do it with a public pull request, others will see it before it's merged! This public disclosure will expose the vulnerability to malicious actors before you have a chance to address it, potentially leading to a zero-day exploit, attacking your project and its users.

### Security Policy

To avoid this, publish a security policy. A security policy, defined in a `SECURITY.md` file, details the steps for reporting security concerns, creating a transparent process for coordinated disclosure, and establishing the project team's responsibilities for addressing reported issues. This security policy can be as simple as "Please don't publish details in a public issue or PR, send us a private email at security@example.com", but can also contain other details such as when they should expect to receive an answer from you. Anything that can help the effectiveness and the efficiency of the disclosure process.

### Private Vulnerability Reporting

On some platforms, you can streamline and strengthen your vulnerability management process, from intake to broadcast, with private issues. On GitLab, this can be done with private issues. On GitHub, this is called private vulnerability reporting (PVR). PVR enables maintainers to receive and address vulnerability reports, all within the GitHub platform. GitHub will automatically create a private fork to write the fixes, and a draft security advisory. All of this remains confidential until you decide to disclose the issues and release the fixes. To close the loop, security advisories will be published, and will inform and protect all your users through their SCA tool.

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
