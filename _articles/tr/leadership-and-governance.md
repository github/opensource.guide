---
lang: tr
title: Liderlik ve Yönetim
description: Büyüyen açık kaynak projeleri, karar almak için resmi kurallardan yararlanabilir.
class: leadership
order: 6
image: "/assets/images/cards/leadership.png"
related:
  - best-practices
  - metrics
---

## Büyüyen projeniz için yönetimi anlama

Projeniz büyüyor, insanlar dahil olmaya başladı ve siz bu şeyi sürdürmeye kararlısınız. Bu aşamada, düzenli proje katılımcılarını iş akışınıza nasıl dahil edeceğinizi, örneğin birine giriş izni verilmesini veya topluluk tartışmalarını nasıl çözüleceğini merak ediyor olabilirsiniz. Sorularınız varsa, cevaplarımız da var.

## Açık kaynak projelerde kullanılan resmi rol türleri nelerdir?

Birçok proje katılımcı rolleri ve tanınması için ortak benzer bir yapı izler.

Bu rollerin aslında ne anlama geldiği tamamen size kalmış bir şey. İşte size de tanıdık gelebilecek rollerin birkaçı:

* **Sorumlu (maintainer)**
* **Katkıda bulunan (contributor)**
* **Ekip üyesi**

**Bazı projeler için, "sorumlular"** projeye giriş hakkı olan projedeki tek kişilerdir. Diğer projelerde, onlar sadece README'de listelenen insanlardır.

Bir sorumlunun projeniz için kod yazan biri olması gerekmez. Projenizi değiştirmek için çok fazla iş yapan veya projeyi başkalarına daha erişilebilir kılan yazılı belgeler olabilir. Günlük olarak ne yaptıklarından bağımsız olarak, bir sorumlu muhtemelen proje yönünden sorumluluk duyan ve geliştirmeye kendini adamış bir kişidir.

**"Katkıda bulunan"**, bir sorun veya PR hakkında yorum yapan, projeye değer katan insanlar (sorunları birleştiren, kod yazan veya etkinlik düzenleyen) veya birleştirilmiş PR'si olan herkes (belki de en dar tanımı katkıda bulunan) olabilir.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  \[Node.js için\] bir sorun hakkında yorum yapan veya kod gönderen herkes proje topluluğunun bir üyesidir. Onları görebilmek, bir kullanıcı olmaktan katkıda bulunmaya kadar çizgiyi aştıkları anlamına geliyor.
  <p markdown="1" class="pquote-credit">
