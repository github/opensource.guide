---
lang: id
title: Kepemimpinan dan Pengelolaan
description: Mengembangkan proyek open source dapat mengambil keuntungan dari aturan resmi untuk pengambilan keputusan
class: leadership
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
---

## Memahami pengelolaan untuk proyek Anda yang semakin berkembang

Proyek Anda semakin berkembang, orang-orang semakin tertarik untuk bergabung, dan Anda berkomitmen untuk mempertahankan proses ini. Pada tahap ini, Anda mungkin bertanya, bagaimana melibatkan kontributor proyek Anda pada alur kerja Anda, apakah dengan memberikan akses commit pada seseoang atau menyelesaikan debat pada komunitas. Jika Anda memiliki pertanyaan, kami memiliki jawabannya.

## Apa contoh dari peran formal yang digunakan pada proyek open source?

Banyak proyek mengikuti struktur yang serupa untuk peran dan pengakuan kontributor.

Arti dari peran tersebut sangat tergantung dari Anda. Berikut adalah beberapa jenis peran yang mungkin Anda kenali:

* **Maintainer**
* **Contributor**
* **Committer**

**Untuk beberapa project, "maintainer"** adalah satu-satunya orang pada proyek yang memiliki akses commit. Pada proyek lain, mereka adalah orang-orang yang terdaftar pada README sebagai pengelola.

Seorang pengelola (maintainer) tidak harus merupakan orang yang menuliskan kode pada proyek Anda. Maintainer bisa merupakan orang yang mengembangkan proyek Anda, atau menuliskan dokumentasi agar bisa diakses oleh banyak orang. Terlepas dari apa yang mereka lakukan sehari-hari, seorang pengelola merupakan orang yang bertanggung jawab terhadap arah dari proyek dan berkomitmen untuk meningkatkannya.

**Seorang "kontributor" bisa siapa saja** yang memberikan komentar pada sebuah masalah atau pull request, orang-orang yang memberikan nilai pada proyek (baik menyelesaikan masalah, menuliskan kode, atau mengelola sebuah acara), atau siapapun dengan pull request yang diterima (mungkin definisi tersingkat dari seorang kontributor).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  \[Untuk Node.js,\] setiap orang yang memberikan komentar pada sebuah masalah atau mengirimkan kode adalah anggota dari komunitas proyek. Cukup dengan melihat apa yang mereka lakukan berarti mereka sudah beralih dari seorang pengguna menjadi seorang kontributor.
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Healthy Open Source"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**Istilah "committer"** mungkin digunakan untuk membedakan akses commit, yang merupakan tanggung jawab yang spesifik, dari jenis kontribusi lainnya.

