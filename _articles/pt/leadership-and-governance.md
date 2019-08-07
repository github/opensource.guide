---
lang: pt
title: Liderança e Governança
description: Projetos de open source em expansão podem se beneficiar de regras formais para tomar decisões.
class: leadership
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
---

## Entendendo a governança para seu projeto em crescimento

Seu projeto está crescendo, pessoas estão engajadas, e você esta comprometido em manter isso em andamento. Neste ponto, você pode estar imaginando como incorporar contribuidores regulares do projeto em seu workflow, seja para dar acesso de commit para alguém ou resolver debates da comunidade. Se você possui dúvidas, nós temos as respostas.

## Quais são os exemplos de papéis formais usados em projetos open source?

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

Embora você possa definir os papéis do seu projeto da maneira que preferir, [considere o uso de definições mais amplas](../how-to-contribute/#o-que-significa-contribuir) para encorajar mais formas de contribuição. Você pode usar papéis de liderança para formalmente reconhecer pessoas que fizeram contribuições notáveis para seu projeto, independentemente das habilidades tecnicas deles.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  Você pode me conhecer como o "inventor" do Django... mas na verdade, eu sou o cara que foi contratado para trabalhar em uma coisa um ano depois dela já ter sido feita. (...) As pessoas suspeitam que sou bem sucedido por causa de minhas habilidades em programação... mas eu sou, na melhor das hipóteses, um programador médio.
  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## Como eu formalizo esses papéis de liderança?

Fomalizar seus papéis de liderança ajuda as pessoas a sentirem-se proprietárias e mostra aos outros membros da comunidade quem procurar caso precisem de ajuda.

Para um projeto menor, designar lideres pode ser tão simples quanto adicionar os nomes deles ao arquivo de texto de seu README ou de seu CONTRIBUTORS.

Para um projeto maior, se você possui um website, crie uma página para o time ou liste seus lideres de projeto lá. Por exemplo, o [Postgres](https://github.com/postgres/postgres/) possui uma [página de time completa](https://www.postgresql.org/community/contributors/), com perfis curtos para cada contribuidor.

Se seu projeto possui uma comunidade contribuinte muito ativa, você pode formar uma "equipe principal" de mantenedores, ou até mesmo subcomitês de pessoas que terão a propriedade do projeto em diferentes áreas de issues (por exemplo, segurança, triagem de issues ou conduta da comunidade). Deixe as pessoas se auto-organizarem e voluntariarem para os papéis que eles mais se identificam, em vez de atribuí-los.

<aside markdown="1" class="pquote">
  \[Nós\] complementamos a equipe principal com várias "subequipes". Cada subequipe é focada em um área específica, e.q., design de linguagem ou bibliotecas. (...) Para assegurar a coordenação global e uma forte e coerente visão para o projeto como um todo, cada subequipe é liderada por um membro da equipe principal.
  <p markdown="1" class="pquote-credit">
— ["Rust Governance RFC"](https://github.com/rust-lang/rfcs/blob/master/text/1068-rust-governance.md)
  </p>
</aside>

Times de lideranças podem querer criar um canal designado (como no IRC) ou se encontrar regularmente para discutir o projeto (como no Gitter ou Google Hangouts). Você pode sempre tornar essas reuniões públicas para que outras pessoãs possam escutá-las. [Cucumber-ruby](https://github.com/cucumber/cucumber-ruby), por exemplo, [disponibiliza horários de atendimento toda semana](https://github.com/cucumber/cucumber-ruby/blob/master/CONTRIBUTING.md#talking-with-other-devs).

Uma vez que você tenha estabelecido papéis de liderança, não esqueça de documentar como as pessoas podem alcançá-los! Estabeleça um processo claro de como alguém pode se tornar um mantenedor, ou se juntar à um subcomitê em seu projeto, e escreva isso em seu arquivo GOVERNANCE.md.

Ferramentas como [Vossibility](https://github.com/icecrime/vossibility-stack) podem ajudar você a rastrear publicamente quem está (ou não) fazendo contribuições para o projeto. A documentação dessas informações evita a percepção da comunidade de que os mantenedores são um grupo que toma suas decisões de maneira privada.

Por fim, se seu projeto está no GitHub, considere movê-lo de sua conta pessoal para uma Organização e adicionar ao menos um admin de backup. [GitHub Organizations](https://help.github.com/articles/creating-a-new-organization-account/) torna mais fácil de gerenciar permissões e múltiplos repositórios e protege o legado de seu projeto por meio de [propriedade compartilhada](../building-community/#compartilhe-a-responsabilidade-pelo-seu-projeto).

## Quando eu devo dar acesso de commit a alguém?

Algumas pessoas pensam que você deve dar acesso de commit para todo mundo que faz um contribuição. Isso pode incentivar mais pessoas a se sentirem responsáveis pelo seu projeto.

Por outro lado, especialmente para projetos maiores e mais complexos, você pode querer dar acesso de commit apenas para pessoas que demonstraram compromisso. Não há um jeito certo de fazer isso - faça o que te deixa mais confortável!

Se seu projeto está no GitHub, você pode usar os [branches protegidos](https://help.github.com/articles/about-protected-branches/) para gerenciar quem e sob quais circustâncias, pode efetuar um push em um branch particular.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">
  Sempre que alguém enviar um pull request, conceda-lhe acesso ao seu projeto. Embora possa parecer incrivelmente estúpido a princípio, o uso dessa estratégia permitirá que você libere o verdadeiro poder do GitHub. (...) Uma vez que as pessoas têm acesso de commit, elas não se preocupam mais com o fato de que o patch delas pode não ser mesclado... fazendo com que elas coloquem muito mais trabalho nele.
  <p markdown="1" class="pquote-credit">
— @felixge, ["The Pull Request Hack"](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## Quais são algumas das estruturas de governança comuns em projetos open source?

Existem três estruturas de governança comuns associadas a projetos open source.
There are three common governance structures associated with open source projects.

* **BDFL:** BDFL significa "Benevolent Dictator for Life". Sob essa estrutura, uma pessoa (comumente o autor inicial do projeto) tem a palavra final em todas as principais decisões do projeto. O [Python](https://github.com/python) é um exemplo clássico. Projetos menores são provavelmente BDFL por padrão, porque existe apenas um ou dois mantenedores. Um projeto criado dentro de uma companhia também pode cair na categoria BDFL.

* **Meritocracy:** **(Note: o termo "meritocracy" carrega uma conotação negativa em algumas comunidades e possui [uma história política e social complexa](http://geekfeminism.wikia.com/wiki/Meritocracy).)** Sob a meritocracy, contribuidores ativos do projeto (aqueles que demonstram "mérito") recebem um papel formal de tomada de decisão. As decisões, geralmente, são tomadas baseadas em puro consenso de voto. O conceito de meritocracy foi cunhado pela [Apache Foundation](https://www.apache.org/); [todos os projetos Apache](https://www.apache.org/index.html#projects-list) são meritocracias. Contribuições só podem ser feitas por indivíduos representando eles mesmos, não por uma companhia.

* **Liberal contribution:** Sob um modelo liberal contribution, as pessoas que trabalham mais são reconhecidas como mais influentes, mas isso é baseado no trabalho atual e não no histórico de contribuições. As principais decisões do projeto são tomadas com base em um processo de busca por consenso (discuta as principais queixas) em vez de voto puro, e se esforçam para incluir o máximo de perspectivas da comunidade possível. Exemplos populares de projetos que usam o modelo liberal contribution incluem o [Node.js](https://foundation.nodejs.org/) e o [Rust](https://www.rust-lang.org/en-US/).

Qual delas você deve usar? A decisão é sua! Todos os modelos possuem vantagens e desvantagens. E possam parecer bastante diferentes à primeira vista, todos os três modelos tem mais em comum do que parecem. Se você está interessado em adotar algum desses modelos, veja esses templates:

* [BDFL model template](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [Meritocracy model template](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js's liberal contribution policy](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## Preciso de documentos de governança quando lançar meu projeto?

Não há tempo certo para escrever a governança de seu projeto, mas é muito mais fácil definir uma vez que você viu dinâmica de sua comunidade. A melhor (e mais difícil) parte da governança open source é que ela é moldada pela comunidade!

No entanto, alguma documentação inicial irá inevitavelmente contribuir para a governança do seu projeto, então comece a escrever o que você puder. Por exemplo, você pode definir expectativas claras de comportamento ou como o processo da contribuição funciona, mesmo no lançamento do seu projeto.

Se você faz parte de uma empresa que está lançando um projeto de código aberto, vale a pena ter uma discussão interna antes do lançamento sobre como sua empresa espera manter e tomar decisões sobre o andamento do projeto. Você também pode querer explicar publicamente qualquer coisa em particular sobre como sua empresa irá (ou não) se envolver com o projeto.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  Designamos pequenas equipes para gerenciar projetos no GitHub que estão trabalhando neles no Facebook. Por exemplo, o React é executado por um engenheiro do React.
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["An inside look at open source at Facebook"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## O que acontece se empregados de uma corporação começam a submeter contribuições?

Projetos open source de sucesso são utilizados por muitas pessoas e companhias, e algumas companhias podem, eventualmente, ter fluxos de receitas vinculados ao projeto. Por exemplo, uma empresa pode usar o código do projeto como um componente em uma oferta de serviço comercial.

A medida que o projeto se torna mais amplamente utilizado, pessoas que possuem expertise nele tornam-se mais demandadas - você pode ser uma delas! - e irão, algumas vezes, serem pagas pelo trabalho que fazem no projeto.

É importante tratar atividades comerciais como normais e como somente uma outra fonte de energia para o desenvolvimento. Desenvolvedores pagos não devem receber tratamento especial em relação aos não pagos, é claro; cada contribuição deve ser avaliada por seus méritos técnicos. No entanto, as pessoas devem se sentir confortáveis para se em engajarem em atividades comerciais e à vontade em declarar seus casos de uso ao argumentarem a favor de uma melhoria ou feature em particular.

O "comercial" é completamente compatível com o "open source". O "comercial" apenas significa que há dinheiro envolvido em algum lugar - que o software é usado no comércio, o que é cada vez mais provável a medida que um projeto ganha adoção. (Quando um software open source é usado como parte de um produto non-open-source, o produto total ainda é um software "proprietário", embora, assim como no open source, possa ser usado para fins comerciais ou não comerciais.)

Como qualquer outro, desenvolvedores comercialmente motivados ganham influência no projeto pela qualidade e quantidade de susas contribuições. Obviamente, um desenvolvedor que é pago por seu tempo, pode ser capaz de fazer mais do que alguém que não é pago, mas isso é ok: o pagamento é somente uma dos muitos possíveis fatores que podem afetar o quanto uma pessoa faz. Mantenha as discussões de seu projeto focadas nas contribuições, não em fatores externos que habilitam as pessoas a fazerem tais contribuições.

## Preciso de uma entidade legal para apoiar o meu projeto?

Você não precisa de uma entidade legal para apoiar seu projeto open source, a menos que esteja lidando com dinheiro.

Por exemplo, se você quer criar um negócio comercial, você irá querer montar uma C Corp ou LLC (se estiver nos EUA). Se você está apenas fazendo um contrato relacionado ao seu projeto open source, pode aceitar dinheiro como único proprietário ou criar uma LLC (se estiver nos EUA).

Se desejar aceitar doações para seu projeto open source, você pode configurar um botão de doações (usando PayPal ou Stripe, por exemplo), mas o dinheiro não será livre de tributação, a menos que você seja uma organização sem fins lucrativos (uma 501c3, se estiver nos EUA).

Muitos projetos não querem se dar ao trabalho de criar uma organização sem fins lucrativos, então encontram um patrocinador fiscal sem fins lucrativos. Um patrocinador fiscal aceita doações em seu nome, geralmente em troca de uma porcentagem da doação. [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](https://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/), [Linux Foundation](https://www.linuxfoundation.org/projects) e [Open Collective](https://opencollective.com/opensource) são exemplos de organizações que servem como patrocinadores fiscais para projetos open source.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  Nosso objetivo é prover uma infra-estrutura que as comunidades possam usar para se tornarem autossustentáveis, criando assim um ambiente em que todos - contribuidores, apoiadores, patrocinadores - obtenham benefícios concretos.
  <p markdown="1" class="pquote-credit">
— @piamancini, ["Moving beyond the charity framework"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141#.vgsbj9um9)
  </p>
</aside>

Se o seu projeto estiver intimamente associado a uma determinada linguagem ou ecossistema, também poderá haver uma fundação de software relacionada com a qual você possa trabalhar. Por exemplo, a [Python Software Foundation](https://www.python.org/psf/) ajuda a apoiar o [PyPI](https://pypi.org/), gerenciador de pacotes do Python, e a [Node.js Foundation](https://foundation.nodejs.org/) ajuda a apoiar o [Express.js](https://expressjs.com/), um framework baseado em Node.
