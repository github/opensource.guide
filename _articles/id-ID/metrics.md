---
locale: id-ID
title: Metrik Open Source
description: Buat keputusan yang tepat untuk membantu proyek open source Anda berkembang dengan mengukur dan melacak kesuksesannya.
class: metrics
toc:
  kenapa-mengukur-segalanya: "Kenapa mengukur segalanya?"
  penemuan: "Penemuan"
  usage: "Usage"
  penyimpanan: "Penyimpanan"
  maintainer-activity: "Maintainer activity"
order: 9
image: /assets/images/cards/metrics.png
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

> Homebrew disediakan secara gratis dan dijalankan sepenuhnya oleh sukarelawan dalam waktu senggang mereka. Sebagai hasilnya, kami tidak memiliki sumber daya untuk melakukan studi pengguna dari pengguna Homebrew untuk menentukan mendesain fitur baru dan memprioritaskan pekerjaan. Analisa agregasi pengguna anonim memampukan kami untuk memprioritaskan perbaikan dan fitur berbasiskan pada bagaimana, dimana, dan kapan orang-orang menggunakan.

Popularitas bukanlah segalanya. Semua orang masuk pada open source untuk alasan yang berbeda-beda. Jika tujuan Anda sebagai pengelola open source adalah untuk menunjukan hasil pekerjaan Anda, bersikaplah transparan tentang kode Anda, atau jika hanya untuk hiburan, metrik mungkin tidaklah penting bagi Anda.

Jika Anda _memang_ tertarik untuk memahami proyek Anda pada level yang lebih dalam, silahkan membaca lebih lanjut untuk menganalisa aktivitas proyek Anda.

## Penemuan

Sebelum setiap orang bisa menggunakan atau berkontribusi pada proyek Anda, mereka perlu tahu bahwa proyek itu ada. Tanyakan pada diri Anda: _apakah orang-orang menemukan proyek ini?_

