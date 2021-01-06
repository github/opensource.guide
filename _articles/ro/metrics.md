---
lang: ro
title: Măsurători Open Source
description: Ia decizii în cunoștință de cauză pentru a-ți ajuta proiectul cu sursă deschisă să prospere măsurând și urmărindu-i succesul.
class: metrics
toc:
  why-measure-anything: "De ce să măsori totul?"
  discovery: "Descoperire"
  usage: "Folosire"
  retention: "Retenție"
  maintainer-activity: "Activitatea întreținătorilor"
order: 9
image: /assets/images/cards/metrics.png
related:
  - finding
  - best-practices
---

## De ce să măsori totul?

Informațiile, când sunt folosite înțelept, te pot ajuta să iei decizii mai bune în calitate de întreținător de sursă deschisă.

Cu mai multe informații, poți:

* Înțelege cum răspund utilizatorii la o nouă facilitate
* Descoperi de unde vin utilizatorii noi
* Identifica și decide dacă dorești să susții un caz de utilizare sau funcționalitate marginale
* Cuantifica popularitatea proiectului tău
* Înțelege cum este folosit proiectul tău
* Aduna bani prin sponsorizări și subvenții

De exemplu, [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md) constată că Google Analytics îi ajută să prioritizeze munca:

> Homebrew este oferit gratuit și condus în întregime de voluntari în timpul lor liber. Ca rezultat, noi nu avem resursele pentru a face studii detaliate de utilizatori despre utilizatorii Homebrew pentru a decide asupra cum să proiectăm cel mai bine viitoarele facilități și cum să prioritizăm munca din prezent. Analizele de utilizatori agregate anonime ne permit să prioritizăm reparațiile și facilitățile bazat pe cum, când și unde folosesc oamenii Homebrew.
> 
> Homebrew is provided free of charge and run entirely by volunteers in their spare time. As a result, we do not have the resources to do detailed user studies of Homebrew users to decide on how best to design future features and prioritise current work. Anonymous aggregate user analytics allow us to prioritise fixes and features based on how, where and when people use Homebrew.

Popularitatea nu este totul. Oricine intră în open source din motive diferite. Dacă scopul tău în calitate de întreținător open source este să-ți prezinți munca, fii transparent în legătură cu codul tău, sau doar distrează-te, măsurătorile ar putea să nu fie importante pentru tine.

Dacă _ești_ interesat în înțelegerea proiectului tău la un nivel mai profund, citește în continuare pentru a afla modalități de a analiza activitatea proiectului tău.

## Descoperire

Înainte ca oricine să poată folosi sau contribui înapoi la proiectul tău, ei trebuie să știe că el există. Întreabă-te: _găsesc oamenii acest proiect?_

