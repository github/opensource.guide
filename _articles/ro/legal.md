---
lang: ro
title: Latura juridică a open source
description: Tot ce te-ai întrebat vreodată de latura juridică a open source, și câteva lucruri de care nu te-ai întrebat.
class: legal
order: 10
image: /assets/images/cards/legal.png
related:
  - contribute
  - leadership
---

## Înțelegerea implicațiilor legale ale sursei deschise

Împărtășirea muncii tale creative cu lumea poate fi o experiență încântătoare și recompensantă. Ea poate să însemne de asemenea o grămadă de lucruri legale de care nu știai că trebuia să te îngrijorezi. Din fericire, nu trebuie să începi de la zero. Îți avem nevoile legale acoperite. (Înainte de săpa, asigură-te că ne citești [exonerarea](/notices/).)

## De ce oamenilor le pasă atât de mult de partea juridică a open source?

Mă bucur că ai întrebat! Când realizezi muncă creativă (cum ar fi scris, grafică, sau cod), acea muncă este sub drepturi de autor exclusive în mod implicit. Aceasta înseamnă că legea presupune că fiind autorul muncii tale, ai un cuvânt de spus în legătură cu ce pot ceilalți să facă cu ea.

În general, aceea înseamnă că nimeni altcineva nu poate folosi, copia, distribui, sau modifica munca ta fără să fie sub riscul de dărâmări, scuturări, sau litigii.

Open source este o circumstanță neobișnuită, totuși, deoarece autorul se așteaptă că ceilalți vor folosi, modifica, și distribui munca. Dar fiindcă implicitul legal este încă drepturi de autor exclusive, ai nevoie de o licență care afirmă în mod explicit aceste permisiuni.

Dacă nu aplici o licență open source, oricine contribuie la proiectul tău devine de asemenea un deținător exclusiv de drepturi de autor al muncii lor. Aceasta înseamnă că nimeni nu poate folosi, copia, distribui, sau modifica acele contribuții ale lor -- și că acel „nimeni” te include pe tine.

În cele din urmă, proiectul tău poate avea dependențe cu cerințe de licență de care nu ai cunoștință. Comunitatea proiectului tău, sau politicile angajatorului tău, pot de asemenea să ceară proiectului tău să folosească anumite licențe open source. Vom acoperi aceste situații mai jos.

## Sunt proiectele GitHub publice open source?

