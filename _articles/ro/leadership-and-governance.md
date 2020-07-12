---
lang: ro
title: Conducere și guvernare
description: Proiectele în creștere cu sursă deschisă pot beneficia de reguli formale pentru luarea deciziilor.
class: leadership
toc:
  understanding-governance-for-your-growing-project: "Înțelegerea guvernării pentru proiectul tău în creștere"
  what-are-examples-of-formal-roles-used-in-open-source-projects: "Care sunt exemplele de roluri formale utilizate în proiecte cu sursă deschisă?"
  how-do-i-formalize-these-leadership-roles: "Cum formalizez aceste roluri de conducere?"
  when-should-i-give-someone-commit-access: "Când ar trebui să dau cuiva acces de commit?"
  what-are-some-of-the-common-governance-structures-for-open-source-projects: "Care sunt unele dintre structurile obișnuite de guvernanță pentru proiectele cu sursă deschisă?"
  do-i-need-governance-docs-when-i-launch-my-project: "Am nevoie de documente de guvernare atunci când lansez proiectul meu?"
  what-happens-if-corporate-employees-start-submitting-contributions: "Ce se întâmplă dacă angajați din companii încep să trimită contribuții?"
  do-i-need-a-legal-entity-to-support-my-project: "Am nevoie de o entitate juridică pentru a-mi susține proiectul?"
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
---

## Înțelegerea guvernării pentru proiectul tău în creștere

Proiectul tău este în creștere, oamenii sunt angajați, și ești angajat să ții acest lucru tot așa. În această etapă, s-ar putea să te întrebi cum să încorporezi contributori obișnuiți ai proiectului în fluxul tău de lucru, fie că este vorba de a da cuiva permisiunea de a face commit-uri sau rezolvarea dezbaterilor comunității. Dacă tu ai întrebări, noi avem răspunsuri.

## Care sunt exemplele de roluri formale utilizate în proiecte cu sursă deschisă?

Multe proiecte urmează o structură similară pentru rolurile și recunoașterea contributorilor.

Ce aceste roluri înseamnă de fapt, totuși, depinde doar de tine. Iată câteva tipuri de roluri pe care le-ai putea recunoaște:

* **Întreținător**
* **Contributor**
* **Committer**

**Pentru unele proiecte, „întreținătorii”** sunt singurele persoane din proiect cu acces de commit. În alte proiecte, ei sunt pur și simplu oamenii care sunt listați în README ca întreținători.

Un întreținător nu trebuie să fie neapărat cineva care scrie cod pentru proiectul tău. Poate fi cineva care a făcut multă muncă promovându-ți proiectul, sau a scris documentație care a făcut proiectul mai accesibil altora. Indiferent de ce face zi de zi, un întreținător este probabil cineva care simte responsabilitate asupra direcției proiectului și este angajat la îmbunătățirea lui.

**Un „contributor” ar putea fi oricine** care comentează la o problemă sau la o cerere de pull, oameni care adaugă valoare proiectului (fie că este trierea de probleme, scrierea de cod, sau organizarea de evenimente), sau oricine cu o cerere de pull îmbinată (poate cea mai restrânsă definiție a unui contributor).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  <p>
    [Pentru Node.js,] oricare persoană care se arată să comenteze la o problemă sau să trimită cod este o membră a comunității unui proiect. Doar faptul că ea poate fi văzută înseamnă că ea a trecut linia de la a fi un utilizator la a fi un contributor.
  </p>
  <p>
    <em>
      [For Node.js,] every person who shows up to comment on an issue or submit code is a member of a project’s community. Just being able to see them means that they have crossed the line from being a user to being a contributor.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Healthy Open Source"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**Termenul „committer”** poate fi folosit pentru a distinge accesul la commit, care este un tip specific de responsabilitate, de alte forme de contribuție.

