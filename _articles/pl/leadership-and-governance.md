---
lang: pl
title: Przywództwo i zarządzanie
description: Rosnące projekty open source mogą korzystać z formalnych zasad podejmowania decyzji.
class: leadership
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
---

## Zrozumienie zarządzania rosnącym projektem

Twój projekt się rozwija, ludzie są zaangażowani, a ty jesteś zaangażowany w utrzymanie tego. Na tym etapie możesz zastanawiać się, jak włączyć regularnych współpracowników projektu do swojego przepływu pracy, niezależnie od tego, czy daje to komuś dostęp lub rozwiązuje debaty społecznościowe. Jeśli masz pytania, mamy odpowiedzi.

## Jakie są przykłady formalnych ról stosowanych w projektach open source?

Wiele projektów ma podobną strukturę pod względem ról i uznania.

Jednak to, co właściwie oznaczają te role, zależy wyłącznie od Ciebie. Oto kilka rodzajów ról, które możesz rozpoznać:

* **Maintainer**
* **Contributor**
* **Committer**

**W przypadku niektórych projektów, "maintainers"** są jedynymi osobami w projekcie z dostępem do zatwierdzania. W innych projektach są to po prostu osoby wymienione w README jako opiekunowie.

Opiekun niekoniecznie musi być kimś, kto pisze kod dla twojego projektu. Może to być ktoś, kto wykonał wiele pracy ewangelizując twój projekt lub pisemna dokumentacja, która uczyniła projekt bardziej dostępnym dla innych. Niezależnie od tego, co robią na co dzień, opiekun to prawdopodobnie ktoś, kto czuje odpowiedzialność za kierownictwo projektu i jest zaangażowany w jego ulepszanie.

**"Contributor" może być każdy** kto komentuje problem lub żądanie ściągnięcia, osoby, które dodają wartość do projektu (czy to dzielenie problemów, pisanie kodu lub organizowanie wydarzeń), czy ktokolwiek z połączonym żądaniem ściągnięcia (być może najwęższa definicja autora).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  <i>
  \[For Node.js,\] every person who shows up to comment on an issue or submit code is a member of a project’s community. Just being able to see them means that they have crossed the line from being a user to being a contributor.
  </i>
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Healthy Open Source"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**Określenie "committer"** może zostać wykorzystane do odróżnienia dostępu do zatwierdzenia, który jest szczególnym rodzajem odpowiedzialności, od innych form wkładu.

