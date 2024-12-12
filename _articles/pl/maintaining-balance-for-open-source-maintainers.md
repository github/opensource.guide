---
lang: pl
untranslated: true
title: Utrzymanie równowagi dla opiekunów Open Source
description: Wskazówki dotyczące dbania o siebie i unikania wypalenia jako opiekun.
class: balance
order: 0
image: /assets/images/cards/maintaining-balance-for-open-source-maintainers.png
---

W miarę jak popularność projektu open source rośnie, ważne staje się ustalenie jasnych granic, które pomogą zachować równowagę, aby zachować świeżość i produktywność na dłuższą metę.

Aby uzyskać zrozumienie doświadczeń opiekunów i ich strategii znajdowania równowagi, przeprowadziliśmy warsztaty z 40 członkami <a href="http://maintainers.github.com/">opiekunów społeczności</a>, pozwalając nam poznać ich własne doświadczenia z wypaleniem w open source i praktyki, które pomogły im zachować równowagę w pracy. W tym miejscu pojawia się koncepcja osobistej ekologii.

Czym więc jest ekologia osobista? Zgodnie z <a href="https://rockwoodleadership.org/nonprofit-four-day-workweek-can-take-care-still-change-world/#:~:text=personal%20ecology%3A%20maintaining%20balance%2C%20pacing%20and%20efficiency%20to%20sustain%20your%20energy%20over%20a%20lifetime%20of%20activism">opisem Rockwood Leadership Institute</a>,obejmuje ona "<strong>utrzymywanie równowagi, tempa i wydajności, aby utrzymać naszą energię przez całe życie</strong>." To nadało ramy naszym rozmowom, pomagając opiekunom rozpoznać ich działania i wkład jako części większego ekosystemu, który ewoluuje w czasie.Wypalenie, syndrom wynikający z przewlekłego stresu w miejscu pracy, zgodnie z [definicja WHO](https://icd.who.int/browse11/l-m/en#/http://id.who.int/icd/entity/129180281), nie jest niczym niezwykłym wśród opiekunów. Często prowadzi to do utraty motywacji, niemożności skupienia się i braku empatii dla współpracowników i społeczności, z którą pracujesz.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/gabek?s=180" class="pquote-avatar" alt="avatar">
  I was unable to focus or start on a task. I had a lack of empathy for users.
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/gabek">@gabek</a>, maintainer of the Owncast live streaming server, on the impact of burnout on his open source work
  </p>
</aside>

Przyjmując koncepcję osobistej ekologii, opiekunowie mogą aktywnie unikać wypalenia, traktować priorytetowo dbanie o siebie i utrzymywać poczucie równowagi, aby wykonywać swoją najlepszą pracę.

## Wskazówki dotyczące dbania o siebie i unikania wypalenia zawodowego w roli opiekuna:

### Określ swoje motywacje do pracy w open source

Poświęć trochę czasu na zastanowienie się nad tym, jakie części utrzymania open source cię energetyzują. Zrozumienie swoich motywacji może pomóc w ustaleniu priorytetów pracy w sposób, który sprawi, że będziesz zaangażowany i gotowy na nowe wyzwania. Niezależnie od tego, czy chodzi o pozytywne opinie użytkowników, radość ze współpracy i kontaktów towarzyskich ze społecznością, czy też satysfakcję z zagłębiania się w kod, rozpoznanie motywacji może pomóc w skupieniu się na pracy.

### Zastanów się, co powoduje, że tracisz równowagę i stresujesz się

Ważne jest, aby zrozumieć, co powoduje nasze wypalenie. Oto kilka wspólnych tematów, które zaobserwowaliśmy wśród opiekunów open source:

* **Brak pozytywnych opinii:** Użytkownicy są znacznie bardziej skłonni do zgłaszania swoich skarg. Jeśli wszystko działa świetnie, mają tendencję do milczenia. Może to być zniechęcające, gdy widzi się rosnącą listę problemów bez pozytywnych opinii pokazujących, w jaki sposób Twój wkład robi różnicę.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/thisisnic?s=180" class="pquote-avatar" alt="avatar">
  Sometimes it feels a bit like shouting into the void and I find that feedback really energizes me. We have lots of happy but quiet users.
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/thisisnic">@thisisnic</a>, maintainer of Apache Arrow
  </p>
</aside>

* **Nie mówienie 'nie':** Łatwo jest wziąć na siebie więcej obowiązków niż jest to konieczne w projekcie open source. Niezależnie od tego, czy chodzi o użytkowników, współpracowników czy innych opiekunów - nie zawsze możemy spełnić ich oczekiwania.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/agnostic-apollo?s=180" class="pquote-avatar" alt="avatar">
  I found I was taking on more than one should and having to do the job of multiple people, like commonly done in FOSS.
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/agnostic-apollo">@agnostic-apollo</a>, maintainer of Termux, on what causes burnout in their work
  </p>
</aside>

* **Praca w samotności:** Bycie opiekunem może być niezwykle samotne. Nawet jeśli pracujesz z grupą opiekunów, ostatnie kilka lat było trudne dla osobistego zwoływania rozproszonych zespołów.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/gabek?s=180" class="pquote-avatar" alt="avatar">
 Especially since COVID and working from home it's harder to never see anybody or talk to anybody.
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/gabek">@gabek</a>, maintainer of the Owncast live streaming server, on the impact of burnout on his open source work
  </p>
</aside>

* **Niewystarczająca ilość czasu lub zasobów:** Jest to szczególnie prawdziwe w przypadku opiekunów-wolontariuszy, którzy muszą poświęcić swój wolny czas na pracę nad projektem.

<aside markdown="1" class="pquote">
  [I would like to have] more financial support, so that I can focus on the open source work without burning through my savings and knowing I'll have to do a lot of contracting to make up for it later.
  <p markdown="1" class="pquote-credit">
— open source maintainer
  </p>
</aside>

* **Sprzeczne oczekiwania:** Open source jest pełne grup o różnych motywacjach, co może być trudne w obsłudze. Jeśli płacą ci za pracę nad open source, interesy twojego pracodawcy mogą być czasami sprzeczne ze społecznością.

<aside markdown="1" class="pquote">
  With paid open source, conflict between employer's focus and what's best for the community
  <p markdown="1" class="pquote-credit">
— open source maintainer
  </p>
</aside>

### Zwróć uwagę na oznaki wypalenia

Czy jesteś w stanie utrzymać tempo przez 10 tygodni? 10 miesięcy? 10 lat?

Istnieją narzędzia, takie jak [Burnout Checklist](https://governingopen.com/resources/signs-of-burnout-checklist.html) od [@shaunagm](https://github.com/shaunagm) które mogą pomóc ci zastanowić się nad twoim obecnym tempem i sprawdzić, czy są jakieś poprawki, które możesz wprowadzić. Niektórzy opiekunowie używają również technologii do monitorowania takich wskaźników jak jakość snu i zmienność tętna (oba powiązane ze stresem).

<aside markdown="1" class="pquote">
 I'm a big believer in good wearables. With the science behind it, you can understand how you could have done better and how to get to an optimal state of what you want to do.
  <p markdown="1" class="pquote-credit">
— open source maintainer
  </p>
</aside>

### Czego potrzebujesz, aby utrzymać siebie i swoją społeczność?

Będzie to wyglądać inaczej dla każdego opiekuna i będzie się zmieniać w zależności od etapu życia i innych czynników zewnętrznych. Ale oto kilka tematów, które usłyszeliśmy:

* **Odciążenie społeczności:** Delegowanie i znajdowanie współpracowników może zmniejszyć obciążenie pracą. Posiadanie wielu osób do kontaktu w sprawie projektu może pomóc ci zrobić sobie przerwę bez zmartwień. Nawiązuj kontakty z innymi opiekunami i szerszą społecznością - w grupach takich jak [Maintainer Community](http://maintainers.github.com/). Może to być świetne źródło wzajemnego wsparcia i nauki.

  Możesz także szukać sposobów na zaangażowanie społeczności użytkowników, aby regularnie otrzymywać informacje zwrotne i zrozumieć znaczenie swojej pracy w open source.

* **Znajdź finansowanie:** Niezależnie od tego, czy szukasz pieniędzy na pizzę, czy próbujesz przejść na pełny etat open source, istnieje wiele zasobów, które mogą Ci pomóc! Pierwszym krokiem jest włączenie opcji [Sponsorzy GitHub](https://github.com/sponsors), aby umożliwić innym sponsorowanie twojej pracy open source. Jeśli myślisz o przejściu na pełny etat, zgłoś się do następnej rundy [GitHub Accelerator](http://accelerator.github.com/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mansona?s=180" class="pquote-avatar" alt="avatar">
 I was on a podcast a while ago and we were chatting about open source maintenance and sustainability. I found that even a small number of people supporting my work on GitHub helped me make a quick decision not to sit in front of a game but instead to do one little thing with open source.
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/mansona">@mansona</a>, maintainer of EmberJS
  </p>
</aside>

* **Korzystaj z narzędzi:** Poznaj narzędzia takie jak [GitHub Copilot](https://github.com/features/copilot/) i [GitHub Actions](https://github.com/features/actions), aby zautomatyzować proste zadania i uwolnić swój czas na bardziej znaczący wkład.

<aside markdown="1" class="pquote">
 Use [Copilot](https://github.com/features/copilot/) for the boring stuff - do the fun stuff
  <p markdown="1" class="pquote-credit">
— open source maintainer
  </p>
</aside>

* **Odpoczynek i regeneracja:** Znajdź czas na swoje hobby i zainteresowania poza open source. Weź wolne weekendy, aby się zrelaksować i zregenerować - i ustaw swój [status GitHub](https://docs.github.com/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status), aby odzwierciedlał twoją dostępność! Dobry sen może mieć duży wpływ na twoją zdolność do utrzymania wysiłków w dłuższej perspektywie.

  Jeśli pewne aspekty projektu sprawiają ci szczególną przyjemność, postaraj się tak zaplanować pracę, abyś mógł doświadczać ich w ciągu dnia.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielroe?s=180" class="pquote-avatar" alt="avatar">
 I'm finding more opportunity to sprinkle ‘moments of creativity' in the middle of the day rather than trying to switch off in evening.
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/danielroe">@danielroe</a>, maintainer of Nuxt
  </p>
</aside>

* **Wyznacz granice:** Nie możesz zgodzić się na każdą prośbę. Może to być tak proste, jak powiedzenie: "Nie mogę się tym teraz zająć i nie planuję tego w przyszłości" lub wyszczególnienie tego, co chcesz zrobić, a czego nie, w pliku README. Na przykład, można powiedzieć: "Łączę tylko PR-y, które mają jasno wymienione powody, dla których zostały stworzone" lub "Przeglądam sprawy tylko we czwartki od 18:00 do 19:00". Określa to oczekiwania wobec innych i daje ci coś, na co możesz wskazać w innych momentach, aby pomóc zmniejszyć wymagania ze strony współpracowników lub użytkowników dotyczące twojego czasu.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
To meaningfully trust others on these axes, you cannot be someone who says yes to every request. In doing so, you maintain no boundaries, professionally or personally, and will not be a reliable coworker.
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/mikemcquaid">@mikemcquaid</a>, maintainer of Homebrew on [Saying No](https://mikemcquaid.com/saying-no/)
  </p>
</aside>

  Naucz się stanowczo odrzucać szkodliwe zachowania i negatywne interakcje. W dobrym tonie jest nie poświęcać energii rzeczom, na których ci nie zależy.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/IvanSanchez?s=180" class="pquote-avatar" alt="avatar">
My software is gratis, but my time and attention is not.
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/IvanSanchez">@IvanSanchez</a>, maintainer of Leaflet
  </p>
</aside>

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/foosel?s=180" class="pquote-avatar" alt="avatar">
It's no secret that open source maintenance has its dark sides, and one of these is having to sometimes interact with quite ungrateful, entitled or outright toxic people. As a project's popularity increases, so does the frequency of this kind of interaction, adding to the burden shouldered by maintainers and possibly becoming a significant risk factor for maintainer burnout.  
  <p markdown="1" class="pquote-credit">
— <a href="https://github.com/foosel">@foosel</a>, maintainer of Octoprint on [How to deal with toxic people](https://www.youtube.com/watch?v=7lIpP3GEyXs)
  </p>
</aside>

Pamiętaj, że ekologia osobista to ciągła praktyka, która będzie ewoluować w miarę postępów w podróży open source. Traktując priorytetowo dbanie o siebie i utrzymywanie poczucia równowagi, możesz wnieść swój wkład w społeczność open source w sposób skuteczny i zrównoważony, zapewniając zarówno dobre samopoczucie, jak i sukces swoich projektów na dłuższą metę.

## Dodatkowe materiały

* [Społeczność opiekunów](http://maintainers.github.com/)
* [Umowa społeczna open source](https://snarky.ca/the-social-contract-of-open-source/), Brett Cannon
* [Uncurled](https://daniel.haxx.se/uncurled/), Daniel Stenberg 
* [Jak radzić sobie z toksycznymi ludźmi](https://www.youtube.com/watch?v=7lIpP3GEyXs), Gina Häußge
* [SustainOSS](https://sustainoss.org/)
* [Sztuka przywództwa](https://rockwoodleadership.org/art-of-leadership/), Rockwood
* [Mówienie "nie"](https://mikemcquaid.com/saying-no/), Mike McQuaid
* [Otwartość zarządzania](https://governingopen.com/)
* Program warsztatów został zaczerpnięty z serii [Mozilla's Movement Building from Home](https://foundation.mozilla.org/en/blog/its-a-wrap-movement-building-from-home/)

## Współtwórcy

Bardzo dziękujemy wszystkim opiekunom, którzy podzielili się z nami swoimi doświadczeniami i wskazówkami na potrzeby tego przewodnika!

Ten przewodnik został napisany przez [@abbycabs](https://github.com/abbycabs) z wkładem od:

[@agnostic-apollo](https://github.com/agnostic-apollo)
[@AndreaGriffiths11](https://github.com/AndreaGriffiths11)
[@antfu](https://github.com/antfu)
[@anthonyronda](https://github.com/anthonyronda)
[@CBID2](https://github.com/CBID2)
[@Cli4d](https://github.com/Cli4d)
[@confused-Techie](https://github.com/confused-Techie)
[@danielroe](https://github.com/danielroe)
[@Dexters-Hub](https://github.com/Dexters-Hub)
[@eddiejaoude](https://github.com/eddiejaoude)
[@Eugeny](https://github.com/Eugeny)
[@ferki](https://github.com/ferki)
[@gabek](https://github.com/gabek)
[@geromegrignon](https://github.com/geromegrignon)
[@hynek](https://github.com/hynek)
[@IvanSanchez](https://github.com/IvanSanchez)
[@karasowles](https://github.com/karasowles)
[@KoolTheba](https://github.com/KoolTheba)
[@leereilly](https://github.com/leereilly)
[@ljharb](https://github.com/ljharb)
[@nightlark](https://github.com/nightlark)
[@plarson3427](https://github.com/plarson3427)
[@Pradumnasaraf](https://github.com/Pradumnasaraf)
[@RichardLitt](https://github.com/RichardLitt)
[@rrousselGit](https://github.com/rrousselGit)
[@sansyrox](https://github.com/sansyrox)
[@schlessera](https://github.com/schlessera)
[@shyim](https://github.com/shyim)
[@smashah](https://github.com/smashah)
[@ssalbdivad](https://github.com/ssalbdivad)
[@The-Compiler](https://github.com/The-Compiler)
[@thehale](https://github.com/thehale)
[@thisisnic](https://github.com/thisisnic)
[@tudoramariei](https://github.com/tudoramariei)
[@UlisesGascon](https://github.com/UlisesGascon)
[@waldyrious](https://github.com/waldyrious) + wiele innych osób!
