---
lang: nl
title: Leiderschap en bestuur
description: Groeiende open source-projecten kunnen profiteren van formele regels voor het nemen van beslissingen.
class: leadership
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
---

## Inzicht in governance voor uw groeiende project

Je project groeit, mensen zijn betrokken en je bent vastbesloten om dit ding gaande te houden. In dit stadium vraagt u zich misschien af hoe u regelmatige projectmedewerkers in uw workflow kunt opnemen, of het nu gaat om iemand commit-toegang te geven of om discussies in de gemeenschap op te lossen. Als u vragen heeft, hebben we de antwoorden.

## Wat zijn voorbeelden van formele rollen die worden gebruikt in open source-projecten?

Veel projecten volgen een vergelijkbare structuur voor rollen en erkenning van medewerkers.

Wat deze rollen eigenlijk betekenen, is geheel aan jou. Hier zijn een paar soorten rollen die u wellicht herkent:

* **Open source-beheerder / Maintainer**
* **Bijdrager / Contributor**
* **Committer**

**Voor sommige projecten zijn "open source-beheerders"** de enige mensen in een project met commit-toegang. In andere projecten zijn het gewoon de mensen die in de README worden vermeld als beheerders.

Een onderhouder hoeft niet per se iemand te zijn die code voor uw project schrijft. Het kan iemand zijn die veel werk heeft verzet om uw project te evangeliseren, of schriftelijke documentatie die het project toegankelijker heeft gemaakt voor anderen. Ongeacht wat ze van dag tot dag doen, een onderhouder is waarschijnlijk iemand die verantwoordelijkheid voelt over de richting van het project en zich inzet om het te verbeteren.

**Een 'bijdrager' kan iedereen zijn** die opmerkingen maakt over een probleem of pull-verzoek, mensen die waarde toevoegen aan het project (of het nu gaat om triaging-problemen, het schrijven van code of het organiseren van evenementen), of iemand met een samengevoegd pull-verzoek (misschien de engste definitie van een bijdrager).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  \[Voor Node.js\] is elke persoon die komt opdagen om commentaar te geven op een probleem of code in te dienen, lid van de community van een project. Alleen al om ze te kunnen zien, betekent dat ze de grens hebben overschreden van een gebruiker naar een bijdrager.
  
  _\[For Node.js,\] every person who shows up to comment on an issue or submit code is a member of a project’s community. Just being able to see them means that they have crossed the line from being a user to being a contributor._
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Gezond Open Source"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**De term "committer"** kan worden gebruikt om commit-toegang, wat een specifiek type verantwoordelijkheid is, te onderscheiden van andere vormen van bijdrage.

