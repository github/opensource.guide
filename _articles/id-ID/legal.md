---
locale: id-ID
title: Sisi Hukum dari Open Source
description: Segala sesuatu yang pernah Anda tanyakan tentang sisi hukum open source, dan beberapa hal yang tidak Anda inginkan
class: legal
toc:
  kenapa-orang-orang-begitu-perhatian-terhadap-sisi-hukum-dari-open-source: "Kenapa orang-orang begitu perhatian terhadap sisi hukum dari open source?"
  apakah-proyek-publik-github-open-source: "Apakah proyek publik GitHub open source?"
  berikan-ringkasan-tentang-apa-yang-saya-perlukan-untuk-menjaga-proyek-saya: "Berikan ringkasan tentang apa yang saya perlukan untuk menjaga proyek saya"
  lisensi-open-source-mana-yang-sesuai-untuk-proyek-saya: "Lisensi open source mana yang sesuai untuk proyek saya?"
  bagaimana-jika-saya-hendak-mengubah-lisensi-proyek-saya: "Bagaimana jika saya hendak mengubah lisensi proyek saya?"
  apakah-proyek-saya-membutuhkan-perjanjian-kontributor-tambahan: "Apakah proyek saya membutuhkan perjanjian kontributor tambahan?"
  apa-yang-perlu-diketahui-tim-kuasa-hukum-perusahaan-saya: "Apa yang perlu diketahui tim kuasa hukum perusahaan saya?"
order: 10
image: /assets/images/cards/legal.png
---

## Memahami implikasi hukum dari open source

Membagikan pekerjaan kreatif Anda kepada dunia bisa menjadi sebuah pengalaman yang menarik dan berharga. Hal ini juga bisa berarti beberapa masalah hukum yang tidak Anda pikirkan sebelumnya. Untungnya, Anda tidak harus memulainya dari nol. Kami akan membahas beberapa masalah hukum yang Anda perlukan. (Sebelum Anda masuk lebih dalam, pastikan baca [Peringatan](../notices/).)

## Kenapa orang-orang begitu perhatian terhadap sisi hukum dari open source?

Kami senang Anda bertanya! Ketika Anda membuat pekerjaan kreatif (seperti menulis, grafis, atau kode), hasil karya tersebut berada dibawah hak cipta eksklusif secara default. Maksudnya, hukum mengasumsikan bahwa sebagai pencipta hasil karya Anda, Anda memiliki hak untuk menentukan apa yang boleh dilakukan oleh orang lain terhadap hasil karya Anda.

Secara umum, hal itu berarti tidak ada seorangpun yang dapat menggunakan, menyalin, mendistribusikan, atau memodifikasi hasil karya Anda tanpa terkena masalah hukum.

Open source adalah sebuah kondisi yang tidak lazim, karena sang pencipta justru mengharapkan bahwa orang lain akan menggunakan, memodifikasi, dan membagikan pekerjaan mereka. Tetapi karena secara dasar hukum masih hak cipta eksklusif, Anda perlu sebuah lisensi yang menjelaskan secara eksplisit tentang hak akses ini.

Jika Anda tidak menerapkan sebuah lisensi open source, semua orang yang berkontribusi terhadap proyek Anda juga menjadi pemilik hak cipta eksklusif dari pekerjaan mereka. Hal itu berarti tidak ada seorangpun yang boleh menggunakan, menyalin, mendistribusikan, atau memodifikasi kontribusi mereka -- dan itu termasuk Anda.

Akhirnya, proyek Anda mungkin memiliki ketergantungan dengan kebutuhan lisensi yang tidak Anda sadari sebelumnya. Komunitas proyek atau kebijakan perusahaan Anda mungkin juga memaksa proyek Anda untuk menggunakan lisensi open source yang spesifik. Kami akan membahas situasi-situasi tersebut

## Apakah proyek publik GitHub open source?

