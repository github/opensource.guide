---
lang: pl
title: Najlepsze praktyki dla twórców open source
description: Ułatwienie życia twórców oprogramowania open source, od dokumentowania procesów po wykorzystanie społeczności.
class: best-practices
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## Co oznacza bycie twórcą open source?

Jeśli zarządzasz projektem open source, z którego korzysta wiele osób, być może zauważyłeś, że mniej czasu poświęcasz na pisanie kodu, a więcej na zgłoszone problemy.

Na wczesnych etapach projektu eksperymentujesz z nowymi pomysłami i podejmujesz decyzje w oparciu o to, na czym Ci zależy. Gdy twój projekt zyskuje na popularności, coraz częściej współpracujesz z użytkownikami i współpracownikami.

Utrzymanie projektu wymaga czegoś więcej niż tylko kodu. Te zadania są często nieoczekiwane, ale wciąż ważne dla rozwijającego się projektu. Zebraliśmy kilka sposobów, aby ułatwić ci życie - od dokumentowania procesów po wykorzystanie społeczności.

## Dokumentowanie procesów

Notowanie jest jedną z najważniejszych rzeczy, które możesz zrobić jako twórca.

Dokumentacja nie tylko ułatwia proces myślenia, ale pomaga innym ludziom zrozumieć, czego potrzebujesz lub oczekujesz, zanim zadadzą pytanie.

Nawet jeśli nie używasz pełnych akapitów, wypunktowanych list jest lepsze niż nienotowanie w ogóle.

Pamiętaj, aby aktualizować dokumentację. Jeśli nie zawsze możesz to zrobić, usuń nieaktualną dokumentację lub wskaż, że jest nieaktualna, aby współtwórcy wiedzieli, że aktualizacje są mile widziane.

### Stwórz wizję swojego projektu

Zacznij od spisania celów swojego projektu. Dodaj je do README lub utwórz osobny plik o nazwie VISION. Jeśli istnieją inne artefakty, które mogą pomóc, na przykład plan projektu, upublicznij je.

Posiadanie jasnej, udokumentowanej wizji pozwali Ci skoncentrować się i pomoże uniknąć "rozpełzywania się" zakresu po kontrybucjach innych osób.

