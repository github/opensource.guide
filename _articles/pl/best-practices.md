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

Jeśli zarządzasz projektem open sorce, z którego korzysta wiele osób, być może zauważyłeś, że mniej czasu poświęcasz na pisanie kodu, a więcej na zgłoszone problemy.

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
  I fumbled it. I didn't put in the effort to come up with a complete solution. Instead of an half-assed solution, I wish I had said "I don't have time for this right now, but I'll add it to the long term nice-to-have list."
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

If maintaining your project is part-time or purely volunteered, be honest about how much time you have. This is not the same as how much time you think the project requires, or how much time others want you to spend.

Jeśli tworzysz projekt w niepełnym wymiarze godzin lub w całości na zasadach wolontariatu - bądź szczery i informuj ile masz czasu. Nie jest to ta sama kwestia jak to, ile czasu wymaga projekt lub ile czasu inni chcą nad nim spędzić.

Oto kilka zasad, które warto zapisać:

- W jaki sposób kontrybucje są weryfikowane i akceptowane? (_Wymagają testów? Czy istnieje szablon dla zgłoszeń?_)
- Jakie rodzaje kontrybucji są akceptowane? (_Czy potrzebujesz pomocy jednie z określonym fragmentem kodu?_)
- Kiedy warto ponowić kontakt (_na przykład, "Możesz spodziewać się odpowiedzi od opiekuna w ciągu 7 dni. Jeśli do tego czasu nikt się nie odezwie, ponownie napisz wiadomość w odpowiednim wątku."_)
- Jak dużo czasu spędzasz nad projektem (_na przykład, "Spędzam jedynie 5 godzin tygodniowo pracując nad tym projektem"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), i [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) to kilka przykładów projektów z listą zasad dla twórców i współpracowników.

### Komunikuj się publicznie

Nie zapomnij dokumentować swoich interakcji. Informuj publicznie o swoim projekcie, gdziekolwiek jest to możliwe. Jeśli ktokolwiek próbuje skontaktować się z tobą prywatnie w celu omówienia prośby o dodanie funkcji lub potrzebuje wsparcia, uprzejmie skieruj go do publicznego kanału komunikacji, takiego jak lista mailingowa lub narzędzie do śledzenia i raportowania problemów.

Jeśli spotykasz się z innymi twórcami lub podejmujesz poważną decyzję na osobności, udokumentuj te rozmowy na forum publicznym, np. poprzez uploadowanie notatek.

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
  Kluczowe w obsługi wsparcia dużych projektów open source jest utrzymanie ciągłości rozwiązywania problemów. Staraj się unikać wstrzymywania tego procesu. Jeśli jesteś programistą iOS wiesz, jak frustrujące może być zgłaszanie radarów. Możesz orzymać informację zwrotną 2 lata później z informacją, aby spróbować ponownie z najnowszą wersją systemu iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Nie zostawiaj otwartych zgłoszeń z niechcianymi kontrybucjami, ponieważ czujesz się winny lub nie chcesz być niemiły. Z biegiem czasu lista zgłoszonych problemów bez odpowiedzi i lista PR sprawią, że praca nad projektem będzie o wiele bardziej stresująca i onieśmielająca.

