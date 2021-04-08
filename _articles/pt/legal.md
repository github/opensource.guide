---
lang: pt
title: O Lado Legal do Open Source
description: Tudo que você sempre imaginou sobre o lado legal do open source, e algumas coisas que você não pensou.
class: legal
order: 10
image: /assets/images/cards/legal.png
related:
  - contribute
  - leadership
---

## Entendendo as implicações legais do open source

Compartilhar seu trabalho criativo com o mundo pode ser uma experiência empolgante e recompensadora. Isso também pode significar um monte de coisas legais que você não sabia que tinha que se preocupar. Felizmente, você não precisa começar do zero. Nós temos suas necessidades legais identificadas. (Antes de entrar, leia nosso [aviso](/notices/).)

## Por que as pessoas se importam tanto com o lado legal do open source?

Ainda bem que perguntou! Quando você faz um trabalho criativo (como escrever, gráficos, ou codigo), por padrão este trabalho esta sob direitos autorais exclusivos. Ou seja, a lei assume que, como autor do seu trabalho, você deve dizer como os outros podem utilizá-lo.

Em geral, isso significa que ninguém mais pode usar, copiar, distribuir ou modificar seu trabalho sem correr o risco de perdas, danos ou litigios.

O open source é uma circunstância incomum, todavia, porque o autor espera que os outros usem, modifiquem e compartilhem o trabalho. Mas como o padrão legal ainda é direitros autorais exclusivos, você precisa de uma licença que declare explicitamente essas permissões.

Se você não declarar uma licença open source, todos que contribuem para o seu projeto também se tornam detentores exclusivos dos direitos autorais de seu trabalho. Isso significa que ninguém pode usar, copiar, distribuir ou modificar suas contribuições - e "ninguém" significa inclusive você.

Finalmente, seu projeto pode ter dependências que tenham licença ou cuja licença especifique alguns requisitos que você não conhecia. A comunidade do seu projeto ou as políticas do seu empregador também podem exigir que seu projeto use licenças específicas open source. Nós vamos cobrir essas situações abaixo.

## Os projetos públicos do GitHub são open source?

