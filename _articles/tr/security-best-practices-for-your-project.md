---
lang: tr
title: Projeniz İçin Güvenlik En İyi Uygulamaları
description: MFA ve kod taramasından güvenli bağımlılık yönetimine ve özel güvenlik açığı raporlamasına kadar temel güvenlik uygulamalarıyla güven inşa ederek projenizin geleceğini güçlendirin.
class: security-best-practices
order: -1
image: /assets/images/cards/security-best-practices.png
---

Hatalar ve yeni özellikler bir yana, bir projenin uzun ömürlü olmasını belirleyen şey yalnızca faydalı olması değil, aynı zamanda kullanıcılarının güvenini kazanmasıdır. Güçlü güvenlik önlemleri, bu güveni sürdürmek için önemlidir. İşte projenizin güvenliğini önemli ölçüde artırmak için atabileceğiniz bazı önemli adımlar.

## Ayrıcalıklı tüm katılımcıların Çok Faktörlü Kimlik Doğrulama (MFA) etkinleştirdiğinden emin olun

### Projenizde ayrıcalıklı bir katkıcıyı taklit etmeyi başaran kötü niyetli bir aktör, felakete yol açabilir.

Ayrıcalıklı erişim elde ettikten sonra, bu aktör kodunuzu değiştirebilir ve kodunuzun istenmeyen işlemler yapmasını (ör. kripto para madenciliği vb.) sağlayabilir, kötü amaçlı yazılım dağıtabilir veya özel kod depolarınıza erişerek fikri mülkiyet ve hassas verileri, diğer hizmetlerin kimlik bilgileri dâhil olmak üzere, sızdırabilir.  

MFA, hesap ele geçirmelere karşı ek bir güvenlik katmanı sağlar. Etkinleştirildiğinde, giriş yapmak için kullanıcı adı ve şifreye ek olarak yalnızca sizin bildiğiniz veya erişebildiğiniz başka bir doğrulama yöntemi gerekir.

## Kodunuzu geliştirme sürecinizin bir parçası olarak güvene alın

### Kodunuzdaki güvenlik açıkları, dağıtımda fark edilmesine kıyasla, erken aşamalarda tespit edildiğinde çok daha ucuza çözülebilir.

Kodunuzdaki güvenlik açıklarını tespit etmek için Statik Uygulama Güvenliği Testi (SAST) aracı kullanın. Bu araçlar kod seviyesinde çalışır, yürütme ortamına ihtiyaç duymaz ve bu nedenle sürecin erken aşamalarında çalıştırılabilir; ayrıca build veya kod inceleme aşamalarına sorunsuzca entegre edilebilir.  

Bu, adeta kod deponuzu gözden geçiren, gizlenmiş güvenlik açıklarını sizin için bulan yetenekli bir uzmana sahip olmak gibidir.

SAST aracınızı nasıl seçersiniz?  

* Lisansı kontrol edin: Bazı araçlar açık kaynak projeleri için ücretsizdir (ör. GitHub CodeQL veya SemGrep).  
* Kullandığınız dili/dilleri destekleyip desteklemediğini kontrol edin.  
* Halihazırda kullandığınız araç ve süreçlere kolayca entegre olabilen birini seçin. Örneğin, uyarılar kod inceleme aracınızda görünsün, başka bir platforma gitmeniz gerekmesin.  
* Yanlış pozitiflere dikkat edin! Araç sizi boş yere yavaşlatmamalı.  
* Özelliklerini inceleyin: Bazıları çok güçlüdür ve veri akışı takibi yapabilir (ör. GitHub CodeQL), bazıları yapay zekâ ile çözüm önerileri sunar, bazıları özel sorgular yazmayı kolaylaştırır (ör. SemGrep).  

## Sırlarınızı paylaşmayın

### API anahtarları, tokenlar ve parolalar gibi hassas veriler bazen yanlışlıkla repoya yüklenebilir.

Şöyle bir senaryo hayal edin: Dünyanın dört bir yanından katkıcıların bulunduğu popüler bir açık kaynak projesinin sahibisiniz. Bir gün, bir katkıcı farkında olmadan üçüncü taraf bir servise ait API anahtarlarını repoya yükler. Günler sonra birileri bu anahtarları bulur ve izinsiz şekilde servise erişir. Servis tehlikeye girer, kullanıcılar kesinti yaşar ve projenizin itibarı zedelenir.  

Bunu önlemek için "gizli tarama" (secret scanning) çözümleri vardır. GitHub Secret Scanning veya Truffle Security'nin Trufflehog aracı, bu tür bilgileri repoya göndermenizi engelleyebilir. Bazı araçlar, belirli sırları otomatik olarak iptal de edebilir.  

