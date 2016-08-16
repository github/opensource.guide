---
title: The legal side of open source
---

Sharing your creative work with the world can be an exciting and rewarding experience. It can also mean a bunch of legal things you didn’t know you had to worry about.

Thankfully, you don’t have to start from scratch. This section will make sure you’ve got all your legal needs covered.

**(Do we need a legal disclaimer for this piece?)**

## Table of Contents

1. [Why does my project need an open source license?](#why-does-my-project-need-an-open-source-license)
2. [Which open source license is appropriate for my project?](#which-open-source-license-is-appropriate-for-my-project)
3. [Does my project need an additional contributor agreement?](#does-my-project-need-an-additional-contributor-agreement)
4. [I’m at a company open sourcing a project. What does my legal team need to know?](#im-a-company-open-sourcing-a-project-what-does-my-legal-team-need-to-know)
5. [I’m using others’ open source code. What does my legal team need to know?](#im-using-others-open-source-code-what-does-my-legal-team-need-to-know)

## Why does my project need an open source license?

When you make a creative work (which includes code), the work is under exclusive copyright by default. Unless you include a license that specifies otherwise, nobody else can use, copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or litigation. Once the work has other contributors (each a copyright holder), nobody includes you.

An open source license guarantees that everyone can use, modify and share your project. It protects both you and anybody else who might interact with your project.

Making your GitHub project public is not the same as licensing your project. Public GitHub projects allow others to view and fork your project, but your work otherwise comes with no permissions unless you add an open source license.

## Which open source license is appropriate for my project?

There are [over 70 approved licenses](https://opensource.org/licenses/alphabetical) that conform with the generally accepted definition of open source. Here is a breakdown of three of the most common licenses.

* **For individuals releasing an open source project with no deeper interests,** consider the [MIT License](http://choosealicense.com/licenses/mit/), a short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
* **For companies releasing an open source project,** consider the [Apache License 2.0](http://choosealicense.com/licenses/apache-2.0/), also a permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
* **For those who care about keeping their code open source,** consider the [GNU General Public License v3.0](http://choosealicense.com/licenses/gpl-3.0/), which is a strong copyleft license with permissions conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.

If your open source project isn’t software, one of the above licenses will still work, but you can also read about open licenses for domains such as open source hardware design, data, books, music, video, documentation, and fonts [here](http://choosealicense.com/non-software/).

When you create a new project on GitHub, you are given the option to select a license. Including one of the above licenses will make your GitHub project open source. If you’d like to see other license options, check out [Choose a License](http://choosealicense.com) to find the right license for you.

## Does my project need an additional contributor agreement?

Probably not. For the vast majority of open source projects, an open source license implicitly serves as both the inbound (from contributors) and outbound (to other contributors and users) license.

An additional agreement adds a variable amount of overhead to accepting contributions, depending on the project and implementation, ranging from minimal for simple agreements that only affirm, with a single click, that the contributor has the rights necessary to contribute under the project open source license, to open-ended, for complex and asymmetric agreements that need legal review and sign-off from contributors’ employers.

Here are some situations for which you may need to deploy an additional contribution agreement for your project:

* Your lawyers want all contributors to expressly accept (_sign_, online or offline) contribution terms, perhaps based on a feeling that bare open source licenses cannot be robust in theory, even though they are in practice. If this is the only concern, an additional contributor agreement that affirms the project open source license should suffice. The [jQuery Individual Contributor License Agreement](https://contribute.jquery.org/CLA/) is an example of such a light additional contributor agreement. For some projects, a [Developer Certificate of Origin](http://developercertificate.org/) can be an even lighter alternative.
* Your project is under an open source license such as MIT that does not include an express patent grant, and you need a patent grant from all contributors, some of who may work for companies with large patent portfolios that could be used to target you or the project’s other contributors and users. The [Apache Individual Contributor License Agreement](https://www.apache.org/licenses/icla.txt) is a commonly used additional contributor agreement that has a patent grant mirroring the one found in the Apache License 2.0.
* Your project is under a copyleft license, but you also need to distribute a proprietary version of the project. You'll need every contributor to assign copyright to you or grant you (but not the public) a permissive license. The [MongoDB Contributor Agreement](https://www.mongodb.com/legal/contributor-agreement) is an example of such an agreement.

If you do need to use an additional contributor agreement with your project, consider using an integration such as [CLA assistant](https://github.com/cla-assistant/cla-assistant) to minimize contributor distraction.

## I’m a company open sourcing a project. What does my legal team need to know?

If you are a company open sourcing a project, there are a few legal aspects you may want to consider.

* **Existing Intellectual Property (IP):** Consider whether there is anything existing in the project that might fall under company IP, which you would not want to make available to the general public. If so, you could open source the rest of your project, but keep the IP private.
* **Future Patents:** If you are concerned that there may be patents associated with your project later on, use an open source license that provides patent protections (such as the [Apache License 2.0](http://choosealicense.com/licenses/apache-2.0/)).
* **Employee contribution policies:** Consider developing a corporate policy that specifies how your employees contribute to open source projects, especially if you expect employees to maintain the project. A clear corporate policy will reduce confusion among your employees and encourage them to make open source contributions during work hours. A good example is Rackspace’s [Model IP and Open Source Contribution Policy](https://processmechanics.com/2015/07/23/a-model-ip-and-open-source-contribution-policy/).
* **Trademarks:** Double check that your project’s name does not conflict with any existing trademarks. If you use your own company trademarks in the project, check that it does not cause any conflicts.

These are starting points for conversation. Be sure to run any open source project by your legal team before proceeding!

## I’m using others’ open source code. What does my legal team need to know?

The implications of using others’ open source code in your software depends on that project’s license. (If the project does not have an open source license, don’t use it!)

Some open source licenses, like the GNU GPLv3, require that any software using the code must license the source under the same terms. If you are a company using code with these restrictions, you will want to proceed carefully.

Other open source licenses, like the MIT license, are very permissive. They may still require attribution.

If you use others’ open source code to create anything that could be considered company IP, you will want to read the terms of the license carefully to understand your patent rights.

To learn more about the implications of different open source licenses, [TLDRLegal](https://tldrlegal.com/) is a great resource.

## Further reading

* [ChooseALicense.com](http://choosealicense.com)
* [A Model IP and Open Source Contribution Policy](https://processmechanics.com/2015/07/23/a-model-ip-and-open-source-contribution-policy/)
* [Introducing The Docker Developer Certificate Of Origin](https://blog.docker.com/2014/01/docker-code-contributions-require-developer-certificate-of-origin/) by Nick Stinemates
* [Broadening Node.js Contributions
](https://www.joyent.com/blog/broadening-node-js-contributions) by Bryan Cantrill
