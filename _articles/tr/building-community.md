---
lang: tr
title: Misafirperver Topluluklar Oluşturma
description: Building a community that encourages people to use, contribute to, and
  evangelize your project.
class: building
toc:
  setting-your-project-up-for-success: Setting your project up for success
  growing-your-community: Growing your community
  resolving-conflicts: Resolving conflicts
order: '4'
image: "/assets/images/cards/building.png"
related:
- örnek yöntemler
- coc
---

## Setting your project up for success

Projenizi başlattınız, mesajınızı yayıyorsunuz ve insanlar bunu farkediyor. Mükemmel! Şimdi, size katılmalarını nasıl sağlarsınız?

Konuksever bir topluluk, projenizin geleceğine ve itibarına yapılan bir yatırımdır. Projeniz ilk katkıları görmeye yeni başlıyorsa, erken katkıda bulunanlara olumlu bir deneyim vererek başlayın ve geri gelmelerini kolaylaştırın.

### İnsanlara hoş geldini hissettirmek

Projenizin topluluğunu tanımlandırmanın bir yolu da @MikeMcQuaid'in dediği gibi onu[katılımcı hunisi olarak](https://mikemcquaid.com/2018/08/14/the-open-source-contributor-funnel-why-people-dont-contribute-to-your-open-source-project/) düşünmektir:

![Contributor funnel](/assets/images/building-community/contributor_funnel_mikemcquaid.png)

Topluluğunuzu oluştururken huninin tepesindeki birinin (potansiyel bir kullanıcı) teorik olarak en alt seviyeye nasıl ulaşabileceğini (etkin bir bakım sağlayıcı) düşünün. Amacınız, katılımcı deneyiminin her aşamasında engelleri azaltmaktır. İnsanlar kolay dahil olduklarında daha fazlasını yapmaya teşvik edilirler.

Start with your documentation:

