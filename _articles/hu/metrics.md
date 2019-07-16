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

Ha viszont mélyebb szinten akarod megismerni a projektedet, számos módon kell elemezned a projekted aktívitását.

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

For example, if your project lands on the front page of Hacker News, you'll probably see a spike in discovery (traffic), but a lower conversion rate, because you're reaching everyone on Hacker News. If your Ruby project is featured at a Ruby conference, however, you're more likely to see a high conversion rate from a targeted audience.

Try to figure out where your audience is coming from and ask others for feedback on your project page to figure out which of these two issues you're facing.

Once you know that people are using your project, you might want to try to figure out what they are doing with it. Are they building on it by forking your code and adding features? Are they using it for science or business?

## Retention

People are finding your project and they're using it. The next question you'll want to ask yourself is: _are people contributing back to this project?_

It's never too early to start thinking about contributors. Without other people pitching in, you risk putting yourself into an unhealthy situation where your project is _popular_ (many people use it) but not _supported_ (not enough maintainer time to meet demand).

Retention also requires an [inflow of new contributors](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2), as previously active contributors will eventually move on to other things.

Examples of community metrics that you may want to regularly track include:

* **Total contributor count and number of commits per contributor:** Tells you how many contributors you have, and who's more or less active. On GitHub, you can view this under "Insights" -> "Contributors." Right now, this graph only counts contributors who have committed to the default branch of the repository.

![Contributor graph](/assets/images/metrics/repo_contributors_specific_graph.png)

* **First time, casual, and repeat contributors:** Helps you track whether you're getting new contributors, and whether they come back. (Casual contributors are contributors with a low number of commits. Whether that's one commit, less than five commits, or something else is up to you.) Without new contributors, your project's community can become stagnant.

* **Number of open issues and open pull requests:** If these numbers get too high, you might need help with issue triaging and code reviews.

* **Number of _opened_ issues and _opened_ pull requests:** Opened issues means somebody cares enough about your project to open an issue. If that number increases over time, it suggests people are interested in your project.

* **Types of contributions:** For example, commits, fixing typos or bugs, or commenting on an issue.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/arfon?s=180" class="pquote-avatar" alt="avatar">
  Open source is more than just code. Successful open source projects include code and documentation contributions together with conversations about these changes.
  <p markdown="1" class="pquote-credit">
— @arfon, ["The Shape of Open Source"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## Maintainer activity

Finally, you'll want to close the loop by making sure your project's maintainers are able to handle the volume of contributions received. The last question you'll want to ask yourself is: _am I (or are we) responding to our community?_

Unresponsive maintainers become a bottleneck for open source projects. If someone submits a contribution but never hears back from a maintainer, they may feel discouraged and leave.

[Research from Mozilla](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) suggests that maintainer responsiveness is a critical factor in encouraging repeat contributions.

Consider tracking how long it takes for you (or another maintainer) to respond to contributions, whether an issue or a pull request. Responding doesn't require taking action. It can be as simple as saying: _"Thanks for your submission! I'll review this within the next week."_

You could also measure the time it takes to move between stages in the contribution process, such as:

* Average time an issue remains open
* Whether issues get closed by PRs
* Whether stale issues get closed
* Average time to merge a pull request

## Use 📊 to learn about people

Understanding metrics will help you build an active, growing open source project. Even if you don't track every metric on a dashboard, use the framework above to focus your attention on the type of behavior that will help your project thrive.
