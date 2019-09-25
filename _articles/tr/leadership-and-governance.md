---
lang: tr
title: Liderlik ve Yönetim
description: Growing open source projects can benefit from formal rules for making
  decisions.
class: leadership
toc:
  understanding-governance-for-your-growing-project: Büyüyen projeniz için yönetimi
    anlama
  what-are-examples-of-formal-roles-used-in-open-source-projects: Açık kaynaklı projelerde
    kullanılan resmi rol örnekleri nelerdir?
  how-do-i-formalize-these-leadership-roles: How do I formalize these leadership roles?
  when-should-i-give-someone-commit-access: Ne zaman birine commit izni vermeliyim?
  what-are-some-of-the-common-governance-structures-for-open-source-projects: What
    are some of the common governance structures for open source projects?
  do-i-need-governance-docs-when-i-launch-my-project: Projemi başlattığımda yönetim
    belgelerine ihtiyacım var mı?
  what-happens-if-corporate-employees-start-submitting-contributions: What happens
    if corporate employees start submitting contributions?
  do-i-need-a-legal-entity-to-support-my-project: Do I need a legal entity to support
    my project?
order: '6'
image: "/assets/images/cards/leadership.png"
related:
- örnek uygulamaları
- ölçümler
---

## Büyüyen projeniz için yönetimi anlama

Projeniz büyüyor, insanlar dahil olmaya başladı ve siz bu şeyi sürdürmeye kararlısınız. Bu aşamada, düzenli proje katılımcılarını iş akışınıza nasıl dahil edeceğinizi, örneğin birine giriş izni verilmesini veya topluluk tartışmalarını nasıl çözüleceğini merak ediyor olabilirsiniz. Sorularınız varsa, cevaplarımız da var.

## What are examples of formal roles used in open source projects?

Birçok proje katılımcı rolleri ve tanınması için ortak benzer bir yapı izler.

Bu rollerin aslında ne anlama geldiği tamamen size kalmış bir şey. İşte size de tanıdık gelebilecek rollerin birkaçı:

- **Sorumlu (maintainer)**
- **Katkıda bulunan (contributor)**
- **Ekip üyesi**

**Bazı projeler için, "sorumlular"** projeye giriş hakkı olan projedeki tek kişilerdir. Diğer projelerde, onlar sadece README'de listelenen insanlardır.

Bir sorumlu projeniz için kod yazan bir kişi olması gerekmez. Projenizi değiştirmek için çok fazla iş yapan veya projeyi başkalarına daha erişilebilir kılan yazılı belgeler olabilir. Günlük olarak ne yaptıklarından bağımsız olarak, bir sorumlu muhtemelen proje yönünden sorumluluk duyan ve geliştirmeye kendini adamış bir kişidir.

**"Katkıda bulunan"** , bir sorun veya çekme isteği hakkında yorum yapan, projeye değer katan insanlar (bu, sorunları birleştiren, kod yazan veya etkinlik düzenleyen) veya birleştirilmiş PR'ı olan herkes (belki de en dar tanımı katkıda bulunan) olabilir.

<aside markdown="1" class="pquote"><img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar"> \[Node.js için\] bir sorun hakkında yorum yapan veya kod gönderen herkes proje topluluğunun bir üyesidir. Onları görebilmek, bir kullanıcı olmaktan katkıda bulunmaya kadar çizgiyi aştıkları anlamına geliyor. <p markdown="1" class="pquote-credit"> - @mikeal, ["Sağlıklı Açık Kaynak"] (https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951) </p></aside>

**“committer” terimi** , belirli bir sorumluluk türü olan commit erişimini diğer katkı şekillerinden ayırmak için kullanılabilir.

