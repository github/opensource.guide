---
lang: hu
title: Vezetés és irányítás
description: A nyílt forráskódú projektek részére előnyt jelent a döntéshozatal formális szabályozása.
class: leadership
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
---

## A növekvő projekt irányításának megértése

A projekt egyre növekszik, az emberek elkötelezettek, és te is elkötelezted magad, hogy ezt a dolgot csinálod. Ebben a szakaszban felmerül a kérdés, hogy hogyan kell a rendszeres résztvevőket beépíteni a munkafolyamatba, függetlenül attól, hogy valaki kódot ad hozzá, vagy épp megoldja a közösségi vitákat. Ezeket a kérdéseket válaszoljuk most meg.

## Milyen példák vannak a nyílt forráskódú projektekben használt formális szerepekre?

Sok projekt hasonló struktúrát követ a résztvevői szerepek és a szerep azonosítása szempontjából.

Hogy ezek a szerepek valójában mit jelentenek, teljesen rajtad múlik. Íme néhány szerepkör:

* **Karbantartó (Maintainer)**
* **Résztvevő (Contributor)**
* **Commiter (Committer)**

**Néhány projektnél a "karbantartók"** azok az emberek akiknek kód módosítási joguk van. Más projektekben, egyszerűen csak hétköznapi résztvevők, akik a README állományban fel vannak sorolva.

A karbantartó nem feltétlen szükséges, hogy olyan ember legyen aki kódot ír a projektben. Lehet olyan, aki nagyon sok munkát fektet a projekt ismertté tételébe, vagy rengeteg dokumentációt ír, hogy könnyebben érthető legyen a projekt mások számára. Függetlenül attól, hogy mit csinál nap mint nap, a karbantartó valószínűleg olyan ember, aki felelősséget érez a projektért, és elkötelezett amellett, hogy jobbá tegye azt.

**"Résztvevő" akárki lehet** aki kommentez egy hibát vagy egy beolvasztási kérelmet, vagy más értéket ad a projekthez (megold egy hibát, kódot ír, vagy eseményeket szervez), vagy bárki, akinek a módosítását beolvasztották a projektbe (talán ez a legszűkebb definíció).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  \[Node.js,\] esetén mindenki, aki megjelenik mint kommentelő egy hibánál, vagy mint programozó hozzájárul a kódhoz, az a projekt közösségének tagjává válik. Látni lehet, ahogy felhasználóból a projekt résztvevőivé válnak az emberek.
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Healthy Open Source"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**A "committer" fogalma** segít abban, hogy megkülönböztethessük a kódhoz való hozzáférést, mint speciális felelősséget attól, amelyet más résztvevői típusok képviselnek.

