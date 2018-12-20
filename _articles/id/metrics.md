---
lang: id
title: Metrik Open Source
description: Buat keputusan yang tepat untuk membantu proyek open source Anda berkembang dengan mengukur dan melacak kesuksesannya.
class: metrics
order: 9
image: /assets/images/cards/metrics.png
related:
  - finding
  - best-practices
---

## Kenapa mengukur segalanya?

Data, ketika digunakan dengan bijaksana, bisa membantu Anda mengambil keputusan yang lebih baik sebagai pengelola open source.

Dengan informasi yang lebih banyak, Anda bisa:

* Memahami bagaimana pengguna bisa merespon terhadap fitur baru
* Menentukan darimana asal pengguna baru
* Mengidentifikasi, dan menentukan untuk mendukung fungsionalitas kasus langka
* Mengkuantifikasi popularitas proyek Anda
* Memahami bagaimana proyek Anda digunakan
* Mendapatkan pendanaan melalui sponsor dan hibah

Sebagai contoh, [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md) menemukan bahwa Google Analytics membantu mereka dalam memprioritaskan pekerjaan:

> Homebrew disediakan secara gratis dan dijalankan sepenuhnya oleh sukarelawan dalam waktu senggang mereka. Sebagai hasilnya, kami tidak memiliki sumber daya untuk melakukan studi pengguna dari pengguna Homebrew untuk menentukan mendesain fitur baru dan memprioritaskan pekerjaan. Analisa agregasi pengguna anonim memampukan kami untuk memprioritaskan perbaikan dan fitur berbasiskan pada bagaimana, dimana, dan kapan orang-orang menggunakan proyek ini.

Popularitas bukanlah segalanya. Semua orang masuk pada open source untuk alasan yang berbeda-beda. Jika tujuan Anda sebagai pengelola open source adalah untuk menunjukan hasil pekerjaan Anda, bersikaplah transparan tentang kode Anda, atau jika hanya untuk hiburan, metrik mungkin tidaklah penting bagi Anda.

Jika Anda _memang_ tertarik untuk memahami proyek Anda pada level yang lebih dalam, silahkan membaca lebih lanjut untuk menganalisa aktivitas proyek Anda.

## Penemuan

Sebelum setiap orang bisa menggunakan atau berkontribusi pada proyek Anda, mereka perlu tahu bahwa proyek itu ada. Tanyakan pada diri Anda: _apakah orang-orang menemukan proyek ini?_