## Bağımlılıkları kontrol edin ve güncelleyin

### Projenizdeki bağımlılıklar, projenizin güvenliğini tehlikeye atan açıklar içerebilir. Bunları manuel olarak güncel tutmak zaman alıcı olabilir.

Şöyle düşünün: Sık kullanılan bir kütüphane üzerine inşa edilen bir proje var. Daha sonra bu kütüphanede ciddi bir güvenlik açığı bulundu, fakat uygulamayı geliştirenler bundan haberdar değil. Hassas veriler saldırganların eline geçer. Bu yalnızca teorik bir senaryo değil. 2017'de Equifax, Apache Struts bağımlılığını güncellemedi ve 144 milyon kullanıcının verilerini etkileyen meşhur ihlal yaşandı.  

Bunu önlemek için Dependabot ve Renovate gibi Yazılım Bileşen Analizi (SCA) araçları, bağımlılıklarınızı NVD veya GitHub Advisory Database gibi açık veritabanlarıyla karşılaştırarak bilinen güvenlik açıklarını bulur ve güvenli sürümlere güncellemek için otomatik PR oluşturur.  

## Korunan dallarla istenmeyen değişiklikleri engelleyin

### Ana dallara sınırsız erişim, yanlışlıkla veya kötü niyetli yapılan değişikliklerin güvenlik açıklarına veya projenizin kararlılığını bozmasına yol açabilir.

Yeni bir katkıcı ana dala yazma izni alır ve test edilmemiş değişiklikleri doğrudan gönderir. Ardından ciddi bir güvenlik açığı ortaya çıkar. Bunu önlemek için dal koruma kuralları kullanın. Bu kurallar sayesinde önemli dallara gözden geçirilmeden veya belirli kontrolleri geçmeden hiçbir değişiklik birleştirilemez.  

## Güvenlik açığı raporları için bir bildirim mekanizması oluşturun

### Kullanıcıların hata raporlamasını kolaylaştırmak iyi bir uygulamadır, ancak bu hatanın güvenlik riski etkisi olduğunda bunu size nasıl güvenle iletebilirler?

Şöyle bir durum düşünün: Bir güvenlik araştırmacısı projenizde açık buldu ama bunu bildirecek güvenli bir yol yok. Belki GitHub'da herkese açık bir issue açar ya da sosyal medyada paylaşır. Hatta iyi niyetle bir PR bile gönderebilir ama bu açık, herkes tarafından görülmeden birleşmez. Bu da kötü niyetli kişilerin açığı istismar etmesine yol açabilir.  

### Güvenlik Politikası

Bunu önlemek için bir güvenlik politikası yayınlayın. `SECURITY.md` dosyasında belirtilen bu politika, güvenlik sorunlarının nasıl raporlanacağını, kimlerin sorumlu olduğunu ve sürecin nasıl işleyeceğini netleştirir. Basitçe "Lütfen herkese açık issue veya PR açmayın, security@example.com adresine mail gönderin" bile yazabilirsiniz. Daha fazla detay da ekleyebilirsiniz (ör. size ne kadar sürede dönüş yapılacağını).  

### Özel Güvenlik Açığı Raporlama

Bazı platformlar süreci daha güvenli hale getirmek için özel raporlama sağlar. GitLab'da "private issues", GitHub'da ise "private vulnerability reporting (PVR)" vardır. PVR ile bakımcılar güvenlik açıklarını özel şekilde alıp çözebilir. GitHub otomatik olarak özel bir fork açar, güvenlik tavsiyesi taslağı oluşturur. Tüm süreç siz açıklayana kadar gizli kalır. Sonrasında güvenlik danışmanlığı yayınlanır ve kullanıcılarınız SCA araçları sayesinde korunur.  

## Sonuç: Küçük adımlar, büyük güvenlik

Bu birkaç adım size basit veya sıradan görünebilir, ancak kullanıcılarınız için projenizi çok daha güvenli hale getirir. Çünkü en yaygın sorunlara karşı koruma sağlar.  

## Katkıcılar

### Bu kılavuzu hazırlarken deneyim ve ipuçlarını paylaşan tüm bakımcılara teşekkürler!

Bu kılavuz [@nanzggits](https://github.com/nanzggits) & [@xcorail](https://github.com/xcorail) tarafından yazıldı, katkıda bulunanlar:  

[@JLLeitschuh](https://github.com/JLLeitschuh)  
[@intrigus-lgtm](https://github.com/intrigus-lgtm) + daha birçok kişi!
