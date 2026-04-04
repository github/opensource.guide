---
lang: hu
title: Nyílt forráskód mérőszámai
description: A nyílt forráskódú projekt sikerének titka a mérés és nyomon követés.
class: metrics
order: 9
image: /assets/images/cards/metrics.png
related:
  - finding
  - best-practices
---

## Miért mérünk bármit is?

Ha bölcsen használjuk a rendelkezésre álló adatokat, nyílt forráskódú projekt karbantartójaként jobb döntéseket tudunk hozni.

Több információ birtokában:

* Megértheted, hogy a felhasználók hogyan reagálnak egy új funkcióra
* Rájöhetsz arra, hogy a felhasználóid honnan érkeznek
* El tudod dönteni, hogy egy adott használati esetet, vagy új funkcionalitást támogatsz-e
* Számszerűsítheted a projekt népszerűségét
* Megértheted, hogy a felhasználók hogyan használják a munkádat
* Támogatással és szponzorálással pénzhez juthatsz

Például, a [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md) úgy találta, hogy a Google Analytics segíti őket a feladatok priorizálásában:

> A Homebrew ingyenes, és teljességgel önkéntes munka, amit a fejlesztők a szabadidejükben végeznek. Ennek eredményeként nem rendelkezünk erőforrásokkal ahhoz, hogy részletes felhasználói tanulmányokat végezhessünk a Homebrew felhasználókról, ami alapján el tudjuk dönteni hogy, miként lehet a legjobban megtervezni a jövőbeli funkciókat és priorizálni az aktuális feladatokat. Ugyanakkor az anonim összesített felhasználói elemzés lehetővé teszi számunkra, hogy priorizáljuk a javításokat és az új funkciók fejlesztését aszerint, hogy hol, és mikor használják az emberek a Homebrew-t.

A népszerűség nem minden. Mindenki különböző okokból kezd a nyílt forráskódba. Ha neked, mint nyílt forráskód karbantartójának az a célod, hogy megmutasd a világnak a munkád, átláthatóvá akarod tenni a kódod vagy csak élvezetből csinálod, akkor a mérőszámok nem biztos, hogy fontosak számodra.

Ha viszont mélyebb szinten akarod megismerni a projektedet, olvass tovább, hogy megtudd, milyen módon elemezheted a projekted aktivitását.

## Felfedezés

Mielőtt bárki elkezdené használni a projektedet, vagy részt venne benne, tudniuk kell, hogy az létezik, és hogy hol találják. Kérdezd meg magadtól: _Az emberek megtalálják ezt a projektet?_

