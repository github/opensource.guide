---
lang: ms
title: Bahagian Undang-Undang Sumber Terbuka
description: Semua perkara yang pernah anda terfikir mengenai sisi undang-undang sumber terbuka, dan beberapa perkara yang tidak anda lakukan.
class: legal
order: 10
image: /assets/images/cards/legal.png
related:
  - contribute
  - leadership
---

## Memahami implikasi undang-undang dari sumber terbuka

Berkongsi karya kreatif anda dengan dunia boleh menjadi pengalaman yang menarik dan bermanfaat. Ini juga boleh bermaksud banyak perkara undang-undang yang anda tidak tahu yang anda perlu bimbangkan. Syukurlah, anda tidak perlu bermula dari awal. Kami telah memenuhi keperluan undang-undang anda. (Sebelum anda menggali, pastikan anda membaca [disclaimer](/notices/).)

## Mengapa orang begitu mementingkan sisi undang-undang sumber terbuka?

Gembira anda bertanya! Apabila anda membuat karya kreatif (seperti penulisan, grafik, atau kod), karya tersebut di bawah hak cipta eksklusif secara lalai. Artinya, undang-undang menganggap bahawa sebagai pengarang karya anda, anda mempunyai pendapat dalam apa yang dapat dilakukan oleh orang lain dengannya.

Secara umum, itu bermakna tidak ada orang lain yang dapat menggunakan, menyalin, menyebarkan, atau mengubahsuai karya anda tanpa menghadapi risiko pengurangan, perombakan, atau proses pengadilan.

Sumber terbuka adalah keadaan yang tidak biasa, bagaimanapun, kerana penulis mengharapkan orang lain akan menggunakan, mengubah, dan berkongsi karya. Tetapi kerana lalai undang-undang masih merupakan hak cipta eksklusif, anda memerlukan lesen yang menyatakan kebenaran ini secara jelas.

Sekiranya anda tidak menggunakan lesen sumber terbuka, semua orang yang menyumbang untuk projek anda juga menjadi pemegang hak cipta eksklusif karya mereka. Ini bermaksud tiada siapa yang boleh menggunakan, menyalin, menyebarkan, atau mengubah sumbangan mereka - dan bahawa "tiada siapa" termasuk anda.

Akhirnya, projek anda mungkin mempunyai kebergantungan dengan keperluan lesen yang tidak anda ketahui. Komuniti projek anda, atau polisi majikan anda, mungkin juga memerlukan projek anda menggunakan lesen sumber terbuka tertentu. Kami akan membahas situasi ini di bawah.

## Adakah projek GitHub awam terbuka?

