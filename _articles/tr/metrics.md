---
lang: tr
title: Açık Kaynak Ölçümleri
description: Açık kaynaklı projenizin başarısını ölçüp izleyerek gelişmesine yardımcı olmak için bilinçli kararlar alın.
class: metrics
order: 9
image: "/assets/images/cards/metrics.png"
related:
  - finding
  - best-practices
---

## Neden her şeyi ölçmeli?

Veriler akıllıca kullanıldığında, açık kaynaklı bir geliştirici olarak daha iyi kararlar almanıza yardımcı olabilir.

Daha fazla bilgi ile şunları yapabilirsiniz:

* Kullanıcıların yeni bir özelliğe verdiği tepkiyi anlama
* Yeni kullanıcıların nereden geldiğini bulma
* Bir aykırı kullanım senaryosunu veya işlevselliğini belirleme ve destekleyip desteklememeye karar verme
* Projenizin popülaritesini ölçme
* Projenizin nasıl kullanıldığını anlama
* Sponsorluklar ve bağışlar yoluyla para toplama

Örneğin, [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md) ekibi Google Analytics"in çalışmalarına öncelik vermelerine yardımcı olduğunu keşfediyor:

> Homebrew ücretsiz olarak verilmektedir ve tamamen boş zamanlarında gönüllüler tarafından geliştirilmektedir. Sonuç olarak, gelecekteki özellikleri en iyi nasıl tasarlayacağınıza ve mevcut çalışmaya öncelik vereceğimize karar vermek için Homebrew kullanıcılarının detaylı kullanıcı çalışmalarını yapacak kaynaklara sahip değiliz. Anonim toplam kullanıcı analitiği, insanların Homebrew'i nasıl, nerede ve ne zaman kullandıklarına dayanarak düzeltmeleri ve özellikleri öncelik sırasına koymamızı sağlar.

Popülerlik her şey değildir. Herkes farklı nedenlerden dolayı açık kaynağa dahil oluyor. Açık kaynak kod geliştiricisi olarak hedefiniz çalışmanızı göstermekse, kodunuz konusunda şeffaf olmaksa veya sadece eğlenmek ise, metrikler sizin için önemli olmayabilir.

Eğer daha derin bir seviyede projenizi anlamak isteğiniz _varsa_, projenizin etkinliğini analiz etmek için yolunu bulmak için okumaya devam edin.

## Keşif

Herhangi biriniz projenizi kullanmadan veya katkıda bulunmadan önce, onun var olduğunu bilmeleri gerekir. Kendinize sorun: _insanlar bu projeden haberdarlar mı?_

