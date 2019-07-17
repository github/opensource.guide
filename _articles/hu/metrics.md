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

Az információ, ha bölcsen használjuk, segíteni tud nekünk a jobb döntések meghozatalában, ha nyílt forráskód karbantartók vagyunk.

Több információval még jobb döntést tudsz hozni:

* Megértheted, hogy a felhasználók hogyan reagálnak egy új funkcióra
* Rájöhetsz arra, hogy a felhasználóid honnan érkeznek
* El tudod dönteni, hogy az adott használati esetet, vagy új funkcionalitást támogatod-e
* Számszerűsítheted a projekt népszerűségét
* Megértheted, hogy a felhasználók hogyan használják a munkádat
* Támogatással és szponzorálással pénzhez juthatsz

Például, a [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md) úgy találta hogy a Google Analytics segítette hozzá, hogy a feladatokat priorizálja:

> Homebrew ingyenes, és teljességgel önkéntes munka, amit a fejlesztők a szabad idejükben végeznek. Ennek eredményeként nem rendelkezünk erőforrásokkal ahhoz, hogy részletes felhasználói tanulmányokat végezhessünk a Homebrew felhasználókról, hogy eldönthessük, hogyan lehet a legjobban megtervezni a jövőbeli funkciókat és prioritást adni az aktuális munkának. Ugyanakkor az anonim összesített felhasználói elemzés lehetővé teszi számunkra, hogy a javításokat és a szolgáltatásokat a Homebrew használatával kapcsolatosan rangsoroljuk aszerint, hogy hol és mikor használják az emberek.

A népszerűség nem minden. Mindenki különböző okokból kezd a nyílt forráskódba. Ha a nyílt forráskód karbantartó célja, hogy megmutassa a munkáját, átlátható legyen a kódja, vagy hogy élvezze a munkát, akkor a mérőszámok nem biztos, hogy fontosak számára.

Ha viszont mélyebb szinten akarod megismerni a projektedet, számos módon kell elemezned a projekted aktivitását.

## Felfedezés

Mielőtt bárki elkezdené használni a projektedet, vagy részt venne benne tudniuk kell, hogy hol találják. Kérdezd meg magadtól: _Az emberek megtalálják ezt a projektet?_