![Grafic de trafic](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

Dacă proiectul tău este găzduit pe GitHub, [poți vizualiza](https://help.github.com/articles/about-repository-graphs/#traffic) câți oameni ajung la proiectul tău și de unde vin ei. Din pagina proiectului tău, fă clic pe „Insights”, apoi „Traffic”. Pe această pagină, poți vedea:

* **Vizualizări totale ale paginii:** Îți spune de câte ori a fost văzut proiectul tău

* **Totalul vizitatorilor unici:** Îți spune câti oameni au văzut proiectul tău

* **Site-uri de referință:** Îți spune de unde au venit vizitatorii. Această măsurătoare te poate ajuta să-ți dai seama unde să ajungi la publicul tău și dacă eforturile tale de promovare funcționează.

* **Conținut popular:** Îți spune unde merg vizitatorii în proiectul tău, defalcat în funcție de vizualizările de pagini și vizitatori unici.

[Stelele GitHub](https://help.github.com/articles/about-stars/) pot, de asemenea, furniza o măsură de bază a popularității. În timp ce stelele GitHub nu sunt neapărat corelate cu descărcările și utilizarea, ele îți pot spune cât de mulți oameni îți iau la cunoștință munca.

Poate ai dori de asemenea să [urmărești abilitatea de a fi descoperit în locuri specifice](https://opensource.com/business/16/6/pirate-metrics): de exemplu, Google PageRank, trafic trimis din site-ul web al proiectului tău, sau trimiteri de la alte proiecte cu sursă deschisă sau site-uri web.

## Folosire

Oamenii îți găsesc proiectul pe acest sălbatic și nebun lucru pe care îl numim Internet. În mod ideal, când îți văd proiectul, ei se vor simți obligați să facă ceva. A doua întrebare pe care o vei vrea să o pui este: _oamenii folosesc acest proiect?_

Dacă folosesți un gestionar de pachete, cum ar fi npm sau RubyGems.org, pentru a-ți distribui proiectul, ai putea să urmărești descărcările proiectului tău.

Fiecare gestionar de pachete ar putea folosi o definiție ușor diferită pentru „descărcare”, și descărcările nu sunt neapărat corelate cu instalările sau utilizarea, dar ele furnizează o bază pentru comparație. Încearcă să folosești [Libraries.io](https://libraries.io/) pentru a urmări statisticile de utilizare pe mulți gestionari populari de pachete.

Dacă proiectul tău este pe GitHub, navighează din nou pe pagina „Traffic”. Poți folosi [graficul de clonare](https://github.com/blog/1873-clone-graphs) pentru a vedea de câte ori a fost clonat proiectul tău într-o anumită zi, defalcat în funcție de totalul de clone și clonatori unici.

![Grafic de clonare](/assets/images/metrics/clone_graph.png)

Dacă utilizarea este scăzută în comparație cu numărul de oameni care îți descoperă proiectul, există două probleme de luat în considerare. Fie:

* Proiectul tău nu convertește publicul tău cu succes, fie
* Atragi publicul greșit

De exemplu, dacă proiectul tău ajunge pe prima pagină a Hacker News, probabil vei vedea un vârf în descoperire (trafic), dar o rată de conversie mai mică, deoarece ajungi la toată lumea de pe Hacker News. Dacă proiectul tău Ruby este prezentat la o conferință Ruby, totuși, este mai probabil să vezi o rată de conversie înaltă de la publicul vizat.

Încearcă să-ți dai seama de unde vine publicul tău și să ceri altora feedback asupra paginii proiectului tău pentru a afla cu care din aceste două probleme te confrunți.

Odată ce știi că oamenii îți folosesc proiectul, ai putea să dorești să încerci să afli ce fac ei cu el. Ei construiesc peste el bifurcându-ți codul și adăugând facilități? Ei îl folosesc pentru știință sau afaceri?

## Retenție

Oamenii îți găsesc proiectul și îl folosesc. Întrebarea următoare pe care vei vrea să ți-o pui este: _oamenii contribuie înapoi la acest proiect?_

Nu este niciodată prea devreme să începi să te gândești la contributori. Fără ca alți oameni să pășească înăuntru, riști să te pui într-o situație nesănătoasă în care proiectul tău este _popular_ (mulți oameni îl folosesc) dar nu _susținut_ (insuficient timp al întreținătorului pentru a satisface cererea).

Retenția de asemenea cere un [influx de contributori noi](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2), deoarece contributorii activi înainte vor trece la alte lucruri eventual.

Exemple de măsurători ale comunității pe care ai putea dori să le urmărești în mod obișnuit: 

* **Numărul total de contributori și numărul de commit-uri per contributor:** Îți spune cât de mulți contributori ai, și cine este mai mult sau mai puțin activ. Pe GitHub, poți vizualiza aceasta în „Insights” -> „Contributors.” În prezent, acest grafic numără doar contributorii care au făcut commit către ramura implicită a depozitului.

![Graficul contributorilor](/assets/images/metrics/repo_contributors_specific_graph.png)

* **Contributori pentru prima dată, ocazionali sau repetitivi:** Te ajută să urmărești dacă primești contributori noi, și dacă ei revin. (Contributorii ocazionali sunt contributori cu un număr mic de commit-uri. Fie că aceasta înseamnă un commit, mai puțin de cinci commit-uri, sau altceva, depinde de tine.) Fără contributori noi, comunitatea proiectului tău poate deveni stagnantă.

* **Numărul de probleme deschise și de cereri de pull deschise _în momentul prezent_:** Dacă aceste numere devin prea mari, ai putea avea nevoie de ajutor cu trierea problemelor și revizuirile de cod.

* **Numărul de probleme deschise și de cereri de pull deschise _până în momentul prezent_:** Problemele deschise înseamnă că cuiva îi pasă destul de proiectul tău pentru a deschide o problemă. Dacă acel număr crește de-a lungul timpului, aceasta sugerează că oameni sunt interesați de proiectul tău.

* **Tipuri de contribuții:** De exemplu, commit-uri, corectarea greșelilor de scriere sau rezolvarea de bug-uri, sau comentarea asupra unei probleme.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/arfon?s=180" class="pquote-avatar" alt="avatar">
  <p>
    Open source este mai mult decât doar cod. Proiectele open source de succes includ contribuții de cod și documentație împreună cu conversații despre aceste schimbări.
  </p>
  <p>
    <em>
      Open source is more than just code. Successful open source projects include code and documentation contributions together with conversations about these changes.
    </em>
  </p>
  <p markdown="1" class="pquote-credit">
— @arfon, ["The Shape of Open Source"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## Activitatea întreținătorilor

În cele din urmă, vei dori să închizi bucla asigurându-te că întreținătorii proiectului tău sunt capabili să gestioneze volumul de contribuții primit. Ultima întrebare pe care vei vrea să ți-o pui este: _răspund eu (sau răspundem noi) comunității noastre?_

Întreținătorii care nu răspund devin un blocaj pentru proiectele open source. Dacă cineva trimite o contribuție dar nu aude niciodată niciun răspuns de la un întreținător, el s-ar putea simți descurajat și ar putea pleca.

[Cercetări de la Mozilla](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) sugerează că această capacitate de reacție a întreținătorilor este un factor critic în încurajarea contribuțiilor repetate.

Ia în considerare urmărirea a cât de mult durează pentru tine (sau pentru alt întreținător) să răspunzi contribuțiilor, fie o problemă, fie o cerere de pull. A răspunde nu necesită luarea de măsuri. Poate fi atât de simplu ca a spune: _„Mersi pentru înregistrare! O voi revizui pe parcursul săptămânii viitoare.”_

Ai putea de asemenea măsura timpul necesar pentru a trece între etapele din procesul de contribuție, cum ar fi:

* Durata medie de timp în care o problemă rămâne deschisă
* Dacă problemele se închid prin PR-uri
* Dacă problemele vechi se închid
* Durata medie de timp pentru a îmbina o cerere de pull

## Folosește 📊 pentru a învăța despre oameni

Înțelegerea măsurătorilor te va ajuta să construiești un proiect cu sursă deschisă activ, în creștere. Chiar dacă nu urmărești toate măsurătorile pe un panou de control, folosește cadrul de lucru de mai sus pentru a-ți concentra atenția pe tipul de comportament care îți va ajuta proiectul să prospere.