Când tu [creezi un proiect nou](https://help.github.com/articles/creating-a-new-repository/) pe GitHub, ai opțiunea să faci depozitul **privat** sau **public**.

![Creează depozit](/assets/images/legal/repo-create-name.png)

**A face proiectul tău GitHub public nu este același lucru cu licențierea proiectului tău.** Proiectele publice sunt acoperite de [Termenii serviciului GitHub](https://help.github.com/en/github/site-policy/github-terms-of-service#3-ownership-of-content-right-to-post-and-license-grants), care permite altora să vadă și să bifurce proiectul tău, dar munca ta în rest vine fără permisiuni.

Dacă dorești ca alții să folosească, să distribuie, să modifice, sau să contribuie înapoi la proiectul tău, tu trebuie să incluzi o licență open source. De exemplu, cineva nu poate în mod legal folosi nicio parte a proiectului tău GitHub în codul lor, chiar dacă este public, decât dacă tu le dai în mod explicit dreptul să facă acest lucru.

## Doar dă-mi TL;DR-ul a ce-mi trebuie pentru a-mi proteja proiectul.

Ai noroc, deoarece astăzi, licențele de sursă deschisă sunt standardizate și ușor de folosit. Poți da copiere-lipire unei licențe existente direct în proiectul tău.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), și [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) sunt cele mai populare licențe open source, dar există alte opțiuni din care să alegi. Poți găsi textul întreg al acestor licențe, și instrucțiuni despre cum să le folosești, pe [choosealicense.com](https://choosealicense.com/).

Când creezi un nou proiect pe GitHub, ți se va [cere să adaugi o licență](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
  <p>
    O licență standardizată servește ca un împuternicit pentru aceia fără pregătire juridică să știe exact ce pot ei și ce nu pot face cu software-ul. Dacă nu sunt absolut necesari, evită termeni personalizați, modificați, sau non-standard, care vor servi ca o barieră pentru utilizarea în aval a codului agentului.
  </p>
  <p>
    <em>
      A standardized license serves as a proxy for those without legal training to know precisely what they can and can't do with the software. Unless absolutely required, avoid custom, modified, or non-standard terms, which will serve as a barrier to downstream use of the agency code.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @benbalter, ["Everything a government attorney needs to know about open source software&nbsp;licensing"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## Ce licență open source este potrivită pentru proiectul meu?

Dacă pornești cu o tablă curată, este greu să greșești cu [licența MIT](https://choosealicense.com/licenses/mit/). Este scurtă, foarte ușor de înțeles, și permite oricui să facă orice atâta timp cât păstrează o copie a licenței, inclusiv nota ta cu drepturile de autor. Vei putea să-ți lansezi proiectul sub o licență diferită dacă vei avea nevoie vreodată.

Altfel, a alege licența potrivită de sursă deschisă pentru proiectul tău depinde de obiectivele tale.

Proiectul tău cel mai probabil are (sau va avea) **dependențe**. De exemplu, dacă deschizi sursa unui proiect Node.js, probabil vei folosi biblioteci din Node Package Manager (npm). Fiecare din acele biblioteci de care depinzi va avea propria sa licență de sursă deschisă. Dacă fiecare din licențele lor este „permisivă” (dă permisiunea publică de a folosi, modifica, și distribui, fără nicio condiție pentru licențierea în aval), poți folosi oricare licență vrei. Licențe permisive obișnuite includ MIT, Apache 2.0, ISC, și BSD.

Pe de altă parte, dacă oricare din licențele dependențelor tale este „copyleft puternic” (de asemenea oferă aceleași permisiuni publice, cu condiția de a folosi aceeași licență în aval), atunci proiectul tău va trebui să folosească aceeași licență. Licențele obișnuite cu copyleft puternic includ GPLv2, GPLv3, și AGPLv3.

Poate dorești de asemenea să consideri **comunitățile** care speri că vor folosi și contribui la proiectul tău:

* **Dorești ca proiectul tău să fie folosit ca o dependență de alte proiecte?** Probabil cel mai bine este să utilizezi cea mai populară licență în comunitatea ta relevantă. De exemplu, [MIT](https://choosealicense.com/licenses/mit/) este cea mai populară licență pentru [biblioteci npm](https://libraries.io/search?platforms=NPM).
* **Dorești ca proiectul tău să atragă afaceri mari?** O afacere mare cel mai probabil va dori o licență de brevet expres de la toți contributorii. În acest caz, [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) te are (și îi are) acoperit.
* **Dorești ca proiectul tău să atragă contributori care nu doresc ca acele contribuții ale lor să fie folosite în software cu sursă închisă?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) sau (dacă ei de asemenea nu vor să contribuie la servicii cu sursă închisă) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) vor merge mai bine.

Este posibil ca această **companie** a ta să aibă cerințe specifice de licențiere pentru proiectele ei cu sursă deschisă. De exemplu, ar putea avea nevoie de o licență permisivă astfel încât compania poate folosi proiectul tău în produsul cu sursă închisă al companiei. Sau compania ta ar putea necesita o licență cu copyleft puternic și un acord de contributor în plus (vezi mai jos) astfel încât doar compania ta, și nimeni altcineva, poate folosi proiectul tău în software cu sursă închisă. Sau compania ta ar putea avea anumite nevoi legate de standarde, responsabilitate socială, sau transparență, oricare din acestea putând necesita o anumită strategie de licențiere. Vorbește cu [departamentul juridic al companiei tale](#ce-trebuie-să-știe-echipa-juridică-a-companiei-mele).

Când creezi un proiect nou pe GitHub, ți se dă opțiunea de a alege o licență. Incluzând una din licențele menționate mai sus îți va face proiectul tău GitHub să fie open source. Dacă dorești să vezi alte opțiuni, aruncă o privire la [choosealicense.com](https://choosealicense.com) pentru a găsi licența potrivită pentru proiectul tău, chiar dacă el [nu este software](https://choosealicense.com/non-software/).

## Ce se întâmplă dacă vreau să schimb licența proiectului meu?

Majoritatea proiectelor nu necesită niciodată schimbarea licențelor. Dar ocazional circumstanțele se schimbă.

De exemplu, pe măsură ce proiectul tău crește el adaugă dependențe sau utilizatori, sau compania ta schimbă strategiile, oricare din acestea ar putea necesita sau dori o licență diferită. De asemenea, dacă ai neglijat licențierea proiectului tău de la început, adăugarea unei licențe este efectiv la fel ca schimbarea licențelor. Există trei lucruri fundamentale de considerat când se adaugă sau se schimbă licența proiectului tău:

**Este complicat.** Determinarea compatibilității și conformității licenței și cine deține drepturile de autor poate deveni complicat și confuz foarte repede. Trecerea la o licență nouă dar compatibilă pentru lansări și contribuții noi este diferită de relicențierea tuturor contribuțiilor existente. Implică echipa ta juridică la primul indiciu de orice dorință de a schimba licențele. Chiar dacă ai sau poți obține permisiunea de la deținătorii de drepturi de autor ai proiectului tău pentru o schimbare de licență, consideră impactul schimbării asupra celorlalți utilizatori și contributori ai proiectului tău. Gândește-te la o schimbare a licenței ca la un „eveniment de guvernare” pentru proiectul tău care va decurge lin mai probabil cu comunicări clare și consultări cu părțile interesate ale proiectului tău. Cu atât mai mult motiv pentru a alege și a folosi o licență potrivită pentru proiectul tău încă de la început!

**Licența existentă a proiectului tău.** Dacă licența existentă a proiectului tău este compatibilă cu licența la care vrei să treci, ai putea pur și simplu să începi să folosești noua licență. Aceasta este fiindcă dacă licența A este compatibilă cu licența B, te vei conforma termenilor lui A în timp ce te conformezi termenilor lui B (dar nu în mod necesar vice versa). Deci dacă tu folosești în prezent o licență permisivă (de exemplu, MIT), ai putea să treci la o licență cu mai multe condiții, atâta timp cât păstrezi o copie a licenței MIT și oricare note de drepturi de autor asociate (adică să continui să te conformezi condițiilor minimale ale licenței MIT). Dar dacă licența curentă a ta nu este permisivă (de exemplu, copyleft, sau nu ai o licență) și tu nu ești singurul deținător de drepturi de autor, nu ai putea pur și simplu să schimbi licența proiectului tău la MIT. Pe scurt, cu o licență permisivă deținătorii de drepturi de autor ai proiectului au oferit permisiunea în avans de schimbare a licențelor.

**Deținătorii existenți de drepturi de autor ai proiectului tău.** Dacă ești singurul contributor la proiectul tău atunci fie tu, fie compania ta, ești singurul deținător de drepturi de autor al proiectului. Poți adăuga sau trece la orice licență dorești tu sau compania ta. Altfel ar putea exista alți deținători de drepturi de autor de la care ai nevoie de acord pentru a schimba licențele. Cine sunt ei? Oamenii care au commit-uri în proiectul tău sunt un punct bun de pornire. Dar în unele cazuri drepturile de autor vor fi păstrate de angajatorii acelor oameni. În unele cazuri oamenii vor fi având doar contribuții minimale, dar nu există o regulă grea și rapidă că acele contribuții sub un anumit număr de linii de cod nu sunt subiectul drepturilor de autor. Ce să faci? Depinde. Pentru un proiect relativ mic și tânăr, ar putea fi fezabil să obții acordul tuturor contributorilor existenți asupra schimbării unei licențe într-o problemă sau o cerere de pull. Pentru proiecte mari și de lungă durată, ar putea fi nevoie să cauți mulți contributori și chiar moștenitorii lor. Mozilla a avut nevoie de ani (2001-2006) pentru a relicenția Firefox, Thunderbird, și software-uri aferente.

În mod alternativ, poți avea contributori care să fie de acord în prealabil (printr-un acord în plus de contributor -- vezi mai jos) cu anumite schimbări ale licenței în unele condiții, dincolo de cele permise de licența ta open source existentă. Aceasta schimbă complexitatea schimbării licențelor puțin. Vei avea nevoie de mai mult ajutor din partea avocaților tăi, și încă vei dori să comunici clar cu părțile interesate ale proiectului tău când execuți o modificare a licenței.

## Proiectul meu are nevoie de o înțelegere cu contributorii în plus?

Probabil că nu. Pentru marea majoritate a proiectelor open source, o licență open source implicit servește atât ca licență de intrare (de la contributori) cât și de ieșire (celorlalți contributori și utilizatori). Dacă proiectul tău este pe GitHub, Termenii serviciului GitHub fac „intrare = ieșire” [explicitul implicit](https://help.github.com/en/github/site-policy/github-terms-of-service#6-contributions-under-repository-license).

Un acord de contributor în plus -- deseori numit un Contributor License Agreement (CLA) -- poate crea muncă administrativă pentru întreținătorii proiectului. Cât de multă muncă adaugă un acord depinde de proiect și de implementare. Un simplu acord ar putea necesita ca acei contributori să confirme, cu un clic, că ei au drepturile necesare să contribuie în baza licenței open source a proiectului. Un acord mai complicat ar putea necesita revizuire juridică și semnături de la angajatorii contributorilor.

De asemenea, prin adăugarea de „hârtii” pe care unii le cred nenecesare, greu de înțeles, sau nedrepte (când beneficiarul acordului primește mai multe drepturi decât contributorii sau public prin licența open source a proiectului), un acord în plus de contributor poate fi perceput ca neprietenos pentru comunitatea proiectului.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Am eliminat CLA-ul pentru Node.js. A face acest lucru coboară bariera de intrare pentru contributori Node.js astfel lărgind baza de contributori.
  </p>
  <p>
    <em>
      We have eliminated the CLA for Node.js. Doing this lowers the barrier to entry for Node.js contributors thereby broadening the contributor base.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Broadening Node.js Contributions"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Unele situații în care ai putea dori să consideri un acord suplimentar de contributor pentru proiectul tău includ:

* Avocații tăi vor ca toți contributorii să accepte în mod expres (_semneze_, online sau offline) termenii de contribuție, poate deoarece ei simt că licența open source în sine nu este destul (chiar dacă este!). Dacă aceasta este singura îngrijorare, un acord de contributor care afirmă licența de sursă deschisă a proiectului ar trebui să fie destul. [jQuery Individual Contributor License Agreement](https://contribute.jquery.org/CLA/) este un exemplu bun de un acord suplimentar ușor de contributor. Pentru unele proiecte, un [Developer Certificate of Origin](https://github.com/probot/dco) poate fi o alternativă.
* Proiectul tău folosește o licență de sursă deschisă care nu include o acordare expresă de brevet (cum ar fi MIT), și ai nevoie de o acordare de brevet de la toți contributorii, dintre care unii ar putea lucra pentru companii cu portofolii largi de brevete care ar putea să fie folosite să te țintească pe tine sau pe ceilalți contributori și utilizatori ai proiectului. [Individual Contributor License Agreement al Apache](https://www.apache.org/licenses/icla.pdf) este un acord suplimentar de contributor folosit în mod obișnuit care are o acordare de brevet oglindind-o pe cea găsită în Apache License 2.0.
* Proiectul tău se află sub o licență copyleft, dar tu trebuie de asemenea să distribui o versiune de proprietate a proiectului. Îți va trebui ca fiecare contributor să-ți atribuie drepturile de autor ție sau să-ți acorde ție (dar nu publicului) o licență permisivă. [Contributor Agreement al MongoDB](https://www.mongodb.com/legal/contributor-agreement) este un exemplu de acest tip de acord.
* Te gândești că proiectul tău ar putea necesita schimbarea licențelor de-a lungul duratei lui de viață și dorești ca acești contributori să fie de acord în avans cu asemenea schimbări.

Dacă într-adevăr ai nevoie să folosești un acord suplimentar de contributor cu proiectul tău, consideră folosirea unei integrări cum ar fi [CLA assistant](https://github.com/cla-assistant/cla-assistant) pentru a minimiza distragerea contributorilor.

## Ce trebuie să știe echipa juridică a companiei mele?

Dacă lansezi un proiect cu sursă deschisă ca un angajat de companie, în primul rând, echipa voastră juridică ar trebui să știe că deschizi sursa unui proiect.

Spre mai bine sau mai rău, consideră să-i anunți chiar dacă este un proiect personal. Probabil ai un „acord de angajat asupra proprietății intelectuale” cu compania ta care le dă ceva control asupra proiectelor tale, în special dacă ele sunt chiar puțin legate de afacerea companiei sau folosești vreo resursă a companiei pentru a-ți dezvolta proiectul. Compania ta _ar trebui_ să-ți dea ușor permisiunea, și poate deja a făcut-o printr-un acord de proprietate intelectuală prietenos cu angajatul sau o politică a companiei. Dacă nu, poți negocia (de exemplu, explică faptul că proiectul tău servește obiectivelor companiei de învățare și dezvoltare personală pentru tine), sau evită a lucra pe proiectul tău până când găseși o companie mai bună.

**Dacă deschizi sursa unui proiect pentru compania ta,** atunci în mod sigur lasă-i să știe. Echipa juridică probabil deja are politici pentru ce licență de sursă deschisă (și posibil un acord suplimentar de contributor) să folosească bazat pe cerințele de afaceri ale companiei și expertiza în jurul asigurării că proiectul tău se conformează licențelor dependențelor lui. Dacă nu, tu și ei sunteți norocoși! Echipa voastră juridică ar trebui să fie dornică să lucreze cu tine să rezolvi aceste treburi. Câteva lucruri la care să vă gândiți:

* **Material din terță parte:** Are proiectul tău dependențe create de alții sau altfel include sau folosește codul altora? Dacă acestea sunt cu sursă deschisă, va trebui să te conformezi licențelor de sursă deschisă ale materialelor. Aceasta începe cu alegerea unei licențe care funcționează cu licențele de sursă deschisă din terță parte (vezi mai sus). Dacă proiectul tău modifică sau distribuie material cu sursă deschisă din terță parte, atunci echipa voastră juridică va dori de asemenea să știe că satisfaci alte condiții ale licențelor de sursă deschisă din terță parte cum ar fi păstrarea notelor de drepturi de autor. Dacă proiectul tău folosește codul altora care nu are o licență de sursă deschisă, probabil va trebui să ceri întreținătorilor din terță parte să [adauge o licență de sursă deschisă](https://choosealicense.com/no-license/#for-users), și dacă nu poți obține una, oprește-te din a folosi codul lor în proiectul tău.

* **Secrete comerciale:** Consideră dacă există ceva în proiect pe care compania nu îl vrea disponibil publicului larg. Dacă da, ai putea deschide sursa restului proiectului, după extragerea materialului pe care vreți să îl păstrați privat.

* **Brevete:** Compania ta aplică pentru un brevet pentru care deschiderea sursei proiectului tău ar constitui [divulgare publică](https://en.wikipedia.org/wiki/Public_disclosure)? În mod trist, ți s-ar putea cere să aștepți (sau poate compania va reconsidera înțelepciunea aplicației). Dacă aștepți contribuții la proiectul tău de la angajatori ai unor companii cu portofolii mari de brevete, echipa voastră juridică ar putea să vrea ca tu să folosești o licență cu o acordare expresă de brevet de la contributori (cum ar fi Apache 2.0 sau GPLv3), sau un acord suplimentar de contributor (vezi mai sus).

* **Mărci comerciale:** Verifică dublu că numele proiectului tău [nu este în conflict cu vreo marcă comercială existentă](../starting-a-project/#evitarea-conflictelor-de-nume). Dacă folosești mărcile comerciale ale propriei companii în proiect, verifică că nu cauzează niciun conflict. [FOSSmarks](http://fossmarks.org/) este un ghid practic pentru înțelegerea mărcilor comerciale în contextul proiectelor cu sursă liberă sau deschisă.

* **Confidențialitate:** Proiectul tău colectează date de la utilizatori? „Telefon acasă” pe serverele companiei? Echipa voastră juridică te poate ajuta să te conformezi cu politicile companiei și reglementările externe.

Dacă lansezi primul proiect cu sursă deschisă al companiei, ce este scris mai sus este mai mult decât suficient pentru a trece peste (dar nu îți face griji, majoritatea proiectelor nu ar trebui să ridice nicio îngrijorare majoră).

Pe termen lung, echipa voastră juridică poate face mai mult pentru a ajuta compania să obțină mai mult din implicarea ei în open source, și pentru a rămâne în siguranță:

* **Politici de contribuție a angajaților:** Consideră dezvoltarea unei politici corporative care specifică felul în care angajații dumneavoastră contribuie la proiecte cu sursă deschisă. O politică clară va reduce confuzia în rândul angajaților dumneavoastră și îi va ajuta să contribuie la proiecte cu sursă deschisă în interesul companiei, fie ca parte a locurilor lor de muncă sau în timpul lor liber. Un exemplu este [Model IP and Open Source Contribution Policy](https://processmechanics.com/2015/07/23/a-model-ip-and-open-source-contribution-policy/) al Rackspace.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Excluderea proprietății intelectuale asociate cu un patch construiește baza de cunoaștere și reputația angajatului. Aceasta arată că compania este investită în dezvoltarea acelui angajat și creează un sentiment de împuternicire și autonomie. Toate aceste beneficii de asemenea conduc la moral mai ridicat și la o mai bună menținere a angajaților.
  </p>
  <p>
    <em>
      Letting out the IP associated with a patch builds the employee's knowledge base and reputation. It shows that the company is invested in the development of that employee and creates a sense of empowerment and autonomy. All of these benefits also lead to higher morale and better employee retention.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @vanl, ["A Model IP and Open Source Contribution Policy"](https://processmechanics.com/2015/07/23/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **Ce să lansezi:** [(Aproape) totul?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) Dacă echipa voastră juridică înțelege și este investită în strategia open source a companiei voastre, ei vor fi cel mai bine capabili să te ajute în loc să împiedice eforturile tale.
* **Conformare:** Chiar dacă compania ta nu lansează niciun proiect cu sursă deschisă, ea folosește software open source al altora. [Conștientizarea și procesul](https://www.linuxfoundation.org/blog/blog/why-companies-that-use-open-source-need-a-compliance-program/) pot preveni dureri de cap, întârzieri de produs, și procese.

<aside markdown="1" class="pquote">
  <p>
    Organizațiile trebuie să aibă o strategie de licență și de conformare în loc care se potrivește atât categoriei [„permisiv” cât și „copyleft”]. Aceasta începe cu păstrarea unei înregistrări a termenilor de licențiere care se aplică software-ului cu sursă deschisă pe care îl folosiți — incluzând subcomponente și dependențe.
  </p>
  <p>
    <em>
      Organizations must have a license and compliance strategy in place that fits both ["permissive" and "copyleft"] categories. This begins with keeping a record of the licensing terms that apply to the open source software you’re using — including subcomponents and dependencies.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Open Source Software: Compliance Basics And Best Practices"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Brevete:** Compania ta ar putea dori să se alăture la [Open Invention Network](https://www.openinventionnetwork.com/), un grup comun defensiv de brevete cu scopul de a proteja a membrilor utilizare de proiecte open source majore, sau explorează alte [licențieri alternative de brevete](https://www.eff.org/document/hacking-patent-system-2016).
* **Guvernare:** În special dacă și când are sens să treci proiectul la o [entitate juridică din afara companiei](../leadership-and-governance/#am-nevoie-de-o-entitate-juridică-pentru-a-mi-susține-proiectul).