Lepiej niezwłocznie zamknąć zgłoszenia z kontrybucjami, o których wiesz, że nie chcesz ich zaakceptować. Jeśli twój projekt ma już duże zaległości, @steveklabnik ma sugestie jak efektywnie segregować problemy (EN) - [how to triage issues efficiently](https://words.steveklabnik.com/how-to-be-an-open-source-gardener)

Ponadto, ignorowanie kontrybucji wysyła negatywny sygnał do społeczności. Wkład w projekt może być onieśmielający, szczególnie jeśli jest to czyjś pierwszy raz. Nawet jeśli nie zaakceptujesz ich wkładu, uhonoruj osobę, która za tym stoi i podziękuj jej za zainteresowanie. To wielki komplement!

Jeśli nie chcesz akceptować kontrybucji:

- **Podziękuj** za kontrybucję
- **Wytłumacz dlaczego nie** wpisuje się w zakres projektu i zaoferuj jasne sugestie dotyczące poprawek. Bądź stanowczy, ale uprzejmy.
- **Podlinkuj właściwą dokumentację**, jeśli takowa istnieje. Jeśli zauważysz powracające zgłoszenia, których nie chcesz akceptować, dodaj ich listę wraz z objaśnieniem do swojej dokumentacji, aby uniknąć powtarzania się.
- **Zamknij zgłoszenie**

Nie powinieneś potrzebować więcej niż 1-2 zdania odpowiedzi. Na przykłąd, kiedy użytkownik [celery](https://github.com/celery/celery/) złosił problem związany z Windows, @berkerpeksag [odpowiedział](https://github.com/celery/celery/issues/3383):

![Celery screenshot](/assets/images/best-practices/celery.png)

Jeśli myśl o mówieniu "nie" przeraża cię, nie jesteś sam. Jak ujął to @jessfraz w [The Art of Closing](https://blog.jessfraz.com/post/the-art-of-closing/):

> Rozmawiałem z opiekunami kilku różnych projektów open source, Mesos, Kubernetes, Chromium i wszyscy zgadzają się, że jedną z najtrudniejszych części bycia opiekunem jest mówienie "nie" aktualizacjom, których nie chcesz.

Nie czuj się winny, że nie chcesz zaakceptować czyichś kontrybucji. Pierwsza zasada open source, [zgodnie z](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"Nie" jest tymczasowe, "tak" jest na zawsze._ Chociaż empatyzowanie z entuzjazmem innej osoby jest dobrą rzeczą, odrzucenie wkładu to nie to samo, co odrzucenie stojącej za nim osoby.

Finalnie, jeśli wkład nie jest wystarczająco dobry, nie masz obowiązku go zaakceptować. Bądź uprzejmy i elastyczny, gdy ludzie wnoszą swój wkład w projekt, ale akceptuj tylko zmiany, które twoim zdaniem poprawią projekt. Im częściej ćwiczysz mówienie "nie", tym łatwiejsze się staje. Obiecujemy.

### Beądź proaktywny

To reduce the volume of unwanted contributions in the first place, explain your project's process for submitting and accepting contributions in your contributing guide.

If you're receiving too many low-quality contributions, require that contributors do a bit of work beforehand, for example:

- Fill out a issue or PR template/checklist
- Open an issue before submitting a PR

If they don't follow your rules, close the issue immediately and point to your documentation.

While this approach may feel unkind at first, being proactive is actually good for both parties. It reduces the chance that someone will put in many wasted hours of work into a pull request that you aren't going to accept. And it makes your workload easier to manage.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikemcquaid?s=180" class="pquote-avatar" alt="avatar">
  Ideally, explain to them and in a CONTRIBUTING.md file how they can get a better indication in the future on what would or would not be accepted before they begin the work.
  <p markdown="1" class="pquote-credit">
— @MikeMcQuaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Sometimes, when you say no, your potential contributor may get upset or criticize your decision. If their behavior becomes hostile, [take steps to defuse the situation](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) or even remove them from your community, if they're not willing to collaborate constructively.

### Embrace mentorship

Maybe someone in your community regularly submits contributions that don't meet your project's standards. It can be frustrating for both parties to repeatedly go through rejections.

If you see that someone is enthusiastic about your project, but needs a bit of polish, be patient. Explain clearly in each situation why their contributions don't meet the expectations of the project. Try pointing them to an easier or less ambiguous task, like an issue marked _"good first issue,"_ to get their feet wet. If you have time, consider mentoring them through their first contribution, or find someone else in your community who might be willing to mentor them.

## Leverage your community

You don't have to do everything yourself. Your project's community exists for a reason! Even if you don't yet have an active contributor community, if you have a lot of users, put them to work.

### Share the workload

If you're looking for others to pitch in, start by asking around.

One way to gain new contributors is to explicitly [label issues that are simple enough for beginners to tackle](https://help.github.com/en/articles/helping-new-contributors-find-your-project-with-labels). GitHub will then surface these issues in various places on the platform, increasing their visibility.

When you see new contributors making repeated contributions, recognize their work by offering more responsibility. Document how others can grow into leadership roles if they wish.

Encouraging others to [share ownership of the project](../building-community/#share-ownership-of-your-project) can greatly reduce your own workload, as @lmccart discovered on her project, [p5.js](https://github.com/processing/p5.js).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lmccart?s=180" class="pquote-avatar" alt="avatar">
  I’d been saying, "Yeah, anyone can be involved, you don’t have to have a lot of coding expertise [...]." We had people sign up to come [to an event] and that’s when I was really wondering: is this true, what I’ve been saying? There are gonna be 40 people who show up, and it’s not like I can sit with each of them...But people came together, and it just sort of worked. As soon as one person got it, they could teach their neighbor.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does "Open Source" Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39)
  </p>
</aside>

If you need to step away from your project, either on hiatus or permanently, there's no shame in asking someone else to take over for you.

If other people are enthusiastic about its direction, give them commit access or formally hand over control to someone else. If someone forked your project and is actively maintaining it elsewhere, consider linking to the fork from your original project. It's great that so many people want your project to live on!

@progrium [found that](https://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documenting the vision for his project, [Dokku](https://github.com/dokku/dokku), helped those goals live on even after he stepped away from the project:

> I wrote a wiki page describing what I wanted and why I wanted it. For some reason it came as a surprise to me that the maintainers started moving the project in that direction! Did it happen exactly how I'd do it? Not always. But it still brought the project closer to what I wrote down.

### Let others build the solutions they need

If a potential contributor has a different opinion on what your project should do, you may want to gently encourage them to work on their own fork.

Forking a project doesn't have to be a bad thing. Being able to copy and modify projects is one of the best things about open source. Encouraging your community members to work on their own fork can provide the creative outlet they need, without conflicting with your project's vision.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/geerlingguy?s=180" class="pquote-avatar" alt="avatar">
  I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

The same applies to a user who really wants a solution that you simply don't have the bandwidth to build. Offering APIs and customization hooks can help others meet their own needs, without having to modify the source directly. @orta [found that](https://artsy.github.io/blog/2016/07/03/handling-big-projects/) encouraging plugins for CocoaPods led to "some of the most interesting ideas":

> It's almost inevitable that once a project becomes big, maintainers have to become a lot more conservative about how they introduce new code. You become good at saying "no", but a lot of people have legitimate needs. So, instead you end up converting your tool into a platform.

## Bring in the robots

Just as there are tasks that other people can help you with, there are also tasks that no human should ever have to do. Robots are your friend. Use them to make your life as a maintainer easier.

### Require tests and other checks to improve the quality of your code

One of the most important ways you can automate your project is by adding tests.

Tests help contributors feel confident that they won't break anything. They also make it easier for you to review and accept contributions quickly. The more responsive you are, the more engaged your community can be.

Set up automatic tests that will run on all incoming contributions, and ensure that your tests can easily be run locally by contributors. Require that all code contributions pass your tests before they can be submitted. You'll help set a minimum standard of quality for all submissions. [Required status checks](https://help.github.com/articles/about-required-status-checks/) on GitHub can help ensure no change gets merged without your tests passing.

If you add tests, make sure to explain how they work in your CONTRIBUTING file.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/edunham?s=180" class="pquote-avatar" alt="avatar">
  I believe that tests are necessary for all code that people work on. If the code was fully and perfectly correct, it wouldn't need changes – we only write code when something is wrong, whether that's "It crashes" or "It lacks such-and-such a feature". And regardless of the changes you're making, tests are essential for catching any regressions you might accidentally introduce.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Use tools to automate basic maintenance tasks

The good news about maintaining a popular project is that other maintainers have probably faced similar issues and built a solution for it.

There are a [variety of tools available](https://github.com/showcases/tools-for-open-source) to help automate some aspects of maintenance work. A few examples:

- [semantic-release](https://github.com/semantic-release/semantic-release) automates your releases
- [mention-bot](https://github.com/facebook/mention-bot) mentions potential reviewers for pull requests
- [Danger](https://github.com/danger/danger) helps automate code review
- [no-response](https://github.com/probot/no-response) closes issues where the author hasn't responded to a request for more information
- [dependabot-preview](https://github.com/marketplace/dependabot-preview) checks your dependency files every day for outdated requirements and opens individual pull requests for any it finds

For bug reports and other common contributions, GitHub has [Issue Templates and Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), which you can create to streamline the communication you receive. @TalAter made a [Choose Your Own Adventure guide](https://www.talater.com/open-source-templates/#/) to help you write your issue and PR templates.

To manage your email notifications, you can set up [email filters](https://github.com/blog/2203-email-updates-about-your-own-activity) to organize by priority.

If you want to get a little more advanced, style guides and linters can standardize project contributions and make them easier to review and accept.

However, if your standards are too complicated, they can increase the barriers to contribution. Make sure you're only adding enough rules to make everyone's lives easier.

If you're not sure which tools to use, look at what other popular projects do, especially those in your ecosystem. For example, what does the contribution process look like for other Node modules? Using similar tools and approaches will also make your process more familiar to your target contributors.

## It's okay to hit pause

Open source work once brought you joy. Maybe now it's starting to make you feel avoidant or guilty.

Perhaps you're feeling overwhelmed or a growing sense of dread when you think about your projects. And meanwhile, the issues and pull requests pile up.

Burnout is a real and pervasive issue in open source work, especially among maintainers. As a maintainer, your happiness is a non-negotiable requirement for the survival of any open source project.

Although it should go without saying, take a break! You shouldn't have to wait until you feel burned out to take a vacation. @brettcannon, a Python core developer, decided to take [a month-long vacation](https://snarky.ca/why-i-took-october-off-from-oss-volunteering/) after 14 years of volunteer OSS work.

Just like any other type of work, taking regular breaks will keep you refreshed, happy, and excited about your work.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/danielbachhuber?s=180" class="pquote-avatar" alt="avatar">
  In maintaining WP-CLI, I've discovered I need to make myself happy first, and set clear boundaries on my involvement. The best balance I've found is 2-5 hours per week, as a part of my normal work schedule. This keeps my involvement a passion, and from feeling too much like work. Because I prioritize the issues I'm working on, I can make regular progress on what I think is most important.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://runcommand.io/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Sometimes, it can be hard to take a break from open source work when it feels like everybody needs you. People may even try to make you feel guilty for stepping away.

Do your best to find support for your users and community while you're away from a project. If you can't find the support you need, take a break anyway. Be sure to communicate when you're not available, so people aren't confused by your lack of responsiveness.

Taking breaks applies to more than just vacations, too. If you don't want to do open source work on weekends, or during work hours, communicate those expectations to others, so they know not to bother you.

## Take care of yourself first!

Maintaining a popular project requires different skills than the earlier stages of growth, but it's no less rewarding. As a maintainer, you'll practice leadership and personal skills on a level that few people get to experience. While it's not always easy to manage, setting clear boundaries and only taking on what you're comfortable with will help you stay happy, refreshed, and productive.
