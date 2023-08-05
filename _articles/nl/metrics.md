---
lang: nl
title: Open source-statistieken
description: Neem weloverwogen beslissingen om uw open source-project te laten gedijen door het succes ervan te meten en bij te houden.
class: metrics
order: 9
image: /assets/images/cards/metrics.png
related:
  - finding
  - best-practices
---

## Waarom iets meten?

Data, mits verstandig gebruikt, kunnen u helpen betere beslissingen te nemen als open source-onderhouder.

Met meer informatie kunt u:

* Begrijp hoe gebruikers reageren op een nieuwe functie
* Zoek uit waar nieuwe gebruikers vandaan komen
* Identificeer, en beslis of u een uitbijtergebruikscasus of -functionaliteit wilt ondersteunen
* Kwantificeer de populariteit van uw project
* Begrijp hoe uw project wordt gebruikt
* Zamel geld in via sponsoring en beurzen

[Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md) stelt bijvoorbeeld vast dat Google Analytics hen helpt bij het prioriteren van werk:

> Homebrew wordt gratis verstrekt en wordt in hun vrije tijd volledig gerund door vrijwilligers. Als gevolg hiervan hebben we niet de middelen om gedetailleerde gebruikersstudies van Homebrew-gebruikers uit te voeren om te beslissen hoe toekomstige functies het beste kunnen worden ontworpen en prioriteit kunnen worden gegeven aan huidig werk. Anonieme geaggregeerde gebruikersanalyses stellen ons in staat om prioriteit te geven aan fixes en functies op basis van hoe, waar en wanneer mensen Homebrew gebruiken.

Populariteit is niet alles. Iedereen komt om verschillende redenen in open source. Als het je doel is als open source-onderhouder om te pronken met je werk, transparant te zijn over je code of gewoon plezier te hebben, dan zijn metrics misschien niet belangrijk voor je.

Als u _geïnteresseerd_ bent om uw project op een dieper niveau te begrijpen, lees dan verder voor manieren om de activiteit van uw project te analyseren.

## Ontdekking

Voordat iemand uw project kan gebruiken of eraan kan bijdragen, moet hij of zij weten dat het bestaat. Stel uzelf de vraag: _vinden mensen dit project?_