Walaupun Anda bisa mendefinisikan peran pada proyek Anda sesuka Anda, [pertimbangkan untuk menggunakan definisi yang lebih luas](../how-to-contribute/#apa-artinya-berkontribusi) untuk mendorong lebih banyak jenis kontribusi. Anda bisa menggunakan peran kepemimpinan untuk secara formal mengakui orang-orang yang memiliki kontribusi yang besar pada proyek Anda, terlepas dari ketrampilan teknis mereka.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  Anda mungkin mengenal saya sebagai "pencipta" dari Django...tetapi saya hanyalah orang yang dipekerjakan untuk bekerja pada sesuatu setelah satu tahun dibuat. (...) Orang menduga bahwa saya sukses karena ketrampilan pemrograman saya...tetapi saya hanyalah programmer biasa.
  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## Bagaimana saya memformalkan peran kepemimpinan ini?

Meresmikan peran kepemimpinan akan membantu orang lain merasa memiliki dan memberitahukan anggota kelompok lainnya bagi yang membutuhkan.

Untuk proyek yang kecil, menentukan pemimpin semudah menambahkan nama-nama mereka pada berkas README atau CONTRIBUTORS.

Untuk proyek yang lebih besar, jika Anda memiliki sebuah website, buatlah halaman tim atau tuliskan pemimpin proyek Anda. Sebagai contoh, [PostgreSQL](https://github.com/postgres/postgres/) memiliki [halaman tim yang lengkap](https://www.postgresql.org/community/contributors/) dengan profil singkat pada setiap kontributornya.

Jika proyek Anda memiliki komunitas kontributor yang aktif, Anda mungkin perlu membuat "tim inti" dari pengelola, atau sub komite dari orang-orang yang memiliki peran pada beberapa area yang berbeda (misalnya keamanan, laporan masalah, atau kode etik). Biarkan orang lain mengatur dirinya sendiri dan berkontribusi pada peran yang mereka sukai.

<aside markdown="1" class="pquote">
  \[Kami\] melengkapi tim inti dengan beberapa "sub tim". Setiap sub tim berfokus pada area tertentu, misalnya desain bahasa atau pustaka. (...) Untuk memastikan koordinasi yang kuat dan global, penyamaan visi pada proyek secara keseluruhan, setiap sub tim dipimpin oleh anggota dari tim inti.
  <p markdown="1" class="pquote-credit">
— ["Rust Governance RFC"](https://github.com/rust-lang/rfcs/blob/master/text/1068-rust-governance.md)
  </p>
</aside>

Tim pemimpin mungkin perlu membuat chanel khusus (seperti IRC) atau bertemu secara rutin untuk mendiskusikan proyek (seperti pada Gitter atau Google Hangout). Anda bisa membuat hasil rapat tersebut secara terbuka sehingga orang lain bisa mendengarkan. [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby), misalnya, [mengadakan jam kerja setiap minggunya](https://github.com/cucumber/cucumber-ruby/blob/master/CONTRIBUTING.md#talking-with-other-devs).

Setelah Anda mendefinisikan peran pemimpin Anda, jangan lupa untuk mendokumentasikan bagaimana orang lain bisa mencapai posisi tersebut! Buatlah proses yang jelas bagaimana seseorang bisa menjadi seorang pengelola atau bergabung pada sub komite pada proyek Anda, dan tuliskan pada GOVERNANCE.md.

Peralatan seperti [Vossibility](https://github.com/icecrime/vossibility-stack) bisa membantu Anda melacak siapa yang (tidak) memberikan kontribusi pada proyek. Mendokumentasikan informasi ini akan menghindari persepsi komunitas bahwa pengelola mengambil keputusan secara pribadi.

Akhirnya, jika proyek Anda berada pada GitHub, pertimbangkan untuk memindahkan proyek Anda dari akun prbadi pada "Organization" dan menambahkan paling tidak satu admin cadangan. [GitHub Organizations](https://help.github.com/articles/creating-a-new-organization-account/) membuat pengelolaan hak akses dan banyak repository menjadi lebih mudah dan juga menjaga proyek Anda melalui [berbagi kepemilikan](../building-community/#berbagi-kepemilikan-dari-proyek-anda).

## Kapan saya harus memberikan akses commit kepada seseorang?

Beberapa orang berpikir bahwa Anda perlu memberikan akses commit pada semua orang yang memberikan kontribusi. Melakukan hal ini bisa mendorong lebih banyak orang untuk merasa memiliki proyek Anda.

Disisi lain, terutama untuk proyek yang besar dan kompleks, Anda mungkin hanya akan memberikan akses commit pada orang-orang yang mendemonstrasikan komitmen mereka Tidak ada cara yang paling benar untuk melakukan hal ini - lakukan apa yang Anda rasa paling baik!

Jika proyek Anda berada pada GitHub, Anda bisa menggunakan [protected branches](https://help.github.com/articles/about-protected-branches/) untuk mengelola siapa saja yang boleh mengirimkan pada branch tertentu, dan pada kondisi apa.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">
  Ketika seseorang mengirimkan sebuah pull request, berikan mereka akses commit pada proyek Anda. Meskipun tampaknya hal bodoh pada awalnya, menggunakan strategi ini akan memaksimalkan kekuatan utama dari GitHub. (...) Setelah orang-orang memiliki akses commit, mereka tidak lagi khawatir bahwa perubahan mereka tidak akan digunakan...hal ini akan membuat mereka bekerja lebih keras pada perubahan yang diusulkan.
  <p markdown="1" class="pquote-credit">
— @felixge, ["The Pull Request Hack"](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## Apa struktur pengelolaan yang umum untuk proyek open source?

Terdapat tiga struktur pengelolaan yang umumnya dipakai pada proyek open source.

* **BDFL:** BDFL kependekan dari "Benevolent Dictator for Life". Pada struktur ini, satu orang (biasanya pendiri proyek) memiliki keputusan final terhadap semua keputusan proyek. [Python](https://github.com/python) adalah contoh klasik. Proyek yang lebih kecil biasanya menganut model BDFL secara default, karena hanya terdapat satu atau dua pengelola. Sebuah proyek yang berawal dari sebuah perusahaan juga bisa masuk kedalam kategori BDFL.

* **Meritokrasi:** **(Catatan: istilah "meritokrasi" memiliki konotasi negatif pada beberapa komunitas dan [sejarah sosial dan politis yang kompleks](http://geekfeminism.wikia.com/wiki/Meritocracy).)** Pada model meritokrasi, kontributor aktif sebuah proyek (mereka yang "layak") diberikan peran dalam pengambilan keputusan formal. Keputusan biasanya dilakukan berdasarkan konsensus voting. Konsep ini diciptakan oleh [Yayasan Apache](https://www.apache.org/); [semua proyek Apache](https://www.apache.org/index.html#projects-list) menganut model ini. Kontribusi hanya dapat dilakukan secara perseorangan mewakili dirinya sendiri, bukan untuk sebuah perusahaan.

* **Kontribusi liberal:** Pada model ini, orang-orang yang banyak melakukan pekerjaan adalah yang dianggap berperan, namun ini berbasiskan pada pekerjaan saat ini dan bukan kontribusi yang lampau. Pengambilan keputusan pada proyek berdasarkan pada proses pencarian konsensus dibandingkan voting murni, dan mencoba melibatkan banyak pandangan dari komunitas. Contoh populer proyek yang menggunakan model ini meliputi [Node.js](https://foundation.nodejs.org/) dan [Rust](https://www.rust-lang.org/).

Mana yang harus Anda gunakan? Semuanya tergantung Anda! Setiap model memiliki kelebihan dan kekurangan. Meskipun pada awalnya mereka tampak berbeda di awal, semua model memiliki banyak kesamaan. Jika Anda tertarik untuk mengadopsi salah satu model tersebut, silahkan lihat beberapa template berikut:

* [template model BDFL](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [template model meritokrasi](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [kebijakan kontribusi liberal Node.js](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## Apakah saya perlu dokumentasi pengelolaan ketika Saya merilis proyek Saya?

Tidak ada waktu terbaik kapan kita harus menuliskan pengelolaan proyek Anda, tetapi akan lebih mudah untuk mendefinisikannya apabila Anda telah melihat dinamika komunitas Anda mulai bermain. Bagian terbaik (dan tersulit) dari pengelolaan open source adalah karena pengelolaan tersebut dibentuk oleh komunitas!

Beberapa dokumentasi awal akan membantu pengelolaan proyek Anda, sehingga mulailah menuliskannya. Sebagai contoh, Anda bisa mendefinisikan harapan yang jelas untuk perilaku, atau bagaimana proses kontributor bekerja, bahkan pada saat Anda merilis proyek Anda.

Jika Anda bagian dari sebuah perusahaan yang merilis proyek open source, maka akan sangat berguna untuk melakukan diskusi internal tentang bagaimana perusahaan Anda akan mengelola dan mengambil keputusan ketika proyek sudah mulai berkembang. Anda juga mungkin perlu menjelaskan tentang bagaimana perusahaan Anda (tidak) akan terlibat dengan proyek.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  Kami menugaskan kelompok kecil untuk mengelola proyek pada Github di Facebook. Sebagai contoh, React dikelola oleh pengembang React.
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["An inside look at open source at Facebook"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## Apa yang terjadi jika karyawan perkantoran mulai mengajukan kontribusi?

Proyek open source yang sukses akan digunakan oleh banyak orang dan perusahaan, dan beberapa perusahaan mungkin akan memberikan pendanaan pada proyek. Sebagai contoh, sebuah proyek mungkin menggunakan kode dari proyek sebagai salah satu komponen pada layanan komersialnya.

Seiring dengan proyek yang semakin banyak digunakan, orang-orang yang memiliki keahlian akan menjadi kebutuhan - Anda mungkin salah satunya! - dan mungkin akan dibayar untuk pekerjaan mereka pada proyek.

Sangatlah penting untuk memperlakukan aktivitas komersial sebagai sesuatu yang biasa dan merupakan sumber lain dari energi pengembangan. Pengembang yang dibayar tidak perlu mendapatkan perlakuan khusus dibandingkan mereka yang tidak dibayar; tentu saja setiap kontribusi harus dievaluasi berdasarkan kelayakan teknisnya. Meski demikian, orang-orang seharusnya lebih nyaman dengan aktivitas komersial, dan merasa nyaman menyatakan kasus mereka ketika berpendapat tentang peningkatan atau fitur tertentu.

"Komersial" sangatlah kompatibel dengan "open source". "Komersial" hanya berarti ada uang yang terlibat didalamnya pada suatu titik - misalnya software yang digunakan pada perdagangan, yang kecenderungannya meningkat setelah proyek banyak diadopsi. (Ketika perangkat lunak open source digunakan sebagai bagian dari produk non open source, secara keseluruhan produk masuk terbilang "proprietary", meskipun, seperti halnya open source, bisa digunakan untuk kepentingan komersial atau non-komersial.)

Seperti halnya orang lain, pengembang yang termotivasi secara komersial mendapatkan pengaruh pada proyek melalui kualitas dan kuantitas dari kontribusinya. Jelas, pengembang yang dibayar untuk waktu mereka bisa melakukan lebih dari mereka yang tidak dibayar, tetapi hal itu sangatlah lumrah: pembayaran hanyalah satu dari banyak faktor yang bisa mempengaruhi seseorang. Pastikan diskusi proyek Anda berfokus pada kontribusi, bukan pada faktor eksternal yang memungkinkan orang untuk membuat kontribusi tersebut.

## Apakah saya perlu entitas legal untuk mendukung proyek Saya?

Anda tidak perlu entitas legal untuk mendukung proyek open source Anda kecuali Anda mengurusi uang.

Sebagai contoh, jika Anda hendak membuat bisnis komersial, Anda perlu membuat C Corp atau LLC (jika Anda berada di AS). Jika Anda hanya melakukan pekerjaan kontrak berkaitan dengan proyek open source Anda, Anda bisa menerima uang sebagai pemilik tunggal, atau membuat LLC (jika Anda berbasiskan di AS).

Jika Anda hendak menerima donasi untuk proyek open source Anda, Anda bisa membuat tombol donasi (menggunakan PayPal atau Stripe misalnya), tetapi uang tersebut akan dikurangi pajak kecuali Anda adalah nirlaba (501c3 jika Anda berada di AS).

Banyak proyek tidak ingin kerepotan untuk membuat nirlaba, sehingga mereka mencari sponsor fiskal nonprofit. Sponsor fiskal menerima donasi untuk Anda, biasanya dengan imbalan beberapa pesen dari donasi. [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](https://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/), [Linux Foundation](https://www.linuxfoundation.org/projects) dan [Open Collective](https://opencollective.com/opensource) adalah contoh organisasi yang melayani sebagai sponsor fiskal untuk proyek open source.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  Tujuan kami adalah menyediakan infrastruktur yang bisa digunakan oleh komunitas untuk pengelolaan mandiri, sehingga menciptakan sebuah lingkungan dimana setiap orang - kontributor, pendukung, sponsor - bisa menerima keuntungan yang jelas.
  <p markdown="1" class="pquote-credit">
— @piamancini, ["Moving beyond the charity framework"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141)
  </p>
</aside>

Jika proyek Anda sangat erat hubungannya dengan bahasa atau ekosistem tertentu, seringkali terdapat yayasan yang bisa Anda ajak kerjasama. Sebagai contoh, [Python Software Foundation](https://www.python.org/psf/) membantu [PyPI](https://pypi.org/), Python package manager, dan [Node.js Foundation](https://foundation.nodejs.org/) membantu [Express.js](https://expressjs.com/), framework berbasis Node.
