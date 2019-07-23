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

A kreatív munka megosztása a világgal izgalmas élmény és egyben kifizetődő is lehet. Ez azt is jelentheti, hogy rengeteg jogi dolgot kell figyelembe venned, amiről nem is tudsz. Szerencsére nem kell a nulláról kezdened. Minden megvan a jogi részek lefedéséhez. (Mielőtt részletesen belemennénk, olvasd el a [kizárási nyilatkozatot](/notices/).)

## Miért kellene foglalkoznom a nyílt forráskód jogi oldalával?

Örülök, hogy megkérdezted! Ha kreatív munkát végez (például írás, grafika vagy kód), a munka alapértelmezés szerint kizárólagos szerzői joggal rendelkezik. Ez azt jelenti, hogy a törvény feltételezi a munka szerzőjéről azt, hogy megmondhatja mások mit tehetnek vele.

Általában ez azt jelenti, hogy senki más nem használhatja, nem másolhatja, terjesztheti vagy módosíthatja a munkádat anélkül, hogy peres eljárás elé ne nézne.

A nyílt forráskód azonban nem a megszokott helyzet, mert a szerző itt azt várja, hogy mások használják, módosítsák és megosszák a munkáját. De mivel a jogi alapértelmezés még mindig a kizárólagos szerzői jog, ezért szükséged van egy licencre, amely kifejezetten kimondja ezeket az engedélyeket.

Ha nem alkalmazol nyílt forráskódú licencet, akkor mindenki, aki hozzájárul a projekthez, a saját munkájának kizárólagos szerzői jogi tulajdonosa lesz. Ez azt jelenti, hogy senki nem tudja használni, másolni, terjeszteni vagy módosítani a hozzájárulást - és a "senki" alatt magadat is értsd.

És végül, a projektnek lehetnek függőségei, olyan licenckövetelményekkel, amelyekről nincs tudomásod. A projekt közössége vagy a munkáltató irányelvei szintén előírhatják, hogy a projektje konkrét nyílt forráskódú licenceket kell használnod. Ezeket az eseteket az alábbiakban ismertetjük.

## Nyílt forráskódúak a nyilvános GitHub projektek?

