---
lang: tr
title: Açık Kaynağın Hukuki Tarafı
description: Açık kaynağın yasal yönü hakkında merak ettiğiniz her şey ve merak etmediğiniz birkaç şey.
class: legal
order: 10
image: /assets/images/cards/legal.png
related:
- contribute
- leadership
---

## Açık kaynağın yasal etkilerini anlama

Yaratıcı çalışmalarınızı dünyayla paylaşmak heyecan verici ve faydalı bir deneyim olabilir. Ayrıca endişelenmeniz gereken bilmediğiniz bir sürü yasal şey anlamına da gelebilir. Neyse ki, sıfırdan başlamak zorunda değilsiniz. Yasal ihtiyaçlarınızı karşıladık. (Kazma vurmadan önce, [yasal uyarılarımızı](/notices/) okuduğunuzdan emin olun.)

## İnsanlar neden açık kaynağın yasal tarafını bu kadar önemsiyorlar?

Sormanıza sevindim! Yaratıcı bir çalışma yaptığınızda (yazı, grafik veya kod gibi), bu varsayılan olarak özel telif hakkı altındadır. Diğer bir deyişle, yasa çalışmanızın yazarı olarak başkalarının onunla neler yapabileceği konusunda bir sözünüz olduğunu varsayar.

Genel olarak, bu çalışmalarınızı dava riski altında olmadan hiç kimsenin kullanamayacağı, kopyalayamayacağı, dağıtamayacağı veya değiştiremeyeceği anlamına gelir.

Açık kaynak sıradışı bir durumdur, çünkü yazar diğerlerinin çalışmayı kullanmasını, değiştirmesini ve paylaşmasını bekler. Ancak yasal varsayılan hala özel bir telif hakkı olduğundan, bu izinleri açıkça belirten bir lisansa ihtiyacınız vardır.

Açık kaynak lisansı uygulamazsanız, projenize katkıda bulunan herkes, çalışmalarının münhasır bir telif hakkı sahibi olur. Bu, hiç kimsenin katkılarını kullanamayacağı, kopyalayamayacağı, dağıtamayacağı veya değiştiremeyeceği anlamına gelir - ve bu "hiç kimse" sizi de içerir.

Son olarak, projeniz sizin bilmediğiniz lisans gereksinimlerine bağlı olabilir. Projenizin topluluğu veya işvereninizin politikaları, projenizin özel açık kaynak lisansları kullanmasını da gerektirebilir. Aşağıda bu durumları ele alacağız.

## Açık GitHub projeleri açık kaynak mı?

GitHub'da [yeni bir proje oluşturduğunuzda](https://help.github.com/articles/creating-a-new-repository/), proje kütüphanesini **gizli** veya **açık** hale getirme seçeneğiniz vardır.

![Create repository](/assets/images/legal/repo-create-name.png)