![Traffic graph](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

Projeniz GitHub'da barındırıyorsanız, projenizi kaç kişinin gördüğünü ve nereden geldikleri [görüntüleyebilirsiniz](https://help.github.com/articles/about-repository-graphs/#traffic). Projenizin sayfasından "Insights" menüsünü, ardından "Traffic" alt menüsünü tıklayın. Bu sayfada şunları görebilirsiniz:

* **Toplam sayfa görüntüleme:** Projenizin kaç kez görüntülendiğini gösterir

* **Toplam tekil ziyaretçi:** Projenizi kaç kişinin görüntülediğini gösterir

* **Yönlendiren siteler:** Ziyaretçilerin nereden geldiğini gösterir. Bu ölçüm, hedef kitlenize nerede ulaşacağınızı ve tanıtım çalışmalarınızın işe yarayıp yaramadığını çözmenize yardımcı olabilir.

* **Popüler içerik:** Ziyaretçilerin projenizde nereye gittiğini, sayfa görünümlerine ve benzersiz ziyaretçilere göre ayrıldığını gösterir.

[GitHub yıldızları](https://help.github.com/articles/about-stars/) ayrıca temel bir popülarite ölçüsü sağlamaya yardımcı olabilir. GitHub yıldızları, indirmeler ve kullanımla mutlaka ilişkilendirilmezken, size kaç kişinin çalışmanızdan haberdar olduğunu söyleyebilirler.

[Belirli yerlerdeki keşfedilebilirliği izlemek](https://opensource.com/business/16/6/pirate-metrics) isteyebilirsiniz: örneğin, Google PageRank, projenizin web sitesinden yönlendirilen trafik veya diğer açık kaynaklı projelerden veya web sitelerinden gelen yönlendirmeler.

## Kullanım

İnsanlar projenizi internet dediğimiz bu vahşi ve çılgın şey üzerinde buluyorlar. İdeal olarak, projenizi gördüklerinde, bir şeyler yapmaya zorlanırlar. Sormak isteyeceğiniz ikinci soru şudur: _insanlar bu projeyi kullanıyorlar mı?_

Projenizi dağıtmak için npm veya RubyGems.org gibi bir paket yöneticisi kullanıyorsanız, projenizin indirmelerini takip edebilirsiniz.

Her paket yöneticisi "indirme" nin biraz farklı bir tanımını olabilir ve indirme işlemleri kurulum veya kullanım ile mutlaka ilişkili değildir, ancak karşılaştırma için bazı temel bilgiler sağlar. Birçok popüler paket yöneticisinde kullanım istatistiklerini izlemek için [Libraries.io](https://libraries.io/) servisini kullanmayı deneyin.

Projeniz GitHub'daysa, tekrar "Trafik" sayfasına gidin. [Klon grafiğini](https://github.com/blog/1873-clone-graphs), projenizin belirli bir günde kaç kez klonlandığını, toplam klonların ve benzersiz klonların karşılaştırmlı hallerini görmek için kullanabilirsiniz.

![Clone graph](/assets/images/metrics/clone_graph.png)

Kullanım, projenizi keşfeden kişi sayısına kıyasla düşükse, göz önünde bulundurulması gereken iki husus vardır. Ya:

* Projeniz kitlenizi başarıyla dönüştüremiyor ya
* Yanlış kitleyi çekiyorsun

Örneğin, projeniz Hacker News'in ön sayfasına girerse, muhtemelen keşifte (trafik) bir artış göreceksiniz, ancak Hacker News'deki herkese ulaştığınız için daha düşük bir dönüşüm oranı göreceksiniz. Ancak, Ruby projeniz bir Ruby konferansında tanıtılıyorsa, hedef kitleden yüksek bir dönüşüm oranı görmeniz daha olasıdır.

Kitlenizin nereden geldiğini anlamaya çalışın ve bu iki sorunun hangisiyle karşılaştığınızı anlamak için proje sayfanızdan geri bildirim isteyin.

İnsanların projenizi kullandığını öğrendikten sonra, onunla ne yaptığını anlamaya çalışmak isteyebilirsiniz. Kodunuzu yazıp özellikleri ekleyerek üzerine mi inşa ediyorlar? Akademik çalışma ya da iş için mi kullanıyorlar?

## Akılda Tutma

İnsanlar projenizi buluyor ve kullanıyorlar. Kendinize sormak isteyeceğiniz bir sonraki soru şudur: _insanlar bu projeye geri dönüş ve katkıda bulunuyor mu?_

Katkıda bulunanlar hakkında düşünmeye başlamak için asla erken değildir. Diğer insanlar girmeden, kendinizi projenizin _popüler olduğu_ (birçok kişi kullanır) ancak _desteklenmez_  sağlıksız bir duruma sokma riskini alırsınız  (talebi karşılamak için yeterli zaman bekletici değil).

Akılda tutulma, daha önce aktif olan katılımcılar eninde sonunda başka şeylere geçeceğinden, [yeni katılımcıların girişini](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2) gerektirir.

Düzenli olarak izlemek isteyebileceğiniz topluluk ölçümleri örnekleri şunlardır:

* **Katkıda bulunan toplam katılımcı sayısı ve komisyon sayısı:** Ne kadar katılımcının bulunduğunu ve kimin ya da daha az aktif olduğunu gösterir. GitHub'da bunu "Insights" -> "Katkıda Bulunanlar" altında görebilirsiniz. Şu anda, bu grafik yalnızca deponun varsayılan koluna bağlı olan katılımcıları sayar.

![Contributor graph](/assets/images/metrics/repo_contributors_specific_graph.png)

* **İlk kez, geçici ve tekrar eden katılımcılar:** Yeni katılımcılar alıp almadığınızı ve geri gelip gelmeyeceklerini izlemenize yardımcı olur. (Sıradan katkıda bulunanlar, az sayıda katkı veren katılımcılardır. Bu, bir katkı, beş katkıdan az veya size kalmış başka bir sayı.) Yeni katılımcılar olmadan, projenizin topluluğu durgun hale gelebilir.

* **Açık işlerin ve PR'lerin sayısı:** Bu sayılar çok yükselirse, sorun giderme ve kod incelemeleri konusunda yardıma ihtiyacınız olabilir.

* **Açılan işlerin ve açılan PR'lerin sayısı:** Açılan sorunlar, birinin projenizi açması için yeterince önemsediği anlamına gelir. Bu sayı zaman içinde artarsa, insanların projenize ilgi duyduğunu gösterir.

* **Katkı türleri:** Örneğin, yazım hatalarını veya hataları düzeltme veya bir konuda yorum yapma.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/arfon?s=180" class="pquote-avatar" alt="avatar">
  Açık kaynak koddan daha fazlasıdır. Başarılı açık kaynaklı projeler, bu değişikliklerle ilgili tartışmalar ile birlikte kod ve dokümantasyon katkılarını içerir.
  <p markdown="1" class="pquote-credit">
- @arfon, ["Açık Kaynağın Şekli"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## Geliştirici etkinliği

Son olarak, projenizin sahiplerinin alınan katkıların hacmini karşılayabildiğinden emin olarak döngüyü kapatmak isteyeceksiniz. Kendinize sormak isteyeceğiniz son soru şudur: _Topluluğumuza cevap veriyor muyum (muyuz)?_

Tepki vermeyen geliştiriciler açık kaynaklı projeler için bir el freni haline gelir. Birisi bir katkı gönderirse, ancak bir geliştiriciden bir geri bildirim gelmezse, cesareti kırılır ve projeden ayrılabilir.

[Mozilla'da yapılan bir araştırma](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177), geliştiricilerin sürdürülebilirlik konusundaki duyarlılığının, tekrar eden katkıları teşvik etmede kritik bir faktör olduğunu öne sürüyor.

Bir sorunun ya da PR talebinin katkısına yanıt vermenizin (veya başka bir geliştiricinin) ne kadar sürdüğünü takip edin. Yanıt vermek, harekete geçmek gerektirmez. Şunu söylemek kadar basit olabilir: _"Gönderiminiz için teşekkürler! Bunu önümüzdeki hafta içinde gözden geçireceğim."_

Ayrıca, katkı sürecindeki aşamalar arasında geçiş için geçen süreyi ölçebilirsiniz, örneğin:

* Bir sorunun açık kaldığı ortalama süre
* Sorunların PR'ler ile kapatılıp kapatılmadığı
* Eski sorunların kapatılıp kapatılmadığı
* Bir PR isteğini birleştirmek için ortalama süre

## İnsanlar hakkında bilgi edinmek için 📊 kullanın.

Ölçümleri anlamak, aktif ve büyüyen bir açık kaynak proje oluşturmanıza yardımcı olacaktır. Bir gösterge panosundaki her bir ölçümü izlemeseniz bile, dikkatinizi projenizin gelişmesine yardımcı olacak davranış türüne odaklamak için yukarıdaki çerçeveyi kullanın.