- @mikeal, ["Sağlıklı Açık Kaynak"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**"committer" terimi** , belirli bir sorumluluk türü olan commit erişimini diğer katkı şekillerinden ayırmak için kullanılabilir.

Proje rollerinizi dilediğiniz şekilde tanımlayabilmenize rağmen, daha fazla katkı biçimi geliştirmek için [daha geniş tanımları kullanmayı düşünün](../how-to-contribute/#katkıda-bulunmak-ne-demektir). Teknik becerilerinden bağımsız olarak, projenize olağanüstü katkı sağlayan kişileri resmen tanımak için liderlik rollerini kullanabilirsiniz.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  Beni Django'nun mucidi olarak tanıyor olabilirsiniz ... ama gerçekten bir yıl sonra bir şey üzerinde çalışmak üzere işe alınan adamım. (...) İnsanlar programlama becerim yüzünden başarılı olduğumdan şüpheleniyorlar ... ama en iyi ihtimalle ortalama bir programcıyım.
  <p markdown="1" class="pquote-credit">
- @jacobian, ["PyCon 2015 Keynote" (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## Bu liderlik rollerini nasıl resmileştiririm?

Liderlik rollerini resmileştirmek, insanların sahipliğini hissetmesine yardımcı olur ve diğer topluluk üyelerine kimden yardım isteyenleri söyler.

Daha küçük bir proje için, lider seçmek isimlerini README veya bir CONTRIBUTORS metin dosyasına eklemek kadar basit olabilir.

Daha büyük bir proje için, bir web siteniz varsa, bir ekip sayfası oluşturun veya proje liderlerinizi burada listeleyin. Örneğin, [Postgres](https://github.com/postgres/postgres/) , her katılımcı için kısa profillerden oluşan [kapsamlı bir ekip sayfasına](https://www.postgresql.org/community/contributors/) sahiptir.

Projeniz çok aktif bir katılımcı topluluğa sahipse, farklı konu alanlarına (örneğin, güvenlik, sorun izleme veya topluluk davranışı) sahip olan kişilerden oluşan bir "çekirdek ekip" veya hatta alt grup komiteleri oluşturabilirsiniz. Rolleri sizin atamanız yerine, insanların en çok heyecanlandıkları roller için kendi kendilerini organize ve gönüllü olmalarına fırsat verin.

<aside markdown="1" class="pquote">
  \[Biz\] çekirdek takıma birkaç "alt takım" ekliyoruz. Her alt takım belirli bir alana, örneğin dil tasarımına veya kütüphanelere odaklanır. (...) Küresel koordinasyon ve bir bütün olarak proje için güçlü, tutarlı bir vizyon sağlamak için her bir alt ekip, çekirdek ekibin bir üyesi tarafından yönetilir.
  <p markdown="1" class="pquote-credit">
- ["Rust Yönetişim RFC"](https://github.com/rust-lang/rfcs/blob/HEAD/text/1068-rust-governance.md)
  </p>
</aside>

Liderlik ekipleri projeyi tartışmak için (Gitter veya Google Hangout'ta olduğu gibi) belirlenmiş bir kanal oluşturmak (IRC'deki gibi) veya düzenli olarak buluşmak isteyebilir. Hatta başkalarının dinleyebilmesi için bu toplantıları halka açabilirsiniz. Örneğin [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby) [her hafta çalışma saatlerinde yayın yapar](https://github.com/cucumber/cucumber-ruby/blob/HEAD/CONTRIBUTING.md#talking-with-other-devs) .

Liderlik rolleri belirledikten sonra, insanların onlara nasıl ulaşabileceğini belgelemeyi unutmayın! Projenizde birisinin nasıl sorumlu olabileceği ya da bir alt komiteye katılabileceği konusunda net bir süreç belirleyin ve bunu GOVERNANCE.md'inize yazın.

[Vossibility](https://github.com/icecrime/vossibility-stack) gibi araçlar, projeye kimin katkı sağladığını (ya da yapmadığını) izlemenize yardımcı olabilir. Bu bilginin belgelenmesi, topluluk sahiplerinin, kararlarını özel olarak veren bir klik olduğuna inanmalarını engeller.

Son olarak, projeniz GitHub'daysa, projenizi kişisel hesabınızdan bir organizasyon hesabına taşımayı ve en az bir yedek yönetici eklemeyi düşünün. [GitHub Organizasyonları](https://help.github.com/articles/creating-a-new-organization-account/) izinleri ve çoklu depoları yönetmeyi kolaylaştırır ve projenizin mirasını [ortak mülkiyet](../building-community/#projenizi-paylaşın) yoluyla korur.

## Ne zaman birine commit izni vermeliyim?

Bazı insanlar katkıda bulunan herkese commit yetkisi vermeniz gerektiğini düşünür. Bunu yapmak, daha fazla kişiyi projenizin sahipliğini hissetmeye teşvik edebilir.

Öte yandan, özellikle daha büyük, daha karmaşık projeler için, yalnızca kendilerini kanıtlayan kişilere commit hakkı vermek isteyebilirsiniz. Bunu yapmanın doğru bir yolu yok - sizi en rahat ettiren şeyi yapın!

Projeniz GitHub'daysa, belirli bir dala kimin ve hangi şartlar altında kod gönderebileceğini yönetmek için [korumalı dalları](https://help.github.com/articles/about-protected-branches/) kullanabilirsiniz.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">
  Birisi size bir PR gönderdiğinde, projenize erişmelerini sağlayın. İlk başta inanılmaz derecede aptalca görünse de, bu stratejiyi kullanmak GitHub’ın gerçek gücünü ortaya çıkarmanıza izin verecektir. (...) İnsanlar bir kez giriş yaptıklarında, yamalarının bozulmadan kalmasından endişe etmiyorlar ... ... daha çok çalışmalarına neden oluyor.
  <p markdown="1" class="pquote-credit">
- @felixge, ["The Pull Request Hack"](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## Açık kaynaklı projeler için ortak yönetim yapılarının bazıları nelerdir?

Açık kaynak projeleriyle ilgili üç ortak yönetim yapısı vardır.

* **BDFL:** BDFL (Benevolent Dictator for Life) "Yaşam için Yardımcı Diktatör" anlamına gelir. Bu yapı altında, bir kişinin (genellikle projenin ilk yazarı) tüm büyük proje kararları hakkında kesin sözleri vardır. [Python](https://github.com/python) klasik bir örnektir. Daha küçük projeler muhtemelen varsayılan olarak BDFL'dir, çünkü yalnızca bir veya iki koruyucu vardır. Bir şirketten kaynaklanan bir proje de BDFL kategorisine girebilir.

* **Meritokrasi:** **(Not: "meritokrasi" terimi, bazı topluluklar için olumsuz çağrışımlar taşır ve özellikle [karmaşık bir sosyal ve politik tarihe sahip](http://geekfeminism.wikia.com/wiki/Meritocracy) ülkelerde.)** Bir meritokrasi kapsamında, aktif proje katılımcılarına ("sahiplik" gösterenler) resmi bir karar verme rolü verilir. Kararlar genellikle saf oy birliği ile yapılır. Meritokrasi kavramı [Apache Vakfı](https://www.apache.org/) tarafından öncülük edildi; [tüm Apache projeleri](https://www.apache.org/index.html#projects-list) meritokrasilerdir. Katkılar, bir şirketi değil, yalnızca kendilerini temsil eden kişiler tarafından yapılabilir.

* **Liberal katkı:** Liberal katkı modelinde, en çok işi yapan insanlar en etkili olarak kabul edilir, ancak bu mevcut çalışmalara dayanmaktadır ve tarihi katkılara dayanmamaktadır. Büyük proje kararları, saf oylama yerine oybirliği arayışı sürecine (büyük şikayetleri tartışmak) temel almakta ve mümkün olduğunca çok toplum perspektifini dahil etmeye çalışmaktadır. Liberal bir katkı modeli kullanan popüler proje örnekleri arasında [Node.js](https://foundation.nodejs.org/) ve [Rust](https://www.rust-lang.org/) bulunur.

Hangisini kullanmalısın? Sana kalmış! Her modelin avantajları ve dezavantajları vardır. İlk başta oldukça farklı görünseler de, üç modelin de göründüğünden daha çok ortak noktaları vardır. Bu modellerden birini benimsemekle ilgileniyorsanız, şu şablonları inceleyin:

* [BDFL model şablonu](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [Meritokrasi modeli şablonu](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js'in liberal katkı politikası](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## Projemi başlattığımda yönetim belgelerine ihtiyacım var mı?

Projenizin yönetimini şekillendirmek için doğru zaman yok, ancak topluluk dinamiklerini belirlendikten sonra tanımlamak çok daha kolay. Açık kaynak yönetimi ile ilgili en iyi (ve en zor) kısım, toplum tarafından şekillendirilmesidir!

Bununla birlikte, bazı erken hazırlanmış belgeler kaçınılmaz olarak projenizin yönetimine katkıda bulunacaktır, bu yüzden ne yapabileceğinizi yazmaya başlayın. Örneğin, projenizin başlangıcında bile davranışa ilişkin net beklentileri veya katkıda bulunan sürecin nasıl çalıştığını tanımlayabilirsiniz.

Açık kaynak kodlu bir projeyi başlatmakta olan bir şirketin bir parçasıysanız, şirketinizin projeyi sürdürmek ve ilerletmek için nasıl bir karar vereceğini önceden içerde tartışmaya açmaya değer. Ayrıca, şirketinizin projeye nasıl dahil olacağına (veya olmayacağına) açık bir şekilde açıklamak isteyebilirsiniz.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  GitHub'ta aslında Facebook'ta çalışan projeleri yönetmek için küçük takımlar atadık. Örneğin, React bir React mühendisi tarafından yönetilir.
  <p markdown="1" class="pquote-credit">
- @caabernathy, ["Facebook'ta açık kaynağa içeriden bir bakış"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## Şirket çalışanları katkı göndermeye başlarsa ne olur?

Başarılı açık kaynak projeler birçok kişi ve şirket tarafından kullanılmakta ve bazı şirketler nihayetinde projeye bağlı olarak gelir akışlarına neden olabilmektedir. Örneğin, bir şirket, bir ticari hizmet teklifinde projenin kodunu bir bileşen olarak kullanabilir.

Proje yaygınlaştıkça, konusunda uzmanlığı olan kişilerden daha fazla rağbet görür - onlardan biri siz de olabilirsiniz! - ve bazen projede yaptıkları iş için para da alıyor olabilirler.

Ticari faaliyeti normal kabul edip ve başka bir gelişim enerjisi kaynağı olarak ele almak önemlidir. Ücretli geliştiriciler elbette ücretsiz olanlardan farklı muamele görmemelidir. Her katkı, teknik esasına göre değerlendirilmelidir. Bununla birlikte, insanlar ticari faaliyetlerde bulunmak için kendilerini rahat hissetmeli ve belirli bir geliştirme veya özellik lehine tartışırken kullanım durumlarını belirtmekte kendilerini rahat hissetmelidirler.

"Ticari", "açık kaynak" ile tamamen uyumludur. "Ticari" sadece bir yerde para olduğu anlamına gelir - yazılımın bir projenin benimsenmesi arttıkça artan bir şekilde ticarette kullanıldığı anlamına gelir. (Açık kaynak yazılım, açık kaynak olmayan bir ürünün parçası olarak kullanıldığında, genel ürün hala "tescilli" bir yazılımdır, ancak açık kaynak gibi ticari veya ticari olmayan amaçlar için de kullanılabilir.)

Diğer herkes gibi, ticari olarak motive edilmiş geliştiriciler, katkılarının niteliği ve niceliği ile projede etki kazanabilirler. Açıkçası, zamanı için ödeme yapan bir geliştirici, ödeme almayan birinden daha fazlasını yapabilir, ancak sorun değil: ödeme, birisinin yapabileceklerini etkileyebilecek olası birçok faktörden yalnızca biridir. Proje tartışmalarınızda, insanların bu katkıları yapmalarını sağlayan dış etkenlere değil, katkılara odaklanmaya devam edin.

## Projemi desteklemek için tüzel kişiliğe ihtiyacım var mı?

Parayla çalışmadığınız sürece açık kaynak projenizi desteklemek için tüzel kişiliğe ihtiyacınız yoktur.

Örneğin, ticari bir işletme oluşturmak istiyorsanız, bir C Corp veya LLC kurmak istersiniz (ABD merkezli iseniz). Açık kaynak projenizle ilgili sadece sözleşmeli iş yapıyorsanız, parayı tek mal sahibi olarak kabul edebilir veya bir LLC (ABD merkezli iseniz) kurabilirsiniz.

Açık kaynak projeniz için bağış kabul etmek istiyorsanız, bağış butonu ayarlayabilirsiniz (örneğin, PayPal veya Stripe kullanarak), ancak uygun olmayan bir kar amacı gütmediğiniz sürece para vergiden düşülmez (eğer bir 501c3, ABD'desiniz).

Birçok proje kar amacı gütmeyen bir kuruluş kurma zorunluluğunu yaşamak istememektedir, bu yüzden kar amacı gütmeyen bir mali sponsor bulmaktadırlar. Mali bir sponsor, genellikle bağışın bir yüzdesi karşılığında, sizin adınıza bağışları kabul eder. [Yazılım Özgürlüğü Koruması](https://sfconservancy.org/), [Apache Vakfı](https://www.apache.org/), [Eclipse Vakfı](https://eclipse.org/org/foundation/), [Linux Vakfı](https://www.linuxfoundation.org/projects) ve [Açık Kollektifi](https://opencollective.com/opensource) açık kaynak projeleri için mali sponsor olarak hizmet veren kuruluşlara örnektir.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  Amacımız, toplulukların kendi kendine sürdürülebilir olmaları için kullanabilecekleri bir altyapı sağlamak, böylece herkesin - katkıda bulunanların, destekçilerin, sponsorların - bundan somut faydalar elde ettiği bir ortam yaratmaktır.
  <p markdown="1" class="pquote-credit">
- @piamancini, ["Yardım çerçevesinin ötesine geçme"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141)
  </p>
</aside>

Projeniz belirli bir dil veya ekosistem ile yakından ilişkiliyse, birlikte çalışabileceğiniz ilgili bir yazılım kuruluşu da olabilir. Örneğin, [Python Software Foundation](https://www.python.org/psf/) [PyPI](https://pypi.org/) Python paket yöneticisini desteği ve [node.js Vakfı](https://foundation.nodejs.org/)'nın [Express.js](https://expressjs.com/) Node tabanlı bir çerçeveye desteği gibi.
