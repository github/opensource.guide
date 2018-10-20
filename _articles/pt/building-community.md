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

### Conheça os contribuidores onde eles estão

Uma boa documentação só se torna importante a medida em que sua comunidade cresce. Contribuidores casuais, que podem não estar familizariados com o seu projeto, leem sua documentação para rapidamente pegarem o contexto de que precisam.

Em seu arquivo CONTRIBUTING, deixe claro, aos novos contribuidores, como começar. Você pode até mesmo dedicar uma seção inteira para esse propósito. O [Django](https://github.com/django/django), por exemplo, tem uma _landing page_ especial para receber os novos contribuidores.

![Django new contributors page](/assets/images/building-community/django_new_contributors.png)

Na sua fila de _issues_, rotule os bugs de acordo com os diferentes tipos de contribuidores: por exemplo, [_"somente os novatos"_](https://medium.com/@kentcdodds/first-timers-only-78281ea47455#.g1k01jy05), _"uma boa primeira issue"_, ou _"documentação"_. [Esses rótulos](https://github.com/librariesio/libraries.io/blob/6afea1a3354aef4672d9b3a9fc4cc308d60020c8/app/models/github_issue.rb#L8-L14) fazem com que seja fácil, para alguém novo ao seu projeto, navegar entre as _issues_ e começar a contribuir.

Por fim, use a sua documentação para fazer as pessoas se sentirem bem-vindas a cada passo do caminho.

Você não interagirá com a maior parte das pessoas que chegarem ao seu projeto. Podem haver contribuições que você não recebeu porque alguém se sentiu intimidado ou não soube como começar. Até mesmo algumas palavras gentis podem fazer com que alguém não deixe, frustradamente, o seu projeto.

Por exemplo, veja como [Rubinius](https://github.com/rubinius/rubinius/) introduz o [seu guia de contribuição](https://github.com/rubinius/rubinius/blob/master/.github/contributing.md):

> Em primeiro lugar, gostaríamos de agradecer por usar o Rubinus. Este projeto é um trabalho de amor, e apreciamos todos os usuários que capturam bugs, fazem melhorias de desempenho, e ajudam com a documentação. Toda contribuição é importante, então obrigado por participar. Dito isso, aqui estão algumas orientações que pedimos que siga, de modo que possamos ter sucesso em identificar o seu probelma.

### Compartilhe a responsabilidade pelo seu projeto

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/sarahsharp?s=180" class="pquote-avatar" alt="avatar">
  Seus líderes terão opniões diferentes, como toda comunidade saudável deve ser! Porém, você precisa tomar certas atitudes para assegurar que a voz mais alta não seja sempre a vencedora, por deixar as outras pessoas cansadas, e que minorias e vozes menos proeminentes sejam ouvidas.
  <p markdown="1" class="pquote-credit">
— @sarahsharp, ["What makes a good community?"](http://sarah.thesharps.us/2015/10/06/what-makes-a-good-community/)
  </p>
</aside>

As pessoas se sentem motivadas em contribuir com projetos, de um modo geral, quando possuem um senso de propriedade, de responsabilidade, sobre ele, isto é, se sentem donas. Isso não significa que você precisa mudar a visão do seu projeto ou aceitar contribuições que não queira. Porém, quanto mais você dá crédito às outras pessoas, mais elas se manterão por perto.

Procure encontrar maneiras de compartilhar a propriedade com a sua comunidade o máximo que puder. Aqui estão algumas idéias:

* **Resista em consertar bugs fáceis (não-críticos).** Em vez disso, use-os como oportunidades de recrutar novos contribuidores, ou mentorar alguém que gostaria de contribuir. Pode parecer meio artificial no início, porém seu investimento irá render ao longo do tempo. Por exemplo, @michaeljoseph pediu para um contribuidor submeter um _pull request_ em uma _issue_ do [Cookiecutter](https://github.com/audreyr/cookiecutter), abaixo, ao invés de consertá-la ele mesmo.

![Cookiecutter issue](/assets/images/building-community/cookiecutter_submit_pr.png)

* **Crie um arquivo CONTRIBUTORS ou AUTHORS em seu projeto** que liste todos os que contribuiram para o seu projeto, como o [Sinatra](https://github.com/sinatra/sinatra/blob/master/AUTHORS.md) faz.

* Se você possui uma comunidade de tamanho razoável, **envie uma _newsletter_ ou escreva um _post_ em um blog** agradecendo aos contribuidores. A [This Week in Rust](https://this-week-in-rust.org/), do Rust, e a [Shoutouts](http://hood.ie/blog/shoutouts-week-24.html), da Hoodie, são dois bons exemplos.

* **Dê permissão de _commit_ para cada um dos contribuidores.** @felixge descobriu que isso fez as pessoas [mais entusiasmadas em polir suas modificações](https://felixge.de/2013/03/11/the-pull-request-hack.html), e até mesmo descobriu novos mantenedores para projetos que ele não havia trabalhado por algum tempo.

* Se o seu projeto está no GitHub, **mova-o da sua conta pessoal para uma [Organização](https://help.github.com/articles/creating-a-new-organization-account/)** e adicione pelo menos um adminsitrador de _backup_. As organizações fazem com que seja mais fácil trabalhar em projetos com colaboradores externos.

A verdade é que [a maioria dos projetos tem somente](https://peerj.com/preprints/1233.pdf) um ou dois mantenedores que fazem a maior parte do trabalho. Quanto maior o seu projeto, e maior a sua comunidade, mais fácil é encontrar ajuda.

Muito embora nem sempre você encontre alguém para responder ao chamado, colocar um aviso em algum lugar aumenta a chance de  que outras pessoas contribuam. E quanto antes você começar, mais cedo as pessoas poderão ajudar.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/gr2m?s=180" class="pquote-avatar" alt="avatar">
  \[É do seu\] maior interesse recrutar membros que gostem e sejam capazes de fazer coisas que você não seja. Você gosta de programar, mas não de responder a _issues_? Então identifique aqueles individuos, na sua comunidade, que o façam e deixe-os fazê-lo.
  <p markdown="1" class="pquote-credit">
— @gr2m, ["Welcoming Communities"](http://hood.ie/blog/welcoming-communities.html)
  </p>
</aside>

## Resolvendo conflitos

No início do seu projeto, tomar decisões importantes é fácil. Quando você precisa de algo, basta fazê-lo.

Na medida em que seu projeto se torna mais popular, mais pessoas se interessam pelas decisões que você toma. Mesmo que você não tenha uma grande comunidade de contribuidores, se seu projeto tem muitos usuários, você irá encontrar pessoas pesando suas decisões ou abrindo _issues_ por conta própria.

Na maior parte das vezes, se você cultivou uma comunidade amigável e respeitosa, e documentou seus processos abertamente, sua comindade deverá ser capaz de chegar a alguma resolução. Mas algumas vezes você se depara com um problema um pouco mais difícil de resolver.

### Mantenha o padrão de gentileza

Quando sua comunidade estiver enfrentando problemas com uma _issue_ difícil, os ânimos podem ser aflorados. As pessoas podem ficar com raiva ou frustradas e descontar isso um no outro, ou em você.

Seu trabalho como um mantenedor é prevenir que tais situações cresçam, escalem. Mesmo que tenha uma forte opnião no tópico, tente tomar a posição de um moderador ou facilitador, ao invés de entrar na briga e forçar seus pontos de vista. Se alguém estiver sendo indelicado ou monoponilzando a conversa, [aja imediatamente](../building-community/#dont-tolerate-bad-actors) para manter as discussões civilizadas e produtivas.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kennethreitz?s=180" class="pquote-avatar" alt="avatar">
  Como um mantenedor de projeto, é extremamente importante ser respeitoso para com seus contribuidores. Eles frequentemente levam o que você fala para o lado pessoal.
  <p markdown="1" class="pquote-credit">
— @kennethreitz, ["Be Cordial or Be on Your Way"](https://www.kennethreitz.org/essays/be-cordial-or-be-on-your-way)
  </p>
</aside>

Outras pessoas estão esperando por sua orientação. Seja um bom exemplo. Você ainda pode expressar desapontamento, infelicidade, ou preocupação, mas faça isso de maneira calma.

Manter a calma não é fácil, porém demosntrar liderança melhora a saúde da sua comunidade. A internet agradece.

### Trate o seu README como uma constituição

Seu README é [mais do que um conjunto de instruções](../starting-a-project/#writing-a-readme). É também um lugar para discutir sobre os seus objetivos, visão de produto, e roteiro. Se as pessoas estão excessivamente focadas em debater o mérito de uma _feature_ em particular, revisitar o seu README e falar sobre o seu projeto, de um ponto de vista mais alto nível, pode ajudar. Focar no seu README também despersonaliza a conversa, de modo que você pode ter uma discussão construtiva.

### Foque na jornada, não no destino

Alguns projetos utilizam um processo de votação para tomada de decisões importantes. Embora sensível à primeira vista, votar enfatiza chegar a uma "resposta", ao invés de escutar e atender aos anseios de cada um.

Votar pode se tornar político, de um modo em que os membros da comunidade se sentem precionados a prestar favores uns aos outros ou a votar de uma certa maneira. Além disso, nem todo mundo vota, seja a [maioria silenciosa](https://ben.balter.com/2016/03/08/optimizing-for-power-users-and-edge-cases/#the-silent-majority-of-users) em sua comunidade, ou os atuais usuários que, na verdade, não sabiam que uma votação estava acontecendo.

As vezes, votar funciona como um desempate necessário. O máximo que puder, porém, enfatize ["a busca por um consenso"](https://en.wikipedia.org/wiki/Consensus-seeking_decision-making), ao invés de um consenso.

Sob o processo de busca por um consenso, membros da comunidade discutem questões importantes até que eles sintam que tenham tido sua voz ouvida adequadamente. Quando restam somente questões menores, a comunidade segue em frente. "A busca pelo consenso" reconhece que a comunidade pode não ser capaz de chegar a uma resposta perfeita. Ao invés disso, ela prioriza ouvir e discutir.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/lee-dohm?s=180" class="pquote-avatar" alt="avatar">
  Parte da razão do porquê um sistema de votos não existe para as _issues_ do Atom é porque o time do Atom não irá seguir um sistema de votação em todos os casos. Algumas vezes temos de escolher o que acreditamos que é certo, mesmo que isso seja impopular. (...) O que posso oferecer e promoter fazer... é que é meu trabalho ouvir a comunidade.
  <p markdown="1" class="pquote-credit">
— @lee-dohm on [Atom's decisionmaking process](https://discuss.atom.io/t/prioritize-issues-feature-requests-based-on-voting-system/27642/2)
  </p>
</aside>

Mesmo que você não adote um processo de busca por um consenso, como um mantenedor de um projeto, é importante que as pessoas saibam que você está ouvindo. Fazer com que as outras pessoas se sintam ouvidas, e assumir a responsabilidade de resolver seus anseios, é um grande passo para acalmar situações sensíveis. E então, faça suas ações corresponderem as suas palavras.

Não acelere a decisão com o objetivo de ter alguma resolução. Garanta que todos se sintam ouvidos e que toda a informação foi disponibilizada publicamente antes de se movimentar em direção a uma resolução.

### Mantenha o foco do diálogo na ação

Discussões são importantes, mas há uma diferença entre conversas produtivas e improdutivas.

Encoraje a discussão enquanto ela estiver se movendo ativamente em direção a uma resolução. Se está claro que a conversa está definhando ou tomando um rumo completamente diferente, as coisas estão sendo levadas para o lado pessoal, ou as pessoas estão discutindo sobre detalhes de menor importãncia, é hora de desligá-la.

Permitir que tais conversas continuem não é ruim somente para a atual _issue_, mas ruim para a saúde da sua comunidade. Isso passa a mensagem de que tais tipos de conversas são permitidas ou até mesmo encorajadas, e pode desencorajar pessoas a levantar ou resolver _issues_ futuras.

Com todos os pontos feitos por você ou outros, pergunte a si mesmo, _"Como isso nos apróxima de uma resolução?"_

Se o diálogo está começando se desvanecer, pergunte ao grupo, _"Quais são os próximos passos que devemos tomar?"_ para retomar o foco da conversa.

Se está claro que uma conversa não esta caminhando para nenhum lugar, não há nenhuma ação clara a ser tomada, ou a ação apropriada já foi tomada, feche a _issue_ e explique por que fez.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/kfogel?s=180" class="pquote-avatar" alt="avatar">
  Guiar uma _thread_ em direção à utilidade, sem ser insistente, é uma arte. Advertir as pessoas a parar de perder tempo não irá funcionar, ou mesmo pedir para que não postem nada a não ser que tenham algo construtivo a dizer. (...) Em vez disso, você tem de sugerir condições para um maior progresso: dar as pessoas uma rota, um caminho a seguir que leve aos resultados que você queira, sem que pareça que você esteja ditando uma conduta.
  <p markdown="1" class="pquote-credit">
— @kfogel, [_Producing OSS_](http://producingoss.com/en/producingoss.html#common-pitfalls)
  </p>
</aside>

### Escolha suas batalhas sabiamente

Contexto é importante. Considere quem está envolvido na discussão e como eles representam o resto da comunidade.

Todos na comunidade estão chateados, ou mesmo engajados, com esta _issue_? Ou se trata de um encrenqueiro solitário? Não se esqueça de considerar os membros silenciosos de sua comunidade, não somente as vozes ativas.

Se a _issue_ não representa as necessidades gerais de sua comunidade, você pode precisar apenas reconhecer as preocupações de algumas pessoas. Se esta é uma _issue_ recorrente sem uma resolução clara, aponte-as para discussões anteriores sobre o tópico e feche a _thread_.

### Identifique um desempatador da comunidade

Com uma boa atitude e uma comunicação clara, as situações mais difíceis podem ser resolvidas. Todavia, mesmo em uma conversa produtiva, pode haver simplesmente uma diferença de opiniões sobre como proceder. Nesses casos, identifique o individuo ou grupo que pode servir como desempatador.

Um desempatador poderia ser o mantenedor primário do projeto, ou um pequeno grupo de pessoas que toman uma decisão baseados em uma votação. Idealmente, você identificou um desempatador e o processo associado em um arquivo GOVERNANCE antes mesmo de ter de usá-lo.

Seu desempatador deve ser o seu último recurso. _Issues_ divisoras de águas são uma oportunidade de crescer e aprender. Abrace essas oportunidades e use um processo colaborativo para chegar a uma resolução sempre que possível.

## A comunidade é o ❤️ do _open source_

Comunidades saudáveis e prósperas abastecem milhares de horas despejadas no _open source_ toda semana. Muitos contribuidores atribuem a outras pessoas a razão por trabalhar - ou não - com _open source_. Aprendendo a como aproveitar esse poder construtivamente, você irá ajudar alguém lá fora a ter uma experiência  _open source_ inesquecível.