Przykładowo - @lord odkrył, że stworzenie wizji projektu pomogło mu określić nad którymi requestami powinien spędzić czas.Jako nowy opiekun żałował, że nie trzymał się ustalonego zakresu swojego projektu, kiedy otrzymał swoją pierwszą prośbę o stworzenie dokumentacji [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lord?s=180" class="pquote-avatar" alt="avatar">
  Pogrzebałem to. Nie starałem się znaleźć całościowej koncepcji. Żałuję, że zamiast połowicznego rozwiązania nie powiedziałem: "Nie mam teraz na to czasu, ale dodam to do długoterminowej listy drobnych rzeczy do zrobienia".
  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Komunikuj swoje oczekiwania

Tworzenie reguł może być denerwujące. Czasami możesz mieć wrażenie, żę pilnujesz zachowania innych ludzi i niszczysz całą zabawę.

Jednak spisane i rzetelnie egzekwowane dobre zasady dają siłę twórcom projektów. Zapobiegają one wciągnięciu cię w robienie rzeczy, których nie chcesz robić.

Większość ludzi, którzy natkną się na twój projekt, nie wie nic o tobie ani twoich motywacjach. Mogą założyć, że zarabiasz za pracę nad projektem, szczególnie jeśli jest to coś, na czym polegają i z czego regularnie korzystają. Może w pewnym momencie zdecydujesz się poświęcić dużo czasu na swój projekt, ale aktualnie jesteś akurat zajęty nową pracą lub członkiem rodziny.

Wszystkie te okoliczności są jak najbardziej w porządku! Upewnij się tylko, że inni się o nich dowiedzą.

Jeśli tworzysz projekt w niepełnym wymiarze godzin lub w całości na zasadach wolontariatu - bądź szczery i informuj ile masz czasu. Nie jest to ta sama kwestia jak to, ile czasu wymaga projekt lub ile czasu inni chcą nad nim spędzić.

Oto kilka zasad, które warto zapisać:

- W jaki sposób kontrybucje są weryfikowane i akceptowane? (_Wymagają testów? Czy istnieje szablon dla zgłoszeń?_)
- Jakie rodzaje kontrybucji są akceptowane? (_Czy potrzebujesz pomocy jednie z określonym fragmentem kodu?_)
- Kiedy warto ponowić kontakt (_na przykład, "Możesz spodziewać się odpowiedzi od opiekuna w ciągu 7 dni. Jeśli do tego czasu nikt się nie odezwie, ponownie napisz wiadomość w odpowiednim wątku."_)
- Jak dużo czasu spędzasz nad projektem (_na przykład, "Spędzam jedynie 5 godzin tygodniowo pracując nad tym projektem"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), i [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) to kilka przykładów projektów z listą zasad dla twórców i współpracowników.

### Komunikuj się publicznie

Nie zapomnij dokumentować swoich interakcji. Informuj publicznie o swoim projekcie, gdziekolwiek jest to możliwe. Jeśli ktokolwiek próbuje skontaktować się z tobą prywatnie w celu omówienia prośby o dodanie funkcji lub potrzebuje wsparcia, uprzejmie skieruj go do publicznego kanału komunikacji, takiego jak lista mailingowa lub narzędzie do śledzenia i raportowania problemów.

Jeśli spotykasz się z innymi twórcami lub podejmujesz poważną decyzję na osobności, udokumentuj te rozmowy na forum, np. poprzez publikowanie notatek.

Dzięki temu każdy, kto dołączy do Twojej społeczności, będzie miał dostęp do tych samych informacji, co osoba która była zaangażowana w projekt od lat.

## Naucz się mówić nie

Zapisałeś wszystkie niezbędne rzeczy. Idealnie byłoby, gdyby każdy przeczytał dokumentację, ale w rzeczywistości będziesz musiał przypominać innym, że ta wiedza istnieje.

Jednak spisanie wszystkiego pomaga zdepersonalizować sytuacje, w których konieczne jest egzekwowanie reguł.

Mówienie "nie: nigdy nie jest łatwe, ale sformułowanie _"Twoja kontrybucja nie spełnia wymagań tego projektu"_ jest odczuwalnie mniej personalna niż _"Nie podoba mi się twoja kontrybucja"_.

Mówienie "nie" dotyczy wielu sytuacji, z którymi spotkasz się jako opiekun projektu: żądania dotyczące funkcji, które nie pasują do zakresu, wykolejanie dyskusji, wykonywanie niepotrzebnej pracy.

### Utrzymuj przyjazny ton konwersacji

Jednym z najważniejszych miejsc, w których poćwiczysz mówienie "nie" będzie sekcja raportowania błędów i lista pull requestów. Jako opiekun projektu nieuchronnie otrzymasz sugestie, których nie zechcesz zaakceptować.

Może kontrybucja zmienia zakres projektu lub nie pasuje do twojej wizji. Być może pomysł jest dobry, ale wdrożenie jest słabe.

Niezależnie od powodów, możliwe jest taktyczne obsłużenie kontrybucji, które nie spełniają standardów twojego projektu.

Jeśli otrzymasz kontrybucję, której nie chcesz zaakceptować, pierwszą reakcją może być zignorowanie lub udawanie, że jej nie widziałeś. Może to zranić czyjeś uczucia, a nawet zdemotywować innych potencjalnych współpracowników w Twojej społeczności.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/krausefx?s=180" class="pquote-avatar" alt="avatar">
  Kluczowe w obsłudze wsparcia dużych projektów open source jest utrzymanie ciągłości rozwiązywania problemów. Staraj się unikać wstrzymywania tego procesu. Jeśli jesteś programistą iOS wiesz, jak frustrujące może być zgłaszanie radarów. Możesz otrzymać informację zwrotną 2 lata później z informacją, aby spróbować ponownie z najnowszą wersją systemu iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Nie zostawiaj otwartych zgłoszeń z niechcianymi kontrybucjami, ponieważ czujesz się winny lub nie chcesz być niemiły. Z biegiem czasu lista zgłoszonych problemów bez odpowiedzi i lista PR sprawią, że praca nad projektem będzie o wiele bardziej stresująca i onieśmielająca.

Lepiej niezwłocznie zamknąć zgłoszenia z kontrybucjami, o których wiesz, że nie chcesz ich zaakceptować. Jeśli twój projekt ma już duże zaległości, @steveklabnik ma sugestie [jak efektywnie segregować problemy (EN)](https://words.steveklabnik.com/how-to-be-an-open-source-gardener)

Ponadto, ignorowanie kontrybucji wysyła negatywny sygnał do społeczności. Wkład w projekt może być onieśmielający, szczególnie jeśli jest to czyjś pierwszy raz. Nawet jeśli nie zaakceptujesz ich wkładu, uhonoruj osobę, która za tym stoi i podziękuj jej za zainteresowanie. To wielki komplement!

Jeśli nie chcesz akceptować kontrybucji:

- **Podziękuj** za kontrybucję
- **Wytłumacz dlaczego nie** wpisuje się w zakres projektu i zaoferuj jasne sugestie dotyczące poprawek. Bądź stanowczy, ale uprzejmy.
- **Podlinkuj właściwą dokumentację**, jeśli takowa istnieje. Jeśli zauważysz powracające zgłoszenia, których nie chcesz akceptować, dodaj ich listę wraz z objaśnieniem do swojej dokumentacji, aby uniknąć powtarzania się.
- **Zamknij zgłoszenie**

Nie powinieneś potrzebować więcej niż 1-2 zdania odpowiedzi. Na przykład, kiedy użytkownik [celery](https://github.com/celery/celery/) zgłosił problem związany z Windows, @berkerpeksag [odpowiedział](https://github.com/celery/celery/issues/3383):

![Celery screenshot](/assets/images/best-practices/celery.png)

Jeśli myśl o mówieniu "nie" przeraża cię, nie jesteś sam. Jak ujął to @jessfraz w [The Art of Closing](https://blog.jessfraz.com/post/the-art-of-closing/):

> Rozmawiałem z opiekunami kilku różnych projektów open source, Mesos, Kubernetes, Chromium i wszyscy zgadzają się, że jedną z najtrudniejszych części bycia opiekunem jest mówienie "nie" aktualizacjom, których nie chcesz.

Nie czuj się winny, że nie chcesz zaakceptować czyichś kontrybucji. Pierwsza zasada open source, [zgodnie z](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"Nie" jest tymczasowe, "tak" jest na zawsze._ Chociaż empatyzowanie z entuzjazmem innej osoby jest dobrą rzeczą, odrzucenie wkładu to nie to samo, co odrzucenie stojącej za nim osoby.

Finalnie, jeśli wkład nie jest wystarczająco dobry, nie masz obowiązku go zaakceptować. Bądź uprzejmy i elastyczny, gdy ludzie wnoszą swój wkład w projekt, ale akceptuj tylko zmiany, które twoim zdaniem poprawią projekt. Im częściej ćwiczysz mówienie "nie", tym łatwiejsze się staje. Obiecujemy.

### Bądź proaktywny

Aby zredukować ilość niechcianych kontrybucji, wyjaśnij proces wysyłania i akceptowania wkładów w przewodniku.

Jeśli otrzymujesz zbyt wiele kontrybucji niskiej jakości, poproś, aby autorzy wykonali wcześniej trochę pracy, na przykład:

- Wypełnienie szablonu/checlisty dla PR/zgłoszonego problemu
- Otworzenie zgłoszenia typu issue przed wysłaniem PR

Jeśli nie przestrzegają zasad, natychmiast zamknij zgłoszenie i pokieruj do dokumentacji.

Chociaż takie podejście może się początkowo wydawać nieuprzejme, proaktywność jest w rzeczywistości dobra dla obu stron. Zmniejsza to szansę, że ktoś straci wiele godzin pracy na PR, którego nie zamierzasz zaakceptować i ułatwia radzenie sobie z obciążeniami.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  Najlepiej byłoby wyjaśnić im w pliku CONTRIBUTING.md, w jaki sposób mogą w przyszłości uzyskać lepsze wskazówki przed rozpoczęciem pracy na temat tego, co zostanie zaakceptowane, a co nie.
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Czasami gdy mówisz "nie", potencjalny współpracownik może się zdenerwować lub skrytykować twoją decyzję. Jeśli ich zachowanie stanie się wrogie, [podejmij kroki w celu rozładowania sytuacji (EN)](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) lub nawet usuń takie osoby ze swojej społeczności, gdy nie chcę współpracować w sposób konstruktywny.

### Ogarnij mentoring

Może ktoś z twojej społeczności regularnie wysyła kontrybucje, które nie spełniają standardów twojego projektu. Wielokrotne odrzucanie może być frustrujące dla obu stron.

Jeśli widzisz, że ktoś jest entuzjastycznie nastawiony do twojego projektu, ale jego wkład wymaga dopracowania, bądź cierpliwy. Wyjaśnij jasno w każdej sytuacji, dlaczego ich wkład nie spełnia oczekiwań projektu. Spróbuj wskazać im łatwiejsze lub mniej dwuznaczne zadanie, takie jak problem oznaczony tagiem _"good first issue,"_. Jeśli masz czas, zastanów się nad ich mentoringiem w trakcie dodawania przez nich ich pierwszy kontrybucji lub znajdź kogoś w swojej społeczności, kto mógłby się tym zająć.

## Wykorzystaj swoją społeczność

Nie musisz robić wszystkiego sam/a. Społeczność twojego projektu istnieje nie bez powodu! Nawet jeśli nie masz jeszcze aktywnej społeczności współtwórców, jeśli masz wielu użytkowników, pozwól im działać.

### Dziel się obciążeniami

Jeśli szukasz innych osób, które mogłyby zabrać się energicznie do pracy, zacznij od zadawania pytań.

Jednym ze sposobów na pozyskanie nowych współpracowników jest jawne [oznaczanie problemów, które są wystarczająco proste dla początkujących (EN)](https://help.github.com/en/articles/helping-new-contributors-find-your-project-with-labels). GitHub wyświetli te problemy w różnych miejscach platformy, zwiększając ich widoczność.

Gdy zauważysz, że nowi współpracownicy w powtarzalny sposób wnoszą wkład do projektu, rozpoznaj ich pracę, oferując większą odpowiedzialność. Udokumentuj, w jaki sposób inni mogą otrzymać rolę liderów w projekcie, jeśli zechcą.

Zachęcanie innych do [współdzielenia własności projektu](../building-community/#share-ownership-of-your-project) może znacznie zmniejszyć obciążenie pracą, jak odkrył @lmccart w swoim projekcie, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  Mówiłam: "Tak, każdy może być zaangażowany, nie musisz mieć dużej wiedzy na temat kodowania [...]." Mieliśmy ludzi zgłaszających się żeby przyjść [na wydarzenie] i wtedy naprawdę się zastanawiałem: czy to prawda, co mówię? Pojawi się 40 osób i to nie tak, że mogę usiąść z każdym z nich... Ale ludzie się spotkali i to po prostu zadziałało. Gdy tylko jedna osoba zrozumie o co chodzi, może uczyć swojego sąsiada.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does "Open Source" Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

Jeśli musisz odejść z projektu, na chwilę lub na stałe, nie ma nic wstydliwego w poproszeniu kogoś innego o przejęcie twoich zadań.

Jeśli inni ludzie entuzjastycznie podchodzą do kierunku w jakim zmierza projekt, daj im dostęp do commitów lub formalnie przekaż kontrolę komuś innemu. Jeśli ktoś stworzył fork twojego projektu i aktywnie utrzymuje go w innym miejscu, rozważ połączenie go z oryginalnym projektem. To wspaniałe, że tak wiele osób chce, aby Twój projekt przetrwał!

@progrium [stwierdził, że](https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) dokumentując wizję swojego projektu [Dokku](https://github.com/dokku/dokku), pomógł mu przetrwać mimo późniejszego odejścia:

> Napisałem stronę wiki opisującą, czego chciałem i dlaczego tego chciałem. Z jakiegoś powodu zaskoczyło mnie to, że opiekunowie zaczęli przesuwać projekt w tym kierunku! Czy stało się dokładnie tak, jak ja bym to zrobił? Nie zawsze. Ale nadal zbliżyło to projekt do tego, co zaapisałem.

### Pozwól innym budować potrzebne im rozwiązania

Jeśli potencjalny współpracownik ma inne zdanie na temat tego, jak powinien działać twój projekt, możesz delikatnie zachęcić go do pracy nad własnym forkiem.

Forkowanie projektu nie musi być złą rzeczą. Możliwość kopiowania i modyfikowania projektów jest jedną z najlepszych rzeczy w open source. Zachęcanie członków społeczności do pracy nad własnymi forkami może zapewnić twórcze ujście, którego potrzebują, nirskonfliktowane z wizją projektu.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  Dowożę w 80% przypadków. Jeśli jesteś "jednorożcem", stwórz własny fork moich prac. Nie obrażę się! Moje projekty publiczne prawie zawsze mają na celu rozwiązanie najczęstszych problemów; Staram się ułatwiać wchodzenie głębiej w projekt, dzięki tworzeniu forków lub rozszerzaniu projektów.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

To samo dotyczy użytkownika, który naprawdę potrzebuje rozwiązania, do zbudowania którego brakuje ci wystarczającej "przepustowości". Oferowanie interfejsów API i hooków może pomóc innym w zaspokojeniu ich własnych potrzeb, bez konieczności bezpośredniej modyfikacji źródła. @orta [zauważył, że](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) zachęcanie do tworzenia wtyczek dla CocoaPods doprowadziło do "jednych z najciekawszych pomysłów":

> Praktycznie nieuniknione jest, że gdy projekt staje się duży, opiekunowie muszą stać się o wiele bardziej konserwatywni w kwestii wprowadzania nowego kodu. Stajesz się dobry w mówieniu "nie", ale wiele osób ma uzasadnione potrzeby. Więc zamiast tego, ostatecznie decydujesz się zamienić swoje narzędzie w platformę.

## Wykorzystaj roboty

Tak jak istnieją zadania, w których inni mogą ci pomóc, istnieją również zadania, których żaden człowiek nigdy nie powinien wykonywać. Roboty są twoimi przyjaciółmi. Użyj ich, aby ułatwić sobie życie jako opiekun projektów.

### Wymagaj testów i kontroli w celu poprawy jakości kodu

Jednym z najważniejszych sposobów automatyzacji projektu jest dodanie testów.

Testy pomagają współpracownikom mieć pewność, że niczego nie zepsują. Ułatwiają także szybkie przeglądanie i akceptowanie kontrybucji. Im bardziej jesteś responsywny, tym bardziej zaangażowana może być twoja społeczność.

Skonfiguruj automatyczne testy, które będą przeprowadzane na wszystkich przychodzących kontrybucjach i upewnij się, że twoje testy mogą być łatwo uruchomione lokalnie przez współpracowników. Wymagaj, aby wszystkie elementy kodu pomyślnie przeszły testy, zanim będą mogły zostać przesłane. Pomożesz w ten sposób ustalić minimalny standard jakości wszystkich zgłoszeń. [Required status checks](https://help.github.com/articles/about-required-status-checks/) w GitHub może pomóc upewnić się, że żadna zmiana nie zostanie zmergowana bez zaliczenia testów.

Jeśli dodasz testy, upewnij się, że wyjaśniłeś, jak działają w pliku CONTRIBUTING.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  Uważam, że testy są niezbędne dla całego kodu, nad którym pracują ludzie. Jeśli kod byłby w pełni i całkowicie poprawny, nie wymagałby zmian - piszemy kod tylko wtedy, gdy coś jest nie tak, czy jest to "Awaria" czy "Brak takiej i takiej funkcji". Niezależnie od wprowadzanych zmian testy są niezbędne do wychwycenia regresji, które mogą zostać przypadkowo wprowadzone.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Użyj narzędzi do automatyzacji podstawowych zadań konserwacyjnych

Dobra wiadomość o utrzymaniu popularnego projektu polega na tym, że inni opiekunowie prawdopodobnie napotkali podobne problemy i opracowali dla nich rozwiązania.

Istnieje [wiele dostępnych narzędzi (EN)](https://github.com/showcases/tools-for-open-source) pomocnych w automatyzacji niektórych aspektów prac konserwacyjnych. Kilka przykładów:

- [semantic-release](https://github.com/semantic-release/semantic-release) automatyzuje releasy
- [mention-bot](https://github.com/facebook/mention-bot) robi wzamianki na temat potencjalnych recenzentów pull requestów
- [Danger](https://github.com/danger/danger) pomaga zautomatyzować code review
- [no-response](https://github.com/probot/no-response) zamyka zgłoszenia, których autor nie odpowiedział na prośby o więcej informacji
- [dependabot-preview](https://github.com/marketplace/dependabot-preview) każdego dnia sprawdza pliki zależności pod kątem nieaktualnych wymagań i otwiera indywidualne żądania pull requestów dla każdego znalezionego

Do zgłaszania błędów i innych popularnych kontrybucji, GitHub ma [Issue Templates and Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), które możesz wykorzystać by usprawnić otrzymywaną komunikację. @TalAter stworzył [Choose Your Own Adventure guide](https://www.talater.com/open-source-templates/#/) by pomóc Ci pisać szablony dla zgłoszeń i PR.

Aby zarządzać powiadomieniami mailowymi, możesz ustawić [email filters](https://github.com/blog/2203-email-updates-about-your-own-activity) by organizować je według priorytetu.

Jeśli chcesz postępować w sposób nieco bardziej zaawansowany, przewodniki po stylach i lintery mogą ujednolicić kontrybucje i ułatwić ich recenzowanie i akceptowanie.

Jeśli jednak twoje standardy są zbyt skomplikowane, mogą zwiększyć bariery dla kontrybucji. Upewnij się, że dodajesz jedynie wystarczającą liczbę zasad, aby ułatwić wszystkim życie.

Jeśli nie masz pewności, jakich narzędzi użyć, sprawdź, co robią inne popularne projekty, zwłaszcza te w twoim ekosystemie. Na przykład, jak wygląda proces dodawania kontrybucji dla innych modułów Node? Korzystanie z podobnych narzędzi i podejść sprawi także, że proces będzie lepiej znany docelowym współpracownikom.

## Nie ma nic złego w robieniu przerwy

Kiedyś praca nad open source przynosiła ci radość. Może teraz zaczyna sprawiać, że czujesz winny lub robisz uniki.

Być może czujesz się przytłoczony lub ogarnia Cię coraz większe przerażenie, na myśl o swoich projektach. W międzyczasie rośnie kupka problemów i PRów.

Wypalenie jest prawdziwym i wszechobecnym problemem w pracy nad open source, szczególnie wśród opiekunów. Jako opiekun, twoje poczucie szczęścia jest niezbywalnym wymogiem przetrwania każdego projektu typu open source.

Chociaż powinno to być oczywiste, zrób sobie przerwę! Nie powinieneś odwlekać wakacji do czasu, aż poczujesz się wypalony. @brettcannon, główny programista Python, zdecydował się na [miesięczne wakacje (EN)](https://snarky.ca/why-i-took-october-off-from-oss-volunteering/) po 14 latach wolontariatu dla OSS.

Podobnie jak w przypadku każdego innego rodzaju pracy, regularne przerwy sprawią, że będziesz odświeżony, szczęśliwy i podekscytowany swoją pracą.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  Utrzymując WP-CLI, odkryłem, że najpierw muszę uszczęśliwić siebie i wyznaczyć wyraźne granice mojego zaangażowania. Najlepsza równowaga, jaką znalazłem, to 2-5 godzin tygodniowo w ramach mojego normalnego harmonogramu pracy. To sprawia, że ​​moje zaangażowanie jest pasją i nie odczuwam go jako dodatkowej pracy. Ponieważ priorytetowo traktuję problemy, nad którymi pracuję, mogę robić regularne postępy w zakresie tego, co uważam za najważniejsze.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://runcommand.io/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Czasami trudno jest zrobić sobie przerwę od pracy z open source, gdy wydaje się, że wszyscy cię potrzebują. Ludzie mogą nawet próbować sprawić, byś poczuł się winny z powodu odejścia.

Staraj się znaleźć wsparcie dla użytkowników i społeczności, gdy jesteś z dala od projektu. Jeśli nie możesz znaleźć potrzebnego wsparcia, zrób sobie przerwę mimo to. Komunikuj się, gdy nie jesteś dostępny, aby ludzie nie byli zdezorientowani brakiem reakcji.

Robienie przerw dotyczy nie tylko wakacji. Jeśli nie chcesz wykonywać pracy typu open source w weekendy lub w godzinach pracy, przekaż te oczekiwania innym, aby ci nie przeszkadzali.

## Najpierw zadbaj o siebie!

Utrzymanie popularnego projektu wymaga innych umiejętności niż wcześniejsze etapy rozwoju, ale jest nie mniej satysfakcjonujące. Jako opiekun ćwiczysz umiejętności przywódcze i osobiste na poziomie, którego niewielu ludzi może doświadczyć. Chociaż nie zawsze jest łatwo sobie z tym poradzić, ustalanie wyraźnych granic i przyjmowanie tylko tego, z czym czujesz się komfortowo, pomoże ci pozostać szczęśliwym, odświeżonym i produktywnym.