Bila kamu [create a new project](https://help.github.com/articles/creating-a-new-repository/) di GitHub, anda mempunyai pilihan untuk menjadikan repositori **peribadi** atau **awam**.

![Create repository](/assets/images/legal/repo-create-name.png)

**Membuat projek GitHub anda umum tidak sama dengan melesenkan projek anda.** Projek awam dilindungi oleh [GitHub's Terms of Service](https://help.github.com/en/github/site-policy/github-terms-of-service#3-ownership-of-content-right-to-post-and-license-grants), yang membolehkan orang lain melihat dan melengkapkan projek anda, tetapi pekerjaan anda sebaliknya tidak mempunyai kebenaran.

Sekiranya anda ingin orang lain menggunakan, menyebarkan, mengubah suai, atau menyumbang kembali ke projek anda, anda perlu memasukkan lesen sumber terbuka. Sebagai contoh, seseorang tidak boleh menggunakan bahagian projek GitHub anda secara sah dalam kod mereka, walaupun secara terbuka, melainkan anda secara jelas memberi mereka hak untuk melakukannya.

## Beri saya ringkasan mengenai perkara yang saya perlukan untuk melindungi projek saya.

Anda bernasib baik, kerana hari ini, lesen sumber terbuka diseragamkan dan mudah digunakan. Anda boleh menyalin-menampal lesen yang ada terus ke projek anda.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), and [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) adalah lesen sumber terbuka yang paling popular, tetapi ada pilihan lain untuk dipilih. Anda boleh mendapatkan teks lengkap lesen ini, dan arahan mengenai cara menggunakannya, di[choosealicense.com](https://choosealicense.com/).

Apabila anda membuat projek baru di GitHub, anda akan menjadi [asked to add a license](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
  Lesen standard berfungsi sebagai proksi bagi mereka yang tidak mempunyai latihan undang-undang untuk mengetahui dengan tepat apa yang mereka boleh dan tidak boleh lakukan dengan perisian. Sekiranya tidak diperlukan, elakkan syarat-syarat khusus, diubahsuai, atau tidak standard, yang akan menjadi penghalang penggunaan kod agensi di hilir.
  <p markdown="1" class="pquote-credit">
— @benbalter, ["Everything a government attorney needs to know about open source software&nbsp;licensing"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## Lesen sumber terbuka mana yang sesuai untuk projek saya?

Sekiranya anda bermula dari papan tulis kosong, sukar untuk salah dengan[MIT License](https://choosealicense.com/licenses/mit/).Ringkas, sangat mudah difahami, dan membolehkan sesiapa sahaja melakukan apa sahaja selagi mereka menyimpan salinan lesen, termasuk notis hak cipta anda. Anda akan dapat melepaskan projek di bawah lesen lain jika anda memerlukannya.

Jika tidak, memilih lesen sumber terbuka yang betul untuk projek anda bergantung pada objektif anda.

Projek anda kemungkinan besar mempunyai (atau akan) **kebergantungan** (**dependencies**). Contohnya, jika anda membuka sumber projek Node.js, anda mungkin akan menggunakan perpustakaan dari Pengurus Pakej Node (npm). Setiap perpustakaan yang anda bergantung akan mempunyai lesen sumber terbuka sendiri. Sekiranya setiap lesen mereka "permisif" (memberikan izin kepada orang ramai untuk menggunakan, mengubah, dan berkongsi, tanpa syarat untuk pelesenan hilir), anda boleh menggunakan lesen yang anda mahukan. Lesen permisif biasa termasuk MIT, Apache 2.0, ISC, dan BSD.

Sebaliknya, jika mana-mana lesen tanggungan anda adalah "copyleft yang kuat" (juga memberikan kebenaran yang sama kepada umum, tertakluk kepada syarat menggunakan lesen yang sama di hilir), maka projek anda harus menggunakan lesen yang sama. Lesen copyleft yang kuat termasuk GPLv2, GPLv3, dan AGPLv3.

Anda mungkin juga ingin mempertimbangkan **komuniti** yang anda harap akan menggunakan dan menyumbang kepada projek anda:

* **Adakah anda mahu projek anda digunakan sebagai pergantungan oleh projek lain?** Mungkin terbaik untuk menggunakan lesen yang paling popular di komuniti anda yang berkaitan. Sebagai contoh,[MIT](https://choosealicense.com/licenses/mit/) adalah lesen paling popular untuk [npm libraries](https://libraries.io/search?platforms=NPM).
* **Adakah anda mahu projek anda menarik minat perniagaan besar?** Perniagaan besar kemungkinan akan memerlukan lesen paten ekspres dari semua penyumbang. Dalam kes ini, [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)adakah anda (dan mereka) dilindungi.
* **Adakah anda mahu projek anda menarik minat penyumbang yang tidak mahu sumbangan mereka digunakan dalam perisian sumber tertutup?**[GPLv3](https://choosealicense.com/licenses/gpl-3.0/) atau (jika mereka juga tidak mahu menyumbang kepada perkhidmatan sumber tertutup) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)akan berjalan lancar.

**Syarikat** anda mungkin mempunyai syarat pelesenan khusus untuk projek sumber terbuka. Sebagai contoh, ia mungkin memerlukan lesen yang boleh diterima agar syarikat dapat menggunakan projek anda dalam produk sumber tertutup syarikat. Atau syarikat anda mungkin memerlukan lesen copyleft yang kuat dan perjanjian penyumbang tambahan (lihat di bawah) sehingga hanya syarikat anda, dan tidak ada orang lain, yang dapat menggunakan projek anda dalam perisian sumber tertutup. Atau syarikat anda mungkin mempunyai keperluan tertentu yang berkaitan dengan standard, tanggungjawab sosial, atau ketelusan, yang mana mungkin memerlukan strategi pelesenan tertentu. Bercakap dengan anda[jabatan undang-undang syarikat](#apa-yang-perlu-diketahui-oleh-pasukan-undang-undang-syarikat-saya).

Apabila anda membuat projek baru di GitHub, anda diberi pilihan untuk memilih lesen. Menyertakan salah satu lesen yang disebutkan di atas akan menjadikan projek GitHub anda sebagai sumber terbuka. Sekiranya anda ingin melihat pilihan lain, periksa [choosealicense.com](https://choosealicense.com) untuk mencari lesen yang sesuai untuk projek anda, walaupun ia [isn't software](https://choosealicense.com/non-software/).

## Bagaimana jika saya ingin menukar lesen projek saya?

Sebilangan besar projek tidak perlu menukar lesen. Tetapi kadang-kadang keadaan berubah.

Sebagai contoh, semasa projek anda berkembang, ia menambahkan pergantungan atau pengguna, atau syarikat anda mengubah strategi, yang mana mungkin memerlukan atau menginginkan lesen yang berbeza. Juga, jika anda lalai untuk melesenkan projek anda sejak awal, menambahkan lesen sama seperti menukar lesen. Terdapat tiga perkara asas yang perlu dipertimbangkan semasa menambah atau menukar lesen projek anda:

**Ini rumit.** Menentukan keserasian dan pematuhan lesen dan siapa yang memegang hak cipta boleh menjadi rumit dan membingungkan dengan cepat. Beralih ke lesen baru tetapi serasi untuk pelepasan dan sumbangan baru adalah berbeza daripada memberi semula semua sumbangan yang ada. Libatkan pasukan undang-undang anda pada petunjuk pertama keinginan untuk menukar lesen. Walaupun anda telah atau dapat memperoleh izin dari pemegang hak cipta projek anda untuk perubahan lesen, pertimbangkan kesan perubahan tersebut kepada pengguna dan penyumbang projek anda yang lain. Fikirkan perubahan lesen sebagai "acara tadbir urus" untuk projek anda yang kemungkinan besar akan berjalan lancar dengan komunikasi dan perundingan yang jelas dengan pihak berkepentingan projek anda. Semakin banyak alasan untuk memilih dan menggunakan lesen yang sesuai untuk projek anda sejak awal!

**Lesen projek anda yang ada.** Sekiranya lesen yang ada pada projek anda sesuai dengan lesen yang ingin anda ubah, anda boleh mula menggunakan lesen baru. Ini kerana jika lesen A sesuai dengan lesen B, anda akan mematuhi syarat A sambil mematuhi syarat B (tetapi tidak semestinya sebaliknya). Oleh itu, jika anda sedang menggunakan lesen permisif (misalnya, MIT), anda boleh menukar kepada lesen dengan lebih banyak syarat, selagi anda menyimpan salinan lesen MIT dan sebarang notis hak cipta yang berkaitan (iaitu, terus mematuhi Syarat minimum lesen MIT). Tetapi jika lesen semasa anda tidak boleh diterima (mis., Copyleft, atau anda tidak mempunyai lesen) dan anda bukan satu-satunya pemegang hak cipta, anda tidak boleh menukar lesen projek anda kepada MIT. Pada hakikatnya, dengan lesen permis, pemegang hak cipta projek telah memberikan kebenaran terlebih dahulu untuk menukar lesen.

**Pemegang hak cipta projek anda yang ada.** Sekiranya anda satu-satunya penyumbang projek anda, maka anda atau syarikat anda adalah pemegang hak cipta tunggal projek tersebut. Anda boleh menambah atau menukar apa sahaja lesen yang anda atau syarikat anda mahukan. Jika tidak, mungkin ada pemegang hak cipta lain yang anda perlukan persetujuannya untuk menukar lesen. Siapakah mereka? Orang yang mempunyai komitmen dalam projek anda adalah tempat yang baik untuk memulakan. Tetapi dalam beberapa kes hak cipta akan dipegang oleh majikan mereka. Dalam beberapa kes, orang hanya akan memberikan sumbangan minimum, tetapi tidak ada peraturan yang keras dan cepat bahawa sumbangan di bawah sebilangan baris kod tidak dikenakan hak cipta. Apa nak buat? Itu bergantung. Untuk projek yang agak kecil dan muda, mungkin memungkinkan semua penyumbang yang ada untuk menyetujui perubahan lesen dalam isu atau permintaan penarikan. Untuk projek besar dan lama, anda mungkin perlu mencari banyak penyumbang dan juga waris mereka. Mozilla mengambil masa bertahun-tahun (2001-2006) untuk mendapatkan semula Firefox, Thunderbird, dan perisian yang berkaitan.

Sebagai alternatif, anda boleh meminta penyumbang bersetuju terlebih dahulu (melalui perjanjian penyumbang tambahan - lihat di bawah) terhadap perubahan lesen tertentu dalam keadaan tertentu, melebihi yang dibenarkan oleh lesen sumber terbuka anda yang ada. Ini sedikit sebanyak mengubah kerumitan menukar lesen. Anda memerlukan lebih banyak pertolongan daripada peguam anda di muka, dan anda masih mahu berkomunikasi dengan jelas dengan pihak berkepentingan projek anda semasa melaksanakan pertukaran lesen.

## Adakah projek saya memerlukan perjanjian penyumbang tambahan?

Mungkin tidak. Untuk sebahagian besar projek sumber terbuka, lesen sumber terbuka secara implisit berfungsi sebagai lesen masuk (dari penyumbang) dan keluar (kepada penyumbang dan pengguna lain). Sekiranya projek anda berada di GitHub, Syarat Perkhidmatan GitHub menjadikan "inbound = outbound" sebagai [explicit default](https://help.github.com/en/github/site-policy/github-terms-of-service#6-contributions-under-repository-license).

Perjanjian penyumbang tambahan - sering disebut Contributor License Agreement (CLA) - dapat membuat kerja pentadbiran untuk penyelenggara projek. Berapa banyak kerja yang ditambahkan oleh perjanjian bergantung pada projek dan pelaksanaannya. Perjanjian mudah mungkin memerlukan penyumbang mengesahkan, dengan satu klik, bahawa mereka mempunyai hak yang diperlukan untuk menyumbang di bawah lesen sumber terbuka projek. Perjanjian yang lebih rumit mungkin memerlukan semakan undang-undang dan pendaftaran dari majikan pencarum.

Juga, dengan menambahkan "kertas kerja" yang diyakini oleh beberapa orang tidak perlu, sukar difahami, atau tidak adil (apabila penerima perjanjian mendapat lebih banyak hak daripada penyumbang atau orang ramai melalui lesen sumber terbuka projek), perjanjian penyumbang tambahan mungkin dianggap tidak ramah kepada komuniti projek.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">
   Kami telah menghilangkan CLA untuk Node.js. Melakukan ini mengurangkan halangan kemasukan penyumbang Node.js sehingga memperluas pangkalan penyumbang.
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Broadening Node.js Contributions"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Beberapa situasi di mana anda mungkin ingin mempertimbangkan perjanjian penyumbang tambahan untuk projek anda termasuk:

* Peguam anda mahu semua penyumbang menerima secara jelas syarat-syarat sumbangan (_sign_, online atau offline), mungkin kerana mereka merasakan lesen sumber terbuka itu sendiri tidak mencukupi (walaupun sudah!). Sekiranya ini satu-satunya masalah, perjanjian penyumbang yang mengesahkan lesen sumber terbuka projek harus mencukupi. The [jQuery Individual Contributor License Agreement](https://contribute.jquery.org/CLA/) adalah contoh yang baik dari perjanjian penyumbang tambahan ringan.
* Anda atau peguam anda mahu pembangun menyatakan bahawa setiap komitmen yang mereka buat diberi kuasa. [Developer Certificate of Origin](https://developercertificate.org/) keperluannya adalah berapa banyak projek yang mencapainya. Contohnya, komuniti Node.js [uses](https://github.com/nodejs/node/blob/HEAD/CONTRIBUTING.md) DCO [instead](https://nodejs.org/en/blog/uncategorized/notes-from-the-road/#easier-contribution) CLA mereka yang terdahulu. Pilihan mudah untuk mengotomatisasi pelaksanaan DCO di repositori anda adalah [DCO Probot](https://github.com/probot/dco).
* Projek anda menggunakan lesen sumber terbuka yang tidak termasuk pemberian paten ekspres (seperti MIT), dan anda memerlukan pemberian paten dari semua penyumbang, beberapa di antaranya mungkin bekerja untuk syarikat yang mempunyai portfolio paten besar yang dapat digunakan untuk menargetkan anda atau penyumbang dan pengguna projek yang lain. [Apache Individual Contributor License Agreement](https://www.apache.org/licenses/icla.pdf) adalah perjanjian penyumbang tambahan yang biasa digunakan yang mempunyai pemberian hak paten seperti yang terdapat dalam Apache License 2.0.
* Projek anda di bawah lesen copyleft, tetapi anda juga perlu mengedarkan versi proprietari projek tersebut. Anda memerlukan setiap penyumbang untuk memberikan hak cipta kepada anda atau memberi anda (tetapi bukan orang ramai) lesen yang mengizinkan. The [MongoDB Contributor Agreement](https://www.mongodb.com/legal/contributor-agreement) adalah contoh jenis perjanjian ini.
* Anda fikir projek anda mungkin perlu menukar lesen sepanjang hayatnya dan mahu penyumbang bersetuju terlebih dahulu untuk perubahan tersebut.

Sekiranya anda perlu menggunakan perjanjian penyumbang tambahan dengan projek anda, pertimbangkan untuk menggunakan integrasi seperti [CLA assistant](https://github.com/cla-assistant/cla-assistant) untuk mengurangkan gangguan penyumbang.

## Apa yang perlu diketahui oleh pasukan undang-undang syarikat saya?

Sekiranya anda melancarkan projek sumber terbuka sebagai pekerja syarikat, pertama, pasukan undang-undang anda harus mengetahui bahawa anda membuka projek secara terbuka.

Untuk lebih baik atau lebih buruk, pertimbangkan untuk memberitahu mereka walaupun itu adalah projek peribadi. Anda mungkin mempunyai "perjanjian IP pekerja" dengan syarikat anda yang memberi mereka beberapa kawalan terhadap projek anda, terutamanya jika semuanya berkaitan dengan perniagaan syarikat atau anda menggunakan sumber syarikat untuk mengembangkan projek tersebut. Syarikat anda boleh memberi anda kebenaran, dan mungkin telah melalui perjanjian IP mesra pekerja atau polisi syarikat. Sekiranya tidak, anda boleh berunding (misalnya, jelaskan bahawa projek anda memenuhi objektif pembelajaran dan pembangunan profesional syarikat untuk anda), atau elakkan mengusahakan projek anda sehingga anda menemui syarikat yang lebih baik.

**Sekiranya anda membuka projek untuk syarikat anda,** maka jelaskan kepada mereka. Pasukan undang-undang anda mungkin sudah mempunyai polisi untuk apa lesen sumber terbuka (dan mungkin perjanjian penyumbang tambahan) untuk digunakan berdasarkan keperluan dan kepakaran perniagaan syarikat untuk memastikan projek anda mematuhi lesen tanggungannya. Sekiranya tidak, anda dan mereka bernasib baik! Pasukan undang-undang anda harus bersemangat untuk bekerjasama dengan anda untuk mengetahui perkara ini. Beberapa perkara yang perlu difikirkan:

* **Bahan pihak ketiga:** Adakah projek anda mempunyai kebergantungan yang dibuat oleh orang lain atau termasuk atau menggunakan kod orang lain? Sekiranya ini adalah sumber terbuka, anda perlu mematuhi lesen sumber terbuka bahan tersebut. Itu bermula dengan memilih lesen yang sesuai dengan lesen sumber terbuka pihak ketiga (lihat di atas). Sekiranya projek anda mengubah atau menyebarkan bahan sumber terbuka pihak ketiga, pasukan undang-undang anda juga ingin mengetahui bahawa anda memenuhi syarat lain dari lesen sumber terbuka pihak ketiga seperti mengekalkan notis hak cipta. Sekiranya projek anda menggunakan kod orang lain yang tidak mempunyai lesen sumber terbuka, anda mungkin perlu meminta penyelenggara pihak ketiga [add an open source license](https://choosealicense.com/no-license/#for-users), dan jika anda tidak dapat memperolehnya, hentikan penggunaan kod mereka dalam projek anda.

* **Rahsia perdagangan:** Pertimbangkan sama ada terdapat apa-apa dalam projek yang syarikat itu tidak mahu sediakan untuk orang awam. Sekiranya demikian, anda boleh membuka sumber keseluruhan projek anda, setelah mengekstrak bahan yang ingin anda rahsiakan.

* **Paten:** Adakah syarikat anda memohon paten yang merupakan sumber terbuka projek anda [public disclosure](https://en.wikipedia.org/wiki/Public_disclosure)? Malangnya, anda mungkin diminta untuk menunggu (atau mungkin syarikat akan mempertimbangkan semula kebijaksanaan permohonan). Sekiranya anda mengharapkan sumbangan untuk projek anda dari pekerja syarikat dengan portfolio paten yang besar, pasukan undang-undang anda mungkin mahu anda menggunakan lesen dengan pemberian paten ekspres dari penyumbang (seperti Apache 2.0 atau GPLv3), atau perjanjian penyumbang tambahan ( lihat di atas).

* **Tanda Dagangan:** Periksa semula nama projek anda[tidak bertentangan dengan tanda dagangan yang ada](../starting-a-project/#mengelakkan-konflik-nama). Sekiranya anda menggunakan tanda dagangan syarikat anda sendiri dalam projek, periksa bahawa ia tidak menimbulkan konflik. [FOSSmarks](http://fossmarks.org/)adalah panduan praktikal untuk memahami tanda dagangan dalam konteks projek sumber bebas dan terbuka.

* **Privasi:** Adakah projek anda mengumpulkan data pengguna? "Telefon rumah" ke pelayan syarikat? Pasukan undang-undang anda dapat membantu anda mematuhi dasar syarikat dan peraturan luaran.

Sekiranya anda melepaskan projek sumber terbuka pertama syarikat anda, perkara di atas lebih dari cukup untuk diselesaikan (tetapi jangan bimbang, kebanyakan projek seharusnya tidak menimbulkan kebimbangan besar).

Jangka panjang, pasukan undang-undang anda boleh melakukan lebih banyak perkara untuk membantu syarikat mendapatkan lebih banyak hasil daripada penglibatannya dalam sumber terbuka, dan tetap selamat:

* **Dasar sumbangan pekerja:** Pertimbangkan untuk mengembangkan polisi korporat yang menentukan bagaimana pekerja anda menyumbang untuk projek sumber terbuka. Dasar yang jelas akan mengurangkan kekeliruan di kalangan pekerja anda dan membantu mereka menyumbang kepada projek sumber terbuka demi kepentingan syarikat, sama ada sebagai sebahagian daripada pekerjaan mereka atau pada masa lapang. Contoh yang baik ialah Rackspace [Model IP and Open Source Contribution Policy](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">
  Membiarkan IP yang berkaitan dengan patch membina asas pengetahuan dan reputasi pekerja. Ini menunjukkan bahawa syarikat dilaburkan dalam pengembangan pekerja tersebut dan mewujudkan rasa pemberdayaan dan autonomi. Semua faedah ini juga membawa kepada semangat kerja yang lebih tinggi dan pengekalan pekerja yang lebih baik.
  <p markdown="1" class="pquote-credit">
— @vanl, ["A Model IP and Open Source Contribution Policy"](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **Apa yang hendak dilepaskan:** [(Almost) everything?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) Sekiranya pasukan undang-undang anda memahami dan dilaburkan dalam strategi sumber terbuka syarikat anda, mereka akan dapat membantu dan bukannya menghalang usaha anda.
* **Pematuhan:** Walaupun syarikat anda tidak mengeluarkan projek sumber terbuka, ia menggunakan perisian sumber terbuka orang lain. [Awareness and process](https://www.linuxfoundation.org/blog/blog/why-companies-that-use-open-source-need-a-compliance-program/) dapat mencegah sakit kepala, kelewatan produk, dan tuntutan mahkamah.

<aside markdown="1" class="pquote">
  Organisasi mesti mempunyai strategi lesen dan pematuhan yang sesuai dengan kedua kategori [["permisive" dan "copyleft" \]. Ini bermula dengan mencatat syarat-syarat pelesenan yang berlaku untuk perisian sumber terbuka yang Anda gunakan - termasuk subkomponen dan dependensi.
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Open Source Software: Compliance Basics And Best Practices"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Paten:** Syarikat anda mungkin ingin bergabung dengan[Open Invention Network](https://www.openinventionnetwork.com/), kumpulan paten pertahanan bersama untuk melindungi penggunaan projek sumber terbuka utama anggota, atau meneroka yang lain[alternative patent licensing](https://www.eff.org/document/hacking-patent-system-2016).
* **Tadbir urus:** Terutama jika dan bila masuk akal untuk memindahkan projek ke [entiti undang-undang di luar syarikat](../leadership-and-governance/#adakah-saya-memerlukan-entiti-undang-undang-untuk-menyokong-projek-saya).
