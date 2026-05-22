---
lang: pl
title: Prawna strona Open Source
description: Wszystko, co kiedykolwiek zastanawiałeś się nad prawną stroną otwartego oprogramowania i kilka rzeczy, których nie zrobiłeś.
class: legal
order: 10
image: /assets/images/cards/legal.png
related:
  - contribute
  - leadership
---

## Zrozumienie prawnych konsekwencji otwartego oprogramowania

Dzielenie się kreatywną pracą ze światem może być ekscytującym i satysfakcjonującym doświadczeniem. Może to również oznaczać szereg legalnych spraw, o których nie wiedziałeś, że musisz się martwić. Na szczęście nie musisz zaczynać od zera. Zaspokajamy Twoje potrzeby prawne. (Przed wkopaniem zapoznaj się z naszym [disclaimer](/notices/).)

## Dlaczego ludzie tak bardzo troszczą się o prawną stronę otwartego oprogramowania?

Cieszę się, że zapytałeś! Kiedy tworzysz pracę twórczą (taką jak pisanie, grafika lub kod), ta praca jest domyślnie objęta wyłącznym prawem autorskim. Oznacza to, że prawo zakłada, że jako autor twojej pracy masz wpływ na to, co inni mogą z tym zrobić.

Zasadniczo oznacza to, że nikt inny nie może używać, kopiować, rozpowszechniać ani modyfikować Twojej pracy bez narażania się na wady, wstrząsy lub spory sądowe.

Otwarte źródło jest jednak niezwykłą okolicznością, ponieważ autor oczekuje, że inni będą używać, modyfikować i udostępniać dzieło. Ponieważ jednak domyślnym ustawowym prawem autorskim są nadal wyłączne prawa autorskie, potrzebujesz licencji, która wyraźnie określa te uprawnienia.

Jeśli nie zastosujesz licencji typu open source, każdy, kto przyczyni się do twojego projektu, stanie się także wyłącznym właścicielem praw autorskich do swojej pracy. Oznacza to, że nikt nie może używać, kopiować, rozpowszechniać ani modyfikować swoich wpisów - i że „nikt” nie obejmuje Ciebie.

Wreszcie, twój projekt może być zależny od wymagań licencyjnych, o których nie wiedziałeś. Społeczność twojego projektu lub zasady twojego pracodawcy mogą również wymagać od twojego projektu używania określonych licencji open source. Omówimy te sytuacje poniżej.

## Czy publiczne projekty GitHub są open source?

