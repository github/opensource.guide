---
lang: hu
title: A nyílt forráskód jogi oldala
description: Minden, amit valaha is gondoltál a nyílt forráskód jogi oldaláról, és néhány dolog, amit nem.
class: legal
order: 10
image: /assets/images/cards/legal.png
related:
  - contribute
  - leadership
---

## A nyílt forráskód jogi következményeinek megértése

A kreatív munka megosztása a világgal izgalmas élmény és egyben kifizetődő is lehet. Ez azt is jelentheti, hogy rengeteg jogi dolgot kell figyelembe venned, amiről még nem is tudsz. Szerencsére nem kell nulláról kezdened, hiszen minden megvan a jogi részek lefedéséhez. (Mielőtt részletesen belemennénk, olvasd el a [kizárási nyilatkozatot](/notices/).)

## Miért kellene foglalkoznom a nyílt forráskód jogi oldalával?

Örülök, hogy megkérdezted! Ha kreatív munkát végzel (például írás, grafika vagy kód), az alkotás alapértelmezés szerint kizárólagos szerzői jogi védelem alatt áll. Azaz a törvény feltételezi, hogy szerzőként beleszólhatsz, hogy mások mit tehetnek vele.

Általában ez azt jelenti, hogy senki más nem használhatja, nem másolhatja, terjesztheti vagy módosíthatja az alkotásodat jogi következmények kockáztatása nélkül.

A nyílt forráskód azonban nem a megszokott helyzet, mert a szerző itt azt várja, hogy mások használják, módosítsák és megosszák a munkáját. De mivel a jogi alapértelmezés még mindig a kizárólagos szerzői jog, ezért szükséged van egy licencre, amely kifejezetten kimondja ezeket az engedélyeket.

Ha nem alkalmazol nyílt forráskódú licencet, akkor mindenki, aki hozzájárul a projekthez, a saját munkájának kizárólagos szerzői jogi tulajdonosa lesz. Ez azt jelenti, hogy senki nem tudja használni, másolni, terjeszteni vagy módosítani a hozzájárulást - és a "senki" alatt magadat is értsd.

És végül, a projektnek lehetnek függőségei, olyan licenckövetelményekkel, amelyekről nincs tudomásod. A projekt közössége, vagy a munkáltató irányelvei szintén előírhatják, hogy a projektre konkrét, nyílt forráskódú licenceket kell használnod. Ezeket az eseteket az alábbiakban ismertetjük.

## Nyílt forráskódúak a nyilvános GitHub projektek?

