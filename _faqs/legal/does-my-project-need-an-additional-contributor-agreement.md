---
title: Does my project need an additional contributor agreement?
---

Probably not. For the vast majority of open source projects, an open source license implicitly serves as both the inbound (from contributors) and outbound (to other contributors and users) license.

Contributor agreements can create additional administrative work for project maintainers. How much work these agreements add depends on the project and implementation. A simple agreement might require that contributors confirm, with a click, that they have the rights necessary to contribute under the project open source license. A more complicated agreement might require legal review and sign-off from contributors' employers.

In addition, contributor agreements are sometimes perceived as not friendly to the project's community. They can also increase the barrier to community participation by adding more paperwork than some believe is necessary.

Here are some situations where you may want to consider an additional contribution agreement for your project:

* Your lawyers want all contributors to expressly accept (_sign_, online or offline) contribution terms, perhaps because they feel the open source license itself is not enough (even though it is!). If this is the only concern, a contributor agreement that affirms the project's open source license should be enough. The [jQuery Individual Contributor License Agreement](https://contribute.jquery.org/CLA/) is a good example of a lightweight additional contributor agreement. For some projects, a [Developer Certificate of Origin](http://developercertificate.org/) can be an even simpler alternative.
* Your project uses an open source license that does not include an express patent grant (such as MIT), and you need a patent grant from all contributors, some of whom may work for companies with large patent portfolios that could be used to target you or the project's other contributors and users. The [Apache Individual Contributor License Agreement](https://www.apache.org/licenses/icla.txt) is a commonly used additional contributor agreement that has a patent grant mirroring the one found in the Apache License 2.0.
* Your project is under a copyleft license, but you also need to distribute a proprietary version of the project. You'll need every contributor to assign copyright to you or grant you (but not the public) a permissive license. The [MongoDB Contributor Agreement](https://www.mongodb.com/legal/contributor-agreement) is an example this type of agreement.

If you do need to use an additional contributor agreement with your project, consider using an integration such as [CLA assistant](https://github.com/cla-assistant/cla-assistant) to minimize contributor distraction.

## Further reading

* [Introducing The Docker Developer Certificate Of Origin](https://blog.docker.com/2014/01/docker-code-contributions-require-developer-certificate-of-origin/) by @keeb
* [Broadening Node.js Contributions](https://www.joyent.com/blog/broadening-node-js-contributions) by @bcantrill
