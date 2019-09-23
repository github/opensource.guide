---
lang: tr
title: The Legal Side of Open Source
description: Açık kaynağın yasal yönü hakkında hiç merak ettiğiniz her şey ve merak
  etmediğiniz birkaç şey.
class: legal
toc:
  why-do-people-care-so-much-about-the-legal-side-of-open-source: İnsanlar neden açık
    kaynağın yasal tarafını bu kadar önemsiyorlar?
  are-public-github-projects-open-source: Açık GitHub projeleri açık kaynak mı?
  just-give-me-the-tldr-on-what-i-need-to-protect-my-project: Sadece bana TL;DR projemi
    korumak için neye ihtiyacım olduğuna.
  which-open-source-license-is-appropriate-for-my-project: Which open source license
    is appropriate for my project?
  what-if-i-want-to-change-the-license-of-my-project: What if I want to change the
    license of my project?
  does-my-project-need-an-additional-contributor-agreement: Does my project need an
    additional contributor agreement?
  what-does-my-companys-legal-team-need-to-know: What does my company’s legal team
    need to know?
order: '10'
image: "/assets/images/cards/legal.png"
related:
- katkıda bulun
- leadership
---

## Açık kaynağın yasal etkilerini anlama

Yaratıcı çalışmalarınızı dünyayla paylaşmak heyecan verici ve faydalı bir deneyim olabilir. Ayrıca endişelenmeniz gereken bilmediğiniz bir sürü yasal şey anlamına da gelebilir. Neyse ki, sıfırdan başlamak zorunda değilsiniz. Yasal ihtiyaçlarınızı karşıladık. (Kazma vurmadan önce, [yasal uyarılarımızı](/notices/) okuduğunuzdan emin olun.)

## İnsanlar neden açık kaynağın yasal tarafını bu kadar önemsiyorlar?

Sormanıza sevindim! Yaratıcı bir çalışma yaptığınızda (yazı, grafik veya kod gibi), bu varsayılan olarak özel telif hakkı altındadır. Diğer bir deyişle, yasa, çalışmanızın yazarı olarak, başkalarının onunla neler yapabileceği konusunda bir sözünüz olduğunu varsayar.

Genel olarak, bu çalışmalarınızı dava riski altında olmadan hiç kimsenin kullanamayacağı, kopyalayamayacağı, dağıtamayacağı veya değiştiremeyeceği anlamına gelir.

Open source is an unusual circumstance, however, because the author expects that others will use, modify, and share the work. But because the legal default is still exclusive copyright, you need a license that explicitly states these permissions.

Açık kaynak lisansı uygulamazsanız, projenize katkıda bulunan herkes, çalışmalarının münhasır bir telif hakkı sahibi olur. Bu, hiç kimsenin katkılarını kullanamayacağı, kopyalayamayacağı, dağıtamayacağı veya değiştiremeyeceği anlamına gelir - ve bu “hiç kimse” sizi de içerir.

Finally, your project may have dependencies with license requirements that you weren't aware of. Your project's community, or your employer's policies, may also require your project to use specific open source licenses. We'll cover these situations below.

## Açık GitHub projeleri açık kaynak mı?

GitHub'da [yeni bir proje oluşturduğunuzda](https://help.github.com/articles/creating-a-new-repository/) , proje kütüphanesini **gizli** veya **açık** hale getirme seçeneğiniz vardır.

![Create repository](/assets/images/legal/repo-create-name.png)

