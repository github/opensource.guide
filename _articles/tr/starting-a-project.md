---
lang: tr
title: Açık Kaynaklı bir Projeye Başlamak
description: Açık kaynak dünyası hakkında daha fazla bilgi edinin ve kendi projenizi başlatmaya hazır olun.
class: beginners
toc:
  the-what-and-why-of-open-source: Açık kaynağın nediri ve nedeni
  should-i-launch-my-own-open-source-project: Kendi açık kaynak projemi başlatmalı mıyım?
  launching-your-own-open-source-project: Kendi açık kaynak projenizi başlatmak
  naming-and-branding-your-project: Projenizi isimlendirme ve markalama
  your-pre-launch-checklist: Lansman öncesi kontrol listeniz
order: 2
image: "/assets/images/cards/beginner.png"
related:
  - finding
  - building
---

## Açık kaynağın "nedir"i ve "neden"i

Yani açık kaynak kodlu bir projeye başlamayı mı düşünüyorsun? Tebrikler! Dünya katkınızı takdir ediyor. Açık kaynağın ne olduğu ve insanların neden yaptıkları hakkında konuşalım.

### "Açık kaynak" ne demek?

Bir proje açık kaynak olduğunda, **herhangi biri herhangi bir amaç için projenizi görüntüleyebilir, kullanabilir, değiştirebilir ve dağıtabilir.** Bu izinler [açık kaynaklı bir lisans](https://opensource.org/licenses) aracılığıyla uygulanmaktadır.

Açık kaynak güçlüdür çünkü fikirlerin hızla yayılmasına izin vererek, benimseme engellerini azaltır.

Nasıl çalıştığını anlamak için, arkadaşınızın herkes yemek getirsin partisi verdiğini hayal edin ve vişneli turta götürmüşsünüz.

* Herkes turta yemek istedi (_kullanma_)
* Turta çok popüler oldu! Sizden tarifi isterler (_görüntüleme_)
* Bir arkadaşın, pasta şefi Alex şekeri azaltmayı önerir (_değiştirme_)
* Başka bir arkadaş, Lisa gelecek hafta bir akşam yemeği için kullanmak istiyor (_dağıtma_)

Buna karşılık, kapalı kaynak işlemi bir restorana gidip bir dilim vişneli turta siparişi vermek gibidir. Pasta yemek için bir ücret ödemeniz gerekir ve restoran muhtemelen size tariflerini vermez. Pastalarını aynen kopyalayıp kendi adınızla satarsanız, restoran size karşı dava açabilir.

### İnsanlar neden işlerini açık kaynak olarak sunarlar?

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kentcdodds?s=180" class="pquote-avatar" alt="avatar">
  Açık kaynak kullanmaktan ve işbirliği yapmaktan kazandığım en değerli deneyimlerden biri, aynı problemlerle karşı karşıya kalan diğer geliştiricilerle kurduğum ilişkilerden geliyor.
  <p markdown="1" class="pquote-credit">
- @kentcdodds, ["Açık Kaynağa Girmek Benim İçin Nasıl Harika Oldu"](https://kentcdodds.com/blog/how-getting-into-open-source-has-been-awesome-for-me)
  </p>
</aside>

Bir kişinin veya örgütün bir projeyi açmak istemesinin [birçok nedeni vardır](https://ben.balter.com/2015/11/23/why-open-source/). Bazı örnekler:

* **İşbirliği:** Açık kaynaklı projeler, dünyadaki herhangi birinden değişiklikleri kabul edebilir. [Exercism](https://github.com/exercism/), örneğin, 350'den fazla katkıda bulunanlarla bir programlama egzersizi platformudur.

* **Adapte etme ve yeniden tanımlama:** Açık kaynaklı projeler herkes tarafından herhangi bir amaç için kullanılabilir. İnsanlar başka şeyler yapmak için bile kullanabilirler. Örneğin [WordPress](https://github.com/WordPress), [b2](https://github.com/WordPress/book/blob/master/Content/Part%201/2-b2-cafelog.md) adı verilen mevcut bir projenin dalı olarak başladı.

* **Şeffaflık:** Açık kaynaklı bir projeyi herkes hata veya tutarsızlık açısından inceleyebilir. Şeffaflık, [Bulgaristan](https://medium.com/@bozhobg/bulgaria-got-a-law-requiring-open-source-98bf626cf70a) veya [ABD](https://sourcecode.cio.gov/) gibi hükümetlerle, bankacılık veya sağlık gibi endüstrileri düzenleyen ve [Let's Encrypt](https://github.com/letsencrypt) gibi güvenlik yazılımları için önemlidir.

Açık kaynak sadece yazılım için değil. Veri setlerinden kitaplara kadar her şeyi açık kaynak olarak sunabilirsiniz. [GitHub'a](https://github.com/explore) göz atın başka nelerin açık kaynak olabileceğini görün.

### Açık kaynak "ücretsiz" anlamına mı geliyor?

Açık kaynağın en büyük çekimlerinden biri paraya mal olmamasıdır. Bununla birlikte, "ücretsiz" olması, açık kaynağın toplam değerinin bir yan ürünüdür.

[Açık kaynaklı bir lisans](https://opensource.org/osd-annotated), herkesin projenizi neredeyse her amaç için kullanmasını, değiştirmesini ve paylaşmasını gerektirdiğinden, projelerin kendileri ücretsiz olma eğilimindedir. Projenin kullanımı paraya mal olursa, herkes yasal olarak bir kopya çıkarabilir ve bunun yerine ücretsiz sürümü kullanabilir.

Sonuç olarak, çoğu açık kaynaklı proje ücretsizdir, ancak "ücretsiz" açık kaynak tanımlamasının bir parçası değildir. Açık kaynaklı projeler için dolaylı olarak ikili lisanslama veya sınırlı özellikler aracılığıyla ücretlendirme yapılmasına rağmen, açık kaynaklı resmi tanımlamaya uymanın yolları vardır.

## Kendi açık kaynak projemi başlatmalı mıyım?

Kısa cevap evet, çünkü sonuç ne olursa olsun, kendi projenizi başlatmak, açık kaynağın nasıl çalıştığını öğrenmek için harika bir yoldur.

Daha önce hiç kaynaklı bir proje açmadıysanız, insanların ne söyleyeceği veya birileri tarafından hiç fark edilip edilmeyeceği konusunda endişeli olabilirsiniz. Sizin ruh haliniz böyle ise, kesinlikle yalnız değilsin!

Açık kaynak eser, ister yazı ister resim olsun, diğer tüm yaratıcı faaliyetler gibidir. Çalışmanızı dünyayla paylaşmak korkutucu gelebilir, ancak daha iyi olmanın tek yolu pratik yapmaktır - izleyiciniz olmasa bile.

Henüz ikna olmadıysanız, hedeflerinizin ne olabileceğini düşünmek için biraz zaman ayırın.

### Hedeflerinizi belirlemek

Hedefler, neyin üzerinde çalışacağınızı, neye hayır diyeceğinizi ve başkalarından yardım almanız gereken yerleri bulmanıza yardımcı olabilir. Kendinize sorarak başlayın, _bu açık kaynak projeyi neden yapıyorum?_

Bu sorunun doğru bir cevabı yok. Tek bir proje için birden fazla hedefiniz veya farklı hedefleri olan farklı projeleriniz olabilir.

Tek amacınız çalışmanızı göstermekse, katkı bile istemeyebilirsiniz ve hatta README'de de söyleyebilirsiniz. Öte yandan, insanların katkıda bulunanmasını istiyorsanız, açık belgelere yatırım yapacak ve yeni gelenlerin kendilerini rahat hissetmelerini sağlayacaksınız.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mavris?s=180" class="pquote-avatar" alt="avatar">
  Bir noktada kullandığım özel bir UIAlertView yarattım ... ve açık kaynak yapmaya karar verdim. Bu yüzden daha dinamik olacak şekilde değiştirdim ve GitHub'a yükledim. Ayrıca diğer geliştiricilere projelerinde nasıl kullanacaklarını açıklayan ilk belgelerimi yazdım. Muhtemelen hiç kimse onu kullanmamıştı çünkü basit bir projeydi ama katkım konusunda kendimi iyi hissediyordum.
  <p markdown="1" class="pquote-credit">
- @mavris, ["Kendi Kendine Öğrenen Yazılım Geliştiricileri: Açık Kaynak Neden Bizim İçin Önemli?"](https://medium.com/rocknnull/self-taught-software-engineers-why-open-source-is-important-to-us-fe2a3473a576)
  </p>
</aside>

Projeniz büyüdükçe, topluluğunuzun yalnızca sizin kodunuzdan daha fazlasına ihtiyacı olabilir. Sorunlara cevap vermek, kodları incelemek ve projenizi geliştirmek, açık kaynaklı bir projedeki önemli görevlerdir.

Kodlama dışı görevler için harcadığınız zaman miktarı projenizin boyutuna ve kapsamına bağlı olsa da, bunları kendiniz yapmak veya size yardımcı olacak birini bulmak için bir sorumlu olarak hazırlanmalısınız.

**Bir projeye açık kaynak veren bir şirketin bir parçasıysanız, projenizin** gelişmesi gereken dahili kaynaklara sahip olduğundan emin olun. Projeyi başlattıktan sonra korumaktan kimin sorumlu olduğunu ve bu görevleri topluluğunuzla nasıl paylaşacağınızı belirlemek isteyeceksiniz.

Terfi, işlemler ve projenin sürdürülmesi için özel bir bütçeye veya personele ihtiyaç duyuyorsanız, bu konuşmaları erkenden başlatın.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/captainsafia?s=180" class="pquote-avatar" alt="avatar">
  Projeyi açmaya başladığınızda, yönetim süreçlerinizin projenizdeki topluluğun katkılarını ve yeteneklerini göz önünde bulundurmasını sağlamak önemlidir. İşletmenizde istihdam edilmeyen katılımcıları, projenin kilit noktalarına dahil etmekten korkmayın - özellikle de sık sık katkıda bulunanlarsa.
  <p markdown="1" class="pquote-credit">
- @captainsafia, ["Öyleyse bir açık kaynak proje açmak istiyorsun, ha?"](Https://dev.to/captainsafia/so-you-wanna-open-source-a-project-eh-5779)
  </p>
</aside>

### Diğer projelere katkıda bulunmak

Amacınız başkalarıyla nasıl işbirliği yapabileceğinizi veya açık kaynağın nasıl çalıştığını anlamaksa, mevcut bir projeye katkıda bulunmayı düşünün. Zaten kullandığınız ve sevdiğiniz bir projeyle başlayın. Bir projeye katkıda bulunmak, yazım hatalarını düzeltmek veya belgeleri güncellemek kadar kolay olabilir.

Katkıda bulunmaya nasıl başlayacağınızdan emin değilseniz, [Açık Kaynağa Nasıl Katkıda Bulunur kılavuzumuza bakın](../how-to-contribute/).

## Kendi açık kaynak projenizi başlatmak

Projenizi başlatmak için mükemmel bir zaman yoktur. Bir fikri, ya da yıllarca kapalı kaldıktan sonra eski bir çalışmayı açabilirsiniz.

Genel olarak konuşursak, başkalarının çalışmalarını görmesi ve çalışmalarınız hakkında geri bildirim vermesi konusunda kendinizi rahat hissettiğinizde açık kaynak projenizi yayınlamalısınız.

Projenizi hangi aşamada yayınlamaya karar verirseniz verin, her proje aşağıdaki belgeleri içermelidir:

* [Açık kaynak lisansı](https://help.github.com/articles/open-source-licensing/#where-does-the-license-live-on-my-repository)
* [README](https://help.github.com/articles/create-a-repo/#commit-your-first-change)
* [Katkıda bulunma kuralları](https://help.github.com/articles/setting-guidelines-for-repository-contributors/)
* [Davranış kuralları](../code-of-conduct/)

Bir geliştirici olarak, bu bileşenler beklentileri iletmenize, katkıları yönetmenize ve herkesin yasal haklarını (kendi haklarınız dahil) korumanıza yardımcı olur. Olumlu bir deneyim yaşama şansınızı önemli ölçüde artırırlar.

Projeniz GitHub'taysa, bu dosyaları önerilen dosya adlarıyla kök dizininize koymak GitHub'ın onları okuyucularınıza tanıtmasına ve otomatik olarak göstermesine yardımcı olacaktır.

### Bir lisans seçimi

Açık kaynaklı lisans, başkalarının projenize yanıt vermeden kullanabileceğini, kopyalayabileceğini, değiştirebileceğini ve katkıda bulunabileceğini garanti eder. Aynı zamanda sizi kötü yasal durumlardan korur. **Açık kaynak kodlu bir proje başlatırken projenize bir lisans eklemelisiniz.**

Hukiki işler eğlenceli değildir. İyi haber şu ki, mevcut bir lisansı kopyalayıp havuzunuza yapıştırabilirsiniz. Zor işinizi korumak sadece bir dakikanızı alacaktır.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) ve [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) en popüler açık kaynaklı lisanslardır, ancak seçilebilecek [başka seçenekler](https://choosealicense.com) de vardır.

GitHub'da yeni bir proje oluşturduğunuzda, size bir lisans seçme seçeneği sunulur. Açık kaynak lisansı eklemek GitHub projenizi açık kaynak yapar.

![Pick a license](/assets/images/starting-a-project/repository-license-picker.png)

Eğer bir açık kaynak projesi yönetmek hukuki yönleri etrafında diğer sorularınız veya endişeleriniz varsa, [sizin ihtiyaçlarınızı giderebilecek içeriğimiz var](../legal/) .

### README Yazma

README'ler projenizi nasıl kullanacağınızı açıklamaktan daha fazlasını yapar. Ayrıca, projenizin neden önemli olduğunu ve kullanıcılarınızın bununla neler yapabileceğini de açıklar.

README'nizde aşağıdaki soruları cevaplamaya çalışın:

* Bu proje ne yapıyor?
* Bu proje neden faydalıdır?
* Kullanmaya naıl başlarım?
* İhtiyacım olursa nereden daha fazla yardım alabilirim?

README'nizi, katkıları nasıl ele aldığınız, projenin amaçlarının ne olduğu ve lisanslar ve atıflar hakkında bilgiler gibi diğer soruları yanıtlamak için kullanabilirsiniz. Katkı kabul etmek istemiyorsanız veya projeniz henüz olgun değilse, bunu mutlaka belirtin.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/tracymakes?s=180" class="pquote-avatar" alt="avatar">
  Daha iyi belgeler, daha fazla kullanıcı, daha az destek talebi ve daha fazla katkıda bulunan anlamına gelir. (...) Unutma ki okuyucuların sen değilsin. Tamamen farklı deneyimlerle projeye gelebilecek insanlar var.
  <p markdown="1" class="pquote-credit">
- @tracymakes, ["Yazdıkların okunuyor (video)")(https://www.youtube.com/watch?v=8LiV759Bje0&list=PLmV2D6sIiX3U03qc-FPXgLFGFkccCEtfv&index=10)
  </p>
</aside>

Bazen, insanlar bir README yazmaktan kaçınırlar çünkü proje bitmemiş gibi hissederler veya katkı kabul etmek istemezler. Bunların hepsi yazmak için çok iyi nedenler.

Daha fazla ilham almak için, eksiksiz bir README yazmak için @dguo'nun ["Make a README" kılavuzunu](https://www.makeareadme.com/) veya @PurpleBooth'ın [README şablonunu](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) kullanmayı deneyin.

Kök dizinine bir README dosyası eklediğinizde, GitHub otomatik olarak depo ana sayfasında görüntüler.

### Katkıda bulunma rehberinizi yazmak

Bir CONTRIBUTING dosyası, izleyicilerinize projenize nasıl katkıda bulunabileceklerini söyler. Örneğin, şunlarla ilgili bilgiler de ekleyebilirsiniz:

* Hata raporu nasıl gönderilir ([sorun ve istek şablonlarını](https://github.com/blog/2111-issue-and-pull-request-templates) kullanmayı deneyin)
* Yeni bir özellik nasıl önerilir
* Proje ortamı nasıl kurulur ve testler nasıl yapılır

Teknik ayrıntılara ek olarak, bir CONTRIBUTING dosyası, aşağıdakiler gibi katkılar için beklentilerinizi iletme fırsatıdır:

* Aradığınız katkı türleri
* Proje için yol haritanız veya vizyonunuz
* Katkıda bulunanlar sizinle nasıl temasa geçmeli (veya geçmemeli)

Sıcak, arkadaşça bir ton kullanmak ve katkılar için özel önerilerde bulunmak (örneğin, dokümantasyon yazmak veya bir web sitesi yapmak gibi) yeni gelenlerin kendilerini memnun ve istekli hissetmelerini sağlama konusunda yardımcı olabilir.

Örneğin, [Active Admin](https://github.com/activeadmin/activeadmin/) [katkıda bulunan rehberine](https://github.com/activeadmin/activeadmin/blob/master/CONTRIBUTING.md) şu şekilde başlar:

> Öncelikle, Active Admin’e katkıda bulunduğunuz için teşekkür ederiz. Active Admin'i harika bir araç yapan sizin gibi insanlar.

Projenizin ilk aşamalarında, CONTRIBUTING dosyanız basit olabilir. Hataların veya dosya sorunlarının nasıl bildirileceğini ve katkı sağlamak için teknik gereksinimleri (testler gibi) her zaman açıklamalısınız.

Zamanla, CONTRIBUTING dosyanıza sıkça sorulan diğer soruları ekleyebilirsiniz. Bu bilgileri yazmak, daha az kişinin size aynı soruları tekrar soracağı anlamına gelir.

CONTRIBUTING dosyanızı yazarken daha fazla yardım için @nayafia'nın [katkıda bulunma rehber şablonuna](https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md) veya @mozilla'nın ["Bir CONTRIBUTING.md Nasıl Oluşturulur"](https://mozillascience.github.io/working-open-workshop/contributing/) makalesine bakabilirsiniz.

README'nizden CONTRIBUTING dosyanıza bağlantı verin, böylece daha çok insan görsün. [CONTRIBUTING dosyasını projenizin deposuna yerleştirirseniz](https://help.github.com/articles/setting-guidelines-for-repository-contributors/), bir katılımcı bir sorun oluşturduğunda veya bir PR açtığında GitHub otomatik olarak dosyanıza bağlanır.

![Contributing guidelines](/assets/images/starting-a-project/Contributing-guidelines.jpg)

### Davranış kural listesi oluşturmak

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mlynch?s=180" class="pquote-avatar" alt="avatar">
  Hepimiz, muhtemelen bir şeyin neden belli bir şekilde olması gerektiğini açıklamaya çalışan bir geliştirici olarak ya da bir kullanıcı olarak... basit bir soru sormakla ... ... kötüye kullanılan şeyin yaşadığı deneyimlerimiz oldu. (...) Davranış kuralları, ekibinizin yapıcı söylemleri çok ciddiye aldığını gösteren, kolayca referans verilen ve bağlanabilir bir belge haline gelir.
  <p markdown="1" class="pquote-credit">
- @mlynch, ["Açık Kaynağı Daha Mutlu Bir Yer Yapma"](https://medium.com/ionic-and-the-mobile-web/making-open-source-a-happier-place-3b90d254f5f)
  </p>
</aside>

Son olarak, bir davranış kural listesi projenizin katılımcı davranışları için temel kurallar koymanıza yardımcı olur. Bir topluluk veya şirket için açık kaynak kodlu bir proje başlatıyorsanız, bu özellikle değerlidir. Davranış kuralları, sağlıklı ve yapıcı topluluk davranışını kolaylaştırmanıza yardımcı olur ve bu da geliştirici olarak stresinizi azaltacaktır.

Daha fazla bilgi için [Davranış Kuralları kılavuzumuza](../code-of-conduct/) göz atın.

Katılımcıların _nasıl_ davranmasını beklediğinizi iletmenin yanı sıra, bir davranış kural listesi de bu beklentilerin kimlere, ne zaman başvuruda bulunduklarına ve bir ihlal meydana geldiğinde ne yapılması gerektiğini açıklamaya meyillidir.

Açık kaynaklı lisanslara benzer şekilde, davranış kuralları için de yeni ortaya çıkan standartlar vardır, bu yüzden kendiniz yazmak zorunda değilsiniz. [Contributor Covenant](https://contributor-covenant.org/), Kubernet, Rails ve Swift dahil olmak üzere [40.000'den fazla açık kaynaklı proje](https://www.contributor-covenant.org/adopters) tarafından kullanılan bir davranış kural listesi şablonudur. Hangi metni kullanırsanız kullanın, gerektiğinde davranış kurallarınızı uygulamak için hazırlıklı olmalısınız.

Metni doğrudan projenizdeki bir CODE_OF_CONDUCT dosyasına yapıştırın. Dosyayı projenizin kök dizininde tutun, böylece README'nizden kolayca bulabilir ve linkleyebilirsiniz.

## Projenizi isimlendirme ve markalama

Marka, gösterişli bir logo veya çekici bir proje adından daha fazlasıdır. Projeniz hakkında nasıl konuştuğunuzla ve mesajınızla kime ulaştığınızla ilgilidir.

### Doğru ismi seçmek

Hatırlanması kolay olan ve ideal olarak projenin ne yaptığı hakkında bir fikir veren bir isim seçin. Örneğin:

* [Sentry](https://github.com/getsentry/sentry) çöküş raporlaması için uygulamaları izler
* [Thin](https://github.com/macournoyer/thin) hızlı ve basit bir Ruby web sunucusudur

Mevcut bir projenin üzerine inşa ediyorsanız, adlarını ön ek olarak kullanmak projenizin ne yaptığını netleştirmeye yardımcı olabilir (örneğin, [node-fetch](https://github.com/bitinn/node-fetch) `window.fetch` komutunu getirir).

Her şeyden önce netlik düşünün. Püf noktaları eğlencelidir, ancak bazı şakaların diğer kültürlere veya sizden farklı deneyimlere sahip insanlara tercüme edilemeyebileceğini unutmayın. Potansiyel kullanıcılarınızdan bazıları şirket çalışanları olabilir: projenizi işte açıklamak zorunda kaldıklarında onları rahatsız etmek istemezsiniz!

### İsim çatışmalarından kaçınmak

Özellikle aynı dili veya ekosistemi paylaşıyorsanız, [benzer bir adla açık kaynaklı projeleri kontrol edin](http://ivantomic.com/projects/ospnc/). İsminiz popüler bir projeyle örtüşüyorsa, takipçilerinizin kafaları karışabilir.

Bir web sitesi, Twitter hesabı veya projenizi temsil eden diğer özellikleri istiyorsanız, istediğiniz adları aldığınızdan emin olun. İdeal olarak, [bu isimleri](https://instantdomainsearch.com/) henüz kullanmak istemediğiniz zamanlarda bile, rahat etmek için şimdiden alın.

Projenizin adının herhangi bir ticari markayı ihlal etmediğinden emin olun. Bir şirket sizden projenizi kapatmanızı isteyebilir veya hatta aleyhinize yasal işlem başlatabilir. Bu riske değmez.

[WIPO Global Marka Veritabanını](http://www.wipo.int/branddb/en/) ticari marka çakışmaları için kontrol edebilirsiniz. Eğer bir şirketteyseniz, bu [hukuk ekibinizin size yardımcı olabileceği](../legal/) şeylerden biridir.

Sonunda, proje adınız için hızlı bir Google araması yapın. İnsanlar projenizi kolayca bulabilecek mi? Arama sonuçlarında görmelerini istemediğiniz başka bir şey var mı?

### Nasıl yazdığın (ve kodladığın) markanı da etkiler!

Projenizin ömrü boyunca birçok yazı yazacaksınız: README'ler, öğretici belgeler, topluluk belgeleri, sorulara cevaplar, belki de haber bültenleri ve posta listeleri.

Resmi bir belge veya geçici bir e-posta olsun, yazma stiliniz projenizin markasının bir parçasıdır. Hedef kitlenize nasıl sesleneceğinizi ve bunun iletmek istediğiniz ton olup olmadığını düşünün.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  Posta listesindeki her konuya katılmaya ve örnek davranış göstermeye, insanlara iyi davranmaya, sorunlarını ciddiye almaya ve genel olarak yardımcı olmaya çalıştım. Bir süre sonra, insanlar sadece soru sormakla kalmayıp aynı zamanda yanıtlamada da yardımcı olmak için tarzımı taklit ettiler.
  <p markdown="1" class="pquote-credit">
- [CouchDB](https://github.com/apache/couchdb)'deki @janl, ["Sürdürülebilir Açık Kaynak"](https://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

Sıcak, kapsayıcı bir dil kullanmak ("onlar" gibi, tek bir kişiye atıfta bulunsanız bile), projenizin yeni katılımcılar için memnuniyetle karşılanmasında yardımcı olabilir. Okuyucularınızın çoğu anadili İngilizce olmayabilir.

Kelimeleri nasıl yazdığınızın ötesinde, kodlama stiliniz de projenizin markasının bir parçası olabilir. [Angular](https://angular.io/guide/styleguide) ve [jQuery](https://contribute.jquery.org/style-guide/js/) titiz kodlama stilleri ve yönergeleri olan projelere iki örnektir.

Yeni başladığınızda, projeniz için bir stil rehberi yazmak gerekli değildir ve yine de projenize farklı kodlama stilleri eklemekten zevk aldığınızı fark edebilirsiniz. Ancak, yazma ve kodlama stilinizin farklı insanları nasıl çekebileceğini veya caydıracağını tahmin etmelisiniz. Projenizin ilk aşamaları, görmek istediğiniz emsali belirleme fırsatınızdır.

## Lansman öncesi kontrol listeniz

Projenizi açmaya hazır mısınız? İşte size yardımcı olacak bir kontrol listesi. Bütün kutuları kontrol ettin mi? Gitmeye hazırsın! ["Yayınlayı" tıklayın](https://help.github.com/articles/making-a-private-repository-public/) ve arkanıza yaslanın.

**Belgeler**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox1" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox1" class="overflow-hidden d-block text-normal">
    Projenin açık kaynak lisanslı LICENSE dosyası var
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox2" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox2" class="overflow-hidden d-block text-normal">
    Proje temel dokümantasyona sahiptir (README, CONTRIBUTING, CODE_OF_CONDUCT)
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox3" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox3" class="overflow-hidden d-block text-normal">
    Adı hatırlamak kolaydır, projenin ne yaptığı hakkında bir fikir verir ve mevcut bir projeyle çelişmez veya ticari markaları ihlal etmez
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox4" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox4" class="overflow-hidden d-block text-normal">
    Sorun listesi, açıkça düzenlenmiş ve etiketlenmiş konularla birlikte güncel
  </label>
</div>

**Kod**

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox5" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox5" class="overflow-hidden d-block text-normal">
    Proje tutarlı kod kuralları ve temiz işlev/yöntem/değişken adlarını kullanıyor
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox6" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox6" class="overflow-hidden d-block text-normal">
    Kod açıkça yorumlanmış, amaçları ve aykırı vakaları belgelemektedir.
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox7" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox7" class="overflow-hidden d-block text-normal">
    Revizyon geçmişinde, sorunlarda veya PR isteklerinde (örneğin şifreler veya kamuya açık olmayan diğer bilgiler) hassas bilgi yok
  </label>
</div>

**İnsanlar**

Bireyseniz:

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox8" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox8" class="overflow-hidden d-block text-normal">
    Hukuk departmanıyla konuştunuz ve/veya şirketinizin IP ve açık kaynaklı politikalarını anladınız (eğer bir yerde çalışansanız).
  </label>
</div>

Bir şirket veya kuruluşsanız:

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox9" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox9" class="overflow-hidden d-block text-normal">
    Hukuk departmanınızla konuştunuz
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox10" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox10" class="overflow-hidden d-block text-normal">
    Projeyi duyurmak ve tanıtmak için bir pazarlama planınız var
  </label>
</div>

<div class="clearfix mb-2">
  <input type="checkbox" id="cbox11" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox11" class="overflow-hidden d-block text-normal">
    Birisi topluluk etkileşimlerini yönetmeyi taahhüt eder (sorunlara cevap verme, çekme isteklerini gözden geçirme ve birleştirme)
  </label>
</div>

<div class="clearfix mb-4">
  <input type="checkbox" id="cbox12" class="d-block float-left mt-1 mr-2" value="checkbox">
  <label for="cbox12" class="overflow-hidden d-block text-normal">
    En az iki kişinin projeye yönetici erişimi var
  </label>
</div>

## Başardın!

İlk açık kaynak projenizi yayınladığınız için tebrikler. Sonuç ne olursa olsun, açık kaynak çalışmak topluma bir armağandır. Her katkı, yorum ve PR ile kendiniz ve başkalarının öğrenmesi ve büyümesi için fırsatlar yaratıyorsunuz.
