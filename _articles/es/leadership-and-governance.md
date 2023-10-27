---
lang: es
title: Liderazgo y Gobierno
description: Los proyectos de c&oacute;digo abierto crecientes pueden beneficiarse de reglas formales para tomar decisiones.
class: leadership
order: 6
image: /assets/images/cards/leadership.png
related:
  - best-practices
  - metrics
---

## Entendiendo el gobierno de su proyecto en crecimiento

Tu proyecto est&aacute; creciendo, la gente est&aacute; comprometida, y est&aacute;s comprometido a mantener esto en marcha. En esta etapa, es posible que te preguntes c&oacute;mo incorporar a los contribuyentes regulares de proyectos en su flujo de trabajo, ya sea para darle a alguien el compromiso de acceso o para resolver los debates de la comunidad. Si tiene preguntas, tenemos respuestas.

## &iquest;Cu&aacute;les son ejemplos de roles formales utilizados en proyectos de c&oacute;digo abierto?

Muchos proyectos siguen estructuras similares para reconocer y asignar roles a los contribuyentes.

El significado de estos roles queda a tu criterio. Aqu&iacute; puedes encontrar algunos tipos de rol que quiz&aacute;s reconozcas:

* **Mantenedor**
* **Contribuyente**
* **Committer**

**Para algunos proyectos, los "mantenedores"** son las únicas personas en el proyecto con permisos de commit. En otros proyectos, son simplemente personas que est&aacute;n listadas en el archivo README.md como mantenedores.

Un mantenedor no necesariamente tiene que ser alguien que escribe c&oacute;digo para su proyecto. Podr&iacute;a ser alguien que ha hecho mucho trabajo evangelizando su proyecto, o documentaci&oacute;n escrita que hizo el proyecto m&aacute;s accesible a los dem&aacute;s. Independientemente de lo que hacen d&iacute;a a d&iacute;a, un mantenedor es probablemente alguien que se siente responsable sobre la direcci&oacute;n del proyecto y se ha comprometido a mejorarlo.

**Un "contribuyente" puede ser cualquiera** que comente en una issue o un pull request, personas que agreguen valor al proyecto (sin importar si sólo está clasificando issues, escribiendo c&oacute;digo u organizando eventos), o cualquiera con un merged pull request (esta es la definici&oacute;n m&aacute;s estrecha de un contribuyente).

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/mikeal?s=180" class="pquote-avatar" alt="avatar">
  [Para Node.js], cada persona que se presenta para comentar un problema o env&iacute;a c&oacute;digo es un miembro de la comunidad de un proyecto. S&oacute;lo ser capaz de verlos significa que han cruzado la l&iacute;nea de ser un usuario a ser un contribuyente.
  <p markdown="1" class="pquote-credit">
