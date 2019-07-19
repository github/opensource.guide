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

Ha nem alkalmazzol nyílt forráskódú licencet, akkor mindenki, aki hozzájárul a projekthez, a saját munkájának kizárólagos szerzői jogi tulajdonosa lesz. Ez azt jelenti, hogy senki nem tudja használni, másolni, terjeszteni vagy módosítani a hozzájárulást - és a "senki" alatt magadat is értsd.

És végül, a projektnek lehetnek függőségei, olyan licenckövetelményekkel, amelyekről nincs tudomásod. A projekt közössége vagy a munkáltató irányelvei szintén előírhatják, hogy a projektje konkrét nyílt forráskódú licenceket kell használnod. Ezeket az eseteket az alábbiakban ismertetjük.

## Nyílt forráskódúak a nyilvános GitHub projektek?

Amikor [létrehozol egy új projektet](https://help.github.com/articles/creating-a-new-repository/) a GitHub-on, lehetőséged van ezt **private** (privát) vagy **public** (publikus) módon megtenni.

![Projekt létrehozása](/assets/images/legal/repo-create-name.png)

**A GitHub projekt nyilvánossága nem azonos a projekt licencével!** A publikus projek fogalma itt van definiálva: [GitHub's Terms of Service](https://help.github.com/articles/github-terms-of-service/#f-copyright-and-content-ownership), ami engedélyezi ezek megtekintését, vagy e célból ennek elágaztatását (fork), de más egyebet nem.

Ha azt szeretné, hogy mások használhassák, terjesszék, módosítsák vagy hozzájáruljanak a projekthez, meg kell nevezni egy nyílt forráskódú licencet. Például, senki sem jogosult a GitHub projekt akármelyik részének törvényes használatára, még ha nyilvános is, kivéve, ha kifejezetten megadod ezt a jogot erre a megfelelő licenccel.

## Tömören, hogy mit kell tenned a projekted védelme érdekében

Szerencséd van, mert ma a nyílt forráskódú licencek szabványosítottak és könnyen kezelhetők. Ezeket a licenceket másolhatod közvetlenül a projektedbe.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), és [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) a legismertebb nyílt forráskódú licencek, de vannak más lehetőségek is amikből választhatsz. Megtalálod a teljes szövegét ezeknek a licenceknek, és azt, hogy hogyan használhatod őket, a [choosealicense.com](https://choosealicense.com/) oldalon.

Ha új projektet hozol létre a GitHub-on, meg kell adnod, hogy [milyen licencű a projekt](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
  A szabványosított licenc a laikus személyek érdekeit szolgálja, hogy pontosan tudják, mit tehetnek és mit nem tehetnek a szoftverrel. Kerüld az egyéni, módosított vagy nem szabványos fogalmakat – hacsak nem felétetlenül szükséges –, amelyek akadályt jelenthetnek a kód további felhasználására.
  <p markdown="1" class="pquote-credit">
— @benbalter, ["Everything a government attorney needs to know about open source software licensing"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## Melyik nyílt forráskódú licenc felel meg a projektemnek?

Ha üres lappal indulsz, akkor talán a legjobb a [MIT licenc](https://choosealicense.com/licenses/mit/). Rövid, nagyon könnyen érthető, és megengedőt, amíg megtartja a licenc másolatát, beleértve a szerzői jogi nyilatkozatot is. Ha valaha is szükséged lesz rá, akkor más licenc alapján is kiadhatod később a projektedet.

Más esetben viszont, a projekthez való megfelelő nyílt forráskódú licenc kiválasztása a te célkitűzéseidtől függ.

A projektednek vélehtően lesznek **függőségei**. például, ha nyílt forráskódú Node.js alapú projekted van, akkor használni fogsz npm-et (Node.js Package Manager). Minden egyes függőségnek külön nyílt forráskódú licence van. Ha mindegyik licenc "megengedő" (engedély megadása módosításra és megosztásra, más engedélyezés feltétel nélkül), akkor használhatod a kívánt függőséget. Általánosan megengedő licencek a MIT, Apache 2.0, ISC, és a BSD.

Másrészről, hogy ha bármelyik függőséged licence "szabadfelhasználású" (szintén ad jogokat, amennyiben a további felhasználás feltételeit megtartják), akkor a projekted ezt a licencet viheti tovább. Ilyen "szabadfelhasználású" licencek például a GPLv2, GPLv3, és AGPLv3.

Azt is érdemes megfontolni, hogy a **közösség** melyek esetén fog jobban hozzájárulni a projekthez:

* **Szeretnéd, hogy projekted más projektek függősége legyen?** Valószínűleg a legjobb, ha a legkedveltebb licencet használnád az adott közösségben. Például, a [MIT](https://choosealicense.com/licenses/mit/) a legnépszerűbb az [npm modulok](https://libraries.io/search?platforms=NPM) esetén.
* **Szeretnéd, hogy a projektedet a vállalatok használják?** Egy nagy vállalkozás valószínűleg kifejezett kér szabadalmi engedélyt minden résztvevőtől. Ekkor az [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) lefedi mindkét fél számára ezt.
* **Szeretné, ha projekted elérné azokat a közreműködőket, akik nem akarják, hogy zárt forráskódú szoftverekben használják fel a hozzájárulásaikat?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) vagy (ha nem kívánnak hozzájárulni még a zárt forráskódú szolgáltatásokhoz sem) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) teljességgel megfelelő.

A **cégeknek** lehetnek speciális licenc kikötéseik a nyílt forráskódú projektek esetén. Például megengedő licencet vár el, hogy a vállalat a saját zárt forráskódú termékében használhassa azt. Vagy a vállalatnak szüksége lehet egy erős szabadfelhasználású licencre és egy további hozzájárulási megállapodásra (lásd alább), hogy csak a cége és senki más ne használhassa a projektet zárt forráskódú szoftverekben. Vagy a vállalatnak bizonyos igényei lehetnek a szabványokkal, a társadalmi felelősséggel vagy az átláthatósággal kapcsolatban, amelyek mindegyike különleges licencelési stratégiát igényelhet. Beszélj a [céged jogi osztályával](#mit-kell-tudnia-a-cégem-jogi-osztályának).

Amikor új projektet hozol létre a GitHub-on, lehetőséged van a licenc kiválasztására. A fent említett licencek egyikét választva a GitHub projekted nyílt forráskódúvá válik. Ha más lehetőséget keresel, nézd át a [choosealicense.com](https://choosealicense.com) oldalt, hogy megtaláld a magadnak megfelelőt, még akkor is [ha nem szoftver projekt](https://choosealicense.com/non-software/).

## Mi van, ha meg akarom változtatni a projekt licencét?

A legtöbb projektnek nem szükséges licencet módosítania, de vannak körülmények, amikor mégis szükséges.

Például, ahogy a projekt növekszik, adsz hozzá a függőségeket vagy a felhasználókat, vagy akár a vállalat megváltoztatja a stratégiáját, amelyek közül bármelyik is történik, lehet más licencet igényelhet. Továbbá, ha elhanyagoltad a projekt licencelését a kezdetektől fogva, a licenc hozzáadásával ugyanaz a helyzte, mintha licencet változtatnál. A projekt licencének hozzáadásakor vagy megváltoztatásához három alapvető dologot kell figyelembe venni:

**Bonyolult.** A licenckompatibilitás és a megfelelőség meghatározása, valamint a szerzői joggal rendelkező személyek kezelése, nagyon gyorsan bonyolult és zavaros helyzetet teremthet. Az új kiadások és hozzájárulások új, de kompatibilis licencjére való áttérés eltér attól, hogy az összes meglévő hozzájárulást újralicenceled. Vond be a jogi csapatot az engedélyek megváltoztatására vonatkozó ötlet elején. Még akkor is, ha a licencszerződés megváltoztatásához a projekt szerzői jogtulajdonosai engedélyt adnak, vedd figyelembe a változás hatását a projekt többi felhasználójára és résztvevőjére. Gondoljon egy licencváltozásra úgy, mint a projekt irányítási eseményére”, amely valószínűleg zökkenőmentesen megy végbe, ha a világos kommunikációval és a projekt érdekeltjeivel folytatott konzultációt lefolytatod. Ez egy fontos ok arra, hogy a projekt kezdetétől megfelelő licencet válassz és használj!

**Jelenlegi licenc.** Ha a jelenlegi licenc kompatibilis a meglévővel, akkor nyugodtan kezd használni az újat. Ennek az az oka, hogy ha az A licenc kompatibilis a B licenccel, akkor betartja az A feltételeit, miközben betartja a B feltételeit is (de nem feltétlenül fordítva). Tehát, ha jelenleg engedélyező licencet használ (pl. MIT), akkor további feltételeket szabva válthatsz licencet, amennyiben megtartod a MIT licenc másolatát, és a kapcsolódó szerzői jogi megjegyzéseket (azaz továbbra is megfelel az MIT licenc minimális feltételei). Ha azonban a jelenlegi licenced nem megengedő (például nem "szabadfelhasználású", vagy nincs licence), és nem te vagy az egyetlen szerzői jogi tulajdonos,akkor nem tudsz áttérni a MIT-re. Alapvetően egy megengedő licenccel, a projekt szerzői előzetesen engedélyt adtak a licenc későbbi megváltoztatására.

**A projekt meglévő szerzői jogainak tulajdonosai.** Ha egyedüli résztvevője vagy a projektnek, akkor te vagy céged a projekt egyedüli szerzői jog birtokosa. Hozzáadhatsz vagy módosíthatsz bármilyen licencet, amit csak szeretnél. Más esetben előfordulhat, hogy más szerzői jog tulajdonosai meg kell hogy egyeznek a licenc megváltoztatásához. Kik ők? Azok az emberek, akik elkötelezték magukat a projektben és hozzájárultak ahhoz. Néhány esetben azonban, a szerzői jogokat az emberek munkáltatói fogják megtartani. Bizonyos esetekben az emberek csak minimálisan járulnak hozzá, de nincs olyan szigorú és egyértelmű szabály arra, hogy a kódok bizonyos soraiban lévő hozzájárulások nem tartoznak-e a szerzői jog alá. Mit lehet ekkor tenni? Attól függ. Egy viszonylag kicsi és fiatal projekt esetében lehet, hogy minden meglévő résztvevő beleegyezik a licencváltozásba egy hibajegy vagy beolvasztási kérelmen keresztül. Egy nagy, és hosszú életű projektek esetében azonban sok közreműködőt, és még akár az örökösöket is meg kell keresni. A Mozilla-nak évekig tartott (2001-2006) a Firefox, a Thunderbird és a kapcsolódó szoftverek újbóli licencelése.

Alternatív megoldásként, a résztvevők előzetesen (egy további résztvevői megállapodás alapján - lásd alább) bizonyos feltételek mellett, a meglévő nyílt forráskódú licenc változtatását is engedélyezhetik. Ez kicsit javítja a licencváltás összetettségét. Szükséged lesz további segítségre az ügyvédek részéről, és továbbra is egyértelműen kommunikálni kell a projekt érdekeltjeivel a licencváltás végrehajtásának folyamatát.

## Szükségem van-e további hozzájárulási megállapodásra?

Valószínűleg nem. A nyílt forráskódú projektek túlnyomó többsége esetében a nyílt forráskódú licenc implicit módon tartalmazza egyaránt a bejövő (a résztvevőkről) és a kimenő (más hozzájárulók és felhasználók) licencet. Ha a projekt a GitHub-on van, akkor a GitHub Általános Szerződési Feltételei szerint a "bejövő = kimenő" elv [kifejezett alapértelmezett](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license).

Egy további hozzájárulási megállapodás, amelyet gyakran közreműködői licenc megállapodásnak (CLA) neveznek, adminisztratív munkát generálhat a projektgazdák számára. A projekt és a kiveitelezés függvénye, hogy mennyi munkát jelent egy megállapodás. Egy egyszerű megállapodás megkövetelheti, hogy a közreműködők egy kattintással megerősítsék, hogy megvan a szükséges joguk a nyílt forráskódú projekt licencének megfelelő részvételhez. A bonyolultabb megállapodás jogi felülvizsgálatot és a résztvevő munkáltatójától kapott lemondási nyilatkozatot igényelhet.

A „papírmunka” egyesek szerint szükségtelen, vagy nehezen érthetőnek estleg tisztességtelenek tartják (ha a megállapodás kedvezményezettje több jogot kap, mint a közreműködők vagy a nyilvánosság, a projekt nyílt forráskódú licencén túl), egy újabb közreműködői megállapodás barátságtalannak tünhet a projekt közösségének számára.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">
    Megszűntettük a CLA-kat a Node.js projektben. Ezzel csökkenthető a közreműködőknek a belépés előtt álló akadályok száma a Node.js esetén, ezáltal növelve a projektben résztvevők bázisát.
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Broadening Node.js Contributions"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Some situations where you may want to consider an additional contributor agreement for your project include:

* Your lawyers want all contributors to expressly accept (_sign_, online or offline) contribution terms, perhaps because they feel the open source license itself is not enough (even though it is!). If this is the only concern, a contributor agreement that affirms the project's open source license should be enough. The [jQuery Individual Contributor License Agreement](https://contribute.jquery.org/CLA/) is a good example of a lightweight additional contributor agreement. For some projects, a [Developer Certificate of Origin](https://github.com/probot/dco) can be an alternative.
* Your project uses an open source license that does not include an express patent grant (such as MIT), and you need a patent grant from all contributors, some of whom may work for companies with large patent portfolios that could be used to target you or the project's other contributors and users. The [Apache Individual Contributor License Agreement](https://www.apache.org/licenses/icla.pdf) is a commonly used additional contributor agreement that has a patent grant mirroring the one found in the Apache License 2.0.
* Your project is under a copyleft license, but you also need to distribute a proprietary version of the project. You'll need every contributor to assign copyright to you or grant you (but not the public) a permissive license. The [MongoDB Contributor Agreement](https://www.mongodb.com/legal/contributor-agreement) is an example this type of agreement.
* You think your project might need to change licenses over its lifetime and want contributors to agree in advance to such changes.

If you do need to use an additional contributor agreement with your project, consider using an integration such as [CLA assistant](https://github.com/cla-assistant/cla-assistant) to minimize contributor distraction.

## Mit kell tudnia a cégem jogi osztályának?

If you're releasing an open source project as a company employee, first, your legal team should know that you're open sourcing a project.

For better or worse, consider letting them know even if it's a personal project. You probably have an "employee IP agreement" with your company that gives them some control of your projects, especially if they are at all related to the company's business or you use any company resources to develop the project. Your company _should_ easily give you permission, and maybe already has through an employee-friendly IP agreement or a company policy. If not, you can negotiate (for example, explain that your project serves the company's professional learning and development objectives for you), or avoid working on your project until you find a better company.

**If you're open sourcing a project for your company,** then definitely let them know. Your legal team probably already has policies for what open source license (and maybe additional contributor agreement) to use based on the company's business requirements and expertise around ensuring your project complies with the licenses of its dependencies. If not, you and they are in luck! Your legal team should be eager to work with you to figure this stuff out. Some things to think about:

* **Third party material:** Does your project have dependencies created by others or otherwise include or use others' code? If these are open source, you'll need to comply with the materials' open source licenses. That starts with choosing a license that works with the third party open source licenses (see above). If your project modifies or distributes third party open source material, then your legal team will also want to know that you're meeting other conditions of the third party open source licenses such as retaining copyright notices. If your project uses others' code that doesn't have an open source license, you'll probably have to ask the third party maintainers to [add an open source license](https://choosealicense.com/no-license/#for-users), and if you can't get one, stop using their code in your project.

* **Trade secrets:** Consider whether there is anything in the project that the company does not want to make available to the general public. If so, you could open source the rest of your project, after extracting the material you want to keep private.

* **Patents:** Is your company applying for a patent of which open sourcing your project would constitute [public disclosure](https://en.wikipedia.org/wiki/Public_disclosure)? Sadly, you might be asked to wait (or maybe the company will reconsider the wisdom of the application). If you're expecting contributions to your project from employees of companies with large patent portfolios, your legal team may want you to use a license with an express patent grant from contributors (such as Apache 2.0 or GPLv3), or an additional contributor agreement (see above).

* **Trademarks:** Double check that your project's name [does not conflict with any existing trademarks](../starting-a-project/#avoiding-name-conflicts). If you use your own company trademarks in the project, check that it does not cause any conflicts. [FOSSmarks](http://fossmarks.org/) is a practical guide to understanding trademarks in the context of free and open source projects.

* **Privacy:** Does your project collect data on users? "Phone home" to company servers? Your legal team can help you comply with company policies and external regulations.

If you're releasing your company's first open source project, the above is more than enough to get through (but don't worry, most projects shouldn't raise any major concerns).

Longer term, your legal team can do more to help the company get more from its involvement in open source, and stay safe:

* **Employee contribution policies:** Consider developing a corporate policy that specifies how your employees contribute to open source projects. A clear policy will reduce confusion among your employees and help them contribute to open source projects in the company's best interest, whether as part of their jobs or in their free time. A good example is Rackspace's [Model IP and Open Source Contribution Policy](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">
  Letting out the IP associated with a patch builds the employee's knowledge base and reputation. It shows that the company is invested in the development of that employee and creates a sense of empowerment and autonomy. All of these benefits also lead to higher morale and better employee retention.
  <p markdown="1" class="pquote-credit">
— @vanl, ["A Model IP and Open Source Contribution Policy"](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **What to release:** [(Almost) everything?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) If your legal team understands and is invested in your company's open source strategy, they'll be best able to help rather than hinder your efforts.
* **Compliance:** Even if your company doesn't release any open source projects, it uses others' open source software. [Awareness and process](https://www.linuxfoundation.org/blog/2015/06/why-companies-that-use-open-source-need-a-compliance-program/) can prevent headaches, product delays, and lawsuits.

<aside markdown="1" class="pquote">
  Organizations must have a license and compliance strategy in place that fits both \["permissive" and "copyleft"\] categories. This begins with keeping a record of the licensing terms that apply to the open source software you’re using — including subcomponents and dependencies.
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Open Source Software: Compliance Basics And Best Practices"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Patents:** Your company may wish to join the [Open Invention Network](https://www.openinventionnetwork.com/), a shared defensive patent pool to protect members' use of major open source projects, or explore other [alternative patent licensing](https://www.eff.org/document/hacking-patent-system-2016).
* **Governance:** Especially if and when it makes sense to move a project to a [legal entity outside of the company](../leadership-and-governance/#szükségem-van-egy-jogi-személyre-a-projektem-támogatására).
