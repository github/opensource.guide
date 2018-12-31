---
lang: pt
title: Seu código de conduta
description: Facilite comportamentos saudáveis e construtivos de sua comunidade adotando e reforçando um código de conduta
class: coc
toc:
  why-do-i-need-a-code-of-conduct: "Por que eu preciso de um código de conduta?"
  establishing-a-code-of-conduct: "Estabelecendo um código de conduta"
  deciding-how-youll-enforce-your-code-of-conduct: "Decidindo como você irá aplicar seu código de conduta"
  enforcing-your-code-of-conduct: "Aplicando seu código de conduta"
  your-responsibilities-as-a-maintainer: "Suas responsabilidades como mantenedor"
order: 8
image: /assets/images/cards/coc.png
related:
  - building
  - leadership
---

## Por que eu preciso de um código de conduta?

Um código de conduta é um documento que estabelece o comportamento esperado dos participantes do seu projeto.
. Adotar e aplicar um código de conduta pode ajudar a criar uma atmosfera social positiva para a sua comunidade.

Códigos de conduta ajudam a proteger não somente seus participantes, mas você mesmo. Se você mantém um projeto, pode chegar a conclusão de que atitudes improdutivas de outros participantes podem fazer com que você se sinta drenado ou infeliz com o seu trabalho ao longo do tempo.

Um código de conduta te empondera para facilitar comportamentos saudáveis e construtivos de sua comunidade. Ser proativo reduz a probabilidade de que você, ou outros, se tornem fatigados com o seu projeto, e o ajudam a tomar alguma ação quando alguém faz algo que você não concorde.

## Estabelecendo um código de conduta

Tente estabelecer um código de conduta o mais cedo quanto possível: idealmente, assim que você criar o seu projeto.

Além de comunicar aquilo que você espera, um código de conduta descreve o seguinte:

* Onde o código de conduta tem validade _(somente em issues e pull requests, ou atividades da comunidade, como eventos?)_
* A quem o código de conduta se aplica _(membros da comunidade e mantenedores, mas e sobre patrocinadores?)_
* O que acontece se alguém violar o código de conduta
* Como alguém pode reportar violações