Amikor [létrehozol egy új projektet](https://help.github.com/articles/creating-a-new-repository/) a GitHub-on, lehetőséged van megadni, hogy a projekt **private** (privát) vagy **public** (publikus) legyen.

![Projekt létrehozása](/assets/images/legal/repo-create-name.png)

**A GitHub projekt nyilvánossága nem azonos a projekt licencével!** A publikus projekt fogalma itt van definiálva: [GitHub's Terms of Service](https://help.github.com/en/github/site-policy/github-terms-of-service#3-ownership-of-content-right-to-post-and-license-grants), ami engedélyezi ezek megtekintését, vagy e célból ennek elágaztatását (fork), de más egyebet nem.

Ha azt szeretnéd, hogy mások használhassák, terjesszék, módosítsák vagy hozzájáruljanak a projekthez, meg kell nevezned egy nyílt forráskódú licencet. Például attól, hogy a projekt nyilvános, még senki sem jogosult bármely részének törvényes használatára, kivéve, ha kifejezetten feljogosítod erre a megfelelő licenccel.

## Tömören, hogy mit kell tenned a projekted védelme érdekében

Szerencsés helyzetben vagy, mert manapság a nyílt forráskódú licencek szabványosítottak és könnyen kezelhetők. Ezeket a licenceket bemásolhatod közvetlenül a projektedbe.

Az [MIT](https://choosealicense.com/licenses/mit/), az [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), és a [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) a legismertebb nyílt forráskódú licencek, de vannak más lehetőségek is amikből választhatsz. Ezen licencek teljes szövegét és használatuk módját megtalálod a [choosealicense.com](https://choosealicense.com/) oldalon.

Ha új projektet hozol létre a GitHub-on, meg kell adnod, hogy [milyen licencű a projekt](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
  A szabványosított licenc a laikus személyek érdekeit szolgálja, hogy pontosan tudják, mit tehetnek és mit nem tehetnek a szoftverrel. Hacsak nem feltétlenül szükséges, kerüld az egyéni, módosított vagy nem szabványos feltételeket, ezek akadályt jelenthetnek a kód további felhasználásánál.
  <p markdown="1" class="pquote-credit">
— @benbalter, ["Everything a government attorney needs to know about open source software licensing"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## Melyik nyílt forráskódú licenc felel meg a projektemnek?

Ha üres lappal indulsz, akkor talán a legjobb a [MIT licenc](https://choosealicense.com/licenses/mit/). Rövid, nagyon könnyen érthető, és megengedő, amíg megtartják a licenc másolatát, beleértve a szerzői jogi nyilatkozatot is. Ha valaha szükséged lesz rá, más licenc alatt is kiadhatod később a projektedet.

Más esetben viszont, a megfelelő nyílt forráskódú licenc kiválasztása a projekthez a célkitűzéseidtől függ.

A projektednek vélhetően lesznek **függőségei**. Például, ha nyílt forráskódú Node.js alapú projekted van, akkor használni fogsz az npm-ről (Node.js Package Manager) származó függőségeket. Minden egyes függőségnek külön, nyílt forráskódú licence van. Ha mindegyik licenc "megengedő" (engedélyezi a publikum számára a használatot, módosítást és megosztást egyéb tovább licencelési feltételek nélkül), akkor bármilyen licencet használhatsz a projektedhez. Általánosan megengedő licencek a MIT, az Apache 2.0, az ISC és a BSD.

Másrészről, hogy ha bármelyik függőséged licence "erős copyleft" (szintén megadja ugyanazokat a jogokat, de csak az azonos licencelés továbbvitelének feltételével), akkor a projektednek is ezt a licencet kell használnia. Ilyen "erős copyleft" licencek például a GPLv2, GPLv3, és AGPLv3.

Azt is érdemes figyelembe venni, hogy reményeid szerint mely **közösségek** fogják használni illetve hozzájárulni a projekthez:

* **Szeretnéd, hogy projekted más projektek függősége legyen?** Valószínűleg a legjobb, ha az adott közösségben legkedveltebb licencet használod. Például, az [MIT](https://choosealicense.com/licenses/mit/) a legnépszerűbb az [npm csomagok](https://libraries.io/search?platforms=NPM) esetén.
* **Szeretnéd, hogy a projektedet a vállalatok használják?** Egy nagyvállalat valószínűleg kifejezett szabadalmi engedélyt kér minden résztvevőtől. Ekkor az [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) lefedi mindkét fél érdekeit.
* **Szeretnéd, ha projekted vonzó legyen azon közreműködők számára, akik nem akarják, hogy zárt forráskódú szoftverekben használják fel a hozzájárulásaikat?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) vagy (ha nem kívánnak hozzájárulni még a zárt forráskódú szolgáltatásokhoz sem) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) teljességgel megfelelő.

A **cégednek** lehetnek speciális licenc kikötései a nyílt forráskódú projektjei esetén. Például megengedő licencet vár el, hogy a saját zárt forráskódú termékeiben használhassa őket. Vagy előírhatja egy erős copyleft licenc használatát és egy további hozzájárulási megállapodást (lásd alább), hogy csak a cég és senki más ne használhassa a projektet zárt forráskódú szoftverekben. Esetleg lehetnek bizonyos igényei a szabványokkal, a társadalmi felelősséggel vagy az átláthatósággal kapcsolatban, amelyek mindegyike különleges licencelési stratégiát igényelhet. Beszélj a [céged jogi osztályával](#mit-kell-tudnia-a-cégem-jogi-osztályának).

Amikor új projektet hozol létre a GitHub-on, lehetőséged van egy licenc kiválasztására. A fent említett licencek egyikét választva a GitHub projekted nyílt forráskódúvá válik. Ha más lehetőséget keresel, nézd át a [choosealicense.com](https://choosealicense.com) oldalt, hogy megtaláld a magadnak megfelelőt, még akkor is ha a projekted [nem szoftver projekt](https://choosealicense.com/non-software/).

## Mi van, ha meg akarom változtatni a projekt licencét?

A legtöbb projektnek nem szükséges licencet módosítania, de vannak körülmények, amikor mégis szükséges.

Például, ahogy a projekt növekszik, új függőségekre vagy felhasználókra tesz szert, vagy céged megváltoztatja a stratégiáját. Ezek közül bármelyik esetén szükség lehet a licence megváltoztatására. Továbbá, ha elhanyagoltad a projekt licencelését a kezdetektől fogva, a licenc hozzáadása gyakorlatilag megegyezik a licenc megváltoztatásával. A projekt licencének hozzáadásakor vagy megváltoztatásakor három alapvető dolgot kell figyelembe venni:

**Bonyolult.** A licenckompatibilitás és a megfelelőség meghatározása, valamint a szerzői joggal rendelkező személyek kezelése, nagyon gyorsan bonyolult és zavaros helyzetet teremthet. Az új kiadások és hozzájárulások esetén új, de kompatibilis licencre való áttérés eltér az összes meglévő hozzájárulás újralicencelésétől. Ha felmerül a licencváltás gondolata vagy igénye, azonnal vond be a jogi csapatot. Még ha rendelkezel is a licencszerződés megváltoztatásához a projekt szerzői jogtulajdonosainak engedélyével, vedd figyelembe, hogy a változás milyen hatással lesz a projekt többi felhasználójára és résztvevőjére! Gondolj egy licencváltozásra úgy, mint a projekt "irányítási eseményére", amely valószínűleg zökkenőmentesen zajlik egyértelmű kommunikációval és a projekt érdekeltjeivel folytatott konzultációval. Ez egy fontos ok arra, hogy a projekt kezdetétől megfelelő licencet válassz és használj!

**Jelenlegi licenc.** Ha a jelenlegi licenc kompatibilis azzal, amire váltani szeretnél, akkor nyugodtan kezdd el használni az újat. Ennek az oka az, hogy ha az "A" licenc kompatibilis a "B" licenccel, akkor megfelelsz az "A" feltételeinek, miközben megfelelsz a "B" feltételeinek is (ez visszafelé nem feltétlenül igaz). Tehát, ha jelenleg megengedő licencet használsz (pl. MIT), akkor további feltételeket szabva válthatsz licencet, amennyiben megtartod a MIT licenc másolatát, és a kapcsolódó szerzői jogi megjegyzéseket (tehát továbbra is megfelelsz a MIT licenc minimális feltételeinek). Ha azonban a jelenlegi licenced nem megengedő (például "copyleft", vagy nincs licence), és nem te vagy az egyetlen szerzői jogi tulajdonos, akkor nem tudsz áttérni a MIT licencre. Alapvetően egy megengedő licenccel, a projekt szerzői előzetesen engedélyt adtak a licenc későbbi megváltoztatására.

**A projekt meglévő szerzői jogainak tulajdonosai.** Ha egyedüli résztvevője vagy a projektnek, akkor te vagy céged a projekt szerzői jogának egyedüli birtokosa. Hozzáadhatsz új licencet vagy áttérhetsz bármilyen licencre, amire csak szeretnél. Más esetben előfordulhat, hogy a licenc megváltoztatásához más szerzői jog tulajdonosokkal is meg kell hogy egyezned. Kik ők? Célszerű azokkal kezdeni, akik commit-oltak a projektben. Néhány esetben azonban a szerzői jogokkal a hozzájáruló emberek munkáltatói rendelkeznek. Bizonyos esetekben az emberek csak minimálisan, néhány sor kóddal járulnak hozzá a projekthez, de nincs olyan szigorú és egyértelmű szabály arra vonatkozóan, hogy ilyen esetekben el lehet-e tekinteni a szerzői jogtól. Mit lehet ekkor tenni? Attól függ. Egy viszonylag kicsi és fiatal projekt esetében lehet, hogy minden meglévő résztvevő beleegyezik a licencváltozásba egy hibajegyen vagy beolvasztási kérelmen keresztül. Egy nagy és hosszú életű projekt esetében azonban sok közreműködőt és még akár az örökösöket is meg kell keresni. A Mozilla-nak évekig tartott (2001-2006) a Firefox, a Thunderbird és a kapcsolódó szoftverek újralicencelése.

Alternatív megoldásként, a résztvevők előzetesen (egy kiegészítő hozzájárulási megállapodás alapján - lásd alább), bizonyos feltételek mellett, a meglévő nyílt forráskódú licenc változtatását is engedélyezhetik. Ez kicsit javítja a licencváltás összetettségét. Viszont előtte szükséged lesz némi segítségre az ügyvédek részéről, és továbbra is egyértelműen kommunikálnod kell a projekt érdekeltjeivel a licencváltás végrehajtásának folyamatát.

## Szükségem van-e kiegészítő hozzájárulási megállapodásra?

Valószínűleg nem. A nyílt forráskódú projektek túlnyomó többsége esetében a nyílt forráskódú licenc implicit módon tartalmazza egyaránt a bejövő (a résztvevőkről) és a kimenő (más hozzájárulók és felhasználók) licencet. Ha a projekt a GitHub-on van, akkor a GitHub Általános Szerződési Feltételei szerint a "bejövő = kimenő" elv [kifejezetten alapértelmezett](https://help.github.com/en/github/site-policy/github-terms-of-service#6-contributions-under-repository-license).

Egy kiegészítő hozzájárulási megállapodás, amelyet gyakran közreműködői licenc megállapodásnak (CLA) neveznek, adminisztratív munkát generálhat a projektgazdák számára. A projekt és a kivitelezés függvénye, hogy ez mennyi munkát jelent. Egy egyszerű megállapodás megkövetelheti, hogy a közreműködők egy kattintással megerősítsék, hogy megvan a szükséges joguk a nyílt forráskódú projekt licencének megfelelő részvételhez. Egy bonyolultabb megállapodás jogi felülvizsgálatot, és a résztvevők munkáltatójától kapott hozzájárulást is igényelhet.

Amikor ez olyan "papírmunkát" okoz, amit egyesek szükségtelennek, nehezen érthetőnek esetleg tisztességtelennek (ha a megállapodás kedvezményezettje több jogot kap, mint amit a projekt nyílt forráskódú licence alapján a közreműködők vagy a nyilvánosság kapnak) gondolnak, egy kiegészítő hozzájárulási megállapodás barátságtalan lépésnek tűnhet a közösség számára.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">
    Megszüntettük a CLA-kat a Node.js projektben. Ezzel csökkenthető a közreműködői belépés előtt álló akadályok száma, ezáltal növelve a projektben résztvevők bázisát.
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Broadening Node.js Contributions"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Egyes helyzetekben, szükséges lehet további, a projekthez kapcsolódó közreműködői megállapodást kötni:

* A jogászok azt szeretnék, ha minden résztvevő kifejezetten elfogadná (_aláírná_, online vagy offline) a közreműködői feltételeket, talán azért, mert úgy érzik, hogy a nyílt forráskódú licenc nem elég (annak ellenére, hogy ez nem így van!). Ha csak ez az egyetlen gond, akkor elegendőnek kell lennie a nyílt forráskódú licencnek, és egy azt megerősítő közreműködői megállapodásnak. A [jQuery Individual Contributor License Agreement](https://contribute.jquery.org/CLA/) egy jó példa egy érthető, könnyen használható CLA-nak.
* Te vagy a jogászok azt szeretnék, hogy a fejlesztők minden commit-ja jogilag megállja a helyét. Ezt a projektek a [Developer Certificate of Origin](https://developercertificate.org/) segítségével érik el. Például, a Node.js közösség a saját CLA-juk helyett [inkább](https://nodejs.org/en/blog/uncategorized/notes-from-the-road/#easier-contribution) a DCO-t [használja](https://github.com/nodejs/node/blob/HEAD/CONTRIBUTING.md). A DCO automatikus kikényszerítése egy Git repository-n legegyszerűbben a [DCO Probot-tal](https://github.com/probot/dco) érhető el.
* A projekt egy olyan nyílt forráskódú licencet használ, amely nem tartalmaz kifejezetten szabadalom használati engedélyt (például MIT), így szükséges egy szabadalom használati engedély nyilatkozat minden résztvevőtől, akik közül néhányan nagy szabadalom portfólióval rendelkező cégeknek dolgoznak, amelyek a szabadalmaikat felhasználva támadhatnak téged vagy a projekt többi résztvevőjét és felhasználóit. Az [Apache Individual Contributor License Agreement](https://www.apache.org/licenses/icla.pdf) egy elterjedten használt kiegészítő közreműködői megállapodás, ami az Apache License 2.0 licencben szereplő szabadalom használati jogosultságot tartalmazza.
* A projekted "copyleft" licencelésű, de a projektből egy szabadalmaztatott, saját verziót is terjeszteni szeretnél. Minden résztvevőnek át kell ruháznia rád a szerzői jogait, hogy megengedje neked (de nem a nyilvánosságnak) a szabad felhasználást. A [MongoDB Contributor Agreement](https://www.mongodb.com/legal/contributor-agreement) egy ilyen típusú megállapodás.
* Úgy gondolod, hogy a projekt élete során szükség lehet a licenc módosítására, és azt szeretnéd, hogy a közreműködők előre elfogadják az ilyen jellegű változtatásokat.

Ha kiegészítő hozzájárulási megállapodást kell használnod, fontold meg egy olyan integrált szolgáltatás használatát, mint például a [CLA assistant](https://github.com/cla-assistant/cla-assistant), ezzel minimalizálhatod a résztvevők terhelését.

## Mit kell tudnia a cégem jogi osztályának?

Ha egy cég alkalmazottjaként indítasz nyílt forráskódú projektet, ezt először tudatnod kell a cég jogi csoportjával.

Fontold ezt meg még akkor is, ha személyes projektről van szó. Valószínűleg van egy "munkavállalói szellemi tulajdon megállapodás" a cég és te közted, amely némi ellenőrzést biztosít nekik a projektjeid felett különösen, ha azok kapcsolódnak a vállalat üzleti tevékenységéhez, vagy vállalati erőforrásokat használsz a projekt fejlesztéséhez. A céged könnyedén megadhatja az engedélyt, és talán már van is alkalmazott-barát munkáltatói megállapodás, vagy vállalati irányelv. Ha nem, akkor tárgyalhatsz róla (például magyarázd el, hogy a projekt a vállalat szakmai tanulási és fejlesztési céljait szolgálja), vagy ha ez sikertelen, akkor ne dolgozz a projekten, amíg nem találsz jobb vállalatot.

**Ha a cégednek csinálsz nyílt forráskódú projektet,** akkor mindenképpen tudjanak róla. A jogi csapat valószínűleg már rendelkezik a cég üzleti igényinek megfelelő irányelvekkel a nyílt forráskódú licencek (és esetleg további közreműködői megállapodások) használatával kapcsolatosan. Valószínűleg ahhoz is megvan a szakértelmük, hogy a projekt licencelése megfeleljen a függőségek licenceinek. Ha nem, akkor szerencsés a helyzet! A jogi csapatnak együtt kell dolgoznia veled, hogy megoldjátok ezt. Néhány dolog, amire gondolni kell:

* **Harmadik fél anyagai:** Használ a projekted mások által létrehozott függőségeket, vagy tartalmaz illetve használ más által írt kódot? Ha ezek nyílt forráskódúak, akkor meg kell felelned azok nyílt forráskódú licencének. Első lépésként választanod kell egy licencet, ami kompatibilis a harmadik féltől származó anyagok licencével. Ha a projekt módosítja, vagy terjeszti a harmadik fél nyílt forráskódú anyagát, akkor a jogi csapat azt is szeretné tudni, hogy megfelelsz-e a harmadik fél nyílt forráskódú licenc  feltételeinek, mint például a szerzői jogi megjegyzések megőrzése. Ha a projekt mások kódját használja, amely nem rendelkezik nyílt forráskódú licenccel, akkor valószínűleg fel kell kérned a harmadik felet, hogy [adjon hozzá egy nyílt forráskódú licencet](https://choosealicense.com/no-license/#for-users), ha nem kapsz ilyet, akkor abba kell hagyni ezen kód használatát.

* **Üzleti titkok:** Vizsgáld meg, hogy van-e valami a projektben, amit a vállalat nem akar a nyilvánosság számára elérhetővé tenni. Ha igen, akkor nyisd meg a projekt többi részét, de csak miután kiszedted a privát anyagot belőle.

* **Szabadalmak:** A céged szabadalmi kérelmet adott be, amivel kapcsolatosan a projekt forráskódjának megnyitása [nyilvánosságra hozásnak](https://en.wikipedia.org/wiki/Public_disclosure) minősül? Ez esetben sajnos felkérhetnek, arra hogy várj még (esetleg a cég újragondolhatja a szabadalmi kérelmet). Ha nagy szabadalmi portfólióval rendelkező cégek alkalmazottjaitól is számítasz hozzájárulásokra, a jogi csoport kötelezhet arra, hogy olyan licencet válassz, ami kifejezett szabadalom használati engedélyt követel meg a hozzájárulóktól (például az Apache 2.0 vagy a GPLv3), vagy egy kiegészítő hozzájárulási megállapodást vár el (lásd fent).

* **Védjegyek:** Nézz utána alaposan, hogy a projekted neve nem ütközik [valamely védjeggyel](../starting-a-project/#kerüld-el-a-névütközést). Ha saját céged védjegyeit használod a projektben, ellenőrizd, hogy nem okoz-e ütközéseket, problémákat. A [FOSSmarks](http://fossmarks.org/) egy gyakorlati útmutató a védjegyek megértéséhez szabad és nyílt forráskódú projektek esetén.

* **Magánélet:** Gyűjt a projekt adatokat a felhasználókról? Kommunikál vállalati szerverekkel? A jogi csoport segít neked a vállalati irányelvek és a külső szabályok betartásában.

Ha a céged első nyílt forráskódú projektjének publikálásán dolgozol, a fentiek elégségesek ahhoz, hogy sikerüljön (de ne aggódj, a legtöbb projektben nem merül fel komoly probléma).

Hosszabb távon a jogi csapat többet tehet azért, hogy segítsen a vállalatnak profitálni a nyílt forráskódból és közben biztonságban tudhassa magát:

* **Munkavállalói hozzájárulás szabályozása:** Fontold meg olyan vállalati irányelv kidolgozását, amely meghatározza, hogy a munkavállalók hogyan járulnak hozzá a nyílt forráskódú projektekhez. Az egyértelmű szabályozás csökkenti a zavart az alkalmazottak körében, és segít abban, hogy a vállalat érdekeinek megfelelően járuljanak hozzá a nyílt forráskódú projektekhez, akár munkájuk részeként, akár szabadidejükben. Jó példa erre a Rackspace féle [Model IP and Open Source Contribution Policy](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">
  A (nyílt forráskódú) javítások (patch-ek) szellemi tulajdonának elengedése építi a munkavállaló tudásbázisát és hírnevét. Ez azt mutatja, hogy a vállalat befektet a munkavállaló fejlődésébe, valamint erősíti az önállóság és autonómia érzését. Mindezek magasabb morálhoz és a jobb munkavállalók megtartáshoz is vezetnek.
  <p markdown="1" class="pquote-credit">
— @vanl, ["A Model IP and Open Source Contribution Policy"](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **Mit kell kiadni:** [(Majdnem) mindent?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) Ha a jogi csapat megérti és hajlandó munkát befektetni a vállalat nyílt forráskódú stratégiájába, akkor az inkább segíteni fog, mint akadályozni.
* **Megfelelés:** Még ha a céged nem is fejleszt nyílt forráskódot, biztosan használja azt. A [tudatosság és folytonosság](https://www.linuxfoundation.org/blog/2015/06/why-companies-that-use-open-source-need-a-compliance-program/) megakadályozhatja a fejfájást, a késedelmeket és a pereket.

<aside markdown="1" class="pquote">
  A szervezeteknek rendelkezniük kell olyan licenc- és megfelelőségi stratégiával, amely megfelel mind a „megengedő”, mind a „copyleft” kategóriáknak. Ez azzal kezdődik, hogy nyilvántartást vezetnek az általad használt nyílt forráskódú szoftverekre vonatkozó licencfeltételekről, beleértve az alkomponenseket és a függőségeket.
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Open Source Software: Compliance Basics And Best Practices"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **szabadalmak:** A céged lehet szívesen csatlakozna az [Open Invention Network-höz](https://www.openinventionnetwork.com/), ami egy védekező szabadalmi társulás, védelmet nyújt tagok számára a nagyobb, nyílt forráskódú projektek használatában, vagy megvizsgálja az [alternatív szabadalmi engedélyezés lehetőségét](https://www.eff.org/document/hacking-patent-system-2016).
* **Irányítás:** Van-e értelme, és ha igen, akkor mikor érdemes a projektet egy [cégen kívüli jogi személynek átadni](../leadership-and-governance/#szükségem-van-egy-jogi-személyre-a-projektem-támogatásához).