Kiedy [tworzysz nowy projekt](https://help.github.com/articles/creating-a-new-repository/) na GitHub masz opcję utworzenia repozytorium **private** lub **public**.

![Create repository](/assets/images/legal/repo-create-name.png)

**Upublicznienie projektu GitHub to nie to samo, co licencjonowanie projektu.** Projekty publiczne są objęte [Warunkami świadczenia usług GitHub](https://help.github.com/en/github/site-policy/github-terms-of-service#3-ownership-of-content-right-to-post-and-licytations-grants), który pozwala innym przeglądać i rozwidlać twój projekt, ale w przeciwnym razie twoja praca nie ma żadnych uprawnień.

Jeśli chcesz, aby inni używali, rozpowszechniali, modyfikowali lub wnieśli swój wkład z powrotem do twojego projektu, musisz dołączyć licencję typu open source. Na przykład, ktoś nie może legalnie wykorzystywać żadnej części twojego projektu GitHub w swoim kodzie, nawet jeśli jest on publiczny, chyba że wyraźnie mu to umożliwisz.

## Po prostu daj mi TL;DR na to, czego potrzebuję do ochrony mojego projektu.

Masz szczęście, ponieważ dziś licencje open source są ustandaryzowane i łatwe w użyciu. Możesz skopiować i wkleić istniejącą licencję bezpośrednio do swojego projektu.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), i [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) są najpopularniejszymi licencjami typu open source, ale istnieją inne opcje do wyboru. Możesz znaleźć pełny tekst tych licencji i instrukcje, jak z nich korzystać, na [choosealicense.com](https://choosealicense.com/).

Kiedy tworzysz nowy projekt w GitHub, zostaniesz [poproszony o dodanie licencji](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
  <i>
  A standardized license serves as a proxy for those without legal training to know precisely what they can and can't do with the software. Unless absolutely required, avoid custom, modified, or non-standard terms, which will serve as a barrier to downstream use of the agency code.
  </i>
  <p markdown="1" class="pquote-credit">
— @benbalter, ["Everything a government attorney needs to know about open source software&nbsp;licensing"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## Która licencja typu open source jest odpowiednia dla mojego projektu?

Jeśli zaczynasz od pustej listy, trudno jest pomylić się z [Licencją MIT](https://choosealicense.com/licenses/mit/). Jest krótki, bardzo łatwy do zrozumienia i pozwala każdemu robić wszystko, o ile zachowuje kopię licencji, w tym informację o prawach autorskich. Jeśli zajdzie taka potrzeba, możesz wydać projekt na innej licencji.

W przeciwnym razie wybór odpowiedniej licencji typu open source dla twojego projektu zależy od twoich celów.

Twój projekt najprawdopodobniej ma (lub będzie miał) **zależności**. Na przykład, jeśli korzystasz z otwartego źródła projektu Node.js, prawdopodobnie użyjesz bibliotek z Menedżera pakietów Node (npm). Każda z tych bibliotek, na których polegasz, będzie miała własną licencję typu open source. Jeśli każda z ich licencji jest „dozwolona” (daje publiczne pozwolenie na używanie, modyfikowanie i udostępnianie, bez żadnych warunków dla dalszych licencji), możesz użyć dowolnej licencji. Popularne licencje obejmują MIT, Apache 2.0, ISC i BSD.

Z drugiej strony, jeśli którakolwiek licencja na twoje zależności jest „silnym copyleft” (daje również publiczne takie same uprawnienia, pod warunkiem korzystania z tej samej licencji na dalszym etapie), twój projekt będzie musiał użyć tej samej licencji. Typowe silne licencje copyleft obejmują GPLv2, GPLv3 i AGPLv3.

Możesz także rozważyć **społeczności**, które mają nadzieję wykorzystać i przyczynić się do twojego projektu:

* **Czy chcesz, aby Twój projekt był używany przez inne projekty jako zależność?** Prawdopodobnie najlepiej użyć najpopularniejszej licencji w odpowiedniej społeczności. Na przykład [MIT](https://choosealicense.com/licenses/mit/) jest najpopularniejszą licencją dla [npm libraries](https://libraries.io/search?platforms=NPM).
* **Czy chcesz, aby Twój projekt spodobał się dużym firmom?** Duży biznes prawdopodobnie będzie chciał uzyskać wyraźną licencję patentową od wszystkich autorów. W takim przypadku usługa [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) obejmuje Ciebie (i ich).
* **Czy chcesz, aby Twój projekt był atrakcyjny dla autorów, którzy nie chcą, aby ich wkład był wykorzystywany w oprogramowaniu zamkniętym?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) lub (jeśli nie chcą również wnosić wkładu do usług zamkniętego źródła) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) przejdzie dobrze.

Twoja **firma** może mieć określone wymagania licencyjne dla swoich projektów open source. Na przykład, może wymagać zezwolenia licencyjnego, aby firma mogła wykorzystać Twój projekt w zamkniętym źródłowym produkcie firmy. Lub Twoja firma może wymagać silnej licencji copyleft i dodatkowej umowy o współautorze (patrz poniżej), aby tylko Twoja firma i nikt inny nie mógł używać twojego projektu w oprogramowaniu zamkniętym. Lub Twoja firma może mieć pewne potrzeby związane ze standardami, odpowiedzialnością społeczną lub przejrzystością, z których każda może wymagać określonej strategii licencjonowania. Porozmawiaj z działem prawnym swojej firmy](#what-does-my-companys-legal-team-need-to-know).

Podczas tworzenia nowego projektu w GitHub masz możliwość wybrania licencji. Dołączenie jednej z wyżej wymienionych licencji sprawi, że Twój projekt GitHub stanie się open source. Jeśli chcesz zobaczyć inne opcje, sprawdź [choosealicense.com](https://choosealicense.com), aby znaleźć odpowiednią licencję dla swojego projektu, nawet jeśli nie jest to [oprogramowanie](https://choosealicense.com/non-software/).

## Co jeśli chcę zmienić licencję mojego projektu?

Większość projektów nigdy nie musi zmieniać licencji. Ale czasami okoliczności się zmieniają.

Na przykład, wraz z rozwojem projektu, dodaje on zależności lub użytkowników, lub firma zmienia strategie, z których każda może wymagać lub wymagać innej licencji. Ponadto, jeśli od samego początku zaniedbywałeś licencjonowanie swojego projektu, dodanie licencji jest identyczne jak zmiana licencji. Przy dodawaniu lub zmienianiu licencji projektu należy wziąć pod uwagę trzy podstawowe rzeczy:

**To skomplikowane.** Określenie zgodności i zgodności licencji oraz tego, kto jest właścicielem praw autorskich, może bardzo szybko się skomplikować i wprowadzić w błąd. Przejście na nową, ale zgodną licencję dla nowych wydań i wkładów różni się od ponownego licencjonowania wszystkich istniejących wkładów. Zaangażuj swój zespół prawny przy pierwszej sugestii zmiany licencji. Nawet jeśli masz lub możesz uzyskać pozwolenie od posiadaczy praw autorskich do projektu na zmianę licencji, rozważ wpływ tej zmiany na innych użytkowników i współtwórców projektu. Pomyśl o zmianie licencji jako o „zdarzeniu związanym z zarządzaniem” dla twojego projektu, który najprawdopodobniej przejdzie gładko dzięki jasnej komunikacji i konsultacjom z interesariuszami twojego projektu. Tym bardziej powód, aby wybrać i używać odpowiedniej licencji dla swojego projektu od samego początku!

**Istniejąca licencja twojego projektu.** Jeśli istniejąca licencja projektu jest zgodna z licencją, którą chcesz zmienić, możesz po prostu zacząć korzystać z nowej licencji. Jest tak, ponieważ jeśli licencja A jest zgodna z licencją B, będziesz przestrzegać warunków A, jednocześnie przestrzegając warunków B (ale niekoniecznie odwrotnie). Jeśli więc obecnie korzystasz z licencji permisive (np. MIT), możesz zmienić ją na licencję z większą liczbą warunków, o ile zachowasz kopię licencji MIT i wszelkich powiązanych informacji o prawach autorskich (tj. Nadal będziesz przestrzegać Minimalne warunki licencji MIT). Ale jeśli twoja aktualna licencja nie jest dozwolona (np. Copyleft lub nie masz licencji) i nie jesteś jedynym właścicielem praw autorskich, nie możesz po prostu zmienić licencji projektu na MIT. Zasadniczo, posiadając zezwolenie licencyjne, właściciele praw autorskich projektu uprzednio wyrazili zgodę na zmianę licencji.

**Obecni posiadacze praw autorskich do Twojego projektu.** Jeśli jesteś jedynym współtwórcą swojego projektu, to Ty lub Twoja firma jesteś wyłącznym właścicielem praw autorskich do projektu. Możesz dodać lub zmienić dowolną licencję, którą Ty lub Twoja firma chcecie. W przeciwnym razie mogą istnieć inni właściciele praw autorskich, od których potrzebujesz zgody, aby zmienić licencje. Kim oni są? Ludzie, którzy mają zobowiązania w twoim projekcie, to dobry początek. Ale w niektórych przypadkach pracodawcy tych osób będą mieli prawa autorskie. W niektórych przypadkach ludzie wnoszą minimalny wkład, ale nie ma twardej i szybkiej zasady, że wkłady o określonej liczbie wierszy kodu nie podlegają prawu autorskiemu. Co robić? To zależy. W przypadku stosunkowo małego i młodego projektu może być wykonalne, aby wszyscy obecni współpracownicy zgodzili się na zmianę licencji w żądaniu wydania lub wycofania. W przypadku dużych i długotrwałych projektów może być konieczne znalezienie wielu współpracowników, a nawet ich spadkobierców. Mozilla potrzebowała lat (2001-2006) na licencjonowanie Firefoksa, Thunderbirda i powiązanego oprogramowania.

Ewentualnie możesz poprosić autorów o wcześniejsze uzgodnienie (za pośrednictwem dodatkowej umowy o współautorach - patrz poniżej) pewnych zmian licencji pod pewnymi warunkami, wykraczającymi poza dozwolone przez twoją istniejącą licencję typu open source. To nieco zmienia złożoność zmiany licencji. Będziesz potrzebować dodatkowej pomocy od swoich prawników i nadal będziesz chciał wyraźnie komunikować się z interesariuszami projektu podczas przeprowadzania zmiany licencji.

## Czy mój projekt wymaga dodatkowej umowy wnoszącej wkład?

Prawdopodobnie nie. W zdecydowanej większości projektów typu open source licencja typu open source domyślnie służy zarówno jako licencja przychodząca (od współpracowników), jak i wychodząca (dla innych autorów i użytkowników). Jeśli Twój projekt działa na GitHub, Warunki korzystania z usługi GitHub sprawiają, że „przychodzące = wychodzące” jest [jawnym domyślnym](https://help.github.com/en/github/site-policy/github-terms-of-service#6-contributions-under-repository-license).

Dodatkowa umowa współtwórcy - często zwana umową licencyjną współtwórcy (CLA) - może tworzyć prace administracyjne dla opiekunów projektów. Ile pracy dodaje umowa zależy od projektu i realizacji. Prosta umowa może wymagać, aby uczestnicy potwierdzili jednym kliknięciem, że mają prawa niezbędne do wniesienia wkładu w ramach licencji open source projektu. Bardziej skomplikowana umowa może wymagać weryfikacji prawnej i wypisania się od pracodawców współpracowników.

Ponadto poprzez dodanie „dokumentacji”, którą niektórzy uważają za niepotrzebną, trudną do zrozumienia lub niesprawiedliwą (gdy odbiorca umowy otrzymuje więcej praw niż współautorzy lub odbiorcy publiczni dzięki licencji open source projektu), dodatkową umowę wnoszącą wkład można uznać za nieprzyjazną dla społeczności projektu.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">
  <i>
    We have eliminated the CLA for Node.js. Doing this lowers the barrier to entry for Node.js contributors thereby broadening the contributor base.
   </i>
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Broadening Node.js Contributions"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Niektóre sytuacje, w których warto rozważyć zawarcie dodatkowej umowy wnoszącej wkład dla twojego projektu, obejmują:

* Twoi prawnicy chcą, aby wszyscy współtwórcy wyraźnie zaakceptowali warunki udziału (_sign_, online lub offline), być może dlatego, że uważają, że sama licencja typu open source nie wystarczy (nawet jeśli jest!). Jeśli jest to jedyny problem, wystarczy umowa współtwórcy, która potwierdza licencję open source projektu. [Umowa licencyjna na indywidualnego dostawcę jQuery](https://contribute.jquery.org/CLA/) jest dobrym przykładem niewielkiej dodatkowej umowy na współautora.
* Ty lub twoi prawnicy chcielibyście, aby programiści oświadczyli, że każde dokonane przez nich zatwierdzenie jest dozwolone. Wymaganiem [Developer Certificate of Origin](https://developercertificate.org/) jest to, ile projektów to osiąga. Na przykład społeczność Node.js [używa](https://github.com/nodejs/node/blob/HEAD/CONTRIBUTING.md) DCO [zamiast](https://nodejs.org/en/blog/uncategorized/notes-from-the-road/#easier-contribution) wcześniejszego CLA. Prostą opcją zautomatyzowania wymuszania kontroli DCO w repozytorium jest [DCO Probot](https://github.com/probot/dco).
* Twój projekt wykorzystuje licencję typu open source, która nie obejmuje wyraźnej granty patentowej (takiej jak MIT), i potrzebujesz grantu patentowego od wszystkich autorów, z których niektórzy mogą pracować dla firm z dużymi portfelami patentowymi, które mogłyby być wykorzystane do Ciebie lub inni uczestnicy projektu i użytkownicy. [Umowa licencyjna na indywidualnego dostawcę Apache](https://www.apache.org/licenses/icla.pdf) to powszechnie stosowana dodatkowa umowa na współautora, której udzielenie patentowe odzwierciedla kopię zawartą w licencji Apache 2.0.
* Twój projekt jest objęty licencją copyleft, ale musisz także rozpowszechniać zastrzeżoną wersję projektu. Będziesz potrzebował każdego współtwórcy, aby przypisać Ci prawa autorskie lub udzielić (ale nie publicznie) zezwolenia na korzystanie z licencji. [Umowa współtwórcy MongoDB](https://www.mongodb.com/legal/contributor-agreement) jest przykładem tego rodzaju umowy.
* Uważasz, że Twój projekt może wymagać zmiany licencji przez cały okres jego użytkowania i chcesz, aby współtwórcy zgodzili się z wyprzedzeniem na takie zmiany.

Jeśli potrzebujesz skorzystać z dodatkowej umowy z dostawcą w swoim projekcie, rozważ zastosowanie integracji, takiej jak [asystent CLA](https://github.com/cla-assistant/cla-assistant), aby zminimalizować rozproszenie współpracowników.

## Co powinien wiedzieć zespół prawny mojej firmy?

Jeśli zwalniasz projekt typu open source jako pracownik firmy, najpierw zespół prawny powinien wiedzieć, że masz otwarty projekt.

Na lepsze lub gorsze, warto poinformować ich, nawet jeśli jest to projekt osobisty. Prawdopodobnie masz „umowę o pracę z pracownikiem” ze swoją firmą, która daje im pewną kontrolę nad twoimi projektami, szczególnie jeśli są one w ogóle związane z działalnością firmy lub wykorzystujesz zasoby firmy do opracowania projektu. Twoja firma powinna z łatwością dać ci pozwolenie, a być może już zawarła przyjazną dla pracowników umowę IP lub politykę firmy. Jeśli nie, możesz negocjować (na przykład wyjaśnić, że Twój projekt służy profesjonalnym celom firmy w zakresie uczenia się i rozwoju) lub unikać pracy nad projektem, dopóki nie znajdziesz lepszej firmy.

**Jeśli masz otwarty projekt dla swojej firmy,** to zdecydowanie daj znać. Twój zespół prawny prawdopodobnie już ma zasady dotyczące tego, z której licencji open source (i być może dodatkowej umowy wnoszącej wkład) należy korzystać w oparciu o wymagania biznesowe firmy i wiedzę specjalistyczną w zakresie zapewniania zgodności projektu z licencjami jego zależności. Jeśli nie, ty i oni mają szczęście! Twój zespół prawny powinien chętnie z Tobą współpracować przy rozwiązywaniu tego problemu. Kilka rzeczy do przemyślenia:

* **Materiały stron trzecich:** Czy twój projekt ma zależności stworzone przez innych lub w inny sposób zawierają lub wykorzystują kod innych osób? Jeśli są to oprogramowanie typu open source, musisz przestrzegać licencji na materiały typu open source. Zaczyna się to od wyboru licencji, która współpracuje z licencjami open source stron trzecich (patrz wyżej). Jeśli Twój projekt modyfikuje lub rozpowszechnia materiały open source stron trzecich, Twój zespół prawny będzie chciał również wiedzieć, że spełniasz inne warunki licencji open source stron trzecich, takie jak zachowanie informacji o prawach autorskich. Jeśli Twój projekt korzysta z kodu innej osoby, który nie ma licencji open source, prawdopodobnie będziesz musiał poprosić zewnętrznych opiekunów o [dodanie licencji open source](https://choosealicense.com/no-license/#for-users), a jeśli nie możesz go zdobyć, przestań używać jego kodu w swoim projekcie.

* **Tajemnice handlowe:** Zastanów się, czy w projekcie jest coś, czego firma nie chce udostępnić ogółowi społeczeństwa. Jeśli tak, możesz otworzyć źródło reszty swojego projektu, po wyodrębnieniu materiału, który chcesz zachować jako prywatny.

* **Patenty:** Czy Twoja firma ubiega się o patent, którego otwarty projekt stanowiłby [ujawnienie publiczne](https://en.wikipedia.org/wiki/Public_disclosure)? Niestety możesz zostać poproszony o poczekanie (a może firma ponownie rozważy mądrość aplikacji). Jeśli oczekujesz wkładu w projekt od pracowników firm z dużymi portfelami patentów, Twój zespół prawny może chcieć, abyś użył licencji z wyraźnym udzieleniem patentu od autorów (takich jak Apache 2.0 lub GPLv3), lub dodatkowej umowy wnoszącej wkład ( patrz wyżej).

* **Znaki towarowe:** Sprawdź dwukrotnie, czy nazwa twojego projektu [nie powoduje konfliktu z istniejącymi znakami towarowymi](../starting-a-project/#unikanie-konfliktów-nazw). Jeśli używasz w projekcie własnych znaków towarowych firmy, sprawdź, czy nie powoduje to żadnych konfliktów. [FOSSmarks](http://fossmarks.org/) to praktyczny przewodnik do zrozumienia znaków towarowych w kontekście projektów bezpłatnych i otwartych.

* **Prywatność:** Czy Twój projekt zbiera dane o użytkownikach? „Telefon do domu” do serwerów firmy? Twój zespół prawny może pomóc Ci w przestrzeganiu zasad firmy i przepisów zewnętrznych.

Jeśli wypuszczasz pierwszy projekt open source swojej firmy, powyższe rozwiązania są wystarczające, aby się z tym pogodzić (ale nie martw się, większość projektów nie powinna budzić większych obaw).

W dłuższej perspektywie Twój zespół prawny może zrobić więcej, aby pomóc firmie lepiej wykorzystać zaangażowanie w open source i zachować bezpieczeństwo:

* **Zasady dotyczące składek pracowniczych:** Rozważ opracowanie zasad korporacyjnych, które określają, w jaki sposób pracownicy przyczyniają się do projektów typu open source. Jasna polityka zmniejszy zamieszanie wśród pracowników i pomoże im przyczyniać się do projektów typu open source w najlepszym interesie firmy, zarówno w ramach pracy, jak i czasu wolnego. Dobrym przykładem jest [Model IP i Open Source Contribution Policy](https://processmechanics.com/2015/07/23/a-model-ip-and-open-source-contribution-policy/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">
  <i>
  Letting out the IP associated with a patch builds the employee's knowledge base and reputation. It shows that the company is invested in the development of that employee and creates a sense of empowerment and autonomy. All of these benefits also lead to higher morale and better employee retention.
  </i>
  <p markdown="1" class="pquote-credit">
— @vanl, ["A Model IP and Open Source Contribution Policy"](https://processmechanics.com/2015/07/23/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **Co wydać:** [(Prawie) wszystko?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) Jeśli Twój zespół prawny rozumie i jest zaangażowany w strategię otwartego oprogramowania firmy, najlepiej będzie Ci w stanie pomóc, a nie utrudnić wysiłki.
* **Zgodność:** Nawet jeśli Twoja firma nie wydaje żadnych projektów typu open source, korzysta z oprogramowania innego typu. [Świadomość i proces](https://www.linuxfoundation.org/blog/blog/why-companies-that-use-open-source-need-a-compliance-program/) może zapobiegać bólom głowy, opóźnieniom produktowym, i procesom sądowym.

<aside markdown="1" class="pquote">
  Organizations must have a license and compliance strategy in place that fits both \["permissive" and "copyleft"\] categories. This begins with keeping a record of the licensing terms that apply to the open source software you’re using — including subcomponents and dependencies.
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Open Source Software: Compliance Basics And Best Practices"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Patenty:** Twoja firma może dołączyć do [Open Invention Network](https://www.openinventionnetwork.com/), wspólnej puli patentów obronnych, aby chronić korzystanie przez członków z dużych projektów open source lub odkryć inne [alternatywne licencjonowanie patentów](https://www.eff.org/document/hacking-patent-system-2016).
* **Zarządzanie:** Zwłaszcza jeśli i kiedy sensowne jest przeniesienie projektu do [podmiotu prawnego spoza firmy](../leadership-and-governance/#czy-potrzebuję-osobowości-prawnej-do-obsługi-mojego-projektu).
