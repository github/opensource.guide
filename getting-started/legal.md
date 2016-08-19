---
title: The legal side of open source
breadcrumb: Getting Started
---

Sharing your creative work with the world can be an exciting and rewarding experience. It can also mean a bunch of legal things you didn't know you had to worry about.

Thankfully, you don't have to start from scratch. This section will make sure you've got all your legal needs covered.

**(Do we need a legal disclaimer for this piece?)**

## Table of Contents

1. [Why does my project need an open source license?](#why-does-my-project-need-an-open-source-license)
2. [Which open source license is appropriate for my project?](#which-open-source-license-is-appropriate-for-my-project)
3. [Does my project need an additional contributor agreement?](#does-my-project-need-an-additional-contributor-agreement)
4. [What does my company's legal team need to know?](#what-does-my-companys-legal-team-need-to-know)

## Why does my project need an open source license?

When you make a creative work (which includes code), the work is under exclusive copyright by default. Unless you include a license that specifies otherwise, nobody else can use, copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or litigation. Once the work has other contributors (each a copyright holder), "nobody" starts including you.

An open source license guarantees that everyone can use, modify, and share your project. It protects both you and anybody else who might interact with your project.

Making your GitHub project public is not the same as licensing your project. Public GitHub projects allow others to view and fork your project, but your work otherwise comes with no permissions unless you add an open source license.

Also, the licenses of your project's dependencies, the communities you hope will use your project, or your employer's policies may effectively require your project to use an open source license, even a specific open source license. We'll cover these situations below.

## Which open source license is appropriate for my project?

If you're starting from a blank slate, it's hard to go wrong with the [MIT License](http://choosealicense.com/licenses/mit/). It's short, very easy to understand, and allows anyone to do anything so long as they keep a copy of the license, including your copyright notice. You'll be able to release the project under a different license if you ever need to.

Otherwise, picking the right open source license for your project depends on your objectives.

Your project very likely has (or will have) **dependencies**. For example, if you're open sourcing a Node.js project, you'll probably use libraries from the Node Package Manager (npm). Each of those libraries you depend on will have its own open source license. If each of their licenses is "permissive" (gives the public permission to use, modify, and share, without any condition for downstream licensing), you can use any license you want. Common permissive licenses include MIT, Apache 2.0, ISC, and BSD.

On the other hand, if any of your dependencies' licenses are "strong copyleft" (also gives public same permissions, subject to condition of using the same license downstream), then your project will have to use the same license. Common strong copyleft licenses include GPLv2, GPLv3, and AGPLv3.

You may also want to consider the **communities** you hope will use and contribute to your project:

* **Do you want your project to be used as a dependency by other projects?** Probably best to use the most popular license in your relevant community. For example, [MIT](http://choosealicense.com/licenses/mit/) is the most popular license for [npm libraries](https://libraries.io/npm).
* **Do you want your project to appeal to large businesses?** A large business will likely want an express patent license from all contributors. In this case, [Apache 2.0](http://choosealicense.com/licenses/apache-2.0/) has you (and them) covered.
* **Do you want your project to appeal to contributors who do not want their contributions to be used in closed source software?** [GPLv3](http://choosealicense.com/licenses/gpl-3.0/) or (if they also do not wish to contribute to closed source services) [AGPLv3](http://choosealicense.com/licenses/agpl-3.0/) will go over well.

Your **company** may have specific licensing requirements for its open source projects. For example, it may require a permissive license so that the company can use your project in the company's closed source product. Or your company may require a strong copyleft license and an additional contributor agreement (see below) so that only your company, and nobody else, can use your project in closed source software. Or your company may have certain needs related to standards, social responsibility, or transparency, any of which could require a particular licensing strategy. Talk to your company's legal department (also see below).

When you create a new project on GitHub, you are given the option to select a license. Including one of the licenses mentioned above will make your GitHub project open source. If you'd like to see other options, check out [ChooseALicense.com](http://choosealicense.com) to find the right license for your project, even if it [isn't software](http://choosealicense.com/non-software/).

## Does my project need an additional contributor agreement?

Probably not. For the vast majority of open source projects, an open source license implicitly serves as both the inbound (from contributors) and outbound (to other contributors and users) license.

Contributor agreements can create additional administrative work for project maintainers. How much work these agreements add depends on the project and implementation. A simple agreement might require that contributors confirm, with a click, that they have the rights necessary to contribute under the project open source license. A more complicated agreement might require legal review and sign-off from contributors' employers.

In addition, contributor agreements are sometimes perceived as not friendly to the project's community. They can also increase the barrier to community participation by adding more paperwork than some believe is necessary.

Here are some situations where you may want to consider an additional contribution agreement for your project:

* Your lawyers want all contributors to expressly accept (_sign_, online or offline) contribution terms, perhaps because they feel the open source license itself is not enough (even though it is!). If this is the only concern, a contributor agreement that affirms the project's open source license should be enough. The [jQuery Individual Contributor License Agreement](https://contribute.jquery.org/CLA/) is a good example of a lightweight additional contributor agreement. For some projects, a [Developer Certificate of Origin](http://developercertificate.org/) can be an even simpler alternative.
* Your project uses an open source license that does not include an express patent grant (such as MIT), and you need a patent grant from all contributors, some of whom may work for companies with large patent portfolios that could be used to target you or the project's other contributors and users. The [Apache Individual Contributor License Agreement](https://www.apache.org/licenses/icla.txt) is a commonly used additional contributor agreement that has a patent grant mirroring the one found in the Apache License 2.0.
* Your project is under a copyleft license, but you also need to distribute a proprietary version of the project. You'll need every contributor to assign copyright to you or grant you (but not the public) a permissive license. The [MongoDB Contributor Agreement](https://www.mongodb.com/legal/contributor-agreement) is an example this type of agreement.

If you do need to use an additional contributor agreement with your project, consider using an integration such as [CLA assistant](https://github.com/cla-assistant/cla-assistant) to minimize contributor distraction.

## What does my company's legal team need to know?

First, they should know that you're open sourcing a project.

For better or worse, consider letting them know even if it's a personal project. You probably have an "employee IP agreement" with your company that gives them some control of your projects, especially if they are at all related to the company's business or you use any company resources to develop the project. Your company _should_ easily give you permission, and maybe already has through an employee-friendly IP agreement or a company policy. If not, you can negotiate (for example, explain that your project serves the company' professional learning and development objectives for you), or avoid working on your project until you find a better company.

If you're open sourcing a project for your company, then definitely let them know. Your legal team probably already has policies for what open source license (and maybe additional contributor agreement) to use based on the company's business requirements and expertise around ensuring your project complies with the licenses of its dependencies. If not, you and they are in luck! Your legal team should be eager to work with you to figure this stuff out. Some things to think about:

* **Third party material:** Does your project have dependencies created by others or otherwise include or use others' code? If these are open source, you'll need to comply with the materials' open source licenses. That starts with choosing a license that works with the third party open source licenses (see above). If your project modifies or distributes third party open source material, then your legal team will also want to know that you're meeting other conditions of the third party open source licenses such as retaining copyright notices. If your project uses others' code that does't have an open source license, you'll probably have to ask the third party maintainers to [add an open source license](http://choosealicense.com/no-license/#for-users), and if you can't get one, stop using their code in your project.
* **Trade secrets:** Consider whether there is anything in the project that the company does not want to make available to the general public. If so, you could open source the rest of your project, after extracting the material the you want to keep private.
* **Patents:** Is your company applying for a patent of which open sourcing your project would constitute [public disclosure](https://en.wikipedia.org/wiki/Public_disclosure)? Sadly, you might be asked to wait (or maybe the company will reconsider the wisdom of the application). If you're expecting contributions to your project from employees of companies with large patent portfolios, your legal team may want you to use a license with an express patent grant from contributors (such as Apache 2.0 or GPLv3), or an additional contributor agreement (see above).
* **Trademarks:** Double check that your project's name [does not conflict with any existing trademarks](../branding/#avoiding-name-conflicts). If you use your own company trademarks in the project, check that it does not cause any conflicts.
* **Privacy:** Does your project collect data on users? "Phone home" to company servers? Your legal team can help you comply with company policies and external regulations.

If you're releasing your company's first open source project, the above is more than enough to get through (but don't worry, most projects shouldn't raise any major concerns).

Longer term your legal team can do more to help the company get more from its involvement in open source, and stay safe:

* **Employee contribution policies:** Consider developing a corporate policy that specifies how your employees contribute to open source projects. A clear policy will reduce confusion among your employees and help them contribute to open source projects in the company's best interest, whether as part of their jobs or in their free time. A good example is Rackspace's [Model IP and Open Source Contribution Policy](https://processmechanics.com/2015/07/23/a-model-ip-and-open-source-contribution-policy/).
* **What to release:** [(Almost) everything?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) If your legal team understands and is invested in your company's open source strategy, they'll be best able to help rather than hinder your efforts.
* **Compliance:** Even if your company doesn't release any open source projects, it uses others' open source software. [Awareness and process](https://www.linux.com/blog/why-companies-use-open-source-need-compliance-program) can prevent headaches, product delays, and lawsuits.
* **Patents:** Your company may wish to join the [Open Invention Network](http://www.openinventionnetwork.com/), a shared defensive patent pool to protect members' use of major open source projects, or explore other [alternative patent licensing](https://www.eff.org/document/hacking-patent-system-2016).
* **Governance:** Especially if and when it makes sense to move a project to a [legal entity outside of the company](../../sustaining/leadership/#do-i-need-a-legal-entity-to-support-my-project).

## Further reading

* [ChooseALicense.com](http://choosealicense.com)
* [Over 70 approved licenses](https://opensource.org/licenses/alphabetical) that conform with the generally accepted definition of open source
* [A Model IP and Open Source Contribution Policy](https://processmechanics.com/2015/07/23/a-model-ip-and-open-source-contribution-policy/) by @vanl
* [Introducing The Docker Developer Certificate Of Origin](https://blog.docker.com/2014/01/docker-code-contributions-require-developer-certificate-of-origin/) by @keeb
* [Broadening Node.js Contributions](https://www.joyent.com/blog/broadening-node-js-contributions) by @bcantrill
* [FOSSmarks](http://fossmarks.org/) is "a practical guide to understanding trademarks in the context of Free and Open Source projects."
