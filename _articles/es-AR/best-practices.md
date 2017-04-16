---
locale: es-AR
title: Buenas pr&aacute;cticas para mantenedores de c&oacute;digo.
description: Haciéndote la vida más fácil como un mantenedor de código abierto, desde el proceso de documentación hasta sacar el máximo provecho de la comunidad.
class: best-practices
toc:
  what-does-it-mean-to-be-a-maintainer: "¿Qué significa ser un mantenedor de código?"
  documenting-your-processes: "Documentando tus procesos"
  learning-to-say-no: "Aprendiendo a decir no"
  leverage-your-community: "Aprovechando la comunidad"
  bring-in-the-robots: "Traigan a los robots"
  its-okay-to-hit-pause: "Está bien poner pausa"
order: 5
image: /assets/images/cards/best-practices.png
---

## ¿Qué significa ser un mantenedor de código?

Si tu trabajo es mantener un proyecto de código abierto que mucha gente usa, probablemente te hayas percatado que pasas más tiempo respondiendo issues que programando.

En etapas tempranas de un proyecto, pasas tiempo experimentando con ideas nuevas y tomando decisiones en base a lo que te gusta. A medida que tu proyecto crece en popularidad, te encontrarás en una situación en la que trabajarás con tus usuarios y colaboradores cada vez más.

Mantener un proyecto requiere más que solamente código. Estas tareas no suelen ser tenidas en cuenta, pero son igual de importantes para un proyecto en crecimiento. Hemos reunido algunas ideas que harán tu vida más fácil, desde el proceso de documentación hasta sacar el máximo provecho de la comunidad.

## Documentando tus procesos

Tomar nota de los procedimientos es una de las mejores prácticas que puedes llevar a cabo como mantenedor de código.

Documentar no sólo aclara tu pensamiento, sino que también ayuda a otros a entender lo que necesitas o estás esperando, sin siquiera tener que preguntar.

Tomar nota de los procesimientos facilita el hecho de decir que no cuando la propuesta de alguien no encaja en tu contexto. Asi como también hace más fácil que otras personas puedan sumarse y ayudar. Nunca sabes quien podría estar leyendo o usando tu proyecto.

Aunque no seas del tipo de persona que escribe párrafos completos, tener los puntos claves anotados es mejor que no tener nada.

### Dejando en claro la visión de tu proyecto

Comienza escribiendo los objetivos de tu proyecto. Agrégalos a tu archivo README, o crea un archivo separado llamado VISION. Si existen otros artefactos que puedan ayudar, como un mapa del proyecto, házlos públicos también

Llevando una clara, documentada visión te mantiene en foco y ayuda a evitar el mal entendimiento del alcance por parte de otros colaboradores.

