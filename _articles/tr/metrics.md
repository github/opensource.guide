---
lang: en
title: Açık Kaynak Ölçümleri
description: Make informed decisions to help your open source project thrive by measuring
  and tracking its success.
class: metrics
toc:
  why-measure-anything: Neden her şeyi ölçmeli?
  discovery: Keşif
  usage: Kullanım
  retention: Akılda tutma
  maintainer-activity: Geliştirici etkinliği
order: '9'
image: "/assets/images/cards/metrics.png"
related:
- finding
- örnek yöntemler
---

## Neden her şeyi ölçmeli?

Veriler akıllıca kullanıldığında, açık kaynaklı bir geliştirici olarak daha iyi kararlar almanıza yardımcı olabilir.

With more information, you can:

- Understand how users respond to a new feature
- Yeni kullanıcıların nereden geldiğini bulma
- Bir aykırı kullanım senaryosunu veya işlevselliğini belirleme ve destekleyip desteklememeye karar verme
- Projenizin popülaritesini ölçme
- Projenizin nasıl kullanıldığını anlama
- Sponsorluklar ve bağışlar yoluyla para toplama

For example, [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md) finds that Google Analytics helps them prioritize work:

> Homebrew ücretsiz olarak verilmektedir ve tamamen boş zamanlarında gönüllüler tarafından geliştirilmektedir. Sonuç olarak, gelecekteki özellikleri en iyi nasıl tasarlayacağınıza ve mevcut çalışmaya öncelik vereceğimize karar vermek için Homebrew kullanıcılarının detaylı kullanıcı çalışmalarını yapacak kaynaklara sahip değiliz. Anonim toplam kullanıcı analitiği, insanların Homebrew'i nasıl, nerede ve ne zaman kullandıklarına dayanarak düzeltmeleri ve özellikleri öncelik sırasına koymamızı sağlar.

Popülerlik her şey değildir. Herkes farklı nedenlerden dolayı açık kaynağa dahil oluyor. Açık kaynak kod geliştiricisi olarak hedefiniz çalışmanızı göstermekse, kodunuz konusunda şeffaf olmaksa veya sadece eğlenmek ise, metrikler sizin için önemli olmayabilir.

Eğer daha derin bir seviyede projenizi anlamak isteğiniz *varsa,* projenizin etkinliğini analiz etmek için yolunu bulmak için okumaya devam edin.

## Keşif

Herhangi biriniz projenizi kullanmadan veya katkıda bulunmadan önce, onun var olduğunu bilmeleri gerekir. Kendinize sorun: *insanlar bu projeden haberdarlar mı?*

