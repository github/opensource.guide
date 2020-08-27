---
lang: nl
title: De juridische kant van open source
description: Alles wat je je ooit hebt afgevraagd over de juridische kant van open source, en een paar dingen die je niet deed.
class: legal
toc:
  why-do-people-care-so-much-about-the-legal-side-of-open-source: "Waarom geven mensen zoveel om de juridische kant van open source?"
  are-public-github-projects-open-source: "Zijn openbare GitHub-projecten open source?"
  just-give-me-the-tldr-on-what-i-need-to-protect-my-project: "Geef me gewoon de TL;DR over wat ik nodig heb om mijn project te beschermen"
  which-open-source-license-is-appropriate-for-my-project: "Welke open source-licentie is geschikt voor mijn project?"
  what-if-i-want-to-change-the-license-of-my-project: "Wat moet ik doen als ik de licentie van mijn project wil wijzigen?"
  does-my-project-need-an-additional-contributor-agreement: "Heeft mijn project een aanvullende contribuantenovereenkomst nodig?"
  what-does-my-companys-legal-team-need-to-know: "Wat moet het juridische team van mijn bedrijf weten?"
order: 10
image: /assets/images/cards/legal.png
related:
  - contribute
  - leadership
---

## Understanding the legal implications of open source

Het delen van uw creatieve werk met de wereld kan een opwindende en lonende ervaring zijn. Het kan ook een heleboel juridische dingen betekenen waarvan je niet wist dat u zich er zorgen over moest maken. Gelukkig hoef je niet helemaal opnieuw te beginnen. We hebben uw juridische behoeften gedekt. (Lees voordat u verder gaat onze [disclaimer](/notices/).)

## Waarom geven mensen zoveel om de juridische kant van open source?

Blij dat je het vraagt! Wanneer u een creatief werk maakt (zoals schrijven, afbeeldingen of code), valt dat werk standaard onder exclusief auteursrecht. Dat wil zeggen, de wet gaat ervan uit dat u als auteur van uw werk inspraak hebt in wat anderen ermee kunnen doen.

Over het algemeen betekent dit dat niemand anders uw werk kan gebruiken, kopiëren, distribueren of wijzigen zonder het risico te lopen op uitval, opschudding of rechtszaak.

Open source is echter een ongebruikelijke omstandigheid, omdat de auteur verwacht dat anderen het werk zullen gebruiken, aanpassen en delen. Maar omdat de wettelijke standaard nog steeds exclusief copyright is, hebt u een licentie nodig waarin deze machtigingen expliciet worden vermeld.

Als u geen open source-licentie toepast, wordt iedereen die aan uw project bijdraagt ​​ook de exclusieve copyrighthouder van zijn werk. Dat betekent dat niemand zijn bijdragen kan gebruiken, kopiëren, verspreiden of wijzigen - en dat "niemand" jou ook omvat.

Ten slotte kan uw project afhankelijkheden hebben met licentievereisten waarvan u zich niet bewust was. De gemeenschap van uw project of het beleid van uw werkgever kan ook vereisen dat uw project specifieke open source-licenties gebruikt. We behandelen deze situaties hieronder.

## Zijn openbare GitHub-projecten open source?