Por ejemplo, @lord descubrió que tener la visión de un proyecto lo ayudó a darse cuenta que peticiones priorizar. Como un mantenedor de código novato, se lamentó de no ser fiel al alcance del proyecto cuando recibió su primer pedido de funcionalidad por [Slate](https://github.com/lord/slate).

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/1976330?v=3&s=460" class="pquote-avatar" alt="avatar" alt="@lord avatar">
  Lo intenté. No le puse el esfuerzo necesario para salir adelante con una solución completa. En lugar de una solución a medias, hubiera deseado haber dicho "En este momento no tengo tiempo para eso, pero voy a agregar la funcionalidad a la lista de pendientes a desarrollar en el futuro."
  <p markdown="1" class="pquote-credit">
— @lord, ["Tips para mantenedores de código abierto"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

### Comunicar tus expectativas

Algunas veces puede que sea complicado detallar las reglas para que otra gente pueda contribuir. Puedes llegar a sentir que estás comportándote como un policia o arruinando la diversión para los demás.


Escritas y aplicadas de manera justa, sin embargo, las buenas reglas dan poder a los mantenedores de código. Evitan que te arrastren a hacer cosas que no quieres hacer.


La mayoría de las personas que se encuentran con tu proyecto no saben nada sobre ti o tus circunstancias. Pueden asumir que te pagan para trabajar en él, especialmente si es algo que usan y dependen regularmente. Tal vez en un momento ponías mucho tiempo en tu proyecto, pero ahora estás ocupado con un nuevo trabajo o algún miembro de la familia.

¡Está perfectamente bien! Sólo asegúrate de que la gente lo sepa.

Si el mantenimiento de tu proyecto es a tiempo parcial o simplemente ser voluntario, se honesto acerca de cuánto tiempo tienes. Esto no es lo mismo que cuánto tiempo piensas que el proyecto requiere, o cuánto tiempo otros quieren que gastes.

Aquí hay algunas reglas que vale la pena anotar:

* Cómo se revisa y acepta una contribución (_¿Necesitan hacer testing? ¿Alguna plantilla que deban utilizar para las issues?_)
* Los tipos de contribuciones que acepatarás (_¿Sólo quieres ayuda con una parte del código?_)
* Cuando es apropieado hacer seguimiento (_eg. "Puede esperar una respuesta de un mantenedor de código dentro de los próximos 7 días. Si no ha oído nada para entonces, no dude en hacer ping al hilo."_)
* Cuanto tiempo dedicas al proyecto (_eg. "Sólo invertimos unas 5 horas semanales en este proyecto"_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), y [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) son algunos ejemplos de proyectos con reglas claras para mantenedores y colaboradores.

### Mantener la comunicación pública

No olvides documentar tus interacciones, también. Dondequiera que puedas, mantén la comunicación sobre tu proyecto pública. Si alguien intenta ponerse en contacto contigo en privado para discutir una solicitud de funcionalidad o una necesidad de soporte, hágalo dirigirse educadamente a un canal de comunicación público, como una lista de correo o un rastreador de issues.

Si te reúnes con otros mantenedores, o tomas alguna decisión importante en privado, documenta estas conversaciones de manera pública, incluso si sólo estás publicando tus notas.

De esa manera, cualquiera que se una a tu comunidad tendrá acceso a la misma información que alguien que ha estado allí durante años.

## Aprender a decir no

Has escrito las cosas. Lo ideal sería que todo el mundo lea tu documentación, pero en realidad, tendrás que recordar a los demás que este conocimiento existe.

Tener todo escrito, sin embargo, ayuda a despersonalizar las situaciones cuando necesitas hacer cumplir tus reglas.

Decir que no, no es divertido, pero  _"Tu contribución no coincide con los criterios de este proyecto"_ se siente menos personal que _"No me gusta tu contribución"_.

Decir que no, se aplica a muchas situaciones que encontrarás como un mantenedor de código: solicitudes de funcionalidades que no encajan en el alcance, alguien que descarrila una discusión, hacer algún trabajo innecesario para otros.

### Mantener la conversación amistosa

Uno de los lugares más importantes en los que practicarás el decir que no, es en tu cola de issues y pull request. Como responsable del proyecto, inevitablemente recibirás sugerencias que no desearás aceptar.

Tal vez la contribución cambie el alcance de tu proyecto o no coincida con tu visión. Tal vez la idea es buena, pero la implementación es mala.

Regardless of the reason, it is possible to tactfully handle contributions that don't meet your project's standards.

If you receive a contribution you don't want to accept, your first reaction might be to ignore it or pretend you didn't see it. Doing so could hurt the other person's feelings and even demotivate other potential contributors in your community.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/869950?v=3&s=400" class="pquote-avatar" alt="avatar" alt="@KrauseFx avatar">
  The key to handle support for large-scale open source projects is to keep issues moving. Try to avoid having issues stall. If you're an iOS developer you know how frustrating it can be to submit radars. You might hear back 2 years later, and are told to try again with the latest version of iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

Don't leave an unwanted contribution open because you feel guilty or want to be nice. Over time, your unanswered issues and PRs will make working on your project feel that much more stressful and intimidating.

It's better to immediately close the contributions you know you don't want to accept. If your project already suffers from a large backlog, @steveklabnik has suggestions for [how to triage issues efficiently](http://words.steveklabnik.com/how-to-be-an-open-source-gardener).

Secondly, ignoring contributions sends a negative signal to your community. Contributing to a project can be intimidating, especially if it's someone's first time. Even if you don't accept their contribution, acknowledge the person behind it and thank them for their interest. It's a big compliment!

If you don't want to accept a contribution:

* **Thank them** for their contribution
* **Explain why it doesn't fit** into the scope of the project, and offer clear suggestions for improvement, if you're able. Be kind, but firm.
* **Link to relevant documentation**, if you have it. If you notice repeated requests for things you don't want to accept, add them into your documentation to avoid repeating yourself.
* **Close the request**

You shouldn't need more than 1-2 sentences to respond. For example, when a user of [celery](https://github.com/celery/celery/) reported a Windows-related error, @berkerpeksag [responded with](https://github.com/celery/celery/issues/3383):

![celery screenshot](/assets/images/best-practices/celery.png)

If the thought of saying no terrifies you, you're not alone. As @jessfraz [put it](https://blog.jessfraz.com/post/the-art-of-closing/):

> I've talked to maintainers from several different open source projects, Mesos, Kubernetes, Chromium, and they all agree one of the hardest parts of being a maintainer is saying "No" to patches you don't want.

Don't feel guilty about not wanting to accept someone's contribution. The first rule of open source, [according to](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"No is temporary, yes is forever."_ While empathizing with another person's enthusiasm is a good thing, rejecting a contribution is not the same as rejecting the person behind it.

Ultimately, if a contribution isn't good enough, you're under no obligation to accept it. Be kind and responsive when people contribute to your project, but only accept changes that you truly believe will make your project better. The more often you practice saying no, the easier it becomes. Promise.

### Be proactive

To reduce the volume of unwanted contributions in the first place, explain your project's process for submitting and accepting contributions in your contributing guide.

If you're receiving too many low-quality contributions, require that contributors do a bit of work beforehand, for example:

* Fill out a issue or PR template/checklist
* Open an issue before submitting a PR

If they don't follow your rules, close the issue immediately and point to your documentation.

While this approach may feel unkind at first, being proactive is actually good for both parties. It reduces the chance that someone will put in many wasted hours of work into a pull request that you aren't going to accept. And it makes your workload easier to manage.

<aside markdown="1" class="pquote">
  <img src="https://avatars0.githubusercontent.com/u/125011" class="pquote-avatar" alt="avatar">
  Ideally, explain to them and in a CONTRIBUTING.md file how they can get a better indication in the future on what would or would not be accepted before they begin the work.
  <p markdown="1" class="pquote-credit">
— @mikemcquaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

Sometimes, when you say no, your potential contributor may get upset or criticize your decision. If their behavior becomes hostile, [take steps to defuse the situation](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) or even remove them from your community, if they're not willing to collaborate constructively.

### Embrace mentorship

Maybe someone in your community regularly submits contributions that don't meet your project's standards. It can be frustrating for both parties to repeatedly go through rejections.

If you see that someone is enthusiastic about your project, but needs a bit of polish, be patient. Explain clearly in each situation why their contributions don't meet the expectations of the project. Try pointing them to an easier or less ambiguous task, like an issue marked _"good first bug,"_ to get their feet wet. If you have time, consider mentoring them through their first contribution, or find someone else in your community who might be willing to mentor them.

## Leverage your community

You don't have to do everything yourself. Your project's community exists for a reason! Even if you don't yet have an active contributor community, if you have a lot of users, put them to work.

### Share the workload

If you're looking for others to pitch in, start by asking around.

When you see new contributors making repeated contributions, recognize their work by offering more responsibility. Document how others can grow into leadership roles if they wish.

Encouraging others to [share ownership of the project](../building-community/#share-ownership-of-your-project) can greatly reduce your own workload, as @lmccart discovered on her project, [p5.js](https://github.com/processing/p5.js?files=1).

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/191056?v=3&s=460" class="pquote-avatar" alt="avatar">
  I’d been saying, “Yeah, anyone can be involved, you don’t have to have a lot of coding expertise [...].” We had people sign up to come [to an event] and that’s when I was really wondering: is this true, what I’ve been saying? There are gonna be 40 people who show up, and it’s not like I can sit with each of them...But people came together, and it just sort of worked. As soon as one person got it, they could teach their neighbor.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does “Open Source” Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39#.chnjlag7p)
  </p>
</aside>

If you need to step away from your project, either on hiatus or permanently, there's no shame in asking someone else to take over for you.

If other people are enthusiastic about its direction, give them commit access or formally hand over control to someone else. If someone forked your project and is actively maintaining it elsewhere, consider linking to the fork from your original project. It's great that so many people want your project to live on!

@progrium [found that](http://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documenting the vision for his project, [Dokku](https://github.com/dokku/dokku), helped those goals live on even after he stepped away from the project:

> I wrote a wiki page describing what I wanted and why I wanted it. For some reason it came as a surprise to me that the maintainers started moving the project in that direction! Did it happen exactly how I'd do it? Not always. But it still brought the project closer to what I wrote down.

### Let others build the solutions they need

If a potential contributor has a different opinion on what your project should do, you may want to gently encourage them to work on their own fork.

Forking a project doesn't have to be a bad thing. Being able to copy and modify projects is one of the best things about open source. Encouraging your community members to work on their own fork can provide the creative outlet they need, without conflicting with your project's vision.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/481677?v=3&s=400" class="pquote-avatar" alt="avatar">
  I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

The same applies to a user who really wants a solution that you simply don't have the bandwidth to build. Offering APIs and customization hooks can help others meet their own needs, without having to modify the source directly. @orta [found that](http://artsy.github.io/blog/2016/07/03/handling-big-projects/) encouraging plugins for CocoaPods led to "some of the most interesting ideas":

> It's almost inevitable that once a project becomes big, maintainers have to become a lot more conservative about how they introduce new code. You become good at saying "no", but a lot of people have legitimate needs. So, instead you end up converting your tool into a platform.

## Bring in the robots

Just as there are tasks that other people can help you with, there are also tasks that no human should ever have to do. Robots are your friend. Use them to make your life as a maintainer easier.

### Require tests and other checks to improve the quality of your code

One of the most important ways you can automate your project is by adding tests.

Tests help contributors feel confident that they won't break anything. They also make it easier for you to review and accept contributions quickly. The more responsive you are, the more engaged your community can be.

Set up automatic tests that will run on all incoming contributions, and ensure that your tests can easily be run locally by contributors. Require that all code contributions pass your tests before they can be submitted. You'll help set a minimum standard of quality for all submissions. [Required status checks](https://help.github.com/articles/about-required-status-checks/) on GitHub can help ensure no change gets merged without your tests passing.

If you add tests, make sure to explain how they work in your CONTRIBUTING file.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/812892?v=3&s=460" class="pquote-avatar" alt="avatar">
  I believe that tests are necessary for all code that people work on. If the code was fully and perfectly correct, it wouldn't need changes – we only write code when something is wrong, whether that's "It crashes" or "It lacks such-and-such a feature". And regardless of the changes you're making, tests are essential for catching any regressions you might accidentally introduce.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](http://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Use tools to automate basic maintenance tasks

The good news about maintaining a popular project is that other maintainers have probably faced similar issues and built a solution for it.

There are a [variety of tools available](https://github.com/showcases/tools-for-open-source) to help automate some aspects of maintenance work. A few examples:

* [semantic-release](https://github.com/semantic-release/semantic-release) automates your releases
* [mention-bot](https://github.com/facebook/mention-bot) mentions potential reviewers for pull requests
* [Danger](https://github.com/danger/danger) helps automate code review

For bug reports and other common contributions, GitHub has [Issue Templates and Pull Request Templates](https://github.com/blog/2111-issue-and-pull-request-templates), which you can create to streamline the communication you receive. You can also set up [email filters](https://github.com/blog/2203-email-updates-about-your-own-activity) to manage your email notifications.

If you want to get a little more advanced, style guides and linters can standardize project contributions and make them easier to review and accept.

However, if your standards are too complicated, they can increase the barriers to contribution. Make sure you're only adding enough rules to make everyone's lives easier.

If you're not sure which tools to use, look at what other popular projects do, especially those in your ecosystem. For example, what does the contribution process look like for other Node modules? Using similar tools and approaches will also make your process more familiar to your target contributors.

## It's okay to hit pause

Open source work once brought you joy. Maybe now it's starting to make you feel avoidant or guilty.

Perhaps you're feeling overwhelmed or a growing sense of dread when you think about your projects. And meanwhile, the issues and pull requests pile up.

Burnout is a real and pervasive issue in open source work, especially among maintainers. As a maintainer, your happiness is a non-negotiable requirement for the survival of any open source project.

Although it should go without saying, take a break! You shouldn't have to wait until you feel burned out to take a vacation. @brettcannon, a Python core developer, decided to take [a month-long vacation](http://www.snarky.ca/why-i-took-october-off-from-oss-volunteering) after 14 years of volunteer OSS work.

Just like any other type of work, taking regular breaks will keep you refreshed, happy, and excited about your work.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/36432?v=3&s=400" class="pquote-avatar" alt="avatar">
  In maintaining WP-CLI, I've discovered I need to make myself happy first, and set clear boundaries on my involvement. The best balance I've found is 2-5 hours per week, as a part of my normal work schedule. This keeps my involvement a passion, and from feeling too much like work. Because I prioritize the issues I'm working on, I can make regular progress on what I think is most important.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://runcommand.io/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

Sometimes, it can be hard to take a break from open source work when it feels like everybody needs you. People may even try to make you feel guilty for stepping away.

Do your best to find support for your users and community while you're away from a project. If you can't find the support you need, take a break anyway. Be sure to communicate when you're not available, so people aren't confused by your lack of responsiveness.

Taking breaks applies to more than just vacations, too. If you don't want to do open source work on weekends, or during work hours, communicate those expectations to others, so they know not to bother you.

## Take care of yourself first!

Maintaining a popular project requires different skills than the earlier stages of growth, but it's no less rewarding. As a maintainer, you'll practice leadership and personal skills on a level that few people get to experience. While it's not always easy to manage, setting clear boundaries and only taking on what you're comfortable with will help you stay happy, refreshed, and productive.