![Traffic graph](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

Ha a munkád a GitHub-on van, [akkor láthatod](https://docs.github.com/repositories/viewing-activity-and-data-for-your-repository/viewing-traffic-to-a-repository) hogy hány ember járt az oldaladon, és hogy honnan érkeztek. A projekt oldaláról, válaszd ki az "Insights", majd a "Traffic" funkciót. Ezen az oldalon a következőket láthatod:

* **Views:** Megadja, hogy hányszor nézték meg a projekt oldalát.

* **Unique visitors:** Megadja, hogy hány ember látogatta meg a projekt oldalát.

* **Referring sites:** Megadja, hogy honnan érkeztek az oldalra az emberek. Ez a metrika segíthet kitalálni, hogy hol érheted el a közönséget és hogyan működnek a promóciós erőfeszítéseid.

* **Popular content:** Megadja, hogy a projekted mely részére kíváncsiak a látogatók, lebontva oldalakra és látogatókra.

[GitHub stars](https://docs.github.com/get-started/exploring-projects-on-github/saving-repositories-with-stars) szintén segíthet a népszerűség mérésében. Bár a _GitHub stars_ nem szükségszerűen van kapcsolatban azzal, hogy hányan töltötték le vagy használták a projektet, mégis alkalmas arra, hogy mérje azt, hogy mennyi ember érdeklődését keltette fel a munkád.

Érdemes lehet [egyéb helyeken is nyomon követni az elérhetőséget](https://opensource.com/business/16/6/pirate-metrics): például, Google PageRank, hivatkozások a projekt oldaladról vagy hivatkozások más nyílt forráskódú oldalról, vagy weboldalról.

## Használat

Az emberek megtalálják a projektet ezen a vad és őrült dolgon, amit internetnek hívunk. Ideális esetben, amikor meglátják a projektet, késztetést érezhetnek rá, hogy tegyenek valamit. A második kérdés, amit fel kell tenned magadnak: _Az emberek használják ezt a projektet?_

Ha a projekt terjesztéséhez csomagkezelőt (például npm vagy RubyGems.org) használsz, nyomon követheted a projekt letöltéseit.

Mindegyik csomagkezelő kissé eltérő definíciót használhat a "letöltésre", és a letöltések nem feltétlenül korrelálnak a telepítésekkel vagy a használattal, de az összehasonlításhoz valamilyen alapot biztosítanak. Próbáld ki a [Libraries.io](https://libraries.io/) használatát, mellyel számos ismert csomagkezelő statisztikáit követheted.

Ha a GitHub-on van a projekted, akkor a "Traffic" oldalon a [clone graph](https://github.com/blog/1873-clone-graphs) diagram használatával láthatod, egy adott napon hányszor klónozták a projektedet, lebontva összes klónozásra és egyedi látogatókra.

![Clone graph](/assets/images/metrics/clone_graph.png)

Ha a felhasználók száma alacsonyabb, mint a projektet felfedező emberek száma, két kérdést kell átgondolnod:

* A projekted nem győzi meg sikeresen a célközönséget, vagy
* Rossz közönséget céloztál meg

Például, ha a projekt a Hacker News főoldalára kerül, valószínűleg látni fogsz egy kiugrást a látogatói forgalomban, de alacsonyabb lesz a valódi felhasználók aránya, mert mindenkit elérsz a Hacker News-on. Ha Ruby projekted van, ami bemutatásra kerül egy Ruby konferencián, akkor valószínűleg nagyobb arányban lesznek felhasználók a célközönségből.

Próbáld meg kitalálni, hogy honnan jönnek a látogatók és kérj visszajelzéseket a projekt oldalon, hogy megtudd, hogy a fenti két eset közül melyik jelent problémát.

Ha már tudod, hogy az emberek használják a projektet, érdemes utánajárni, hogy mit csinálnak vele. Elágaztatják (fork-olják) a projektet és új funkciókat adnak hozzá? Vagy esetleg tudományos vagy üzleti célokra használják?

## Fenntarthatóság

Az emberek megtalálták a projektedet és használják már. A következő kérdést kell megválaszolnod magadnak: _Az emberek hozzájárulnak-e a projekthez?_

Soha sem túl korai elkezdeni gondolkodni a közreműködőkről. Ha nincsenek más emberek, akik részt vennének a projektben, akkor olyan egészségtelen helyzet alakulhat ki, hogy ugyan a projekt _közismert_ (sokan használják), de kevesen támogatják (a szükségeshez képest kevés a karbantartói erőforrás).

A fenntarthatósághoz az is szükséges, hogy [folyamatosan új résztvevők érkezzenek a projektbe](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2), mert előfordulhat, hogy a jelenlegi résztvevők más projektek felé fordulnak.

Példák a közösségi metrikákra, amelyeket érdemes rendszeresen nyomon követni:

* **Résztvevők száma és a résztvevőkre jutó kódmódosítások száma:** Megadja, hogy hány résztvevő van a projekteden, ki az, aki többet- és ki az, aki kevesebbet járul hozzá. A GitHub-on, az "Insights" -> "Contributors" alatt találod ezt meg. Jelenleg itt csak azt látod, aki az alapértelmezett fejlesztési ágon járult hozzá (commit-olt) a projekthez.

![Contributor graph](/assets/images/metrics/repo_contributors_specific_graph.png)

* **Új, alkalmi és rendszeres hozzájárulók:** Segítségével nyomon követheted, hogy jönnek-e új hozzájárulók és hogy visszatérnek-e. (Az alkalmi hozzájárulók azok, akiknek csak kevés commit-ja van. Ez jelenthet 1 vagy kevesebb, mint 5 módosítást is, rajtad múlik, hogy mi a "kevés".) Új közreműködők, hozzájárulók nélkül a projekt közössége stagnálhat.

* **A nyitott hibajegyek és beolvasztási kérelmek száma:** Ha ezek a számok túl magasak, akkor segítségre van szükséged a hibajegyek ellenőrzéséhez és osztályozásához illetve a beolvasztandó kódok áttekintéséhez.

* **A létrehozott hibajegyek és beolvasztási kérelmek száma:** Ez azt jelenti, hogy az embereket érdekli annyira a projekted, hogy létrehozzanak egy hibajegyet. Ha ez a szám idővel növekszik, az arra utal, hogy az emberek érdeklődnek a projekted iránt.

* **Közreműködők típusai:** Például: kód módosítás, elírás javítás, hibajavítás, vagy kommentelés egy hibajegyhez, módosításhoz.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/arfon?s=180" class="pquote-avatar" alt="avatar">
  A nyílt forráskód több, mint maga a kód. A sikeres nyílt forráskódú projektek magukban foglalják a kód és dokumentációs hozzájárulásokat, valamint ezen változásokkal kapcsolatos beszélgetéseket.
  <p markdown="1" class="pquote-credit">
— @arfon, ["The Shape of Open Source"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## Karbantartói aktivitás

És végül, meg kell bizonyosodnod arról, hogy a karbantartók képesek kezelni a beérkező hozzájárulások mennyiségét. Így utolsó kérdésként érdemes feltenned magadnak: _Képes vagyok reagálni a közösség munkájára, jelzéseire?_

Az inaktív karbantartók a nyílt forráskódú projektek szűk keresztmetszetévé válnak. Ha valaki hozzájárulást nyújt be, de a karbantartó soha nem reagál, az illető elkedvetlenedhet és elhagyhatja a projektet.

[Egy kutatás a Mozillától](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) azt mutatta ki, hogy a karbantartók reakcióideje és készsége kritikus tényező a folyamatos hozzájárulások eléréséhez.

Fontold meg annak nyomon követését, hogy mennyi időt vesz igénybe, amíg válaszolsz (te vagy másik karbantartó) a hozzájárulásokra, függetlenül attól, hogy az hibajegy vagy beolvasztási kérelem-e. A válasz nem jelenti azt, hogy cselekedni is kell. Például lehet ennyi: _"Köszönöm a hozzájárulásod! Jövő héten tudom átnézni."_

Meg tudod azt is mérni, hogy a hozzájárulási folyamat különböző fázisai között mennyi idő telik el, például:

* Átlagosan mennyi ideig van nyitva egy hibajegy
* Vajon mennyi hibajegy van lezárva beolvasztási kérelemmel
* Vajon mennyi régi, már nem aktuális hibajegyet kellett lezárni
* Egy beolvasztási kérelem elfogadásának és beolvasztásának átlagos ideje

## Használj 📊 hogy többet tudj meg a közösségről

A metrikák megértése segít egy aktív, fejlődő nyílt forráskódú projekt létrehozásában. Még ha nem is követed nyomon az összes metrikát, használd a fenti módszereket, hogy lásd a viselkedési mintákat, amelyek segítik a projektedet.
