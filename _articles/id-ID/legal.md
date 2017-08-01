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

Sebagian besar proyek tidak perlu mengubah lisensi, Tetapi seringkali kondisi berubah.

Sebagai contoh, seiring dengan perkembangan proyek diperlukan tambahan ketergantungan atau pengguna, atau perusahaan Anda mengubah strategi, yang pada akhirnya membutuhkan atau menginginkan lisensi yang berbeda. Jika Anda mengabaikan lisensi sejak awal, menambahkan lisensi sama halnya dengan mengubah lisensi. Terdapat tiga hal dasar yang perlu dipertimbangkan ketika menambahkan atau mengubah lisensi proyek Anda:

**Rumit.** Menentukan kompatibilitas dan kesesuaian lisensi dan siapa yang memegang hak cipta bisa menjadi rumit dan membingungkan. Berpindah pada lisensi baru yang kompatibel untuk rilis dan kontribusi baru berbeda dengan melakukan perubahan lisensi pada semua kontribusi yang ada. Libatkan tim hukum untuk perubahan lisensi. Meskipun Anda bisa mendapatkan ijin dari semua pemilik hak cipta pada proyek Anda untuk perubahan lisensi, pertimbangkan dampak dari perubahan tersebut pada pengguna dan kontributor proyek Anda. Anggap perubahan lisensi sebagai sebuah "kejadian pengaturan" bagi proyek Anda yang akan berjalan lancar dengan komunikasi yang jelas dan konsultasi dengan semua yang terlibat pada proyek Anda. Hal ini juga menjadi alasan kuat untuk memilih dan menggunakan lisensi yang tepat sejak awal!

**Lisensi proyek Anda saat ini.** Jika lisensi proyek Anda saat ini kompatibel dengan lisensi baru, Anda bisa langsung menggunakan lisensi baru. Hal itu karena jika lisensi A kompatibel dengan B, maka Anda akan sesuai dengan perjanjian pada A dan sekaligus sesuai dengan perjanjian B (tidak harus sebaliknya). Sehingga jika Anda menggunakan lisensi yang bersifat _permissive_ (misalnya MIT), Anda bisa mengubah menjadi lisensi dengan lebih banyak kondisi, selama Anda mempertahankan salinan lisensi MIT dan catatan hak cipta yang sudah ada (dengan kata lain, terus sesuai dengan kondisi minimal dari lisensi MIT). Tetapi jika lisensi Anda saat ini tidak bersifat _permissive_ (misalnya, copyleft, atau Anda tidak memiliki lisensi) dan Anda bukan satu-satunya pemegang hak cipta, Anda tidak bisa mengubah lisensi proyek Anda menjadi MIT. Intinya, dengan lisensi _permissive_, pemegang hak cipta pada proyek telah memberikan ijin di awal untuk mengubah lisensi.

**Pemegang hak cipta proyek Anda saat ini.** Jika Anda satu-satunya kontributor pada proyek Anda maka Anda atau perusahaan Anda adalah satu-satunya pemegang hak cipta proyek. Anda bisa menambahkan atau mengubah ke lisensi yang Anda atau perusahaan Anda harapkan. Jika tidak, maka terdapat pemegang hak cipta lain yang perlu Anda ajak berdiskusi sebelum melakukan perubahan lisensi. Siapa mereka? Orang-orang yang telah melakukan commit pada proyek Anda adalah tempat terbaik untuk memulai. Tetapi pada beberapa kasus hak cipta akan dipegang oleh perusahaan yang memperkerjakan orang-orang tersebut. Pada beberapa kasus, orang-orang akan melakukan kontribusi _de minimis_, tetapi tidak ada aturan yang menyatakan bahwa kontribusi dibawah beberapa baris kode tidak masuk kedalam hak cipta. Apa yang harus dilakukan? Hal itu sangat tergantung dari beberapa hal. Untuk proyek yang relatif kecil dan baru, mungkin masih dimungkinkan untuk mengumpulkan semua kontributor untuk menyetujui perubahan lisensi pada sebuah laporan masalah atau pull request. Untuk proyek yang besar atau sudah berusia cukup lama, Anda perlu mencari banyak kontributor dan mungkin penerusnya. Mozilla membutuhkan waktu bertahun-tahun (2001-2006) untuk melakukan lisensi ulang Firefox, Thunderbird, dan perangkat lunak lainnya.

