---
locale: id-ID
title: Kiat Baik untuk Pengelola
description: Mempermudah hidup Anda sebagai pengelola open source, mulai dari mendokumentasikan proses hingga memberdayakan komunitas Anda.
class: best-practices
toc:
  apa-artinya-menjadi-pengelola: "Apa artinya menjadi pengelola?"
  mendokumentasikan-proses-anda: "Mendokumentasikan proses Anda"
  belajar-untuk-mengatakan-tidak: "Belajar untuk mengatakan tidak"
  berdayakan-komunitas-anda: "Berdayakan komunitas Anda"
  manfaatkan-robot: "Manfaatkan robot"
  ok-untuk-berhenti-sejenak: "OK untuk berhenti sejenak"
order: 5
image: /assets/images/cards/best-practices.png
---

## Apa artinya menjadi pengelola?

Jika Anda mengelola proyek open source yang banyak digunakan oleh orang, Anda mungkin menyadari bahwa Anda semakin sedikit melakukan pemrograman dan lebih banyak menyelesaikan permasalahan.

Pada fase awal proyek, Anda melakukan percobaan dengan ide-ide baru dan membuat keputusan berdasarkan apa yang Anda inginkan. Seiring dengan perkembangan popularitas proyek Anda, Anda akan lebih banyak bekerja dengan pengguna dan kontributor Anda.

Mengelola sebuah proyek membutuhkan lebih dari sekedar membuat kode. Pekerjaan ini seringkali tidak terduga, namun mereka juga sama pentingnya untuk proyek yang terus berkembang. Kami telah mengmpulkan beberapa cara untuk mempermudah hidup Anda, mulai dari mendokumentasikan proses hingga memberdayakan komunitas Anda.

## Mendokumentasikan proses Anda

Menuliskan segala sesuatunya adalah salah satu pekerjaan penting yang bisa Anda lakukan sebagai seorang pengelola.

Dokumentasi tidak hanya mengklarifikasikan pemikiran Anda, namun juga membantu orang lain memahami apa yang Anda perlukan atau harapkan, sebelum mereka mulai bertanya.

Menuliskan dalam bentuk dokumentasi akan mempermudah Anda untuk mengatakan tidak apabila ada yang tidak sesuai dengan ruang lingkup yang sudah ditentukan. Dokumentasi juga mempermudah orang lain untuk bergabung dan mulai membantu. Anda tidak akan pernah tahu siapa saja yang mungkin akan membaca atau menggunakan proyek Anda.

Anda tidak perlu menuliskan dalam bentuk paragraf penuh, bahkan dengan poin-poin saja sudah jauh lebih baik daripada tidak sama sekali.

### menuliskan visi proyek Anda

Mulailah dengan menuliskan tujuan akhir dari proyek Anda. Tambahkan kedalam dokumen README, atau pisahkan kedalam dokumen VISION. Jika terdapat dokumen lain yang bisa membantu seperti peta perjalanan proyek, maka pastikan dokumen tersebut bersifat publik.

Memiliki visi yang jelas dan terdokumentasi membantu Anda untuk tetap fokus dan juga menghindari perluasan ruang lingkup dari kontribusi orang lain.