![Traffic graph](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

Als je project wordt gehost op GitHub, [je kunt zien](https://help.github.com/articles/about-repository-graphs/#traffic) hoeveel mensen op je project terechtkomen en waar ze vandaan komen. Klik op de pagina van uw project op "Insights" en vervolgens op "Traffic". Op deze pagina ziet u:

* **Total page views:** geeft aan hoe vaak uw project is bekeken

* **Total unique visitors:** geeft aan hoeveel mensen uw project hebben bekeken

* **Referring sites:** vertelt u waar bezoekers vandaan kwamen. Deze statistiek kan u helpen erachter te komen waar u uw publiek kunt bereiken en of uw promotie-inspanningen werken.

* **Populaire content:** vertelt u waar bezoekers naartoe gaan in uw project, uitgesplitst naar paginaweergaven en unieke bezoekers.

[GitHub stars](https://help.github.com/articles/about-stars/) kan ook helpen bij het geven van een basismeting van populariteit. Hoewel GitHub-sterren niet noodzakelijkerwijs verband houden met downloads en gebruik, kunnen ze u wel vertellen hoeveel mensen kennis nemen van uw werk.

U kunt ook [vindbaarheid op specifieke plaatsen bijhouden](https://opensource.com/business/16/6/pirate-metrics): bijvoorbeeld Google PageRank, verwijzingsverkeer van de website van uw project of verwijzingen van andere open bronprojecten of websites.

## Gebruik

Mensen vinden uw project op dit wilde en gekke ding dat we internet noemen. Idealiter voelen ze zich genoodzaakt om iets te doen als ze uw project zien. De tweede vraag die u wilt stellen is: _gebruiken mensen dit project?_

Als u een pakketbeheerder gebruikt, zoals npm of RubyGems.org, om uw project te distribueren, kunt u mogelijk de downloads van uw project volgen.

Elke pakketbeheerder kan een iets andere definitie van "downloaden" gebruiken, en downloads correleren niet noodzakelijkerwijs met installaties of gebruik, maar het biedt een basis ter vergelijking. Probeer [Libraries.io](https://libraries.io/) te gebruiken om gebruiksstatistieken bij te houden van veel populaire pakketbeheerders.

Als je project op GitHub staat, navigeer dan opnieuw naar de "Traffic"-pagina. U kunt de [kloongrafiek](https://github.com/blog/1873-clone-graphs) gebruiken om te zien hoe vaak uw project op een bepaalde dag is gekloond, opgesplitst in totaal aantal klonen en unieke klonen.

![Clone graph](/assets/images/metrics/clone_graph.png)

Als het gebruik laag is in vergelijking met het aantal mensen dat uw project ontdekt, zijn er twee zaken waarmee u rekening moet houden. Een van beide:

* Uw project slaagt er niet in uw publiek te converteren, of
* Je trekt het verkeerde publiek aan

Als uw project bijvoorbeeld op de voorpagina van Hacker News belandt, ziet u waarschijnlijk een piek in de ontdekking (verkeer), maar een lagere conversieratio, omdat u iedereen op Hacker News bereikt. Als uw Ruby-project echter wordt gepresenteerd op een Ruby-conferentie, is de kans groter dat u een hoge conversieratio ziet bij een gericht publiek.

Probeer erachter te komen waar uw publiek vandaan komt en vraag anderen om feedback op uw projectpagina om erachter te komen met welke van deze twee problemen u te maken heeft.

Als je eenmaal weet dat mensen je project gebruiken, wil je misschien proberen erachter te komen wat ze ermee doen. Bouwen ze erop door uw code te forken en functies toe te voegen? Gebruiken ze het voor wetenschap of zaken?

## Retentie

Mensen vinden uw project en ze gebruiken het. De volgende vraag die je jezelf wilt stellen is: _dragen mensen bij aan dit project?_

Het is nooit te vroeg om na te denken over bijdragers. Zonder dat andere mensen meewerken, riskeer je jezelf in een ongezonde situatie te brengen waarin je project _populair_ is (veel mensen gebruiken het) maar niet _ondersteund_ (niet genoeg tijd om aan de vraag te voldoen).

Retentie vereist ook een [instroom van nieuwe bijdragers](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2), aangezien voorheen actieve bijdragers uiteindelijk verder zullen gaan naar andere dingen.

Voorbeelden van communitystatistieken die u regelmatig wilt bijhouden, zijn:

* **Totaal aantal bijdragers en aantal commits per bijdrager:** vertelt je hoeveel bijdragers je hebt en wie er meer of minder actief is. Op GitHub kun je dit bekijken onder "Insights" -> "Contributors". Op dit moment telt deze grafiek alleen bijdragers die zich hebben gecommitteerd aan de standaardvertakking van de repository.

![Bijdrager-grafiek](/assets/images/metrics/repo_contributors_specific_graph.png)

* **Eerste keer, losse en terugkerende bijdragers:** Helpt u bij te houden of u nieuwe bijdragers krijgt en of ze terugkomen. (Toevallige bijdragers zijn bijdragers met een laag aantal commits. Of dat nu één commit is, minder dan vijf commits of iets anders, is aan jou.) Zonder nieuwe bijdragers kan de community van je project stagneren.

* **Aantal openstaande issues en openstaande pull-verzoeken:** Als deze aantallen te hoog worden, heb je wellicht hulp nodig bij het testen van issues en codebeoordelingen.

* **Aantal _geopende_ issues en _geopende_ pull requests:** Geopende issues betekent dat iemand genoeg geeft om je project om een ​​issue te openen. Als dat aantal in de loop van de tijd toeneemt, suggereert dit dat mensen geïnteresseerd zijn in uw project.

* **Soorten bijdragen:** Bijvoorbeeld commits, typefouten of bugs verhelpen, of commentaar geven op een probleem.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/arfon?s=180" class="pquote-avatar" alt="avatar">
  Open source is meer dan alleen code. Succesvolle open source-projecten omvatten bijdragen aan code en documentatie, samen met gesprekken over deze veranderingen.
  
  _Open source is more than just code. Successful open source projects include code and documentation contributions together with conversations about these changes._
  <p markdown="1" class="pquote-credit">
— @arfon, ["The Shape of Open Source"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## open source beheerdersactiviteit

Ten slotte wilt u de cirkel sluiten door ervoor te zorgen dat de beheerders van uw project het volume van de ontvangen bijdragen aankunnen. De laatste vraag die je jezelf wilt stellen is: _Reageer ik (of zijn wij) op onze community?_

Niet-reagerende beheerders worden een bottleneck voor open source-projecten. Als iemand een bijdrage indient maar nooit iets van een onderhouder hoort, kan hij of zij zich ontmoedigd voelen en vertrekken.

[Onderzoek van Mozilla](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) suggereert dat het reactievermogen van de open source-onderhouder een cruciale factor is bij het aanmoedigen van herhaalde bijdragen.

Overweeg om bij te houden hoe lang het duurt voordat u (of een andere onderhouder) reageert op bijdragen, of dit nu een probleem of een pull-verzoek is. Reageren vereist geen actie. Het kan zo simpel zijn als te zeggen: _"Bedankt voor uw inzending! Ik zal dit binnen de komende week beoordelen."_

U kunt ook de tijd meten die nodig is om tussen fasen in het bijdrageproces te schakelen, zoals:

* Gemiddelde tijd dat een probleem open blijft
* Of kwesties worden gesloten door PR's
* Of oude problemen worden gesloten
* Gemiddelde tijd om een ​​pull-aanvraag samen te voegen

## Gebruik 📊 om over mensen te leren

Door statistieken te begrijpen, kunt u een actief, groeiend open source-project opzetten. Zelfs als u niet elke statistiek op een dashboard volgt, kunt u het bovenstaande framework gebruiken om uw aandacht te richten op het soort gedrag dat uw project zal helpen gedijen.
