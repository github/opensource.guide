---
lang: pt
title: Open Source Métricas
description: Tome decisões bem embasado para ajudar o seu projeto open source a prosperar medindo e acompanhando seu sucesso.
class: metrics
order: 9
image: /assets/images/cards/metrics.png
related:
  - finding
  - best-practices
---

## Porquê medir algo?

Os dados, quando usados com sabedoria, podem ajudá-lo a tomar decisões melhores como um mantenedor de open source.

Com mais informação, você pode:

* Entender como usuários respondem a uma nova funcionalidade
* Descubrir de onde os novos usuários vêm
* Identificar e decidir se deve suportar um caso de uso ou uma funcionalidade sugerida.
* Quantificar a popularidade do seu projeto
* Entender como seu projeto é usado
* Arrecadar dinheiro através de patrocínios e doações

Por exemplo, [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md) descobriu que o Google Analytics os ajuda a priorizar o trabalho:

> Homebrew is provided free of charge and run entirely by volunteers in their spare time. As a result, we do not have the resources to do detailed user studies of Homebrew users to decide on how best to design future features and prioritise current work. Anonymous aggregate user analytics allow us to prioritise fixes and features based on how, where and when people use Homebrew.

Popularidade não é tudo. Todo mundo entra em open source por diferentes razões. Se o seu objetivo como mantenedor de open source for mostrar seu trabalho, ser transparente sobre seu código ou apenas se divertir, as métricas podem não ser importantes para você.

Se você _esta_ interessado em entender seu projeto em um nível mais profundo, leia as maneiras de analisar a atividade do seu projeto.

## Descubra

Antes das pessoas poderem contribuir para o seu projeto, elas precisam saber que o projeto existe. Pergunte a si mesmo: _as pessoas estão encontrando este projeto?_

