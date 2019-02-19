---
lang: pt
title: Liderança e Governança
description: Projetos de código aberto em expansão podem se beneficiar de regras formais para tomar decisões.
class: leadership
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
---

## Entendendo a governança para seu projeto em crescimento

Seu preojeto está crescendo, pessoas estão engajadas, e você esta comprometido em manter isso em andamento. Neste ponto, você pode estar imaginando como incorporar contribuidores regulares do projeto em seu workflow, seja para dar acesso de commit para alguém ou resolver debates da comunidade. Se você possuir dúvidas, nós temos respostas.

## Quais são os exemplos de regras formais usadas em projetos open source?

Muitos projetos seguem um estrutura similar para funções e reconhecimento de contribuidores.

O que essas funções realmente significam, entretanto, depende inteiramente de você. Aqui estão alguns tipos de papéis que você pode reconhecer:

* **Maintainer**
* **Contributor**
* **Committer**

**Para alguns projetos, "maintainers"** são as únicas pessoas no projeto com permissão de commit. Em outros projetos, eles são simplesmente pessoas que estão listadas no README como mantenedores.

Um maintainer não precisa necessariamente ser alguém que escreve código para seu projeto. Pode ser alguém que tenha feito muito trabalho para evangelizar seu projeto, ou escreveu documentação que torna o projeto mais acessível aos outros. Independentemente do que eles fazem no dia-a-dia, um maintainer é provavelmente alguém que se sente responsável pela direção do projeto e está comprometido em melhorá-lo.

**Um "contribuidor" pode ser qualquer um** que comente em uma issue ou pull request, pessoas que adicionam valor ao projeto (seja triando issues, escrevendo código, ou organizando eventos), ou qualquer pessoa com um pull request mesclado (talvez a mais estreita definição de um contributor).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  \[Para o Node.js,\] toda pessoa que venha a comentar em uma issue ou submeta um código é um membro da comunidade do projeto. Apenas ser capaz de vê-los, já significa que eles cruzaram a linha de ser usuário e passaram a ser um contribuidor.
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Healthy Open Source"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**O termo "committer"** pode ser usado para distinguir o acesso de commit, que é um tipo específico de responsabilidade, de outras formas de contribuição.