**GitHub projenizi herkese açık hale getirmek, projenizi lisanslamakla aynı değildir.** Genel projeler, başkalarının projenizi görüntülemesine ve düzenlemesine izin veren [GitHub'ın Hizmet Koşulları](https://help.github.com/articles/github-terms-of-service/#f-copyright-and-content-ownership) kapsamındadır, gizli yaparsanız işiniz başkalarına izinsizdir.

If you want others to use, distribute, modify, or contribute back to your project, you need to include an open source license. For example, someone cannot legally use any part of your GitHub project in their code, even if it's public, unless you explicitly give them the right to do so.

## Sadece bana TL;DR projemi korumak için neye ihtiyacım olduğuna.

You're in luck, because today, open source licenses are standardized and easy to use. You can copy-paste an existing license directly into your project.

[MIT](https://choosealicense.com/licenses/mit/) , [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) ve [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) en popüler açık kaynaklı lisanslardır, ancak seçilebilecek başka seçenekler de vardır. [Choosealicense.com'da](https://choosealicense.com/) bu lisansların tam metnini ve nasıl kullanılacağına ilişkin talimatları bulabilirsiniz.

When you create a new project on GitHub, you'll be [asked to add a license](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
  A standardized license serves as a proxy for those without legal training to know precisely what they can and can't do with the software. Unless absolutely required, avoid custom, modified, or non-standard terms, which will serve as a barrier to downstream use of the agency code.
  <p markdown="1" class="pquote-credit">
— @benbalter, ["Everything a government attorney needs to know about open source software licensing"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## Which open source license is appropriate for my project?

Boş bir sayfadan başlıyorsanız, [MIT Lisansı](https://choosealicense.com/licenses/mit/) ile yanlış yapmak zordur. Kısa, anlaşılması çok kolaydır ve telif hakkı uyarınız da dahil olmak üzere herhangi bir lisansın bir kopyasını sakladığı sürece herhangi bir şey yapmasına izin verir. Gerekirse, projeyi farklı bir lisans altında yayınlayabilirsiniz.

Otherwise, picking the right open source license for your project depends on your objectives.

Projenizin büyük olasılıkla (veya olacak) **bağımlılıkları var**. Örneğin, bir Node.js projesi yapıyorsanız, muhtemelen Node Paket Yöneticisi'nden (npm) kitaplıkları kullanırsınız. Bağlandığınız bu kütüphanelerin her birinin kendi açık kaynaklı lisansı olacaktır. Lisanslarının her biri "izin verilebilir" ise (kamuya, alt lisans lisansı için herhangi bir şart olmaksızın, kullanma, değiştirme ve paylaşma izni verir), istediğiniz herhangi bir lisansı kullanabilirsiniz. Yaygın izin verilen lisanslar MIT, Apache 2.0, ISC ve BSD'dir.

Öte yandan, bağımlılıklarınızın herhangi birindeki lisansları "güçlü copyleft" ise (aynı lisansı aynı lisansı kullanma şartı altında da halka açık aynı izinler verirse), projeniz aynı lisansı kullanmak zorunda kalacaktır. Ortak güçlü copyleft lisanslarına GPLv2, GPLv3 ve AGPLv3 dahildir.

Ayrıca, projenizi kullanacağını ve projenize katkıda bulunacağını umduğunuz **toplulukları** göz önünde bulundurmak isteyebilirsiniz:

- **Do you want your project to be used as a dependency by other projects?** Probably best to use the most popular license in your relevant community. For example, [MIT](https://choosealicense.com/licenses/mit/) is the most popular license for [npm libraries](https://libraries.io/search?platforms=NPM).
- **Projenizin büyük işletmelere hitap etmesini ister misiniz?** Büyük bir işletme muhtemelen tüm katılımcılardan açık bir patent lisansı isteyecektir. Bu durumda, [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) size (ve onlara) uygundur.
- **Projenizin, yaptıkları katkıların kapalı kaynak kodlu yazılımlarda kullanılmasını istemeyenlere hitap etmesini ister misiniz?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) veya (kapalı kaynak hizmetlerine katkıda bulunmak istemiyorlarsa), [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) sizin için iyidir.

**Şirketinizin** açık kaynaklı projeleri için özel lisanslama gereksinimleri olabilir. Örneğin, izin verilen bir lisans gerektirebilir, böylece şirket projenizi şirketin kapalı kaynaklı ürününde kullanabilir. Veya şirketiniz güçlü bir copyleft lisansı ve ek bir katkı sözleşmesi (aşağıya bakınız) isteyebilir, böylece yalnızca şirketiniz ve başka hiç kimse projenizi kapalı kaynaklı yazılımda kullanamaz. Yada şirketiniz, herhangi biri belirli bir lisanslama stratejisi gerektirebilecek standartlar, sosyal sorumluluk veya şeffaflıkla ilgili belirli ihtiyaçlara sahip olabilir. [Şirketinizin hukuk departmanıyla](#what-does-my-companys-legal-team-need-to-know) konuşun.

GitHub'da yeni bir proje oluşturduğunuzda, size bir lisans seçme seçeneği sunulur. Yukarıda belirtilen lisanslardan birinin dahil edilmesi GitHub projenizi açık kaynak yapacaktır. Başka seçenekler görmek isterseniz, projeniz için doğru lisansı bulmak için [choosealicense.com](https://choosealicense.com) adresini ziyaret edin, proje [ yazılım](https://choosealicense.com/non-software/) projesi olmasa bile.

## What if I want to change the license of my project?

Çoğu projenin lisansları değiştirmesi gerekmez. Ancak zaman zaman koşullar değişebilir.

Örneğin, projeniz büyüdükçe bağımlılık veya kullanıcı sayısı artar veya şirketiniz, herhangi biri farklı bir lisans gerektirebilecek veya isteyebilecek strateji değişikliğine gidebilir. Ayrıca, projenizi baştan itibaren lisanslamayı ihmal ettiyseniz, bir lisans eklemek etkili bir şekilde lisans değiştirmekle aynıdır. Projenizin lisansını eklerken veya değiştirirken göz önünde bulundurmanız gereken üç temel husus vardır:

**Bu iş karmaşıktır.** Lisans uygunluğunu ve uyumluluğunu belirlemek ve telif hakkını elinde tutan kişiler çok hızlı bir şekilde karmaşık ve kafaları karışık olabilir. Yeni sürümler ve katkılar için yeni ama uyumlu bir lisansa geçmek, tüm mevcut katkılardan vazgeçmekten farklıdır. Lisans değiştirme isteğinin ilk ipucuna hukuk ekibinizi dahil edin. Bir lisans değişikliği için projenizin telif hakkı sahiplerinden izin almış olsanız veya izin alsanız bile, değişikliğin projenizin diğer kullanıcıları ve katkıda bulunanları üzerindeki etkisini göz önünde bulundurun. Projeniz için, paydaşlarınızla net iletişim ve istişarelerde daha sorunsuz bir şekilde ilerleyebilecek olan bir lisans değişikliğini projeniz için bir “yönetişim etkinliği” olarak düşünün. Bunların hepsi projeniz için başlangıçtan itibaren uygun bir lisans seçmek ve kullanmak için yeterince sebeplerdir!

**Your project's existing license.** If your project's existing license is compatible with the license you want to change to, you could just start using the new license. That's because if license A is compatible with license B, you'll comply with the terms of A while complying with the terms of B (but not necessarily vice versa). So if you're currently using a permissive license (e.g., MIT), you could change to a license with more conditions, so long as you retain a copy of the MIT license and any associated copyright notices (i.e., continue to comply with the MIT license's minimal conditions). But if your current license is not permissive (e.g., copyleft, or you don't have a license) and you aren't the sole copyright holder, you couldn't just change your project's license to MIT. Essentially, with a permissive license the project's copyright holders have given permission in advance to change licenses.

**Projenizin mevcut telif hakkı sahipleri.** Projenize katkıda bulunan tek kişi iseniz, o zaman siz veya şirketiniz projenin tek telif hakkı sahibisiniz. Sizin veya şirketinizin istediği lisansı ekleyebilir veya değiştirebilirsiniz. Aksi takdirde, lisansları değiştirmek için anlaşma yapmanız gereken başka telif hakkı sahipleri olabilir. Onlar kim? Projenizde katkısı olan kişiler başlamak için iyi bir yerdir. Ancak bazı durumlarda telif hakkı bu kişilerin işverenleri tarafından verilecektir. Bazı durumlarda insanlar sadece asgari katkı sağlayacaklardır, ancak bazı kod satırları altındaki katkıların telif haklarına tabi olmadığına dair kesin ve hızlı bir kural yoktur. Ne yapalım? Duruma göre değişir. Göreceli olarak küçük ve genç bir proje için, mevcut tüm katılımcılardan bir sorun ya da çekme talebinde lisans değişikliğini kabul etmelerini sağlamak mümkün olabilir. Büyük ve uzun ömürlü projeler için birçok katılımcı ve hatta mirasçıları aramanız gerekebilir. Mozilla, Firefox, Thunderbird ve ilgili yazılımları kaldırmak için yıllarını (2001-2006) aldı.

Alternatif olarak, katkıda bulunanlara, mevcut açık kaynak lisansınız tarafından izin verilenlerin ötesinde, belirli koşullar altında belirli lisans değişikliklerinde önceden (ek bir anlaşma yaparak - aşağıya bakınız) karar vermiş olabilirsiniz. Bu, değişen lisansların karmaşıklığını biraz değiştirir. Önceden avukatlarınızdan daha fazla yardıma ihtiyacınız olacak ve bir lisans değişikliği yaparken projenizin paydaşlarıyla açıkça iletişim kurmak isteyeceksiniz.

## Does my project need an additional contributor agreement?

Muhtemelen yoktur. Açık kaynaklı projelerin büyük çoğunluğu için açık kaynaklı bir lisans, hem gelen (katkıda bulunanlardan) hem de giden (diğer katkıda bulunanlar ve kullanıcılar için) lisans olarak açık şekilde hizmet vermektedir. Projeniz GitHub'daysa, GitHub Hizmet Şartları "inbound = outbound" ı [açık varsayılan yapar](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license) .

Ek bir katılımcı sözleşmesi - genellikle Katılımcı Lisans Sözleşmesi (CLA) olarak adlandırılır - proje sahipleri için idari işler yaratabilir. Bir anlaşmanın ne kadar iş gerektirdiği proje ve uygulamaya bağlıdır. Basit bir anlaşma, katkıda bulunanların, bir tıklamayla, proje açık kaynak lisansı kapsamında katkıda bulunmak için gerekli haklara sahip olduklarını onaylamalarını gerektirebilir. Daha karmaşık bir anlaşma, katkıda bulunanların işverenlerinin yasal incelemesini ve imzalarını gerektirebilir.

Also, by adding "paperwork" that some believe is unnecessary, hard to understand, or unfair (when the agreement recipient gets more rights than contributors or the public do via the project's open source license), an additional contributor agreement may be perceived as unfriendly to the project's community.

<aside markdown="1" class="pquote"><img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar"> Node.js. için CLA'yı kaldırdık. Bunu yapmak, Node.js katılımcısı için giriş engelini azalttı ve böylece katılımcı tabanını genişletti. <p markdown="1" class="pquote-credit"> - @bcantrill, ["Node.js Katkıları Genişletmek"] (https://www.joyent.com/blog/broadening-node-js-contributions) </p></aside>

Some situations where you may want to consider an additional contributor agreement for your project include:

- Avukatlarınız açık kaynak lisanslarını yeterli bulmadıklarından (öyle olsa bile!)  tüm katılımcıları katılımcı sözleşmelerimi açıkça kabul etmek (çevrimiçi veya çevrimdışı *işaretlemelerini*) isteyebilir. Bu tek endişe ise, projenin açık kaynaklı lisansını onaylayan bir katılımcı sözleşmesi yeterli olmalıdır. [JQuery Bireysel Katılımcı Lisans Sözleşmesi](https://contribute.jquery.org/CLA/) , hafif bir ek katılımcı sözleşmesi için iyi bir örnektir. Bazı projeler için, [Developer Certificate of Origin](https://github.com/probot/dco) alternatif olabilir.
- Projeniz, açık bir patent hibesi (MIT gibi) içermeyen bir açık kaynak lisansı kullanıyor ve bazıları sizi hedeflemek için kullanılabilecek büyük patent portföyleri olan şirketler için çalışabilecek tüm katılımcılardan bir patent hibesine ihtiyacınız var.  [Apache Individual Contributor License Agreement](https://www.apache.org/licenses/icla.pdf)  Apache License 2.0. lisansında bulunan ve çokça kullanılan bir katılımcı sözleşmesidir.
- Projeniz bir copyleft lisansı altında, ancak aynı zamanda projenin tescilli bir versiyonunu da dağıtmanız gerekiyor. Size telif hakkı veren veya size (ancak halka değil) izin veren bir lisans veren her katılımcıya ihtiyacınız olacaktır. [MongoDB Katılımcı Anlaşması](https://www.mongodb.com/legal/contributor-agreement) bu tür bir anlaşma örneğidir.
- You think your project might need to change licenses over its lifetime and want contributors to agree in advance to such changes.

If you do need to use an additional contributor agreement with your project, consider using an integration such as [CLA assistant](https://github.com/cla-assistant/cla-assistant) to minimize contributor distraction.

## What does my company's legal team need to know?

If you're releasing an open source project as a company employee, first, your legal team should know that you're open sourcing a project.

For better or worse, consider letting them know even if it's a personal project. You probably have an "employee IP agreement" with your company that gives them some control of your projects, especially if they are at all related to the company's business or you use any company resources to develop the project. Your company *should* easily give you permission, and maybe already has through an employee-friendly IP agreement or a company policy. If not, you can negotiate (for example, explain that your project serves the company's professional learning and development objectives for you), or avoid working on your project until you find a better company.

**Şirketiniz için bir proje açmaya açıksanız,** kesinlikle onları bilgilendirin. Yasal ekibinizde muhtemelen, şirketin iş gereksinimlerine ve projenizin bağımlılıklarının lisanslarına uymasını sağlama konusundaki uzmanlığına dayalı olarak kullanılacak açık kaynaklı lisans (ve belki de ek katkı sözleşmesi) için politikalar zaten vardır. Olmazsa, sen ve onlar şanslısınız demektir! Hukuk ekibiniz bu olayları çözmek için sizinle birlikte çalışmaya istekli olmalıdır. Göz önünde bulundurulması gereken bazı şeyler:

- **Üçüncü taraf materyali:** Projeniz başkaları tarafından yaratılan bağımlılıklara sahip mi, yoksa başkalarının kodunu içeriyor veya kullanıyor mu? Bunlar açık kaynak ise, malzemelerin açık kaynak lisanslarına uymanız gerekir. Bu, üçüncü taraf açık kaynaklı lisanslarla çalışan bir lisans seçmekle başlar (yukarıya bakın). Projeniz üçüncü taraf açık kaynak materyalini değiştirir veya dağıtırsa, yasal ekibiniz ayrıca üçüncü taraf açık kaynak lisanslarının diğer koşullarını yerine getirdiğinizi bilmek isteyecektir. Projeniz açık kaynak lisansı olmayan başkalarının kodunu kullanıyorsa, büyük olasılıkla üçüncü taraf bakımcılardan [açık kaynak lisansı eklemelerini](https://choosealicense.com/no-license/#for-users) istemeniz ve bunlardan birini alamamanız durumunda, kodlarını kullanmaktan vazgeçmeniz gerekir.

- **Ticari sırlar:** Projede, şirketin genel kullanıma açık olmasını istemediği bir şey olup olmadığını dikkate alın. Öyleyse, gizli tutmak istediğiniz malzemeyi çıkardıktan sonra projenizin geri kalan kısmını kaynak olarak açabilirsiniz.

- **Patentler:** Şirketiniz, projenizin açık kaynak kodlu bir şekilde [kamuya açıklanmasını](https://en.wikipedia.org/wiki/Public_disclosure) sağlayacak bir patent başvurusu yapıyor mu? Ne yazık ki beklemeniz istenebilir (veya şirketten, uygulamanın bilgeliğini yeniden gözden geçirir). Projenize büyük patent portföyüne sahip şirketlerin çalışanlarından katkıda bulunmayı bekliyorsanız, yasal ekibiniz katkıda bulunanlardan (Apache 2.0 veya GPLv3 gibi) açık bir patent ödeneği olan bir lisans  veya ek bir katılımcı sözleşmesini ( yukarıyı bakın) kullanmanızı isteyebilir.

- **Trademarks:** Double check that your project's name [does not conflict with any existing trademarks](../starting-a-project/#avoiding-name-conflicts). If you use your own company trademarks in the project, check that it does not cause any conflicts. [FOSSmarks](http://fossmarks.org/) is a practical guide to understanding trademarks in the context of free and open source projects.

- **Gizlilik:** Projeniz kullanıcılar hakkında veri topluyor mu? Şirket sunucularına "bağlanıyor mu"? Hukuk ekibiniz şirket politikalarına ve dış düzenlemelere uymanıza yardımcı olabilir.

Şirketinizin ilk açık kaynaklı projesini yayınlıyorsanız, yukarıdakiler üstesinden gelmek için fazlasıyla yeterlidir (ancak endişelenmeyin, çoğu proje endişelendirecek bir durum oluşturmayacaktır).

Longer term, your legal team can do more to help the company get more from its involvement in open source, and stay safe:

- **Çalışanlar için katkı politikaları:** Çalışanlarınızın açık kaynaklı projelere nasıl katkıda bulunduğunu belirten bir kurumsal politika geliştirmeyi düşünün. Açık bir politika, çalışanlarınız arasındaki karmaşayı azaltacaktır ve işlerinin bir parçası olarak veya boş zamanlarında, şirketin çıkarlarına açık kaynaklı projelere katkıda bulunmalarına yardımcı olacaktır. Buna iyi bir örnek Rackspace'in [Model IP'si ve Açık Kaynak Katkı Politikası'dır](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/) .

<aside markdown="1" class="pquote"><img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar"> Bir yama ile ilgili IP'nin serbest bırakılması, çalışanın bilgi birikimini ve itibarını arttırır. Şirketin bu çalışanın gelişimine yatırım yaptığını ve bir güçlendirme ve özerklik duygusu yarattığını göstermektedir. Tüm bu faydalar ayrıca daha yüksek moral ve daha iyi bir çalışanın kalmasına yol açmaktadır. <p markdown="1" class="pquote-credit"> - @vanl, ["Bir Model IP ve Açık Kaynak Katkı Politikası"] (https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/) </p></aside>

- **Neyi yayınlama:** [(Neredeyse) her şey?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) Eğer yasal ekibiniz şirketinizin açık kaynaklı stratejisini anlıyor ve yatırım yapıyorsa, çabalarınızı engellemekten ziyade en iyi şekilde yardım edebileceklerdir.
- **Uyumluluk:** Şirketiniz herhangi bir açık kaynaklı proje yayınlamamış olsa bile, başkalarının açık kaynaklı yazılımını kullanır. [Farkındalık ve süreç](https://www.linuxfoundation.org/blog/2015/06/why-companies-that-use-open-source-need-a-compliance-program/) baş ağrısını, ürün gecikmelerini ve davaları önleyebilir.

<aside markdown="1" class="pquote">Kuruluşların hem \["izin verilen" hem de "copyleft"\] kategorilerine uyan bir lisans ve uyum stratejisi olmalıdır. Bu, alt bileşenler ve bağımlılıklar dahil, kullanmakta olduğunuz açık kaynaklı yazılım için geçerli olan lisans terimlerinin kaydını tutmakla başlar. <p markdown="1" class="pquote-credit"> - Heather Meeker, ["Açık Kaynak Kodlu Yazılım: Uygunluk Esasları ve En İyi Uygulamalar"] (https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/) </p></aside>

- **Patents:** Your company may wish to join the [Open Invention Network](https://www.openinventionnetwork.com/), a shared defensive patent pool to protect members' use of major open source projects, or explore other [alternative patent licensing](https://www.eff.org/document/hacking-patent-system-2016).
- **Yönetişim:** Özellikle bir projeyi [şirket dışındaki](../leadership-and-governance/#do-i-need-a-legal-entity-to-support-my-project) bir {a2}tüzel kişiliğe{/a2} taşımanın ne zaman anlamlı olacağı.