- **Birinin projenizi kullanmasını kolaylaştırın.** [Dostça bir README](../starting-a-project/#writing-a-readme) ve açık kod örnekleri, projenize ulaşan herkesin başlamasını kolaylaştıracaktır.
- [CONTRIBUTING dosyanızı](../starting-a-project/#writing-your-contributing-guidelines) kullanarak ve sorun listenizi güncel tutarak **nasıl katkıda bulunulabileceğini açıkça belirtin**.

[GitHub'un 2017 Açık Kaynak Araştırması](http://opensourcesurvey.org/2017/) , eksik veya kafa karıştırıcı belgelerin açık kaynak kullanıcıları için en büyük sorun olduğunu gösterdi. İyi belgeler insanları projenizle etkileşime teşvik eder. Sonunda birisi bir sorun açacak veya istekte bulunacak. Bu etkileşimleri, dönüşüm hunisinden aşağıya taşımak için fırsat olarak kullanın.

- **Yeni birileri projenize geldiğinde, ilgilendikleri için teşekkür edin!** Birinin geri gelmek istememesi için yalnızca bir olumsuz deneyim yeterlidir.
- **Hızlı cevap verin.** Sorunlarına bir ay boyunca cevap vermezseniz, büyük olasılıkla projenizi çoktan unutmuş olurlar.
- **Kabul edeceğiniz katkı türleri konusunda açık fikirli olun.** Katkıda bulunan birçok kişi bir hata raporu veya küçük bir düzeltme ile başlar. Bir projeye [katkıda bulunmak için birçok yol](../how-to-contribute/#what-it-means-to-contribute) var. İnsanların nasıl istiyorlarsa öyle yardım etmelerine izin verin.
- **Katılmadığınız bir katkı varsa** , fikirleri için onlara teşekkür edin ve [niçin](../best-practices/#learning-to-say-no) projenin kapsamına uymadığını açıklayın, varsa ilgili dokümantasyondan alıntı yapın.

<aside markdown="1" class="pquote"><img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar"> Açık kaynağa katkıda bulunmak, bazıları için daha kolaydır. İnsanların içinde bir şeyi doğru anlamadıkları ya da yapmadıkları için uyarılma korkuları vardır. (...) Katkı yapanlara çok düşük teknik yeterlilikle (dokümantasyon, web içeriği işaretlemesi vb.) katkıda bulunacakları bir yol vererek, bu korkuyu büyük ölçüde azaltabilirsiniz. bu endişeler. <p markdown="1" class="pquote-credit"> - @mikeal, ["Modern açık kaynakta katılımcı tabanını büyütmek"] (https://opensource.com/life/16/5/growing-contributor-base-modern-open-source) </p></aside>

Açık kaynak katkıda bulunanların çoğunluğu "geçici katkı yapanlar" dır: yani bir projeye yalnızca ara sıra katkıda bulunan insanlar. Sıradan bir katılımcının projenizi hızlandırmak için tam zamanı olmayacağı için işiniz onların katkıda bulunmalarını kolaylaştırmaktır.

Diğer katılımcıları teşvik etmek de kendinize yapılan bir yatırımdır. En büyük hayranlarınızı, heyecanlandıkları işle çalışmaya ikna ettiğinizde, her şeyi kendiniz yapmanız için daha az baskı olacaktır.

### Document everything

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  Have you ever been to a (tech-) event where you didn't know anyone, but everyone else seemed to stand in groups and chat like old friends? (...) Now imagine you want to contribute to an open source project, but you don't see why or how this is happening.
  <p markdown="1" class="pquote-credit">
— @janl, ["Sustainable Open Source"](https://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

When you start a new project, it may feel natural to keep your work private. But open source projects thrive when you document your process in public.

When you write things down, more people can participate at every step of the way. You might get help on something you didn't even know you needed.

Bir şeyleri yazmak teknik dokümantasyondan daha fazlası demektir. Bir şeyi bir yere yazma istediğinizi veya projenizi özel olarak tartışmak istediğinizi her ne zaman hissederseniz, kendinize halka açıp açamayacağınızı sorun.

Be transparent about your project's roadmap, the types of contributions you're looking for, how contributions are reviewed, or why you made certain decisions.

Aynı problemle karşılaşan birden fazla kullanıcı fark ederseniz, cevapları README'de belgeleyin.

For meetings, consider publishing your notes or takeaways in a relevant issue. The feedback you'll get from this level of transparency may surprise you.

Documenting everything applies to the work you do, too. If you're working on a substantial update to your project, put it into a pull request and mark it as a work in progress (WIP). That way, other people can feel involved in the process early on.

### Hızlı cevap verin

[Projenizi duyurduğunuzda](../finding-users), insanların sizin için geribildirimleri olacaktır. İşlerin nasıl yürüdüğü hakkında soruları olabilir veya başlamak için yardıma ihtiyaçları olabilir.

Birisi bir sorun bildirirken, bir PR isteği gönderdiğinde veya projeniz hakkında bir soru sorduğunda hızlıca cevap vermeye çalışın. Hızlı cevap verdiğinizde, insanlar bir diyaloğun parçası olduklarını hissedecekler ve katılım konusunda daha istekli olacaklar.

İsteği hemen inceleyemezseniz bile, erkenden kabul etmek, katılımın artmasına yardımcı olur. İşte @dreyno'nun [Middleman'daki](https://github.com/middleman/middleman/pull/1466) PR isteğine verdiği cevap:

![Middleman pull request](/assets/images/building-community/middleman_pr.png)

[Bir Mozilla çalışması,](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) 48 saat içinde kod incelemeleri alan katılımcıların çok daha yüksek bir getiri oranına ve katkı tekrarına sahip olduğunu gösterdi.

Projenize ilişkin konuşmalar, İnternet üzerindeki Stack Overflow, Twitter veya Reddit gibi başka yerlerde de olabilir. Bu yerlerden bazılarında bildirimler ayarlayabilir, böylece birileri projenizden bahsettiğinde haberdar olursunuz.

### Topluluğuna toplanacak bir yer verin

There are two reasons to give your community a place to congregate.

The first reason is for them. Help people get to know each other. People with common interests will inevitably want a place to talk about it. And when communication is public and accessible, anybody can read past archives to get up to speed and participate.

İkinci sebep sizin için. İnsanlara projeniz hakkında konuşacakları halka açık bir yer vermezseniz, muhtemelen sizinle doğrudan temasa geçerler. Başlangıçta, özel mesajlara "sadece bu seferlik" cevap verecek kadar kolay görünebilir. Ancak zamanla, özellikle de projeniz popüler hale gelirse, kendinizi yorgun hissedeceksiniz. Özel olarak projenizle ilgili insanlarla iletişim kurmaya özen gösterin. Bunun yerine, onları belirlenmiş bir genel kanala yönlendirin.

Public communication can be as simple as directing people to open an issue instead of emailing you directly or commenting on your blog. You could also set up a mailing list, or create a Twitter account, Slack, or IRC channel for people to talk about your project. Or try all of the above!

[Kubernetes kops](https://github.com/kubernetes/kops#getting-involved), topluluk üyelerine yardımcı olmak için her hafta çalışma bir miktar çalışma saatini ayırıyor:

> Kops ayrıca topluluğa yardım ve rehberlik sunmak için her hafta biraz zaman ayırıyor. Kops çalışanlarının, yeni gelenlerle çalışmaya, PR'lara yardım etmeye ve yeni özellikleri tartışmaya özel olarak ayrılan zamanı kullanmasını kabul etti.

Notable exceptions to public communication are: 1) security issues and 2) sensitive code of conduct violations. You should always have a way for people to report these issues privately. If you don't want to use your personal email, set up a dedicated email address.

## Growing your community

Topluluklar son derece güçlü yapılardır. Bu güç, onu nasıl kullandığınıza bağlı olarak bir lütuf veya lanet olabilir. Projenizin topluluğu büyüdükçe, yıkıcı değil, yapıcı bir güç haline gelmesine yardım etmenin yolları var.

### Kötü karakterlere müsamaha göstermeyin

Herhangi bir popüler proje kaçınılmaz olarak topluluğunuza yardım etmek yerine, zarar veren insanları çekecektir. Gereksiz tartışmalara başlayabilir, önemsiz özelliklere dikkat çekebilir veya başkalarını zorbalık edebilirler.

Do your best to adopt a zero-tolerance policy towards these types of people. If left unchecked, negative people will make other people in your community uncomfortable. They may even leave.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/okdistribute?s=180" class="pquote-avatar" alt="avatar">
  The truth is that having a supportive community is key. I'd never be able to do this work without the help of my colleagues, friendly internet strangers, and chatty IRC channels. (...) Don't settle for less. Don't settle for assholes.
  <p markdown="1" class="pquote-credit">
— @okdistribute, ["How to Run a FOSS Project"](https://okdistribute.xyz/post/okf-de)
  </p>
</aside>

Regular debates over trivial aspects of your project distracts others, including you, from focusing on important tasks. New people who arrive to your project may see these conversations and not want to participate.

Projenizde olumsuz davranışlar olduğunu gördüğünüzde, herkese açık olarak uyarın. Nazikçe ama sert bir tonda, davranışlarının neden kabul edilebilir olmadığını açıklayın. Sorun devam ederse, [onlardan gitmelerini istemeniz](../code-of-conduct/#enforcing-your-code-of-conduct) gerekebilir. [Davranış kuralları listeniz](../code-of-conduct/) bu konuşmalar için yapıcı bir rehber olabilir.

### Katkıda bulunan katılımcılarla oldukları yerde tanışın

Good documentation only becomes more important as your community grows. Casual contributors, who may not otherwise be familiar with your project, read your documentation to quickly get the context they need.

In your CONTRIBUTING file, explicitly tell new contributors how to get started. You may even want to make a dedicated section for this purpose. [Django](https://github.com/django/django), for example, has a special landing page to welcome new contributors.

![Django new contributors page](/assets/images/building-community/django_new_contributors.png)

Sorun listenizde, katkıda bulunanlar için farklı türlerlerde etiket kullanmak uygundur: örneğin, [*"ilk gelenler için"*](https://kentcdodds.com/blog/first-timers-only) , *"başlamak için"* veya *"belge".* [Bu etiketler](https://github.com/librariesio/libraries.io/blob/6afea1a3354aef4672d9b3a9fc4cc308d60020c8/app/models/github_issue.rb#L8-L14), projenizde yeni birisinin sorunlarınızı hızla taramasını ve başlamasını kolaylaştırır.

Finally, use your documentation to make people feel welcome at every step of the way.

Projenize ulaşan çoğu insanla asla etkileşime geçmeyeceksiniz. Biri kendini çekingen hissettiği veya nereden başlayacağını bilmediği için almadığınız katkılar olabilir. Birkaç nazik kelime bile, birisinin projenizde hayal kırıklığına uğratmasına engel olabilirsiniz.

Örneğin, [Rubinius](https://github.com/rubinius/rubinius/) [katkıda bulunan kılavuzuna](https://github.com/rubinius/rubinius/blob/master/.github/contributing.md) {a2}şöyle{/a2} başlıyor:

> Rubinius'u kullandığınız için teşekkür ederek başlamak istiyoruz. Bu proje bir sevgi emeğidir ve hataları yakalayan, performans iyileştirmeleri yapan ve belgelere yardımcı olan tüm kullanıcıları takdir ediyoruz. Her katkı anlamlıdır, katılımınız için teşekkür ederiz. İşte sorununuzu başarıyla çözebilmemiz için izlemenizi istediğimiz birkaç kural.

### Share ownership of your project

<aside markdown="1" class="pquote"><img src="https://avatars.githubusercontent.com/sarahsharp?s=180" class="pquote-avatar" alt="avatar"> Liderleriniz, bütün sağlıklı toplulukların yapması gerektiği gibi farklı görüşlere sahip olacak! Bununla birlikte, en yüksek sesin insanları her zaman yorarak kazanmamasını ve daha az belirgin ve azınlık seslerinin duyulmasını sağlamak için adımlar atmanız gerekir. <p markdown="1" class="pquote-credit"> - @sarahsharp, ["İyi bir topluluğu ne oluşturur?"]] (https://sarah.thesharps.us/2015/10/06/what-makes-a-good-community/)</p></aside>

People are excited to contribute to projects when they feel a sense of ownership. That doesn't mean you need to turn over your project's vision or accept contributions you don't want. But the more you give credit to others, the more they'll stick around.

See if you can find ways to share ownership with your community as much as possible. Here are some ideas:

- **Kolay (kritik olmayan) hataları düzeltmeye karşı direnç gösterin.** Bunun yerine, bunları yeni katkıda bulunanlar bulmak için fırsatlar olarak kullanın veya katkıda bulunmak isteyen birini akıl hocası olarak kullanın. İlk başta doğal görünmeyebilir, ancak yatırımınız zamanla karşılığını verir. Örneğin, @michaeljoseph, bir katılımcıdan, kendisini düzeltmek yerine, [Cookiecutter](https://github.com/audreyr/cookiecutter) konusuna ilişkin bir PR isteği göndermesini istedi.

![Cookiecutter issue](/assets/images/building-community/cookiecutter_submit_pr.png)

- Projenizde, projenize katkıda bulunan herkesi listeleyen **bir CONTRIBUTORS veya AUTHORS dosyası başlatın**,[Sinatra'nın](https://github.com/sinatra/sinatra/blob/master/AUTHORS.md) yaptığı gibi.

- Oldukça büyük bir topluluğunuz varsa, **bülten gönderin veya katkıda bulunanlara teşekkür eden bir blog yazısı yazın** . Rust'ın [Rust'ta Bu Hafta](https://this-week-in-rust.org/) ve Hoodie'nin [Shoutouts](http://hood.ie/blog/shoutouts-week-24.html) bültenleri iki güzel örnek.

- **Her katkıda bulunana commit izni verin.** @felixge, bunun insanları [yamalarını cilalama konusunda daha heyecanlı](https://felixge.de/2013/03/11/the-pull-request-hack.html) hale getirdiğini buldu ve bir süredir üzerinde çalışmadığı projeler için yeni geliştiriciler buldu.

- Projeniz GitHub'daysa, **projenizi kişisel hesabınızdan bir [Organizasyona](https://help.github.com/articles/creating-a-new-organization-account/) hesabına taşıyın** ve en az bir yedek yönetici ekleyin. Organizasyon hesapları, harici çalışanlarla projeler üzerinde çalışmayı kolaylaştırır.

Gerçek şu ki çoğu projede işlerin çoğunu yapan [yalnızca](https://peerj.com/preprints/1233.pdf) bir veya iki koruyucu var. Projeniz büyüdükçe ve topluluğunuz büyüdükçe, yardım bulmak o kadar kolay olur.

Çağrıya her zaman cevap verecek birini bulamayacak olsanız da, bir mesaj bırakmak, diğer kişilerin girme şansını arttırır.

<aside markdown="1" class="pquote"><img src="https://avatars.githubusercontent.com/gr2m?s=180" class="pquote-avatar" alt="avatar"> \ [Sizin \ \ 'niz \] Sizin yapmadığınız şeyleri yapma yeteneğine sahip olan ve zevk alan katılımcıları işe almak en iyisidir. Kodlamayı seviyor musunuz, ancak soruları yanıtlamıyor musunuz? Topluluğunuzdaki bireylerin bunu yapmasına izin verin. <p markdown="1" class="pquote-credit"> - @ gr2m, ["Toplulukları Karşılama"] (http://hood.ie/blog/welcoming-communities.html) </p></aside>

## Resolving conflicts

Projenizin ilk aşamalarında, büyük kararlar vermek kolaydır. Bir şey yapmak istediğinizde, sadece yaparsınız.

As your project becomes more popular, more people will take interest in the decisions you make. Even if you don't have a big community of contributors, if your project has a lot of users, you'll find people weighing in on decisions or raising issues of their own.

For the most part, if you've cultivated a friendly, respectful community and documented your processes openly, your community should be able to find resolution. But sometimes you run into an issue that's a bit harder to address.

### Nezaket seviyesini ayarlayın

Topluluğunuz zor bir mesele ile boğuşurken, öfke artırabilir. İnsanlar sinirlenebilir veya öfkelenebilir ve birbirlerine ya da size yönelebilirler.

Bir proje sorumlusu olarak işiniz, bu durumların tırmanmasını önlemektir. Konuyla ilgili güçlü bir fikriniz olsa bile, kavgaya atılmak ve görüşlerinizi itmek yerine, moderatör veya kolaylaştırıcı olarak yer almaya çalışın. Birisi kaba veya tartışmacı davranıyorsa, tartışmaları medeni ve üretken kılmak için [hemen harekete](../building-community/#dont-tolerate-bad-actors) geçin.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kennethreitz?s=180" class="pquote-avatar" alt="avatar">
  As a project maintainer, it's extremely important to be respectful to your contributors. They often take what you say very personally.
  <p markdown="1" class="pquote-credit">
— @kennethreitz, ["Be Cordial or Be on Your Way"](https://www.kennethreitz.org/essays/be-cordial-or-be-on-your-way)
  </p>
</aside>

Diğer insanlar rehberlik için size bakar. İyi bir örnek olun. Hala hayal kırıklığını, mutsuzluğu veya endişeyi ifade edebilirsiniz, ancak bunu sakince yapın.

Sakinleşmek kolay değildir, ancak liderlik göstermek topluluğunuzun sağlığını iyileştirir. İnternet size bu konuda minnettar olur.

### Treat your README as a constitution

README'niz [bir talimat dizisinden daha fazlasıdır](../starting-a-project/#writing-a-readme). Aynı zamanda amaçlarınız, ürün vizyonunuz ve yol haritanız hakkında konuşabileceğiniz bir yer. İnsanlar, belirli bir özelliğin haklarını tartışmaya aşırı odaklanıyorsa, README'nizi tekrar ziyaret etmek ve projenizin vizyonundan bahsetmek yardımcı olabilir. README'nize odaklanmak da konuşmayı kişiselleştirmekten uzaklaştırır, böylece yapıcı bir tartışma yapabilirsiniz.

### Focus on the journey, not the destination

Some projects use a voting process to make major decisions. While sensible at first glance, voting emphasizes getting to an "answer," rather than listening to and addressing each other's concerns.

Oylama, topluluk üyelerinin birbirlerine iyilik yapmak veya belirli bir şekilde oy kullanmak için baskı yaptığını hissettiklerinde politik hale gelebilir. Toplumunuzdaki [sessiz çoğunluk](https://ben.balter.com/2016/03/08/optimizing-for-power-users-and-edge-cases/#the-silent-majority-of-users), ya da oylamadan haberdar olmayan mevcut kullanıcılar oy kullanmayabilir.

Bazen oy vermek gerekli bir kilitleyicidir. Ancak, mümkün olduğu kadar, fikir birliği yerine ["fikir birliği arayışı"nı](https://en.wikipedia.org/wiki/Consensus-seeking_decision-making) vurgulayın.

Under a consensus seeking process, community members discuss major concerns until they feel they have been adequately heard. When only minor concerns remain, the community moves forward. "Consensus seeking" acknowledges that a community may not be able to reach a perfect answer. Instead, it prioritizes listening and discussion.

<aside markdown="1" class="pquote"><img src="https://avatars.githubusercontent.com/lee-dohm?s=180" class="pquote-avatar" alt="avatar"> Atom sorunları için oylama sisteminin bulunmamasının bir nedeni, Atom ekibinin her durumda bir oylama sistemini takip etmemesidir. Bazen popüler olmasa bile doğru olanı seçmemiz gerekir. (...) Yapabileceğim ve yapabileceğim tek şey ... toplumu dinlemek benim işim. <p markdown="1" class="pquote-credit"> - [Atomun karar alma süreci] 'nde @ lee-dohm (https://discuss.atom.io/t/prioritize-issues-feature-requests-based-on-voting-system/27642/2) </p></aside>

Aslında bir uzlaşma arama sürecini benimsemeseniz bile, bir proje sorumlusu olarak, insanların dinlediğinizi bilmesi önemlidir. Diğer insanların duyulduklarını hissetmeleri ve endişelerini çözmeyi denemezi görmeleri, hassas durumları dağıtmak için size bir yol verir. Ardından, kelimelerinizi eylemlerle devam ettirin.

Don't rush into a decision for the sake of having a resolution. Make sure that everybody feels heard and that all information has been made public before moving toward a resolution.

### Sohbeti eylem odaklı tutun

Tartışma önemlidir, ancak üretken ve üretken olmayan konuşmalar arasında büyük bir fark vardır.

Aktif olarak çözüme doğru hareket ettiği sürece tartışmayı teşvik edin. Konuşmanın durgunlaştığı veya konu dışı olduğu, atışmaların kişisel olduğu veya insanların küçük ayrıntılar hakkında titizlik yaptığı açıksa, bunu kapatma zamanı gelmiş demektir.

Bu konuşmaların devam etmesine izin vermek yalnızca eldeki sorun için değil, topluluğunuzun sağlığı için de kötüdür. Bu tür konuşmalara izin verildiğini veya hatta teşvik edildiğini bildiren bir mesaj gönderir ve insanları gelecekteki sorunları dile getirmeleri veya çözmeleri konusunda cesaretlerini kırar.

With every point made by you or by others, ask yourself, *"How does this bring us closer to a resolution?"*

Konuşma çözülmeye ulaştıysa, sohbeti yeniden odaklamak için gruba *"Bundan sonra hangi adımları atmalıyız?"* diye sorun.

Bir konuşma açıkça bir yere gitmiyorsa, yapılacak net bir işlem yoksa veya uygun bir işlem yapılmamışsa, sorunu kapatın ve neden kapattığınızı açıklayın.

<aside markdown="1" class="pquote"><img src="https://avatars.githubusercontent.com/kfogel?s=180" class="pquote-avatar" alt="avatar"> Bir başlığı, baskı yapmadan sonuca doğru yönlendirmek bir sanattır. İnsanları zamanlarını boşa harcamayı bırakmalarına ya da söyleyecek yapıcı bir şeyleri olmadıkça göndermemelerini istemek için uyarmak işe yaramayacaktır. (...) Bunun yerine, daha fazla ilerleme için şartlar önermek zorundasınız: insanlara bir rota verin, istediğiniz sonuçlara götürecek bir yol verin, ancak davranışınızı dikte eder gibi konuşmadan. <p markdown="1" class="pquote-credit"> - @kfogel, [_Producing OSS_] (https://producingoss.com/en/producingoss.html#common-pitfalls) </p></aside>

### Pick your battles wisely

Context is important. Consider who is involved in the discussion and how they represent the rest of the community.

Topluluktaki herkes bu sorunla ilgili mi, hatta uğraştı mı? Yoksa yalnız bir baş belası mı? Yalnızca aktif sesleri değil, sessiz topluluk üyelerini de göz önünde bulundurmayı unutma.

If the issue does not represent the broader needs of your community, you may just need to acknowledge the concerns of a few people. If this is a recurring issue without a clear resolution, point them to previous discussions on the topic and close the thread.

### Topluluk için eşitlik bozucu tanımlayın

İyi bir tutum ve net iletişim ile çoğu zor durum çözülebilir. Bununla birlikte, üretken bir konuşmada bile, nasıl devam edileceğine dair bir fikir ayrılığı olabilir. Bu gibi durumlarda, eşitlik bozucu olarak görev yapabilecek bir kişi veya grubu tanımlayın.

Projenin ana sorumlusu bir eşitlik bozucu olabilir veya oylamaya dayalı bir karar veren küçük bir grup insan olabilir. İdeal olarak, kullanmak zorunda kalmadan önce bir GOVERNANCE dosyasında bir eşitlik bozucu ve ilişkili işlemi tanımlayın.

Eşitlik bozucu son bir çare olmalı. Bölücü konular topluluğunuzun büyümesi ve öğrenmesi için bir fırsattır. Bu fırsatları benimseyin ve mümkün olan her yerde bir çözüme geçmek için ortak bir süreç kullanın.

## Community is the ❤️ of open source

Sağlıklı, gelişen topluluklar her hafta açık kaynağa dökülen binlerce saati besliyor. Katkıda bulunan birçok kişi, diğer insanlara açık kaynak üzerinde çalışmanın veya çalışmamanın nedeni olarak ilham veriyor. Bu güce yapıcı olarak nasıl dokunulacağını öğrenerek, dışarıdaki birisinin unutulmaz bir açık kaynak deneyimine sahip olmasına yardımcı olacaksınız.
