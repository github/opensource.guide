---
locale: es-ES
title: Buenas Prácticas para Mantenedoras
description: Pensadas para facilitarte la vida como mantenedora de código abierto, desde el proceso de documentación hasta cómo construir una comunidad provechosa.
class: best-practices
toc:
  what-does-it-mean-to-be-a-maintainer: "¿Qué significa ser mantenedora?"
  documenting-your-processes: "Documentar tus procesos"
  learning-to-say-no: "Aprender a decir no"
  leverage-your-community: "Construir una comunidad provechosa"
  bring-in-the-robots: "Saca a los robots"
  its-okay-to-hit-pause: "No pasa nada por hacer una pausa"
order: 5
image: /assets/images/cards/best-practices.png
related:
  - metrics
  - leadership
---

## ¿Qué significa ser mantenedora?

Si mantienes un proyecto de código abierto que utiliza mucha gente, te habrás dado cuenta que escribes cada vez menos código y dedicas cada vez más tiempo a responder a usuarias.

En las etapas iniciales de un proyecto, sueles estar experimentando con nuevas ideas y tomando las decisiones que quieres. A medida que tu proyecto crece en popularidad, te encontrarás a tí misma trabajando con tus usuarias y contribuidoras cada vez más.

Mantener un proyecto exige algo más que código. Implica realizar tareas a menudo inesperadas, pero que son igual de importantes para hacer crecer un proyecto. Hemos reunido unas cuantas maneras de hacerte la vida más fácil, desde procesos de documentación hasta cómo construir una comunidad provechosa.

## Documentar tus procesos

Tomar nota de las cosas es una de las tares más importantes que puedes hacer como mantenedora.

La documentación no solo aclara tu pensamiento, sino que ayuda a otra gente a entender lo que necesitas o esperas, sin necesidad de preguntarlo.

Tomar nota de las cosas hace más fácil decir no cuando algo no entra dentro de tu alcance. Facilita también que la gente levante el brazo y eche una mano. Nunca sabes quién podría estar leyendo o usando tu proyecto.

Incluso aunque no escribas párrafos enteros, una buena lista de puntos es mejor que no escribir nada en absoluto.

Recuerda mantener tu documentación actualizada. Si no vas a a poder hacerlo, borra tu documentación desactualizada o indica que está desactualizada para que tus contribuidores sepan que las actualizaciones son bienvenidas.

### Escribe tu visión del proyecto

Empieza escribiendo los objetivos de tu proyecto. Pónlos en un fichero README, o create un fichero por separado llamado VISION. Si hay alguna otra documentación que pudiera ayudar, como un roadmap del proyecto, hazlo público también.

Tener una vision clara y documentada te mantiene enfocado y te ayuda a evitar que las contribuciones ajenas lleven el proyecto a un crecimiento descontrolado en la dirección equivocada.