Alternatif lain, Anda bisa mendapatkan persetujuan kontributor di awal (melalui perjanjian tambahan kontributor -- lihat dibawah) untuk melakukan perubahan lisensi pada beberapa kondisi, diluar apa yang diijinkan oleh lisensi proyek open source yang sudah ada. Hal ini sedikit mengubah kompleksitas dari perubahan lisensi. Anda akan membutuhkan lebih banyak bantuan dari pengacara Anda di awal, dan Anda perlu mengkomunikasikan hal ini dengan jelas pada orang-orang yang terlibat pada proyek ketika mengeksekusi perubahan lisensi.

## Apakah proyek saya membutuhkan perjanjian kontributor tambahan?

Kemungkinan tidak. Untuk sebagian besar proyek open source, lisensi open source secara implisit berfungsi sebagai lisensi inbound (dari kontributor) dan outbound (bagi kontributor dan pengguna lainnya). Jika proyek Anda berada pada GitHub, Perjanjian Layanan GitHub membuat aturan "inbound=outbound" [default secara eksplisit](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license).

Sebuah perjanjian kontributor tambahan -- seringkali disebut Contributor License Agreement (CLA) -- bisa menimbulkan pekerjaan administratif tambahan bagi pengelola proyek. Seberapa banyak pekerjaan tersebut tergantung dari proyek dan implementasinya. Sebuah perjanjian yang sederhana mungkin meminta kontributor untuk melakukan konfirmasi dengan satu klik, bahwa mereka memiliki hak yang cukup untuk berkontribusi dibawah lisensi open source.  Perjanjian yang lebih kompleks mungkin membutuhkan review hukum dan tanda tangan dari perusahaan yang memperkerjakan kontributor tersebut.

Juga, dengan menambahkan "pekerjaan administratif" yang dipercaya oleh sebagian orang sebagai sesuatu yang tidak perlu, susah dipahami, atau tidak adil (ketika penerima perjanjian mendapatkan lebih banyak hak dibandingkan kontributor atau publik melalui lisensi open source), sebuah perjanjian kontributor tambahan juga dipandang sebagai sesuatu yang tidak ramah bagi komunitas proyek.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/328614?v=3&s=460" class="pquote-avatar" alt="avatar">
    Kami telah menghilangkan CLA untuk Node.js. Dengan melakukan hal ini akan mengurangi hambatan bagi kontributor Node.js untuk bergabung sehingga memperluas area basis kontributor.
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Broadening Node.js Contributions"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Beberapa situasi dimana Anda ingin mempertimbangkan perjanjian kontributor tambahan pada proyek Anda meliputi:

* Pengacara Anda ingin semua kontributor menerima perjanjian kontribusi (_tandatangan_, online atau offline), karena mereka merasa lisensi open source tidaklah cukup (meskipun sebenarnya sudah!). Jika ini merupakan satu-satunya alasan, sebuah perjanjian kontributor yang mengakui lisensi open source sudahlah cukup. [Perjanjian Lisensi Kontributor Individual jQuery](https://contribute.jquery.org/CLA/) adalah contoh bagus dari perjanjian kontributor tambahan yang sederhana. Untuk beberapa proyek [Developer Certificate of Origin](https://github.com/probot/dco) mungkin menjadi alternatif yang lebih sederhana.
* Proyek Anda menggunakan lisensi open source yang tidak menyertakan ijin patent (seperti MIT), dan Anda perlu pengajuan patent dari semua kontributor, beberapa diantaranya yang mungkin bekerja pada perusahaan dengan portofolio paten yang besar yang bisa digunakan untuk menyerang Anda atau kontributor atau pengguna proyek Anda. [Perjanjian Lisensi Kontributor Individual Apache](https://www.apache.org/licenses/icla.pdf) adalah perjanjian kontributor tambahan yang sering dipakai dan memiliki ijin penggunaan patent mengikuti apa yang bisa ditemukan pada lisensi Apache 2.0.
* Proyek Anda berada dibawah lisensi copyleft, tetapi Anda juga perlu mendistribusikan versi tertutup dari proyek Anda. Anda mungkin perlu meminta setiap kontributor untuk menyatakan hak cipta kepada Anda atau memberikan ijin kepada Anda (tetapi bukan kepada publik) sebuah lisensi yang bersifat _permissive_. [Perjanjian Kontributor MongoDB](https://www.mongodb.com/legal/contributor-agreement) adalah contoh jenis perjanjian ini.
* Anda berpikir proyek Anda perlu mengubah lisensi dikemudian hari dan ingin para kontributor untuk menyetujuinya di awal terhadap perubahan tersebut.

Jika Anda membutuhkan perjanjian kontributor tambahan pada proyek Anda, pertimbangkan untuk menggunakan integrasi seperti [asisten CLA](https://github.com/cla-assistant/cla-assistant) untuk meminimalkan gangguan pada kontributor.

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