![Traffic graph](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

Ha a munkád a GitHub-on van, [akkor láthatod](https://help.github.com/articles/about-repository-graphs/#traffic) hogy hány ember járt az oldaladon és hogy honnan érkeztek. A projekt oldaláról, válaszd ki az "Insights", majd a "Traffic" funkciót. Ezen az oldalon ezeket láthatod:

* **Views:** Megadja, hogy hányszor nézték meg a projekt oldalát.

* **Unique visitors:** Megadja, hogy hány ember látogatta meg a projekt oldalát.

* **Referring sites:** Megadja, hogy honnan érkeztek az oldalra az emberek. Ez a metrika segíthet kitalálni, hogy hol érheted el a közönséget és hogyan működnek a promóciós erőfeszítéseid.

* **Popular content:** Megadja, hogy a projekted mely részére kiváncsiak a látogatók, lebontva oldalakra és látogatókra.

[GitHub stars](https://help.github.com/articles/about-stars/) szintén tud a népszerűség mérésében segíteni. Bár a _GitHub stars_ nem szükségszerűen van kapcsolatban azzal, hogy hányan töltötték le vagy használták a projektet, mégis alkalmas arra, hogy mérje azt, hogy mennyi ember érdeklődését keltette fel a munkád.

Lehet, hogy más [egyéb helyen is nyomon akarod követni az elérhetőséget](https://opensource.com/business/16/6/pirate-metrics): például, Google PageRank, megmutatja a forgalmat a projekt oldaladról, vagy más nyílt forráskódú oldalról vagy weboldalról.

## Használat

Az emberek megtalálják a projektet ezen a vad és őrült dologon, amit az internetnek hívunk. Jó esetben, ha látják a projektet, késztetést érezhetnek rá, hogy használják. A második kérdés amit fel kell tenned magadnak: _Az emberek használják ezt a projektet?_

Ha a projekt terjesztéséhez csomagkezelőt (például npm vagy RubyGems.org) használsz, akkor előfordulhat, hogy nyomon követheted a projekt letöltését.

Mindegyik csomagkezelő kissé eltérő definíciót használhat a "letöltésre", és a letöltések nem feltétlenül korrelálnak a telepítésekkel vagy a használattal, de az összehasonlításhoz valamilyen alapot biztosítanak. Próbáld meg a [Libraries.io](https://libraries.io/) használatát, hogy kövesd a statisztikáit számos ismert csomagkezelőnek és csomagnak.

Ha a GitHub-on van a projekted, akkor a "Traffic" oldalon a  [clone graph](https://github.com/blog/1873-clone-graphs) diagramot használd hogy lásd, mely napokon hányszor klónozták a projektedet, lebontva összes klónozásra és egyedi látogatókra.

![Clone graph](/assets/images/metrics/clone_graph.png)

Ha a felhasználás alacsonyabb, mint a projektet felfedező személyek száma, két kérdést kell átgondolni:

* A projekted nem érte el sikeresen a hallgatóságot, vagy
* Rossz közönséget céloztál meg

Például, ha a projekt a Hacker News első oldalára kerül, valószínűleg látni fogsz egy kiugrást a forgalomban, de alacsonyabb a valódi érdeklődők aránya, mert mindenkit elérsz a Hacker News-on. Ha Ruby projekted van, ami bemutatásra kerül egy Ruby konferencián, akkor valószínűleg nagyobb számban lesznek valódi érdeklődők a célközönségből.

Próbáld meg kitalálni, hogy honnan jönnek a látogatók, ezért kérj visszajelzéseket a projekt oldalon, hogy megtudd, hogy a fenti két eset közül melyik jelent problémát.

Ha már tudod, hogy az emberek használják a projektet, érdemes megpróbálni kitalálni, mit csinálnak vele. Fejlesztenek-e további kódokat ráépítve (fork), hogy hozzá adjanak új funkciókat? Vagy esetleg tudományos vagy üzleti célokra használják?

## Fenntarthatóság

Az emberek megtalálták a projektedet és használják már. A következő kérdést kell megválaszolnod magadnak: _Az emberek részt vesznek-e a projektben?_

Soha sem túl korai elkezdeni gondolkodni a közreműködőkről. Ha nincsenek más emberek, akik részt vennének a projektben, akkor egy egészségtelen helyzetbe kerülhetsz azzal, hogy ugyan a projekt _közismert_ (sokan használják), de kevesen támogatják (nincs a karbantartónak elég ideje a projektre).

A fenntarthatósághoz szükséges, hogy [új résztvevők érkezzenek a projektbe](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2), mert előfordulhat, hogy a jelenlegi résztvevők más projektek felé fordulnak.

Példák a közösségi metrikákra, amelyeket rendszeresen nyomon kell követni:

* **Résztvevők száma és a résztvevőkre jutó kódmódosítások száma:** Megadja, hogy hány résztvevő van a projekteden, ki az aki sokat járul hozzá és ki az, aki keveset. A GitHub-on, az "Insights" -> "Contributors" alatt találod ezt meg. Jelenleg itt csak azt látod, aki a főágba járult hozzá a projekthez.

![Contributor graph](/assets/images/metrics/repo_contributors_specific_graph.png)

* **Új, esetleges, és rendszeres résztvevő:** Segítségével nyomon követheted, az új résztvevőket és hogy visszatérnek-e. (Esetleges résztvevőknek kevés a kódhoz történő hozzájárulása. Ez jelenthet 1, vagy 5 módosítást is persze, az rajtad múlik mi a "kevés".) Új résztvevők nélkül a projekt stagnálhat.

* **A nyitott problémák és a nyitott beolvasztási kérelmek száma:** Ha ezek a számok túl magasak, akkor segítségre van szükséged a problémamegoldáshoz és a kódok áttekintéséhez.

* **A nyitott problémák és a nyitott beolvasztási kérelmek üteme:** Ez azt jelenti, hogy foglalkoznak a projekteddel az emberek. Ha ez a szám növekszik, akkor az emberek érdekeltek a projektedben.

* **Közreműködők típusai:** Például, kód módosítás, elírás javítás vagy hibajavítás, vagy kommentelés a problémákhoz, módosításokhoz.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/arfon?s=180" class="pquote-avatar" alt="avatar">
  A nyílt forráskód több, mint maga a kód. A sikeres nyílt forráskódú projektek magukban foglalják a kód és dokumentációs hozzájárulásokat, valamint ezen változásokkal kapcsolatos beszélgetéseket.
  <p markdown="1" class="pquote-credit">
— @arfon, ["The Shape of Open Source"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## Karbantartói aktivitás

És végül: rövid úton képessé kell válnia a karbantartóknak a beérkező hozzájárulások kezelésére. Az utolsó kérdés magadhoz: _Képes vagyok reagálni a közösség munkájára, jelzéseire?_

Az inaktív karbantartók a nyílt forráskódú projektek szűk keresztmetszetévé válnak. Ha valaki hozzájárulást nyújt be, de soha nem kap reakciót a karbantartótól, akkor elbátortalanodhat és elhagyja a projektet.

[Egy kutatás a Mozillától](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) azt mutatta ki, hogy a karbantartók reakció ideje és készsége kritikus tényező a folyamatos hozzájárulások eléréséhez.

Fontold meg annak nyomon követését, hogy mennyi időt vesz igénybe, amíg válaszolsz a hozzájárulásokra, függetlenül attól, hogy hibajegy vagy beolvasztási kérelem-e. A válasz nem jelenti azt, hogy cselekedni is kell. Például lehet ennyi: _"Köszönöm a hozzájárulásod! Jövő héten tudom átnézni."_

Meg tudod azt is mérni, hogy a hozzájárulási folyamat különböző fázisai között mennyi idő telik el, például:

* Átlagosan mennyi ideig van nyitva egy hibajegy
* Vajon mennyi hibajegy van lezárva beolvasztási kérelemmel
* Vajon mennyi régi, nem aktuális hibajegyet kellett lezárni
* Átlagos ideje a beolvasztási kérelem elfogadásának és beolvasztásának

## Használj 📊 hogy többet tudj meg a közösségről

A metrikák megértése segít egy aktív, fejlődő nyílt forráskódú projekt létrehozásában. Még ha nem is követed nyomon az összes metrikát, használd a fenti módszereket, hogy lásd a viselkedési mintákat amelyek segítik a projektedet.