![traffic graph](https://willysr.github.io/id-opensource.guide/assets/images/metrics/repo_traffic_graphs_tooltip.png)

Jika proyek Anda berada di GitHub, [Anda dapat melihat](https://help.github.com/articles/about-repository-graphs/#traffic) berapa banyak orang yang sampai pada proyek Anda dan darimana mereka berasal. Dari halaman proyek Anda, klik "Graphs", lalu "Traffic". Pada halaman ini, Anda bisa melihat:

* **Total pageviews:** Menginformasikan berapa banyak proyek Anda dilihat

* **Total unique visitors:** Menginformasikan berapa banyak orang yang melihat proyek Anda

* **Referring sites:** Menginformasikan darimana pengunjung Anda berasal. Metrik ini bisa membantu Anda untuk mencari tahu dimana mencapai pengguna Anda dan apakah usaha promosi Anda berjalan dengan baik.

* **Popular content:** Menginformasikan kemana pengunjung Anda melakuan navigasi pada proyek Anda, dilihat dari pageviews dan pengunjung unik.

[GitHub stars](https://help.github.com/articles/about-stars/) juga bisa membantu menyediakan pengukuran dasar dari popularitas. Meskipun GitHub stars tidak serta-merta mengkorelasikan pada jumlah download dan penggunaan, informasi dari GitHub stars dapat menginformasikan berapa banyak orang yang memperhatikan pekerjaan Anda.

Anda mungkin ingin [melacak temuan pada tempat khusus](https://opensource.com/business/16/6/pirate-metrics): misalnya, Google PageRank, trafik referensi dari halaman web proyek Anda, atau referensi dari proyek open source dan website.

## Penggunaan

People are finding your project on this wild and crazy thing we call the internet. Ideally, when they see your project, they'll feel compelled to do something. The second question you'll want to ask is: _are people using this project?_

If you use a package manager, such as npm or RubyGems.org, to distribute your project, you may be able to track your project's downloads.

Each package manager may use a slightly different definition of "download", and downloads do not necessarily correlate to installs or use, but it provides some baseline for comparison. Try using [Libraries.io](https://libraries.io/) to track usage statistics across many popular package managers.

If your project is on GitHub, navigate again to the "Traffic" page. You can use the [clone graph](https://github.com/blog/1873-clone-graphs) to see how many times your project has been cloned on a given day, broken down by total clones and unique cloners.

![clone graph](https://willysr.github.io/id-opensource.guide/assets/images/metrics/clone_graph.png)

If usage is low compared to the number of people discovering your project, there are two issues to consider. Either:

* Your project isn't successfully converting your audience, or
* You're attracting the wrong audience

For example, if your project lands on the front page of Hacker News, you'll probably see a spike in discovery (traffic), but a lower conversion rate, because you're reaching everyone on Hacker News. If your Ruby project is featured at a Ruby conference, however, you're more likely to see a high conversion rate from a targeted audience.

Try to figure out where your audience is coming from and ask others for feedback on your project page to figure out which of these two issues you're facing.

Once you know that people are using your project, you might want to try to figure out what they are doing with it. Are they building on it by forking your code and adding features? Are they using it for science or business?

## Penyimpanan

People are finding your project and they're using it. The next question you'll want to ask yourself is: _are people contributing back to this project?_

It's never too early to start thinking about contributors. Without other people pitching in, you risk putting yourself into an unhealthy situation where your project is _popular_ (many people use it) but not _supported_ (not enough maintainer time to meet demand).

Retention also requires an [inflow of new contributors](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2), as previously active contributors will eventually move on to other things.

Examples of community metrics that you may want to regularly track include:

* **Total contributor count and number of commits per contributor:** Tells you how many contributors you have, and who's more or less active. On GitHub, you can view this under "Graphs" -> "Contributors." Right now, this graph only counts contributors who have committed to the default branch of the repository.

![contributor graph](https://willysr.github.io/id-opensource.guide/assets/images/metrics/repo_contributors_specific_graph.png)

* **First time, casual, and repeat contributors:** Helps you track whether you're getting new contributors, and whether they come back. (Casual contributors are contributors with a low number of commits. Whether that's one commit, less than five commits, or something else is up to you.) Without new contributors, your project's community can become stagnant.

* **Number of open issues and open pull requests:** If these numbers get too high, you might need help with issue triaging and code reviews.

* **Number of _opened_ issues and _opened_ pull requests:** Opened issues means somebody cares enough about your project to open an issue. If that number increases over time, it suggests people are interested in your project.

* **Types of contributions:** For example, commits, fixing typos or bugs, or commenting on an issue.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/4483" class="pquote-avatar" alt="avatar">
  Open source is more than just code. Successful open source projects include code and documentation contributions together with conversations about these changes.
  <p markdown="1" class="pquote-credit">
— @arfon, ["The Shape of Open Source"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## Aktivitas pengelola

Finally, you'll want to close the loop by making sure your project's maintainers are able to handle the volume of contributions received. The last question you'll want to ask yourself is: _am I (or are we) responding to our community?_

Unresponsive maintainers become a bottleneck for open source projects. If someone submits a contribution but never hears back from a maintainer, they may feel discouraged and leave.

[Research from Mozilla](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) suggests that maintainer responsiveness is a critical factor in encouraging repeat contributions.

Consider tracking how long it takes for you (or another maintainer) to respond to contributions, whether an issue or a pull request. Responding doesn't require taking action. It can be as simple as saying: _"Thanks for your submission! I'll review this within the next week."_

You could also measure the time it takes to move between stages in the contribution process, such as:

* Average time an issue remains open
* Whether issues get closed by PRs
* Whether stale issues get closed
* Average time to merge a pull request

## Gunakan 📊 untuk belajar tentang orang

Understanding metrics will help you build an active, growing open source project. Even if you don't track every metric on a dashboard, use the framework above to focus your attention on the type of behavior that will help your project thrive.