![traffic graph](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

Jika proyek Anda berada di GitHub, [Anda dapat melihat](https://help.github.com/articles/about-repository-graphs/#traffic) berapa banyak orang yang sampai pada proyek Anda dan darimana mereka berasal. Dari halaman proyek Anda, klik "Graphs", lalu "Traffic". Pada halaman ini, Anda bisa melihat:

* **Total pageviews:** Menginformasikan berapa banyak proyek Anda dilihat

* **Total unique visitors:** Menginformasikan berapa banyak orang yang melihat proyek Anda

* **Referring sites:** Menginformasikan darimana pengunjung Anda berasal. Metrik ini bisa membantu Anda untuk mencari tahu dimana mencapai pengguna Anda dan apakah usaha promosi Anda berjalan dengan baik.

* **Popular content:** Menginformasikan kemana pengunjung Anda melakuan navigasi pada proyek Anda, dilihat dari pageviews dan pengunjung unik.

[GitHub stars](https://help.github.com/articles/about-stars/) juga bisa membantu menyediakan pengukuran dasar dari popularitas. Meskipun GitHub stars tidak serta-merta mengkorelasikan pada jumlah download dan penggunaan, informasi dari GitHub stars dapat menginformasikan berapa banyak orang yang memperhatikan pekerjaan Anda.

Anda mungkin ingin [melacak temuan pada tempat khusus](https://opensource.com/business/16/6/pirate-metrics): misalnya, Google PageRank, trafik referensi dari halaman web proyek Anda, atau referensi dari proyek open source dan website.

## Penggunaan

Orang-orang menemukan proyek Anda pada sesuatu yang kita sebut dengan Internet. Idealnya, ketika mereka melihat proyek Anda, mereka akan tertarik untuk melakukan sesuatu. Pertanyaan kedua yang ingin Anda tanyakan adalah: _apakah orang-orang menggunakan proyek ini?_

Jika Anda menggunakan perangkat manajemen paket, seperti npm atau RubyGems.org, untuk mendistribusikan proyek Anda, Anda bisa melacak jumlah total download dari proyek Anda.

Setiap perangkat manajemen paket mungkin menggunakan definisi "download" yang berbeda, dan jumlah download tidak langsung berkorelasi dengan installasi atau penggunaan, tetapi informasi ini menyediakan dasar untuk perbandingan. Cobalah untuk menggunakan [Libraries.io](https://libraries.io/) untuk melacak statistik pada banyak perangkat manajemen paket.

Jika proyek Anda berada pada GitHub, kunjungi halaman "Traffic". Anda bisa menggunakan [clone graph](https://github.com/blog/1873-clone-graphs) untuk melihat berapa kali proyek Anda telah di-clone pada hari tertentu, dipecah pada jumlah clone dan orang-orang yang melakukan clone secara unik.

![clone graph](/assets/images/metrics/clone_graph.png)

Jika penggunaan ternyata rendah dibandingkan jumlah orang yang menemukan proyek Anda, terdapat dua hal yang perlu dipertimbangkan:

* Proyek Anda tidak sukses dalam mengkonversi pengguna Anda, atau
* Anda menarik pengguna yang salah

Sebagai contoh, jika proyek Anda muncul pada halaman depan dari Hacker News, Anda mungkin melihat kenaikan pada bagian traffic, tetapi nilai konversi yang rendah, karena Anda mendekati semua orang pada Hacker News. Jika proyek Ruby Anda muncul pada konferensi Ruby, Anda mungkin akan melihat nilai konversi yang tinggi dari pengguna yang ditargetkan.

Cobalah untuk mencari tahu darimana asal pengguna Anda dan mintalah masukan pada halaman proyek Anda untuk menentukan manakah diantara dua masalah tersebut yang Anda alami.

Setelah Anda tahu bahwa orang-orang menggunakan proyek Anda, Anda mungkin mencoba mencari tahu apa yang mereka lakukan dengan proyek Anda. Apakah mereka membangunnya dengan melakukan fork pada kode Anda dan menambahkan fitur baru? Apakah mereka menggunakannya untuk ilmu pengetahuan atau bisnis?

## Mempertahankan

Orang-orang menemukan proyek Anda dan menggunakannya. Pertanyaan berikutnya yang harus Anda tanyakan pada diri Anda adalah: _apakah orang-orang berkontribusi balik pada proyek?_

Tidak pernah terlambat untuk mulai berpikir tentang kontributor. Tanpa mereka, Anda beresiko menempatkan posisi Anda pada situasi yang tidak sehat dimana proyek Anda _terkenal_ (banyak orang menggunakannya) tetapi tidak _didukung_ (tidak cukup jumlah pengelola untuk memenuhi kebutuhan).

Mempertahankan juga membutuhkan [masukan kontributor baru](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2), karena kontributor aktif sebelumnya akan berpindah pada hal yang lain.

Contoh dari metrik komunitas yang perlu Anda perhatikan secara berkala meliputi:

* **Jumlah total kontributor dan commit per kontributor:** Menginformasikan berapa banyak kontributor yang Anda miliki, dan siapa yang lebih atau kurang aktif. Pada GitHub, Anda bisa melihat informasi ini pada "Graphs" -> "Contributors." Saat ini, grafik ini hanya menghitung kontributor yang telah melakukan commit pada branch default dari repositori.

![contributor graph](/assets/images/metrics/repo_contributors_specific_graph.png)

* **Kontributor perdana, umum, dan rutin:** Membantu Anda melacak apakah Anda mendapatkan kontributor baru, dan apakah mereka kembali. (Kontributor umum adalah kontributor dengan jumlah commit yang rendah. Apakah itu satu, kurang dari lima, atau jumlah commit lain sesuai definisi Anda.) Tanpa kontributor baru, komunitas proyek Anda menjadi stagnan.

* **Jumlah laporan masalah dan pull request yang masih terbuka:** Jika jumlah ini terlalu tinggi, Anda mungkin perlu bantuan untuk membereskan masalah dan review kode.

* **Jumlah laporan masalah dan pull request yang _dilaporkan_:** Laporan masalah yang dilaporkan mengindikasikan seseorang cukup perhatian terhadap proyek Anda untuk melaporkannya. Jika jumlah ini meningkat terus, hal ini mengindikasikan bahwa orang-orang tertarik dengan proyek Anda.

* **Jenis kontribusi:** Sebagai contoh, commit, memperbaiki kesalahan ketik atau kesalahan program, atau memberikan komentar pada sebuah laporan masalah.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/arfon?s=180" class="pquote-avatar" alt="avatar">
  Open source lebih dari sekedar kode. Proyek open source yang sukses meliputi kontribusi kode dan dokumentasi bersama dengan diskusi tentang perubahan ini.
  <p markdown="1" class="pquote-credit">
— @arfon, ["The Shape of Open Source"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## Aktivitas pengelola

Akhirnya, Anda ingin memastikan pengelola proyek Anda mampu menangani jumlah kontribusi yang diterima. Pertanyaan terakhir yang ingin Anda tanyakan pada diri Anda adalah: _apakah saya (atau kami) merespon terhadap komunitas kami?_

Pengelola yang tidak responsif menjadi penghambat bagi proyek open source. Jika seseorang mengirimkan sebuah kontribusi tetapi tidak pernah mendapatkan respon dari pengelola, mereka mungkin merasa diabaikan dan pada akhirnya meninggalkan proyek Anda.

[Penelitian dari Mozilla](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) menyarankan bahwa tingkat responsif pengelola merupakan faktor penting dalam mendorong kontributor yang berulang.

Pertimbangkan untuk melacak berapa lama bagi Anda (atau pengelola lain) untuk merespon  terhadap kontribusi, baik laporan masalah atau pull request. Merespon tidak berarti mengambil tindakan. Merespon bisa sesederhana seperti : _"Terima kasih atas kontribusi Anda! Saya akan melakukan review dalam minggu depan."_

Anda juga bisa mengukur waktu yang dibutuhkan untuk berpindah dari satu fase ke fase lain pada proses kontribusi, seperti:

* Waktu rata-rata sebuah laporan masalah tetap terbuka
* Apakah laporan masalah ditutup oleh PRs
* Apakah laporan masalah yang stagnan akhirnya ditutup
* Waktu rata-rata untuk melakukan merge sebuah pull request

## Gunakan 📊 untuk belajar tentang orang

Memahami metrik akan membantu Anda membangun proyek open source yang aktif dan berkembang. Meskipun Anda tidak melacak setiap metrik pada sebuah _dashboard_, gunakan kerangka diatas untuk memfokuskan perhatian Anda pada jenis perilaku yang akan membantu proyek Anda bertahan.
