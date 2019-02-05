---
lang: pt
title: O Lado Legal do Open Source
description: Tudo que imaginou sobre o lado legal do open source, e algumas coisas que você não pensou.
class: legal
order: 10
image: /assets/images/cards/legal.png
related:
  - contribute
  - leadership
---

## Entendendo as implicações legais do open source

Compartilhar seu trabalho criativo com o mundo pode ser uma experiência empolgante e recompensadora. Isso também pode significar um monte de coisas legais que você não sabia que tinha que se preocupar. Felizmente, você não precisa começar do zero. Nós temos suas necessidades legais identificadas. (Antes de entrar, leia nosso [aviso](/notices/).)

## Porque as pessoas se importam tanto com o lado legal do open source?

Ainda bem que pergunto! Quando você faz um trabalho criativo (como escrever, graficos, ou codigo), por padrão este trabalho esta sob direitos autorais exclusivos. Ou seja, a lei assume que como autor do seu trabalho, você deve dizer como os outros podem utilizar o seu trabalho.

Em geral, isso significa que ninguém mais pode usar, copiar, distribuir ou modificar seu trabalho sem estar em risco de perdas, danos ou litigios.

O código aberto é uma circunstância incomum, no entanto o autor espera que outros usem,modifiquem e compartilhem o trabalho. Mas como o padrão legal ainda é direitros autorais exclusivo, você precisa de uma licença que declare explicitamente essas permissões.

Se você não declarar uma licença de código aberto, todos que contribuem para o seu projeto também se tornam detentores exclusivos dos direitos autorais de seu trabalho. Isso significa que ninguém pode usar, copiar, distribuir ou modificar suas contribuições - e "ninguém" significa inclusive você.

Finalmente, seu projeto pode ter dependências que tenham licença ou que a licença especifique alguns requisitos que você não conhecia. A comunidade do seu projeto ou as políticas do seu empregador também podem exigir que seu projeto use licenças específicas de código aberto. Nós vamos cobrir essas situações abaixo.

## Os projetos públicos do GitHub são de código aberto?