![Traffic graph](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

Projeniz GitHub'da barındırıyorsanız, projenizi kaç kişinin gördüğünü ve nereden geldikleri [görüntüleyebilirsiniz](https://help.github.com/articles/about-repository-graphs/#traffic). Projenizin sayfasından "Trendler" menüsünü, ardından "Trafik" alt menüsünü tıklayın. Bu sayfada şunları görebilirsiniz:

- **Total page views:** Tells you how many times your project was viewed

- **Toplam tekil ziyaretçi:** Projenizi kaç kişinin görüntülediğini gösterir

- **Referring sites:** Tells you where visitors came from. This metric can help you figure out where to reach your audience and whether your promotion efforts are working.

- **Popüler içerik:** Ziyaretçilerin projenizde nereye gittiğini, sayfa görünümlerine ve benzersiz ziyaretçilere göre ayrıldığını gösterir.

[GitHub stars](https://help.github.com/articles/about-stars/) can also help provide a baseline measure of popularity. While GitHub stars don't necessarily correlate to downloads and usage, they can tell you how many people are taking notice of your work.

[Belirli yerlerdeki keşfedilebilirliği izlemek](https://opensource.com/business/16/6/pirate-metrics) isteyebilirsiniz: örneğin, Google PageRank, projenizin web sitesinden yönlendirilen trafik veya diğer açık kaynaklı projelerden veya web sitelerinden gelen yönlendirmeler.

## Kullanım

İnsanlar projenizi internet dediğimiz bu vahşi ve çılgın şey üzerinde buluyorlar. İdeal olarak, projenizi gördüklerinde, bir şeyler yapmaya zorlanırlar. Sormak isteyeceğiniz ikinci soru şudur: *insanlar bu projeyi kullanıyorlar mı?*

If you use a package manager, such as npm or RubyGems.org, to distribute your project, you may be able to track your project's downloads.

Her paket yöneticisi "indirme" nin biraz farklı bir tanımını olabilir ve indirme işlemleri kurulum veya kullanım ile mutlaka ilişkili değildir, ancak karşılaştırma için bazı temel bilgiler sağlar. Birçok popüler paket yöneticisinde kullanım istatistiklerini izlemek için [Libraries.io](https://libraries.io/) servisini kullanmayı deneyin.

Projeniz GitHub'daysa, tekrar "Trafik" sayfasına gidin. [Klon grafiğini](https://github.com/blog/1873-clone-graphs) , projenizin belirli bir günde kaç kez klonlandığını, toplam klonların ve benzersiz klonların karşılaştırmlı hallerini görmek için kullanabilirsiniz.

![Clone graph](/assets/images/metrics/clone_graph.png)

If usage is low compared to the number of people discovering your project, there are two issues to consider. Either:

- Projeniz kitlenizi başarıyla dönüştüremiyor ya
- You're attracting the wrong audience

For example, if your project lands on the front page of Hacker News, you'll probably see a spike in discovery (traffic), but a lower conversion rate, because you're reaching everyone on Hacker News. If your Ruby project is featured at a Ruby conference, however, you're more likely to see a high conversion rate from a targeted audience.

Try to figure out where your audience is coming from and ask others for feedback on your project page to figure out which of these two issues you're facing.

İnsanların projenizi kullandığını öğrendikten sonra, onunla ne yaptığını anlamaya çalışmak isteyebilirsiniz. Kodunuzu yazıp özellikleri ekleyerek üzerine mi inşa ediyorlar? Akademik çalışma ya da iş için mi kullanıyorlar?

## Akılda Tutma

İnsanlar projenizi buluyor ve kullanıyorlar. Kendinize sormak isteyeceğiniz bir sonraki soru şudur: *insanlar bu projeye geri dönüş ve katkıda bulunuyor mu?*

Katkıda bulunanlar hakkında düşünmeye başlamak için asla erken değildir. Diğer insanlar girmeden, kendinizi projenizin *popüler olduğu* (birçok kişi kullanır) ancak *desteklenmez*  sağlıksız bir duruma sokma riskini alırsınız  (talebi karşılamak için yeterli zaman bekletici değil).

Akılda tutulma, daha önce aktif olan katılımcılar eninde sonunda başka şeylere geçeceğinden, [yeni katılımcıların girişini](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2) gerektirir.

Düzenli olarak izlemek isteyebileceğiniz topluluk ölçümleri örnekleri şunlardır:

- **Total contributor count and number of commits per contributor:** Tells you how many contributors you have, and who's more or less active. On GitHub, you can view this under "Insights" -> "Contributors." Right now, this graph only counts contributors who have committed to the default branch of the repository.

![Contributor graph](/assets/images/metrics/repo_contributors_specific_graph.png)

- **İlk kez, geçici ve tekrar eden katılımcılar:** Yeni katılımcılar alıp almadığınızı ve geri gelip gelmeyeceklerini izlemenize yardımcı olur. (Sıradan katkıda bulunanlar, az sayıda katkı veren katılımcılardır. Bu, bir katkı, beş katkıdan az veya size kalmış başka bir sayı.) Yeni katılımcılar olmadan, projenizin topluluğu durgun hale gelebilir.

- **Açık işlerin ve PR isteklerinin sayısı:** Bu sayılar çok yükselirse, sorun giderme ve kod incelemeleri konusunda yardıma ihtiyacınız olabilir.

- ***Açılan* işlerin ve *açılan* PR isteklerin sayısı:** Açılan sorunlar, birinin projenizi açması için yeterince önemsediği anlamına gelir. Bu sayı zaman içinde artarsa, insanların projenize ilgi duyduğunu gösterir.

- **Katkı türleri:** Örneğin, yazım hatalarını veya hataları düzeltme veya bir konuda yorum yapma.

<aside markdown="1" class="pquote"><img src="https://avatars.githubusercontent.com/arfon?s=180" class="pquote-avatar" alt="avatar"> Açık kaynak koddan daha fazlasıdır. Başarılı açık kaynaklı projeler, bu değişikliklerle ilgili tartışmalar ile birlikte kod ve dokümantasyon katkılarını içerir. <p markdown="1" class="pquote-credit"> - @arfon, ["Açık Kaynağın Şekli"] (https://github.com/blog/2195-the-shape-of-open-source) </p></aside>

## Geliştirici etkinliği

Son olarak, projenizin sahiplerinin alınan katkıların hacmini karşılayabildiğinden emin olarak döngüyü kapatmak isteyeceksiniz. Kendinize sormak isteyeceğiniz son soru şudur: *Topluluğumuza cevap veriyor muyum (muyuz)?*

Tepki vermeyen geliştiriciler açık kaynaklı projeler için bir el freni haline gelir. Birisi bir katkı gönderirse, ancak bir geliştiriciden bir geri bildirim gelmezse, cesareti kırılır ve projeden ayrılabilir.

[Mozilla'da yapılan bir araştırma](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177), geliştiricilerin sürdürülebilirlik konusundaki duyarlılığının, tekrar eden katkıları teşvik etmede kritik bir faktör olduğunu öne sürüyor.

Bir sorunun ya da PR talebinin katkısına yanıt vermenizin (veya başka bir geliştiricinin) ne kadar sürdüğünü takip edin. Yanıt vermek, harekete geçmek gerektirmez. Şunu söylemek kadar basit olabilir: *"Gönderiminiz için teşekkürler! Bunu önümüzdeki hafta içinde gözden geçireceğim."*

You could also measure the time it takes to move between stages in the contribution process, such as:

- Average time an issue remains open
- Sorunların PR'ler ile kapatılıp kapatılmadığı
- Eski sorunların kapatılıp kapatılmadığı
- Bir PR isteğini birleştirmek için ortalama süre

## Use 📊 to learn about people

Ölçümleri anlamak, aktif ve büyüyen bir açık kaynaklı proje oluşturmanıza yardımcı olacaktır. Bir gösterge panosundaki her bir ölçümü izlemeseniz bile, dikkatinizi projenizin gelişmesine yardımcı olacak davranış türüne odaklamak için yukarıdaki çerçeveyi kullanın.