![Traffic graph](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

Se seu projeto esta hospedado no GitHub, [você pode ver](https://help.github.com/articles/about-repository-graphs/#traffic) como as pessoas navegam no seu projeto e de onde elas vem. Na pagina do seu projeto, clique "Insights", então "Traffic". Nesta pagina , você pode ver:

* **Total de visualizações da página:** Informa quantas vezes seu projeto foi visualizado

* **Total de visitantes únicos:** Informa quantas pessoas visualizaram seu projeto

* **Referência de sites:** Informa de onde vieram os visitantes. Essa métrica pode ajudar você a descobrir como alcançar seu público-alvo e se seus esforços de promoção estão funcionando.

* **Conteudo popular:** Informa a você onde os visitantes vão em seu projeto, a exibição mostra o número de visualizações por página e quantidade de visitantes.

[GitHub stars](https://help.github.com/articles/about-stars/) também pode ajudar a fornecer uma medida básica de popularidade. Embora GitHub stars não estejam necessariamente relacionadas a downloads e uso, elas podem dizer quantas pessoas estão percebendo seu trabalho.

Talvez você também queira [rastrear a descoberta apartir de lugares específicos](https://opensource.com/business/16/6/pirate-metrics): por exemplo, Google PageRank, tráfego de referência do site do seu projeto ou referências de outros projetos ou sites open source.

## Uso

As pessoas estão encontrando seu projeto nesta coisa louca e louca que chamamos de internet. O ideal é que, quando eles virem seu projeto, eles se sintam compelidos a fazer alguma coisa. A segunda pergunta a se fazer é:
_as pessoas estão utilizando este projeto?_

Se você usa um gerenciador de pacotes, como npm or RubyGems.org, para distribuir seu projeto, você será capas de rastrear os downloads do seu projeto.

Cada gerenciador de pacotes pode usar uma definição ligeiramente diferente de "download", e os downloads não necessariamente estão relacionados instalação ou ao uso, mas fornece uma base para comparação. Tente usar [Libraries.io](https://libraries.io/) para rastrear estatísticas de uso em muitos gerenciadores de pacotes populares.

Se o seu projeto esta no GitHub, navege novamento até a página "Traffic". Você pode usar o [clone graph](https://github.com/blog/1873-clone-graphs) para ver quantas vezes o seu projeto foi clonado em determinada data, a apresentação mostra o total de clonagem e clonagem por pessoa.

![Clone graph](/assets/images/metrics/clone_graph.png)

Se a clonagem é baixa comparada com a quantidade de pessoas que descobrem seu projeto, ha duas coisas a se considerar. São elas:

* Seu projeto não esta obtendo sucesso em converter sua audiencia, ou
* Você esta atraindo a audiencia errada

Por exemplo, se o seu projeto chegar na primeira página do Hacker News, você provavelmente verá um pico na descoberta (tráfego), mas uma taxa de conversão mais baixa, porque você está alcançando todos no Hacker News. Se o seu projeto Ruby é apresentado em uma conferência Ruby, no entanto, é mais provável que você veja uma alta taxa de conversão de um público-alvo.

Tente descobrir de onde vem seu público e peça a opinião de outras pessoas na página do projeto para descobrir quais desses dois problemas você está enfrentando.

Uma vez que você saiba que as pessoas estão usando o seu projeto, você pode tentar descobrir o que elas estão fazendo com ele. Eles estão construindo nele, bifurcando seu código e adicionando recursos? Eles estão usando isso para ciência ou negócios?

## Retenção

As pessoas estão encontrando seu projeto e estão usando. A próxima pergunta a se fazer é:
_as pessoas estão contribuindo de volta para este projeto?_

Nunca é cedo de mais para pensar nos contribuidores. Sem outras pessoas colaborando, você corre o risco de se colocar em uma situação insustentável onde seu projeto é _popular_ (muitas pessoas o usam), mas não há _suporte_ (não há tempo suficiente para atender a demanda).

A retenção também requer o [ingresso de novos colaboradores](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2), entenda que contribuidores anteriormente ativos acabarão por fazer outras coisas.

Exemplos de métricas da comunidade que você pode acompanhar regularmente incluem:

* **Total de contribuidores e número de commits por contribuidor:** Mostra quantos contribuidores você tem, e quem é mais ou menos ativo. No GitHub, você pode ver isso em "Insights" -> "Contributors." Neste momento, este gráfico conta apenas os contribuidores que se comprometeram com o branch padrão do repositório.

![Contributor graph](/assets/images/metrics/repo_contributors_specific_graph.png)

* **Primeira vez, casual, e contribuidores recorrentes:** Ajuda você a acompanhar se está recebendo novos colaboradores e se eles retornam. (Contribuidores ocasionais são contribuidores com um baixo número de commits. Se é um commit, menos de cinco commits, ou qualquer outra coisa, é com você.) Sem novos contribuidores, a comunidade do seu projeto pode ficar estagnada.

* **Números de issues abertas e pull requests em abertos:** Se esses números ficarem muito altos, talvez você precise de ajuda com a triagem de problemas e as revisões de código.

* **Número de issues _abertas_ e pull requests _abertos_:** Issues abertas, significa que alguém se preocupa o suficiente com o seu projeto para abrir um problema. Se esse número aumenta com o tempo, isso sugere que as pessoas estão interessadas em seu projeto.

* **Tipos de contribuições:** Por exemplo, commits, correções textuais or correções de bugs, ou comentários em uma issue.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/arfon?s=180" class="pquote-avatar" alt="avatar">
  Open source is more than just code. Successful open source projects include code and documentation contributions together with conversations about these changes.
  <p markdown="1" class="pquote-credit">
— @arfon, ["The Shape of Open Source"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## Atividade do mantenedor

Finalmente, você desejará fechar o loop certificando-se de que os mantenedores do seu projeto sejam capazes de lidar com o volume de contribuições recebidas. A última pergunta que você deve se fazer é: _eu estou (ou estamos) respondendo à nossa comunidade?_

Mantenedores não responsivos se tornam um gargalo para projetos de open source. Se alguém enviar uma contribuição, mas nunca receber uma resposta de um mantenedor, ela poderá se sentir desencorajada e sair.

[Research from Mozilla](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) suggests that maintainer responsiveness is a critical factor in encouraging repeat contributions.

Considere acompanhar quanto tempo leva para você (ou outro mantenedor) responder às contribuições, seja um issue ou um pull request. A resposta não exige ação. Pode ser tão simples como dizer: _"Obrigado pela sua contribuição! E irei revisa-la dentro da proxima semana."_

Você também pode medir o tempo necessário para mover entre as etapas no processo de contribuição, como:

* Tempo médio que um problema permanece em aberto
* Se as questões são fechadas por PRs
* Se as issues obsoletas são fechadas
* Tempo médio para fazer o merge  de um pull request

## Use 📊 para aprender sobre pessoas

Entender as métricas ajudará você a construir um projeto open source ativo e crescente. Mesmo que você não acompanhe todas as métricas em um painel, use a estrutura acima para focar sua atenção no tipo de comportamento que ajudará seu projeto a prosperar.