Sempre que possível, use exemplos passados. O [Contributor Covenant](https://contributor-covenant.org/) é um código de conduta que é usado por mais de 40.000 projetos _open source_, incluindo Kubernetes, Rails, e Swift.

O [Django Code of Conduct](https://www.djangoproject.com/conduct/) e o [Citizen Code of Conduct](http://citizencodeofconduct.org/) são, tambémm, outros dois bons exemplos de códigos de conduta.

Coloque um arquivo CODE_OF_CONDUCT no diretório raiz do seu projeto, e faça-o visivel a sua comunidade criando um link para ele no arquivo CONTRIBUTING ou README.

## Decidindo como você irá aplicar seu código de conduta

<aside markdown="1" class="pquote">
  Um código de conduta que não é (ou não pode) ser aplicado é pior do que não ter nenhum código de conduta: isso passa a mensagem de que os valores no código de conduta não são, na verdade, importantes ou respeitados na sua comunidade.
  <p markdown="1" class="pquote-credit">
— [Ada Initiative](https://adainitiative.org/2014/02/18/howto-design-a-code-of-conduct-for-your-community/)
  </p>
</aside>

Você deve explicar como o seu código de conduta será aplicado **_antes_** que uma violação ocorra. Há inúmeras razões por trás disso:

* Demonstra sua seriedade sobre tomar as devidas ações, quando necessário.

* Sua comunidade irá se sentir mais reafirmada de que queixas são de fatos revisadas.

* Você irá reafirmar a sua comunidade de que o processo de revisão é justo e transparente, caso eles se encontrem investigados por uma violação.

Você deve sempre dar as pessoas um modo privado (como um endereço de email) para relatar uma violação do código de conduta e explicar quem recebe tal queixa. Poderia ser um mantenedor, um grupo de mantenedores, ou um grupo de trabalho do código de conduta.

Não se esqueça de que alguém pode querer relatar uma violação sobre alguém que receba esses relatos. Neste caso, dê a eles uma opção para relatar violações a outra pessoa. Por exemplo, @ctb e @mr-c [explicam em seu projeto](https://github.com/dib-lab/khmer/blob/master/CODE_OF_CONDUCT.rst), [khmer](https://github.com/dib-lab/khmer):

> Casos de comportamento abusivo, de assédio, ou de outra forma inaceitável podem ser relatados enviando um email para **khmer-project@idyll.org**, chegando somente a C. Titus Brown e Michael R. Crusoe. Para relatar um problema envolvendo algum deles, por favor envie um email para **Judi Brown Clarke, Ph.D.**, o Diretor de Diversidade no Centro BEACON para o Estudo da Evolução em Ação, um Centro NSF para Ciência e Tecnologia.*

Para inspiração, dê uma olhada no [manual de aplicação](https://www.djangoproject.com/conduct/enforcement-manual/) do Django (embora possa ser o caso de você não precisar de algo tão compreensivo, dependendo do tamanho do seu projeto).

## Aplicando o seu código de conduta

As vezes, apesar dos seus melhores esforços, alguém irá fazer algo que viole o código. Há diversas formas de endereçar comportamentos negativos ou danosos quando isso acontece.

### Colete informações sobre a situação

Trate a voz de cada membro da comunidade como tão importante quanto a sua. Se você receber uma queixa de que alguém violou o código de conduta, assuma isso seriamente e investigue o assunto, mesmo que isso não corresponda a sua experiência pessoal com a pessoa em questão. Fazer isso sinaliza para a sua comunidade que você valoriza sua perspectiva e confia em seu julgamento.

O membro da comunidade em questão pode ser um infrator reincidente que, consistentemente, faz os outros se sentirem desconfortáveis, ou ele pode ter dito ou feito algo somente uma vez. Ambos podem motivar a tomada de ação, dependendo do contexto.

Antes de responder, tome algum tempo para entender o que aconteceu. Leia os comentários anteriores da pessoa e suas conversas para entender melhor quem elas são e porque elas podem ter agido dessa forma. Tente coletar perspectivas de outros sobre esta pessoa e seu comportamento.

<aside markdown="1" class="pquote">
  Não seja puxado para dentro de uma discussão. Não seja desviado para lidar com o comportamento de outra pessoa antes de ter terminado de lidar com o assunto em questão. Foque no que você precisa.
  <p markdown="1" class="pquote-credit">
— Stephanie Zvan, ["So You've Got Yourself a Policy. Now What?"](https://the-orbit.net/almostdiamonds/2014/04/10/so-youve-got-yourself-a-policy-now-what/)
  </p>
</aside>

### Tome a ação apropriada

Após coletar e processar informação o suficiente, você precida decidir o que fazer. Conforme você considerar os próximos passos, lembre-se de que o seu objetivo como um moderador é o de fomentar um ambiente seguro, respeitoso e colaborativo. Considere não somente como lidar com a situação em questão, mas como sua resposta irá afetar o comportamento e expectitativas do resto da comunidade daí em diante.

Quando alguém relata uma violação do código de conduta, é seu trabalho, e não o deles, lidar com isso. Algumas vezes, o relator está divulgando informação que põe em grande risco sua carreira, reputação ou segurança física. Forçá-los a confrontar seu assediador poderia colocar o relator em uma posição comprometedora. Você deve lidar diretamente com a comunicação com a pessoa em questão, a não ser que o relator explicitamente peça o contrário.

Existem alguns ações que você pode tomar para responder a uma violação ao código de conduta:

* **Dê à pessoa em questão uma advertência pública** e explique como o seu comportamento impactou negativamente os outros, preferencialmente no canal onde isso ocorreu. Onde possível, a comunicação pública transmite ao resto da comunidade que você toma o código de conduta seriamente. Seja gentil, mas firme em sua comunicação.

* **Entre em contato privado com a pessoa** em questão para explicar como o seu comportamento impactou os outros negativamente. Você pode querer utilizar um canal de comunicação privado se a situação envolver informação pessoal sensível. Se você se comunicar com alguem privadamente, é uma boa ideia enviar uma cópa do diálogo àqueles que primeiro relataram a situação, de modo que eles saibam que você tomou uma ação. Peça ao relator consentimento antes de enviá-lo tal cópia.

Algumas vezes, uma resolução não pode ser alcançada. A pessoa em questão pode se tornar agressiva ou hostil quando confrontada ou não muda seu comportamento. Nessa situação, você pode querer considerar tomar uma medida mais forte. Por exemplo:

* **Suspender a pessoa** em questão do projeto, reforçado por um banimento temporário na participação de qualquer aspecto do projeto.

* **Banir permanentemente** a pessoa do projeto.

O banimento de membros não deve ser tomado de forma branda e representa uma diferença de perspectivas permanente e irreconciliável. Você deve tomar tais medidas somente quando está claro que uma resolução não pode ser alcançada.

## Your responsibilities as a maintainer

A code of conduct is not a law that is enforced arbitrarily. You are the enforcer of the code of conduct and it's your responsibility to follow the rules that the code of conduct establishes.

As a maintainer you establish the guidelines for your community and enforce those guidelines according to the rules set forth in your code of conduct. This means taking any report of a code of conduct violation seriously. The reporter is owed a thorough and fair review of their complaint. If you determine that the behavior that they reported is not a violation, communicate that clearly to them and explain why you're not going to take action on it. What they do with that is up to them: tolerate the behavior that they had an issue with, or stop participating in the community.

A report of behavior that doesn't _technically_ violate the code of conduct may still indicate that there is a problem in your community, and you should investigate this potential problem and act accordingly. This may include revising your code of conduct to clarify acceptable behavior and/or talking to the person whose behavior was reported and telling them that while they did not violate the code of conduct, they are skirting the edge of what is expected and are making certain participants feel uncomfortable.

In the end, as a maintainer, you set and enforce the standards for acceptable behavior. You have the ability to shape the community values of the project, and participants expect you to enforce those values in a fair and even-handed way.

## Encourage the behavior you want to see in the world 🌎

When a project seems hostile or unwelcoming, even if it's just one person whose behavior is tolerated by others, you risk losing many more contributors, some of whom you may never even meet. It's not always easy to adopt or enforce a code of conduct, but fostering a welcoming environment will help your community grow.