— @mikeal, ["Healthy Open Source"](https://medium.com/the-javascript-collection/healthy-open-source-967fa8be7951)
  </p>
</aside>

**El t&eacute;rmino "committer"** podr&iacute;a utilizarse para distinguir entre el acceso a commit, que es un tipo espec&iacute;fico de responsabilidad, de otras formas de contribuci&oacute;n.

Mientras que puedes definir tus roles de proyecto de cualquier forma que quieras te gustar&iacute;a [considerar usar definiciones m&aacute;s amplias](../how-to-contribute/#qué-significa-contribuir) para fomentar m&aacute;s formas de contribuci&oacute;n. Puedes utilizar funciones de liderazgo para reconocer formalmente a personas que han hecho contribuciones excepcionales a su proyecto, independientemente de su habilidad t&eacute;cnica.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/jacobian?s=180" class="pquote-avatar" alt="avatar">
  Quizás me conozcan como el "inventor" de Django... pero realmente soy el individuo que consigui&oacute; ser contratado para trabajar en algo un a&ntilde;o despu&eacute;s de que ya fuera hecho. (...) La gente sospecha que tengo &eacute;xito debido a mi habilidad de programaci&oacute;n ... pero, en el mejor de los casos soy un programador promedio.
  <p markdown="1" class="pquote-credit">
— @jacobian, ["PyCon 2015 Keynote" (video)](https://www.youtube.com/watch?v=hIJdFxYlEKE#t=5m0s)
  </p>
</aside>

## &iquest;C&oacute;mo formalizo los roles de liderazgo?

La formalizaci&oacute;n de tus funciones de liderazgo ayuda a las personas a sentirse propietarias y les dice a otros miembros de la comunidad a quién deben buscar para conseguir ayuda.

Para un proyecto m&aacute;s peque&ntilde;o, designar l&iacute;deres puede ser tan simple como agregar sus nombres a su archivo de texto README o CONTRIBUTORS.

Por un proyecto m&aacute;s grande, si tienes una p&aacute;gina web, crea una p&aacute;gina de equipo o lista tus l&iacute;deres de proyecto all&iacute;. Por ejemplo, [PostgreSQL](https://github.com/postgres/postgres/) tiene una [p&aacute;gina exhaustiva de equipo](https://www.postgresql.org/community/contributors/) con perfiles cortos para cada contribuyente.

Si tu proyecto tiene una comunidad de contribuidores muy activa, puede formar un "equipo central" de mantenedores, o incluso subcomisiones de personas que se apropian de diferentes &aacute;reas tem&aacute;ticas (por ejemplo, seguridad, clasificaci&oacute;n de temas o conducta comunitaria). Permite que la gente se auto-organice y se ofrezca como voluntaria para los papeles que m&aacute;s le entusiasman, en lugar de asignarlos.

<aside markdown="1" class="pquote">
  Nosotros complementamos el equipo central con varios "sub-grupos". Cada sub-grupo se centra en un &aacute;rea espec&iacute;fica, por ejemplo, dise&ntilde;o de lenguajes o bibliotecas. (...) Para garantizar una coordinaci&oacute;n global y una visi&oacute;n s&oacute;lida y coherente del proyecto en su conjunto, cada sub-grupo est&aacute; dirigido por un miembro del equipo central.
  <p markdown="1" class="pquote-credit">
— ["Rust Governance RFC"](https://github.com/rust-lang/rfcs/blob/HEAD/text/1068-rust-governance.md)
  </p>
</aside>

Los equipos de liderazgo pueden querer crear un canal designado (como en IRC) o reunirse regularmente para discutir el proyecto (como en Gitter o Google Hangout). Incluso puedes hacer p&uacute;blicas esas reuniones para que otras personas puedan escucharlas. [Cucumber-rub&iacute;](https://github.com/cucumber/cucumber-ruby), por ejemplo, [hospeda las horas de oficina cada semana](https://github.com/cucumber/cucumber-ruby/blob/HEAD/CONTRIBUTING.md#talk-with-other-devs).

Una vez que haya establecido roles de liderazgo, ¡no olvides documentar c&oacute;mo la gente puede alcanzarlos! Establece un proceso claro para que alguien pueda convertirse en un mantenedor o unirse a un subcomit&eacute; en su proyecto y escribirlo en su GOVERNANCE.md.

Herramientas como [Vossibility](https://github.com/icecrime/vossibility-stack) puede ayudarte a hacer un seguimiento p&uacute;blico de qui&eacute;n (o no) est&aacute; haciendo contribuciones al proyecto. Documentar esta informaci&oacute;n evita la percepci&oacute;n de la comunidad de que los mantenedores son un grupo que toma sus decisiones en privado.

Por &uacute;ltimo, si su proyecto est&aacute; en GitHub, considere la posibilidad de mover su proyecto de su cuenta personal a una organizaci&oacute;n y agregar al menos un administrador de copias de seguridad. [Las organizaciones GitHub](https://help.github.com/articles/creating-a-new-organization-account/) facilitan la administraci&oacute;n de permisos y m&uacute;ltiples repositorios y protegen el legado de su proyecto mediante [la propiedad compartida](../building-community/#comparte-la-propiedad-de-tu-proyecto).

## &iquest;Cu&aacute;ndo le puedo dar acceso a hacer commits a alguien?

Algunas personas piensan que debe dar acceso de commits a todos los que hacen una contribuci&oacute;n. Hacerlo podr&iacute;a alentar a m&aacute;s personas a sentirse due&ntilde;as de su proyecto.

Por otro lado, especialmente para proyectos m&aacute;s grandes y complejos, es posible que desee dar s&oacute;lo el acceso de commit a las personas que han demostrado su compromiso. No hay una manera correcta de hacerlo - ¡Haz lo que te parezca m&aacute;s c&oacute;modo!

Si tu proyecto est&aacute; en GitHub, pod&eacute;s utilizar [ramas protegidas](https://help.github.com/articles/about-protected-branches/) para administrar qui&eacute;n puede enviar a una rama en particular y bajo qu&eacute; circunstancias.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/felixge?s=180" class="pquote-avatar" alt="avatar">
  Cada vez que alguien te env&iacute;a un pull request, dales acceso de commit a tu proyecto. Si bien puede sonar incre&iacute;blemente tonto al principio, el uso de esta estrategia te permitir&aacute; liberar el verdadero poder de GitHub. (...) Una vez que las personas tienen acceso de commit, ya no est&aacute;n preocupados de que su parche pudiese quedar fuera de merge... haciendo que coloquen mucho m&aacute;s trabajo en &eacute;l.
  <p markdown="1" class="pquote-credit">
— @felixge, ["The Pull Request Hack"](https://felixge.de/2013/03/11/the-pull-request-hack.html)
  </p>
</aside>

## &iquest;Cu&aacute;les son algunas de las estructuras de gobierno comunes para los proyectos de c&oacute;digo abierto?

Hay tres estructuras de gobierno comunes asociadas a los proyectos de c&oacute;digo abierto.

* **BDFL:** BDFL significa "Benevolent Dictator for Life" (en espa&ntilde;ol, "Dictador benevolente para la vida"). Bajo esta estructura, una persona (generalmente el autor inicial del proyecto) tiene la palabra final en todas las decisiones importantes del proyecto. [Python](https://github.com/python) es un ejemplo cl&aacute;sico. Los proyectos m&aacute;s peque&ntilde;os son probablemente BDFL por defecto, porque s&oacute;lo hay uno o dos mantenedores. Un proyecto que se origin&oacute; en una empresa tambi&eacute;n podr&iacute;a caer en la categor&iacute;a BDFL.

* **Meritocracia:** **(Nota: el t&eacute;rmino "meritocracia" tiene connotaciones negativas para algunas comunidades y tiene un [historia social y pol&iacute;tico compleja](http://geekfeminism.wikia.com/wiki/Meritocracy).)** Bajo una meritocracia, a los contribuyentes activos del proyecto (aquellos que demuestran "m&eacute;rito") se les da un papel formal de toma de decisiones. Las decisiones se toman generalmente en base a un consenso de voto puro. El concepto de meritocracia fue iniciado por la [Fundaci&oacute;n Apache](https://www.apache.org/); [Todos los proyectos de Apache](https://www.apache.org/index.html#projects-list) son meritocracias. Las contribuciones s&oacute;lo pueden ser hechas por individuos que se representan a s&iacute; mismos, no por una empresa.

* **Contribuci&oacute;n liberal:** Bajo un modelo de contribuci&oacute;n liberal, las personas que hacen m&aacute;s trabajo son reconocidas como las m&aacute;s influyentes, pero esto se basa en el trabajo actual y no en contribuciones hist&oacute;ricas. Las decisiones importantes del proyecto se toman sobre la base de un proceso de b&uacute;squeda de consenso (discutir quejas mayores) en lugar de voto puro, y tratar de incluir tantas perspectivas de la comunidad como sea posible. Ejemplos populares de proyectos que utilizan un modelo de contribuci&oacute;n liberal incluyen [Node.js](https://foundation.nodejs.org/) y [Rust](https://www.rust-lang.org/).

¿Cu&aacute;l deber&iacute;as usar? ¡Tú decides! Cada modelo tiene ventajas y compensaciones. Y aunque pueden parecer muy diferentes al principio, los tres modelos tienen m&aacute;s en com&uacute;n de lo que parece. Si est&aacute;s interesado en adoptar uno de estos modelos, consulta estas plantillas:

* [BDFL model template](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel)
* [Meritocracy model template](http://oss-watch.ac.uk/resources/meritocraticgovernancemodel)
* [Node.js's liberal contribution policy](https://medium.com/the-node-js-collection/healthy-open-source-967fa8be7951)

## &iquest;Necesito documentaci&oacute;n de gobierno cuando lanzo mi proyecto?

No hay momento adecuado para describir el gobierno de su proyecto, pero es mucho m&aacute;s f&aacute;cil definirlo una vez que haya visto c&oacute;mo se desarrolla la din&aacute;mica de su comunidad. ¡La mejor parte (y m&aacute;s dif&iacute;cil) sobre el gobierno de c&oacute;digo abierto es que est&aacute; conformado por la comunidad!

Sin embargo, una cierta documentaci&oacute;n temprana contribuir&aacute; inevitablemente al gobierno de su proyecto, as&iacute; que empiece a escribir lo que pueda. Por ejemplo, puede definir expectativas claras de comportamiento o c&oacute;mo funciona su proceso de contribuci&oacute;n, incluso en el lanzamiento de su proyecto.

Si usted es parte de una empresa lanzando un proyecto de c&oacute;digo abierto, vale la pena tener una discusi&oacute;n interna antes del lanzamiento acerca de c&oacute;mo su empresa espera mantener y tomar decisiones sobre el proyecto de seguir adelante. Tambi&eacute;n es posible que desee explicar p&uacute;blicamente algo en particular sobre c&oacute;mo su empresa (o no) participar&aacute; en el proyecto.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/caabernathy?s=180" class="pquote-avatar" alt="avatar">
  Nosotros asignamos peque&ntilde;os equipos para gestionar proyectos en GitHub, los cuales está actualmente trabajando en ellos en Facebook. Por ejemplo, React es ejecutado por un Ingeniero de React.
  <p markdown="1" class="pquote-credit">
— @caabernathy, ["Una vista interna del c&oacute;digo abierto en Facebook"](https://opensource.com/life/15/10/ato-interview-christine-abernathy-facebook)
  </p>
</aside>

## &iquest;Qu&eacute; pasa cuando los empleados de corporaciones comienzan a enviar contribuciones?

Los proyectos exitosos de c&oacute;digo abierto se utilizan por muchas personas y empresas, y algunas empresas pueden eventualmente tener flujos de ingresos generalmente vinculados al proyecto. Por ejemplo, una empresa puede utilizar el c&oacute;digo del proyecto como un componente en una oferta de servicios comerciales.

A medida que el proyecto se utiliza m&aacute;s ampliamente, las personas que tienen experiencia en ella comienzan a estar m&aacute;s demandados - ¡puedes ser uno de ellos! - y a veces se les paga por el trabajo que realizan en el proyecto.

Es importante tratar la actividad comercial como algo normal y como otra fuente de energ&iacute;a de desarrollo. Por supuesto, los desarrolladores pagados no deben recibir un trato especial sobre los no pagados. Cada contribuci&oacute;n debe ser evaluada por sus m&eacute;ritos t&eacute;cnicos. Sin embargo, la gente debe sentirse c&oacute;moda participando en la actividad comercial, y sentirse c&oacute;moda diciendo sus casos de uso al argumentar a favor de una mejora o caracter&iacute;stica en particular.

"Comercial" es completamente compatible con "c&oacute;digo abierto". "Comercial" s&oacute;lo significa que existe dinero involucrado en alguna parte - que el software se utiliza en el comercio, que es cada vez m&aacute;s probable como un proyecto gana la adopci&oacute;n. (Cuando se utiliza software de c&oacute;digo abierto como parte de un producto que no es de c&oacute;digo abierto, el producto general sigue siendo un software "propietario", aunque, al igual que el c&oacute;digo abierto, podr&iacute;a utilizarse con fines comerciales o no comerciales).

Como cualquier otra persona, los desarrolladores con motivaci&oacute;n comercial ganan influencia en el proyecto a trav&eacute;s de la calidad y la cantidad de sus contribuciones. Obviamente, un desarrollador al cual se le paga por su tiempo, puede ser capaz de hacer algo m&aacute;s que alguien al que no se le paga, pero eso est&aacute; bien: el pago es s&oacute;lo uno de los muchos factores posibles que podr&iacute;an afectar cuánto una persona hace. Manten los debates del proyecto centrados en las contribuciones, no en los factores externos que permiten a las personas a hacer esas contribuciones.

## ¿Necesito una entidad legal para apoyar a mi proyecto?

Usted no necesita una entidad legal para apoyar su proyecto de c&oacute;digo abierto a menos que est&eacute; manejando dinero.

Por ejemplo, si desea crear un negocio comercial, desee configurar una C Corp o LLC (si vives en los EE.UU.). Si est&aacute; haciendo un trabajo de contrato relacionado con su proyecto de c&oacute;digo abierto, puede aceptar dinero como propietario &uacute;nico, o establecer una LLC (si vives en los EE.UU.).

Si quieres aceptar donaciones para tu proyecto de c&oacute;digo abierto, podes configurar un bot&oacute;n de donaci&oacute;n (mediante PayPal o Stripe, por ejemplo), pero el dinero no ser&aacute; deducible de impuestos a menos que sea una organizaci&oacute;n sin fines de lucro calificada (un 501c3, si est&aacute;s en los EE.UU.).

Muchos proyectos no desean pasar por la molestia de crear una organizaci&oacute;n sin fines de lucro, por lo que encuentran un patrocinador fiscal sin fines de lucro en su lugar. Un patrocinador fiscal acepta donaciones en su nombre, normalmente a cambio de un porcentaje de la donaci&oacute;n. [Software Freedom Conservancy](https://sfconservancy.org/), [Apache Foundation](https://www.apache.org/), [Eclipse Foundation](https://eclipse.org/org/foundation/ ), [Linux Foundation](https://www.linuxfoundation.org/projects) y [Open Collective](https://opencollective.com/opensource) son ejemplos de organizaciones que sirven como patrocinadores fiscales para proyectos de c&oacute;digo abierto.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/piamancini?s=180" class="pquote-avatar" alt="avatar">
  Nuestra meta es proveer una infraestructura que las comunidades puedan usar para ser autosostenibles, creando as&iacute; un ambiente en el que todos, contribuyentes, patrocinadores, obtengan beneficios concretos.
  <p markdown="1" class="pquote-credit">
— @piamancini, ["Moving beyond the charity framework"](https://medium.com/open-collective/moving-beyond-the-charity-framework-b1191c33141)
  </p>
</aside>

Si tu proyecto est&aacute; estrechamente asociado con un determinado idioma o ecosistema, tambi&eacute;n puede haber un framework relacionado con el que pueda trabajar. Por ejemplo, la [Python Software Foundation](https://www.python.org/psf/) ayuda a [PyPI](https://pypi.org/), el gestor de paquetes de Python y el [Node.js Foundation](https://foundation.nodejs.org/) ayuda a apoyar [Express.js](https://expressjs.com/), un framework basado en nodos.