Proje rollerinizi dilediğiniz şekilde tanımlayabilmenize rağmen, daha fazla katkı biçimi geliştirmek için [daha geniş tanımları kullanmayı düşünün](../how-to-contribute/#what-it-means-to-contribute). Teknik becerilerinden bağımsız olarak, projenize olağanüstü katkı sağlayan kişileri resmen tanımak için liderlik rollerini kullanabilirsiniz.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  You might know me as the "inventor" of Django...but really I'm the guy who got hired to work on a thing a year after it was already made. (...) People suspect that I'm successful because of my programming skill...but I'm at best an average programmer.
  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## Bu liderlik rollerini nasıl resmileştiririm?

Liderlik rollerini resmileştirmek, insanların sahipliğini hissetmesine yardımcı olur ve diğer topluluk üyelerine kimden yardım isteyenleri söyler.

Daha küçük bir proje için, lider seçmek isimlerini README veya bir CONTRIBUTORS metin dosyasına eklemek kadar basit olabilir.

For a bigger project, if you have a website, create a team page or list your project leaders there. For example, [Postgres](https://github.com/postgres/postgres/) has a [comprehensive team page](https://www.postgresql.org/community/contributors/) with short profiles for each contributor.

If your project has a very active contributor community, you might form a "core team" of maintainers, or even subcommittees of people who take ownership of different issue areas (for example, security, issue triaging, or community conduct). Let people self-organize and volunteer for the roles they're most excited about, rather than assigning them.

<aside markdown="1" class="pquote">\[Biz\] çekirdek takıma birkaç "alt takım" ekliyoruz. Her alt takım belirli bir alana, örneğin dil tasarımına veya kütüphanelere odaklanır. (...) Küresel koordinasyon ve bir bütün olarak proje için güçlü, tutarlı bir vizyon sağlamak için her bir alt ekip, çekirdek ekibin bir üyesi tarafından yönetilir. <p markdown="1" class="pquote-credit"> - ["Rust Yönetişim RFC"] (https://github.com/rust-lang/rfcs/blob/master/text/1068-rust-governance.md) </p></aside>

Liderlik ekipleri projeyi tartışmak için (Gitter veya Google Hangout'ta olduğu gibi) belirlenmiş bir kanal oluşturmak (IRC'deki gibi) veya düzenli olarak buluşmak isteyebilir. Hatta başkalarının dinleyebilmesi için bu toplantıları halka açabilirsiniz. Örneğin [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby) [her hafta çalışma saatlerinde yayın yapar yapar](https://github.com/cucumber/cucumber-ruby/blob/master/CONTRIBUTING.md#talking-with-other-devs) .

Liderlik rolleri belirledikten sonra, insanların onlara nasıl ulaşabileceğini belgelemeyi unutmayın! Projenizde birisinin nasıl sorumlu olabileceği ya da bir alt komiteye katılabileceği konusunda net bir süreç belirleyin ve bunu GOVERNANCE.md'inize yazın.

[Vossibility](https://github.com/icecrime/vossibility-stack) gibi araçlar, projeye kimin katkı sağladığını (ya da yapmadığını) izlemenize yardımcı olabilir. Bu bilginin belgelenmesi, topluluk sahiplerinin, kararlarını özel olarak veren bir klik olduğuna inanmalarını engeller.

Finally, if your project is on GitHub, consider moving your project from your personal account to an Organization and adding at least one backup admin. [GitHub Organizations](https://help.github.com/articles/creating-a-new-organization-account/) make it easier to manage permissions and multiple repositories and protect your project's legacy through [shared ownership](../building-community/#share-ownership-of-your-project).

## Ne zaman birine commit izni vermeliyim?

Bazı insanlar katkıda bulunan herkese commit yetkisi vermeniz gerektiğini düşünüyor. Bunu yapmak, daha fazla kişiyi projenizin sahipliğini hissetmeye teşvik edebilir.

Öte yandan, özellikle daha büyük, daha karmaşık projeler için, yalnızca kendilerini kanıtlayan kişilere commit hakkı vermek isteyebilirsiniz. Bunu yapmanın doğru bir yolu yok - sizi en rahat ettiren şeyi yapın!

Projeniz GitHub’daysa, belirli bir dala kimin ve hangi şartlar altında kod gönderebileceğini yönetmek için [korumalı dalları](https://help.github.com/articles/about-protected-branches/) kullanabilirsiniz.

<aside markdown="1" class="pquote"><img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar"> Birisi size bir PR gönderdiğinde, projenize erişmelerini sağlayın. İlk başta inanılmaz derecede aptalca görünse de, bu stratejiyi kullanmak GitHub’ın gerçek gücünü ortaya çıkarmanıza izin verecektir. (...) İnsanlar bir kez giriş yaptıklarında, yamalarının bozulmadan kalmasından endişe etmiyorlar ... ... daha çok çalışmalarına neden oluyor. <p markdown="1" class="pquote-credit"> - @felixge, ["The Pull Request Hack"] (https://felixge.de/2013/03/11/the-pull-request-hack.html) </p></aside>

## What are some of the common governance structures for open source projects?

There are three common governance structures associated with open source projects.

- **BDFL:** BDFL (Benevolent Dictator for Life) "Yaşam için Yardımcı Diktatör" anlamına gelir. Bu yapı altında, bir kişinin (genellikle projenin ilk yazarı) tüm büyük proje kararları hakkında kesin sözleri vardır. [Python](https://github.com/python) klasik bir örnektir. Daha küçük projeler muhtemelen varsayılan olarak BDFL'dir, çünkü yalnızca bir veya iki koruyucu vardır. Bir şirketten kaynaklanan bir proje de BDFL kategorisine girebilir.

- **Meritokrasi:** **(Not: "meritokrasi" terimi, bazı topluluklar için olumsuz çağrışımlar taşır ve özellikle [karmaşık bir sosyal ve politik tarihe sahip](http://geekfeminism.wikia.com/wiki/Meritocracy) ülkelerde.)** Bir meritokrasi kapsamında, aktif proje katılımcılarına ("sahiplik" gösterenler) resmi bir karar verme rolü verilir. Kararlar genellikle saf oy birliği ile yapılır. Meritokrasi kavramı [Apache Vakfı](https://www.apache.org/) tarafından öncülük edildi; [tüm Apache projeleri](https://www.apache.org/index.html#projects-list) meritokrasilerdir. Katkılar, bir şirketi değil, yalnızca kendilerini temsil eden kişiler tarafından yapılabilir.

- **Liberal contribution:** Under a liberal contribution model, the people who do the most work are recognized as most influential, but this is based on current work and not historic contributions. Major project decisions are made based on a consensus seeking process (discuss major grievances) rather than pure vote, and strive to include as many community perspectives as possible. Popular examples of projects that use a liberal contribution model include [Node.js](https://foundation.nodejs.org/) and [Rust](https://www.rust-lang.org/).

Which one should you use? It's up to you! Every model has advantages and trade-offs. And although they may seem quite different at first, all three models have more in common than they seem. If you're interested in adopting one of these models, check out these templates:

- [BDFL model template](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
- [Meritocracy model template](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
- [Node.js's liberal contribution policy](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## Projemi başlattığımda yönetim belgelerine ihtiyacım var mı?

Projenizin yönetimini şekillendirmek için doğru zaman yok, ancak topluluk dinamiklerini belirlendikten sonra tanımlamak çok daha kolay. Açık kaynak yönetimi ile ilgili en iyi (ve en zor) kısım, toplum tarafından şekillendirilmesidir!

Bununla birlikte, bazı erken hazırlanmış belgeler kaçınılmaz olarak projenizin yönetimine katkıda bulunacaktır, bu yüzden ne yapabileceğinizi yazmaya başlayın. Örneğin, projenizin başlangıcında bile davranışa ilişkin net beklentileri veya katkıda bulunan sürecin nasıl çalıştığını tanımlayabilirsiniz.

Açık kaynak kodlu bir projeyi başlatmakta olan bir şirketin bir parçasıysanız, şirketinizin projeyi sürdürmek ve ilerletmek için nasıl bir karar vereceğini önceden iç tartışmaya açmaya değer. Ayrıca, şirketinizin projeye nasıl dahil olacağına (veya olmayacağına) açık bir şekilde açıklamak isteyebilirsiniz.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  We assign small teams to manage projects on GitHub who are actually working on these at Facebook. For example, React is run by a React engineer.
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["An inside look at open source at Facebook"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## What happens if corporate employees start submitting contributions?

Successful open source projects get used by many people and companies, and some companies may eventually have revenue streams eventually tied to the project. For example, a company may use the project's code as one component in a commercial service offering.

Proje yaygınlaştıkça, konusunda uzmanlığı olan kişilerden daha fazla rağbet görüyor - onlardan biri olabilirsiniz! - ve bazen projede yaptıkları iş için par alabilirsiniz.

It's important to treat commercial activity as normal and as just another source of development energy. Paid developers shouldn't get special treatment over unpaid ones, of course; each contribution must be evaluated on its technical merits. However, people should feel comfortable engaging in commercial activity, and feel comfortable stating their use cases when arguing in favor of a particular enhancement or feature.

"Commercial" is completely compatible with "open source". "Commercial" just means there is money involved somewhere - that the software is used in commerce, which is increasingly likely as a project gains adoption. (When open source software is used as part of a non-open-source product, the overall product is still "proprietary" software, though, like open source, it might be used for commercial or non-commercial purposes.)

Diğer herkes gibi, ticari olarak motive edilmiş geliştiriciler, katkılarının niteliği ve niceliği ile projede etki kazanabilirler. Açıkçası, zamanı için ödeme yapan bir geliştirici, ödeme almayan birinden daha fazlasını yapabilir, ancak sorun değil: ödeme, birisinin ne kadarını etkileyebilecek olası birçok faktörden yalnızca biridir. Proje tartışmalarınızda, insanların bu katkıları yapmalarını sağlayan dış etkenlere değil, katkılara odaklanmaya devam edin.

## Do I need a legal entity to support my project?

You don't need a legal entity to support your open source project unless you're handling money.

For example, if you want to create a commercial business, you'll want to set up a C Corp or LLC (if you're based in the US). If you're just doing contract work related to your open source project, you can accept money as a sole proprietor, or set up an LLC (if you're based in the US).

If you want to accept donations for your open source project, you can set up a donation button (using PayPal or Stripe, for example), but the money won't be tax-deductible unless you are a qualifying nonprofit (a 501c3, if you're in the US).

Many projects don't wish to go through the trouble of setting up a nonprofit, so they find a nonprofit fiscal sponsor instead. A fiscal sponsor accepts donations on your behalf, usually in exchange for a percentage of the donation. [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](https://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/), [Linux Foundation](https://www.linuxfoundation.org/projects) and [Open Collective](https://opencollective.com/opensource) are examples of organizations that serve as fiscal sponsors for open source projects.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  Our goal is to provide an infrastructure that communities can use to be self sustainable, thus creating an environment where everyone — contributors, backers, sponsors — get concrete benefits out of it.
  <p markdown="1" class="pquote-credit">
— @piamancini, ["Moving beyond the charity framework"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141)
  </p>
</aside>

Projeniz belirli bir dil veya ekosistem ile yakından ilişkiliyse, birlikte çalışabileceğiniz ilgili bir yazılım kuruluşu da olabilir. Örneğin, [Python Software Foundation](https://www.python.org/psf/) desteği yardımcı [PyPI](https://pypi.org/) , Python paket yöneticisini ve [node.js Vakfı](https://foundation.nodejs.org/) desteği yardımcı [Express.js](https://expressjs.com/) , bir Node tabanlı bir çerçeve.