Por ejemplo, @lord descubrió que tener una vision clara del proyecto le hubiera ayudado a decidir a qué tipo de solicitudes dedicar más tiempo. Cuando era un mantenedor novato, se arrepintió de no haberse ceñido al alcance de la visión de su proyecto cuando tuvo la primera solicitud para [Slate](https://github.com/lord/slate). 

<aside markdown="1" class="pquote">
  <img src="https://avatars2.githubusercontent.com/u/1976330?v=3&s=460" class="pquote-avatar" alt="avatar" alt="@lord avatar">
  I fumbled it. I didn't put in the effort to come up with a complete solution. Instead of an half-assed solution, I wish I had said "I don't have time for this right now, but I'll add it to the long term nice-to-have list."
  <p markdown="1" class="pquote-credit">
— @lord, ["Tips for new open source maintainers"](https://lord.io/blog/2014/oss-tips/)
  </p>
</aside>

> Iba a tientas. No me esforcé para encontrar una solución completa. En lugar de sacar una solución a medias, me gustaría haber dicho "No tengo tiempo para esto ahora mismo, pero lo añadiré a la larga lista de cosas que molaría tener a largo plazo"

### Comunica tus expectativas

Escribir reglas puede ser estresante. Puedes acabar con la sensación de que estás coaccionando el compartimiento de otras personas, o que estás acabando con toda la diversión.

Sin embargo, una vez escritas y aplicadas con justicia, una buenas reglas empoderan a las mantenedoras. Evitan que te veas arrastrada a hacer cosas que no quieres hacer.

La mayoría de la gente que se cruza con tu proyecto no sabe nada sobre tí o tus circunstancias. Pueden asumir que se te paga para que trabajes en él, sobretodo si es algo que usan normalmente y de lo cual dependen. Puede ser que en cierto momento dedicaras mucho tiempo al proyecto, pero ahora estás ocupado con un nuevo trabajo o un nuevo miembro en la familia.

Por supuesto, todo eso es perfectamente normal. Límitate a asegurarte de que el resto de gente lo sabe.

Si mantienes tu proyecto a tiempo parcial o de manera totalmente voluntaria, sé honesto sobre cuánto tiempo tienes. Ese tiempo no es el tiempo que tú piensas que requiere el proyecto, ni el tiempo que otras quierren que dediques.

Aquí tienes unas pocas regla que merece la pena que anotes:

* Cómo se revisa y acepta una contribución. (_¿Hacen falta tests? ¿Hay una plantilla para describir la contribución?_)
* Los tipos de contribuciones que aceptarías. (_¿Necesitas ayuda con alguna parte concreta del código?_)
* Cuando es apropiado perseguirte. (_por ejemplo, "Puedes esperar respuesta en un plazo de 7 días. Si no has oído nada para entonces, siéntete libre de darme un toque."_)
* Cuánto tiempo dedicas al proyecto. (_por ejemplo, "Solo dedicamos alrededor de 5 horas por semana a este proyecto."_)

[Jekyll](https://github.com/jekyll/jekyll/tree/master/docs), [CocoaPods](https://github.com/CocoaPods/CocoaPods/wiki/Communication-&-Design-Rules), y [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Maintainers-Avoiding-Burnout.md) son varios ejemplos de proyectos con reglas bien establecidas.

### Mantén pública la comunicación 

No te olvides de documentar también tus interacciones. Siempre que puedas, mantén públicas las comunicaciones sobre tu proyecto. Si alguien intenta contactarte en privado para discutir la solicitud de un característica (_feature_) o necesita ayuda, dirígelo educadamente a un canal de comunicación pública, como una lista de correo o un gestor de solicitudes (_issues_). 

Si te reúnes con otras mantenedoras, o tomas una decisión importante en privado, documenta esas conversaciones en público, incluso si solo publicas tus notas.

De esta manera, cualquiera que se una a la comunidad tendrá acceso a la misma información que alguien que llevara allí años.

## Aprende a decir no

Imagina que has anotado todo lo que tenías que anotar. En un mundo ideal, todo el mundo leería toda la documentación, pero en la realidad vas a tener que recordarle a otros que ese conocimiento existe.

Tener todo por escrito, en cualquier caso, ayuda a despersonalizar situaciones en las que necesitas hacer cumplir tus reglas.

Decir que no no es divertido, pero _"Tu contribución no encaja en los criterios de este proyecto"_ suena menos personal que _"No me gusta tu contribución"_.

Decir no aplica a muchas situaciones en las que te encontrarás: solicitudes de características (_features_) que no encajan en el alcance, alguien desviando una discusión, o alguien haciendo trabajo innecesario.

### Mantén conversaciones amigables

Uno de los lugares más importantes donde vas a tener que aprender a decir no es en tus colas de solicitudes de características (_issues_) y contribuciones (_pull requests_). No podrás evitar recibir sugerencias que no quieres aceptar.

Puede que la contribución cambie el alcance de tu proyecto o no encaje con tu visión. Puede que la idea sea buena, pero la implementación pobre.

Sea cual sea la razón, siempre es posible manejar con tacto las contribuciones que no encajan con los estándares de tus proyectos.

Si recibes una contribución que no quieres aceptar, tu primera reacción puede ser ignorarla o hacer como que no las visto. Hacer eso puede herir los sentimientos de la otra persona, e incluso desmotivarla de cara a otras contribuciones potenciales en tu comunidad.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/869950?v=3&s=400" class="pquote-avatar" alt="avatar" alt="@KrauseFx avatar">
  The key to handle support for large-scale open source projects is to keep issues moving. Try to avoid having issues stall. If you're an iOS developer you know how frustrating it can be to submit radars. You might hear back 2 years later, and are told to try again with the latest version of iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Scaling open source communities"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

> La clave para dar soporte a projectos de código abierto a gran escala es mantener las _issues_ en movimiento. Intena evitar tener _issues_ estancadas. Si eres un desarrollador iOs sabrás lo frustante que es enviar _radars_. Podian responderte 2 años más tarde, y decirte que lo intentes de nuevo con lo última versión de iOS. 

No dejes una contribución no deseada abierta porque te sientas culpable o quieras ser amable. Con el tiempo, tus _issues_ y _PRs_ (_pull requests_) sin responder harán que trabajar en tu proyecto se vuelva mucho más estresante e intimidatorio.

Es mejor cerrar inmediatamente las contribuciones que sabes que no vas a aceptar. Si tu proyecto ya sufre de una larga lista de tareas pendientes, @steveklabnik tiene algunas sugerencias sobre [cómo seleccionar _issues_ eficientemente](http://words.steveklabnik.com/how-to-be-an-open-source-gardener).

Además, ignorar contribuciones manda una señal negativa a tu comunidad. Contribuir a un proyecto puede ser intimidatorio, especialmente si es la primera vez para alguien. Incluso aunque no aceptes su contribución, otorga reconocimiento a la persona detrás de ella y agradecele su interés. ¡Es un gran cumplido!

Si no quieres aceptar una contribución:

* **Dale las gracias** por su contribución.
* **Explícale por qué no encaja** en el alcance de tu proyecto, y ofreceré sugerencias claras para mejorarla, si puedes. Sé amable, pero firme.
* **Enlaza documentación importante**, si la tienes. Si te das cuenta de que recibes solicitudes repetidas de cosas que no quieres aceptar, añádelo a la documentación para evitar repetirte.
* **Cierra la solicitud**

No deberias necesitar más de 1-2 frases para responder. Por ejemplo, cuando un usario de [celery](https://github.com/celery/celery/) reportó un error relacionado con Windows, @berkerpeksag [respondió con](https://github.com/celery/celery/issues/3383):

![Celery screenshot](/assets/images/best-practices/celery.png)

Si pensar en decir no te aterroriza, no estás sólo. En [palabras](https://blog.jessfraz.com/post/the-art-of-closing/) de @jessfraz:

> He hablado con mantenedoras de distintos proyectos de código abierto, Mesos, Kubernetes, Chromium, y todos están de acuerdo en que una de las partes más duras de serlo es decir que "No" a parches que no quieres.

No te sientas culpable de no querer aceptar la contribución de alguien. La primera regla del código abierto, [según](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"Un no es temporal, un sí es para siempre"_. Aunque empatizar con el entusiasmo de otras persona es una cosa buena, rechazar una contribución no es lo mismo que rechazar a la persona detrás de ella.

Por último, si una contribución no es lo suficientemente buena, no estás en la obligación de aceptarla. Se amable y receptivo con la gente que contribuye a tu proyecto, pero solo acepta cambios que de verdad pienses que mejoran tu proyecto. Cuanto más a menudo practiques decir no, más fácil se vuelve. Prometido.

### Sé proactivo

Para reducir de entrada el volumen de contribuciones no requeridas, explica cuál es el proceso para enviar y aceptar contribuciones en la guía de contribuciones de tu proyecto.

Si estás recibiendo demasiadas contribuciones de baja calidad, solicita a tus contribuidores un poco de trabajo de antemano, por ejemplo: 

* Rellenar una plantilla para nuevas _issues_ o _PRs_.
* Abrir una issue antes de enviar un _PR_.

Si no siguen tus reglas, cierra la issue inmediatamente y apunta a tu documentación.

Aunque esta manera de actuar pueda parecer ruda al principio, ser proactivo es en realidad beneficioso para ambas partes. Reduce las posibilidades de que alguien quiera malgastar muchas horas de trabajo en una _pull request_ que no vas a aceptar. Y hace tu carga de trabajo más manejable. 

<aside markdown="1" class="pquote">
  <img src="https://avatars0.githubusercontent.com/u/125011" class="pquote-avatar" alt="avatar">
  Ideally, explain to them and in a CONTRIBUTING.md file how they can get a better indication in the future on what would or would not be accepted before they begin the work.
  <p markdown="1" class="pquote-credit">
— @mikemcquaid, ["Kindly Closing Pull Requests"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

>Idealmente, explícales y escribe en el fichero CONTRIBUTING.md cómo pueden obtener mejores indicaciones en el futuro sobre lo que debería o no debería ser aceptado antes de que empiecen el trabajo.

A veces, cuando dices que no, tu contribuidora potencial puede enfadarse o criticar tu decisión. Si su comportamiento se vuelve hostil, [toma cartas en el asunto para desactivar la situación](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) o incluso elimínala de tu comunidad, si no tiene intención de colaborar de manera constructiva.

### ¡Abraza la docencia!

Es posible que alguien en tu comunidad envie con regularidad contribuciones que no cumplen los estándares de tu proyecto. Puede ser frustante para ambas partes toparse con rechazos.

Si ves que alguien se ha entusiasmado con tu proyecto, pero necesita que le pulan un poco, sé paciente. Explícale claramente en cada situación por qué su contribución no cumple las expectativas del proyecto. Intenta señalarle alguna tarea más fácil o menos ambigua, por ejemplo marcando una _issue_ como _good first bug_ (_buen primer bug_) para que vaya cogiendo práctica. Si tienes tiempo, valora guiarle durante su primera contribución, o encontrar a alguien en tu comunidad que pueda querer guiarle.

## Construir una comunidad provechosa

No tienes que hacerlo todo tú solo. ¡La comunidad de tu proyecto está para algo! Incluso aunque no tengas todavía una comunidad de contribuidores activa, si tientes muchos usuarios, pónlos a trabajar.


### Comparte la carga de trabajo

Si estás buscando a gente para que te eche una mano, empieza preguntando en tu entorno.

Cuando veas nuevas contribuidoras haciendo varias contribuciones, reconoce su trabajo ofreciéndoles más responsabilidad. Documenta cómo se puede acabar asumiendo roles de liderazgo si se desea.

Animar a otras a [compartir la carga de trabajo](../building-community/#share-ownership-of-your-project) puede reducir bastante tu propia carga de trabajo, como cuenta @lmccart sobre su proyecto, [p5.js](https://github.com/processing/p5.js?files=1).


<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/191056?v=3&s=460" class="pquote-avatar" alt="avatar">
  I’d been saying, “Yeah, anyone can be involved, you don’t have to have a lot of coding expertise [...].” We had people sign up to come [to an event] and that’s when I was really wondering: is this true, what I’ve been saying? There are gonna be 40 people who show up, and it’s not like I can sit with each of them...But people came together, and it just sort of worked. As soon as one person got it, they could teach their neighbor.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["What Does “Open Source” Even Mean? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39#.chnjlag7p)
  </p>
</aside>

> Debí decir, "Sí, cualquiera puede involucrarse, no tienes porque tener muchar experiencia programando [...]". La gente empezó a apuntarse [a un evento] y ahí fue cuando me empecé a preguntar: esto está pasando de verdad, ¿qué he estado diciendo? Van a presentarse 40 personas, y no es como que me pueda sentar con cada una de ellas... Pero la gente vino en grupos, y sea como sea funcionó. Tan pronto como una persona lo pillaba, ya podía enseñar a la de al lado. 

Si necesitas apartarte de tu proyecto, por un momento o permanentemente, no te sientas culpable por pedirle ayuda a alguien para que continúe en tu lugar.

Si hay otra gente interesada en la dirección del proyecto, dáles permiso para hacer _commits_ o traspásales el control formalmente. Si alguien ha hecho un _fork_ de tu proyecto y lo está manteniendo activamente en otra parte, valora enlazar el _fork_ desde tu proyecto original. ¡Está muy bien que tanta gente quiera que tu proyecto siga vivo!  

@progrium [cuenta qué](http://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documentar la visión para su proyecto, [Dokku](https://github.com/dokku/dokku), ayudó a mantener vivos esos objetivos incluso después de que se apartara del proyecto:

> Escribí una página wiki describiendo lo que quería y por qué lo quería. ¡Por alguna razón me sorprendió que las mantenedoras empezaran a moverse en esa dirección! ¿Fue todo exactamete como yo lo hubiera hecho? No siempre. Pero aún así acabaron sacando el proyecto más cercano al que yo escribí.

### Deja a los demás construir las soluciones que necesiten

Si un contribuidor potencial tiene una opinión diferente sobre qué deberías estar haciendo, tal vez deberías animarle con gentileza a que trabaje en su propio _fork_.

Hacer un _fork_ de un proyecto no tiene porque ser algo negativo. Que sea posible copiar y modificar proyectos es una de las mejores cosas del código abierto. Animar a tu comunidad a trabajar en sus propios _forks_ puede proporcionarle el espacio creativo que necesita, sin entrar en conflicto con la visión de tu proyecto.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/481677?v=3&s=400" class="pquote-avatar" alt="avatar">
  I cater to the 80% use case. If you are one of the unicorns, please fork my work. I won't get offended! My public projects are almost always meant to solve the most common problems; I try to make it easy to go deeper by either forking my work or extending it.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Why I Close PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

> Yo atiendo al caso de uso del 80% de los usuarios. Si eres un caso aparte, por favor haz _fork_ de mi trabajo. ¡No me voy a ofender! Mis proyectos públicos casi siempre pretenden resolver los problemas más comunes; intento que sea fácil profundizar bien haciendo _fork_ o bien extendiéndolo.

Lo mismo se puede aplicar a un usuario que necesita una solución para la que simplemente no tienes el "ancho de banda" necesario para construirla. Ofrecer APIs y _hooks_ de personalización puede ayudar a los demás a satisfacer sus propias necesidades, sin tener que modificar el código directamente. [Cuenta](https://artsy.github.io/blog/2016/07/03/handling-big-projects/)  @orta que animar a escribir plugins para CocoaPods llevó a "alguna de las ideas más interesantes":

> Es casi inevitable que, una vez que un proyecto se hace grande, las mantenedoras tengan que volverse mucho más conservadoras sobre cómo introducen código nuevo. Acaba siendote fácil decir "no",  pero mucha gente tiene necesidades legítimas. Así que al final acabas conviritiendo tu herramienta en una plataforma.

## Saca los robots

Al igual que hay tareas con las que otra gente te puede ayudar, hay también tareas que ningún humano debería tener que hacer. Los robots son tus amigos. Úsalos para hacer tu vida como mantenedor más fácil.

### Exige tests y otras comprobaciones para mejorar la calidad de tu código. 

Una de las maneras más importantes en las que puedes automatizar tu proyecto es añadiendo tests.

Los tests ayudan a las contribuidoras a estar seguras de que no van a romper nada. También te ayuda a revisar y aceptar contribuciones más rápdo. Cuanto más receptiva seas, más comprometida podrá ser tu comunidad.

Pon a punto tests automáticos que correrán en todas las contribuiciones que recibas, y asegúrate de que tus tests se pueden correr localmente con facilidad. Exige que todas las contribuciones de código pasen tus tests antes de que se pueden enviar. Ayudará a establecer un mínimo estándar de calidad para todos los envíos. [Exigir comprobaciones de estado](https://help.github.com/articles/about-required-status-checks/) en GitHub puede ayudarte a asegurar que ningún cambio se mezcla sin que haya pasado tus tests.

Si añades tests, asegúrate de explicar cómo funcionan en tu fichero CONTRIBUTING.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/812892?v=3&s=460" class="pquote-avatar" alt="avatar">
  I believe that tests are necessary for all code that people work on. If the code was fully and perfectly correct, it wouldn't need changes – we only write code when something is wrong, whether that's "It crashes" or "It lacks such-and-such a feature". And regardless of the changes you're making, tests are essential for catching any regressions you might accidentally introduce.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Rust's Community Automation"](https://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

> Creo que los tests son necesarios para cualquier código en el que esté trabajando gente. Si el código fuera completa y perfectamente correcto, no se necesitarían cambios  – solo escribimos código cuando algo está mal, bien por que "Se rompe" o porque "Le falta tal o cual característica". Y sean cuáles sean los cambios que estés haciendo, los tests son esenciales para atrapar cualquier regresión que puedas introducir accidentalmente.

### Usa herramientas para automatizar tareas básicas de mantenimiento

Las bueno de mantener proyectos populares es que otras mantenededoras probablemente se hayan enfrentando a problemas similares y hayan construido una solución para ello.

Hay una [variedad de herramientas disponible](https://github.com/showcases/tools-for-open-source) que ayudan a automatizar algunos aspectos de tu trabajo de mantenimiento. Algunos ejemplos:

* [semantic-release](https://github.com/semantic-release/semantic-release) automatiza tus lanzamientos (_releases_).
* [mention-bot](https://github.com/facebook/mention-bot) menciona a potenciales revisores para las _pull requests_.
* [Danger](https://github.com/danger/danger) ayuda a automatizar la revisión de código.

Para informes de bugs y otras contribuciones comunes, GitHub tiene [Plantillas de Issues y Pull Request](https://github.com/blog/2111-issue-and-pull-request-templates), que puedes crear para optimizar las comunicaciones que recibes. @TalAter ha hecho [una guia "Elige tu propia Aventura"](https://www.talater.com/open-source-templates/#/) para ayudarte a escribir tus plantillas de _issues_ y _pull requests_.

Para administrar tus notificaciones por correo, puedes establecer [filtros de correo](https://github.com/blog/2203-email-updates-about-your-own-activity) para organizarlos por prioridad.

Si te quieres hacer algo un poco más avanzado, guías de estilo y comprobadores de sintáxis pueden estandarizar las contribuciones a tu proyecto y hacerlas más faćiles de revisar y aceptar.

Sin embargo, si tus estándares son demasiado complicados, pueden incrementar las barreras a las contribuciones. Asegúrate que estás añadiendo solo las reglas suficientes para hacer las vidas de los demás más fáciles.

Si no estás seguro de que herramientas usar, mira qué hacen otros proyectos populares, especialmente aquellos en tu ecosistema. Por ejemplo, ¿cómo es el proceso de contribución para otros módulos de Node? Usar herramientas similares y enfoques similares también hará el proceso más familiar a tus contribuidores objetivo.

## No pasa nada por hacer una pausa.

Hubo un momento en que el código abierto te produjo regocijo. Es posible que ahora esté empezando a hacerte sentir reticente o culpable.

Quizás te sientas sobrepasado o está creciendo en tí un sentimiento de angustia cuando piensas en tus proyectos. Y mientras tanto, las _issues_ y los _pull requests_ se apilan.

Quemarse es un verdarero - y profundo - problema en el mundo del código abierto, sobretodo entre mantenedoras. Como mantenedora, tu felicidad es un requisito no negociable para la supervivencia de cualquier proyecto de código abierto.

Aunque no haría falta ni decirlo, si lo necesitas, ¡tómate un respiro! No deberías esperar hasta que te sientas quemada para tomarte un descanso. @brettcannon, un desarrollador del núcleo de Python, decidió tomarse [un descanso de un mes](https://snarky.ca/why-i-took-october-off-from-oss-volunteering/) después de 14 años de trabajo como voluntario.

Al igual que en cualquier otro tipo de trabajo, tomar descansos regulares te mantendrá fresco, feliz, y entusiasmado con tu trabajo.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/36432?v=3&s=400" class="pquote-avatar" alt="avatar">
  In maintaining WP-CLI, I've discovered I need to make myself happy first, and set clear boundaries on my involvement. The best balance I've found is 2-5 hours per week, as a part of my normal work schedule. This keeps my involvement a passion, and from feeling too much like work. Because I prioritize the issues I'm working on, I can make regular progress on what I think is most important.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["My condolences, you're now the maintainer of a popular open source project"](https://runcommand.io/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

> Manteniendo WP-CLI, descubrí que necesitaba hacerme feliz a mí mismo primero, y establecí unos límites claros a mi implicación. El mejor equilibrio que encontré fue de 2 a 5 horas por semana, como parte de mi horario normal de trabajo. Esto me mantuvo implicado con una pasión, no como si fuera un trabajo. Dado que priorizo las _issues_ en las que trabajo, puedo hacer progresos regulares en lo que creo que es lo más importante.

A veces puede ser difícil tomarse un respiro del trabajo en el código abierto cuando te parece que toodo el mundo te necesita. La gente incluso puede que te haga sentir culpable por dar un paso a un lado.

Intenta encontrar apoyo de tus usuarios y comunidad mientras estás alejado de un proyecto. Si no encuentras el apoyo que necesitas, tómate un respiro de todos modos. Asegúrate de comunicar que no estás disponible, para que la gente no se confunda sobre tu falta de respuesta.

Tomarse descansos significa algo más que únicamente las vacaciones. Si no quieres trabajar en código abierto los fines de semana, o durante horas de trabajo, comunica esas decisiones, así sabrán que no te pueden molestar.

## ¡Cuida de tí primero!

Mantener un proyecto popular exige habilidades distintas a las necesarias en las etapas iniciales de crecimiento, pero no es menos satisfactorio. Como mantenedora. tendrás que practicar habilidades de liderazgo e interpersonales en un nivel que poca gente llega a experimentar. Aunque no siempre es fácil de manejar, establecer límites claros y ocuparte solo de aquello con lo que te sientes confortable te ayudará a mantenerte feliz, fresca y productiva.
