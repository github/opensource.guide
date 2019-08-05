---
lang: ro
title: Latura juridică a open source
description: Tot ce te-ai întrebat vreodată de latura juridică a open source, și câteva lucruri de care nu te-ai întrebat.
class: legal
toc:
  why-do-people-care-so-much-about-the-legal-side-of-open-source: "De ce oamenilor le pasă atât de mult de partea juridică a open source?"
  are-public-github-projects-open-source: "Sunt proiectele GitHub publice open source?"
  just-give-me-the-tldr-on-what-i-need-to-protect-my-project: "Doar dă-mi TL;DR-ul a ce-mi trebuie pentru a-mi proteja proiectul."
  which-open-source-license-is-appropriate-for-my-project: "Ce licență open source este potrivită pentru proiectul meu?"
  what-if-i-want-to-change-the-license-of-my-project: "Ce se întâmplă dacă vreau să schimb licența proiectului meu?"
  does-my-project-need-an-additional-contributor-agreement: "Proiectul meu are nevoie de o înțelegere cu contributorii în plus?"
  what-does-my-companys-legal-team-need-to-know: "Ce trebuie să știe echipa juridică a companiei mele?"
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

**A face proiectul tău GitHub public nu este același lucru cu licențierea proiectului tău.** Proiectele publice sunt acoperite de [Termenii serviciului GitHub](https://help.github.com/articles/github-terms-of-service/#f-copyright-and-content-ownership), care permite altora să vadă și să bifurce proiectul tău, dar munca ta în rest vine fără permisiuni.

Dacă dorești ca alții să folosească, să distribuie, să modifice, sau să contribuie înapoi la proiectul tău, tu trebuie să incluzi o licență open source. De exemplu, cineva nu poate în mod legal folosi nicio parte a proiectului tău GitHub în codul lor, chiar dacă este public, decât dacă tu le dai în mod explicit dreptul să facă acest lucru.

## Doar dă-mi TL;DR-ul a ce-mi trebuie pentru a-mi proteja proiectul.

Ai noroc, deoarece astăzi, licențele de sursă deschisă sunt standardizate și ușor de folosit. Poți da copiere-lipire unei licențe existente direct în proiectul tău.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), și [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) sunt cele mai populare licențe open source, dar există alte opțiuni din care să alegi. Poți găsi textul întreg al acestor licențe, și instrucțiuni despre cum să le folosești, pe [choosealicense.com](https://choosealicense.com/).

Când creezi un nou proiect pe GitHub, ți se va [cere să adaugi o licență](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
  <p>
    O licență standardizată servește ca un împuternicit pentru aceia fără pregătire juridică să știe exact ce ei pot și ce nu pot face cu software-ul. Decât dacă este absolut necesar, evită termeni personalizați, modificați, sau non-standard, care vor servi ca o barieră pentru utilizarea în aval a codului agentului.
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

Este posibil ca această **companie** a ta să aibă cerințe specifice de licențiere pentru proiectele ei cu sursă deschisă. De exemplu, ar putea avea nevoie de o licență permisivă astfel încât compania poate folosi proiectul tău în produsul cu sursă închisă al companiei. Sau compania ta ar putea necesita o licență cu copyleft puternic și un acord de contributor în plus (vezi mai jos) astfel încât doar compania ta, și nimeni altcineva, poate folosi proiectul tău în software cu sursă închisă. Sau compania ta ar putea avea anumite nevoi legate de standarde, responsabilitate socială, sau transparență, oricare din acestea putând necesita o anumită strategie de licențiere. Vorbește cu [departamentul juridic al companiei tale](#what-does-my-companys-legal-team-need-to-know).

Când creezi un proiect nou pe GitHub, ți se dă opțiunea de a alege o licență. Incluzând una din licențele menționate mai sus îți va face proiectul tău GitHub să fie open source. Dacă dorești să vezi alte opțiuni, aruncă o privire la [choosealicense.com](https://choosealicense.com) pentru a găsi licența potrivită pentru proiectul tău, chiar dacă el [nu este software](https://choosealicense.com/non-software/).

## Ce se întâmplă dacă vreau să schimb licența proiectului meu?

Majoritatea proiectelor nu necesită niciodată schimbarea licențelor. Dar ocazional circumstanțele se schimbă.

De exemplu, pe măsură ce proiectul tău crește el adaugă dependențe sau utilizatori, sau compania ta schimbă strategiile, oricare din acestea ar putea necesita sau dori o licență diferită. De asemenea, dacă ai neglijat licențierea proiectului tău de la început, adăugarea unei licențe este efectiv la fel ca schimbarea licențelor. Există trei lucruri fundamentale de considerat când se adaugă sau se schimbă licența proiectului tău:

**Este complicat.** Determinarea compatibilității și conformității licenței și cine deține drepturile de autor poate deveni complicat și confuz foarte repede. Trecerea la o licență nouă dar compatibilă pentru lansări și contribuții noi este diferită de relicențierea tuturor contribuțiilor existente. Implică echipa ta juridică la primul indiciu de orice dorință de a schimba licențele. Chiar dacă ai sau poți obține permisiunea de la deținătorii de drepturi de autor ai proiectului tău pentru o schimbare de licență, consideră impactul schimbării asupra celorlalți utilizatori și contributori ai proiectului tău. Gândește-te la o schimbare a licenței ca la un „eveniment de guvernare” pentru proiectul tău care va decurge lin mai probabil cu comunicări clare și consultări cu părțile interesate ale proiectului tău. Cu atât mai mult motiv pentru a alege și a folosi o licență potrivită pentru proiectul tău încă de la început!

**Licența existentă a proiectului tău.** Dacă licența existentă a proiectului tău este compatibilă cu licența la care vrei să treci, ai putea pur și simplu să începi să folosești noua licență. Aceasta este fiindcă dacă licența A este compatibilă cu licența B, te vei conforma termenilor lui A în timp ce te conformezi termenilor lui B (dar nu în mod necesar vice versa). Deci dacă tu folosești în prezent o licență permisivă (de exemplu, MIT), ai putea să treci la o licență cu mai multe condiții, atâta timp cât păstrezi o copie a licenței MIT și oricare note de drepturi de autor asociate (adică să continui să te conformezi condițiilor minimale ale licenței MIT). Dar dacă licența curentă a ta nu este permisivă (de exemplu, copyleft, sau nu ai o licență) și tu nu ești singurul deținător de drepturi de autor, nu ai putea pur și simplu să schimbi licența proiectului tău la MIT. Pe scurt, cu o licență permisivă deținătorii de drepturi de autor ai proiectului au oferit permisiunea în avans de schimbare a licențelor.

**Your project's existing copyright holders.** If you're the sole contributor to your project then either you or your company is the project's sole copyright holder. You can add or change to whatever license you or your company wants to. Otherwise there may be other copyright holders that you need agreement from in order to change licenses. Who are they? People who have commits in your project is a good place to start. But in some cases copyright will be held by those people's employers. In some cases people will have only made minimal contributions, but there's no hard and fast rule that contributions under some number of lines of code are not subject to copyright. What to do? It depends. For a relatively small and young project, it may be feasible to get all existing contributors to agree to a license change in an issue or pull request. For large and long-lived projects, you may have to seek out many contributors and even their heirs. Mozilla took years (2001-2006) to relicense Firefox, Thunderbird, and related software.

Alternatively, you can have contributors agree in advance (via an additional contributor agreement -- see below) to certain license changes under certain conditions, beyond those allowed by your existing open source license. This shifts the complexity of changing licenses a bit. You'll need more help from your lawyers up front, and you'll still want to clearly communicate with your project's stakeholders when executing a license change.

## Proiectul meu are nevoie de o înțelegere cu contributorii în plus?

Probably not. For the vast majority of open source projects, an open source license implicitly serves as both the inbound (from contributors) and outbound (to other contributors and users) license. If your project is on GitHub, the GitHub Terms of Service make "inbound=outbound" the [explicit default](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license).

An additional contributor agreement -- often called a Contributor License Agreement (CLA) -- can create administrative work for project maintainers. How much work an agreement adds depends on the project and implementation. A simple agreement might require that contributors confirm, with a click, that they have the rights necessary to contribute under the project open source license. A more complicated agreement might require legal review and sign-off from contributors' employers.

Also, by adding "paperwork" that some believe is unnecessary, hard to understand, or unfair (when the agreement recipient gets more rights than contributors or the public do via the project's open source license), an additional contributor agreement may be perceived as unfriendly to the project's community.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">
    We have eliminated the CLA for Node.js. Doing this lowers the barrier to entry for Node.js contributors thereby broadening the contributor base.
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Broadening Node.js Contributions"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Some situations where you may want to consider an additional contributor agreement for your project include:

* Your lawyers want all contributors to expressly accept (_sign_, online or offline) contribution terms, perhaps because they feel the open source license itself is not enough (even though it is!). If this is the only concern, a contributor agreement that affirms the project's open source license should be enough. The [jQuery Individual Contributor License Agreement](https://contribute.jquery.org/CLA/) is a good example of a lightweight additional contributor agreement. For some projects, a [Developer Certificate of Origin](https://github.com/probot/dco) can be an alternative.
* Your project uses an open source license that does not include an express patent grant (such as MIT), and you need a patent grant from all contributors, some of whom may work for companies with large patent portfolios that could be used to target you or the project's other contributors and users. The [Apache Individual Contributor License Agreement](https://www.apache.org/licenses/icla.pdf) is a commonly used additional contributor agreement that has a patent grant mirroring the one found in the Apache License 2.0.
* Your project is under a copyleft license, but you also need to distribute a proprietary version of the project. You'll need every contributor to assign copyright to you or grant you (but not the public) a permissive license. The [MongoDB Contributor Agreement](https://www.mongodb.com/legal/contributor-agreement) is an example this type of agreement.
* You think your project might need to change licenses over its lifetime and want contributors to agree in advance to such changes.

If you do need to use an additional contributor agreement with your project, consider using an integration such as [CLA assistant](https://github.com/cla-assistant/cla-assistant) to minimize contributor distraction.

## Ce trebuie să știe echipa juridică a companiei mele?

If you're releasing an open source project as a company employee, first, your legal team should know that you're open sourcing a project.

For better or worse, consider letting them know even if it's a personal project. You probably have an "employee IP agreement" with your company that gives them some control of your projects, especially if they are at all related to the company's business or you use any company resources to develop the project. Your company _should_ easily give you permission, and maybe already has through an employee-friendly IP agreement or a company policy. If not, you can negotiate (for example, explain that your project serves the company's professional learning and development objectives for you), or avoid working on your project until you find a better company.

**If you're open sourcing a project for your company,** then definitely let them know. Your legal team probably already has policies for what open source license (and maybe additional contributor agreement) to use based on the company's business requirements and expertise around ensuring your project complies with the licenses of its dependencies. If not, you and they are in luck! Your legal team should be eager to work with you to figure this stuff out. Some things to think about:

* **Third party material:** Does your project have dependencies created by others or otherwise include or use others' code? If these are open source, you'll need to comply with the materials' open source licenses. That starts with choosing a license that works with the third party open source licenses (see above). If your project modifies or distributes third party open source material, then your legal team will also want to know that you're meeting other conditions of the third party open source licenses such as retaining copyright notices. If your project uses others' code that doesn't have an open source license, you'll probably have to ask the third party maintainers to [add an open source license](https://choosealicense.com/no-license/#for-users), and if you can't get one, stop using their code in your project.

* **Trade secrets:** Consider whether there is anything in the project that the company does not want to make available to the general public. If so, you could open source the rest of your project, after extracting the material you want to keep private.

* **Patents:** Is your company applying for a patent of which open sourcing your project would constitute [public disclosure](https://en.wikipedia.org/wiki/Public_disclosure)? Sadly, you might be asked to wait (or maybe the company will reconsider the wisdom of the application). If you're expecting contributions to your project from employees of companies with large patent portfolios, your legal team may want you to use a license with an express patent grant from contributors (such as Apache 2.0 or GPLv3), or an additional contributor agreement (see above).

* **Trademarks:** Double check that your project's name [does not conflict with any existing trademarks](../starting-a-project/#avoiding-name-conflicts). If you use your own company trademarks in the project, check that it does not cause any conflicts. [FOSSmarks](http://fossmarks.org/) is a practical guide to understanding trademarks in the context of free and open source projects.

* **Privacy:** Does your project collect data on users? "Phone home" to company servers? Your legal team can help you comply with company policies and external regulations.

If you're releasing your company's first open source project, the above is more than enough to get through (but don't worry, most projects shouldn't raise any major concerns).

Longer term, your legal team can do more to help the company get more from its involvement in open source, and stay safe:

* **Employee contribution policies:** Consider developing a corporate policy that specifies how your employees contribute to open source projects. A clear policy will reduce confusion among your employees and help them contribute to open source projects in the company's best interest, whether as part of their jobs or in their free time. A good example is Rackspace's [Model IP and Open Source Contribution Policy](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">
  Letting out the IP associated with a patch builds the employee's knowledge base and reputation. It shows that the company is invested in the development of that employee and creates a sense of empowerment and autonomy. All of these benefits also lead to higher morale and better employee retention.
  <p markdown="1" class="pquote-credit">
— @vanl, ["A Model IP and Open Source Contribution Policy"](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **What to release:** [(Almost) everything?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) If your legal team understands and is invested in your company's open source strategy, they'll be best able to help rather than hinder your efforts.
* **Compliance:** Even if your company doesn't release any open source projects, it uses others' open source software. [Awareness and process](https://www.linuxfoundation.org/blog/2015/06/why-companies-that-use-open-source-need-a-compliance-program/) can prevent headaches, product delays, and lawsuits.

<aside markdown="1" class="pquote">
  Organizations must have a license and compliance strategy in place that fits both \["permissive" and "copyleft"\] categories. This begins with keeping a record of the licensing terms that apply to the open source software you’re using — including subcomponents and dependencies.
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Open Source Software: Compliance Basics And Best Practices"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Patents:** Your company may wish to join the [Open Invention Network](https://www.openinventionnetwork.com/), a shared defensive patent pool to protect members' use of major open source projects, or explore other [alternative patent licensing](https://www.eff.org/document/hacking-patent-system-2016).
* **Governance:** Especially if and when it makes sense to move a project to a [legal entity outside of the company](../leadership-and-governance/#do-i-need-a-legal-entity-to-support-my-project).