Embora você possa definir os papéis do seu projeto da maneira que preferir, [considere o uso de definições mais amplas](../how-to-contribute/#what-it-means-to-contribute) para encorajar mais formas de cntribuição. Você pode usar papéis de liderança para formalmente reconhecer pessoas que fizeram contribuições notáveis para seu projeto, independentemente das habilidades tecnicas deles.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  Você pode me conhecer como o "inventor" do Django... mas na verdade, eu sou o cara que foi contratado para trabalhar em uma coisa um ano depois de já ter sido feito. (...) As pessoas suspeitam que sou bem sucedido por causa de minhas habilidades em programação... mas eu sou, na melhor das hipóteses, um programador médio.
  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## Como eu formalizo esses papei de liderança?

Fomalizar seus papéis de liderança ajuda as pessoas a sentirem-se proprietárias e mostra aos outros membros da comunidade quem procurar caso precisem de ajuda.

Para um projeto menor, designar lideres pode ser tão simples quanto adicionar os nomes deles ao arquivo de texto de seu README ou de seu CONTRIBUTORS.

Para um projeto maior, se você possui um website, crie uma página para o time ou liste seus lideres de projeto lá. Por exemplo, o [Postgres](https://github.com/postgres/postgres/) possui uma [página de time completa](https://www.postgresql.org/community/contributors/), com perfis curtos para cada contribuidor.

Se seu projeto possui uma comunidade contribuinte muito ativa, você pode formar um "equipe principal" de mantenedores, ou até mesmo subcomitês de pessoas que terão a propriedade do projeto em diferentes áreas de issues (por exemplo, segurança, triagem de issues ou conduta da comunidade). Deixe as pessoas se auto-organizarem a voluntariarem para os papéis que eles mais se identificam, em vez de atribuí-los.

<aside markdown="1" class="pquote">
  \[Nós\] complementamos a equipe principal com várias "subequipes". Cada subequipe é focada em um área específica, e.q., design de linguagem ou bibliotecas. (...) Para asseguram a coordenação global e uma forte e coerente visão para o projeto como um todo, cada subequipe é liderada por um membro da equipe principal.
  <p markdown="1" class="pquote-credit">
— ["Rust Governance RFC"](https://github.com/rust-lang/rfcs/blob/master/text/1068-rust-governance.md)
  </p>
</aside>

Times de lideranças pode querer criar um cana designado (como no IRC) ou se encontrar regularmente para discutir o projeto (como no Gitter ou Google Hangouts). Você pode sempre tornar essas reuniões públicas para que outras pessoãs possam escutá-las. [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby), por exemplo, [disponibiliza horários de atendimento toda semana](https://github.com/cucumber/cucumber-ruby/blob/master/CONTRIBUTING.md#talking-with-other-devs).

Uma vez que você tenha estabelecido papéis de liderança, não esqueça de documentar como as pessoas podem alcançá-los! Estabeleça um processo claro de como alguém pode se tornar um mantenedor, ou se juntar à um subcomitê em seu projeto, e escreva isso em seu arquivo GOVERNANCE.md.

Ferramentas como [Vossibility](https://github.com/icecrime/vossibility-stack) pode ajudar você a rastrear publicamente quem está (ou não) fazendo contribuições para o projeto. A documentação dessas informações evita a percepção da comunidade de que os mantenedores são um grupo que toma suas decisões de maneira privada.

Por fim, se seu projeto está no GitHub, considere movê-lo de sua conta pessoal para uma Organização e adicionar ao menos um admin de backup. [GitHub Organizations](https://help.github.com/articles/creating-a-new-organization-account/) torna mais fácil de gerenciar permissões e múltiplos repositórios e proteje o legado de seu projeto por meio de [propriedade compartilhada](../building-community/#share-ownership-of-your-project).

## Quando eu devo dar acesso de commit a alguém?

Algumas pessoas pensam que você deve dar acesso de commit para todo mundo que faz um contribuição. Isso pode incentivar mais pessoas a se sentirem responsáveis pelo seu projeto.

Por outro lado, especialmente para projetos maiores e mais complexos, você pode querer apenas dar acesso de commit para pessoas que demonstraram compromisso. Não há um jeito certo de fazer isso - faça o que te deixa mais confortável!

Se seu projeto está no GitHub, você pode usar os [branches protegidos](https://help.github.com/articles/about-protected-branches/) para gerenciar quem e sob quais circustâncias, pode efetuar um push em um branch particular.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">
  Sempre que alguém enviar uma pull request, conceda-lhe acesso ao seu projeto. Embora possa parecer incrivelmente estúpido a princípio, o uso dessa estratégia permitirá que você libere o verdadeiro poder do GitHub. (...) Uma vez que as pessoas tenham acesso de commit, elas não se preocupam mais com o fato de que o patch delas possa não ser mesclado... fazendo com que elas coloquem muito mais trabalho nele.
  <p markdown="1" class="pquote-credit">
— @felixge, ["The Pull Request Hack"](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## What are some of the common governance structures for open source projects?

There are three common governance structures associated with open source projects.

* **BDFL:** BDFL stands for "Benevolent Dictator for Life". Under this structure, one person (usually the initial author of the project) has final say on all major project decisions. [Python](https://github.com/python) is a classic example. Smaller projects are probably BDFL by default, because there are only one or two maintainers. A project that originated at a company might also fall into the BDFL category.

* **Meritocracy:** **(Note: the term "meritocracy" carries negative connotations for some communities and has a [complex social and political history](http://geekfeminism.wikia.com/wiki/Meritocracy).)** Under a meritocracy, active project contributors (those who demonstrate "merit") are given a formal decision making role. Decisions are usually made based on pure voting consensus. The meritocracy concept was pioneered by the [Apache Foundation](https://www.apache.org/); [all Apache projects](https://www.apache.org/index.html#projects-list) are meritocracies. Contributions can only be made by individuals representing themselves, not by a company.

* **Liberal contribution:** Under a liberal contribution model, the people who do the most work are recognized as most influential, but this is based on current work and not historic contributions. Major project decisions are made based on a consensus seeking process (discuss major grievances) rather than pure vote, and strive to include as many community perspectives as possible. Popular examples of projects that use a liberal contribution model include [Node.js](https://foundation.nodejs.org/) and [Rust](https://www.rust-lang.org/en-US/).

Which one should you use? It's up to you! Every model has advantages and trade-offs. And although they may seem quite different at first, all three models have more in common than they seem. If you're interested in adopting one of these models, check out these templates:

* [BDFL model template](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [Meritocracy model template](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js's liberal contribution policy](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## Do I need governance docs when I launch my project?

There is no right time to write down your project's governance, but it's much easier to define once you've seen your community dynamics play out. The best (and hardest) part about open source governance is that it is shaped by the community!

Some early documentation will inevitably contribute to your project's governance, however, so start writing down what you can. For example, you can define clear expectations for behavior, or how your contributor process works, even at your project's launch.

If you're part of a company launching an open source project, it's worth having an internal discussion before launch about how your company expects to maintain and make decisions about the project moving forward. You may also want to publicly explain anything particular to how your company will (or won't!) be involved with the project.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  We assign small teams to manage projects on GitHub who are actually working on these at Facebook. For example, React is run by a React engineer.
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["An inside look at open source at Facebook"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## What happens if corporate employees start submitting contributions?

Successful open source projects get used by many people and companies, and some companies may eventually have revenue streams eventually tied to the project. For example, a company may use the project's code as one component in a commercial service offering.

As the project gets more widely used, people who have expertise in it become more in-demand - you may be one of them! - and will sometimes get paid for work they do in the project.

It's important to treat commercial activity as normal and as just another source of development energy. Paid developers shouldn't get special treatment over unpaid ones, of course; each contribution must be evaluated on its technical merits. However, people should feel comfortable engaging in commercial activity, and feel comfortable stating their use cases when arguing in favor of a particular enhancement or feature.

"Commercial" is completely compatible with "open source". "Commercial" just means there is money involved somewhere - that the software is used in commerce, which is increasingly likely as a project gains adoption. (When open source software is used as part of a non-open-source product, the overall product is still "proprietary" software, though, like open source, it might be used for commercial or non-commercial purposes.)

Like anyone else, commercially-motivated developers gain influence in the project through the quality and quantity of their contributions. Obviously, a developer who is paid for her time may be able to do more than someone who is not paid, but that's okay: payment is just one of many possible factors that could affect how much someone does. Keep your project discussions focused on the contributions, not on the external factors that enable people to make those contributions.

## Do I need a legal entity to support my project?

You don't need a legal entity to support your open source project unless you're handling money.

For example, if you want to create a commercial business, you'll want to set up a C Corp or LLC (if you're based in the US). If you're just doing contract work related to your open source project, you can accept money as a sole proprietor, or set up an LLC (if you're based in the US).

If you want to accept donations for your open source project, you can set up a donation button (using PayPal or Stripe, for example), but the money won't be tax-deductible unless you are a qualifying nonprofit (a 501c3, if you're in the US).

Many projects don't wish to go through the trouble of setting up a nonprofit, so they find a nonprofit fiscal sponsor instead. A fiscal sponsor accepts donations on your behalf, usually in exchange for a percentage of the donation. [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](https://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/), [Linux Foundation](https://www.linuxfoundation.org/projects) and [Open Collective](https://opencollective.com/opensource) are examples of organizations that serve as fiscal sponsors for open source projects.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  Our goal is to provide an infrastructure that communities can use to be self sustainable, thus creating an environment where everyone — contributors, backers, sponsors — get concrete benefits out of it.
  <p markdown="1" class="pquote-credit">
— @piamancini, ["Moving beyond the charity framework"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141#.vgsbj9um9)
  </p>
</aside>

If your project is closely associated with a certain language or ecosystem, there may also be a related software foundation you can work with. For example, the [Python Software Foundation](https://www.python.org/psf/) helps support [PyPI](https://pypi.org/), the Python package manager, and the [Node.js Foundation](https://foundation.nodejs.org/) helps support [Express.js](https://expressjs.com/), a Node-based framework.
