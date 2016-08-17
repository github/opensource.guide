---
title: The legal side of open source
---

Sharing your creative work with the world can be an exciting and rewarding experience. It can also mean a bunch of legal things you didn’t know you had to worry about.

Thankfully, you don’t have to start from scratch. This section will make sure you’ve got all your legal needs covered.

**(Do we need a legal disclaimer for this piece?)**

## Table of Contents

1. [Why do I need an open source license?](#why-do-i-need-an-open-source-license)
2. [Which open source license is appropriate for me?](#which-open-source-license-is-appropriate-for-me)
3. [Do I need a contributor agreement in addition to my open source license?](#do-i-need-a-contributor-agreement-in-addition-to-my-open-source-license)
4. [I’m a company open sourcing a project. What does my legal team need to know?](#im-a-company-open-sourcing-a-project-what-does-my-legal-team-need-to-know)
5. [I’m using others’ open source code. What does my legal team need to know?](#im-using-others-open-source-code-what-does-my-legal-team-need-to-know)

## Why do I need an open source license?

When you publish a creative work (which includes code), your work is under copyright by default. Unless you include a license that specifies otherwise, nobody can copy or modify your work without being subject to copyright law.

An open source license guarantees that others can use, modify, and share your project. It protects both you and anybody else who might interact with your project.

Making your GitHub project public is not the same as licensing your project. Public GitHub projects allow others to view and fork your project, but your work is otherwise copyrighted unless you add an open source license.

## Which open source license is appropriate for me?

There are [over 70 approved licenses](https://opensource.org/licenses/alphabetical) that comply with the generally accepted definition of open source. Here is a breakdown of three of the most common licenses.

* **For individuals releasing an open source project with no deeper interests,** consider the [MIT License](http://choosealicense.com/licenses/mit/), which is simple and permissive. People can use your project for whatever they like, as long as they provide attribution back to you and don’t hold you liable for anything.
* **For companies releasing an open source project,** consider the [Apache License 2.0](http://choosealicense.com/licenses/apache-2.0/). The Apache 2.0 license is appropriate for project owners who are concerned about patents. It provides an express grant of patent rights from contributors.
* **For those who care about keeping their code in the public domain,** consider the [GNU General Public License v3.0](http://choosealicense.com/licenses/gpl-3.0/), which is a copyleft license. That means anyone who distributes your code, or a derivative of your work, must make the source available under the same terms. It also provides an express grant of patent rights from contributors.

If your open source project isn’t software, consider a Creative Commons or other type of license that’s tailored for media. You can read more about choosing a non-software license [here](http://choosealicense.com/non-software/).

When you create a new project on GitHub, you are given the option to select a license. Including one of the above licenses will make your GitHub project open source. If you’d like to see other license options, check out [Choose a License](http://choosealicense.com) to find the right license for you.

## Do I need a contributor agreement in addition to my open source license?

Some open source projects, particularly when companies are involved, require a contributor agreement. These are legal agreements that must be signed by a contributor before they can make changes to the project.

Contributor agreements are used when the project owner wants to protect themselves, and their users, from future copyright claims from contributors. There are two major types of contributor agreements:

* [Contributor License Agreement (CLA)](https://www.apache.org/licenses/icla.txt): A CLA explicitly grants the project owner the right to distribute all contributions made by the contributor, either by assigning copyright or granting an irrevocable license. Some projects specify that CLAs only need to be signed for “non-trivial changes”: for example, fixing a significant bug rather than a small typo.
* [Developer Certificate of Origin (DCO)](http://developercertificate.org/): A DCO certifies that the contributor has the right to make their contribution and that they allow the project owner to use it in other distributions. Unlike a CLA, which must be explicitly signed, a DCO is required as a signature when the contribution is submitted, or is part of the project’s contribution policy.

There are some concerns associated with CLAs in particular. CLAs can be perceived as not friendly to the project’s community. They can also create a lot of administrative work for the project owner. Finally, CLAs increase the barrier to community participation by adding more paperwork than some believe is necessary.

Many projects that use a CLA are concerned about patents. If you have patent concerns, consider adopting a license with patent protections instead, such as the [Apache License 2.0](http://choosealicense.com/licenses/apache-2.0/), in which contributors expressly grant patent rights.

You can also consider using a DCO, which is less cumbersome than signing an agreement and provides similar benefits to a CLA. If your project is on GitHub, include the DCO in your CONTRIBUTING.md file, which is automatically referenced when someone submits a pull request. Or you can require that contributors include the DCO as a signature when they submit a pull request.

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
* [TLDRLegal](https://tldrlegal.com/)
* [A Model IP and Open Source Contribution Policy](https://processmechanics.com/2015/07/23/a-model-ip-and-open-source-contribution-policy/)
* [Introducing The Docker Developer Certificate Of Origin](https://blog.docker.com/2014/01/docker-code-contributions-require-developer-certificate-of-origin/) by @keeb
* [Broadening Node.js Contributions
](https://www.joyent.com/blog/broadening-node-js-contributions) by @bcantrill