Bármilyen szerepkört definiálhatsz a projektedben, de [fontold meg a tágabb definíciók használatát](../how-to-contribute/#mit-jelent-a-hozzájárulás) hogy a közreműködés más formáit is ösztönözd. Használhatsz vezetői szerepeket, hogy hivatalosan elismerd azokat a személyeket, akik kiemelkedő mennyiségű munkát fektettek a projektbe, függetlenül a technikai készségeiktől.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  Úgy ismerhetsz, mint a Django feltalálója ... de a valóságban én csak egy alkalmazott srác voltam, aki egy évvel azután kezdett rajta dolgozni, miután már kész volt. (...) Az emberek azt feltételezik, hogy a programozási készségem miatt vagyok sikeres ... de a legjobb esetben is egy átlagos programozó vagyok.
  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## Hogyan formalizálhatom ezeket a vezetői szerepeket?

A vezetői szerepek formalizálása segít abban, hogy az emberek magukénak érezzék a projektet, és jelzi a többi közösségi tag számára, hogy kitől várhat segítséget.

Kisebb projekt esetén a vezetők kijelölése annyiból áll, hogy a README vagy a CONTRIBUTORS szövegfájlba beírod a nevüket.

Nagyobb projekt esetén, ha van weboldala, hozz létre egy csapatoldalt, ahol bemutathatod a vezetőket. Például, [Postgres](https://github.com/postgres/postgres/) projektnek van egy[átfogó csapatoldala](https://www.postgresql.org/community/contributors/) rövid bemutatkozással minden résztvevő esetén.

Ha a projektben nagyon aktív a közreműködő közösség, akkor a "karbantartók" szűkebb köre vagy akár albizottságok alakulhatnak ki, akik a különböző problémakörök (például biztonsági, problémamegoldó vagy közösségi magatartás) kezelését vállalják. Hagyd, hogy az emberek önszerveződjenek és önkéntesek jelentkezzenek azokért a szerepekért, amelyeket a legjobban szeretnének.

<aside markdown="1" class="pquote">
  A központi csapatot számos "alcsoporttal" egészítettük ki. Minden alcsoportnak saját területe van, például nyelvi tervezés vagy a programozói könyvtárak. (...) Minden egyes alcsoportot a központi csapat egy tagja vezeti, ezzel biztosítjuk a globális koordinációt és az egész projekt egységes, koherens vízióját.
  <p markdown="1" class="pquote-credit">
— ["Rust Governance RFC"](https://github.com/rust-lang/rfcs/blob/master/text/1068-rust-governance.md)
  </p>
</aside>

A vezetői csapatok egy kijelölt csatornát hozhatnak létre (például IRC) vagy találkozhatnak rendszeresen egyéb projekt megbeszéléseken (mint a Gitter vagy Google Hangout). Akár nyilvánosak is lehetnek ezek, így a többi résztvevő is láthatja. [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby), például, [minden héten időt biztosít erre](https://github.com/cucumber/cucumber-ruby/blob/master/CONTRIBUTING.md#talking-with-other-devs).

Miután létrehoztad a vezetői szerepeket, ne felejtsd el dokumentálni, hogyan érhetik el őket az emberek! Határozz meg egy világos folyamatot arra vonatkozóan, hogy valaki hogyan válhat karbantartóvá, vagy csatlakozhat egy albizottsághoz a projektben, és írd le a GOVERNANCE.md-ben.

Az olyan eszközök, mint a [Vossibility](https://github.com/icecrime/vossibility-stack) segíthetnek nyilvánosan nyomon követni, hogy ki, mennyivel járul hozzá a projekthez. Az ilyen információk dokumentálása és publikálása megakadályozza azt, hogy a közösség úgy tekintsen a karbantartókra, mint egy szűk, zárt csoportra, akik önkényesen döntenek.

És végül, ha a projekted a GitHub-on van, gondolkozz el azon, hogy a projektedet a személyes fiókodból egy szervezeti fiókba (_Organization account_) migrálod, legalább még egy helyettes adminisztrátor felvételével. A [GitHub szervezeti fiók](https://help.github.com/articles/creating-a-new-organization-account/) segít abban, hogy könnyebben kezeld a jogosultságokat, a kód tárolókat, és több [társtulajdonost](../building-community/#a-projekt-tulajdonjogának-megosztása) beállítva segít megőrizni a projekt örökségét.

## Mikor kell valakinek _commit_ jogot adnom?

Néhányan azt gondolják, hogy mindenkinek, aki hozzájárul a projekthez. Ha ezt teszed, akkor növeled az emberek felelősség érzetét a projekted iránt.

Másrészről, különösen komplex és nagy projektek esetén, csak azoknak az embereknek célszerű ilyen jogot adni, akik bizonyították elkötelezettségüket a projekt felé. Nincs aranyszabály, hogy melyik a jobb, neked kell eldöntened, hogy számodra mi a megfelelő.

Ha a projekt a GitHub-on van, használhatsz [védett kód ágakat (branch)](https://help.github.com/articles/about-protected-branches/), melyekkel szabályozni tudod, hogy kik és milyen feltételekkel olvaszthatnak be kódot egy kód ágra.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">
  Amikor valaki küld egy beolvasztási kérelmet, adj neki a projekthez commit jogot. Bár elsőre nagyon rossz ötletnek tűnik, ennek a stratégiának a használata megmutatja a GitHub valódi erejét. (...) Miután az emberek önállóan tudnak commit-olni, többé nem aggódnak azon, hogy nem kerül be a kódjuk a projektbe ... ez pedig sokkal több hozzájárulást jelent.
  <p markdown="1" class="pquote-credit">
— @felixge, ["The Pull Request Hack"](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## Melyek a nyílt forráskódú projektek közös irányítási struktúrái?

A nyílt forráskódú projektekhez általában három közös irányítási struktúra tartozik.

* **BDFL:** BDFL rövidítés a "Benevolent Dictator for Life" rövidítése (Jóindulatú diktátor). Ebben a struktúrában minden fontosabb döntésnél a végső szó egy emberé, általában a projekt létrehozójáé, vagy tulajdonosáé. A [Python](https://github.com/python) egy klasszikus példa. A kisebb projektek alapértelmezetten BDFL struktúrán alapulnak, mert csak egy-két karbantartó van. Azok a projektek is ebbe a kategóriába esnek, amelyeket egy cég felügyel.

* **Meritokrácia:** **(Megjegyzendő, hogy a "meritokrácia" fogalma negatív felhangú néhány közösség vagy kultúra számára, amelynek [összetett társadalmi és politikai története van](http://geekfeminism.wikia.com/wiki/Meritocracy).)** A meritokráciában az aktív karbantartók, akikről köztudott a szakértelmük, formálisan is jogot kapnak a döntések meghozatalára. Általában a döntés ekkor is konszenzuson alapul, egyszerű többséggel. A meritokrácia úttörője az [Apache Foundation](https://www.apache.org/); [minden Apache projekt](https://www.apache.org/index.html#projects-list) meritokrácia. Csak egyének járulhatnak hozzá a kódhoz, cégek vagy cég nevében eljáró egyének nem.

* **Liberális hozzájárulás:** A liberális hozzájárulás modellje szerint a legtöbb munkát végző embereket elismerik a legbefolyásosabbnak, de ez a jelenlegi munkán és nem a történelmi hozzájárulásokon alapul. A főbb projekt döntéseket a konszenzus-keresési folyamat jellemzi (a főbb ellentétek feloldása), nem pedig pusztán a szavazás, és arra törekszenek, hogy minél több közösségi igényt figyelembe vegyenek eközben. Ilyen projekt a [Node.js](https://foundation.nodejs.org/) és a [Rust](https://www.rust-lang.org/).

Hogy melyiket kell használnod? Tőled függ! Mindegyik modellnek vannak előnyei és hátrányai. És bár elsőre teljesen másnak tűnhetnek, mindhárom modellben több közös vonás van. Ha érdekel valamelyiknek a használata, nézd meg ezeket a sablonokat:

* [BDFL modell sablon](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [Meritokrácia modell sablon](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js liberális hozzájárulás mintája](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## Szükségem van-e irányítási dokumentumokra, amikor elindítom a projektemet?

Nincs szabály arra, hogy mikor kell a projekt irányítási dokumentumát elkészíteni. Sokkal könnyebb megalkotni, miután láttad a közösség dinamikájának működését. A nyílt forráskódú irányítás legszebb (és egyben legnehezebb) része az, hogy a közösség formálja azt!

Néhány korai dokumentáció azonban elkerülhetetlenül hozzásegít a projekt stabil irányításához, ezért érdemes az alapokat leírnod. Például meghatározhatod a viselkedésre vonatkozó egyértelmű elvárásokat vagy a részvételi folyamat működését, akár a projekt indulásakor is.

Mielőtt olyan nyílt forráskódú projektet indítasz, amelyet a céged kezdeményez, mindenképpen érdemes megvitatni és tisztázni a céges elvárásokat a karbantartással és döntéshozatallal kapcsolatosan, hogy a projekt gördülékenyen haladjon. Célszerű nyilvánosan elmagyarázni, hogy a vállalat hogyan (vagy épp nem) fog részt venni a projektben.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  Kicsi csapatokat rendelünk a GitHub projektekhez, akik ezeken dolgoznak itt a Facebook-nál. Például a React projektet egy React mérnök vezeti.
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["An inside look at open source at Facebook"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## Mi történik, ha vállalati alkalmazottaktól érkezik hozzájárulás?

A sikeres nyílt forráskódú projekteket sok ember és cég használja, és egyes vállalatok a projekthez köthető bevételi forrással is rendelkezhetnek. Például egy vállalat kereskedelmi szolgáltatásának részeként felhasználhatja egy ilyen projekt kódját.

Ahogy a projekt egyre szélesebb körben kerül felhasználásra, a hozzáértő emberekre egyre nagyobb lesz az igény - lehet, hogy te leszel az egyik! - és néha fizetnek majd a projektben végzett munkájukért.

Fontos, hogy az üzleti tevékenységet normálisnak tekintsük, és csak egy fejlesztést ösztönző lehetőségként kezeljük. Természetesen a fizetett fejlesztőknek nem szabad különleges bánásmódot kapniuk azokkal szemben, akinek ezért nem fizetnek; minden hozzájárulást technikai szempontból kell értékelni. Az üzletileg támogatott embereknek nem szabad kényelmetlenül érezni magukat, még akkor sem, ha a saját használati esetüket képviselik egy adott továbbfejlesztés vagy új funkció megvitatása során.

Az "Üzlet" teljesen kompatibilis a "Nyílt Forráskóddal". Az "Üzlet" csak azt jelenti, hogy valahol megjelenik a pénz - az üzleti élet használja a kódot, ami a projekt ismertségével és elfogadottságával egyre valószínűbbé válik. (Bár amikor a nyílt forráskódú szoftvert nem-nyílt forrású termék részeként használják, az egész termék továbbra is "saját tulajdonú" szoftver marad, a nyílt forráskódú szoftverhez hasonlóan, kereskedelmi- vagy nem kereskedelmi célokra is használható.)

Mint bárki más, az üzletileg motivált fejlesztők is a minőségi és mennyiségi hozzájáruláson keresztül érvényesülhetnek a projektben. Nyilvánvaló, hogy egy olyan fejlesztő, aki fizetést kap, többet tud tenni, mint az, aki nem kap érte fizetséget, de ezzel nincs probléma: a fizetés csak egy, a sok lehetséges tényező közül, amely befolyásolhatja, hogy valaki mennyire vesz részt a projektben. A projekt megbeszélések fókuszában a résztvevők álljanak, ne pedig azok a külső tényezők, amelyek azt befolyásolják, hogy valaki milyen közegben járult hozzá a projekthez.

## Szükségem van egy jogi személyre a projektem támogatásához?

Hacsak nem kezelsz pénzt, nincs szükséged jogi személyre, hogy támogasd a nyílt forráskódú projektedet.

Ha például vállalkozást akarsz alapozni a projektedre, akkor ennek megfelelő céget kell alapítanod. Ha csak a projektedhez kapcsolódó szerződéses munkát végzel és ezért pénzt kapsz, akkor akár egyéni vállalkozóként, akár Kft-ként működsz, a helyi adó- és jogszabályoknak megfelelő módon kell eljárnod.

Ha adományokat szeretnél kapni a nyílt forráskódú projektedért, elhelyezhetsz egy adomány gombot a weboldalon (PayPal, Stripe, stb. segítségével), de a bevétel kezelésénél ekkor is a helyi adó- és jogszabályoknak megfelelő módon kell eljárnod.

Számos projekt nem vállalja a non-profit szervezet létrehozásával járó bonyodalmakat, ezért olyan támogatókat keresnek akik már non-profit jogi személyek. Ezek a szervezetek a te nevedben fogadhatnak el adományokat, általában némi részesedésért cserébe. A [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](https://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/), [Linux Foundation](https://www.linuxfoundation.org/projects) és [Open Collective](https://opencollective.com/opensource) jó példák az ilyen non-profit támogató szervezetre.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  Célunk, hogy olyan infrastruktúrát biztosítsunk, melynek segítségével a közösségek önfenntartók tudnak lenni, így olyan környezetet teremtünk, ahol mindenki - a közreműködők, a támogatók, a szponzorok - kézzelfogható előnyökhöz jut.
  <p markdown="1" class="pquote-credit">
— @piamancini, ["Moving beyond the charity framework"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141)
  </p>
</aside>

Ha a projekted egy adott programnyelvhez, vagy ökoszisztémához tartozik, akkor ezen területeken kell keresned a non-profit támogatókat. Például, a [Python Software Foundation](https://www.python.org/psf/) támogatja a [PyPI](https://pypi.org/), nevű Python csomagkezelőt, és a [Node.js Foundation](https://foundation.nodejs.org/) támogatja az [Express.js](https://expressjs.com/) nevű Node.js alapú webes keretrendszert.