Ketika Anda [membuat proyek baru](https://help.github.com/articles/creating-a-new-repository/) pada GitHub, Anda memiliki opsi untuk membuat repositori **private** atau **public**.

![create repository](https://willysr.github.io/id-opensource.guide/assets/images/legal/repo-create-name.png)

**Membuat proyek GitHub Anda sebagai publik tidaklah sama dengan melisensikan proyek Anda.** Proyek publik dibahas pada [Perjanjian Layanan GitHub](https://help.github.com/articles/github-terms-of-service/#f-copyright-and-content-ownership), yang mengijinkan orang lain untuk melihat dan melakukan fork terhadap proyek Anda, tetapi jika tidak, maka tidak ada hak akses terhadap proyek Anda.

Jika Anda menginginkan orang lain untuk bisa menggunakan, menyalin, memodifikasi, atau berkontribusi balik pada proyek Anda, Anda perlu menyertakan sebuah lisensi open source. Sebagai contoh, seseorang tidak dapat menggunakan sembarang bagian dari proyek GitHub Anda pada kode mereka secara legal, meskipun bersifat publik, kecuali Anda memberikan ijin kepada mereka.

## Berikan ringkasan tentang apa yang saya perlukan untuk menjaga proyek saya.

Anda beruntung, karena saat ini lisensi open source sudah terstandarisasi dan mudah digunakan. Anda cukup menyalin dan menggunakan lisensi yang sudah ada pada proyek Anda.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), dan [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) adalah lisensi open source yang paling populer, tetapi terdapat opsi lain yang dapat Anda pilih. Anda bisa menemukan teks lengkap dari lisensi tersebut, termasuk instruksi bagaimana menggunakannya pada [choosealicense.com](https://choosealicense.com/).

Ketika Anda menciptakan proyek baru pada GitHub, Anda akan [diminta untuk menambahkan lisensi](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/282759?v=3&s=400" class="pquote-avatar" alt="avatar">
  Sebuah lisensi yang terstandarisasi berfungsi sebagai jembatan bagi mereka yang tidak memiliki pelatihan hukum untuk tahu secara pasti apa yang mereka bisa dan tidak bisa lakukan dengan perangkat lunak. Apabila memungkinkan, hindari istilah yang aneh, modifikasi, atau tidak standar, yang akan menjadi penghambat bagi orang lain untuk menggunakan kode Anda.
  <p markdown="1" class="pquote-credit">
— @benbalter, ["Everything a government attorney needs to know about open source software&nbsp;licensing"](http://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## Lisensi open source mana yang sesuai untuk proyek saya?

Jika Anda baru memulai, disarankan untuk menggunakan[Lisensi MIT](https://choosealicense.com/licenses/mit/). Lisensi ini pendek, mudah dipahami, dan mengijinkan setiap orang untuk melakukan apapun selama mereka mempertahankan salinan dari lisensi, termasuk catatan hak cipta Anda. Anda bisa merilis proyek pada lisensi yang berbeda jika diperlukan.

Jika Anda tidak memulai dari nol, memilih lisensi open source yang sesuai sangat bergantung dari tujuan Anda.

Proyek Anda memiliki (atau akan) **ketergantungan**. Misalnya, jika Anda membuat proyek open source berbasis Node.js, Anda kemungkinan akan menggunakan pustaka dari Node Package Manager (npm). Setiap pustaka yang Anda gunakan akan mmemiliki lisensi open sourcenya masing-masing. Jika lisensi yang mereka gunakan bersifat "permissive" (mengijinkan hak akses publik untuk menggunakan, memodifikasi, dan berbagi tanpa adanya kondisi apapun bagi pengguna lisensi), Anda bisa menggunakan sembarang lisensi apapun. Lisensi yang bersifat _permissive_ meliputi MIT, Apache 2.0, ISC, dan BSD.

Di satu sisi, jika salah satu dari lisensi ketergantungan Anda adalah "copyleft" (juga memberikan hak akses publik yang sama, kecuali pada kondisi yang mengharuskan penggunaan lisensi yang sama pada proyek turunan), maka proyek Anda harus menggunakan lisensi yang sama. Contoh lisensi copyleft meliputi GPLv2, GPLv3, dan AGPLv3.

Anda juga perlu memperhatikan **komunitas** akan menggunakan dan berkontribusi pada proyek Anda:

* **Apakah Anda ingin proyek Anda digunakan sebagai ketergantungan oleh proyek lain?** Mungkin paling tepat untuk menggunakan lisensi yang paling populer pada komunitas Anda. Sebagai contoh, [MIT](https://choosealicense.com/licenses/mit/) adalah lisensi yang paling populer untuk [pustaka npm](https://libraries.io/npm).
* **Apakah Anda ingin proyek Anda menarik bagi kalangan bisnis skala besar?** Kalangan bisnis yang berskala besar memiliki kencenderungan untuk menggunakan lisensi paten ekspress dari semua kontributor. Dalam hal ini, [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) dapat mencakup Anda dan mereka.
* **Apakah Anda ingin proyek Anda menarik bagi kontributor yang tidak ingin hasil kontribusinya tidak digunakan pada perangkat lunak tertutup?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) atau (jika mereka juga tidak mau berkontribusi pada layanan tertutup) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) merupakan pilihan yang tepat.

**Perusahaan** Anda mungkin memiliki kebutuhan lisensi yang khusus untuk proyek open sourcenya. Sebagai contoh, mungkin perusahaan akan membutuhkan lisensi yang bersifat _permissive_ sehingga perusahaan bisa menggunakan proyek Anda pada produk tertutup milik perusahaan. Atau perusahaan membutuhkan lisensi copyleft dan tambahan perjanjian kontributor (lihat dibawah) sehingga Anda hanya perusahaan Anda, dan bukan orang lain, yang boleh menggunakan proyek Anda pada perangkat lunak tertutup. Atau perusahaan Anda mungkin memiliki beberapa kebutuhan yang berkaitan dengan standar, tanggung jawab sosial, atau transparansi, y ang membutuhkan strategi lisensi khusus. Diskusikan dengan [divisi legal perusahaan](#apa-yang-perlu-diketahui-tim-kuasa-hukum-perusahaan-saya).

Ketika Anda menciptakan proyek baru pada GitHub, Anda diberikan opsi untuk memilih sebuah lisensi. Menyertakan salah satu lisensi diatas akan membuat proyek GitHub Anda menjadi open source. Jika Anda hendak melihat opsi lain, lihat pada [choosealicense.com](https://choosealicense.com) untuk menemukan lisensi yang tepat pada proyek Anda, meskipun [bukan perangkat lunak](https://choosealicense.com/non-software/).

## Bagaimana jika saya hendak mengubah lisensi proyek saya?

Most projects never need to change licenses. But occasionally circumstances change.

For example, as your project grows it adds dependencies or users, or your company changes strategies, any of which could require or want a different license. Also, if you neglected to license your project from the start, adding a license is effectively the same as changing licenses. There are three fundamental things to consider when adding or changing a your project's license:

**It's complicated.** Determining license compatibility and compliance and who holds copyright can get complicated and confusing very quickly. Switching to a new but compatible license for new releases and contributions is different from relicensing all existing contributions. Involve your legal team the first hint of any desire to change licenses. Even if you have or can obtain permission from your project's copyright holders for a license change, consider the impact of the change on your project's other users and contributors. Think of a license change as a "governance event" for your project that will more likely go smoothly with clear communications and consultation with your project's stakeholders. All the more reason to choose and use an appropriate license for your project from its inception!

**Your project's existing license.** If your project's existing license is compatible with the license you want to change to, you could just start using the new license. That's because if license A is compatible with license B, you'll comply with the terms of A while complying with the terms of B (but not necessarily vice versa). So if you're currently using a permissive license (e.g., MIT), you could change to a license with more conditions, so long as you retain a copy of the MIT license and any associated copyright notices (i.e., continue to comply with the MIT license's minimal conditions). But if your current license is not permissive (e.g., copyleft, or you don't have a license) and you aren't the sole copyright holder, you couldn't just change your project's license to MIT. Essentially, with a permissive license the project's copyright holders have given permission in advance to change licenses.

**Your project's existing copyright holders.** If you're the sole contributor to your project then either you or your company is the project's sole copyright holder. You can add or change to whatever license you or your company wants to. Otherwise there may be other copyright holders that you need agreement from in order to change licenses. Who are they? People who have commits in your project is a good place to start. But in some cases copyright will be held by those people's employers. In some cases people will have only made _de minimis_ contributions, but there's no hard and fast rule that contributions under some number of lines of code are not subject to copyright. What to do? It depends. For a relatively small and young project, it may be feasible to get all existing contributors to agree to a license change in an issue or pull request. For large and long-lived projects, you may have to seek out many contributors and even their heirs. Mozilla took years (2001-2006) to relicense Firefox, Thunderbird, 
and related software.

Alternatively, you can have contributors agree in advance (via an additional contributor agreement -- see below) to certain license changes under certain conditions, beyond those allowed by your existing open source license. This shifts the complexity of changing licenses a bit. You'll need more help from your lawyers up front, and you'll still want to clearly communicate with your project's stakeholders when executing a license change.

## Apakah proyek saya membutuhkan perjanjian kontributor tambahan?

Probably not. For the vast majority of open source projects, an open source license implicitly serves as both the inbound (from contributors) and outbound (to other contributors and users) license. If your project is on GitHub, the GitHub Terms of Service make "inbound=outbound" the [explicit default](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license).

An additional contributor agreement -- often called a Contributor License Agreement (CLA) -- can create administrative work for project maintainers. How much work an agreement adds depends on the project and implementation. A simple agreement might require that contributors confirm, with a click, that they have the rights necessary to contribute under the project open source license. A more complicated agreement might require legal review and sign-off from contributors' employers.

Also, by adding "paperwork" that some believe is unnecessary, hard to understand, or unfair (when the agreement recipient gets more rights than contributors or the public do via the project's open source license), an additional contributor agreement may be perceived as unfriendly to the project's community.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/328614?v=3&s=460" class="pquote-avatar" alt="avatar">
    We have eliminated the CLA for Node.js. Doing this lowers the barrier to entry for Node.js contributors thereby broadening the contributor base.
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Broadening Node.js Contributions"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Some situations where you may want to consider an additional contributor agreement for your project include:

* Your lawyers want all contributors to expressly accept (_sign_, online or offline) contribution terms, perhaps because they feel the open source license itself is not enough (even though it is!). If this is the only concern, a contributor agreement that affirms the project's open source license should be enough. The [jQuery Individual Contributor License Agreement](https://contribute.jquery.org/CLA/) is a good example of a lightweight additional contributor agreement. For some projects, a [Developer Certificate of Origin](https://github.com/probot/dco) can be an even simpler alternative.
* Your project uses an open source license that does not include an express patent grant (such as MIT), and you need a patent grant from all contributors, some of whom may work for companies with large patent portfolios that could be used to target you or the project's other contributors and users. The [Apache Individual Contributor License Agreement](https://www.apache.org/licenses/icla.pdf) is a commonly used additional contributor agreement that has a patent grant mirroring the one found in the Apache License 2.0.
* Your project is under a copyleft license, but you also need to distribute a proprietary version of the project. You'll need every contributor to assign copyright to you or grant you (but not the public) a permissive license. The [MongoDB Contributor Agreement](https://www.mongodb.com/legal/contributor-agreement) is an example this type of agreement.
* You think your project might need to change licenses over its lifetime and want contributors to agree in advance to such changes.

If you do need to use an additional contributor agreement with your project, consider using an integration such as [CLA assistant](https://github.com/cla-assistant/cla-assistant) to minimize contributor distraction.

## "Apa yang perlu diketahui tim kuasa hukum perusahaan saya

If you're releasing an open source project as a company employee, first, your legal team should know that you're open sourcing a project.

For better or worse, consider letting them know even if it's a personal project. You probably have an "employee IP agreement" with your company that gives them some control of your projects, especially if they are at all related to the company's business or you use any company resources to develop the project. Your company _should_ easily give you permission, and maybe already has through an employee-friendly IP agreement or a company policy. If not, you can negotiate (for example, explain that your project serves the company's professional learning and development objectives for you), or avoid working on your project until you find a better company.

**If you're open sourcing a project for your company,** then definitely let them know. Your legal team probably already has policies for what open source license (and maybe additional contributor agreement) to use based on the company's business requirements and expertise around ensuring your project complies with the licenses of its dependencies. If not, you and they are in luck! Your legal team should be eager to work with you to figure this stuff out. Some things to think about:

* **Third party material:** Does your project have dependencies created by others or otherwise include or use others' code? If these are open source, you'll need to comply with the materials' open source licenses. That starts with choosing a license that works with the third party open source licenses (see above). If your project modifies or distributes third party open source material, then your legal team will also want to know that you're meeting other conditions of the third party open source licenses such as retaining copyright notices. If your project uses others' code that doesn't have an open source license, you'll probably have to ask the third party maintainers to [add an open source license](https://choosealicense.com/no-license/#for-users), and if you can't get one, stop using their code in your project.

* **Trade secrets:** Consider whether there is anything in the project that the company does not want to make available to the general public. If so, you could open source the rest of your project, after extracting the material you want to keep private.

* **Patents:** Is your company applying for a patent of which open sourcing your project would constitute [public disclosure](https://en.wikipedia.org/wiki/Public_disclosure)? Sadly, you might be asked to wait (or maybe the company will reconsider the wisdom of the application). If you're expecting contributions to your project from employees of companies with large patent portfolios, your legal team may want you to use a license with an express patent grant from contributors (such as Apache 2.0 or GPLv3), or an additional contributor agreement (see above).

* **Trademarks:** Double check that your project's name [does not conflict with any existing trademarks](../starting-a-project/#avoiding-name-conflicts). If you use your own company trademarks in the project, check that it does not cause any conflicts. [FOSSmarks](http://fossmarks.org/) is a practical guide to understanding trademarks in the context of free and open source projects.

* **Privacy:** Does your project collect data on users? "Phone home" to company servers? Your legal team can help you comply with company policies and external regulations.

If you're releasing your company's first open source project, the above is more than enough to get through (but don't worry, most projects shouldn't raise any major concerns).

Longer term, your legal team can do more to help the company get more from its involvement in open source, and stay safe:

* **Employee contribution policies:** Consider developing a corporate policy that specifies how your employees contribute to open source projects. A clear policy will reduce confusion among your employees and help them contribute to open source projects in the company's best interest, whether as part of their jobs or in their free time. A good example is Rackspace's [Model IP and Open Source Contribution Policy](https://processmechanics.com/a-model-ip-and-open-source-contribution-policy/).

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/214698?v=3&s=400" class="pquote-avatar" alt="avatar">
  Letting out the IP associated with a patch builds the employee's knowledge base and reputation. It shows that the company is invested in the development of that employee and creates a sense of empowerment and autonomy. All of these benefits also lead to higher morale and better employee retention.
  <p markdown="1" class="pquote-credit">
— @vanl, ["A Model IP and Open Source Contribution Policy"](https://processmechanics.com/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **What to release:** [(Almost) everything?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) If your legal team understands and is invested in your company's open source strategy, they'll be best able to help rather than hinder your efforts.
* **Compliance:** Even if your company doesn't release any open source projects, it uses others' open source software. [Awareness and process](https://www.linux.com/blog/why-companies-use-open-source-need-compliance-program) can prevent headaches, product delays, and lawsuits.

<aside markdown="1" class="pquote">
  Organizations must have a license and compliance strategy in place that fits both \["permissive" and "copyleft"\] categories. This begins with keeping a record of the licensing terms that apply to the open source software you’re using — including subcomponents and dependencies.
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Open Source Software: Compliance Basics And Best Practices"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Patents:** Your company may wish to join the [Open Invention Network](http://www.openinventionnetwork.com/), a shared defensive patent pool to protect members' use of major open source projects, or explore other [alternative patent licensing](https://www.eff.org/document/hacking-patent-system-2016).
* **Governance:** Especially if and when it makes sense to move a project to a [legal entity outside of the company](../leadership-and-governance/#do-i-need-a-legal-entity-to-support-my-project).