Amikor [létrehozol egy új projektet](https://help.github.com/articles/creating-a-new-repository/) a GitHub-on, lehetőséged van ezt **private** (privát) vagy **public** (publikus) módon megtenni.

![Projekt létrehozása](/assets/images/legal/repo-create-name.png)

**A GitHub projekt nyilvánossága nem azonos a projekt licencével!** A publikus projekt fogalma itt van definiálva: [GitHub's Terms of Service](https://help.github.com/articles/github-terms-of-service/#f-copyright-and-content-ownership), ami engedélyezi ezek megtekintését, vagy e célból ennek elágaztatását (fork), de más egyebet nem.

Ha azt szeretné, hogy mások használhassák, terjesszék, módosítsák vagy hozzájáruljanak a projekthez, meg kell nevezni egy nyílt forráskódú licencet. Például, senki sem jogosult a GitHub projekt akármelyik részének törvényes használatára, még ha nyilvános is, kivéve, ha kifejezetten megadod ezt a jogot erre a megfelelő licenccel.

## Tömören, hogy mit kell tenned a projekted védelme érdekében

Szerencséd van, mert ma a nyílt forráskódú licencek szabványosítottak és könnyen kezelhetők. Ezeket a licenceket másolhatod közvetlenül a projektedbe.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), és [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) a legismertebb nyílt forráskódú licencek, de vannak más lehetőségek is amikből választhatsz. Megtalálod a teljes szövegét ezeknek a licenceknek, és azt, hogy hogyan használhatod őket, a [choosealicense.com](https://choosealicense.com/) oldalon.

Ha új projektet hozol létre a GitHub-on, meg kell adnod, hogy [milyen licencű a projekt](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
  A szabványosított licenc a laikus személyek érdekeit szolgálja, hogy pontosan tudják, mit tehetnek és mit nem tehetnek a szoftverrel. Kerüld az egyéni, módosított vagy nem szabványos fogalmakat – hacsak nem feltétlenül szükséges –, amelyek akadályt jelenthetnek a kód további felhasználására.
  <p markdown="1" class="pquote-credit">
— @benbalter, ["Everything a government attorney needs to know about open source software licensing"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## Melyik nyílt forráskódú licenc felel meg a projektemnek?

Ha üres lappal indulsz, akkor talán a legjobb a [MIT licenc](https://choosealicense.com/licenses/mit/). Rövid, nagyon könnyen érthető, és megengedőt, amíg megtartja a licenc másolatát, beleértve a szerzői jogi nyilatkozatot is. Ha valaha is szükséged lesz rá, akkor más licenc alapján is kiadhatod később a projektedet.

Más esetben viszont, a projekthez való megfelelő nyílt forráskódú licenc kiválasztása a te célkitűzéseidtől függ.

A projektednek vélhetően lesznek **függőségei**. például, ha nyílt forráskódú Node.js alapú projekted van, akkor használni fogsz npm-et (Node.js Package Manager). Minden egyes függőségnek külön nyílt forráskódú licence van. Ha mindegyik licenc "megengedő" (engedély megadása módosításra és megosztásra, más engedélyezés feltétel nélkül), akkor használhatod a kívánt függőséget. Általánosan megengedő licencek a MIT, Apache 2.0, ISC, és a BSD.

Másrészről, hogy ha bármelyik függőséged licence "szabad-felhasználású" (szintén ad jogokat, amennyiben a további felhasználás feltételeit megtartják), akkor a projekted ezt a licencet viheti tovább. Ilyen "szabad-felhasználású" licencek például a GPLv2, GPLv3, és AGPLv3.

Azt is érdemes megfontolni, hogy a **közösség** melyek esetén fog jobban hozzájárulni a projekthez:

* **Szeretnéd, hogy projekted más projektek függősége legyen?** Valószínűleg a legjobb, ha a legkedveltebb licencet használnád az adott közösségben. Például, a [MIT](https://choosealicense.com/licenses/mit/) a legnépszerűbb az [npm modulok](https://libraries.io/search?platforms=NPM) esetén.
* **Szeretnéd, hogy a projektedet a vállalatok használják?** Egy nagy vállalkozás valószínűleg kifejezett kér szabadalmi engedélyt minden résztvevőtől. Ekkor az [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) lefedi mindkét fél számára ezt.
* **Szeretné, ha projekted elérné azokat a közreműködőket, akik nem akarják, hogy zárt forráskódú szoftverekben használják fel a hozzájárulásaikat?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) vagy (ha nem kívánnak hozzájárulni még a zárt forráskódú szolgáltatásokhoz sem) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) teljességgel megfelelő.

A **cégeknek** lehetnek speciális licenc kikötéseik a nyílt forráskódú projektek esetén. Például megengedő licencet vár el, hogy a vállalat a saját zárt forráskódú termékében használhassa azt. Vagy a vállalatnak szüksége lehet egy erős szabad-felhasználású licencre és egy további hozzájárulási megállapodásra (lásd alább), hogy csak a cége és senki más ne használhassa a projektet zárt forráskódú szoftverekben. Vagy a vállalatnak bizonyos igényei lehetnek a szabványokkal, a társadalmi felelősséggel vagy az átláthatósággal kapcsolatban, amelyek mindegyike különleges licencelési stratégiát igényelhet. Beszélj a [céged jogi osztályával](#mit-kell-tudnia-a-cégem-jogi-osztályának).

Amikor új projektet hozol létre a GitHub-on, lehetőséged van a licenc kiválasztására. A fent említett licencek egyikét választva a GitHub projekted nyílt forráskódúvá válik. Ha más lehetőséget keresel, nézd át a [choosealicense.com](https://choosealicense.com) oldalt, hogy megtaláld a magadnak megfelelőt, még akkor is [ha nem szoftver projekt](https://choosealicense.com/non-software/).

## Mi van, ha meg akarom változtatni a projekt licencét?

A legtöbb projektnek nem szükséges licencet módosítania, de vannak körülmények, amikor mégis szükséges.

Például, ahogy a projekt növekszik, adsz hozzá a függőségeket vagy a felhasználókat, vagy akár a vállalat megváltoztatja a stratégiáját, amelyek közül bármelyik is történik, lehet más licencet igényelhet. Továbbá, ha elhanyagoltad a projekt licencelését a kezdetektől fogva, a licenc hozzáadásával ugyanaz a helyzet, mintha licencet változtatnál. A projekt licencének hozzáadásakor vagy megváltoztatásához három alapvető dolgot kell figyelembe venni:

**Bonyolult.** A licenckompatibilitás és a megfelelőség meghatározása, valamint a szerzői joggal rendelkező személyek kezelése, nagyon gyorsan bonyolult és zavaros helyzetet teremthet. Az új kiadások és hozzájárulások új, de kompatibilis licencére való áttérés eltér attól, hogy az összes meglévő hozzájárulást újralicenceled. Vond be a jogi csapatot az engedélyek megváltoztatására vonatkozó ötlet elején. Még akkor is, ha a licencszerződés megváltoztatásához a projekt szerzői jogtulajdonosai engedélyt adnak, vedd figyelembe a változás hatását a projekt többi felhasználójára és résztvevőjére. Gondoljon egy licencváltozásra úgy, mint a projekt "irányítási eseményére", amely valószínűleg zökkenőmentesen megy végbe, ha a világos kommunikációval és a projekt érdekeltjeivel folytatott konzultációt lefolytatod. Ez egy fontos ok arra, hogy a projekt kezdetétől megfelelő licencet válassz és használj!

**Jelenlegi licenc.** Ha a jelenlegi licenc kompatibilis a meglévővel, akkor nyugodtan kezd használni az újat. Ennek azaz oka, hogy ha az A licenc kompatibilis a B licenccel, akkor betartja az A feltételeit, miközben betartja a B feltételeit is (de nem feltétlenül fordítva). Tehát, ha jelenleg engedélyező licencet használsz (pl. MIT), akkor további feltételeket szabva válthatsz licencet, amennyiben megtartod a MIT licenc másolatát, és a kapcsolódó szerzői jogi megjegyzéseket (azaz továbbra is megfelel az MIT licenc minimális feltételei). Ha azonban a jelenlegi licenced nem megengedő (például nem "szabad-felhasználású", vagy nincs licence), és nem te vagy az egyetlen szerzői jogi tulajdonos,akkor nem tudsz áttérni a MIT-re. Alapvetően egy megengedő licenccel, a projekt szerzői előzetesen engedélyt adtak a licenc későbbi megváltoztatására.

**A projekt meglévő szerzői jogainak tulajdonosai.** Ha egyedüli résztvevője vagy a projektnek, akkor te vagy céged a projekt egyedüli szerzői jog birtokosa. Hozzáadhatsz vagy módosíthatsz bármilyen licencet, amit csak szeretnél. Más esetben előfordulhat, hogy más szerzői jog tulajdonosai meg kell hogy egyeznek a licenc megváltoztatásához. Kik ők? Azok az emberek, akik elkötelezték magukat a projektben és hozzájárultak ahhoz. Néhány esetben azonban, a szerzői jogokat az emberek munkáltatói fogják megtartani. Bizonyos esetekben az emberek csak minimálisan járulnak hozzá, de nincs olyan szigorú és egyértelmű szabály arra, hogy a kódok bizonyos soraiban lévő hozzájárulások nem tartoznak-e a szerzői jog alá. Mit lehet ekkor tenni? Attól függ. Egy viszonylag kicsi és fiatal projekt esetében lehet, hogy minden meglévő résztvevő beleegyezik a licencváltozásba egy hibajegy vagy beolvasztási kérelmen keresztül. Egy nagy, és hosszú életű projektek esetében azonban sok közreműködőt, és még akár az örökösöket is meg kell keresni. A Mozilla-nak évekig tartott (2001-2006) a Firefox, a Thunderbird és a kapcsolódó szoftverek újbóli licencelése.

Alternatív megoldásként, a résztvevők előzetesen (egy további résztvevői megállapodás alapján - lásd alább) bizonyos feltételek mellett, a meglévő nyílt forráskódú licenc változtatását is engedélyezhetik. Ez kicsit javítja a licencváltás összetettségét. Szükséged lesz további segítségre az ügyvédek részéről, és továbbra is egyértelműen kommunikálni kell a projekt érdekeltjeivel a licencváltás végrehajtásának folyamatát.

## Szükségem van-e további hozzájárulási megállapodásra?

Valószínűleg nem. A nyílt forráskódú projektek túlnyomó többsége esetében a nyílt forráskódú licenc implicit módon tartalmazza egyaránt a bejövő (a résztvevőkről) és a kimenő (más hozzájárulók és felhasználók) licencet. Ha a projekt a GitHub-on van, akkor a GitHub Általános Szerződési Feltételei szerint a "bejövő = kimenő" elv [kifejezett alapértelmezett](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license).

Egy további hozzájárulási megállapodás, amelyet gyakran közreműködői licenc megállapodásnak (CLA) neveznek, adminisztratív munkát generálhat a projektgazdák számára. A projekt és a kivitelezés függvénye, hogy mennyi munkát jelent egy megállapodás. Egy egyszerű megállapodás megkövetelheti, hogy a közreműködők egy kattintással megerősítsék, hogy megvan a szükséges joguk a nyílt forráskódú projekt licencének megfelelő részvételhez. A bonyolultabb megállapodás jogi felülvizsgálatot és a résztvevő munkáltatójától kapott lemondási nyilatkozatot igényelhet.

A "papírmunka" egyesek szerint szükségtelen, vagy nehezen érthetőnek esetleg tisztességtelenek tartják (ha a megállapodás kedvezményezettje több jogot kap, mint a közreműködők vagy a nyilvánosság, a projekt nyílt forráskódú licencén túl), egy újabb közreműködői megállapodás barátságtalannak tűnhet a projekt közösségének számára.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">
    Megszüntettük a CLA-kat a Node.js projektben. Ezzel csökkenthető a közreműködői belépés előtt álló akadályok száma a Node.js esetén, ezáltal növelve a projektben résztvevők bázisát.
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Broadening Node.js Contributions"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Egyes helyzetekben, szükséges lehet további, a projekthez kapcsolódó közreműködői megállapodást kötni:

* Az ügyvédek azt szeretnék, ha minden résztvevő kifejezetten elfogadná (aláírná, online vagy offline) a közreműködői feltételeket, talán azért, mert úgy érzik, hogy a nyílt forráskódú licenc nem elég. Ha csak ez az egyetlen gond, akkor elegendőnek kell lennie a nyílt forráskódú licencnek és egy megerősítő közreműködői megállapodásnak, amely ezt elfogadja. A [jQuery Individual Contributor License Agreement](https://contribute.jquery.org/CLA/) egy jó példa egy érthető, könnyen használhatói CLA-nak. Néhány projekt esetén, a [Developer Certificate of Origin](https://github.com/probot/dco) is alternatíva lehet.
* A projekt egy olyan nyílt forráskódú licencet használ, amely nem tartalmaz kifejezett szabadalmi megkötést (például MIT), és szüksége van egy szabadalmi meghatalmazásra minden résztvevőtől, akik közül néhányan nagy szabadalmi portfóliókkal rendelkező cégeknek dolgoznak, amelyek felhasználhatók arra, hogy célba vegyenek más projektek résztvevőit és felhasználóit. Az [Apache Individual Contributor License Agreement](https://www.apache.org/licenses/icla.pdf) egy általánosságban használt közreműködői megállapodás arra, hogy a szabadalmak a hozzájárulás esetén az Apache License 2.0 licenc szerint értendők.
* A projekted egy "szabad-felhasználású" licencelésű, de a projektből egy szabadalmaztatott, saját verziót is terjeszteni szeretnél. Minden résztvevőtől a szerzői jogokat át kell ruházni rád, hogy megengedje neked (de nem a nyilvánosságnak) a szabad használatot. A [MongoDB Contributor Agreement](https://www.mongodb.com/legal/contributor-agreement) egy ilyen típusú megállapodás.
* Úgy gondolod, hogy a projektnek élete során szükség lehet az engedélyek megváltoztatására, és azt szeretnéd, ha a közreműködők előre megállapodnak erről, az ilyen jellegű változásokról.

Ha további hozzájárulási megállapodást kell használnod, fontold meg egy olyan egységes használatát, mint például a [CLA assistant](https://github.com/cla-assistant/cla-assistant) hogy minimalizáld a résztvevők terhelését.

## Mit kell tudnia a cégem jogi osztályának?

Ha egy nyílt forráskódú projektet vállalati munkatársaként fejlesztesz, először a jogi csapatnak kell arról tudni, hogy nyílt forráskódú projektet fogsz a cég nevében létrehozni.

Fontold ezt meg, még akkor is, ha személyes projektről van szó. Valószínűleg van egy "munkavállalói megállapodás" a cég és te közted, amely nekik némi ellenőrzést biztosít a projektjeid felett különösen, ha kapcsolódik a vállalat üzleti tevékenységével, vagy vállalati erőforrásokat használsz a projekt fejlesztéséhez. A céged könnyedén megadhatja az engedélyt, és talán már van is alkalmazott-barát munkáltatói megállapodás vagy vállalati irányelv. Ha nem, akkor tárgyalhatsz róla (például magyarázd el, hogy a projekt a vállalat szakmai tanulási és fejlesztési céljait szolgálja), vagy ha ez sikertelen, akkor ne dolgozz a projekten, amíg nem találsz jobb vállalatot.

* **Ha a cégednek csinálsz nyílt forráskódú projektet,** akkor mindenképpen tudjanak róla. A jogi csapat valószínűleg már rendelkezik a nyílt forráskódú licencek (és esetleg további közreműködői megállapodások) használatára vonatkozó irányelvekkel, amelyek a vállalat üzleti követelményei és szakértelme alapján biztosítják, hogy a projekt licence megfelel a feltételeknek. Ha nem, akkor szerencsés a helyzet! A jogi csapatnak együtt kell dolgoznia veled, hogy megoldjátok ezt. Néhány dolog, amire gondolni kell:

* **Harmadik fél anyagai:** A projektek mások által létrehozott függőségeket tartalmaznak, vagy más módon tartalmaznak kódot vagy használnak mások által írt kódot? Ha ezek nyílt forráskódúak, akkor meg kell felelnie azok nyílt forráskódú licencének. Ez a harmadik féltől származó nyílt forráskódú licenc meghatározásával kezdődik, amellyel a saját, kiválasztott licencünknek kompatibilisnek kell lennie. Ha a projekt módosítja vagy terjeszti a harmadik fél nyílt forráskódú anyagát, akkor a jogi csapat azt is szeretné tudni, hogy megfelel-e a harmadik fél nyílt forráskódú licenc  feltételeinek, mint például a szerzői jogi megjegyzések megőrzése. Ha a projekt mások kódját használja, amely nem rendelkezik nyílt forráskódú licenccel, akkor valószínűleg fel kell kérnie a harmadik felet, hogy [adjon hozzá egy nyílt forráskódú licencet](https://choosealicense.com/no-license/#for-users), ha nem kapsz ilyet, akkor abba kell hagyni ezen kód használatát.

* **Üzleti titkok:** Vizsgáld meg, hogy van-e valami a projektben, amit a vállalat nem akar a nyilvánosság számára elérhetővé tenni. Ha igen, akkor nyisd meg a projekt többi részét, de csak miután kiszedted a privát anyagot belőle.

* **Szabadalmak:** A céged szabadalommal rendelkezik abban, amelyet nyílt forráskódként akarsz kiadni, és ennek a szabadalomnak a [nyilvánosságra hozásába](https://en.wikipedia.org/wiki/Public_disclosure) a cég beleegyezett? Sajnos felkérhetnek, arra hogy várj még. Ha nagy szabadalmi portfóliókkal rendelkező cég várja a projekthez való hozzájárulást, a jogi csoport talán azt is szeretné, ha olyan licencet választanál, amellyel automatikus hozzájárulást kapnál a résztvevőktől (például az Apache 2.0 vagy a GPLv3), vagy egy további közreműködői szerződést vár el (lásd fent).

* **Védjegyek:** Duplán ellenőrizd, hogy a projekted neve nem ütközik [valamely védjeggyel](../starting-a-project/#kerüld-el-a-névütközést). Ha saját céged védjegyeit használod a projektben, ellenőrizd, hogy nem okoz-e ütközéseket, problémákat. [FOSSmarks](http://fossmarks.org/) egy gyakorlati útmutató a védjegyek megértéséhez szabad és nyílt forráskódú projektek esetén.

* **Magánélet:** A projekt adatokat gyűjt a felhasználókról? Van távelérés vállalati szerverekhez? A jogi csoport segít neked a vállalati irányelvek és a külső szabályok betartásában.

Ha kiadod a vállalat első nyílt forráskódú projektjét, a fentiek elégségesek ahhoz, hogy sikerüljön (de ne aggódj, a legtöbb projektnek nem kell komoly problémát okoznia).

Hosszabb távon a jogi csapat többet tehet azért, hogy segítsen a vállalatnak abban, hogy jobban részt vegyen a nyílt forráskódban:

* **Munkavállalói szabályok a részvételre:** Fontold meg, olyan vállalati irányelv kidolgozását, amely meghatározza, hogy a munkavállalók hogyan járulnak hozzá a nyílt forráskódú projektekhez. Egy világos politika csökkenti az alkalmazottak közötti zavart, és segít abban, hogy hozzájáruljanak a nyílt forráskódú projektekhez a vállalat érdekei szerint, akár munkájuk részeként, akár szabadidejükben. Jó példa erre a Rackspace féle [Model IP and Open Source Contribution Policy](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/). 

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">
  A javításhoz kapcsolódó munkaszabályok kialakítása a munkavállaló tudásbázisát és megbecsülését is javítja. Ez azt mutatja, hogy a vállalat az adott munkavállaló tudásának a fejlesztésébe fektet be, és megteremti az önállóságot és az autonómiát. Mindezek magasabb morálhoz és a jobb munkavállalók megtartáshoz is vezetnek.
  <p markdown="1" class="pquote-credit">
— @vanl, ["A Model IP and Open Source Contribution Policy"](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **Mit kell kiadni:** [(Majdnem) mindent?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) Ha a jogi csapat megérti és hajlandó munkát befekteti a vállalat nyílt forráskódú stratégiájába, akkor az inkább segíteni fog, mint akadályozni.
* **Megfelelés:** Még ha a céged nem is fejleszt nyílt forráskódot, biztosan használja azt. A [tudatosság és folytonosság](https://www.linuxfoundation.org/blog/2015/06/why-companies-that-use-open-source-need-a-compliance-program/) megakadályozhatja a fejfájást, a késedelmeket és a pereket.

<aside markdown="1" class="pquote">
  A szervezeteknek rendelkezniük kell olyan licenc- és megfelelőségi stratégiával, amely megfelel mind a „megengedő”, mind a „szabad-felhasználású” kategóriáknak. Ez azzal kezdődik, hogy nyilvántartást vezetnek az általad használt nyílt forráskódú szoftverekre vonatkozó licencfeltételekről, beleértve az alkomponenseket és a függőségeket.
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Open Source Software: Compliance Basics And Best Practices"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Nyílt szabadalmak és védelem:** A céged lehet szívesen csatlakozna az [Open Invention Network](https://www.openinventionnetwork.com/)-höz, megosztott szabadalomvédelmi társulat, a tagok nagyobb, nyílt forráskódú projektjeinek használatának a megóvására, vagy más, [alternatív szabadalmi engedélyezésére](https://www.eff.org/document/hacking-patent-system-2016).
* **Egyéb irányítás:** Különösen, ha [jogi személy önállóan, a cégtől függetlenül](../leadership-and-governance/#szükségem-van-egy-jogi-személyre-a-projektem-támogatására) végzi az irányítást.