Quando você [cria um novo projeto](https://help.github.com/articles/creating-a-new-repository/) no GitHub, você tem a opção de criar um repositório **privado** ou **público**.

![Create repository](/assets/images/legal/repo-create-name.png)

**Tornar seu projeto no GitHub publico não é o mesmo que licenciar seu projeto.** Projetos publicos são cobertos pelos [Termos de Servicos do GitHub](https://help.github.com/en/github/site-policy/github-terms-of-service#3-ownership-of-content-right-to-post-and-license-grants), o que permite que outras pessoas vejam e copiem seu projeto, mas seu trabalho vem sem permissões.

Se você quiser que outras pessoas usem, distribuam, modifiquem ou contribuam com seu projeto, você precisa incluir uma licença open source. Por exemplo, alguém não pode usar legalmente qualquer parte de seu projeto do GitHub em seu código pessoal, mesmo que seu projeto seja público, a menos que você conceda explicitamente a eles o direito de fazer isso.

## Apenas me diga o que eu preciso fazer para proteger o meu projeto.

Você está com sorte, porque hoje, as licenças open source são padronizadas e fáceis de usar.
Você pode copiar e colar uma licença existente diretamente no seu projeto.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), e [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) são as licenças open source mais populares, mas há outras opções disponíveis. Você pode encontrar o texto completo destas licenças e instruções de como usá-las, em [choosealicense.com](https://choosealicense.com/).

Quando você criar um novo projeto no GitHub, será [dada a opção de adição de uma licença](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
  Uma licença padronizada serve como um proxy para aqueles sem treinamento jurídico saberem precisamente o que eles podem ou não fazer com o software. Ao menos que seja absolutamente necessário, evite termos customizados, modificados ou não-padrão, que irão servir como uma barreira para o uso final do código da agência.
  <p markdown="1" class="pquote-credit">
— @benbalter, ["Everything a government attorney needs to know about open source software&nbsp;licensing"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## Qual licença open source é apropriada para meu projeto?

Se você está iniciando do zero, a opção mais indicada é a [MIT License](https://choosealicense.com/licenses/mit/). É curta, muito fácil de entender e permite que qualquer pessoa faça qualquer coisa desde que mantenha uma cópia da licença, incluindo o aviso de direitos autorais. Você poderá liberar o projeto com uma licença diferente, se precisar.

Entretanto, escolher a licença open source correta para o seu projeto depende dos seus objetivos.

Seu projeto provavelmente tem (ou terá) **dependências**. Por exemplo, se você estiver abrindo um projeto Node.js, provavelmente usará bibliotecas do Node Package Manager (npm). Cada uma das bibliotecas das quais você depende terá sua própria licença open source. Se cada uma de suas licenças for "permissiva" (dá permissão pública para usar, modificar e compartilhar, sem qualquer condição para licenciamento downstream), você pode usar qualquer licença que desejar. Licenças permissivas comuns incluem MIT, Apache 2.0, ISC e BSD.

Por outro lado, se qualquer uma das licenças de suas dependências for "copyleft" (também fornece as mesmas permissões públicas, sujeita à condição de usar a mesma licença downstream), seu projeto terá que usar a mesma licença. Licenças copyleft comuns incluem GPLv2, GPLv3 e AGPLv3.

Você também pode querer considerar a **comunidade** que você espera que irá utilizar e contribuir para seu projeto:

* **Você quer que seu projeto seja usado como dependência por outros projetos?** Provavelmente, é melhor usar a licença mais popular e relevante em sua comunidade. Por exemplo, a [MIT](https://choosealicense.com/licenses/mit/) é a licença mais popular para [bibliotecas npm](https://libraries.io/search?platforms=NPM).
* **Você quer que seu projeto atraia grandes empresas?** Uma grande empresa provavelmente desejará uma licença de patente expressa de todos os colaboradores. Nesse caso, [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) abrange você (e eles).
* **Você quer que seu projeto atraia os colaboradores que não querem que suas contribuições sejam usadas em software de código fechado?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) ou (se eles também não quiserem contribuir para serviços de código fechado) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) irá cair muito bem.

Sua  **empresa** pode ter requisitos de licenciamento específicos para seus projetos open source. Por exemplo, pode exigir uma licença permissiva para que a empresa possa usar seu projeto no produto de código fechado da empresa. Ou a sua empresa pode exigir uma licença copyleft forte e um contrato de contribuição adicional (veja abaixo) para que apenas sua empresa, e ninguém mais, possa usar seu projeto em software de código fechado. Ou a sua empresa pode ter certas necessidades relacionadas a padrões, responsabilidade social ou transparência, e qualquer uma delas pode exigir uma estratégia de licenciamento específica. Fale com o [departamento jurídico da sua empresa](#o-que-a-equipe-jurídica-da-minha-empresa-precisa-saber).

Quando você cria um novo projeto no GitHub, você tem a opção de selecionar uma licença. A inclusão de uma das licenças mencionadas acima tornará seu projeto open source no GitHub. Se você gostaria de ver outras opções, confira [choosealicense.com](https://choosealicense.com) para encontrar a licença certa para o seu projeto, mesmo que [não seja software](https://choosealicense.com/non-software/).

## E se eu quiser mudar a licença do meu projeto?

A maioria dos projetos nunca precisa alterar as licenças. Mas ocasionalmente as circunstâncias mudam.

Por exemplo, a medida em que seu projeto cresce, ele adiciona dependências ou usuários, ou a sua empresa altera a estratégia, e qualquer uma delas pode exigir ou precisar de uma licença diferente. Além disso, se você deixou de licenciar seu projeto desde o início, adicionar uma licença é efetivamente o mesmo que trocar de licença. Há três coisas fundamentais para considerar quando adicionar ou alterar a licença do seu projeto:

**Isto é complicado.** Determinar a compatibilidade e a conformidade da licença e quem detém os direitos autorais pode ficar complicado e confuso rapidamente. Mudar para uma nova licença compatível para novos lançamentos e contribuições é diferente de relicenciar todas as contribuições existentes. Envolva sua equipe jurídica a primeira sugestão ou desejo de alterar as licenças. Mesmo que você tenha ou possa obter permissão dos detentores dos direitos autorais de seu projeto para uma alteração de licença, considere o impacto da alteração nos outros usuários e colaboradores de seu projeto. Pense em uma mudança de licença como um "evento de governança" para o seu projeto que, com maior probabilidade, ocorrerá sem problemas quando houver comunicação e consultas claras com as partes interessadas do projeto. Mais uma razão para escolher e usar uma licença apropriada para o seu projeto desde o início!

**Licença existente do seu projeto.** Se a licença existente do seu projeto for compatível com a licença que você deseja alterar, você poderá começar a usar a nova licença. Isso porque, se a licença A for compatível com a licença B, você cumprirá os termos de A enquanto cumpre os termos de B (mas não necessariamente vice-versa). Portanto, se você estiver usando uma licença permissiva (por exemplo, MIT), poderá mudar para uma licença com mais condições, contanto que mantenha uma cópia da licença do MIT e de quaisquer avisos de direitos autorais associados (ou seja, continue a obedecer à licença). Condições mínimas da licença MIT). Mas se a sua licença atual não for permissiva (por exemplo, copyleft ou você não tiver uma licença) e você não for o único detentor dos direitos autorais, não será possível alterar a licença do seu projeto para o MIT. Essencialmente, com uma licença permissiva, os detentores dos direitos autorais do projeto devem dar permissão prévia para alterar as licenças.

**Seu projeto possui detentores de direitos autorais.** Se você é o único contribuidor para o seu projeto, então você ou sua empresa é o único detentor dos direitos autorais do projeto. Você pode adicionar ou alterar qualquer licença que você ou sua empresa desejarem. Caso contrário, pode haver outros detentores de direitos autorais dos quais você precisa consentimento para alterar as licenças. Quem são eles? Um bom lugar para começar é olhar as pessoas que contribuiram para o seu projeto. Mas, em alguns casos, os direitos autorais serão mantidos pelos empregadores dessas pessoas. Em alguns casos, as pessoas só fizeram contribuições mínimas, mas não há nenhuma regra rígida e rápida de que as contribuições sob um certo número de linhas de código não estão sujeitas a direitos autorais. O que fazer? Depende. Para um projeto relativamente pequeno e jovem, pode ser viável fazer com que todos os contribuidores existentes aceitem uma alteração de licença através de uma issue ou pull request. Para projetos grandes e de longa duração, você pode ter que procurar muitos colaboradores e até mesmo seus herdeiros. A Mozilla levou anos (2001-2006) para relicenciar o Firefox, Thunderbird e softwares relacionados.

Como alternativa, você pode fazer com que os colaboradores concordem com antecedência (por meio de um acordo de colaborador adicional - veja abaixo) com determinadas alterações de licença em determinadas condições, além daquelas permitidas pela sua licença open source existente. Isso muda um pouco a complexidade de alterar licenças. Você precisará de mais ajuda de seus advogados lá na frente, e você ainda vai querer se comunicar claramente com as partes interessadas do seu projeto ao executar uma alteração de licença.

## Meu projeto precisa de um contrato de contribuição adicional?

Provavelmente não. Para a grande maioria dos projetos open source, uma licença open source serve implicitamente como a licença de entrada (de contribuidores) e de saída (para outros contribuidores e usuários). Se o seu projeto estiver no GitHub, os Termos de Serviço do GitHub tratam "entrada=saída" como o [padrão explícito](https://help.github.com/en/github/site-policy/github-terms-of-service#6-contributions-under-repository-license).

Um contrato de contribuidor adicional - geralmente chamado de Contrato de Licença de Contribuidor (CLA) -- pode criar trabalho administrativo para os mantenedores do projeto. Quanto trabalho um contrato adiciona depende do projeto e da implementação. Um acordo simples pode exigir que os contribuidores confirmem, com um clique, que têm os direitos necessários para contribuir com a licença open source do projeto. Um acordo mais complicado pode exigir revisão legal e aprovação dos empregadores dos colaboradores.

Além disso, adicionando "papelada" que alguns acreditam ser desnecessária, difícil de entender ou injusta (quando o destinatário do contrato obtém mais direitos que os contribuidores ou o público por meio da licença open source do projeto), um acordo de contribuição adicional pode ser considerado hostil para a comunidade do projeto.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">
    Nós eliminamos o CLA do Node.js. Isso reduziu a barreira de entrada para contribuidores Node.js, consequentemente expandindo a base de contribuidores.
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Broadening Node.js Contributions"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Algumas situações em que você pode querer considerar um contrato de contribuição adicional para o seu projeto incluem:

* Seus advogados querem que todos os colaboradores aceitem expressamente os termos de contribuição (_assinem_, online ou offline), talvez porque achem que a licença open source em si não é suficiente (mesmo que seja!). Se essa for a única preocupação, um acordo de contribuidores que afirme a licença open source do projeto deve ser suficiente. O [jQuery Individual Contributor License Agreement](https://contribute.jquery.org/CLA/) é um bom exemplo de um acordo de contribuição adicional leve. Para alguns projetos, um [Certificado de Origem do Desenvolvedor](https://github.com/probot/dco) pode ser uma alternativa.
* Seu projeto usa uma licença open source que não inclui uma concessão de patente expressa (como MIT) e você precisa de uma concessão de patente de todos os contribuidores, alguns dos quais podem trabalhar para empresas com grandes portfólios de patentes que poderiam ser usados contra você ou os outros contribuidores e usuários do projeto. O [Apache Individual Contributor License Agreement](https://www.apache.org/licenses/icla.pdf) é um contrato de contribuição adicional comumente usado que tem uma concessão de patente espelhando a encontrada na Licença Apache 2.0.
* Seu projeto está sob uma licença copyleft, mas você também precisa distribuir uma versão proprietária do projeto. Você precisará que todo colaborador assine, garantindo a você ou lhe outorgando direitos autorais (mas não ao público) uma licença permissiva. O [MongoDB Contributor Agreement](https://www.mongodb.com/legal/contributor-agreement) é um exemplo desse tipo de acordo.
* Você acha que seu projeto talvez precise alterar as licenças ao longo de sua vida útil e deseja que os colaboradores concordem antecipadamente com essas alterações.

Se você precisar usar um contrato de contribuição adicional com seu projeto, considere usar uma integração como a [CLA assistant](https://github.com/cla-assistant/cla-assistant) para minimizar a distração do contribuidor.

## O que a equipe jurídica da minha empresa precisa saber?

Se você está lançando um projeto open source como funcionário da empresa, primeiro, sua equipe jurídica deve saber que você está abrindo mão de um projeto.

Para melhor ou pior, considere deixá-los sabendo de tudo, mesmo que seja um projeto pessoal. Você provavelmente tem um "contrato de propriedade intelectual de funcionários" com sua empresa, que lhes dá algum controle sobre seus projetos, especialmente se eles estiverem relacionados aos negócios da empresa ou se você usar algum recurso da empresa para desenvolver o projeto. Sua empresa _deve_ facilmente dar-lhe permissão, e talvez já tenha feito através de um contrato de propriedade intelectual amigável aos funcionários ou uma política da empresa. Se não, você pode negociar (por exemplo, explicar que seu projeto atende aos objetivos profissionais de aprendizado e desenvolvimento da empresa) ou evitar trabalhar em seu projeto até encontrar uma empresa melhor.

**Se você está abrindo mão de um projeto para sua empresa,** então definitivamente deixe-os saber. Sua equipe jurídica provavelmente já possui políticas para qual licença open source (e talvez o acordo de contribuição adicional) deve ser utilizada, com base nos requisitos de negócios e na experiência da empresa para garantir que seu projeto esteja em conformidade com as licenças de suas dependências. Se não, você e eles estão com sorte! Sua equipe jurídica deve estar ansiosa para trabalhar com você para descobrir essas coisas. Algumas coisas para pensar:

* **Material de terceiros:** Seu projeto tem dependências criadas por outras pessoas ou inclui ou usa códigos de outras pessoas? Se estes forem open source, você precisará cumprir as licenças open source das dependências. Isso começa com a escolha de uma licença que funciona com as licenças open source de terceiros (veja acima). Se o seu projeto modifica ou distribui material open source de terceiros, então sua equipe jurídica também desejará saber se você está cumprindo outras condições das licenças open source de terceiros, como a retenção de avisos de direitos autorais. Se o seu projeto usa código de outros que não têm uma licença open source, você provavelmente terá que pedir aos mantenedores desses projetos para [adicionar uma licença open source](https://choosealicense.com/no-license/#for-users), e se você não conseguir um, pare de usar o código deles no seu projeto.

* **Segredos comerciais:** Considere se existe alguma coisa no projeto que a empresa não queira disponibilizar para o público em geral. Se assim for, você pode abrir o código do resto do seu projeto, depois de extrair o material que deseja manter privado.

* **Patentes:** Sua empresa está solicitando uma patente a qual tornar seu projeto open source constituiria [divulgação pública](https://en.wikipedia.org/wiki/Public_disclosure)? Infelizmente, você pode ser solicitado a esperar (ou talvez a empresa reconsidere o conhecimento aplicado no aplicativo). Se você está esperando contribuições para seu projeto de funcionários de empresas com grandes carteiras de patentes, sua equipe jurídica pode querer que você use uma licença com uma concessão de patente expressa de colaboradores (como Apache 2.0 ou GPLv3) ou um contrato de contribuição adicional (Veja acima).

* **Marcas registradas:** Verifique extensivamente se o nome do seu projeto [não entra em conflito com alguma marca comercial conhecida](../starting-a-project/#evitando-conflitos-de-nomes). Se você usar marcas registradas de sua própria empresa no projeto, verifique se elas não causam conflitos. [FOSSmarks](http://fossmarks.org/) é um guia prático para entender marcas registradas no contexto de projetos gratuitos e open source.

* **Privacidade:** Seu projeto coleta dados sobre usuários? "Telefone residencial" para servidores da empresa? Sua equipe jurídica pode ajudá-lo a cumprir as políticas da empresa e as regulamentações externas.

Se você está lançando o primeiro projeto open source da sua empresa, as dicas acima são mais do que suficiente (mas não se preocupe, a maioria dos projetos não deve levantar grandes preocupações).

A longo prazo, sua equipe jurídica pode fazer mais para ajudar a empresa a obter mais de seu envolvimento em open source e permanecer segura:

* **Políticas de contribuição para funcionários:** Considere desenvolver uma política corporativa que especifique como seus funcionários contribuem para projetos open source. Uma política clara reduzirá a confusão entre seus funcionários e os ajudará a contribuir para projetos open source no melhor interesse da empresa, seja como parte de seus trabalhos ou em seu tempo livre. Um bom exemplo é o  [Modelo de propriedade intelectual e políticas de contribuição para projetos abertos](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/) da Rackspace.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">
  Liberar a propriedade intelectual associada com um patch constrói a base de conhecimento do funcionário e sua reputação. Mostra que a empresa é empenhada no desenvolvimento desse funcionário e cria um senso de emponderamento e autonomia. Todos esses benefícios também levam a uma maior moral e uma melhor retenção de funcionários.
  <p markdown="1" class="pquote-credit">
— @vanl, ["A Model IP and Open Source Contribution Policy"](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **O que liberar:** [(Quase) tudo?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) Se a sua equipe jurídica entender e investir na estratégia open source da sua empresa, ela será mais capaz de ajudar do que atrapalhar seus esforços.
* **Conformidade:** Mesmo que sua empresa não libere nenhum projeto open source, ela usa o software open source dos outros. [Conscientização e processo](https://www.linuxfoundation.org/blog/2015/06/why-companies-that-use-open-source-need-a-compliance-program/) pode evitar dores de cabeça, atrasos de produtos e ações judiciais.

<aside markdown="1" class="pquote">
  Organizações devem ter uma estratégia de licença e conformidade funcionando que encaixe ambas as categorias \["permissive" e "copyleft"\]. Isso começa com a manutenção de um registro dos termos de licença que se aplicam ao software open source que você está utilizando — incluindo subcomponentes e dependências.
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Open Source Software: Compliance Basics And Best Practices"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Patentes:** Sua empresa pode querer participar do [Open Invention Network](https://www.openinventionnetwork.com/), um conjunto de patentes defensivas compartilhadas para proteger o uso de grandes projetos open source pelos membros, ou explorar outros [licenciamentos alternativos de patentes](https://www.eff.org/document/hacking-patent-system-2016).
* **Governança:** Especialmente se e quando fizer sentido mover um projeto para um [entidade legal fora da empresa](../leadership-and-governance/#preciso-de-uma-entidade-legal-para-apoiar-o-meu-projeto).