**GitHub projenizi herkese açık hale getirmek, projenizi lisanslamakla aynı değildir.** Genel projeler, başkalarının projenizi görüntülemesine ve düzenlemesine izin veren [GitHub'ın Hizmet Koşulları](https://help.github.com/en/github/site-policy/github-terms-of-service#3-ownership-of-content-right-to-post-and-license-grants) kapsamındadır, gizli yaparsanız işiniz başkalarına izinsizdir.

Başkalarının projenizi kullanmasını, dağıtmasını, değiştirmesini veya katkıda bulunmasını istiyorsanız, açık kaynaklı bir lisans eklemeniz gerekir. Örneğin, birileri, açıkça yapma hakkını vermediğiniz sürece, kamuya açık olsa bile, GitHub projenizin herhangi bir bölümünü yasalarında kullanamaz.

## Sadece bana projemi korumak için ihtiyacım olan karışık metni verin.

Şanslısınız, çünkü bugün açık kaynaklı lisanslar standartlaştırılmış ve kullanımı kolaydır. Mevcut bir lisansı doğrudan projenize kopyalayıp yapıştırabilirsiniz.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) ve [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) en popüler açık kaynaklı lisanslardır, ancak seçilebilecek başka seçenekler de vardır. [Choosealicense.com](https://choosealicense.com/)'da bu lisansların tam metnini ve nasıl kullanılacağına ilişkin talimatları bulabilirsiniz.

GitHub'da yeni bir proje oluşturduğunuzda sizden [bir lisans eklemeniz istenir](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
  Standartlaştırılmış bir lisans, yasal eğitim almayanların yazılımla neler yapabileceklerini ve yapamadıklarını tam olarak bilmeleri için bir vekil olarak hizmet eder. Kesinlikle gerekli olmadıkça, ajans kodunun akış aşağı kullanımına engel teşkil edecek özel, değiştirilmiş veya standart olmayan terimlerden kaçının.
  <p markdown="1" class="pquote-credit">
— @benbalter, ["Bir devlet avukatının açık kaynaklı yazılım lisanslama hakkında bilmesi gereken her şey"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## Projem için hangi açık kaynak lisansı uygundur?

Boş bir sayfadan başlıyorsanız, [MIT Lisansı](https://choosealicense.com/licenses/mit/) ile yanlış yapmak zordur. Kısa, anlaşılması çok kolaydır ve telif hakkı uyarınız da dahil olmak üzere herhangi bir lisansın bir kopyasını sakladığı sürece herhangi bir şey yapmasına izin verir. Gerekirse, projeyi farklı bir lisans altında yayınlayabilirsiniz.

Aksi takdirde, projeniz için doğru açık kaynak lisansını seçmek hedeflerinize bağlıdır.

Projenizin büyük olasılıkla (veya olacak) **bağımlılıkları var**. Örneğin, bir Node.js projesi yapıyorsanız, muhtemelen Node Paket Yöneticisi'nden (npm) kitaplıkları kullanırsınız. Bağlandığınız bu kütüphanelerin her birinin kendi açık kaynaklı lisansı olacaktır. Lisanslarının her biri "izin verilebilir" ise (kamuya, alt lisans lisansı için herhangi bir şart olmaksızın, kullanma, değiştirme ve paylaşma izni verir), istediğiniz herhangi bir lisansı kullanabilirsiniz. Yaygın izin verilen lisanslar MIT, Apache 2.0, ISC ve BSD'dir.

Öte yandan, bağımlılıklarınızın herhangi birindeki lisansları "güçlü copyleft" ise (aynı lisansı aynı lisansı kullanma şartı ile halka açık kullanıma aynı izinler verir), projeniz aynı lisansı kullanmak zorunda kalacaktır. Ortak güçlü copyleft lisanslarına GPLv2, GPLv3 ve AGPLv3 dahildir.

Ayrıca, projenizi kullanacağını ve projenize katkıda bulunacağını umduğunuz **toplulukları** göz önünde bulundurmak isteyebilirsiniz:

* **Projenizin diğer projeler tarafından bir bağımlılık olarak kullanılmasını istiyor musunuz?** İlgili topluluktaki en popüler lisansı kullanmak için muhtemelen en iyisi. Örneğin, [MIT](https://choosealicense.com/licenses/mit/), [npm kütüphaneleri](https://libraries.io/search?platforms=NPM) için en popüler lisanstır.
* **Projenizin büyük işletmelere hitap etmesini ister misiniz?** Büyük bir işletme muhtemelen tüm katılımcılardan açık bir patent lisansı isteyecektir. Bu durumda, [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) size (ve onlara) uygundur.
* **Projenizin, yaptıkları katkıların kapalı kaynak kodlu yazılımlarda kullanılmasını istemeyenlere hitap etmesini ister misiniz?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) veya (kapalı kaynak hizmetlerine katkıda bulunmak istemiyorlarsa) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) sizin için iyidir.

**Şirketinizin** açık kaynaklı projeleri için özel lisanslama gereksinimleri olabilir. Örneğin, izin verilen bir lisans gerektirebilir, böylece şirket projenizi şirketin kapalı kaynaklı ürününde kullanabilir. Veya şirketiniz güçlü bir copyleft lisansı ve ek bir katkı sözleşmesi (aşağıya bakınız) isteyebilir, böylece yalnızca şirketiniz ve başka hiç kimse projenizi kapalı kaynaklı yazılımında kullanamaz. Yada şirketiniz, herhangi biri belirli bir lisanslama stratejisi gerektirebilecek standartlar, sosyal sorumluluk veya şeffaflıkla ilgili belirli ihtiyaçlara sahip olabilir. [Şirketinizin hukuk departmanıyla](#şirketimin-hukuk-ekibinin-neleri-bilmesi-gerekiyor) konuşun.

GitHub'da yeni bir proje oluşturduğunuzda, size bir lisans seçme seçeneği sunulur. Yukarıda belirtilen lisanslardan birinin dahil edilmesi GitHub projenizi açık kaynak yapacaktır. Başka seçenekler görmek isterseniz, projeniz için doğru lisansı bulmak için [choosealicense.com](https://choosealicense.com) adresini ziyaret edin, proje [yazılım](https://choosealicense.com/non-software/) projesi olmasa bile.

## Projemin lisansını değiştirmek istersem ne olur?

Çoğu projenin lisanslarını değiştirmesi gerekmez. Ancak bazen koşullar değişebilir.

Örneğin, projeniz büyüdükçe bağımlılık veya kullanıcı sayısı artar veya şirketiniz, herhangi biri farklı bir lisans gerektirebilecek veya isteyebilecek strateji değişikliğine gidebilir. Ayrıca, projenizi baştan itibaren lisanslamayı ihmal ettiyseniz, bir lisans eklemek etkili bir şekilde lisans değiştirmekle aynıdır. Projenizin lisansını eklerken veya değiştirirken göz önünde bulundurmanız gereken üç temel husus vardır:

**Bu iş karmaşıktır.** Lisans uygunluğunu ve uyumluluğunu belirlemek ve telif hakkını elinde tutan kişiler çok hızlı bir şekilde karmaşık ve kafaları karışık olabilir. Yeni sürümler ve katkılar için yeni ama uyumlu bir lisansa geçmek, tüm mevcut katkılardan vazgeçmekten farklıdır. Lisans değiştirme isteğinin ilk aşamalarına hukuk ekibinizi dahil edin. Bir lisans değişikliği için projenizin telif hakkı sahiplerinden izin almış olsanız veya izin alsanız bile, değişikliğin projenizin diğer kullanıcıları ve katkıda bulunanları üzerindeki etkisini göz önünde bulundurun. Projeniz için, paydaşlarınızla net iletişim ve istişarelerde daha sorunsuz bir şekilde ilerleyebilecek olan bir lisans değişikliğini projeniz için bir "yönetişim etkinliği" olarak düşünün. Bunların hepsi projeniz için başlangıçtan itibaren uygun bir lisans seçmek ve kullanmak için yeterince sebeplerdir!

**Projenizin mevcut lisansı.** Projenizin mevcut lisansı, değiştirmek istediğiniz lisansla uyumluysa, yeni lisansı kullanmaya başlayabilirsiniz. Bunun nedeni, eğer A lisansı B lisansı ile uyumluysa, B şartlarına uyurken A şartlarına uymanız gerekir (ancak bunun tersi geçerli değildir). Dolayısıyla, şu anda izin verilen bir lisans kullanıyorsanız (örneğin, MIT), MIT lisansının bir kopyasını ve ilgili tüm telif hakkı bildirimlerini sakladığınız sürece, daha fazla koşullu bir lisansa geçebilirsiniz (örneğin, MIT lisansının asgari koşulları). Ancak mevcut lisansınıza izin verilmezse (örneğin, copyleft veya lisansınız yoksa) ve tek telif hakkı sahibi değilseniz, projenizin lisansını MIT olarak değiştiremezsiniz. Esasen, izin verilen bir lisans ile projenin telif hakkı sahiplerinin lisanslarını değiştirmek için önceden izin vermişlerdir.

**Projenizin mevcut telif hakkı sahipleri.** Projenize katkıda bulunan tek kişi iseniz, o zaman siz veya şirketiniz projenin tek telif hakkı sahibisiniz. Sizin veya şirketinizin istediği lisansı ekleyebilir veya değiştirebilirsiniz. Aksi takdirde, lisansları değiştirmek için anlaşma yapmanız gereken başka telif hakkı sahipleri olabilir. Onlar kim? Projenizde katkısı olan kişiler başlamak için iyi bir yerdir. Ancak bazı durumlarda telif hakkı bu kişilerin işverenleri tarafından verilecektir. Bazı durumlarda insanlar sadece asgari katkı sağlayacaklardır, ancak bazı kod satırları altındaki katkıların telif haklarına tabi olmadığına dair kesin ve hızlı bir kural yoktur. Ne yapalım? Duruma göre değişir. Göreceli olarak küçük ve yeni bir proje için, mevcut tüm katılımcılardan bir sorun ya da çekme talebinde lisans değişikliğini kabul etmelerini sağlamak mümkün olabilir. Büyük ve uzun ömürlü projeler için birçok katılımcı ve hatta mirasçıları aramanız gerekebilir. Mozilla'nın Firefox, Thunderbird ve ilgili yazılımları yeniden lisanması yıllarını (2001-2006) aldı.

Alternatif olarak, katkıda bulunanlara, mevcut açık kaynak lisansınız tarafından izin verilenlerin ötesinde, belirli koşullar altında belirli lisans değişikliklerinde önceden (ek bir anlaşma yaparak - aşağıya bakınız) karar vermiş olabilirsiniz. Bu, değişen lisansların karmaşıklığını biraz değiştirir. Önceden avukatlarınızdan daha fazla yardıma ihtiyacınız olacak ve bir lisans değişikliği yaparken projenizin paydaşlarıyla açıkça iletişim kurmak isteyeceksiniz.

## Projemin ek bir katkı sözleşmesine ihtiyacı var mı?

Muhtemelen yoktur. Açık kaynak projelerin büyük çoğunluğu için açık kaynaklı bir lisans, hem gelenler (katkıda bulunanlardan) hem de gidenler (diğer katkıda bulunanlar ve kullanıcılar için) için lisans olarak açık şekilde hizmet vermektedir. Projeniz GitHub'daysa, GitHub Hizmet Şartları "inbound = outbound" ı [açık varsayılan yapar](https://help.github.com/en/github/site-policy/github-terms-of-service#6-contributions-under-repository-license) .

Ek bir katılımcı sözleşmesi - genellikle Katılımcı Lisans Sözleşmesi (CLA) olarak adlandırılır - proje sahipleri için idari işler yaratabilir. Bir anlaşmanın ne kadar iş gerektirdiği proje ve uygulamaya bağlıdır. Basit bir anlaşma, katkıda bulunanların, bir tıklamayla, proje açık kaynak lisansı kapsamında katkıda bulunmak için gerekli haklara sahip olduklarını onaylamalarını gerektirebilir. Daha karmaşık bir anlaşma, katkıda bulunanların işverenlerinin yasal incelemesini ve imzalarını gerektirebilir.

Ayrıca, bazılarının gereksiz olduğuna, anlaşılmasının zor veya haksız olduğuna inandığı "evraklar" ekleyerek (sözleşme alıcısı katkıda bulunanlardan veya halkın projenin açık kaynak lisansı aracılığıyla yaptığı haklardan daha fazla hak kazandığında), ek bir katılımcı anlaşması projenin topluluğuna dostça görülmeyebilir.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">
  Node.js için CLA'yı kaldırdık. Bunu yapmak, Node.js katılımcısı için giriş engelini azalttı ve böylece katılımcı tabanını genişletti.
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Node.js Katkıları Genişletmek"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Projeniz için ek bir katılımcı sözleşmesi düşünmek isteyebileceğiniz bazı durumlar şunlardır:

* Avukatlarınız açık kaynak lisanslarını yeterli bulmadıklarından (öyle olsa bile!)  tüm katılımcıları katılımcı sözleşmelerimi açıkça kabul etmek (çevrimiçi veya çevrimdışı _işaretlemelerini_) isteyebilir. Bu tek endişe ise, projenin açık kaynaklı lisansını onaylayan bir katılımcı sözleşmesi yeterli olmalıdır. [JQuery Bireysel Katılımcı Lisans Sözleşmesi](https://contribute.jquery.org/CLA/), hafif bir ek katılımcı sözleşmesi için iyi bir örnektir. Bazı projeler için, [Developer Certificate of Origin](https://github.com/probot/dco) alternatif olabilir.
* Projeniz, açık bir patent hibesi (MIT gibi) içermeyen bir açık kaynak lisansı kullanıyor ve bazıları sizi hedeflemek için kullanılabilecek büyük patent portföyleri olan şirketler için çalışabilecek tüm katılımcılardan bir patent hibesine ihtiyacınız var. [Apache Individual Contributor License Agreement](https://www.apache.org/licenses/icla.pdf)  Apache License 2.0. lisansında bulunan ve çokça kullanılan bir katılımcı sözleşmesidir.
* Projeniz bir copyleft lisansı altında, ancak aynı zamanda projenin tescilli bir versiyonunu da dağıtmanız gerekiyor. Size telif hakkı veren veya size (ancak halka değil) izin veren bir lisans veren her katılımcıya ihtiyacınız olacaktır. [MongoDB Katılımcı Anlaşması](https://www.mongodb.com/legal/contributor-agreement) bu tür bir anlaşma örneğidir.
* Projenizin ömrü boyunca lisansları değiştirmesi gerekebileceğini ve katkıda bulunanların bu tür değişiklikleri önceden kabul etmesini isteyebileceğinizi düşünüyorsunuz.
* Projenizin kullanım ömrü boyunca lisansları değiştirmesi gerekebileceğini ve katkıda bulunanların bu tür değişiklikleri önceden kabul etmelerini isteyebilirsiniz.

Projeniz için ek bir katılımcı sözleşmesi kullanmanız gerekiyorsa, katılımcıların dikkatini dağıtmayı en aza indirmek için [CLA yardımcısı](https://github.com/cla-assistant/cla-assistant) gibi bir entegrasyon kullanmayı düşünün.

## Şirketimin hukuk ekibinin neleri bilmesi gerekiyor?

Açık kaynaklı bir projeyi bir şirket çalışanı olarak yayınlıyorsanız, önce hukuk ekibiniz bir proje tedarik ettiğinizi bilmelidir.

Daha iyi veya daha kötüsü, kişisel bir proje olsa bile, onlara bildirmeyi düşünün. Büyük olasılıkla, şirketinizle kendilerine projelerinizi kontrol etmelerini sağlayan bir "çalışan IP sözleşmesi" uygulamanız vardır, özellikle de şirketin işi ile ilgili ise veya projeyi geliştirmek için herhangi bir şirket kaynağını kullanıyorsanız. Şirketiniz size kolayca izin _vermeli_ ve belki de zaten çalışan dostu bir IP sözleşmesi veya şirket politikası ile sahip olabilir. Aksi takdirde pazarlık yapabilirsiniz (örneğin, projenizin şirketin sizin için mesleki öğrenme ve gelişim hedeflerine hizmet ettiğini açıklayın) veya daha iyi bir şirket bulana kadar projeniz üzerinde çalışmaktan kaçının.

**Şirketiniz için bir proje açmaya açıksanız**, kesinlikle onları bilgilendirin. Yasal ekibinizde muhtemelen, şirketin iş gereksinimlerine ve projenizin bağımlılıklarının lisanslarına uymasını sağlama konusundaki uzmanlığına dayalı olarak kullanılacak açık kaynaklı lisans (ve belki de ek katkı sözleşmesi) için politikalar zaten vardır. Olmazsa, sen ve onlar şanslısınız demektir! Hukuk ekibiniz bu olayları çözmek için sizinle birlikte çalışmaya istekli olmalıdır. Göz önünde bulundurulması gereken bazı şeyler:

* **Üçüncü taraf materyali:** Projeniz başkaları tarafından yaratılan bağımlılıklara sahip mi, yoksa başkalarının kodunu içeriyor veya kullanıyor mu? Bunlar açık kaynak ise, malzemelerin açık kaynak lisanslarına uymanız gerekir. Bu, üçüncü taraf açık kaynaklı lisanslarla çalışan bir lisans seçmekle başlar (yukarıya bakın). Projeniz üçüncü taraf açık kaynak materyalini değiştirir veya dağıtırsa, yasal ekibiniz ayrıca üçüncü taraf açık kaynak lisanslarının diğer koşullarını yerine getirdiğinizi bilmek isteyecektir. Projeniz açık kaynak lisansı olmayan başkalarının kodunu kullanıyorsa, büyük olasılıkla üçüncü taraf bakımcılardan [açık kaynak lisansı eklemelerini](https://choosealicense.com/no-license/#for-users) istemeniz ve bunlardan birini alamamanız durumunda, kodlarını kullanmaktan vazgeçmeniz gerekir.

* **Ticari sırlar:** Projede, şirketin genel kullanıma açık olmasını istemediği bir şey olup olmadığını dikkate alın. Öyleyse, gizli tutmak istediğiniz malzemeyi çıkardıktan sonra projenizin geri kalan kısmını kaynak olarak açabilirsiniz.

* **Patentler:** Şirketiniz, projenizin açık kaynak kodlu bir şekilde [kamuya açıklanmasını](https://en.wikipedia.org/wiki/Public_disclosure) sağlayacak bir patent başvurusu yapıyor mu? Ne yazık ki beklemeniz istenebilir (veya şirketten, uygulamanın bilgeliğini yeniden gözden geçirir). Projenize büyük patent portföyüne sahip şirketlerin çalışanlarından katkıda bulunmayı bekliyorsanız, yasal ekibiniz katkıda bulunanlardan (Apache 2.0 veya GPLv3 gibi) açık bir patent ödeneği olan bir lisans  veya ek bir katılımcı sözleşmesini ( yukarıyı bakın) kullanmanızı isteyebilir.

* **Ticari Markalar:** Projenizin adının [mevcut hiçbir ticari marka ile çakışmadığından](../starting-a-project/#benzersiz-isim-bulmak) emin olun. Projede kendi şirket ticari markalarınızı kullanıyorsanız, herhangi bir anlaşmazlık yaratmadığını kontrol edin. [FOSSmarks](http://fossmarks.org/) , markaları ücretsiz ve açık kaynaklı projeler bağlamında anlamak için pratik bir rehberdir.

* **Gizlilik:** Projeniz kullanıcılar hakkında veri topluyor mu? Şirket sunucularına "bağlanıyor" mu? Hukuk ekibiniz şirket politikalarına ve dış düzenlemelere uymanıza yardımcı olabilir.

Şirketinizin ilk açık kaynaklı projesini yayınlıyorsanız, yukarıdakiler üstesinden gelmek için fazlasıyla yeterlidir (ancak endişelenmeyin, çoğu proje endişelendirecek bir durum oluşturmayacaktır).

Daha uzun vadede hukuk ekibiniz, şirketin açık kaynaklara katılımından daha fazlasını elde etmesi ve güvende kalması için daha fazlasını yapabilir:

* **Çalışanlar için katkı politikaları:** Çalışanlarınızın açık kaynaklı projelere nasıl katkıda bulunduğunu belirten bir kurumsal politika geliştirmeyi düşünün. Açık bir politika, çalışanlarınız arasındaki karmaşayı azaltacaktır ve işlerinin bir parçası olarak veya boş zamanlarında, şirketin çıkarlarına faydalı olacak şekilde açık kaynak projelere katkıda bulunmalarına yardımcı olacaktır. Buna iyi bir örnek Rackspace'in [Model IP'si ve Açık Kaynak Katkı Politikası](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/)'dır.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">
  Bir yama ile ilgili IP'nin serbest bırakılması, çalışanın bilgi birikimini ve itibarını arttırır. Şirketin bu çalışanın gelişimine yatırım yaptığını ve bir güçlendirme ve özerklik duygusu yarattığını göstermektedir. Tüm bu faydalar ayrıca daha yüksek moral ve daha iyi bir çalışanın kalmasına yol açmaktadır.
  <p markdown="1" class="pquote-credit">
— @vanl, ["Bir Model IP ve Açık Kaynak Katkı Politikası"](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **Neyi yayınlama:** [(Neredeyse) her şey?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) Eğer yasal ekibiniz şirketinizin açık kaynaklı stratejisini anlıyor ve yatırım yapıyorsa, çabalarınızı engellemekten ziyade en iyi şekilde yardım edebileceklerdir.
* **Uyumluluk:** Şirketiniz herhangi bir açık kaynaklı proje yayınlamamış olsa bile, başkalarının açık kaynaklı yazılımını kullanır. [Farkındalık ve süreç](https://www.linuxfoundation.org/blog/2015/06/why-companies-that-use-open-source-need-a-compliance-program/) baş ağrısını, ürün gecikmelerini ve davaları önleyebilir.

<aside markdown="1" class="pquote">
  Kuruluşların hem \["izin verilen" hem de "copyleft"\] kategorilerine uyan bir lisans ve uyum stratejisi olmalıdır. Bu, alt bileşenler ve bağımlılıklar dahil, kullanmakta olduğunuz açık kaynaklı yazılım için geçerli olan lisans terimlerinin kaydını tutmakla başlar.
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Açık Kaynak Kodlu Yazılım: Uygunluk Esasları ve En İyi Uygulamalar"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Patentler:** Şirketiniz, üyelerin büyük açık kaynaklı projeleri kullanmalarını korumak için ortak bir savunma patenti havuzu olan [Açık Buluşma Ağı](https://www.openinventionnetwork.com/)'na katılmak veya başka bir [alternatif patent lisansını](https://www.eff.org/document/hacking-patent-system-2016) keşfetmek isteyebilir.
* **Yönetişim:** Özellikle bir projeyi [şirket dışındaki](../leadership-and-governance/#projemi-desteklemek-i%C3%A7in-t%C3%BCzel-ki%C5%9Fili%C4%9Fe-ihtiyac%C4%B1m-var-m%C4%B1) bir {a2}tüzel kişiliğe{/a2} taşımanın ne zaman anlamlı olacağı.
