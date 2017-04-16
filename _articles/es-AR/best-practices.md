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

Independientemente de la razón, es posible manejar con tacto las contribuciones que no cumplen con los estándares de tu proyecto.

Si recibes una contribución que no deseas aceptar, tu primera reacción podría ser ignorarla o fingir que no la has visto. Hacerlo podría dañar los sentimientos de la otra persona e incluso desmotivar a otros posibles contribuyentes en tu comunidad.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/869950?v=3&s=400" class="pquote-avatar" alt="avatar" alt="@KrauseFx avatar">
  La clave para manejar el soporte para proyectos de código abierto de gran escala es mantener las issues en movimiento. Intenta evitar tener issues quietas. Si eres un desarrollador de iOS sabes lo frustrante que puede ser enviar radares. Podrías recibir alguna noticia dos años despues, y se les pedirá que vuelvan a intentarlo con la última versión de iOS.
  <p markdown="1" class="pquote-credit">
— @KrauseFx, ["Escalando comunidades de código abierto"](https://krausefx.com/blog/scaling-open-source-communities)
  </p>
</aside>

No dejes abierta una contribución no deseada porque te sientas culpable o quieras ser amable. Con el tiempo, tus issues sin respuesta y PRs hará que trabajar en tu proyecto se sienta mucho más estresante e intimidante.

Es mejor cerrar de inmediato las contribuciones que sabes que no quieres aceptar. Si tu proyecto ya sufre de un gran backlog o lista de funcionalidades a implementar, @steveklabnik tiene sugerencias para [cómo elegir issues de manera eficiente](http://words.steveklabnik.com/how-to-be-an-open-source-gardener).

En segundo lugar, ignorar las contribuciones envía una señal negativa a tu comunidad. Contribuir a un proyecto puede ser intimidante, especialmente si es la primera vez de alguien. Incluso si no aceptas su contribución, reconocer a la persona detrás de ella y agradecerles por su interés. ¡Es un gran cumplido!

Si no quieres aceptar una contribución:

* **Agradeceles** por su contribución.
* **Explícales por qué no encaja** en el alcance del proyecto, y ofrece sugerencias claras para mejorar, si es posible. Sé amable, pero firme.
* **Comparte información relevante**, si la tienes. Si notas peticiones repetidas de cosas que no deseas aceptar, agrégalas a tu documentación para evitar explicar siempre lo mismo.
* **Cierra la solicitud**

no deberías necesitar más de 1-2 oraciones para responder. por ejemplo, cuando un usuario de [celery](https://github.com/celery/celery/) reportó un error relacionado a Windows, @berkerpeksag [respondió con](https://github.com/celery/celery/issues/3383):

![celery screenshot](/assets/images/best-practices/celery.png)

Si te aterra la idea de decir que no, no te sientas sólo. Como @jessfraz [dice](https://blog.jessfraz.com/post/the-art-of-closing/):

> He hablado con los mantenedores de código de numerosos proyectos de código abierto diferentes, Mesos, Kubernetes, Chromium, y todos están de acuerdo en que una de las partes más difíciles de ser un mantenedor de código es decir "No" a los parches que no quieres.

No te sientas culpable por no querer aceptar la contribución de alguien. La primera regla del código abierto, [de acuerdo con](https://twitter.com/solomonstre/status/715277134978113536) @shykes: _"No, es temporal; si, es para siempre."_ Si bien la empatía con el entusiasmo de otra persona es algo bueno, rechazar una contribución no es lo mismo que rechazar a la persona detrás de ella.

En última instancia, si una contribución no es lo suficientemente buena, no estás obligado a aceptarla. Sé amable y receptivo cuando las personas contribuyan a tu proyecto, pero sólo acepta cambios que realmente crees que harán que tu proyecto sea mejor. Cuanto más a menudo practiques diciendo no, más fácil se vuelve. Es una promesa.

### Sé proactivo

Para reducir el volumen de las contribuciones no deseadas en primer lugar, explica el proceso de tu proyecto para presentar y aceptar contribuciones en tu guía de contribución.

Si recibes demasiadas contribuciones de baja calidad, exija que los colaboradores hagan un poco de trabajo de antemano, por ejemplo:

* Llenar una plantilla o checklist para issues o PRs
* Abrir una issue antes de presentar un PR

Si no siguen tus reglas, cierra la issue inmediatamente y dirígelos a tu documentación.

Si bien este enfoque puede parecer desagradable al principio, ser proactivo es realmente bueno para ambas partes. Reduce la posibilidad de que alguien ponga muchas horas de trabajo desperdiciado en un pull request que no vas a aceptar. Y hace que tu carga de trabajo sea más fácil de manejar.

<aside markdown="1" class="pquote">
  <img src="https://avatars0.githubusercontent.com/u/125011" class="pquote-avatar" alt="avatar">
  Idealmente, explícales y en un archivo CONTRIBUTING.md cómo pueden obtener una mejor indicación en el futuro de lo que sería o no aceptado antes de comenzar el trabajo.
  <p markdown="1" class="pquote-credit">
— @mikemcquaid, ["Cerrando Pull Requests amablemente"](https://github.com/blog/2124-kindly-closing-pull-requests)
  </p>
</aside>

A veces, cuando dices que no, tu contribuyente potencial puede molestarse o criticar tu decisión. Si su comportamiento se vuelve hostil, [tomar medidas para desactivar la situación](https://github.com/jonschlinkert/maintainers-guide-to-staying-positive#action-items) o incluso eliminarlos de tu comunidad, si no están dispuestos a colaborar constructivamente.

### Abrazar el mentoreo

Tal vez alguien en tu comunidad envíe regularmente contribuciones que no cumplen con los estándares de tu proyecto. Puede ser frustrante para ambas partes pasar repetidamente por el proceso de rechazo.

Si ves que alguien está entusiasmado con tu proyecto, pero necesita un poco de práctica, ten paciencia. Explica claramente en cada situación por qué sus contribuciones no cumplen con las expectativas del proyecto. Trata de asignarles una tarea más fácil o menos ambigua, como una issue marcada como _"good first bug,"_ , para entrar en calor. Si tienes tiempo, considera mentorearlos a través de su primera contribución, o encuentra a alguien más en tu comunidad que esté dispuesto a ser mentor de ellos.

## Aprovechar tu comunidad

No tienes que hacer todo tu mismo. La comunidad de tu proyecto existe por una razón! Incluso si aún no tienes una comunidad de contribuidores activa, si tienes muchos usuarios, que trabajen.

### Compartir la carga de trabajo

Si estás buscando a otros para que se sumen, comienza por preguntar alrededor.

Cuando veas nuevos contribuyentes haciendo contribuciones repetidas, deberías reconocer su trabajo ofreciéndoles más responsabilidades. Documenta cómo otros pueden alcanzar roles de liderazgo si lo desean.

Alentar a otros a [compartir la propiedad del proyecto](../building-community/#share-ownership-of-your-project) puede reducir en gran medida tu carga de trabajo, como @lmccart descubrió en su proyecto, [p5.js](https://github.com/processing/p5.js?files=1).

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/191056?v=3&s=460" class="pquote-avatar" alt="avatar">
  Estuve diciendo, “Si, cualquier persona puede formar parte, no necesitas tener mucha experiencia en programación [...].” Hemos tenido personas incriptas [a eventos] y ahí fue cuando me pregunté: es esto cierto, lo que estuve diciendo? Habrán 40 personas que se presentarán, y no es como si pudiera sentarme con cada uno de ellos...Pero la gente se reunió, y funcionó. tan pronto como una persona lo consiguiera, podría enseñarle a sus vecinos.
  <p markdown="1" class="pquote-credit">
—  @lmccart, ["¿Qué significa, al fin y al cabo, "Código Abierto"? p5.js Edition"](https://medium.com/@kenjagan/what-does-open-source-even-mean-p5-js-edition-98c02d354b39#.chnjlag7p)
  </p>
</aside>

Si necesitas alejarte de tu proyecto, ya sea por un tiempo o permanentemente, no hay vergüenza en pedirle a alguien más que se haga cargo por tí.

Si otras personas son entusiastas acerca de la dirección del proyecto, dales permiso para relizar commits o formalmente entrégale el control a alguien más. Si alguien realizó un fork de tu proyecto y lo está manteniendo activamente en otro lugar, considera enlazar el fork desde tu proyecto original. ¡Es genial que tantas personas quieran que tu proyecto crezca!

@progrium [encontró que](http://progrium.com/blog/2015/12/04/leadership-guilt-and-pull-requests/) documentar la visión de su proyecto, [Dokku](https://github.com/dokku/dokku), ayudó a esos objetivos a perdurar, incluso después de que se alejó del proyecto:

> Escribí una página wiki describiendo lo que quería y por qué lo quería. Por alguna razón me sorprendió que los mantenedores comenzaran a mover el proyecto en esa dirección! ¿Sucedió exactamente cómo lo haría? No siempre. Pero aún así acercó el proyecto a lo que quería.

### Permite a otros construir las soluciones que necesitan

Si un contribuyente potencial tiene una opinión diferente sobre lo que tu proyecto debería hacer, es posible que debas animarlo suavemente a trabajar en su propio fork.

Hacer fork de un proyecto no tiene por qué ser una cosa mala. Ser capaz de copiar y modificar proyectos es una de las mejores cosas sobre es código abierto. Alentar a los miembros de su comunidad a trabajar en su propio fork puede proporcionar la salida creativa que necesitan, sin entrar en conflicto con la visión de tu proyecto.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/481677?v=3&s=400" class="pquote-avatar" alt="avatar">
  Yo atiendo el 80% de los casos de uso. Si eres uno de los unicornios, por favor, haz un fork de mi trabajo. ¡No me ofenderé! Mis proyectos públicos casi siempre están destinados a resolver los problemas más comunes; Trato de hacer que sea fácil ir más lejos ya sea con un fork de mi trabajo o extendiéndolo.
  <p markdown="1" class="pquote-credit">
— @geerlingguy, ["Por qué cierro PRs"](https://www.jeffgeerling.com/blog/2016/why-i-close-prs-oss-project-maintainer-notes)
  </p>
</aside>

Lo mismo se aplica a un usuario que realmente quiere una solución que simplemente no tienes el alcance para construir. Ofrecer APIs y hooks personalizables puede ayudar a otros a satisfacer sus propias necesidades, sin tener que modificar la fuente directamente.
@orta [encontró que](http://artsy.github.io/blog/2016/07/03/handling-big-projects/) alentando plugins para CocoaPods llevó a "algunas de las ideas más interesantes":

> Es casi inevitable que una vez que un proyecto se hace grande, los mantenedores tienen que ser mucho más conservadores sobre cómo introducir nuevo código. Te vuelves bueno en decir "no", pero muchas personas tienen necesidades legítimas. Por lo tanto, en su lugar terminas convirtiendo tu herramienta en una plataforma.

## Traigan a los robots

Así como hay tareas en las que otras personas pueden ayudarte, también hay tareas que ningún ser humano debería tener que hacer. Los robots son tus amigo. Úsalos para hacer tu vida como mantenedor de código más fácil.

### Exigir pruebas y otras comprobaciones para mejorar la calidad de tu código

Una de las maneras más importantes de automatizar tu proyecto es realizando testing.

El testing ayuda a los contribuyentes a sentirse seguros de que no romperán nada. También facilitan la revisión y aceptación de contribuciones rápidamente. Cuanto más receptivo seas, más comprometida podrá ser tu comunidad.

Configura los tests automáticos que se ejecutarán en todas las contribuciones entrantes y asegúrate de que puedan ser ejecutados localmente por los contribuyentes. Requiere que todas las contribuciones de código pasen por los tests antes de que puedan ser enviadas. Ayudará a establecer un estándar mínimo de calidad para todas las solicitudes.
[Chequeos de estado requerido](https://help.github.com/articles/about-required-status-checks/) en GitHub pueden ayudar a asegurar que ningún cambio se fusione sin pasar primero por los tests.

Si agregas testing, asegúrate de explicar cómo funcionan en su archivo CONTRIBUTING.

<aside markdown="1" class="pquote">
  <img src="https://avatars3.githubusercontent.com/u/812892?v=3&s=460" class="pquote-avatar" alt="avatar">
  Creo que las pruebas son necesarias para todo código en el que la gente trabaja. Si el código era totalmente y perfectamente correcto, no necesitaría cambios - sólo escribimos código cuando algo está mal, ya sea "Se bloquea" o "Falta tal o cual característica". Independientemente de los cambios que estés haciendo, las pruebas son esenciales para capturar cualquier regresión que pueda introducir accidentalmente.
  <p markdown="1" class="pquote-credit">
— @edunham, ["Automatización de la comunidad de Rust"](http://edunham.net/2016/09/27/rust_s_community_automation.html)
  </p>
</aside>

### Utilizar herramientas para automatizar tareas básicas de mantenimiento

La buena noticia sobre el mantenimiento de un proyecto popular es que otros mantenedores probablemente han enfrentado problemas similares y han construido una solución para ello.

Existen una [variedad de herramientas disponibles](https://github.com/showcases/tools-for-open-source) para ayudar a automatizar algunos aspectos del trabajo de mantenimiento. Algunos ejemplos:

* [semantic-release](https://github.com/semantic-release/semantic-release) automatiza tus versiones
* [mention-bot](https://github.com/facebook/mention-bot) menciona posibles revisores para las rull requests
* [Danger](https://github.com/danger/danger) ayuda a automatizar la revisión de código

Para informes de errores y otras contribuciones comunes, GitHub posee [Plantillas para Issues y Pull Requests](https://github.com/blog/2111-issue-and-pull-request-templates), que puedes crear para agilizar la comunicación que recibes. también pueden configurar [filtros de correo electrónico](https://github.com/blog/2203-email-updates-about-your-own-activity) para adimistrar las notificaciones de tu correo.

Si deseas volverte un poco más avanzado, las guías de estilo pueden estandarizar las contribuciones del proyecto y hacerlas más fáciles de revisar y aceptar.

Sin embargo, si tus estándares son demasiado complicados, pueden aumentar las barreras a la contribución. Asegúrate de que sólo estás agregando reglas para facilitar la vida de todos.

Si no estás seguro de qué herramientas usar, observe lo que hacen otros proyectos populares, especialmente los de tu ecosistema. Por ejemplo, ¿qué aspecto tiene el proceso de contribución para otros módulos de Node? El uso de herramientas y enfoques similares también hará que tu proceso sea más familiar para sus contribuyentes objetivo.

## Está bien poner pausa

El trabajo de código abierto una vez te trajo alegría. Tal vez ahora está empezando a hacer que te sientas evasivo o culpable.

Tal vez te sientes abrumado o con un creciente sentimiento de temor cuando piensas en tus proyectos. Y mientras tanto, las issues y pull requests se acumulan.

El agotamiento es un problema real y omnipresente en el trabajo de código abierto, especialmente entre los mantenedores. Como mantenedor, tu felicidad es un requisito no negociable para la supervivencia de cualquier proyecto de código abierto.

Aunque debería darse por sabido, toma un descanso! No debes esperar hasta que te sientas quemado a tomar unas vacaciones. @brettcannon, un desarrollador de Python, decidió tomar [unas vacaciones de un mes de duración] (http://www.snarky.ca/why-i-took-october-off-from-oss-volunteering) después de 14 años de voluntariado OSS.

Al igual que cualquier otro tipo de trabajo, tomar pausas regulares te mantendrá fresco, feliz y emocionado acerca de tu trabajo.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/36432?v=3&s=400" class="pquote-avatar" alt="avatar">
  Durante el mantenimiento de WP-CLI, descubrí que tengo que preocuparme por mi felicidad primero, y establecer límites claros en mi participación. El mejor equilibrio que he encontrado es 2-5 horas por semana, como parte de mi horario de trabajo normal. Esto mantiene mi participación una pasión, y de sentirse demasiado como el trabajo. Como priorizo ​​las issues en las que estoy trabajando, puedo hacer progresos regulares en lo que creo que es lo más importante.
  <p markdown="1" class="pquote-credit">
— @danielbachhuber, ["Mis condolencias, ahora eres el mantenedor de un proyecto de código abierto popular"](https://runcommand.io/2016/06/26/my-condolences-youre-now-the-maintainer-of-a-popular-open-source-project/)
  </p>
</aside>

A veces, puede ser difícil tomar un descanso del trabajo de código abierto cuando sientes como si todo el mundo te necesitara. La gente puede incluso tratar de hacerte sentir culpable por alejarte.

Haz tu mejor esfuerzo para encontrar soporte para sus usuarios y comunidad mientras estés lejos de un proyecto. Si no puedes encontrar el apoyo que necesitas, toma un descanso de todos modos. Asegúrese de comunicar cuando no estés disponible, para que la gente no se sienta confundida por tu falta de capacidad de respuesta.

Tomar descansos se aplica a más que sólo vacaciones, también. Si no deseas hacer trabajo de código abierto los fines de semana, o durante las horas de trabajo, comunica esas decisiones a los demás, para que sepan que no deben molestarte.

## ¡Cuídate primero!

Mantener un proyecto popular requiere habilidades diferentes que las primeras etapas de crecimiento, pero no es menos gratificante. Como mantenedor, practicarás liderazgo y habilidades personales en un nivel que pocas personas pueden experimentar. Aunque no siempre es fácil de manejar, el establecimiento de límites claros y sólo tomar lo que te hace sentir cómodo te ayudará a mantenerte feliz, actualizado y productivo.

