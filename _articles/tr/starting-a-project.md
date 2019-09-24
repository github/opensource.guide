---
lang: tr
title: Starting an Open Source Project
description: Learn more about the world of open source and get ready to launch your
  own project.
class: beginners
toc:
  the-what-and-why-of-open-source: Açık kaynağın nediri ve nedeni
  should-i-launch-my-own-open-source-project: Should I launch my own open source project?
  launching-your-own-open-source-project: Launching your own open source project
  naming-and-branding-your-project: Projenizi isimlendirme ve markalama
  your-pre-launch-checklist: Your pre-launch checklist
order: '2'
image: "/assets/images/cards/beginner.png"
related:
- finding
- geliştirme
---

## Açık kaynağın "nedir"i ve "neden"i

So you're thinking about getting started with open source? Congratulations! The world appreciates your contribution. Let's talk about what open source is and why people do it.

### What does "open source" mean?

When a project is open source, that means **anybody can view, use, modify, and distribute your project for any purpose.** These permissions are enforced through [an open source license](https://opensource.org/licenses).

Open source is powerful because it lowers the barriers to adoption, allowing ideas to spread quickly.

Nasıl çalıştığını anlamak için, arkadaşınızın herkes yemek getirsin partisi verdiğini hayal edin ve vişneli turta götürmüşsünüz.

- Herkes turka yemek istedi (*kullanma*)
- Turta çok popüler oldu! Sizden tarifi isterler (*görüntüleme*)
- Bir arkadaşın, pasta şefi Alex şekeri azaltmayı önerir (*değiştirme*)
- Başka bir arkadaş, Lisa gelecek hafta bir akşam yemeği için kullanmak istiyor (*dağıtma*)

Buna karşılık, kapalı kaynak işlemi bir restorana gidip bir dilim vişneli turta siparişi vermek gibidir. Pasta yemek için bir ücret ödemeniz gerekir ve restoran muhtemelen size tariflerini vermez. Pastalarını aynen kopyalayıp kendi adınızla satarsanız, restoran size karşı dava açabilir.

### İnsanlar neden işlerini açık kaynak olarak sunarlar?

<aside markdown="1" class="pquote"><img src="https://avatars.githubusercontent.com/kentcdodds?s=180" class="pquote-avatar" alt="avatar"> Açık kaynak kullanmaktan ve işbirliği yapmaktan kazandığım en değerli deneyimlerden biri, aynı problemlerle karşı karşıya kalan diğer geliştiricilerle kurduğum ilişkilerden geliyor. <p markdown="1" class="pquote-credit"> - @kentcdodds, ["Açık Kaynağa Girmek Benim İçin Nasıl Harika Oldu"] (https://kentcdodds.com/blog/how-getting-into-open-source-has-been-awesome-for-me) </p></aside>

Bir kişinin veya örgütün bir projeyi açmak istemesinin [birçok nedeni vardır](https://ben.balter.com/2015/11/23/why-open-source/). Bazı örnekler:

- **İşbirliği:** Açık kaynaklı projeler, dünyadaki herhangi birinden değişiklikleri kabul edebilir. [Exercism](https://github.com/exercism/) , örneğin, 350'den fazla katkıda bulunanlarla bir programlama egzersizi platformudur.

- **Adapte etme ve yeniden tanımlama:** Açık kaynaklı projeler herkes tarafından herhangi bir amaç için kullanılabilir. İnsanlar başka şeyler yapmak için bile kullanabilirler. Örneğin [WordPress](https://github.com/WordPress) , [b2](https://github.com/WordPress/book/blob/master/Content/Part%201/2-b2-cafelog.md) adı verilen mevcut bir projenin çatalı olarak başladı.

- **Transparency:** Anyone can inspect an open source project for errors or inconsistencies. Transparency matters to governments like [Bulgaria](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) or the [United States](https://sourcecode.cio.gov/), regulated industries like banking or healthcare, and security software like [Let's Encrypt](https://github.com/letsencrypt).

Açık kaynak sadece yazılım için değil. Veri setlerinden kitaplara kadar her şeyi açık kaynak olarak sunabilirsiniz. [GitHub'a](https://github.com/explore) göz atın başka nelerin açık kaynak olabileceğini görün.

### Does open source mean "free of charge"?

Açık kaynağın en büyük çekimlerinden biri paraya mal olmamasıdır. Bununla birlikte, "ücretsiz" olması, açık kaynağın toplam değerinin bir yan ürünüdür.

[Açık kaynaklı bir lisans](https://opensource.org/osd-annotated), herkesin projenizi neredeyse her amaç için kullanmasını, değiştirmesini ve paylaşmasını gerektirdiğinden, projelerin kendileri ücretsiz olma eğilimindedir. Projenin kullanımı paraya mal olursa, herkes yasal olarak bir kopya çıkarabilir ve bunun yerine ücretsiz sürümü kullanabilir.

Sonuç olarak, çoğu açık kaynaklı proje ücretsizdir, ancak “ücretsiz” açık kaynak tanımlamasının bir parçası değildir. Açık kaynaklı projeler için dolaylı olarak ikili lisanslama veya sınırlı özellikler aracılığıyla ücretlendirme yapılmasına rağmen, açık kaynaklı resmi tanımlamaya uymanın yolları vardır.

## Should I launch my own open source project?

The short answer is yes, because no matter the outcome, launching your own project is a great way to learn how open source works.

Daha önce hiç kaynaklı bir proje açmadıysanız, insanların ne söyleyeceği veya birileri tarafından hiç fark edilip edilmeyeceği konusunda endişeli olabilirsiniz. Sizin ruh haliniz böyle ise, kesinlikle yalnız değilsin!

Open source work is like any other creative activity, whether it's writing or painting. It can feel scary to share your work with the world, but the only way to get better is to practice - even if you don't have an audience.

If you're not yet convinced, take a moment to think about what your goals might be.

### Setting your goals

Hedefler, neyin üzerinde çalışacağınızı, neye hayır diyeceğinizi ve başkalarından yardım almanız gereken yerleri bulmanıza yardımcı olabilir. Kendinize sorarak başlayın, *bu açık kaynak projeyi neden yapıyorum?*

There is no one right answer to this question. You may have multiple goals for a single project, or different projects with different goals.

If your only goal is to show off your work, you may not even want contributions, and even say so in your README. On the other hand, if you do want contributors, you'll invest time into clear documentation and making newcomers feel welcome.

<aside markdown="1" class="pquote"><img src="https://avatars.githubusercontent.com/mavris?s=180" class="pquote-avatar" alt="avatar"> Bir noktada kullandığım özel bir UIAlertView yarattım ... ve açık kaynak yapmaya karar verdim. Bu yüzden daha dinamik olacak şekilde değiştirdim ve GitHub'a yükledim. Ayrıca diğer geliştiricilere projelerinde nasıl kullanacaklarını açıklayan ilk belgelerimi yazdım. Muhtemelen hiç kimse onu kullanmamıştı çünkü basit bir projeydi ama katkım konusunda kendimi iyi hissediyordum. <p markdown="1" class="pquote-credit"> - @mavris, ["Kendi Kendine Öğrenen Yazılım Geliştiricileri: Açık Kaynak Neden Bizim İçin Önemli?"] (Https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important- to-us-fe2a3473a576) </p></aside>

As your project grows, your community may need more than just code from you. Responding to issues, reviewing code, and evangelizing your project are all important tasks in an open source project.

Kodlama dışı görevler için harcadığınız zaman miktarı projenizin boyutuna ve kapsamına bağlı olsa da, bunları kendiniz yapmak veya size yardımcı olacak birini bulmak için bir sorumlu olarak hazırlanmalısınız.

**If you're part of a company open sourcing a project,** make sure your project has the internal resources it needs to thrive. You'll want to identify who's responsible for maintaining the project after launch, and how you'll share those tasks with your community.

If you need a dedicated budget or staffing for promotion, operations and maintaining the project, start those conversations early.

<aside markdown="1" class="pquote"><img src="https://avatars.githubusercontent.com/captainsafia?s=180" class="pquote-avatar" alt="avatar"> Projeyi açmaya başladığınızda, yönetim süreçlerinizin projenizdeki topluluğun katkılarını ve yeteneklerini göz önünde bulundurmasını sağlamak önemlidir. İşletmenizde istihdam edilmeyen katılımcıları, projenin kilit noktalarına dahil etmekten korkmayın - özellikle de sık sık katkıda bulunanlarsa. <p markdown="1" class="pquote-credit"> - @captainsafia, ["Öyleyse bir açık kaynak proje açmak istiyorsun, ha?"] (Https://dev.to/captainsafia/so-you-wanna-open-source-a-project-eh-5779) </p></aside>

### Contributing to other projects

If your goal is to learn how to collaborate with others or understand how open source works, consider contributing to an existing project. Start with a project that you already use and love. Contributing to a project can be as simple as fixing typos or updating documentation.

If you're not sure how to get started as a contributor, check out our [How to Contribute to Open Source guide](../how-to-contribute/).

## Launching your own open source project

İşinizi açmak için mükemmel bir zaman yoktur. Bir fikri, ya da yıllarca kapalı kaldıktan sonra eski bir çalışmayı açabilirsiniz.

Genel olarak konuşursak, başkalarının çalışmalarını görmesi ve çalışmalarınız hakkında geri bildirim vermesi konusunda kendinizi rahat hissettiğinizde açık kaynak projenizi yayınlamalısınız.

Projenizi hangi aşamada yayınlamaya karar verirseniz verin, her proje aşağıdaki belgeleri içermelidir:

- [Open source license](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
- [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
- [Katkıda bulunma kuralları](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
- [Davranış kuralları](../code-of-conduct/)

Bir geliştirici olarak, bu bileşenler beklentileri iletmenize, katkıları yönetmenize ve herkesin yasal haklarını (kendi haklarınız dahil) korumanıza yardımcı olur. Olumlu bir deneyim yaşama şansınızı önemli ölçüde artırırlar.

Projeniz GitHub'taysa, bu dosyaları önerilen dosya adlarıyla kök dizininize koymak GitHub'ın onları okuyucularınıza tanıtmasına ve otomatik olarak göstermesine yardımcı olacaktır.

### Choosing a license

Açık kaynaklı lisans, başkalarının projenize yanıt vermeden kullanabileceğini, kopyalayabileceğini, değiştirebileceğini ve katkıda bulunabileceğini garanti eder. Aynı zamanda sizi kötü yasal durumlardan korur. **Açık kaynak kodlu bir proje başlatırken projenize bir lisans eklemelisiniz.**

Hukiki işler eğlenceli değildir. İyi haber şu ki, mevcut bir lisansı kopyalayıp havuzunuza yapıştırabilirsiniz. Zor işinizi korumak sadece bir dakikanızı alacaktır.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), and [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) are the most popular open source licenses, but [there are other options](https://choosealicense.com) to choose from.

When you create a new project on GitHub, you are given the option to select a license. Including an open source license will make your GitHub project open source.

![Pick a license](/assets/images/starting-a-project/repository-license-picker.png)

Eğer bir açık kaynak projesi yönetmek hukuki yönleri etrafında diğer sorularınız veya endişeleriniz varsa, [sizin ihtiyaçlarınızı giderebilecek içeriğimiz var](../legal/) .

### Writing a README

README'ler projenizi nasıl kullanacağınızı açıklamaktan daha fazlasını yapar. Ayrıca, projenizin neden önemli olduğunu ve kullanıcılarınızın bununla neler yapabileceğini de açıklar.

In your README, try to answer the following questions:

- What does this project do?
- Why is this project useful?
- How do I get started?
- Where can I get more help, if I need it?

README'nizi, katkıları nasıl ele aldığınız, projenin amaçlarının ne olduğu ve lisanslar ve atıflar hakkında bilgiler gibi diğer soruları yanıtlamak için kullanabilirsiniz. Katkı kabul etmek istemiyorsanız veya projeniz henüz olgun değilse, bunu mutlaka belirtin.

<aside markdown="1" class="pquote"><img src="https://avatars.githubusercontent.com/tracymakes?s=180" class="pquote-avatar" alt="avatar"> Daha iyi belgeler, daha fazla kullanıcı, daha az destek talebi ve daha fazla katkıda bulunan anlamına gelir. (...) Unutma ki okuyucuların sen değilsin. Tamamen farklı deneyimlerle projeye gelebilecek insanlar var. <p markdown="1" class="pquote-credit"> - @tracymakes, ["Yazdıkların okunuyor (video)" ") (https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10) </p></aside>

Bazen, insanlar bir README yazmaktan kaçınırlar çünkü proje bitmemiş gibi hissederler veya katkı kabul etmek istemezler. Bunların hepsi yazmak için çok iyi nedenler.

For more inspiration, try using @dguo's ["Make a README" guide](https://www.makeareadme.com/) or @PurpleBooth's [README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) to write a complete README.

When you include a README file in the root directory, GitHub will automatically display it on the repository homepage.

### Katkıda bulunma rehberinizi yazmak

Bir CONTRIBUTING dosyası, izleyicilerinize projenize nasıl katkıda bulunabileceklerini söyler. Örneğin, şunlarla ilgili bilgiler de ekleyebilirsiniz:

- Hata raporu nasıl gönderilir ([sorun ve istek şablonlarını](https://github.com/blog/2111-issue-and-pull-request-templates) kullanmayı deneyin)
- How to suggest a new feature
- Proje ortamı nasıl kurulur ve testler nasıl yapılır

In addition to technical details, a CONTRIBUTING file is an opportunity to communicate your expectations for contributions, such as:

- The types of contributions you're looking for
- Your roadmap or vision for the project
- Katkıda bulunanlar sizinle nasıl temasa geçmeli (veya geçmemeli)

Sıcak, arkadaşça bir ton kullanmak ve katkılar için özel önerilerde bulunmak (örneğin, dokümantasyon yazmak veya bir web sitesi yapmak gibi) yeni gelenlerin kendilerini memnun ve heyecanlı hissetmelerini sağlama konusunda yardımcı olabilir.

Örneğin, [Active Admin](https://github.com/activeadmin/activeadmin/) [katkıda bulunan rehberine](https://github.com/activeadmin/activeadmin/blob/master/CONTRIBUTING.md) şu şekilde başlar:

> Öncelikle, Active Admin’e katkıda bulunduğunuz için teşekkür ederiz. Active Admin'i harika bir araç yapan sizin gibi insanlar.

In the earliest stages of your project, your CONTRIBUTING file can be simple. You should always explain how to report bugs or file issues, and any technical requirements (like tests) to make a contribution.

Over time, you might add other frequently asked questions to your CONTRIBUTING file. Writing down this information means fewer people will ask you the same questions over and over again.

CONTRIBUTING dosyanızı yazarken daha fazla yardım için @nayafia'nın [katkıda bulunma rehber şablonuna](https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md) veya @nozilla'nın ["Bir CONTRIBUTING.md Nasıl Oluşturulur"](https://mozillascience.github.io/working-open-workshop/contributing/) bölümüne bakın.

README'nizden CONTRIBUTING dosyanıza bağlantı verin, böylece daha çok insan görsün. [CONTRIBUTING dosyasını projenizin deposuna yerleştirirseniz](https://help.github.com/articles/setting-guidelines-for-repository-contributors/), bir katılımcı bir sorun oluşturduğunda veya bir PR isteği açtığında GitHub otomatik olarak dosyanıza bağlanır.

![Contributing guidelines](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### Davranış kural listesi oluşturmak

<aside markdown="1" class="pquote"><img src="https://avatars.githubusercontent.com/mlynch?s=180" class="pquote-avatar" alt="avatar">Hepimiz, muhtemelen bir şeyin neden belli bir şekilde olması gerektiğini açıklamaya çalışan bir bakıcı olarak ya da bir kullanıcı olarak... basit bir soru sormakla ... ... kötüye kullanılan şeyin yaşadığı deneyimlerimiz oldu. (...) Davranış kuralları, ekibinizin yapıcı söylemleri çok ciddiye aldığını gösteren, kolayca referans verilen ve bağlanabilir bir belge haline gelir. <p markdown="1" class="pquote-credit"> - @mlynch, ["Açık Kaynağı Daha Mutlu Bir Yer Yapma"] (https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f) </p></aside>

Son olarak, bir davranış kural listesi projenizin katılımcı davranışları için temel kurallar koymanıza yardımcı olur. Bir topluluk veya şirket için açık kaynak kodlu bir proje başlatıyorsanız, bu özellikle değerlidir. Davranış kuralları, sağlıklı ve yapıcı topluluk davranışını kolaylaştırmanıza yardımcı olur ve bu da koruyucu olarak stresinizi azaltacaktır.

For more information, check out our [Code of Conduct guide](../code-of-conduct/).

Katılımcıların *nasıl* davranmasını beklediğinizi iletmenin yanı sıra, bir davranış kural listesi de bu beklentilerin kimlere, ne zaman başvuruda bulunduklarına ve bir ihlal meydana geldiğinde ne yapılması gerektiğini açıklamaya meyillidir.

Açık kaynaklı lisanslara benzer şekilde, davranış kuralları için de yeni ortaya çıkan standartlar vardır, bu yüzden kendiniz yazmak zorunda değilsiniz. [Contributor Covenant](https://contributor-covenant.org/) , Kubernet, Rails ve Swift dahil olmak üzere [40.000'den fazla açık kaynaklı proje](https://www.contributor-covenant.org/adopters) tarafından kullanılan bir davranış kural listesi şablonudur. Hangi metni kullanırsanız kullanın, gerektiğinde davranış kurallarınızı uygulamak için hazırlıklı olmalısınız.

Metni doğrudan projenizdeki bir CODE_OF_CONDUCT dosyasına yapıştırın. Dosyayı projenizin kök dizininde tutun, böylece README'nizden kolayca bulabilir ve linkleyebilirsiniz.

## Projenizi isimlendirme ve markalama

Marka, gösterişli bir logo veya çekici bir proje adından daha fazlasıdır. Projeniz hakkında nasıl konuştuğunuzla ve mesajınızla kime ulaştığınızla ilgilidir.

### Choosing the right name

Hatırlanması kolay olan ve ideal olarak projenin ne yaptığı hakkında bir fikir veren bir isim seçin. Örneğin:

- [Sentry](https://github.com/getsentry/sentry) çöküş raporlaması için uygulamaları izler
- [Thin](https://github.com/macournoyer/thin) hızlı ve basit bir Ruby web sunucusudur

Mevcut bir projenin üzerine inşa ediyorsanız, adlarını ön ek olarak kullanmak projenizin ne yaptığını netleştirmeye yardımcı olabilir (örneğin, [node-fetch](https://github.com/bitinn/node-fetch) `window.fetch` komutunu getirir).

Consider clarity above all. Puns are fun, but remember that some jokes might not translate to other cultures or people with different experiences from you. Some of your potential users might be company employees: you don't want to make them uncomfortable when they have to explain your project at work!

### Avoiding name conflicts

Özellikle aynı dili veya ekosistemi paylaşıyorsanız, [benzer bir adla açık kaynaklı projeleri kontrol edin](http://ivantomic.com/projects/ospnc/) . İsminiz popüler bir projeyle örtüşüyorsa, takipçilerinizin kafaları karışabilir.

Bir web sitesi, Twitter hesabı veya projenizi temsil eden diğer özellikleri istiyorsanız, istediğiniz adları aldığınızdan emin olun. İdeal olarak, [bu isimleri](https://instantdomainsearch.com/) henüz kullanmak istemediğiniz zamanlarda bile, rahat etmek için şimdiden alın.

Projenizin adının herhangi bir ticari markayı ihlal etmediğinden emin olun. Bir şirket sizden projenizi kapatmanızı isteyebilir veya hatta aleyhinize yasal işlem başlatabilir. Bu riske değmez.

You can check the [WIPO Global Brand Database](http://www.wipo.int/branddb/en/) for trademark conflicts. If you're at a company, this is one of the things your [legal team can help you with](../legal/).

Finally, do a quick Google search for your project name. Will people be able to easily find your project? Does something else appear in the search results that you wouldn't want them to see?

### Nasıl yazdığın (ve kodladığın) markanı da etkiler!

Projenizin ömrü boyunca birçok yazı yazacaksınız: README'ler, öğretici belgeler, topluluk belgeleri, sorulara cevaplar, belki de haber bültenleri ve posta listeleri.

Resmi bir belge veya geçici bir e-posta olsun, yazma stiliniz projenizin markasının bir parçasıdır. Hedef kitlenize nasıl sesleneceğinizi ve bunun iletmek istediğiniz ton olup olmadığını düşünün.

<aside markdown="1" class="pquote"><img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar"> Posta listesindeki her konuya katılmaya ve örnek davranış göstermeye, insanlara iyi davranmaya, sorunlarını ciddiye almaya ve genel olarak yardımcı olmaya çalışmaya çalıştım. Bir süre sonra, insanlar sadece soru sormakla kalmayıp aynı zamanda yanıtlamada da yardımcı olmak için tarzımı taklit ettiler. <p markdown="1" class="pquote-credit"> - [CouchDB] 'deki @janl (https://github.com/apache/couchdb), ["Sürdürülebilir Açık Kaynak"] (https://writing.jan.io/2015/11/20/sustainable-open-source .html) </p></aside>

Sıcak, kapsayıcı bir dil kullanmak ("onlar" gibi, tek bir kişiye atıfta bulunsanız bile), projenizin yeni katılımcılar için memnuniyetle karşılanmasında yardımcı olabilir. Okuyucularınızın çoğu anadili İngilizce olmayabilir.

Kelimeleri nasıl yazdığınızın ötesinde, kodlama stiliniz de projenizin markasının bir parçası olabilir. [Angular](https://angular.io/guide/styleguide) ve [jQuery](https://contribute.jquery.org/style-guide/js/) titiz kodlama stilleri ve yönergeleri olan projelere iki örnektir.

It isn't necessary to write a style guide for your project when you're just starting out, and you may find that you enjoy incorporating different coding styles into your project anyway. But you should anticipate how your writing and coding style might attract or discourage different types of people. The earliest stages of your project are your opportunity to set the precedent you wish to see.

## Your pre-launch checklist

Projenizi açmaya hazır mısınız? İşte size yardımcı olacak bir kontrol listesi. Bütün kutuları kontrol ettin mi? Gitmeye hazırsın! ["Yayınlayı" tıklayın](https://help.github.com/articles/making-a-private-repository-public/) ve arkanıza yaslanın.

**Belgeler**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">Projenin açık kaynak lisanslı LICENSE dosyası var</label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    Project has basic documentation (README, CONTRIBUTING, CODE_OF_CONDUCT)
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
    The name is easy to remember, gives some idea of what the project does, and does not conflict with an existing project or infringe on trademarks
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">Sorun listesi, açıkça düzenlenmiş ve etiketlenmiş konularla birlikte güncel</label>
</div>

**Kod**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">Proje tutarlı kod kuralları ve temiz işlev/yöntem/değişken adlarını kullanıyor</label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">Kod açıkça yorumlanmış, amaçları ve aykırı vakaları belgelemektedir.</label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">Revizyon geçmişinde, sorunlarda veya PR isteklerinde (örneğin şifreler veya kamuya açık olmayan diğer bilgiler) hassas bilgi yok</label>
</div>

**People**

If you're an individual:

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">Hukuk departmanıyla konuştunuz ve/veya şirketinizin IP ve açık kaynaklı politikalarını anladınız (eğer bir yerde çalışansanız).</label>
</div>

If you're a company or organization:

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    You've talked to your legal department
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    You have a marketing plan for announcing and promoting the project
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    Someone is committed to managing community interactions (responding to issues, reviewing and merging pull requests)
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">En az iki kişinin projeye yönetici erişimi var</label>
</div>

## Başardın!

İlk açık kaynak projenizi yayınladığınız için tebrikler. Sonuç ne olursa olsun, açık kaynak çalışmak topluma bir armağandır. Her katkı, yorum ve PR isteği ile kendiniz ve başkalarının öğrenmesi ve büyümesi için fırsatlar yaratıyorsunuz.