Quando você [cria um novo projeto](https://help.github.com/articles/creating-a-new-repository/) no GitHub, você tem a opção de criar um repositorio **privado** ou **público**.

![Create repository](/assets/images/legal/repo-create-name.png)

**Tornar seu projeto no GitHub publico não é o mesmo que licenciar seu projeto.** Projetos publicos são cobertos pelos [Termos de Servicos do GitHub's](https://help.github.com/articles/github-terms-of-service/#f-copyright-and-content-ownership), o que permite que outras pessoas vejam e copiem seu projeto, mas seu trabalho também não possui permissões.

Se você quiser que outras pessoas usem, distribuam, modifiquem ou contribuam com seu projeto, você precisa incluir uma licença de código aberto. Por exemplo, alguém não pode usar legalmente qualquer parte de seu projeto do GitHub em seu código pessoal, mesmo que seu projeto seja público, a menos que você conceda explicitamente a eles o direito de fazer isso.

## Apenas me diga o que eu preciso fazer para proteger o meu projeto.

Você está com sorte, porque hoje, as licenças de código aberto são padronizadas e fáceis de usar.
Você pode copiar e colar uma licença existente diretamente no seu projeto.

[MIT](https://choosealicense.com/licenses/mit/), [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/), and [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) são as licenças mais populares de código aberto, mas ha outras opções para escolher. Você pode encontrar o texto completo destas licenças, e instruções de como usá-las, em [choosealicense.com](https://choosealicense.com/).

Quando você criar um novo projeto no GitHub, será [solcitado que adicione uma licença](https://help.github.com/articles/open-source-licensing/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/benbalter?s=180" class="pquote-avatar" alt="avatar">
  A standardized license serves as a proxy for those without legal training to know precisely what they can and can't do with the software. Unless absolutely required, avoid custom, modified, or non-standard terms, which will serve as a barrier to downstream use of the agency code.
  <p markdown="1" class="pquote-credit">
— @benbalter, ["Everything a government attorney needs to know about open source software&nbsp;licensing"](https://ben.balter.com/2014/10/08/open-source-licensing-for-government-attorneys/)
  </p>
</aside>

## Qual licença open source é apropriada para meu projeto?

Se você esta iniciando do zero, a opção mais indicada é [MIT License](https://choosealicense.com/licenses/mit/). É curta, muito fácil de entender e permite que qualquer pessoa faça qualquer coisa desde que mantenha uma cópia da licença, incluindo o aviso de direitos autorais. Você poderá liberar o projeto com uma licença diferente, se precisar.

Entretanto, escolher a licença de código aberto correta para o seu projeto depende dos seus objetivos.

Seu projeto provavelmente tem (ou terá) **dependências**. Por exemplo, se você estiver abrindo um projeto Node.js, provavelmente usará bibliotecas do Node Package Manager (npm). Cada uma das bibliotecas das quais você depende terá sua própria licença de código aberto. Se cada uma de suas licenças for "permissiva" (dá permissão pública para usar, modificar e compartilhar, sem qualquer condição para licenciamento downstream), você pode usar qualquer licença que desejar. Licenças permissivas comuns incluem MIT, Apache 2.0, ISC e BSD.

Por outro lado, se qualquer uma das licenças de suas dependências for "copyleft" (também fornece as mesmas permissões públicas, sujeita à condição de usar a mesma licença downstream), seu projeto terá que usar a mesma licença. Licenças copyleft comuns incluem GPLv2, GPLv3 e AGPLv3.

Você também pode querer considerar a **comunidade** que você deseja usar e contribuir para seus projetos:

* **Você quer que seu projeto seja usado como dependência por outros projetos?** Provavelmente, é melhor usar a licença mais popular e relevante em sua comunidade. Por exemplo, [MIT](https://choosealicense.com/licenses/mit/) é a licença mais popular para [bibliotecas npm](https://libraries.io/search?platforms=NPM).
* **Você quer que seu projeto atraia grandes empresas?** Uma grande empresa provavelmente desejará uma licença de patente expressa de todos os colaboradores. Nesse caso, [Apache 2.0](https://choosealicense.com/licenses/apache-2.0/) abrange você (e eles).
* **Você quer que seu projeto atraia os colaboradores que não querem que suas contribuições sejam usadas em software de código fechado?** [GPLv3](https://choosealicense.com/licenses/gpl-3.0/) ou (se eles também não quiserem contribuir para serviços de código fechado) [AGPLv3](https://choosealicense.com/licenses/agpl-3.0/) irá cair muito bem.

Sua  **companhia** pode ter requisitos de licenciamento específicos para seus projetos de código aberto. Por exemplo, pode exigir uma licença permissiva para que a empresa possa usar seu projeto no produto de código fechado da empresa. Ou a sua empresa pode exigir uma licença copyleft forte e um contrato de contribuição adicional (veja abaixo) para que apenas sua empresa, e ninguém mais, possa usar seu projeto em software de código fechado. Ou a sua empresa pode ter certas necessidades relacionadas a padrões, responsabilidade social ou transparência, e qualquer uma delas pode exigir uma estratégia de licenciamento específica. Fale com o [departamento juridico da sua companhia](#what-does-my-companys-legal-team-need-to-know).

Quando você cria um novo projeto no GitHub, você tem a opção de selecionar uma licença. A inclusão de uma das licenças mencionadas acima tornará seu projeto código aberto no GitHub. Se você gostaria de ver outras opções, confira [choosealicense.com](https://choosealicense.com) para encontrar a licença certa para o seu projeto, mesmo que [não seja software](https://choosealicense.com/non-software/).

## E se eu quiser mudar a licença do meu projeto?

A maioria dos projetos nunca precisa alterar as licenças. Mas ocasionalmente as circunstâncias mudam.

Por exemplo, à medida que seu projeto cresce, ele adiciona dependências ou usuários, ou a sua empresa altera a estratégia, e qualquer uma delas pode exigir ou precisar de uma licença diferente. Além disso, se você deixou de licenciar seu projeto desde o início, adicionar uma licença é efetivamente o mesmo que trocar de licença. Há três coisas fundamentais para considerar quando adicionar ou alterar a licença do seu projeto:

**Isto é complicado.** Determinar a compatibilidade e a conformidade da licença e quem detém os direitos autorais pode ficar complicado e confuso rapidamente. Mudar para uma nova licença compatível para novos lançamentos e contribuições é diferente de relicenciar todas as contribuições existentes. Envolva sua equipe jurídica a primeira sugestão ou desejo de alterar as licenças. Mesmo que você tenha ou possa obter permissão dos detentores dos direitos autorais de seu projeto para uma alteração de licença, considere o impacto da alteração nos outros usuários e colaboradores de seu projeto. Pense em uma mudança de licença como um "evento de governança" para o seu projeto que, com maior probabilidade, ocorrerá sem problemas quando houver comunicação e consultas claras com as partes interessadas do projeto. Mais uma razão para escolher e usar uma licença apropriada para o seu projeto desde o início!

**Licença existente do seu projeto.** Se a licença existente do seu projeto for compatível com a licença que você deseja alterar, você poderá começar a usar a nova licença. Isso porque, se a licença A for compatível com a licença B, você cumprirá os termos de A enquanto cumpre os termos de B (mas não necessariamente vice-versa). Portanto, se você estiver usando uma licença permissiva (por exemplo, MIT), poderá mudar para uma licença com mais condições, contanto que mantenha uma cópia da licença do MIT e de quaisquer avisos de direitos autorais associados (ou seja, continue a obedecer à licença). Condições mínimas da licença MIT). Mas se a sua licença atual não for permissiva (por exemplo, copyleft ou você não tiver uma licença) e você não for o único detentor dos direitos autorais, não será possível alterar a licença do seu projeto para o MIT. Essencialmente, com uma licença permissiva, os detentores dos direitos autorais do projeto devem dar permissão prévia para alterar as licenças.

**Seu projeto possui detentores de direitos autorais.** Se você é o único contribuinte para o seu projeto, então você ou sua empresa é o único detentor dos direitos autorais do projeto. Você pode adicionar ou alterar qualquer licença que você ou sua empresa desejarem. Caso contrário, pode haver outros detentores de direitos autorais dos quais você precisa consentimento para alterar as licenças. Quem são eles? Um bom lugar para começar é olhar as pessoas que contribuiram para o seu projeto. Mas, em alguns casos, os direitos autorais serão mantidos pelos empregadores dessas pessoas. Em alguns casos, as pessoas só fizeram contribuições mínimas, mas não há nenhuma regra rígida e rápida de que as contribuições sob um certo número de linhas de código não estão sujeitas a direitos autorais. O que fazer? Depende. Para um projeto relativamente pequeno e jovem, pode ser viável fazer com que todos os contribuidores existentes aceitem uma alteração de licença através de uma issue ou pull request. Para projetos grandes e de longa duração, você pode ter que procurar muitos colaboradores e até mesmo seus herdeiros. A Mozilla levou anos (2001-2006) para relicenciar o Firefox, Thunderbird e software relacionado.

Como alternativa, você pode fazer com que os colaboradores concordem com antecedência (por meio de um acordo de colaborador adicional - veja abaixo) com determinadas alterações de licença em determinadas condições, além daquelas permitidas pela sua licença de código aberto existente. Isso muda um pouco a complexidade de alterar licenças. Você precisará de mais ajuda de seus advogados lá na frente, e você ainda vai querer se comunicar claramente com as partes interessadas do seu projeto ao executar uma alteração de licença.

## Meu projeto precisa de um contrato de contribuição adicional?

Provavelmente não. Para a grande maioria dos projetos de código aberto, uma licença de código aberto serve implicitamente como a licença de entrada (de contribuidores) e de saída (para outros contribuidores e usuários). Se o seu projeto estiver no GitHub, os Termos de Serviço do GitHub tratam "entrada=saída" de [por padrão](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license).

An additional contributor agreement -- often called a Contributor License Agreement (CLA) -- can create administrative work for project maintainers. How much work an agreement adds depends on the project and implementation. A simple agreement might require that contributors confirm, with a click, that they have the rights necessary to contribute under the project open source license. A more complicated agreement might require legal review and sign-off from contributors' employers.

Also, by adding "paperwork" that some believe is unnecessary, hard to understand, or unfair (when the agreement recipient gets more rights than contributors or the public do via the project's open source license), an additional contributor agreement may be perceived as unfriendly to the project's community.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/bcantrill?s=180" class="pquote-avatar" alt="avatar">
    We have eliminated the CLA for Node.js. Doing this lowers the barrier to entry for Node.js contributors thereby broadening the contributor base.
  <p markdown="1" class="pquote-credit">
— @bcantrill, ["Broadening Node.js Contributions"](https://www.joyent.com/blog/broadening-node-js-contributions)
  </p>
</aside>

Some situations where you may want to consider an additional contributor agreement for your project include:

* Your lawyers want all contributors to expressly accept (_sign_, online or offline) contribution terms, perhaps because they feel the open source license itself is not enough (even though it is!). If this is the only concern, a contributor agreement that affirms the project's open source license should be enough. The [jQuery Individual Contributor License Agreement](https://contribute.jquery.org/CLA/) is a good example of a lightweight additional contributor agreement. For some projects, a [Developer Certificate of Origin](https://github.com/probot/dco) can be an alternative.
* Your project uses an open source license that does not include an express patent grant (such as MIT), and you need a patent grant from all contributors, some of whom may work for companies with large patent portfolios that could be used to target you or the project's other contributors and users. The [Apache Individual Contributor License Agreement](https://www.apache.org/licenses/icla.pdf) is a commonly used additional contributor agreement that has a patent grant mirroring the one found in the Apache License 2.0.
* Your project is under a copyleft license, but you also need to distribute a proprietary version of the project. You'll need every contributor to assign copyright to you or grant you (but not the public) a permissive license. The [MongoDB Contributor Agreement](https://www.mongodb.com/legal/contributor-agreement) is an example this type of agreement.
* You think your project might need to change licenses over its lifetime and want contributors to agree in advance to such changes.

If you do need to use an additional contributor agreement with your project, consider using an integration such as [CLA assistant](https://github.com/cla-assistant/cla-assistant) to minimize contributor distraction.

## What does my company's legal team need to know?

If you're releasing an open source project as a company employee, first, your legal team should know that you're open sourcing a project.

For better or worse, consider letting them know even if it's a personal project. You probably have an "employee IP agreement" with your company that gives them some control of your projects, especially if they are at all related to the company's business or you use any company resources to develop the project. Your company _should_ easily give you permission, and maybe already has through an employee-friendly IP agreement or a company policy. If not, you can negotiate (for example, explain that your project serves the company's professional learning and development objectives for you), or avoid working on your project until you find a better company.

**If you're open sourcing a project for your company,** then definitely let them know. Your legal team probably already has policies for what open source license (and maybe additional contributor agreement) to use based on the company's business requirements and expertise around ensuring your project complies with the licenses of its dependencies. If not, you and they are in luck! Your legal team should be eager to work with you to figure this stuff out. Some things to think about:

* **Third party material:** Does your project have dependencies created by others or otherwise include or use others' code? If these are open source, you'll need to comply with the materials' open source licenses. That starts with choosing a license that works with the third party open source licenses (see above). If your project modifies or distributes third party open source material, then your legal team will also want to know that you're meeting other conditions of the third party open source licenses such as retaining copyright notices. If your project uses others' code that doesn't have an open source license, you'll probably have to ask the third party maintainers to [add an open source license](https://choosealicense.com/no-license/#for-users), and if you can't get one, stop using their code in your project.

* **Trade secrets:** Consider whether there is anything in the project that the company does not want to make available to the general public. If so, you could open source the rest of your project, after extracting the material you want to keep private.

* **Patents:** Is your company applying for a patent of which open sourcing your project would constitute [public disclosure](https://en.wikipedia.org/wiki/Public_disclosure)? Sadly, you might be asked to wait (or maybe the company will reconsider the wisdom of the application). If you're expecting contributions to your project from employees of companies with large patent portfolios, your legal team may want you to use a license with an express patent grant from contributors (such as Apache 2.0 or GPLv3), or an additional contributor agreement (see above).

* **Trademarks:** Double check that your project's name [does not conflict with any existing trademarks](../starting-a-project/#avoiding-name-conflicts). If you use your own company trademarks in the project, check that it does not cause any conflicts. [FOSSmarks](http://fossmarks.org/) is a practical guide to understanding trademarks in the context of free and open source projects.

* **Privacy:** Does your project collect data on users? "Phone home" to company servers? Your legal team can help you comply with company policies and external regulations.

If you're releasing your company's first open source project, the above is more than enough to get through (but don't worry, most projects shouldn't raise any major concerns).

Longer term, your legal team can do more to help the company get more from its involvement in open source, and stay safe:

* **Employee contribution policies:** Consider developing a corporate policy that specifies how your employees contribute to open source projects. A clear policy will reduce confusion among your employees and help them contribute to open source projects in the company's best interest, whether as part of their jobs or in their free time. A good example is Rackspace's [Model IP and Open Source Contribution Policy](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/vanl?s=180" class="pquote-avatar" alt="avatar">
  Letting out the IP associated with a patch builds the employee's knowledge base and reputation. It shows that the company is invested in the development of that employee and creates a sense of empowerment and autonomy. All of these benefits also lead to higher morale and better employee retention.
  <p markdown="1" class="pquote-credit">
— @vanl, ["A Model IP and Open Source Contribution Policy"](https://processmechanics.com/2015/07/22/a-model-ip-and-open-source-contribution-policy/)
  </p>
</aside>

* **What to release:** [(Almost) everything?](http://tom.preston-werner.com/2011/11/22/open-source-everything.html) If your legal team understands and is invested in your company's open source strategy, they'll be best able to help rather than hinder your efforts.
* **Compliance:** Even if your company doesn't release any open source projects, it uses others' open source software. [Awareness and process](https://www.linuxfoundation.org/blog/2015/06/why-companies-that-use-open-source-need-a-compliance-program/) can prevent headaches, product delays, and lawsuits.

<aside markdown="1" class="pquote">
  Organizations must have a license and compliance strategy in place that fits both \["permissive" and "copyleft"\] categories. This begins with keeping a record of the licensing terms that apply to the open source software you’re using — including subcomponents and dependencies.
  <p markdown="1" class="pquote-credit">
— Heather Meeker, ["Open Source Software: Compliance Basics And Best Practices"](https://techcrunch.com/2012/12/14/open-source-software-compliance-basics-and-best-practices/)
  </p>
</aside>

* **Patents:** Your company may wish to join the [Open Invention Network](https://www.openinventionnetwork.com/), a shared defensive patent pool to protect members' use of major open source projects, or explore other [alternative patent licensing](https://www.eff.org/document/hacking-patent-system-2016).
* **Governance:** Especially if and when it makes sense to move a project to a [legal entity outside of the company](../leadership-and-governance/#do-i-need-a-legal-entity-to-support-my-project).