În timp ce poți defini rolurile proiectului tău în orice fel îți place, [consideră folosirea de definiții mai largi](../how-to-contribute/#ce-înseamnă-să-contribui) pentru a încuraja mai multe forme de contribuție. Poți folosi roluri de conducere pentru a recunoaște în mod oficial pe oamenii care au făcut contribuții remarcabile la proiectul tău, indiferent de abilitățile lor tehnice.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Poate mă știi ca „inventatorul” lui Django... dar de fapt sunt tipul care a fost angajat să lucreze pe un lucru la un an după ce a fost deja făcut. (...) Oamenii suspectează că sunt de succes datorită abilităților mele de programare... dar sunt în cel mai bun caz un programator mediu.
  </p>
  <p>
    <em>
      You might know me as the "inventor" of Django...but really I'm the guy who got hired to work on a thing a year after it was already made. (...) People suspect that I'm successful because of my programming skill...but I'm at best an average programmer.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## Cum formalizez aceste roluri de conducere?

Formalizarea rolurilor de conducere ajută oamenii să se simtă proprietari și spune celorlalți membri ai comunității pe cine să caute pentru ajutor.

Pentru un proiect mai mic, desemnarea liderilor poate fi atât de simplă ca adăugarea numelor lor la fișierul tău text README sau CONTRIBUTORS.

Pentru un proiect mai mare, dacă ai un site web, creează o pagină a echipei sau listează liderii proiectului tău acolo. De exemplu, [Postgres](https://github.com/postgres/postgres/) are o [pagină cuprinzătoare a echipei](https://www.postgresql.org/community/contributors/) cu profiluri scurte pentru fiecare contributor.

Dacă proiectul tău are o comunitate de contributori foarte activă, ai putea să formezi o „echipă de bază” a întreținătorilor, sau chiar subcomitete ale oamenilor care preiau conducerea unor domenii de probleme diferite (de exemplu, securitate, trierea problemelor, sau conduita comunității). Lasă oamenii să se autoorganizeze și să aplice pentru voluntariat în rolurile de care sunt cei mai încântați, în loc să li le atribui.

<aside markdown="1" class="pquote">
  <p>
    [Noi] suplinim echipa de bază cu câteva „subechipe”. Fiecare subechipă este concentrată pe un domeniu specific, de exemplu, proiectarea limbajului sau a bibliotecilor. (...) Pentru a asigura coordonare globală și o puternică, coerentă viziune pentru proiect ca întreg, fiecare subechipă este condusă de un membru din echipa de bază.
  </p>
  <p>
    <em>
      [We] supplement the core team with several "subteams". Each subteam is focused on a specific area, e.g., language design or libraries. (...) To ensure global coordination and a strong, coherent vision for the project as a whole, each subteam is led by a member of the core team.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— ["Rust Governance RFC"](https://github.com/rust-lang/rfcs/blob/HEAD/text/1068-rust-governance.md)
  </p>
</aside>

Echipele de conducere ar putea dori să creeze un canal desemnat (cum ar fi pe IRC) sau să se întâlnească periodic să discute despre proiect (cum ar fi pe Gitter sau Google Hangouts). Poți chiar face aceste întâlniri publice astfel încât alți oameni pot asculta. [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby), de exemplu, [găzduiește ore de lucru săptămânal](https://github.com/cucumber/cucumber-ruby/blob/HEAD/CONTRIBUTING.md#talking-with-other-devs).

Odată ce ai stabilit roluri de conducere, nu uita să documentezi modul în care oamenii pot să le atingă! Stabilește un proces clar pentru cum cineva poate deveni un întreținător sau să se alăture unui subcomitet în cadrul proiectului tău, și scrie aceasta în GOVERNANCE.md-ul tău.

Unelte cum ar fi [Vossibility](https://github.com/icecrime/vossibility-stack) pot să te ajute să urmărești în mod public cine face (sau nu) contribuții la proiect. Documentarea acestor informații evită percepția comunității că întreținătorii sunt o clică ce își ia deciziile în privat.

În cele din urmă, dacă proiectul tău este pe GitHub, consideră mutarea proiectului tău din contul personal într-o organizație și adăugarea a cel puțin unui administrator de rezervă. [Organizațiile GitHub](https://help.github.com/articles/creating-a-new-organization-account/) ușurează gestionarea permisiunilor și multiplelor depozite și protejează moștenirea proiectului tău prin [proprietate comună](../building-community/#împarte-proprietatea-proiectului-tău).

## Când ar trebui să dau cuiva acces de commit?

Unii oameni gândesc că ar trebui să dea acces de commit la oricine face o contribuție. Făcând astfel ar putea încuraja mai mulți oameni să se simtă proprietari asupra proiectului tău.

Pe de altă parte, în special pentru proiectele mai mari, mai complexe, ai putea vrea să dai acces de commit doar oamenilor care și-au demonstrat angajamentul. Nu există o singură cale corectă de a face aceasta - fă ce te face cel mai confortabil!

Dacă proiectul tău este pe GitHub, poți folosi [ramuri protejate](https://help.github.com/articles/about-protected-branches/) pentru a gestiona cine poate face push spre o anumită ramură, și în care circumstanțe.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Oricând cineva îți trimite o cerere de pull, dă-i acces de commit la proiectul tău. Cu toate că poate suna incredibil de stupid la început, folosind această strategie îți va permite să dezlănțui adevărata putere a GitHub. (...) Odată ce oamenii au acces de commit, ei nu mai sunt îngrijorați că patch-ul lor ar putea ajunge neîmbinat... făcându-i să pună mult mai multă muncă în el.
  </p>
  <p>
    <em>
      Whenever somebody sends you a pull request, give them commit access to your project. While it may sound incredibly stupid at first, using this strategy will allow you to unleash the true power of GitHub. (...) Once people have commit access, they are no longer worried that their patch might go unmerged...causing them to put much more work into it.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @felixge, ["The Pull Request Hack"](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## Care sunt unele dintre structurile obișnuite de guvernanță pentru proiectele cu sursă deschisă?

Există trei structuri obișnuite de guvernanță asociate cu proiectele cu sursă deschisă.

* **BDFL:** BDFL înseamnă "Benevolent Dictator for Life" (Dictator binevoitor pentru viață). În cadrul acestei structuri, o persoană (de obicei autorul inițial al proiectului) are ultimul cuvânt asupra tuturor deciziilor majore legate de proiect. [Python](https://github.com/python) este un exemplu clasic. Proiectele mai mici sunt probabil BDFL în mod implicit, deoarece există doar unul sau doi întreținători. Un proiect care își are originea la o companie ar putea de asemenea intra în categoria BDFL.

* **Meritocrația:** **(Notă: termenul „meritocrație” are conotații negative pentru unele comunități și are o [istorie socială și politică complexă](http://geekfeminism.wikia.com/wiki/Meritocracy).)** În cadrul unei meritocrații, contributorii activi ai proiectului (aceia care demonstrează „merit”) primesc un rol oficial de luare a deciziilor. Deciziile sunt de obicei luate bazat pe consens pur votat. Conceptul de meritocrație o are ca pionieră pe [Fundația Apache](https://www.apache.org/); [toate proiectele Apache](https://www.apache.org/index.html#projects-list) sunt meritocrații. Contribuțiile pot fi făcute doar de indivizi care se reprezintă pe sine, nu printr-o companie.

* **Contribuție liberală:** În cadrul unui model de contribuție liberală, oamenii care fac cea mai multă muncă sunt recunoscuți ca cei mai influenți, dar aceasta se bazează pe munca din prezent și nu pe contribuții istorice. Deciziile majore legate de proiect sunt făcute pe baza unui proces de căutare de consens (discută plângerile majore) în loc de votare pură, și se străduiesc să includă cât mai multe perspective posibil din comunitate. Exemple populare de proiecte care folosesc un model de contribuție liberală includ [Node.js](https://foundation.nodejs.org/) și [Rust](https://www.rust-lang.org/).

Pe care dintre ele ar trebui să o folosești? Depinde de tine! Fiecare model are avantaje și compromisuri. Și chiar dacă ele ar putea să-ți pară destul de diferite la început, toate cele trei modele au mai mult în comun decât pare. Dacă ești interesat în a adopta una dintre aceste modele, aruncă o privire la aceste șabloane:

* [șablon pentru modelul BDFL](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [șablon pentru modelul meritocratic](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [politica de contribuție liberală a Node.js](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## Am nevoie de documente de guvernare atunci când lansez proiectul meu?

Nu există moment potrivit să notezi guvernarea proiectului tău, dar este mult mai ușor să o definești odată ce ai văzut acea dinamică a comunitații jucând. Cea mai bună (și cea mai grea) parte despre guvernarea open source este faptul că este modelată de comunitate!

Totuși unele documente inițiale vor contribui la guvernarea proiectului tău în mod inevitabil, deci începe să notezi ce poți. De exemplu, poți defini așteptări clare privind comportamentul, sau cum funcționează procesul tău de contribuire, chiar la lansarea proiectului tău.

Dacă ești parte dintr-o companie care lansează un proiect cu sursă deschisă, merită să aveți o discuție internă înainte de lansare despre cum compania voastră se așteaptă să mențină și să facă decizii cu privire la proiectul care merge înainte. Poate ați dori de asemenea să explicați în mod public oricare detaliu cu privire la cum compania va fi (sau nu va fi!) implicată în proiect.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Desemnăm echipe mici, să gestioneze proiectele pe GitHub, echipe care lucrează de fapt pe aceste proiecte la Facebook. De exemplu, React este condus de un inginer React.
  </p>
  <p>
    <em>
      We assign small teams to manage projects on GitHub who are actually working on these at Facebook. For example, React is run by a React engineer.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["An inside look at open source at Facebook"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## Ce se întâmplă dacă angajați din companii încep să trimită contribuții?

Proiectele open source de succes sunt folosite de mulți oameni și companii, și unele companii pot avea în cele din urmă fluxuri de venit eventual legate de proiect. De exemplu, o companie ar putea folosi codul proiectului ca o componentă într-o ofertă de serviciu comercial.

Pe măsură ce proiectul este utilizat pe scară mai largă, oamenii care au experiență în acest domeniu devin mai solicitați - tu ai putea fi unul dintre ei! - și câteodată vor fi plătiți pentru munca pe care o fac în cadrul proiectului.

Este important să tratezi activitatea comercială ca normală și exact ca pe o altă sursă de energie de dezvoltare. Dezvoltatorii plătiți nu ar trebui să primească tratament special în comparație cu cei neplătiți, de sigur; fiecare contribuție trebuie să fie evaluată pe baza meritelor ei tehnice. Totuși, oamenii ar trebui să se simtă confortabil cu angajarea în activitate comercială, și să se simtă confortabil când își afirmă cazurile de utilizare când argumentează în favoarea unei anumite îmbunătățiri sau facilități.

„Comercial” este complet compatibil cu „sursă deschisă”. „Comercial” doar înseamna că acolo undeva sunt bani implicați - că softul este folosit în comerț, ceea ce este din ce în ce mai probabil pe măsură ce un proiect devine mai adoptat. (Când un soft cu sursă deschisă este folosit ca parte dintr-un produs cu sursă nedeschisă, produsul în ansamblu este încă soft „proprietar”, totuși, la fel ca sursa deschisă, el poate fi folosit pentru scopuri comerciale sau necomerciale.)

La fel ca oricine altcineva, dezvoltatorii motivați comercial câștigă influență în proiect prin calitatea și cantitatea contribuțiilor lor. În mod evident, un dezvoltator care este plătit pentru timpul său ar putea să facă mai mult decât cineva care nu este plătit, dar asta este OK: plata este doar unul dintre posibilii factori care ar putea afecta cât face cineva. Păstrează-ți discuțiile de proiect concentrate pe contribuții, nu pe factorii externi care dau posibilitatea oamenilor să facă aceste contribuții.

## Am nevoie de o entitate juridică pentru a-mi susține proiectul?

Nu ai nevoie de o entitate juridică pentru a-ți susține proiectul cu sursă deschisă decât dacă lucrezi cu bani.

De exemplu, dacă dorești să creezi o afacere comercială, vei dori să înființezi un C Corp sau LLC (dacă ești stabilit în SUA). Dacă faci doar muncă cu contract legată de proiectul tău cu sursă deschisă, poți accepta bani ca unic proprietar, sau să înființezi un LLC (dacă ești stabilit în SUA).

Dacă vrei să accepți donații pentru proiectul tău cu sursă deschisă, poți crea un buton de donație (folosind PayPal sau Stripe, de exemplu), dar banii nu vor fi deductibili fiscal decât dacă ești o organizație nonprofit calificată (un 501c3, dacă ești în SUA).

Multe proiecte nu doresc să treacă prin dificultățile de înființare a unei organizații nonprofit, deci ele găsesc în schimb un sponsor fiscal nonprofit. Un sponsor fiscal acceptă donații în numele tău, de obicei în schimbul unui procent din donație. [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](https://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/), [Linux Foundation](https://www.linuxfoundation.org/projects) și [Open Collective](https://opencollective.com/opensource) sunt exemple de organizații care servesc drept sponsori fiscali pentru proiecte cu sursă deschisă.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Scopul nostru este să furnizăm o infrastructură pe care comunitățile o pot folosi pentru a fi autosustenabile, creând astfel un mediu în care oricine — contributori, susținători, sponsori — obțin beneficii concrete din el.
  </p>
  <p>
    <em>
      Our goal is to provide an infrastructure that communities can use to be self sustainable, thus creating an environment where everyone — contributors, backers, sponsors — get concrete benefits out of it.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @piamancini, ["Moving beyond the charity framework"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141)
  </p>
</aside>

Dacă proiectul tău este strâns legat de un anumit limbaj sau ecosistem, ar putea de asemenea exista o fundație software cu care poți lucra. De exemplu, [Python Software Foundation](https://www.python.org/psf/) ajută la sprijinirea [PyPI](https://pypi.org/), gestionarul de pachete Python, și [Node.js Foundation](https://foundation.nodejs.org/) ajută la sprijinirea [Express.js](https://expressjs.com/), un cadru de lucru bazat pe Node.