Chociaż możesz zdefiniować role swojego projektu w dowolny sposób, [rozważ użycie szerszych definicji](../how-to-contribute/#co-to-znaczy-przyczynić-się) aby zachęcić więcej form wkładu. Możesz użyć ról przywódczych, aby formalnie rozpoznać osoby, które wniosły wybitny wkład w Twój projekt, niezależnie od ich umiejętności technicznych.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  <i>
  You might know me as the "inventor" of Django...but really I'm the guy who got hired to work on a thing a year after it was already made. (...) People suspect that I'm successful because of my programming skill...but I'm at best an average programmer.
  </i>
  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## Jak sformalizować te role przywódcze?

Sformalizowanie ról przywódczych pomaga ludziom poczuć się właścicielami i mówi innym członkom społeczności, do kogo zwrócić się o pomoc.

W przypadku mniejszego projektu wyznaczenie liderów może być tak proste, jak dodanie ich nazw do pliku tekstowego README lub CONTRIBUTORS.

W przypadku większego projektu, jeśli masz witrynę internetową, utwórz stronę zespołu lub umieść tam listę liderów projektu. Na przykład [Postgres](https://github.com/postgres/postgres/) ma [kompleksową stronę zespołu](https://www.postgresql.org/community/contributors/) z krótkimi profilami dla każdego uczestnika.

Jeśli Twój projekt ma bardzo aktywną społeczność współpracowników, możesz utworzyć „podstawowy zespół” opiekunów, a nawet podkomitety osób, które przejmują odpowiedzialność za różne obszary problemowe (na przykład bezpieczeństwo, klasyfikowanie problemów lub postępowanie społeczności). Pozwól ludziom samoorganizować się i zgłaszać do ról, które są najbardziej podekscytowani, zamiast przypisywać je.

<aside markdown="1" class="pquote">
  \[We\] supplement the core team with several "subteams". Each subteam is focused on a specific area, e.g., language design or libraries. (...) To ensure global coordination and a strong, coherent vision for the project as a whole, each subteam is led by a member of the core team.
  <p markdown="1" class="pquote-credit">
— ["Rust Governance RFC"](https://github.com/rust-lang/rfcs/blob/HEAD/text/1068-rust-governance.md)
  </p>
</aside>

Zespoły kierownicze mogą chcieć utworzyć wyznaczony kanał (np. Na IRC) lub regularnie spotykać się w celu omówienia projektu (np. Na Gitter lub Google Hangout). Możesz nawet upublicznić te spotkania, aby inni mogli je słuchać. [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby), na przykład [organizuje godziny pracy co tydzień](https://github.com/cucumber/cucumber-ruby/blob/HEAD/CONTRIBUTING.md#talking-with-other-devs)

Po ustaleniu ról przywódczych nie zapomnij udokumentować, w jaki sposób ludzie mogą je osiągnąć! Ustal przejrzysty proces, w jaki sposób ktoś może zostać opiekunem lub dołączyć do podkomitetu w swoim projekcie, i zapisz go w swoim GOVERNANCE.md.

Narzędzia jak [Vossibility](https://github.com/icecrime/vossibility-stack) mogą pomóc Ci publicznie śledzić, kto przyczynia się (lub nie) do projektu. Dokumentowanie tych informacji pozwala uniknąć postrzegania przez społeczność, że opiekunowie są kliką, która podejmuje decyzje prywatnie.

Wreszcie, jeśli Twój projekt jest w GitHub, rozważ przeniesienie projektu z konta osobistego do organizacji i dodanie co najmniej jednego administratora kopii zapasowych. [GitHub Organizations](https://help.github.com/articles/creating-a-new-organization-account/) ułatwiają zarządzanie uprawnieniami i wieloma repozytoriami oraz chronią dziedzictwo projektu poprzez [współwłasność](../building-community/#udostępnij-własność-swojego-projektu).

## Kiedy powinienem dać komuś dostęp?

Niektórzy uważają, że powinieneś dać dostęp do zatwierdzenia każdemu, kto wnosi wkład. Może to zachęcić więcej osób do poczucia własności projektu.

Z drugiej strony, szczególnie w przypadku większych, bardziej złożonych projektów, możesz chcieć dać dostęp do zatwierdzania tylko osobom, które wykazały swoje zaangażowanie. Nie ma jednego właściwego sposobu - rób to, co najbardziej Ci odpowiada!

Jeśli Twój projekt znajduje się na GitHub, możesz użyć [protected branches](https://help.github.com/articles/about-protected-branches/) zarządzać, kto może naciskać na konkretny branch i w jakich okolicznościach.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">
  <i>
  Whenever somebody sends you a pull request, give them commit access to your project. While it may sound incredibly stupid at first, using this strategy will allow you to unleash the true power of GitHub. (...) Once people have commit access, they are no longer worried that their patch might go unmerged...causing them to put much more work into it.
  </i>
  <p markdown="1" class="pquote-credit">
— @felixge, ["The Pull Request Hack"](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## Jakie są wspólne struktury zarządzania projektami typu open source?

Istnieją trzy wspólne struktury zarządzania związane z projektami typu open source.

* **BDFL:** BDFL oznacza „Benevolent Dictator for Life”. W ramach tej struktury jedna osoba (zazwyczaj początkowy autor projektu) ma ostateczny głos na temat wszystkich ważnych decyzji dotyczących projektu. [Python](https://github.com/python) to klasyczny przykład. Mniejsze projekty są prawdopodobnie domyślnie BDFL, ponieważ istnieje tylko jeden lub dwóch opiekunów. Projekt, który powstał w firmie, może również należeć do kategorii BDFL.

* **Meritocracy:** **(Uwaga: określenie "merytokracja" budzi negatywne skojarzenia dla niektórych społeczności i ma [złożoną historię społeczną i polityczną](http://geekfeminism.wikia.com/wiki/Meritocracy).)** W ramach merytokracji aktywni uczestnicy projektu (ci, którzy demonstrują "merit") otrzymują formalną rolę decyzyjną. Decyzje są zwykle podejmowane na podstawie czystego konsensusu wyborczego. Koncepcja merytokracji została zapoczątkowana przez [Apache Foundation](https://www.apache.org/); [wszystkie projekty Apache](https://www.apache.org/index.html#projects-list) są merytokracjami. Wkład może wnieść tylko osoba reprezentująca się, a nie firma.

* **Liberal contribution:** Zgodnie z modelem liberalnego wkładu osoby, które wykonują najwięcej pracy, są uznawane za najbardziej wpływowe, ale opiera się to na bieżącej pracy, a nie na wkładach historycznych. Decyzje dotyczące głównych projektów podejmowane są w oparciu o proces poszukiwania konsensusu (omawianie głównych skarg), a nie tylko głosowanie, i starają się uwzględniać jak najwięcej perspektyw społeczności. Popularne przykłady projektów wykorzystujących liberalny model wkładu to [Node.js](https://foundation.nodejs.org/) i [Rust](https://www.rust-lang.org/).

Którego powinieneś użyć? To zależy od Ciebie! Każdy model ma zalety i kompromisy. I choć na początku mogą się wydawać zupełnie inne, wszystkie trzy modele mają więcej wspólnego, niż się wydaje. Jeśli chcesz zastosować jeden z tych modeli, sprawdź te szablony:

* [BDFL model template](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [Meritocracy model template](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js's liberal contribution policy](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## Czy potrzebuję dokumentów dotyczących zarządzania, kiedy uruchamiam mój projekt?

Nie ma właściwego czasu, aby zanotować zarządzanie projektem, ale o wiele łatwiej jest go zdefiniować, gdy zobaczysz dynamikę swojej społeczności. Najlepszą (i najtrudniejszą) częścią zarządzania open source jest to, że jest on kształtowany przez społeczność!

Jednak wczesna dokumentacja nieuchronnie przyczyni się do zarządzania projektem, więc zacznij zapisywać, co możesz. Na przykład możesz zdefiniować jasne oczekiwania dotyczące zachowania lub sposobu działania procesu współautora, nawet na początku projektu.

Jeśli należysz do firmy prowadzącej projekt open source, przed rozpoczęciem warto przeprowadzić wewnętrzną dyskusję na temat tego, w jaki sposób Twoja firma zamierza utrzymać projekt i podejmować decyzje dotyczące jego dalszego rozwoju. Możesz także publicznie wyjaśnić wszystko, w jaki sposób Twoja firma będzie (lub nie będzie!) Zaangażowana w projekt.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  <i>
  We assign small teams to manage projects on GitHub who are actually working on these at Facebook. For example, React is run by a React engineer.
  </i>
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["An inside look at open source at Facebook"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## Co się stanie, jeśli pracownicy korporacji zaczną składać kontrybucje?

Udane projekty open source są wykorzystywane przez wiele osób i firm, a niektóre firmy mogą ostatecznie mieć źródła przychodów ostatecznie powiązane z projektem. Na przykład firma może wykorzystać kod projektu jako jeden element oferty handlowej.

W miarę, jak projekt jest coraz szerzej wykorzystywany, ludzie, którzy mają w nim doświadczenie, stają się bardziej poszukiwani - możesz być jednym z nich! - i czasami otrzymają wynagrodzenie za pracę wykonaną w ramach projektu.

Ważne jest, aby traktować działalność komercyjną jako normalną i jako kolejne źródło energii rozwojowej. Oczywiście, płatni programiści nie powinni być traktowani specjalnie w stosunku do nieopłacanych; każdy wkład musi zostać oceniony pod względem merytorycznym. Jednak ludzie powinni czuć się swobodnie angażując się w działalność komercyjną i czując się swobodnie, opowiadając o swoich przypadkach użycia, argumentując na korzyść określonego ulepszenia lub funkcji.

„Commercial” jest całkowicie kompatybilny z „open source”. „Komercyjny” oznacza po prostu, że gdzieś są zaangażowane pieniądze - że oprogramowanie jest wykorzystywane w handlu, co jest coraz bardziej prawdopodobne, gdy projekt zyskuje popularność. (Gdy oprogramowanie typu open source jest używane jako część produktu innego niż open source, cały produkt jest nadal oprogramowaniem „zastrzeżonym”, chociaż podobnie jak open source może być wykorzystywany do celów komercyjnych lub niekomercyjnych).

Jak wszyscy inni, programiści komercyjni zyskują wpływ na projekt dzięki jakości i ilości swoich wkładów. Oczywiście programista, który otrzymuje wynagrodzenie za swój czas, może zrobić więcej niż ktoś, kto nie jest opłacany, ale to w porządku: płatność jest tylko jednym z wielu możliwych czynników, które mogą mieć wpływ na to, ile ktoś robi. Dyskusje dotyczące projektu powinny koncentrować się na wkładach, a nie na czynnikach zewnętrznych, które umożliwiają ludziom wniesienie wkładu.

## Czy potrzebuję osobowości prawnej do obsługi mojego projektu

Nie potrzebujesz osoby prawnej do obsługi projektu open source, chyba że zajmujesz się pieniędzmi.

Na przykład, jeśli chcesz założyć działalność komercyjną, musisz założyć C Corp lub LLC (jeśli mieszkasz w USA). Jeśli wykonujesz tylko prace kontraktowe związane z projektem open source, możesz zaakceptować pieniądze jako jednoosobowa firma lub założyć spółkę z ograniczoną odpowiedzialnością (jeśli mieszkasz w USA).

Jeśli chcesz przyjąć darowizny na projekt open source, możesz ustawić przycisk darowizny (na przykład za pomocą PayPal lub Stripe), ale pieniądze nie będą podlegały odliczeniu od podatku, chyba że kwalifikujesz się jako organizacja non-profit (501c3, jeśli jesteś w USA).

Wiele projektów nie chce borykać się z tworzeniem organizacji non-profit, dlatego zamiast tego znajdują sponsora fiskalnego. Sponsor fiskalny przyjmuje darowizny w Twoim imieniu, zwykle w zamian za procent darowizny. [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](https://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/ ), [Linux Foundation](https://www.linuxfoundation.org/projects) i [Open Collective](https://opencollective.com/opensource) to przykłady organizacji, które pełnią rolę sponsorów fiskalnych dla projektów open source.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  <i>
  Our goal is to provide an infrastructure that communities can use to be self sustainable, thus creating an environment where everyone — contributors, backers, sponsors — get concrete benefits out of it.
  </i>
  <p markdown="1" class="pquote-credit">
— @piamancini, ["Moving beyond the charity framework"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141)
  </p>
</aside>

Jeśli Twój projekt jest ściśle powiązany z określonym językiem lub ekosystemem, może istnieć powiązana podstawa oprogramowania, z którą możesz pracować. Na przykład [Python Software Foundation](https://www.python.org/psf/) pomaga w obsłudze [PyPI](https://pypi.org/), menedżera pakietów Python i [Node.js Foundation](https://foundation.nodejs.org/) pomaga w obsłudze [Express.js](https://expressjs.com/), frameworka opartego na Node.