Hoewel u uw projectrollen op elke gewenste manier kunt definiëren, [overweeg het gebruik van bredere definities](../how-to-contribute/#waarom-bijdragen-aan-open-source) om meer vormen van bijdrage aan te moedigen. U kunt leiderschapsrollen gebruiken om formeel mensen te erkennen die een uitstekende bijdrage aan uw project hebben geleverd, ongeacht hun technische vaardigheden.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  Je kent me misschien als de "uitvinder" van Django... maar eigenlijk ben ik de man die werd aangenomen om aan iets te werken een jaar nadat het al gemaakt was. (...) Mensen vermoeden dat ik succesvol ben vanwege mijn programmeervaardigheid... maar ik ben op zijn best een gemiddelde programmeur.
  
  _You might know me as the "inventor" of Django...but really I'm the guy who got hired to work on a thing a year after it was already made. (...) People suspect that I'm successful because of my programming skill...but I'm at best an average programmer._
  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## Hoe formaliseer ik deze leiderschapsrollen?

Het formaliseren van uw leiderschapsrollen helpt mensen zich eigenaar te voelen en vertelt andere gemeenschapsleden naar wie ze moeten zoeken voor hulp.

Voor een kleiner project kan het aanwijzen van leiders net zo eenvoudig zijn als het toevoegen van hun naam aan uw README of een CONTRIBUTORS tekstbestand.

Voor een groter project, als u een website heeft, maak dan een teampagina aan of vermeld uw projectleiders daar. [Postgres](https://github.com/postgres/postgres/) heeft bijvoorbeeld een [uitgebreide teampagina](https://www.postgresql.org/community/contributors/) met korte profielen voor elke bijdrager.

Als uw project een zeer actieve bijdragersgemeenschap heeft, kunt u een "kernteam" van beheerders vormen, of zelfs subcommissies van mensen die de verantwoordelijkheid nemen voor verschillende probleemgebieden (bijvoorbeeld beveiliging, probleemopsporing of gedrag van de gemeenschap). Laat mensen zichzelf organiseren en vrijwilligerswerk doen voor de rollen waar ze het meest enthousiast over zijn, in plaats van ze toe te wijzen.

<aside markdown="1" class="pquote">
  \[We\] vullen het kernteam aan met verschillende "subteams". Elk subteam is gericht op een specifiek gebied, bijvoorbeeld taalontwerp of bibliotheken. (...) Om wereldwijde coördinatie en een sterke, samenhangende visie voor het project als geheel te verzekeren, wordt elk subteam geleid door een lid van het kernteam.
  
  _\[We\] supplement the core team with several "subteams". Each subteam is focused on a specific area, e.g., language design or libraries. (...) To ensure global coordination and a strong, coherent vision for the project as a whole, each subteam is led by a member of the core team._
  <p markdown="1" class="pquote-credit">
— ["Rust Bestuur RFC"](https://github.com/rust-lang/rfcs/blob/HEAD/text/1068-rust-governance.md)
  </p>
</aside>

Leiderschapsteams willen misschien een aangewezen kanaal creëren (zoals op IRC) of regelmatig bijeenkomen om het project te bespreken (zoals op Gitter of Google Hangout). U kunt die bijeenkomsten zelfs openbaar maken, zodat andere mensen kunnen luisteren. [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby), bijvoorbeeld [host wekelijks kantooruren](https://github.com/cucumber/cucumber-ruby/blob/HEAD/CONTRIBUTING.md#talking-with-other-devs).

Als u eenmaal leiderschapsrollen heeft vastgesteld, vergeet dan niet te documenteren hoe mensen deze kunnen bereiken! Stel een duidelijk proces vast voor hoe iemand een onderhouder kan worden of lid kan worden van een subcommissie in uw project, en schrijf het op uw GOVERNANCE.md.

Tools zoals [Vossibility](https://github.com/icecrime/vossibility-stack) kunnen je helpen om publiekelijk bij te houden wie (of niet) bijdraagt ​​aan het project. Door deze informatie te documenteren, wordt de perceptie van de gemeenschap vermeden dat beheerders een kliek zijn die privé beslissingen neemt.

Ten slotte, als uw project op GitHub staat, overweeg dan om uw project van uw persoonlijke account naar een organisatie te verplaatsen en ten minste één back-upbeheerder toe te voegen. [GitHub Organisations](https://help.github.com/articles/creating-a-new-organization-account/) maken het gemakkelijker om machtigingen en meerdere opslagplaatsen te beheren en de nalatenschap van je project te beschermen via [gedeeld eigendom](../building-community/#deel-het-eigendom-van-uw-project).

## Wanneer moet ik iemand commit-toegang geven?

Sommige mensen vinden dat je commitment moet geven aan iedereen die een bijdrage levert. Dit zou meer mensen kunnen aanmoedigen om zich eigenaar te voelen van uw project.

Aan de andere kant, vooral voor grotere, meer complexe projecten, wil je misschien alleen commitment geven aan mensen die hun betrokkenheid hebben getoond. Er is niet één goede manier om het te doen - doe wat je het prettigst vindt!

Als je project op GitHub staat, kun je [beschermde branches](https://help.github.com/articles/about-protected-branches/) gebruiken om te beheren wie naar een bepaalde branch kan pushen, en onder welke omstandigheden.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">
  Elke keer dat iemand je een pull-request stuurt, geef hem dan commit-toegang tot je project. Hoewel het in het begin misschien ongelooflijk stom klinkt, kun je met deze strategie de ware kracht van GitHub ontketenen. (...) Als mensen eenmaal commit-toegang hebben, zijn ze niet langer bang dat hun patch niet zal worden samengevoegd... waardoor ze er veel meer werk in steken.
  
  _Whenever somebody sends you a pull request, give them commit access to your project. While it may sound incredibly stupid at first, using this strategy will allow you to unleash the true power of GitHub. (...) Once people have commit access, they are no longer worried that their patch might go unmerged...causing them to put much more work into it._
  <p markdown="1" class="pquote-credit">
— @felixge, ["The Pull Request Hack"](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## Wat zijn enkele van de algemene bestuursstructuren voor open source-projecten?

Er zijn drie algemene bestuursstructuren die verband houden met open source-projecten.

* **BDFL:** BDFL staat voor "Benevolent Dictator for Life". Volgens deze structuur heeft één persoon (meestal de oorspronkelijke auteur van het project) het laatste woord over alle belangrijke projectbeslissingen. [Python](https://github.com/python) is een klassiek voorbeeld. Kleinere projecten zijn waarschijnlijk standaard BDFL, omdat er maar één of twee beheerders zijn. Een project dat is ontstaan ​​bij een bedrijf kan ook in de categorie BDFL vallen.

* **Meritocratie:** **(Opmerking: de term "meritocratie" heeft een negatieve connotatie voor sommige gemeenschappen en heeft een [complexe sociale en politieke geschiedenis](http://geekfeminism.wikia.com/wiki/Meritocracy).)** Onder een meritocratie krijgen actieve projectmedewerkers (degenen die "verdienste" aantonen) een formele besluitvormende rol. Beslissingen worden meestal genomen op basis van zuivere stemconsensus. Het concept van meritocratie is ontwikkeld door de [Apache Foundation](https://www.apache.org/); [alle Apache-projecten](https://www.apache.org/index.html#projects-list) zijn meritocratieën. Bijdragen kunnen alleen worden gedaan door individuen die zichzelf vertegenwoordigen, niet door een bedrijf.

* **Liberale bijdrage (_Liberal contribution_):** Volgens een liberaal contributiemodel worden de mensen die het meeste werk doen als meest invloedrijk erkend, maar dit is gebaseerd op huidig ​​werk en niet op historische bijdragen. Beslissingen voor grote projecten worden genomen op basis van een proces van consensus zoeken (bespreek belangrijke grieven) in plaats van pure stemming, en het streven is om zoveel mogelijk gemeenschapsperspectieven op te nemen. Populaire voorbeelden van projecten die een liberaal contributiemodel gebruiken, zijn onder meer [Node.js] (https://foundation.nodejs.org/) en [Rust] (https://www.rust-lang.org/).

Welke moet je gebruiken? Het is aan jou! Elk model heeft voordelen en afwegingen. En hoewel ze in eerste instantie misschien heel anders lijken, hebben alle drie de modellen meer gemeen dan ze lijken. Bekijk deze sjablonen als u geïnteresseerd bent in het adopteren van een van deze modellen:

* [BDFL-modelsjabloon](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [Modelmodel voor meritocratie](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js's liberale bijdragebeleid](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## Heb ik beheersdocumenten nodig wanneer ik mijn project start?

Er is geen goed moment om de governance van uw project op te schrijven, maar het is veel gemakkelijker te definiëren als u eenmaal de dynamiek van uw gemeenschap heeft gezien. Het beste (en moeilijkste) deel van open source governance is dat het wordt gevormd door de gemeenschap!

Sommige vroege documentatie zal echter onvermijdelijk bijdragen aan het beheer van uw project, dus begin met opschrijven wat u kunt. U kunt bijvoorbeeld duidelijke verwachtingen voor gedrag definiëren, of hoe uw bijdragersproces werkt, zelfs bij de lancering van uw project.

Als u deel uitmaakt van een bedrijf dat een open source-project lanceert, is het de moeite waard om vóór de lancering een interne discussie te hebben over hoe uw bedrijf verwacht te handhaven en beslissingen te nemen over het toekomstige project. Misschien wilt u ook in het openbaar uitleggen hoe uw bedrijf wel of niet bij het project betrokken zal zijn (of niet!).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  We wijzen kleine teams toe om projecten op GitHub te beheren die hier daadwerkelijk aan werken op Facebook. React wordt bijvoorbeeld gerund door een React-engineer.
  
  _We assign small teams to manage projects on GitHub who are actually working on these at Facebook. For example, React is run by a React engineer._
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["Een kijkje in open source bij Facebook"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## Wat gebeurt er als bedrijfsmedewerkers bijdragen beginnen in te dienen?

Succesvolle open source-projecten worden door veel mensen en bedrijven gebruikt, en sommige bedrijven kunnen uiteindelijk inkomstenstromen hebben die uiteindelijk aan het project zijn gekoppeld. Een bedrijf kan bijvoorbeeld de projectcode gebruiken als een onderdeel van een commerciële dienstverlening.

Naarmate het project op grotere schaal wordt gebruikt, wordt er meer vraag naar mensen die er expertise in hebben - misschien bent u een van hen! - en worden soms betaald voor het werk dat ze in het project doen.

Het is belangrijk om commerciële activiteiten als normaal te behandelen en als een nieuwe bron van ontwikkelingsenergie. Betaalde ontwikkelaars mogen natuurlijk geen speciale behandeling krijgen ten opzichte van onbetaalde ontwikkelaars; elke bijdrage moet op zijn technische merites worden beoordeeld. Mensen moeten zich echter op hun gemak voelen bij commerciële activiteiten en zich op hun gemak voelen bij het vermelden van hun gebruiksscenario's wanneer ze pleiten voor een bepaalde verbetering of functie.

"Commercial" is volledig compatibel met "open source". "Commercieel" betekent gewoon dat er ergens geld mee gemoeid is - dat de software wordt gebruikt in de handel, wat steeds waarschijnlijker wordt naarmate een project wordt geaccepteerd. (Wanneer open source-software wordt gebruikt als onderdeel van een niet-open-sourceproduct, is het algehele product nog steeds "eigen" software, hoewel het, net als open source, voor commerciële of niet-commerciële doeleinden kan worden gebruikt.)

Net als ieder ander krijgen commercieel gemotiveerde ontwikkelaars invloed in het project door de kwaliteit en kwantiteit van hun bijdragen. Het is duidelijk dat een ontwikkelaar die voor haar tijd wordt betaald, meer kan dan iemand die niet wordt betaald, maar dat is oké: betaling is slechts een van de vele mogelijke factoren die van invloed kunnen zijn op hoeveel iemand doet. Houd uw projectdiscussies gericht op de bijdragen, niet op de externe factoren waardoor mensen die bijdragen kunnen leveren.

## Heb ik een juridische entiteit nodig om mijn project te ondersteunen?

U hebt geen juridische entiteit nodig om uw open source-project te ondersteunen, tenzij u met geld omgaat.

Als u bijvoorbeeld een commercieel bedrijf wilt opzetten, wilt u een C Corp of LLC opzetten (als u in de VS bent gevestigd). Als u alleen contractwerk doet in verband met uw open source-project, kunt u geld accepteren als een eenmanszaak of een LLC opzetten (als u in de VS bent gevestigd).

Als u donaties voor uw open source-project wilt accepteren, kunt u een donatieknop instellen (bijvoorbeeld met PayPal of Stripe), maar het geld is niet aftrekbaar voor de belasting, tenzij u een in aanmerking komende non-profitorganisatie bent (een 501c3, als je bent in de VS).

Veel projecten willen niet de moeite nemen om een ​​non-profitorganisatie op te zetten, dus zoeken ze in plaats daarvan een fiscale sponsor zonder winstoogmerk. Een fiscale sponsor accepteert namens u schenkingen, meestal in ruil voor een percentage van de schenking. [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](https://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/), [Linux Foundation](https://www.linuxfoundation.org/projects) en [Open Collective](https://opencollective.com/opensource) zijn voorbeelden van organisaties die als fiscale sponsors dienen voor open source-projecten.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
    Our goal is to provide an infrastructure that communities can use to be self sustainable, thus creating an environment where everyone — contributors, backers, sponsors — get concrete benefits out of it.

  _Our goal is to provide an infrastructure that communities can use to be self sustainable, thus creating an environment where everyone — contributors, backers, sponsors — get concrete benefits out of it._
  
  <p markdown="1" class="pquote-credit">
— @piamancini, ["Verder gaan dan het liefdadigheidskader"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141)
  </p>
</aside>

Als uw project nauw verbonden is met een bepaalde taal of een bepaald ecosysteem, kan er ook een gerelateerde softwarefundament zijn waarmee u kunt werken. De [Python Software Foundation](https://www.python.org/psf/) helpt bijvoorbeeld bij het ondersteunen van [PyPI](https://pypi.org/), de Python-pakketbeheerder en de [Node.js Foundation](https://foundation.nodejs.org/) helpt bij het ondersteunen van [Express.js](https://expressjs.com/), een op knooppunten gebaseerd raamwerk.