Sebagai contoh, @lord menemukan bahwa memiliki visi proyek telah membantu dia dalam menentukan permintaan mana yang perlu ditanggapi. Sebagai seorang pengelola baru, dia menyesal karena tidak bertahan dengan ruang lingkup proyeknya ketika dia menerima feature request pertama untuk [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/1976330?v=3&s=460" class="pquote-avatar" alt="avatar" alt="@lord avatar">
  Saya hanya meraba.Saya tidak meluangkan cukup waktu untuk menghadirkan sebuah solusi lengkap. Saya berharap saya pernah menuliskan "Saya tidak punya waktu untuk ini saat ini, tetapi saya akan menambahkannya pada daftar jangka panjang."
  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Komunikasikan ekspektasi Anda

Aturan bisa menggelisahkan untuk dituliskan. Seringkali Anda merasa mengatur perilaku orang lain atau merusak kesenangan orang lain.

Aturan yang baik, tertulis, dan diterapkan dengan adil akan sangat membantu pengelola. Aturan ini akan menghindarkan Anda dari melakukan sesuatu yangg tidak ingin Anda kerjakan.

Sebagian besar orang yang hadir pada proyek Anda tidak tahu tentang Anda atau situasi Anda. Mereka bisa jadi mengasumsikan bahwa Anda dibayar untuk mengerjakan proyek tersebut, terutama jika mereka menggunakan dan sangat bergantung pada proyek Anda. Mungkin pada suatu masa Anda banyak menghabiskan waktu Anda pada proyek Anda, namun saat ini Anda sibuk dengan pekerjaan baru atau anggota keluarga yang baru.

Semuanya ini normal! Pastikan orang lain mengetahui kondisi ini.

Jika mengelola proyek Anda merupakan pekerjaan paruh waktu atau sepenuhnya sukarela, terbukalah dengan berapa banyak waktu yang Anda miliki. Informasi ini tidak sama dengan berapa banyak waktu yang diperlukan oleh proyek atau berapa banyak waktu yang diinginkan oleh orang lain terhadap Anda.

Berikut adalah beberapa aturan yang layak untuk ditulis:

* Bagai kontribusi akan di-review dan diterima (_Apakah perlu pengujian? Template laporan masalah?_)
* Jenis kontribusi yang Anda terima (_Apakah Anda ingin meminta bantuan pada bagian tertentu dari kode Anda?_)
* Kapan waktu yang tepat untuk melakukan penjajakan ulang (_misalnya. "Anda bisa mengharapkan respon dari pengelola dalam 7 days. Jika Anda belum mendapatkan balasan apapun, silahkan memberikan notifikasi."_)
* Berapa banyak waktu yang Anda habiskan pada proyek (_misalnya. "Kami hanya menghabiskan waktu sekitar 5 jam per minggu pada proyek ini"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), dan [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) adalah beberapa contoh proyek dengan aturan yang jelas untuk pengelola dan kontributor.

### Pastikan komunikasi terbuka

Jangan lupa untuk mendokumentasikan interaksi Anda. Jika dimungkinkan, pastikan komunikasi terjadi secara terbuka. Jika seseorang berusaha untuk menghubungi Anda secara pribadi untuk mendiskusikan sebuah pengajuan fitur baru atau membutuhkan bantuan, arahkan mereka pada media komunikasi publik secara halus, seperti mailing list atau _issue tracker_.

Jika Anda berjumpa dengan pengelola lain, atau membuat keputusan besar secara pribadi, dokumentasikan hasil diskusinya secara terbuka, meskipun hanya menuliskan notulensi Anda.

Dengan cara itu, setiap orang yang bergabung dengan komunitas Anda akan memiliki informasi yang sama dengan orang-orang yang sudah bertahun-tahun.

## Belajar untuk mengatakan tidak

Anda telah menuliskan segalanya. Idealnya semua orang akan membaca dokumentasi Anda, namun dalam kenyataannya, Anda masih harus mengingatkan orang lain bahwa informasi ini sudah tersedia.

Dengan menuliskan segala sesuatunya, akan sangat membantu ketika Anda perlu menerapkan aturan Anda.

Mengatakan tidak memang tidaklah menyenangkan, tetapi  _"Kontribusi Anda tidak sesuai dengan kriteria proyek ini"_ terasa lebih manusiawi dibandingkan  _"Saya tidak suka kontribusi Anda"_.

Mengatakan tidak juga berlaku pada banyak situasi yang akan Anda jumpai sebagai pengelola: permintaan fitur yang tidak sesuai, seseorang mencoba mengalihkan sebuah diskusi, melakukan pekerjaan yang tidak diperlukan bagi orang lain.

### Pastikan diskusi berjalan dengan ramah

Salah satu tempat terbaik untuk berlatih mengatakan tidak adalah laporan masalah dan antrian pull request. Sebagai pengelola proyek, Anda pasti akan menerima saran yang tidak Anda harapkan.

Mungkin kontribusi tersebut akan mengubah arah proyek atau tidak sesuai dnegan visi Anda. Mungkin idenya bagus, tetapi implementasinya kurang bagus.

Apapun alasannya, sangatlah dimungkinkan untuk menolak kontribusi yang tidak sesuai dengan standar proyek Anda.

Jika Anda menerima kontribusi yang tidak Anda inginkan, reaksi pertama Anda mungkin mengabaikan atau pura-pura tidak melihatnya. Melakukan hal ini bisa melukai perasaan orang lain atau bahkan mengurangi motivasi kontributor lainnya pada komunitas Anda.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/869950?v=3&s=400" class="pquote-avatar" alt="avatar" alt="@KrauseFx avatar">
  Kunci untuk menangani dukungan terhadap proyek open source skala besar adalah memastikan bahwa masalah terus diperhatikan. Cobalah untuk mencegah laporan masalah berhenti. Jika Anda merupakan pengembang ioS, Anda tahu bagaimana frustasinya untuk mengajukan radar. Anda mungkin bisa mendengar balasan 2 tahun kemudian, dan mengatakan untuk mencoba kembali dengan versi terbaru dari iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Jangan biarkan kontribusi yang tidak diinginkan tetap terbuka karena Anda merasa bersalah atau ingin bersikap baik. Pada akhirnya, masalah yang tidak terjawab dan PR akan membuat pekerjaan proyek Anda menjadi lebih berat dan mengintimidasi Anda.

Akan lebih baik untuk langsung menutup kontribusi yang Anda tahu tidak akan diterima. Jika proyek Anda mengalami hambatan yang besar, @steveklabnik memiliki saran untuk [mengatasi laporan masalah secara efisien](http://words.steveklabnik.com/how-to-be-an-open-source-gardener).

Kedua, mengabaikan kontribusi akan mengirimkan sinyal negatif pada komunitas Anda. Berkontribusi pada sebuah proyek bisa jadi menakutkan, apalagi untuk pertama kalinya bagi orang lain. Meskipun Anda tidak menerima kontribusi mereka, akui hasil pekerjaan mereka dan ucapkan terima kasih atas minat mereka. Itu adalah sebuah pujian yang besar!

Jika Anda tidak ingin menerima sebuah kontribusi:

* **Ucapkan terima kasih** atas kontribusi mereka
* **Jelaskan kenapa tidak sesuai** pada ruang lingkup proyek, dan tawarkan saran untuk perbaikan, jika dimungkinkan.
* **Hubungkan dengan dokumentasi relevan**, jika Anda memilikinya. Jika Anda mengamati permintaan yang berulang pada sesuatu yang tidak ingin Anda terima, tambahkan pada dokumentasi Anda.
* **Tutup permintaan**

Anda tidak perlu lebih dari 1-2 kalimat untuk merespon. Sebagai contoh, ketika pengguna [celery](https://github.com/celery/celery/) melaporkan sebuah kesalahan yang berhubungan dengan sistem operasi Windows, @berkerpeksag [menjawab dengan](https://github.com/celery/celery/issues/3383):

![celery screenshot](https://willysr.github.io/id-opensource.guide/assets/images/best-practices/celery.png)

Jika mengatakan tidak cukup menakutkan bagi Anda, Anda tidak sendirian. Seperti [yang dialami](https://blog.jessfraz.com/post/the-art-of-closing/) @jessfraz:

> Saya telah berbicara dengan beberapa pengelola open source yang berbeda: Mesos, Kubernetes, Chromium, dan mereka semua sepakat bahwa salah satu tugas berat dari pengelola adalah mengatakan "Tidak" pada perbaikan yang tidak Anda inginkan.

Jangan merasa bersalah karena tidak menerima kontribusi seseorang. Aturan pertama dari open source, [menurut](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"Tidak bersifat sementara, ya bersifat selamanya."_ Meskipun memberikan empati pada niat baik orang lain adalah sesuatu yang baik, menolak sebuah kontribusi tidaklah sama dengan menolak orang itu sendiri.

Pada akhirnya, jika sebuah kontribusi kurang baik, Anda tidak harus menerimanya. Bersikaplah baik dan responsif ketika seseorang berkontribusi pada proyek Anda, tetapi hanya menerima ketika Anda percaya bahwa kontribusi itu akan membuat proyek Anda menjadi lebih baik. Semakin sering Anda mengatakan tidak, akan menjadi semakin mudah.

### Bersikaplah Proaktif

Untuk mengurangi jumlah kontribusi yang tidak diharapkan dari awal, jelaskan proses untuk mengajukan dan menerima kontribusi proyek Anda pada panduan kontribusi.

Jika Anda menerima terlalu banyak kontribusi yang kurang baik, pastikan bahwa kontributor telah melakukan beberapa pekerjaan sebelumnya, misalnya:

* Mengisi template/checklist daftar laporan masalah atau PR
* Membuka laporan permasalahan sebelum mengajukan PR

Jika mereka tidak mengikuti aturan Anda, tutup dengan segera dan arahkan pada dokumentasi Anda.

Meskipun pendekatan ini mungkin terasa tidak menyenangkan pada awalnya, bersikap proaktif sebetulnya baik untuk kedua belah pihak. Hal ini mengurangi kesempatan seseorang untuk menghabiskan terlalu banyak waktu pada pull request yang tidak akan Anda terima. Dan juga membuat beban pekerjaan Anda menjadi lebih mudah untuk dikelola.

<aside markdown="1" class="pquote">
  <img src="https://avatars0.githubusercontent.com/u/125011" class="pquote-avatar" alt="avatar">
  Idealnya, jelaskan kepada mereka dan pada dokumen CONTRIBUTING.md bagaimana mereka bisa mendapatkan indikasi yang lebih baik dimasa depan tentang apa yang akan Anda terima atau tolak sebelum mereka mulai bekerja.
  <p markdown="1" class="pquote-credit">
— @mikemcquaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Seringkali, ketika Anda mengatakan tidak, kontributor potensial Anda mungkin akan marah atau mengkritisi keputusan Anda. Jika perilaku mereka menjadi tidak menyenangkan, [ambil langkah-langkah untuk menenangkan situasinya](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) atau bahkan hapus mereka dari komunitas Anda, jika mereka tidak berkolaborasi secara konstruktif.

### Memberlakukan pendampingan

Mungkin seseorang pada komunitas Anda secara rutin mengirimkan kontribusi yang tidak sesuai dengan standar proyek Anda. Hal ini bisa membuat frustasi bagi kedua belaj pihak untuk berada pada situasi penolakan berkali-kali.

Jika Anda melihat seseorang sangat berminat pada proyek Anda tetapi membutuhkan sedikit bantuan, bersabarlah. Jelaskan dengan jelas pada setiap situasi kenapa kontribusi mereka tidak memenuhi ekspektasi dari proyek. Cobalah untuk mengarahkan mereka pada tugas yang lebih sederhana, seperti laporan masalah yang ditandai dengan _"kesalahan baik pertama,"_ untuk mendapatkan pengalaman. Jika Anda punya waktu, pertimbangkan untuk mendampingi mereka pada kontribusi pertama mereka, atau cari orang lain pada komunitas yang bersedia mendampinginya.

## Berdayakan komunitas Anda

You don't have to do everything yourself. Your project's community exists for a reason! Even if you don't yet have an active contributor community, if you have a lot of users, put them to work.

### Share the workload

If you're looking for others to pitch in, start by asking around.

When you see new contributors making repeated contributions, recognize their work by offering more responsibility. Document how others can grow into leadership roles if they wish.

Encouraging others to [share ownership of the project](../building-community/#berbagi-kepemilikan-dari-proyek-anda) can greatly reduce your own workload, as @lmccart discovered on her project, [p5.js](https://github.com/processing/p5.js?files=1).

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/191056?v=3&s=460" class="pquote-avatar" alt="avatar">
  I’d been saying, “Yeah, anyone can be involved, you don’t have to have a lot of coding expertise [...].” We had people sign up to come [to an event] and that’s when I was really wondering: is this true, what I’ve been saying? There are gonna be 40 people who show up, and it’s not like I can sit with each of them...But people came together, and it just sort of worked. As soon as one person got it, they could teach their neighbor.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does “Open Source” Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39#.chnjlag7p)
  </p>
</aside>

If you need to step away from your project, either on hiatus or permanently, there's no shame in asking someone else to take over for you.

If other people are enthusiastic about its direction, give them commit access or formally hand over control to someone else. If someone forked your project and is actively maintaining it elsewhere, consider linking to the fork from your original project. It's great that so many people want your project to live on!

@progrium [found that](http://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documenting the vision for his project, [Dokku](https://github.com/dokku/dokku), helped those goals live on even after he stepped away from the project:

> I wrote a wiki page describing what I wanted and why I wanted it. For some reason it came as a surprise to me that the maintainers started moving the project in that direction! Did it happen exactly how I'd do it? Not always. But it still brought the project closer to what I wrote down.

### Let others build the solutions they need

If a potential contributor has a different opinion on what your project should do, you may want to gently encourage them to work on their own fork.

Forking a project doesn't have to be a bad thing. Being able to copy and modify projects is one of the best things about open source. Encouraging your community members to work on their own fork can provide the creative outlet they need, without conflicting with your project's vision.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/481677?v=3&s=400" class="pquote-avatar" alt="avatar">
  I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

The same applies to a user who really wants a solution that you simply don't have the bandwidth to build. Offering APIs and customization hooks can help others meet their own needs, without having to modify the source directly. @orta [found that](http://artsy.github.io/blog/2016/07/03/handling-big-projects/) encouraging plugins for CocoaPods led to "some of the most interesting ideas":

> It's almost inevitable that once a project becomes big, maintainers have to become a lot more conservative about how they introduce new code. You become good at saying "no", but a lot of people have legitimate needs. So, instead you end up converting your tool into a platform.

## Manfaatkan robot

Just as there are tasks that other people can help you with, there are also tasks that no human should ever have to do. Robots are your friend. Use them to make your life as a maintainer easier.

### Require tests and other checks to improve the quality of your code

One of the most important ways you can automate your project is by adding tests.

Tests help contributors feel confident that they won't break anything. They also make it easier for you to review and accept contributions quickly. The more responsive you are, the more engaged your community can be.

Set up automatic tests that will run on all incoming contributions, and ensure that your tests can easily be run locally by contributors. Require that all code contributions pass your tests before they can be submitted. You'll help set a minimum standard of quality for all submissions. [Required status checks](https://help.github.com/articles/about-required-status-checks/) on GitHub can help ensure no change gets merged without your tests passing.

If you add tests, make sure to explain how they work in your CONTRIBUTING file.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/812892?v=3&s=460" class="pquote-avatar" alt="avatar">
  I believe that tests are necessary for all code that people work on. If the code was fully and perfectly correct, it wouldn't need changes – we only write code when something is wrong, whether that's "It crashes" or "It lacks such-and-such a feature". And regardless of the changes you're making, tests are essential for catching any regressions you might accidentally introduce.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](http://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Use tools to automate basic maintenance tasks

The good news about maintaining a popular project is that other maintainers have probably faced similar issues and built a solution for it.

There are a [variety of tools available](https://github.com/showcases/tools-for-open-source) to help automate some aspects of maintenance work. A few examples:

* [semantic-release](https://github.com/semantic-release/semantic-release) automates your releases
* [mention-bot](https://github.com/facebook/mention-bot) mentions potential reviewers for pull requests
* [Danger](https://github.com/danger/danger) helps automate code review

For bug reports and other common contributions, GitHub has [Issue Templates and Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), which you can create to streamline the communication you receive. You can also set up [email filters](https://github.com/blog/2203-email-updates-about-your-own-activity) to manage your email notifications.

If you want to get a little more advanced, style guides and linters can standardize project contributions and make them easier to review and accept.

However, if your standards are too complicated, they can increase the barriers to contribution. Make sure you're only adding enough rules to make everyone's lives easier.

If you're not sure which tools to use, look at what other popular projects do, especially those in your ecosystem. For example, what does the contribution process look like for other Node modules? Using similar tools and approaches will also make your process more familiar to your target contributors.

## OK untuk berhenti sejenak

Open source work once brought you joy. Maybe now it's starting to make you feel avoidant or guilty.

Perhaps you're feeling overwhelmed or a growing sense of dread when you think about your projects. And meanwhile, the issues and pull requests pile up.

Burnout is a real and pervasive issue in open source work, especially among maintainers. As a maintainer, your happiness is a non-negotiable requirement for the survival of any open source project.

Although it should go without saying, take a break! You shouldn't have to wait until you feel burned out to take a vacation. @brettcannon, a Python core developer, decided to take [a month-long vacation](http://www.snarky.ca/why-i-took-october-off-from-oss-volunteering) after 14 years of volunteer OSS work.

Just like any other type of work, taking regular breaks will keep you refreshed, happy, and excited about your work.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/36432?v=3&s=400" class="pquote-avatar" alt="avatar">
  In maintaining WP-CLI, I've discovered I need to make myself happy first, and set clear boundaries on my involvement. The best balance I've found is 2-5 hours per week, as a part of my normal work schedule. This keeps my involvement a passion, and from feeling too much like work. Because I prioritize the issues I'm working on, I can make regular progress on what I think is most important.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://runcommand.io/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Sometimes, it can be hard to take a break from open source work when it feels like everybody needs you. People may even try to make you feel guilty for stepping away.

Do your best to find support for your users and community while you're away from a project. If you can't find the support you need, take a break anyway. Be sure to communicate when you're not available, so people aren't confused by your lack of responsiveness.

Taking breaks applies to more than just vacations, too. If you don't want to do open source work on weekends, or during work hours, communicate those expectations to others, so they know not to bother you.

## Take care of yourself first!

Maintaining a popular project requires different skills than the earlier stages of growth, but it's no less rewarding. As a maintainer, you'll practice leadership and personal skills on a level that few people get to experience. While it's not always easy to manage, setting clear boundaries and only taking on what you're comfortable with will help you stay happy, refreshed, and productive.
