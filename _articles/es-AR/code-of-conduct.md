---
locale: es-AR
title: Your Code of Conduct
description: Facilitate healthy and constructive community behavior by adopting and enforcing a code of conduct.
class: coc
toc:
  why-do-i-need-a-code-of-conduct: "Why do I need a code of conduct?"
  establishing-a-code-of-conduct: "Establishing a code of conduct"
  deciding-how-youll-enforce-your-code-of-conduct: "Deciding how you’ll enforce your code of conduct"
  enforcing-your-code-of-conduct: "Enforcing your code of conduct"
order: 8
image: /assets/images/cards/coc.png
---


## Why do I need a code of conduct?

A code of conduct is a document that establishes expectations for behavior for your project's participants. Adopting, and enforcing, a code of conduct can help create a positive social atmosphere for your community.

Codes of conduct help protect not just your participants, but yourself. If you maintain a project, you may find that unproductive attitudes from other participants can make you feel drained or unhappy about your work over time.

A code of conduct empowers you to facilitate healthy, constructive community behavior. Being proactive reduces the likelihood that you, or others, will become fatigued with your project, and helps you take action when someone does something you don't agree with.

## Establishing a code of conduct

Try to establish a code of conduct as early as possible: ideally, when you first create your project.

In addition to communicating your expectations, a code of conduct describes the following:

* Where the code of conduct takes effect _(only on issues and pull requests, or community activities like events?)_
* Whom the code of conduct applies to _(community members and maintainers, but what about sponsors?)_
* What happens if someone violates the code of conduct
* How someone can report violations

