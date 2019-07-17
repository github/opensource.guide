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

A projekt egyre növekszik, az emberek elkötelezettek, és te is elkötelezted magad, hogy ezt a dolgot csinálod. Ebben a szakaszban valószínűleg érdekelni fog az, hogy hogyan kell a rendszeres résztvevőket beépíteni a munkafolyamatba, függetlenül attól, hogy valaki kódot ad hozzá, vagy épp megoldja a közösségi vitákat. Ezeket a kérdéseket válaszoljuk most meg.

## Milyen példák vannak a nyílt forráskódú projektekben használt formális szerepekre?

Sok projekt hasonló struktúrát követ a résztvevői szerepek és a szerep azonosítása szempontjából.

Hogy ezek a szerepek valójában mit jelentenek, teljesen rajtad múlik. Íme néhány szerepkör:

* **Karbantartó (Maintainer)**
* **Résztvevő (Contributor)**
* **Commiter (Committer)**

**Néhány projektnél a "karbantartók"** azok az emberek akiknek kód módosítási joguk van. Más projektekben, egyszerűen csak hétköznapi résztvevők, akik a README állományban fel vannak sorolva.

A karbantartó nem feltétlen szükséges, hogy olyan ember legyen aki kódot ír a projektben. Inkább ő olyan, aki nagyon sok munkát fektet a projektbe, hogy ismert legyen az, vagy rengeteg dokumentációt ír, hogy könnyebben érthető legyen a projekt mások számára. Függetlenül attól, hogy mit csinál nap mint nap, a karbantartó valószínűleg olyan ember, aki felelősséget érez a projektért, és elkötelezett az iránt.

**"Résztvevő" akárki lehet** aki kommentez egy hibát vagy egy beolvasztási kérelmet, vagy más értéket ad a projekthez (megold egy hibát, kódot ír, vagy eseményeket szervez), vagy bárki akinek a módosítását beolvasztották a projektbe (talán ez a legszűkebb definíció).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  \[Node.js,\] esetén mindenki, aki megjelenik mint kommentelő egy hibánál, vagy mint programozó hozzájárul a kódhoz, az a projekt közösségének tagjává válik. Látni lehet azt, ahogy felhasználóból a projekt résztvevőivé válnak az emberek.
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Healthy Open Source"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**A "committer" fogalma** segít abban, hogy megkülönböztethessük a kódhoz való hozzáférést, mint speciális felelősség attól, amelyet más résztvevői típusok képviselnek.

