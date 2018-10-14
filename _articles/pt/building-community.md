---
lang: pt
title: Construindo comunidades acolhedoras
description: Como construir uma comunidade que encorage pessoas a utilizar, contribuir e evangelizar o seu projedo
class: building
toc:
  setting-your-project-up-for-success: "Configurando o seu projeto para o sucesso"
  growing-your-community: "Crescendo a sua comunidade"
  resolving-conflicts: "Resolvendo conflitos"
order: 4
image: /assets/images/cards/building.png
related:
  - best-practices
  - coc
---

## Preparando o seu projeto para o sucesso

Você lançou o seu projeto, está espalhando a palavra, e as pessoas estão dando uma olhada. Massa! Porém, e agora, como mantê-las por perto?

Uma comunidade acolhedora é um investimento no futuro do seu projeto e em sua reputação. Se o seu projeto está apenas começando a ter suas primeiras contribuições, comece dando aos primeiros contribuidores uma experiência positiva e faça com que seja fácil para eles continuar contribuindo.

### Faça com que as pessoas sintam-se bem-vindas

Uma maneira de pensar sobre a comunidade do seu projeto é através do que @MikeMcQuaid chama de [contributor funnel](https://mikemcquaid.com/2018/08/14/the-open-source-contributor-funnel-why-people-dont-contribute-to-your-open-source-project/):

![Contributor funnel](/assets/images/building-community/contributor_funnel_mikemcquaid.png)

A medida em que você constrói a sua comunidade, considere como uma pessoa no topo do funil (um usuário em potencial), pode, teoricamente, fazer o seu caminho até o fundo (um mantenedor ativo). Seu objetivo é reduzir o atrito presente em cada etapa da experiência do contribuidor. Quando as pessoas têm vitórias fáceis, elas são incentivadas a fazer mais.

Comece com a documentação:

* **Faça com que seja fácil, para outras pessoas, utilizarem seu projeto.** [Um README amigável](../starting-a-project/#writing-a-readme) e exemplos claros de codígo tornarão mais fáceis o inicio e ambientação de qualquer pessoa chegando ao seu projeto.
* **Explique claramente como contribuir**, usando [seu arquivo CONTRIBUTING](../starting-a-project/#writing-your-contributing-guidelines) e mantendo suas _issues_ atualizadas.

A [GitHub's 2017 Open Source Survey](http://opensourcesurvey.org/2017/) mostrou que uma documentação incompleta ou confusa é um dos maiores problemas para usuários _open source_. Uma boa documentação é uma porta de entrada para que pessoas interajam com o seu projeto. Eventualmente, alguém irá abrir uma _issue_ ou _pull request_. Use essas interações como oportunidades para trazer essas pessoas para o fundo do funil.

* **Quando alguém chegar ao seu projeto, agradeça pelo interesse** Basta somente uma experiência negativa para que as pessoas não queiram voltar.
* **Seja responsivo.** Se você não responder às _issues_ por um mês, as chances são de que as pessoas que as criaram já tenham se esquecido do seu projeto.
* **Seja mente-aberta sobre os tipos de contribuições que você irá aceitar** Muitos contribuidores começam com um _bug report_ ou um pequeno _fix_. Existem [diversas formas de contribuir](../how-to-contribute/#what-it-means-to-contribute) com um projeto. Faça com que as pessoas ajudem da forma como elas quiserem.
* **Se houver alguma contribuição que você não concorde,** agradeça pela ideia [explique por que](../best-practices/#learning-to-say-no) ela não se encaixa no escopo do projeto, apontando para a documentação relevante, caso você a possua.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  Contribuir com o _open source_ é mais fácil para alguns do que para outros. Há bastante medo em receber reclamações por não ter feito algo da forma certa ou simplesmente por não se encaixar. (...) Dar aos contribuidores um lugar para contribuir com pouca proficiência técnica (documentação, _markdown_ de conteúdo web, etc) reduz significativamente tais receios.
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Growing a contributor base in modern open source"](https://opensource.com/life/16/5/growing-contributor-base-modern-open-source)
  </p>
</aside>

A maior parte dos contribuidores _open source_ são contribuidores casuais: pessoas que contribuem com um projeto apenas ocasionalmente. Um contribuidor casual pode não ter tempo para acelerar completamente o seu projeto, portanto o seu trabalho é fazer com que seja mais fácil, para eles, contribuir.

Encorajar outros contribuidores é, também, um investimento em si mesmo. Quando você empondera seus maiores fãs a tocar o trabalho com o qual eles estão empolgados, há menos pressão para "fazer tudo você mesmo".

### Documente tudo

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/janl?s=180" class="pquote-avatar" alt="avatar">
  Você alguma vez já esteve presente em um evento (de tecnologia), onde não conhecia ninguém, porém o restante das pessoas parecia se reunir em grupos e batiam papo como velhos amigos? (...) Agora imagine que você quer contribuir em um projeto _open source_, mas não consegue enxergar por que ou como isso está acontecendo.
  <p markdown="1" class="pquote-credit">
— @janl, ["Sustainable Open Source"](http://writing.jan.io/2015/11/20/sustainable-open-source.html)
  </p>
</aside>

Quando você inicia um novo projeto, pode parecer natural manter o seu trabalho privado. Todavia, projetos _open source_ prosperam quando você documenta seu processo em público.

Quando você escreve as coisas, mais pessoas podem participar a cada passo do caminho. Você pode obter ajuda em algo que você nem sabia que precisava.

Seja transparente sobre o roteiro do projeto, o tipo de contribuição que vocẽ está buscando, como os contribuidores são avaliados, ou por que você tomou certas decisões.

Se você reparar em vários usuários enfrentando os mesmos problemas, documente as soluções no README.

Sobre encontros e reuniões, considere publicar suas notas ou conclusões em uma _issue_ relevante. O retorno que você obterá com desse tipo de transparência pode surpreênde-lo.

Documentar tudo aplica-se, também, ao trabalho que você produz. Se você está trabalhando em uma atualização substancial de um projeto, coloque isso em um _pull request_ e marque como um trabalho em andamento (_work in progress_, WIP). Dessa forma, outras pessoas podem se sentir envolvidas no processo desde o início.

### Seja responsivo

Conforme você [promove seu projeto](../finding-users), as pessoas terão alguma opnião sobre você. Elas pordem ter questionamentos sobre como as coisas funcionam, ou podem precisar de ajuda para começar.

Tente ser responsivo quando alguém registra uma _issue_, submete um _pull request_, ou faz alguma pergunta sobre o seu projeto. Quando vocẽ responde rapidamente, as pessoas se sentirão parte de um diálogo e mais entusiasmadas em participar.

Mesmo que não possa analisar o _pull request_ imediatamente, reconhecê-lo cedo ajuda a aumentar o engajamento. Este é um exemplo de como @tdreyno respondeu um _pull request_ no [Middleman](https://github.com/middleman/middleman/pull/1466):

![Middleman pull request](/assets/images/building-community/middleman_pr.png)

[Um estudo da Mozilla mostrou que](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) contribuidores que tiveram os seus códigos revisados, em até 48 horas, voltaram a contribuir novamente no projeto, um número substancialmente maior de vezes. 

Conversas sobre o seu projeto também podem estar acontecendo em outros lugares da internet, como no Stack Overflow, Twitter, ou Reddit. Você pode configurar as notificações em alguns desses locais, para ser alertado sempre que alguém menciona o seu projeto.

### Dê a sua comunidade um lugar para se reunir

Existem duas razões para dar a sua comunidade um lugar para se reunir.

A primera razão é para para a própria comunidade. Ajude as pessoas a conhecer umas as outras. Pessoas com interesses em comum irão inevitavelmente querer um lugar para falar sobre isso. E quando a comunicação é pública e acessível, qualquer um pode ler os arquivos anteriores para se ambientar, pegar o ritmo e participar.

A segunda razão é para você. Se você não der às pessoas um lugar público para falar sobre o seu projeto, elas provavelmente irão entrar em contato diretamente com você. No início, pode parecer razoavelmente fácil responder à mensagens privadas "somente desta vez". Porém ao longo do tempo, especialmente se seu projeto se tornar popular, você se sentirá exausto. Resista à tentação de se comunicar com as pessoas sobre o seu projeto em privado. Ao invés disso, direcione-as a um canal público.

A comunicação pública pode ser tão simples quanto direcionar as pessoas para uma _issue_ aberta ao invés de emails diretos ou comentários no seu blog. Você também pode configurar uma lista de emails, ou criar uma conta no Twitter, Slack, ou canal IRC, para as pessoas conversarem sobre o seu projeto. Alternativamente, tente todas essas opções!

O [Kubernetes kops](https://github.com/kubernetes/kops#getting-involved) reserva horários durante o expediente, a cada duas semanas, para ajudar os membros da comunidade:

> O Kops também tem tempo reservado, a cada duas semanas, para oferecer ajuda e orientação para a comunidade. Os mantenedores do Kops concordaram em reservar um tempo especialmente dedicado ao trabalho com os novatos, ajudando com PRs e discutindo novas _features_.

Excessões dignas de nota a comunicação pública são: 1) problemas de segurança e 2) violações sensíveis de código de conduta. Você deve sempre disponibilizar, às pessoas, um meio de comunicação privado para tais fins. Se você não quer usar o seu email pessoal, faça um dedicado.

## Fazendo sua comunidade crescer

Comunidades são extremamente poderosas. Esse poder pode ser uma benção ou uma maldição, dependendo de como você lida com isso. A medida em que sua comunidade crescer, sempre haverão maneiras de ajudá-la a se tornar uma força de construção, não destruição.

### Não tolere mau comportamento

Qualquer projeto popular irá, inevitavelmente, atrair pessoas que prejudicam, ao invés de ajudar, sua comunidade. Eles podem iniciar debates desnecessários, discutir sobre questões triviais ou praticar _bullying_ contra outras pessoas.

Dê o melhor de si para adotar uma política de tolerância zero contra esse tipo de gente. Se não forem controladas, elas faráo com que outras pessoas na sua comunidade se sintam desconfortáveis, podendo até mesmo chegarem a abandoná-la.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/karissa?s=180" class="pquote-avatar" alt="avatar">
  A verdade é que ter uma comunidade solidária é uma característica chave. Eu nunca poderia ter feito este trabalho sem a ajuda dos meus colegas, estranhos amigáveis da internet, e canais IRC tagarelas. (...) Não se contente com menos. Não se contente com idiotas.
  <p markdown="1" class="pquote-credit">
— @karissa, ["How to Run a FOSS Project"](https://karissa.github.io/post/okf-de)
  </p>
</aside>

Debates recorrentes sobre aspectos triviais do seu projeto distraem os outros, incluindo você, das tarefas importantes. Novas pessoas que chegarem ao seu projeto poderão ver tais conversas e não querer participar.

Quando notar um comportamento negativo acontecendo no seu projeto, chame a atenção publicamente. Explique, em um tom gentil, porém firme, por que o comportamento não é aceitável. Se o problema persistir, você pode [pedir para que os envolvidos saiam](../code-of-conduct/#enforcing-your-code-of-conduct). Seu [código de conduta](../code-of-conduct/) pode ser uma guia construtivo para essas conversas.

### Meet contributors where they're at

Good documentation only becomes more important as your community grows. Casual contributors, who may not otherwise be familiar with your project, read your documentation to quickly get the context they need.

In your CONTRIBUTING file, explicitly tell new contributors how to get started. You may even want to make a dedicated section for this purpose. [Django](https://github.com/django/django), for example, has a special landing page to welcome new contributors.

![Django new contributors page](/assets/images/building-community/django_new_contributors.png)

In your issue queue, label bugs that are suitable for different types of contributors: for example, [_"first timers only"_](https://medium.com/@kentcdodds/first-timers-only-78281ea47455#.g1k01jy05), _"good first issue"_, or _"documentation"_. [These labels](https://github.com/librariesio/libraries.io/blob/6afea1a3354aef4672d9b3a9fc4cc308d60020c8/app/models/github_issue.rb#L8-L14) make it easy for someone new to your project to quickly scan your issues and get started.

Finally, use your documentation to make people feel welcome at every step of the way.

You will never interact with most people who land on your project. There may be contributions you didn't receive because somebody felt intimidated or didn't know where to get started. Even a few kind words can keep someone from leaving your project in frustration.

For example, here's how [Rubinius](https://github.com/rubinius/rubinius/) starts [its contributing guide](https://github.com/rubinius/rubinius/blob/master/.github/contributing.md):

> We want to start off by saying thank you for using Rubinius. This project is a labor of love, and we appreciate all of the users that catch bugs, make performance improvements, and help with documentation. Every contribution is meaningful, so thank you for participating. That being said, here are a few guidelines that we ask you to follow so we can successfully address your issue.

### Share ownership of your project

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/sarahsharp?s=180" class="pquote-avatar" alt="avatar">
  Your leaders will have different opinions, as all healthy communities should! However, you need to take steps to ensure the loudest voice doesn't always win by tiring people out, and that less prominent and minority voices are heard.
  <p markdown="1" class="pquote-credit">
— @sarahsharp, ["What makes a good community?"](http://sarah.thesharps.us/2015/10/06/what-makes-a-good-community/)
  </p>
</aside>

People are excited to contribute to projects when they feel a sense of ownership. That doesn't mean you need to turn over your project's vision or accept contributions you don't want. But the more you give credit to others, the more they'll stick around.

See if you can find ways to share ownership with your community as much as possible. Here are some ideas:

* **Resist fixing easy (non-critical) bugs.** Instead, use them as opportunities to recruit new contributors, or mentor someone who'd like to contribute. It may seem unnatural at first, but your investment will pay off over time. For example, @michaeljoseph asked a contributor to submit a pull request on a [Cookiecutter](https://github.com/audreyr/cookiecutter) issue below, rather than fix it himself.

![Cookiecutter issue](/assets/images/building-community/cookiecutter_submit_pr.png)

* **Start a CONTRIBUTORS or AUTHORS file in your project** that lists everyone who's contributed to your project, like [Sinatra](https://github.com/sinatra/sinatra/blob/master/AUTHORS.md) does.

* If you've got a sizable community, **send out a newsletter or write a blog post** thanking contributors. Rust's [This Week in Rust](https://this-week-in-rust.org/) and Hoodie's [Shoutouts](http://hood.ie/blog/shoutouts-week-24.html) are two good examples.

* **Give every contributor commit access.** @felixge found that this made people [more excited to polish their patches](https://felixge.de/2013/03/11/the-pull-request-hack.html), and he even found new maintainers for projects that he hadn't worked on in awhile.

* If your project is on GitHub, **move your project from your personal account to an [Organization](https://help.github.com/articles/creating-a-new-organization-account/)** and add at least one backup admin. Organizations make it easier to work on projects with external collaborators.

The reality is that [most projects only have](https://peerj.com/preprints/1233.pdf) one or two maintainers who do most of the work. The bigger your project, and the bigger your community, the easier it is to find help.

While you may not always find someone to answer the call, putting a signal out there increases the chances that other people will pitch in. And the earlier you start, the sooner people can help.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/gr2m?s=180" class="pquote-avatar" alt="avatar">
  \[It's in your\] best interest to recruit contributors who enjoy and who are capable of doing the things that you are not. Do you enjoy coding, but not answering issues? Then identify those individuals in your community who do and let them have it.
  <p markdown="1" class="pquote-credit">
— @gr2m, ["Welcoming Communities"](http://hood.ie/blog/welcoming-communities.html)
  </p>
</aside>

## Resolving conflicts

In the early stages of your project, making major decisions is easy. When you want to do something, you just do it.

As your project becomes more popular, more people will take interest in the decisions you make. Even if you don't have a big community of contributors, if your project has a lot of users, you'll find people weighing in on decisions or raising issues of their own.

For the most part, if you've cultivated a friendly, respectful community and documented your processes openly, your community should be able to find resolution. But sometimes you run into an issue that's a bit harder to address.

### Set the bar for kindness

When your community is grappling with a difficult issue, tempers may rise. People may become angry or frustrated and take it out on one another, or on you.

Your job as a maintainer is to keep these situations from escalating. Even if you have a strong opinion on the topic, try to take the position of a moderator or facilitator, rather than jumping into the fight and pushing your views. If someone is being unkind or monopolizing the conversation, [act immediately](../building-community/#dont-tolerate-bad-actors) to keep discussions civil and productive.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kennethreitz?s=180" class="pquote-avatar" alt="avatar">
  As a project maintainer, it's extremely important to be respectful to your contributors. They often take what you say very personally.
  <p markdown="1" class="pquote-credit">
— @kennethreitz, ["Be Cordial or Be on Your Way"](https://www.kennethreitz.org/essays/be-cordial-or-be-on-your-way)
  </p>
</aside>

Other people are looking to you for guidance. Set a good example. You can still express disappointment, unhappiness, or concern, but do so calmly.

Keeping your cool isn't easy, but demonstrating leadership improves the health of your community. The internet thanks you.

### Treat your README as a constitution

Your README is [more than just a set of instructions](../starting-a-project/#writing-a-readme). It's also a place to talk about your goals, product vision, and roadmap. If people are overly focused on debating the merit of a particular feature, it may help to revisit your README and talk about the higher vision of your project. Focusing on your README also depersonalizes the conversation, so you can have a constructive discussion.

### Focus on the journey, not the destination

Some projects use a voting process to make major decisions. While sensible at first glance, voting emphasizes getting to an "answer," rather than listening to and addressing each other's concerns.

Voting can become political, where community members feel pressured to do each other favors or vote a certain way. Not everybody votes, either, whether it's the [silent majority](https://ben.balter.com/2016/03/08/optimizing-for-power-users-and-edge-cases/#the-silent-majority-of-users) in your community, or current users who didn't know a vote was taking place.

Sometimes, voting is a necessary tiebreaker. As much as you are able, however, emphasize ["consensus seeking"](https://en.wikipedia.org/wiki/Consensus-seeking_decision-making) rather than consensus.

Under a consensus seeking process, community members discuss major concerns until they feel they have been adequately heard. When only minor concerns remain, the community moves forward. "Consensus seeking" acknowledges that a community may not be able to reach a perfect answer. Instead, it prioritizes listening and discussion.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lee-dohm?s=180" class="pquote-avatar" alt="avatar">
  Part of the reason why a voting system doesn't exist for Atom Issues is because the Atom team isn't going to follow a voting system in all cases. Sometimes we have to choose what we feel is right even if it is unpopular. (...) What I can offer and pledge to do...is that it is my job to listen to the community.
  <p markdown="1" class="pquote-credit">
— @lee-dohm on [Atom's decisionmaking process](https://discuss.atom.io/t/prioritize-issues-feature-requests-based-on-voting-system/27642/2)
  </p>
</aside>

Even if you don't actually adopt a consensus seeking process, as a project maintainer, it's important that people know you are listening. Making other people feel heard, and committing to resolving their concerns, goes a long way to diffuse sensitive situations. Then, follow up on your words with actions.

Don't rush into a decision for the sake of having a resolution. Make sure that everybody feels heard and that all information has been made public before moving toward a resolution.

### Keep the conversation focused on action

Discussion is important, but there is a difference between productive and unproductive conversations.

Encourage discussion so long as it is actively moving towards resolution. If it's clear that conversation is languishing or going off-topic, jabs are getting personal, or people are quibbling about minor details, it's time to shut it down.

Allowing these conversations to continue is not only bad for the issue at hand, but bad for the health of your community. It sends a message that these types of conversations are permitted or even encouraged, and it can discourage people from raising or resolving future issues.

With every point made by you or by others, ask yourself, _"How does this bring us closer to a resolution?"_

If the conversation is starting to unravel, ask the group, _"Which steps should we take next?"_ to refocus the conversation.

If a conversation clearly isn't going anywhere, there are no clear actions to be taken, or the appropriate action has already been taken, close the issue and explain why you closed it.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kfogel?s=180" class="pquote-avatar" alt="avatar">
  Guiding a thread toward usefulness without being pushy is an art. It won't work to simply admonish people to stop wasting their time, or to ask them not to post unless they have something constructive to say. (...) Instead, you have to suggest conditions for further progress: give people a route, a path to follow that leads to the results you want, yet without sounding like you're dictating conduct.
  <p markdown="1" class="pquote-credit">
— @kfogel, [_Producing OSS_](http://producingoss.com/en/producingoss.html#common-pitfalls)
  </p>
</aside>

### Pick your battles wisely

Context is important. Consider who is involved in the discussion and how they represent the rest of the community.

Is everybody in the community upset about, or even engaged with, this issue? Or is a lone troublemaker? Don't forget to consider your silent community members, not just the active voices.

If the issue does not represent the broader needs of your community, you may just need to acknowledge the concerns of a few people. If this is a recurring issue without a clear resolution, point them to previous discussions on the topic and close the thread.

### Identify a community tiebreaker

With a good attitude and clear communication, most difficult situations are resolvable. However, even in a productive conversation, there can simply be a difference in opinion on how to proceed. In these cases, identify an individual or group of people that can serve as a tiebreaker.

A tiebreaker could be the primary maintainer of the project, or it could be a small group of people who make a decision based on voting. Ideally, you've identified a tiebreaker and the associated process in a GOVERNANCE file before you ever have to use it.

Your tiebreaker should be a last resort. Divisive issues are an opportunity for your community to grow and learn. Embrace these opportunities and use a collaborative process to move to a resolution wherever possible.

## Community is the ❤️ of open source

Healthy, thriving communities fuel the thousands of hours poured into open source every week. Many contributors point to other people as the reason for working - or not working - on open source. By learning how to tap into that power constructively, you'll help someone out there have an unforgettable open source experience.