Wherever you can, use prior art. The [Contributor Covenant](http://contributor-covenant.org/) is a drop-in code of conduct that is used by over 40,000 open source projects, including Kubernetes, Rails, and Swift.

The [Django Code of Conduct](https://www.djangoproject.com/conduct/) and the [Citizen Code of Conduct](http://citizencodeofconduct.org/) are also two good code of conduct examples.

Place a CODE_OF_CONDUCT file in your project's root directory, and link to it from your README, so it's visible to your community.

## Deciding how you'll enforce your code of conduct

<aside markdown="1" class="pquote">
  A code of conduct that isn't (or can't be) enforced is worse than no code of conduct at all: it sends the message that the values in the code of conduct aren't actually important or respected in your community.
  <p markdown="1" class="pquote-credit">
— [Ada Initiative](https://adainitiative.org/2014/02/18/howto-design-a-code-of-conduct-for-your-community/)
  </p>
</aside>

You should explain how your code of conduct will be enforced **_before_** a violation occurs. There are several reasons to do so:

* It demonstrates that you are serious about taking action when it's needed.

* Your community will feel more reassured that complaints actually get reviewed.

* You'll reassure your community that the review process is fair and transparent, should they ever find themselves investigated for a violation.

You should give people a private way (such as an email address) to report a code of conduct violation and explain who receives that report. It could be a maintainer, a group of maintainers, or a code of conduct working group.

Don't forget that someone might want to report a violation about a person who receives those reports. In this case, give them an option to report violations to someone else. For example, @ctb and @mr-c [explain on their project](https://github.com/dib-lab/khmer/blob/master/CODE_OF_CONDUCT.rst), [khmer](https://github.com/dib-lab/khmer):

> Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by emailing **khmer-project@idyll.org** which only goes to C. Titus Brown and Michael R. Crusoe. To report an issue involving either of them please email **Judi Brown Clarke, Ph.D.** the Diversity Director at the BEACON Center for the Study of Evolution in Action, an NSF Center for Science and Technology.*

For inspiration, check out Django's [enforcement manual](https://www.djangoproject.com/conduct/enforcement-manual/) (though you may not need something this comprehensive, depending on the size of your project).

## Enforcing your code of conduct

Sometimes, despite your best efforts, somebody will do something that violates this code. There are several ways to address negative or harmful behavior when it comes up.

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


<!-----
locale: es-AR
title: Código de Conducta
description: Facilitar el comportamiento sano y constructivo, adoptando y aplicando un código de conducta.
class: coc
toc:
  why-do-i-need-a-code-of-conduct: "¿Por qué es necesario un código de conducta?"
  establishing-a-code-of-conduct: "Estableciendo un código de conducta"
  deciding-how-youll-enforce-your-code-of-conduct: "Decidiendo de qué manera vas a aplicar tu código de conducta"
  enforcing-your-code-of-conduct: " Aplicando tu código de conducta"
order: 8
imagen: /assets/images/cards/coc.png


## ¿Por qu&eacute; es necesario un c&oacute;digo de conducta?

Un c&oacute;digo de conducta es un documento que establece expectativas de comportamiento para los participantes de tu proyecto. Adoptar, y aplicar, un c&oacute;digo de conducta, ayuda a crear una atmosfera social positiva para la comunidad.

Los c&oacute;digos de conducta ayudan a proteger no solo a tus participantes, sino tambi&eacute;n a ti mismo. Si mantienes un proyecto, sabr&aacute;s que las actitudes improductivas de otros participantes pueden hacerte sentir sin energ&iacute;a o infeliz acerca de tu trabajo.

Un c&oacute;digo de conducta te alienta a facilitar un comportamiento saludable y constructivo por parte de la comunidad. Ser proactivo reduce la probabilidad de que tanto t&uacute;, como otros, se sientan fatigados con el proyecto, y te ayuda a tomar acci&oacute;n cuando alguien hace algo con lo que no concuerdas.

## Estableciendo un c&oacute;digo de conducta

Intenta establecer un c&oacute;digo de conducta tan tempranamente como sea posible: idealmente, cuando crees t&uacute; proyecto.

Adem&aacute;s de comunicar tus expectativas, un c&oacute;digo de conducta describe lo siguiente:
*	Donde el c&oacute;digo de conducta toma efecto _(¿solamente en las issues y pull requests, o en actividades de la comunidad como eventos?)_
*	A quien o quienes aplica el c&oacute;digo de conducta _(miembros de la comunidad y mantenedores, pero ¿Qu&eacute; hay acerca de los sponsors?)_
*	Que sucede si alguien viola el c&oacute;digo de conducta
*	De qu&eacute; manera alguien puede reportar una violaci&oacute;n

Siempre que sea posible, haga uso del art. El [Contributor Covenant](http://contributor-covenant.org/) es un c&oacute;digo de conducta usado por m&aacute;s de 40,000 proyectos de software libre, incluyendo Kubernetes, Rails, and Swift.

El [Django Code of Conduct](https://www.djangoproject.com/conduct/) y el [Citizen Code of Conduct](http://citizencodeofconduct.org/) son tambi&eacute;n dos ejemplos de buenos c&oacute;digos de conducta.

Ubica un archivo CODIGO_DE_CONDUCTA en el directorio ra&iacute;z de tu proyecto, y enl&aacute;zalo desde tu LEEME, as&iacute; el mismo se encuentra visible a tu comunidad.

## Decidiendo de que manera vas a aplicar tu c&oacute;digo de conducta

<aside markdown="1" class="pquote">
  Un c&oacute;digo de conducta que no es (o no puede) ser aplicado, es incluso peor que no tener un c&oacute;digo de conducta: Esto demostrar&iacute;a que los valores en el c&oacute;digo de conducta no son importantes o no son respetados en tu comunidad.
  <p markdown="1" class="pquote-credit">
— [Ada Initiative](https://adainitiative.org/2014/02/18/howto-design-a-code-of-conduct-for-your-community/)
  </p>
</aside>

Deber&iacute;as explicar de qu&eacute; manera tu c&oacute;digo de conducta va a ser aplicado **_antes_** de que una violaci&oacute;n ocurra. Hay varios motivos para ello:

*	Esto demuestra que eres serio acerca de tomar acciones cuando sea necesario.
*	Tu comunidad se sentir&aacute; m&aacute;s segura de que sus reclamos son realmente revisados.
*	Brindaras a tu comunidad la seguridad de que el proceso de revisi&oacute;n es justo y transparente, en el caso en que se encuentren siendo investigados por una violaci&oacute;n.

Deber&iacute;as brindar a las personas, una manera privada (por ejemplo, mediante una direcci&oacute;n de email)de reportar una violaci&oacute;n al c&oacute;digo de conducta y explicar qui&eacute;n recibe dicho reporte. Puede ser un mantenedor, un grupo de mantenedores, o un grupo de trabajo de c&oacute;digo de conducta.

Recuerda que alguien puede que desee reportar una violaci&oacute;n acerca de la persona que recibe dichos reportes. En tal caso, br&iacute;ndales la posibilidad de que dichos reportes, sean revisados por alguien m&aacute;s. Por ejemplo, @ctb y @mr-c [explican en su proyecto](https://github.com/dib-lab/khmer/blob/master/CODE_OF_CONDUCT.rst), [khmer](https://github.com/dib-lab/khmer):

>Instancias de abuso, acoso o similares comportamientos inaceptables pueden ser reportados mandando un email a **khmer-project@idyll.org** el cual solamente se dirigir&aacute; a C. Titus Brown and Michael R. Crusoe. Para reportar una cuesti&oacute;n que involucra a ambos, por favor env&iacute;a un email a **Judi Brown Clarke, Ph.D.** el Director de Diversidad en el BEACON Center for the Study of Evolution in Action, un centro de la Fundaci&oacute;n de Ciencia Nacional para la Ciencia y Tecnologia.*
Para inspirarte, mira el manual de ejecuci&oacute;n de Django(https://www.djangoproject.com/conduct/enforcement-manual/)  (aunque quiz&aacute;s no necesites algo tan amplio, dependiendo del tama&ntilde;o de tu proyecto).
## Aplicando tu c&oacute;digo de conducta
En ocasiones, a pesar de tus mayores esfuerzos, alguien har&aacute; algo que violara este c&oacute;digo. Existen diferentes maneras de abordar el comportamiento negativo o da&ntilde;ino en la pr&aacute;ctica.
### Recolectar informaci&oacute;n acerca de la situaci&oacute;n
Ot&oacute;rgale la importancia a lo que cada miembro de la comunidad tiene para decir como se la dar&iacute;as a lo que t&uacute; tienes para decir. Si recibes un reporte de que alguien ha violado el c&oacute;digo de conducta, t&oacute;matelo seriamente e investiga el asunto, incluso si no condice con tu experiencia con dicha persona. De esta manera, demuestras a tu comunidad que valoras su perspectiva y conf&iacute;as en su juicio.
El miembro de la comunidad puede ser un reincidente quien constantemente hace sentir incomodos a los dem&aacute;s o puede haber hecho o dicho algo por &uacute;nica vez. En ambas situaciones podemos tomar acciones, dependiendo del contexto.
Antes de que respondas, t&oacute;mate tu tiempo para entender lo que sucedi&oacute;. Lee los comentarios y conversaciones pasados de la persona para entender mejor quienes son y por qu&eacute; podr&iacute;an haber actuado de tal manera. Intenta recolectar perspectivas de otros acerca de dicha persona y su comportamiento.
<aside markdown="1" class="pquote">
  No entres en discusiones. No se desv&iacute;e a tratar con el comportamiento de otra persona antes de que haya terminado de tratar con el asunto en cuesti&oacute;n. Enf&oacute;cate en lo que necesitas.
  <p markdown="1" class="pquote-credit">
— Stephanie Zvan, ["So You've Got Yourself a Policy. Now What?"](https://the-orbit.net/almostdiamonds/2014/04/10/so-youve-got-yourself-a-policy-now-what/)
  </p>
</aside>

### Tomar acciones apropiadas

Luego de recolectar y procesar suficiente informaci&oacute;n, necesitaras decidirte que hacer. Mientras consideras tus siguientes pasos, recuerda que tu objetivo como moderador es fomentar un ambiente seguro, respetuoso y colaborativo. Considera no solamente como tratar la situaci&oacute;n en cuesti&oacute;n, sino tambi&eacute;n como tu respuesta afectara al comportamiento y expectativas del resto de tu comunidad.

Cuando alguien reporta una violaci&oacute;n al c&oacute;digo de conducta, es tu trabajo ocuparte de ella, y no de otra persona. A veces, el reportante est&aacute; revelando la informaci&oacute;n con gran riesgo para su carrera, reputaci&oacute;n o integridad f&iacute;sica. Forzarlos a confrontar a su acosador puede poner en una posici&oacute;n comprometedora al reportante. Debes comunicarte de manera directa con la persona en cuesti&oacute;n, a menos que el reportante expl&iacute;citamente solicite lo contrario.

Existen varias maneras de responder a una violaci&oacute;n del c&oacute;digo de conducta:

* **Dar a la persona en cuesti&oacute;n una advertencia publica** y explicarle de que manera su comportamiento ha impactado negativamente en los dem&aacute;s, preferiblemente en el canal en donde ocurri&oacute;. Siempre que sea posible, la comunicaci&oacute;n publica transmite a la comunidad la seriedad con la que consideras al c&oacute;digo de conducta.. Se amable, pero firme, en la manera en que te comunicas.
* **Acercarse de forma privada a la persona** en cuesti&oacute;n para explicarle de que manera su comportamiento impacto negativamente en los dem&aacute;s. Puedes usar un canal de comunicaci&oacute;n privado si la situaci&oacute;n involucra informaci&oacute;n personal. Si te comunicas de manera privada con alguien, es una buena idea realizar una copia carb&oacute;n a los primeros que hayan reportado la situaci&oacute;n, de esta manera sabr&aacute;n que tomaste acciones. P&iacute;dele consentimiento al reportante antes de enviarle una copia carb&oacute;n.

En ocasiones, no es posible lograr una soluci&oacute;n. La persona en cuesti&oacute;n puede volverse agresiva y hostil cuando sea confrontada o puede que no cambie su comportamiento. Frente a esta situaci&oacute;n, deber&iacute;as considerar tener en cuenta medidas m&aacute;s fuertes. Por ejemplo:

* **Suspender a la persona** en cuesti&oacute;n del proyecto, aplicando una prohibici&oacute;n en la participaci&oacute;n en todo aspecto del proyecto.
* **Expulsar permanentemente** a la persona del proyecto.

La expulsi&oacute;n de miembros no debe ser tomado a la ligera y representa una permanente e irreconciliable diferencia de perspectiva. Deber&iacute;as tomar estas medidas solamente cuando es evidente que no puede llegarse a una soluci&oacute;n.

## Tus responsabilidades como mantenedor
Un c&oacute;digo de conducta no es una ley aplicada arbitrariamente. Tu eres quien aplica el c&oacute;digo de conducta y es tu responsabilidad seguir las reglas que el c&oacute;digo de conducta establece.
Como mantenedor, tu estableces las directrices de tu comunidad y las aplicas de acuerdo a las reglas establecidas en tu c&oacute;digo de conducta. Esto implica considerar seriamente a cualquier violaci&oacute;n al c&oacute;digo de conducta. El reportante merece una justa y total revisi&oacute;n de su reclamo. Si determinas que el comportamiento reportado no es una violaci&oacute;n, comun&iacute;cate de manera clara con ellos y expl&iacute;cales por que no tomaras ninguna acci&oacute;n. Lo que hacen con eso depende de ellos: tolerar el comportamiento con el cual ten&iacute;an un problema, o dejar de participar en la comunidad.
Un reporte de comportamiento que _tecnicamente_ no viola el c&oacute;digo de conducta puede indicar que hay un problema en tu comunidad, y deber&iacute;as investigar este problema potencial y actuar acorde. Esto puede incluir revisar tu c&oacute;digo de conducta para clarificar comportamientos aceptables y/o hablar con la persona cuyo comportamiento fue reportado y explicarles que si bien no han violado el c&oacute;digo de conducta, est&aacute;n rozando el borde de lo que se espera y est&aacute;n haciendo sentir incomodos a ciertos participantes.
Finalmente, como mantenedor, tu estableces y aplicas los est&aacute;ndares de comportamiento aceptable. Tienes la habilidad para moldear los valores de la comunidad del proyecto, y los participantes cuentan con que apliques dichos valores de manera justa e imparcial.
## Promover el comportamiento que quieres ver en el mundo 🌎
Cuando un proyecto parece hostil y poco acogedor, incluso cuando se trata solamente de una persona cuyo comportamiento es tolerado por los dem&aacute;s, te arriesgas a perder mucho m&aacute;s contribuidores, algunos de los cuales quiz&aacute;s no conozcas jam&aacute;s. No siempre es f&aacute;cil adoptar o aplicar un c&oacute;digo de conducta, pero fomentar un ambiente acogedor ayudara a que tu comunidad crezca.
----->