Bármilyen szerepkört definiálhatsz a projektedben, de [fontold meg a széleskörben használt definíciókat](../how-to-contribute/#mit-jelent-a-hozzájárulás) hogy ösztönözd a részvétel más formáit is. Használhatsz a vezetői szerepeket, hogy hivatalosan elismerd azokat a személyeket, akik kiemelkedő részvételt nyújtottak a projektben, függetlenül a technikai készségeiktől.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  Úgy ismerhetsz, mint a Django feltalálója ... de a vlóságban én csak egy alkalmazott srác voltam, aki egy évvel azután kezdett rajta dolgozni, miután már kész volt. (...) Az emberek azt feltételezik, hogy a programozási készségem miatt vagyok sikeres ... de a legjobb esetben is egy átlagos programozó vagyok.
  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## Hogyan formalizálhatom ezeket a vezetői szerepeket?

A vezetői szerepek formalizálása segít abban, hogy az emberek érezzék a felelősséget, és hírdeti a többi közösségi tagnak, kitől várhat segítséget.

Kisebb projekt esetén a vezetők kijelölése olyan egyszerű, hogy a README vagy a CONTRIBUTORS szövegfájlba beírod őket.

Nagyobb projekt esetén, ha van weboldala, hozz létre egy csapatoldalt, ahol bemutathatod a vezetőket. Például, [Postgres](https://github.com/postgres/postgres/) projektnek van egy[átfogó csapatoldala](https://www.postgresql.org/community/contributors/) rövid bemutatkozással minden résztvevő esetén.

Ha a projektben nagyon aktív a közreműködő közösség, akkor a „karbantartók” szűkebb köre vagy akár albizottságok alakulhatnak ki, akik a különböző problémakörök (például biztonsági, problémamegoldó vagy közösségi magatartás) kezelését vállalják. Hagyd, hogy az emberek önszerveződjenek és önkéntesek jelentkezzenek azokért a szerepekért, amelyeket a legjobban szeretnének.

<aside markdown="1" class="pquote">
  \[Mi\] kiegészítettük a központi csapatot számos "alcsoporttal". Minden alcsoportnak speciális területe van, például nyelvi tervezés vagy a programozói könyvtárak. (...) A globális koordináció és a projekt egészének erős, koherens elképzeléseinek biztosítása érdekében minden egyes alcsoportot a központi csapat egy tagja vezeti.
  <p markdown="1" class="pquote-credit">
— ["Rust Governance RFC"](https://github.com/rust-lang/rfcs/blob/master/text/1068-rust-governance.md)
  </p>
</aside>

A vezetői csapatok egy kijelölt csatornát hozhatnak létre (például IRC) vagy találkozhatnak rendszeresen a projekt megbeszéléseken (mint a Gitter vagy Google Hangout). Akár níilcánosak is lehetnek ezek, így a többi résztvevő is láthatja. [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby), például, [minden héten időt biztosít erre](https://github.com/cucumber/cucumber-ruby/blob/master/CONTRIBUTING.md#talking-with-other-devs).

Miután létrehoztad a vezetői szerepeket, ne felejtsd el dokumentálni, hogyan érhetik el őket az emberek! Határozd meg egy világos folyamatot arra vonatkozóan, hogy valaki hogyan válhat karbantartóvá, vagy csatlakozhat egy albizottsághoz a projektben, és írd be a GOVERNANCE.md-be.

Tools like [Vossibility](https://github.com/icecrime/vossibility-stack) can help you publicly track who is (or isn't) making contributions to the project. Documenting this information avoids the community perception that maintainers are a clique that makes its decisions privately.

Finally, if your project is on GitHub, consider moving your project from your personal account to an Organization and adding at least one backup admin. [GitHub Organizations](https://help.github.com/articles/creating-a-new-organization-account/) make it easier to manage permissions and multiple repositories and protect your project's legacy through [shared ownership](../building-community/#share-ownership-of-your-project).

## When should I give someone commit access?

Some people think you should give commit access to everybody who makes a contribution. Doing so could encourage more people to feel ownership of your project.

On the other hand, especially for bigger, more complex projects, you may want to only give commit access to people who have demonstrated their commitment. There's no one right way of doing it - do what makes you most comfortable!

If your project is on GitHub, you can use [protected branches](https://help.github.com/articles/about-protected-branches/) to manage who can push to a particular branch, and under which circumstances.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">
  Whenever somebody sends you a pull request, give them commit access to your project. While it may sound incredibly stupid at first, using this strategy will allow you to unleash the true power of GitHub. (...) Once people have commit access, they are no longer worried that their patch might go unmerged...causing them to put much more work into it.
  <p markdown="1" class="pquote-credit">
— @felixge, ["The Pull Request Hack"](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## What are some of the common governance structures for open source projects?

There are three common governance structures associated with open source projects.

* **BDFL:** BDFL stands for "Benevolent Dictator for Life". Under this structure, one person (usually the initial author of the project) has final say on all major project decisions. [Python](https://github.com/python) is a classic example. Smaller projects are probably BDFL by default, because there are only one or two maintainers. A project that originated at a company might also fall into the BDFL category.

* **Meritocracy:** **(Note: the term "meritocracy" carries negative connotations for some communities and has a [complex social and political history](http://geekfeminism.wikia.com/wiki/Meritocracy).)** Under a meritocracy, active project contributors (those who demonstrate "merit") are given a formal decision making role. Decisions are usually made based on pure voting consensus. The meritocracy concept was pioneered by the [Apache Foundation](https://www.apache.org/); [all Apache projects](https://www.apache.org/index.html#projects-list) are meritocracies. Contributions can only be made by individuals representing themselves, not by a company.

* **Liberal contribution:** Under a liberal contribution model, the people who do the most work are recognized as most influential, but this is based on current work and not historic contributions. Major project decisions are made based on a consensus seeking process (discuss major grievances) rather than pure vote, and strive to include as many community perspectives as possible. Popular examples of projects that use a liberal contribution model include [Node.js](https://foundation.nodejs.org/) and [Rust](https://www.rust-lang.org/).

Which one should you use? It's up to you! Every model has advantages and trade-offs. And although they may seem quite different at first, all three models have more in common than they seem. If you're interested in adopting one of these models, check out these templates:

* [BDFL model template](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [Meritocracy model template](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js's liberal contribution policy](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## Do I need governance docs when I launch my project?

There is no right time to write down your project's governance, but it's much easier to define once you've seen your community dynamics play out. The best (and hardest) part about open source governance is that it is shaped by the community!

Some early documentation will inevitably contribute to your project's governance, however, so start writing down what you can. For example, you can define clear expectations for behavior, or how your contributor process works, even at your project's launch.

If you're part of a company launching an open source project, it's worth having an internal discussion before launch about how your company expects to maintain and make decisions about the project moving forward. You may also want to publicly explain anything particular to how your company will (or won't!) be involved with the project.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  We assign small teams to manage projects on GitHub who are actually working on these at Facebook. For example, React is run by a React engineer.
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["An inside look at open source at Facebook"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## What happens if corporate employees start submitting contributions?

Successful open source projects get used by many people and companies, and some companies may eventually have revenue streams eventually tied to the project. For example, a company may use the project's code as one component in a commercial service offering.

As the project gets more widely used, people who have expertise in it become more in-demand - you may be one of them! - and will sometimes get paid for work they do in the project.

It's important to treat commercial activity as normal and as just another source of development energy. Paid developers shouldn't get special treatment over unpaid ones, of course; each contribution must be evaluated on its technical merits. However, people should feel comfortable engaging in commercial activity, and feel comfortable stating their use cases when arguing in favor of a particular enhancement or feature.

"Commercial" is completely compatible with "open source". "Commercial" just means there is money involved somewhere - that the software is used in commerce, which is increasingly likely as a project gains adoption. (When open source software is used as part of a non-open-source product, the overall product is still "proprietary" software, though, like open source, it might be used for commercial or non-commercial purposes.)

Like anyone else, commercially-motivated developers gain influence in the project through the quality and quantity of their contributions. Obviously, a developer who is paid for her time may be able to do more than someone who is not paid, but that's okay: payment is just one of many possible factors that could affect how much someone does. Keep your project discussions focused on the contributions, not on the external factors that enable people to make those contributions.

## Do I need a legal entity to support my project?

You don't need a legal entity to support your open source project unless you're handling money.

For example, if you want to create a commercial business, you'll want to set up a C Corp or LLC (if you're based in the US). If you're just doing contract work related to your open source project, you can accept money as a sole proprietor, or set up an LLC (if you're based in the US).

If you want to accept donations for your open source project, you can set up a donation button (using PayPal or Stripe, for example), but the money won't be tax-deductible unless you are a qualifying nonprofit (a 501c3, if you're in the US).

Many projects don't wish to go through the trouble of setting up a nonprofit, so they find a nonprofit fiscal sponsor instead. A fiscal sponsor accepts donations on your behalf, usually in exchange for a percentage of the donation. [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](https://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/), [Linux Foundation](https://www.linuxfoundation.org/projects) and [Open Collective](https://opencollective.com/opensource) are examples of organizations that serve as fiscal sponsors for open source projects.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  Our goal is to provide an infrastructure that communities can use to be self sustainable, thus creating an environment where everyone — contributors, backers, sponsors — get concrete benefits out of it.
  <p markdown="1" class="pquote-credit">
— @piamancini, ["Moving beyond the charity framework"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141)
  </p>
</aside>

If your project is closely associated with a certain language or ecosystem, there may also be a related software foundation you can work with. For example, the [Python Software Foundation](https://www.python.org/psf/) helps support [PyPI](https://pypi.org/), the Python package manager, and the [Node.js Foundation](https://foundation.nodejs.org/) helps support [Express.js](https://expressjs.com/), a Node-based framework.