Wanneer je [een nieuw project maakt](https://help.github.com/articles/creating-a-new-repository/) op GitHub, heb je de optie om de repository **privé** of **openbaar te maken**.

![Create repository](/assets/images/legal/repo-create-name.png)

**Het openbaar maken van uw GitHub-project is niet hetzelfde als het licentiëren van uw project.** Openbare projecten vallen onder de [Servicevoorwaarden van GitHub](https://help.github.com/en/github/site-policy/github-terms-of-service#3-ownership-of-content-right-to-post-and-license-grants), waarmee anderen uw project kunnen bekijken en splitsen (_een fork_), maar uw werk heeft verder geen rechten.

Als u wilt dat anderen uw project gebruiken, distribueren, wijzigen of eraan bijdragen, moet u een open source-licentie opnemen. Iemand kan bijvoorbeeld geen enkel deel van je GitHub-project legaal in zijn code gebruiken, zelfs niet als het openbaar is, tenzij je hem expliciet het recht geeft om dit te doen.

## Geef me gewoon de TL;DR over wat ik nodig heb om mijn project te beschermen

Je hebt geluk, want tegenwoordig zijn open source-licenties gestandaardiseerd en gebruiksvriendelijk. U kunt een bestaande licentie rechtstreeks in uw project kopiëren en plakken.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) en [GPLv3](https://choicealicense.com/licenses/gpl-3.0/) zijn de meest populaire open source-licenties, maar er zijn andere opties om uit te kiezen. U kunt de volledige tekst van deze licenties en instructies voor het gebruik ervan vinden op [choosealicense.com](https://choosealicense.com/).

Wanneer u een nieuw project op GitHub maakt, wordt u [gevraagd om een licentie toe te voegen](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
    Een gestandaardiseerde licentie dient als een proxy voor degenen zonder juridische opleiding om precies te weten wat ze wel en niet kunnen doen met de software. Vermijd, tenzij absoluut vereist, aangepaste, gewijzigde of niet-standaard voorwaarden, die een belemmering zullen vormen voor het downstream-gebruik van de agentschapscode.

  _A standardized license serves as a proxy for those without legal training to know precisely what they can and can't do with the software. Unless absolutely required, avoid custom, modified, or non-standard terms, which will serve as a barrier to downstream use of the agency code._

  <p markdown="1" class="pquote-credit">
— @benbalter, ["Alles wat een overheidsadvocaat moet weten over open source softwarelicenties"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## Welke open source-licentie is geschikt voor mijn project?

Als je begint met een blanco project, is het moeilijk om fout te gaan met de [MIT License](https://choosealicense.com/licenses/mit/). Het is kort, heel gemakkelijk te begrijpen en staat iedereen toe om alles te doen, zolang ze een kopie van de licentie bewaren, inclusief uw copyrightmelding. U kunt het project onder een andere licentie vrijgeven als dat ooit nodig is.

Anders hangt het kiezen van de juiste open source-licentie voor uw project af van uw doelstellingen.

Uw project heeft (of zal) zeer waarschijnlijk **afhankelijkheden**. Als u bijvoorbeeld een Node.js-project open source maakt, gebruikt u waarschijnlijk bibliotheken van de Node Package Manager (npm). Elk van die bibliotheken waarvan u afhankelijk bent, heeft zijn eigen open source-licentie. Als elk van hun licenties "permissief" is (geeft het publiek toestemming om te gebruiken, wijzigen en delen, zonder enige voorwaarde voor downstreamlicenties), kunt u elke gewenste licentie gebruiken. Veelgebruikte licenties zijn onder meer MIT, Apache 2.0, ISC en BSD.

Aan de andere kant, als een van de licenties van je afhankelijkheden "sterk copyleft" is (geeft ook publiek dezelfde permissies, op voorwaarde dat je dezelfde licentie downstream gebruikt), dan zal je project dezelfde licentie moeten gebruiken. Veelgebruikte licenties voor sterke auteursplicht zijn GPLv2, GPLv3 en AGPLv3.

U kunt ook de **gemeenschappen** overwegen waarvan u hoopt dat ze zullen gebruiken en bijdragen aan uw project:

* **Wilt u dat uw project wordt gebruikt als afhankelijkheid door andere projecten?** Waarschijnlijk het beste om de meest populaire licentie in uw relevante gemeenschap te gebruiken. [MIT](https://choosealicense.com/licenses/mit/) is bijvoorbeeld de meest populaire licentie voor [npm libraries](https://libraries.io/search?platforms=NPM).
* **Wilt u dat uw project grote bedrijven aanspreekt?** Een groot bedrijf wil waarschijnlijk een uitdrukkelijke patentlicentie van alle bijdragers. In dit geval heeft [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) jou (en hen) gedekt.
* **Wilt u dat uw project een beroep doet op bijdragers die niet willen dat hun bijdragen worden gebruikt in closed source-software?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) of (indien ze willen ook niet bijdragen aan closed source-diensten) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) zal goed overkomen.

Uw **bedrijf** heeft mogelijk specifieke licentievereisten voor zijn open source-projecten. Het kan bijvoorbeeld een vergunning vereisen, zodat het bedrijf uw project kan gebruiken in het closed source-product van het bedrijf. Of uw bedrijf heeft mogelijk een sterke auteursplichtlicentie en een aanvullende bijdragersovereenkomst nodig (zie hieronder) zodat alleen uw bedrijf, en niemand anders, uw project kan gebruiken in closed source-software. Of uw bedrijf kan bepaalde behoeften hebben met betrekking tot normen, sociale verantwoordelijkheid of transparantie, die elk een bepaalde licentiestrategie vereisen. Neem contact op met de juridische afdeling van uw [bedrijf](#wat-moet-het-juridische-team-van-mijn-bedrijf-weten).

Wanneer u een nieuw project op GitHub maakt, krijgt u de mogelijkheid om een ​​licentie te selecteren. Als u een van de bovengenoemde licenties opneemt, wordt uw GitHub-project open source. Als je andere opties wilt zien, ga dan naar [choosealicense.com](https://choosealicense.com) om de juiste licentie voor je project te vinden, zelfs als het [geen software is](https://choosealicense.com/non-software/).

## Wat moet ik doen als ik de licentie van mijn project wil wijzigen?

De meeste projecten hoeven nooit van licentie te wisselen. Maar af en toe veranderen de omstandigheden.

Naarmate uw project groeit, voegt het bijvoorbeeld afhankelijkheden of gebruikers toe, of verandert uw bedrijf van strategie, die voor elk een andere licentie kunnen vereisen of willen. Als u vanaf het begin geen licentie voor uw project hebt verleend, is het toevoegen van een licentie in feite hetzelfde als het wijzigen van licenties. Er zijn drie fundamentele zaken waarmee u rekening moet houden bij het toevoegen of wijzigen van de licentie van uw project:

**Het is ingewikkeld.** Het bepalen van de compatibiliteit en naleving van licenties en wie het auteursrecht bezit, kan zeer snel ingewikkeld en verwarrend worden. Overschakelen naar een nieuwe maar compatibele licentie voor nieuwe releases en bijdragen is iets anders dan alle bestaande bijdragen opnieuw licentiëren. Betrek uw juridische team bij de eerste aanwijzing dat u licenties wilt wijzigen. Zelfs als u toestemming hebt of kunt krijgen van de auteursrechthouders van uw project voor een licentiewijziging, moet u rekening houden met de impact van de wijziging op de andere gebruikers en bijdragers van uw project. Beschouw een licentiewijziging als een "bestuursgebeurtenis" voor uw project dat waarschijnlijk vlotter zal verlopen met duidelijke communicatie en overleg met de belanghebbenden van uw project. Reden te meer om vanaf het begin een geschikte licentie voor uw project te kiezen en te gebruiken!

**De bestaande licentie van uw project.** Als de bestaande licentie van uw project compatibel is met de licentie waarnaar u wilt overschakelen, kunt u de nieuwe licentie gewoon gaan gebruiken. Dat komt omdat als licentie A compatibel is met licentie B, u voldoet aan de voorwaarden van A terwijl u voldoet aan de voorwaarden van B (maar niet noodzakelijkerwijs andersom). Dus als u momenteel een toegestane licentie gebruikt (bijv. MIT), kunt u overschakelen naar een licentie met meer voorwaarden, zolang u een kopie van de MIT-licentie en eventuele bijbehorende copyrightkennisgevingen bewaart (dat wil zeggen, blijf voldoen aan de Minimale voorwaarden van de MIT-licentie). Maar als je huidige licentie niet toelaatbaar is (bijv. Copyleft, of je hebt geen licentie) en je bent niet de enige copyrighthouder, dan zou je niet zomaar de licentie van je project kunnen veranderen in MIT. In wezen hebben de auteursrechthouders van het project met een toegestane licentie van tevoren toestemming gegeven om licenties te wijzigen.

**De bestaande auteursrechthouders van uw project.** Als u de enige bijdrager aan uw project bent, bent u of uw bedrijf de enige houder van het auteursrecht van het project. U kunt elke licentie die u of uw bedrijf wenst, toevoegen of wijzigen. Anders zijn er mogelijk andere auteursrechthouders met wie u toestemming nodig heeft om licenties te wijzigen. Wie zijn zij? Mensen die commits hebben in uw project, zijn een goede plek om te beginnen. Maar in sommige gevallen berust het auteursrecht bij de werkgevers van die mensen. In sommige gevallen hebben mensen slechts minimale bijdragen geleverd, maar er is geen vaste regel dat bijdragen onder een aantal coderegels niet onderhevig zijn aan auteursrechten. Wat te doen? Het hangt er van af. Voor een relatief klein en jong project kan het haalbaar zijn om alle bestaande bijdragers zover te krijgen dat ze instemmen met een licentiewijziging in een issue of pull-aanvraag. Voor grote en langlopende projecten moet u mogelijk veel bijdragers en zelfs hun erfgenamen zoeken. Mozilla heeft jaren (2001-2006) nodig gehad om Firefox, Thunderbird en gerelateerde software opnieuw te licentiëren.

Als alternatief kunt u bijdragers van tevoren laten instemmen (via een aanvullende overeenkomst voor bijdragers - zie hieronder) met bepaalde licentiewijzigingen onder bepaalde voorwaarden, naast die welke zijn toegestaan ​​door uw bestaande open source-licentie. Dit verschuift de complexiteit van het wijzigen van licenties een beetje. U heeft vooraf meer hulp van uw advocaten nodig en u wilt toch duidelijk communiceren met de belanghebbenden van uw project wanneer u een licentiewijziging doorvoert.

## Heeft mijn project een aanvullende contribuantenovereenkomst nodig?

Waarschijnlijk niet. Voor de overgrote meerderheid van open source-projecten dient een open source-licentie impliciet als zowel de inkomende (van bijdragers) als uitgaande (naar andere bijdragers en gebruikers) licentie. Als uw project zich op GitHub bevindt, maken de Servicevoorwaarden van GitHub "inbound = outbound" tot de [expliciete standaard](https://help.github.com/en/github/site-policy/github-terms-of-service#6-contributions-under-repository-license).

Een aanvullende bijdragersovereenkomst -- vaak een bijdragerslicentieovereenkomst (CLA) genoemd -- kan administratief werk creëren voor projectbeheerders. Hoeveel werk een overeenkomst toevoegt, hangt af van het project en de uitvoering. Een eenvoudige overeenkomst kan vereisen dat bijdragers met een klik bevestigen dat ze de benodigde rechten hebben om bij te dragen onder de open source-licentie van het project. Een meer gecompliceerde overeenkomst vereist mogelijk juridische beoordeling en goedkeuring door de werkgevers van contribuanten.

Door ook 'papierwerk' toe te voegen waarvan sommigen denken dat het onnodig, moeilijk te begrijpen of oneerlijk is (wanneer de ontvanger van de overeenkomst meer rechten krijgt dan bijdragers of het publiek via de open source-licentie van het project), kan een aanvullende overeenkomst voor bijdragers als onvriendelijk worden ervaren aan de gemeenschap van het project.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">
    We hebben de CLA voor Node.js. Door dit te doen, wordt de toegangsdrempel voor Node.js-bijdragers verlaagd, waardoor het aantal bijdragers wordt verbreed.
    
    _We have eliminated the CLA for Node.js. Doing this lowers the barrier to entry for Node.js contributors thereby broadening the contributor base._

  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Node.js-bijdragen verbreden"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>
Enkele situaties waarin u wellicht een aanvullende bijdrageovereenkomst voor uw project wilt overwegen, zijn onder meer:

* Uw advocaten willen dat alle bijdragers uitdrukkelijk (_tekenen_, online of offline) contributievoorwaarden accepteren, misschien omdat ze vinden dat de open source-licentie zelf niet voldoende is (ook al is het dat wel!). Als dit de enige zorg is, zou een bijdragersovereenkomst moeten volstaan ​​die de open source-licentie van het project bevestigt. De [jQuery Individual Contributor License Agreement](https://contribute.jquery.org/CLA/) is een goed voorbeeld van een lichtgewicht aanvullende overeenkomst voor bijdragers.
* U of uw advocaten willen dat ontwikkelaars verklaren dat elke toezegging die ze doen, geautoriseerd is. Een [Developer Certificate of Origin](https://developercertificate.org/) vereiste is hoeveel projecten dit bereiken. De Node.js-community [gebruikt](https://github.com/nodejs/node/blob/HEAD/CONTRIBUTING.md) bijvoorbeeld de DCO [in plaats daarvan](https://nodejs.org/en/blog/uncategorized/notes-from-the-road/#easier-contribution) van hun eerdere cao. Een eenvoudige optie om de handhaving van de DCO op uw repository te automatiseren, is de [DCO Probot] (https://github.com/probot/dco).
* Uw project maakt gebruik van een open source-licentie die geen uitdrukkelijke octrooiverlening omvat (zoals MIT), en u hebt een octrooiverlening nodig van alle bijdragers, van wie sommigen mogelijk werken voor bedrijven met grote octrooiportefeuilles die kunnen worden gebruikt om u te targeten of de andere bijdragers en gebruikers van het project. De [Apache-licentieovereenkomst voor individuele bijdragers](https://www.apache.org/licenses/icla.pdf) is een veelgebruikte aanvullende overeenkomst voor bijdragers met een octrooiverlening die overeenkomt met die in de Apache-licentie 2.0.
* Uw project valt onder een auteursplichtlicentie, maar u moet ook een eigen versie van het project distribueren. Je hebt elke bijdrager nodig om het auteursrecht aan jou toe te wijzen of jou (maar niet het publiek) een permissieve licentie te verlenen. De [MongoDB-bijdragersovereenkomst](https://www.mongodb.com/legal/contributor-agreement) is een voorbeeld van dit type overeenkomst.
* U denkt dat uw project mogelijk licenties moet wijzigen gedurende de levensduur en u wilt dat bijdragers van tevoren akkoord gaan met dergelijke wijzigingen.

Als je toch een aanvullende bijdragersovereenkomst nodig hebt voor je project, overweeg dan om een ​​integratie zoals [CLA-assistent](https://github.com/cla-assistant/cla-assistant) te gebruiken om afleiding van bijdragers te minimaliseren.

## Wat moet het juridische team van mijn bedrijf weten?

Als u als bedrijfsmedewerker een open source-project vrijgeeft, moet uw juridische team eerst weten dat u een project open source maakt.

Overweeg om ze te laten weten, of het nu een persoonlijk project is, of het nu beter of slechter is. U hebt waarschijnlijk een "IP-overeenkomst voor werknemers" met uw bedrijf die hen enige controle geeft over uw projecten, vooral als ze überhaupt verband houden met de zaken van het bedrijf of als u bedrijfsmiddelen gebruikt om het project te ontwikkelen. Uw bedrijf _moet_ u gemakkelijk toestemming geven, en heeft dat misschien al gedaan via een werknemersvriendelijke IE-overeenkomst of een bedrijfsbeleid. Zo niet, dan kunt u onderhandelen (leg bijvoorbeeld uit dat uw project de professionele leer- en ontwikkelingsdoelstellingen van het bedrijf voor u dient), of werk niet aan uw project totdat u een beter bedrijf heeft gevonden.

**Als u een open source project voor uw bedrijf zoekt,** laat het hen dan zeker weten. Uw juridische team heeft waarschijnlijk al beleid voor welke open source-licentie (en misschien een aanvullende bijdragersovereenkomst) moet worden gebruikt op basis van de zakelijke vereisten en expertise van het bedrijf om ervoor te zorgen dat uw project voldoet aan de licenties van zijn afhankelijkheden. Zo niet, dan hebben jij en zij geluk! Uw juridische team zou graag met u willen samenwerken om dit uit te zoeken. Enkele dingen om over na te denken:

* **Materiaal van derden:** Heeft uw project afhankelijkheden die door anderen zijn gecreëerd of bevat of gebruikt u anderszins code van anderen? Als deze open source zijn, moet u voldoen aan de open source-licenties van het materiaal. Dat begint met het kiezen van een licentie die werkt met de open source-licenties van derden (zie hierboven). Als uw project open source-materiaal van derden wijzigt of verspreidt, zal uw juridische team ook willen weten dat u voldoet aan andere voorwaarden van de open source-licenties van derden, zoals het behouden van copyrightkennisgevingen. Als uw project code van anderen gebruikt die geen open source-licentie heeft, moet u waarschijnlijk de externe beheerders vragen om [een open source-licentie toe te voegen](https://choosealicense.com/no-license/#for-users), en als u er geen kunt krijgen, stop dan met het gebruik van hun code in uw project.

* **Handelsgeheimen:** Bedenk of er iets in het project staat dat het bedrijf niet beschikbaar wil stellen aan het grote publiek. Als dat het geval is, kunt u de rest van uw project open source maken, nadat u het materiaal hebt geëxtraheerd dat u privé wilt houden.

* **Octrooien:** Vraagt ​​uw bedrijf een octrooi aan waarvan open sourcing uw project [openbaar](https://en.wikipedia.org/wiki/Public_disclosure) zou maken? Helaas wordt u mogelijk gevraagd om te wachten (of misschien heroverweegt het bedrijf de wijsheid van de toepassing). Als u bijdragen aan uw project verwacht van werknemers van bedrijven met grote octrooiportefeuilles, kan uw juridische team willen dat u een licentie gebruikt met een uitdrukkelijke octrooiverlening van bijdragers (zoals Apache 2.0 of GPLv3), of een aanvullende bijdragersovereenkomst (zie hierboven).

* **Handelsmerken:** Controleer nogmaals of de naam van uw project [niet in strijd is met bestaande handelsmerken](../starting-a-project/#naamconflicten-vermijden). Als u in het project uw eigen bedrijfsmerken gebruikt, controleer dan of dit geen conflicten veroorzaakt. [FOSSmarks](http://fossmarks.org/) is een praktische gids om handelsmerken te begrijpen in de context van gratis en open source projecten.

* **Privacy:** Verzamelt uw project gegevens over gebruikers? 'Naar huis bellen' naar bedrijfsservers? Uw juridische team kan u helpen bij het naleven van het bedrijfsbeleid en externe regelgeving.

Als u het eerste open source-project van uw bedrijf uitbrengt, is het bovenstaande meer dan voldoende om erdoorheen te komen (maar maakt u zich geen zorgen, de meeste projecten zouden geen grote zorgen moeten baren).

Op de langere termijn kan uw juridische team meer doen om het bedrijf te helpen meer uit zijn betrokkenheid bij open source te halen en veilig te blijven:

* **Beleid inzake werknemersbijdragen:** Overweeg om een ​​bedrijfsbeleid te ontwikkelen dat aangeeft hoe uw werknemers bijdragen aan open source-projecten. Een duidelijk beleid zal de verwarring onder uw medewerkers verminderen en hen helpen bij te dragen aan open source-projecten in het belang van het bedrijf, zowel als onderdeel van hun baan als in hun vrije tijd. Een goed voorbeeld is Rackspace's [Model IP and Open Source Contribution Policy] (https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">
  Door de interlectuele eigenschap die aan een patch is gekoppeld, te verhuren, wordt de kennisbasis en de reputatie van de werknemer opgebouwd. Het laat zien dat het bedrijf investeert in de ontwikkeling van die medewerker en creëert een gevoel van empowerment en autonomie. Al deze voordelen leiden ook tot een hoger moreel en een beter behoud van werknemers.
  
  _Letting out the IP associated with a patch builds the employee's knowledge base and reputation. It shows that the company is invested in the development of that employee and creates a sense of empowerment and autonomy. All of these benefits also lead to higher morale and better employee retention._

  <p markdown="1" class="pquote-credit">
— @vanl, ["Een modelbeleid inzake intellectuele eigendom en bijdragen aan open source"](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **Wat vrij te geven:** [(Bijna) alles?] (Http://tom.preston-werner.com/2011/11/22/open-source-everything.html) Als uw juridische team het begrijpt en geïnvesteerd in de open source-strategie van uw bedrijf, zullen ze u het beste kunnen helpen in plaats van hinderen.
* **Naleving:** Zelfs als uw bedrijf geen open source-projecten vrijgeeft, gebruikt het open source-software van anderen. [Bewustwording en proces](https://www.linuxfoundation.org/blog/2015/06/why-companies-that-use-open-source-need-a-compliance-program/) kan hoofdpijn, productvertragingen, en rechtszaken voorkomen.

<aside markdown="1" class="pquote">
  Organisaties moeten een licentie- en nalevingsstrategie hebben die past in de categorieën \["tolerant" en "copyleft"\]. Dit begint met het bijhouden van de licentievoorwaarden die van toepassing zijn op de open source-software die u gebruikt, inclusief subcomponenten en afhankelijkheden.
  
  _Organizations must have a license and compliance strategy in place that fits both \["permissive" and "copyleft"\] categories. This begins with keeping a record of the licensing terms that apply to the open source software you’re using — including subcomponents and dependencies._
  
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Open source-software: basisprincipes van compliance en best practices"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Patenten:** Uw bedrijf wil wellicht lid worden van het [Open Invention Network](https://www.openinventionnetwork.com/), een gedeelde defensieve patentpool om het gebruik van grote open source-projecten door leden te beschermen, of andere [alternatieve patentlicenties](https://www.eff.org/document/hacking-patent-system-2016).
* **Governance:** Zeker als en wanneer het zinvol is om een project te verhuizen naar een [juridische entiteit buiten het bedrijf](../leadership-and-governance/#heb-ik-een-juridische-entiteit-nodig-om-mijn-project-te-ondersteunen).
