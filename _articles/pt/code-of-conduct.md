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

### Gather information about the situation

Treat each community member's voice as important as your own. If you receive a report that someone violated the code of conduct, take it seriously and investigate the matter, even if it does not match your own experience with that person. Doing so signals to your community that you value their perspective and trust their judgment.

The community member in question may be a repeat offender who consistently makes others feel uncomfortable, or they may have only said or done something once. Both can be grounds for taking action, depending on context.

Before you respond, give yourself time to understand what happened. Read through the person's past comments and conversations to better understand who they are and why they might have acted in such a way. Try to gather perspectives other than your own about this person and their behavior.

<aside markdown="1" class="pquote">
  Don’t get pulled into an argument. Don’t get sidetracked into dealing with someone else’s behavior before you’ve finished dealing with the matter at hand. Focus on what you need.
  <p markdown="1" class="pquote-credit">
— Stephanie Zvan, ["So You've Got Yourself a Policy. Now What?"](https://the-orbit.net/almostdiamonds/2014/04/10/so-youve-got-yourself-a-policy-now-what/)
  </p>
</aside>

### Take appropriate action

After gathering and processing sufficient information, you'll need to decide what to do. As you consider your next steps, remember that your goal as a moderator is to foster a safe, respectful, and collaborative environment. Consider not only how to deal with the situation in question, but how your response will affect the rest of your community's behavior and expectations moving forward.

When somebody reports a code of conduct violation, it is your, not their, job to handle it. Sometimes, the reporter is disclosing information at great risk to their career, reputation, or physical safety. Forcing them to confront their harasser could put the reporter in a compromising position. You should handle direct communication with the person in question, unless the reporter explicitly requests otherwise.

There are a few ways you might respond to a code of conduct violation:

* **Give the person in question a public warning** and explain how their behavior negatively impacted others, preferably in the channel where it occurred. Where possible, public communication conveys to the rest of the community that you take the code of conduct seriously. Be kind, but firm in your communication.

* **Privately reach out to the person** in question to explain how their behavior negatively impacted others. You may want to use a private communication channel if the situation involves sensitive personal information. If you communicate with someone privately, it's a good idea to CC those who first reported the situation, so they know you took action. Ask the reporting person for consent before CCing them.

Sometimes, a resolution cannot be reached. The person in question may become aggressive or hostile when confronted or does not change their behavior. In this situation, you may want to consider taking stronger action. For example:

* **Suspend the person** in question from the project, enforced through a temporary ban on participating in any aspect of the project

* **Permanently ban** the person from the project

Banning members should not be taken lightly and represents a permanent and irreconcilable difference of perspectives. You should only take these measures when it is clear that a resolution cannot be reached.

## Your responsibilities as a maintainer

A code of conduct is not a law that is enforced arbitrarily. You are the enforcer of the code of conduct and it's your responsibility to follow the rules that the code of conduct establishes.

As a maintainer you establish the guidelines for your community and enforce those guidelines according to the rules set forth in your code of conduct. This means taking any report of a code of conduct violation seriously. The reporter is owed a thorough and fair review of their complaint. If you determine that the behavior that they reported is not a violation, communicate that clearly to them and explain why you're not going to take action on it. What they do with that is up to them: tolerate the behavior that they had an issue with, or stop participating in the community.

A report of behavior that doesn't _technically_ violate the code of conduct may still indicate that there is a problem in your community, and you should investigate this potential problem and act accordingly. This may include revising your code of conduct to clarify acceptable behavior and/or talking to the person whose behavior was reported and telling them that while they did not violate the code of conduct, they are skirting the edge of what is expected and are making certain participants feel uncomfortable.

In the end, as a maintainer, you set and enforce the standards for acceptable behavior. You have the ability to shape the community values of the project, and participants expect you to enforce those values in a fair and even-handed way.

## Encourage the behavior you want to see in the world 🌎

When a project seems hostile or unwelcoming, even if it's just one person whose behavior is tolerated by others, you risk losing many more contributors, some of whom you may never even meet. It's not always easy to adopt or enforce a code of conduct, but fostering a welcoming environment will help your community grow.
