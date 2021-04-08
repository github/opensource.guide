---
lang: ms
title: Metrik Sumber Terbuka
description: Buat keputusan yang tepat untuk membantu projek sumber terbuka anda berkembang dengan mengukur dan mengesan kejayaannya.
class: metrics
toc:
  why-measure-anything: "Mengapa mengukur apa-apa?"
  discovery: "Penemuan"
  usage: "Penggunaan"
  retention: "Pengekalan"
  maintainer-activity: "Aktiviti penyelenggara"
order: 9
image: /assets/images/cards/metrics.png
related:
  - finding
  - best-practices
---

## Mengapa mengukur apa-apa?

Data, jika digunakan dengan bijak, dapat membantu anda membuat keputusan yang lebih baik sebagai penyelenggara sumber terbuka.

Dengan lebih banyak maklumat, anda boleh:

* Fahami bagaimana pengguna bertindak balas terhadap ciri baru
* Cari tahu dari mana pengguna baru berasal
* Kenali, dan tentukan apakah akan mendukung, kes penggunaan atau fungsi luar
* Hitung populariti projek anda
* Fahami bagaimana projek anda digunakan
* Kumpulkan wang melalui tajaan dan geran

Contohnya, [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md) mendapati bahawa Analitis Google membantu mereka mengutamakan kerja:

> Homebrew disediakan secara percuma dan dikendalikan sepenuhnya oleh sukarelawan pada masa lapang. Hasilnya, kami tidak mempunyai sumber untuk membuat kajian pengguna terperinci mengenai pengguna Homebrew untuk memutuskan cara terbaik untuk merancang ciri masa depan dan mengutamakan kerja semasa. Analisis pengguna agregat tanpa nama membolehkan kami mengutamakan pembaikan dan ciri berdasarkan bagaimana, di mana dan kapan orang menggunakan Homebrew.

Populariti bukan segalanya. Semua orang masuk ke sumber terbuka dengan alasan yang berbeza. Sekiranya matlamat anda sebagai penyelenggara sumber terbuka adalah untuk mempamerkan karya anda, bersikap telus mengenai kod anda, atau hanya bersenang-senang, metrik mungkin tidak penting bagi anda.

Sekiranya anda berminat untuk memahami projek anda pada tahap yang lebih mendalam, baca cara untuk menganalisis aktiviti projek anda.

## Penemuan

Sebelum ada yang dapat menggunakan atau menyumbang kembali ke projek anda, mereka perlu mengetahui bahawa ia wujud. Tanya pada diri anda: _apa orang mencari projek ini?_

![Traffic graph](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

Sekiranya projek anda dihoskan di GitHub, [you can view](https://help.github.com/articles/about-repository-graphs/#traffic) berapa ramai orang yang datang ke projek anda dan dari mana asalnya. Dari halaman projek anda, klik "Wawasan", kemudian "Lalu Lintas". Di halaman ini, anda dapat melihat:

* **Jumlah paparan halaman:** Memberitahu anda berapa kali projek anda dilihat

* **Jumlah pelawat unik:** Memberitahu anda berapa orang yang melihat projek anda

* **Merujuk laman web:** Memberitahu anda dari mana pengunjung datang. Metrik ini dapat membantu anda mengetahui di mana untuk menjangkau khalayak anda dan adakah usaha promosi anda berjalan lancar.

* **Kandungan popular:** Memberitahu anda tempat pelawat pergi ke projek anda, dipecah mengikut paparan halaman dan pelawat unik.

[GitHub stars](https://help.github.com/articles/about-stars/) juga dapat membantu memberikan ukuran populariti asas. Walaupun bintang GitHub tidak semestinya berkorelasi dengan muat turun dan penggunaan, mereka dapat memberitahu anda berapa banyak orang yang memperhatikan pekerjaan anda.

Anda juga mungkin mahu [track discoverability in specific places](https://opensource.com/business/16/6/pirate-metrics): sebagai contoh, Google PageRank, lalu lintas rujukan dari laman web projek anda, atau rujukan dari projek atau laman web sumber terbuka yang lain.

## Penggunaan

Orang ramai mencari projek anda mengenai perkara liar dan gila yang kami panggil internet ini. Sebaik-baiknya, apabila mereka melihat projek anda, mereka akan merasa terdorong untuk melakukan sesuatu. Soalan kedua yang ingin anda ajukan ialah: _apa orang menggunakan projek ini?_

Sekiranya anda menggunakan pengurus pakej, seperti npm atau RubyGems.org, untuk mengedarkan projek anda, anda mungkin dapat mengesan muat turun projek anda.

Setiap pengurus pakej boleh menggunakan definisi "download" yang sedikit berbeza, dan muat turuntuk mengesan statistik penggunaan di banyak pengurus pakej yang popular.

Sekiranya projek anda berada di GitHub, arahkan kembali ke halaman "Traffic". Anda boleh menggunakanun tidak semestinya berkaitan dengan pemasangan atau penggunaan, tetapi menyediakan beberapa asas untuk perbandingan. Cuba gunakan [Libraries.io](https://libraries.io/) untuk mengesan statistik penggunaan di banyak pengurus pakej yang popular.

Sekiranya projek anda berada di GitHub, arahkan kembali ke halaman "Traffic". Anda boleh menggunakan[graf klon](https://github.com/blog/1873-clone-graphs) untuk melihat berapa kali projek anda diklon pada hari tertentu, dipecah berdasarkan jumlah klon dan klon unik.

![graf klon](/assets/images/metrics/clone_graph.png)

Sekiranya penggunaannya rendah berbanding dengan jumlah orang yang menemui projek anda, ada dua masalah yang perlu dipertimbangkan. Sama ada:

* Projek anda tidak berjaya menukar khalayak anda, atau
* Anda menarik penonton yang salah

Sebagai contoh, jika projek anda muncul di halaman depan Berita Peretas, anda mungkin akan melihat lonjakan penemuan (lalu lintas), tetapi kadar penukaran yang lebih rendah, kerana anda menjangkau semua orang di Berita Peretas. Sekiranya projek Ruby anda diketengahkan pada persidangan Ruby, anda mungkin akan melihat kadar penukaran yang tinggi dari khalayak yang disasarkan.

Cuba cari tahu dari mana datangnya khalayak anda dan minta maklum balas orang lain di halaman projek anda untuk mengetahui dua masalah yang mana yang anda hadapi.

Setelah anda mengetahui bahawa orang menggunakan projek anda, anda mungkin ingin mencuba untuk mengetahui apa yang mereka lakukan dengannya. Adakah mereka membangunnya dengan memalsukan kod anda dan menambahkan ciri? Adakah mereka menggunakannya untuk sains atau perniagaan?

## Pengekalan

Orang mencari projek anda dan mereka menggunakannya. Soalan seterusnya yang ingin anda tanyakan kepada diri sendiri ialah: Adakah orang yang menyumbang kembali ke projek ini? _

Tidak terlalu awal untuk mula memikirkan penyumbang. Tanpa orang lain masuk, anda berisiko meletakkan diri anda dalam keadaan tidak sihat di mana projek anda _popular_ (banyak orang menggunakannya) tetapi tidak _support_ (tidak cukup masa penyelenggara untuk memenuhi permintaan).

Pengekalan juga memerlukan [inflow of new contributors](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2),kerana penyumbang aktif sebelum ini akhirnya akan beralih kepada perkara lain.

Contoh metrik komuniti yang mungkin ingin anda lacak secara berkala termasuk:

* **Jumlah penyumbang dan jumlah komitmen setiap penyumbang:** Memberitahu anda berapa banyak penyumbang yang anda miliki, dan siapa yang kurang lebih aktif. Di GitHub, anda dapat melihatnya di bawah "Wawasan" -> "Penyumbang." Buat masa ini, grafik ini hanya mengira penyumbang yang telah berkomitmen untuk cabang lalai repositori.

![Contributor graph](/assets/images/metrics/repo_contributors_specific_graph.png)

* **Penyumbang kali pertama, santai, dan berulang:** Membantu anda mengesan sama ada anda mendapat penyumbang baru dan sama ada mereka kembali. (Penyumbang kasual adalah penyumbang dengan jumlah komitmen yang rendah. Sama ada satu komitmen, kurang daripada lima komitmen, atau yang lain terpulang kepada anda.) Tanpa penyumbang baru, komuniti projek anda boleh menjadi stagnan.

* **Bilangan masalah terbuka dan permintaan tarik terbuka:** Jika jumlah ini terlalu tinggi, anda mungkin memerlukan bantuan untuk mencetuskan masalah dan mengkaji kod.

* **Jumlah masalah _opened_ dan permintaan tarik _opened_:** Masalah yang dibuka bermaksud seseorang cukup mengambil berat tentang projek anda untuk membuka masalah. Sekiranya jumlah itu bertambah dari masa ke masa, ini menunjukkan orang berminat dengan projek anda.

* **Jenis sumbangan:** Contohnya, melakukan, memperbaiki kesalahan ketik atau pepijat, atau memberi komen mengenai sesuatu masalah.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/arfon?s=180" class="pquote-avatar" alt="avatar">
  Sumber terbuka lebih daripada sekadar kod. Projek sumber terbuka yang berjaya merangkumi sumbangan kod dan dokumentasi bersama perbualan mengenai perubahan ini.
  <p markdown="1" class="pquote-credit">
— @arfon, ["The Shape of Open Source"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## Aktiviti penyelenggara

Akhirnya, anda ingin menutup gelung dengan memastikan penyelenggara projek anda dapat menangani jumlah sumbangan yang diterima. Soalan terakhir yang ingin anda tanyakan kepada diri anda ialah: _am Saya (atau adakah kita) menjawab komuniti kita?_

Penyelenggara yang tidak responsif menjadi hambatan bagi projek sumber terbuka. Sekiranya seseorang mengemukakan sumbangan tetapi tidak pernah mendapat balasan daripada penjaga, mereka mungkin akan merasa putus asa dan pergi.

[Research from Mozilla](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) menunjukkan bahawa tindak balas pemelihara adalah faktor penting dalam mendorong sumbangan berulang.

Pertimbangkan untuk mengesan berapa lama anda (atau penyelenggara lain) bertindak balas terhadap sumbangan, sama ada masalah atau permintaan penarik. Menjawab tidak memerlukan tindakan. Ini semudah mengatakan: _"Terima kasih atas penyerahan anda! Saya akan mengulasnya dalam minggu depan."_

Anda juga dapat mengukur masa yang diperlukan untuk beralih antara tahap dalam proses sumbangan, seperti:

* Rata-rata masa masalah masih terbuka
* Sama ada isu ditutup oleh PR
* Sama ada masalah basi ditutup
* Waktu purata untuk menggabungkan permintaan tarik

## Gunakan 📊 untuk mengetahui tentang orang

Memahami metrik akan membantu anda membina projek sumber terbuka yang aktif dan berkembang. Walaupun anda tidak melacak setiap metrik di papan pemuka, gunakan kerangka di atas untuk memusatkan perhatian anda pada jenis tingkah laku yang akan membantu projek anda berkembang maju.
