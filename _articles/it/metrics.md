---
lang: es
title: M&eacute;tricas de c&oacute;digo abierto
description: Tomar decisiones informadas para ayudar a tu proyecto de c&oacute;digo abierto a prosperar mediante la medici&oacute;n y el seguimiento de su &eacute;xito.
class: metrics
order: 9
image: /assets/images/cards/metrics.png
related:
  - finding
  - best-practices
---

## ¿Para qu&eacute; medir algo?

Los datos, usados de forma sabia, pueden ayudarte a tomar mejores decisiones.

Con m&aacute;s informaci&oacute;n puedes:

* Entender c&oacute;mo los usuarios responden a una nueva caracter&iacute;stica
* Determinar de d&oacute;nde provienen nuevos usuarios
* Identificar y decidir si conviene brindar soporte a una parte separada de funcionalidad
* Cuantificar la popularidad de tu proyecto
* Entender c&oacute;mo es usado tu proyecto
* Obtener dinero a trav&eacute;s de publicidad, donaciones, entre otros

Por ejemplo, [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md) descubri&oacute; que Google Analytics los ayuda a priorizar el trabajo

> Homebrew es gratuito y lo trabajan por completo voluntarios con algo de tiempo libre. Como resultado, no tenemos los recursos para obtener estudios detallados de usuarios, y as&iacute; determinar c&oacute;mo diseñar caracter&iacute;sticas y priorizar nuestro trabajo actual. An&aacute;lisis de usuarios an&oacute;nimos nos permiten priorizar arreglos y caracter&iacute;sticas basadas en c&oacute;mo, d&oacute;nde y cu&aacute;ndo las personas utilizan Homebrew.

La popularidad no lo es todo. Todos se involucran en el C&oacute;digo Abierto por diferentes razones. Si tu meta como encargado de mantener un proyecto es mostrar tu trabajo, mantener transparente el c&oacute;digo, o simplemente divertirte, las m&eacute;tricas quiz&aacute;s no sean tan importantes.

Si tu _est&aacute;s_ interesado en entender tu proyecto a un nivel m&aacute;s profundo, debes leer formas de analizar la actividad del mismo.

## Descubrimiento

Antes de que alguien pueda usar o contribuir a tu proyecto, quiz&aacute;s necesiten saber que el mismo existe. Debes preguntarte: _¿Las personas pueden encontrar el proyecto?_

![traffic graph](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

Si tu proyecto est&aacute; hosteado en GitHub, [puedes ver](https://help.github.com/articles/about-repository-graphs/#traffic) cu&aacute;ntas personas lo visitan, y de d&oacute;nde vienen. En la p&aacute;gina de tu proyecto haz click en "Graphs", y luego "Traffic". En esta p&aacute;gina puedes ver:

* **Total de vistas:** Informa la cantidad de veces que tu p&aacute;gina fue vista

* **Total de visitantes únicos:** Te dice la cantidad de personas que vieron tu proyecto

* **Sitios de referencia:** Te dice de d&oacute;nde vienen las visitas. Puede ayudar a detectar el público al cual apuntar, o para determinar si tu publicidad est&aacute; dando resultado.

* **Contenido popular:** Te informa sobre las partes del proyecto que la gente m&aacute;s visita.

[GitHub stars](https://help.github.com/articles/about-stars/) puede brindarte una l&iacute;nea base para medir popularidad. No necesariamente tiene que ver con uso o cantidad de descargas, si no m&aacute;s bien según la cantidad de notoriedad de tu proyecto.

Quiz&aacute;s tambi&eacute;n quieras [rastrear la forma que te descubren desde lugares espec&iacute;ficos](https://opensource.com/business/16/6/pirate-metrics): por ejemplo, Google PageRank, tr&aacute;fico que hace referencia a tu p&aacute;gina web del proyecto, o referencias desde otros proyectos.

## Uso

Las personas hallan tu proyecto en ese lugar salvaje y loco llamado Internet. Lo mejor ser&iacute;a que, cuando vean tu proyecto, se sientan obligados o atra&iacute;dos a hacer algo. La segunda pregunta que queremos hacer es: _¿Las personas est&aacute;n usando tu proyecto?_

Si usas un administrador de paquetes, como npm o Rubygems.org para distribuir tu proyecto, quiz&aacute;s quieras rastrear las descargas del mismo

Cada administrador de paquetes usa diferentes definiciones de "descarga", y las descargas no est&aacute;n necesariamente relacionadas con la instalaci&oacute;n o el uso, pero provee una l&iacute;nea base para la comparaci&oacute;n. Trata de usar [Libraries.io](https://libraries.io/) para rastrear el uso de estad&iacute;sticas a trav&eacute;s de algunos de los administradores de paquetes m&aacute;s populares.

Si tu proyecto est&aacute; en GitHub, navega nuevamente a "Traffic". Puedes usar [clone graph](https://github.com/blog/1873-clone-graphs) para ver cu&aacute;ntas veces tu proyecto ha sido clonado en un d&iacute;a determinado.

![clone graph](/assets/images/metrics/clone_graph.png)

Si el uso es bajo comparado con el número de personas descubriendo tu proyecto, debes considerar que est&aacute;s enfrentando uno de dos problemas:

* Tu proyecto no est&aacute; atrayendo exitosamente a la audiencia, o
* est&aacute;s atrayendo a la audiencia incorrecta

Por ejemplo, si tu proyecto figura en la p&aacute;gina principal de Hacker New, muy probablmente vas a ver un salto en "Traffic", pero una tasa de conversi&oacute;n baja, porque est&aacute;s alcanzando a todos en Hacker News. En cambio, si tu proyecto en Ruby est&aacute; siendo publicitado en una conferencia de Ruby, muy probablmente ver&aacute;s una tasa de conversi&oacute;n mayor.

Trata de deducir de d&oacute;nde proviene tu audiencia, y pide feedback a otros para saber cu&aacute;l de los dos problemas est&aacute;s enfrentando.

Una vez que sepas que las personas usan tu proyecto, quiz&aacute;s quieras probar determinar qu&eacute; es lo que hacen con &eacute;l. ¿Lo usan para proyectos de investigaci&oacute;n o negocios? ¿Realizan "fork" al mismo y est&aacute;n agregando nuevas caracter&iacute;sticas?

## Retener

La gente est&aacute; hallando tu proyecto y lo est&aacute;n usando. La siguiente pregunta que debes hacerte es: _¿Las personas est&aacute;n contribuyendo al proyecto?_

Nunca es demasiado temprano para comenzar a pensar en los contribuyentes. Sin otras personas te arriesgas a enfrentar una situaci&oacute;n donde tu proyecto es _popular_ (muchas personas lo usan) pero no _soportado_ (no hay tiempo suficiente para mantener el proyecto y afrontar la demanda).

Retener tambi&eacute;n requiere un [flujo de nuevos contribuyentes](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2), debido a que contribuyentes activos pueden, en algún momento, continuar hacia en otros proyectos.

Ejemplos de m&eacute;tricas de comunidad que quieres rastrear incluyen:

* **El total de commits por contribuyente, y el número de ellos:** Te informa cu&aacute;ntos contribuyentes tienes y qui&eacute;n es m&aacute;s o menos activo. En GitHub, pudes ver esto debajo de "Graphs" -> "Contributors". Actualmente est&eacute; gr&aacute;fico solo cuenta los contribuyentes que han hecho algún commit a la rama por defecto del repositorio.

![contributor graph](/assets/images/metrics/repo_contributors_specific_graph.png)

* **Contribuyentes nuevos, casuales y repetidos** Te ayuda a rastrear si est&aacute;s obteniendo nuevos contribuyentes, y si vuelven. (Los casuales son aquellos con un número bajo de commits, elige tu criterio para definir dicho número). Sin nuevos contribuyentes, la comunidad de tu proyecto puede permanecer estancada.

* **Número de issues y pull requests abiertos:** Si estos números se hacen muy grandes necesitar&aacute;s ayuda para revisar el c&oacute;digo.

* **Número de issues y pull requests que _han sido abiertos_:** Los issues abiertos significan que alguien se preocupa lo suficiente por tu proyecto para abrir un issue. Si ese número incremente con el tiempo sugiere que las personas est&aacute;n interesadas en tu proyecto.

* **Tipos de contribuci&oacute;n:** Por ejemplo commits, arreglar typos, solucionar bugs o comentando en un issue.

<aside markdown="1" class="pquote">
  <img src="https://avatars.githubusercontent.com/arfon?s=180" class="pquote-avatar" alt="avatar">
  C&oacute;digo Abierto es m&aacute;s que solo c&oacute;digo. Proyectos de este tipo exitosos han incluido contribuciones de c&oacute;digo y documentaci&oacute;n acompañados por una conversaci&oacute;n acerca de estos cambios.
  <p markdown="1" class="pquote-credit">
— @arfon, ["The Shape of Open Source"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## Actividad de mantenimiento

Finalmente, quiz&aacute;s quieras cerrar el ciclo de asegurarte si los encargados de mantener tu proyecto pueden manejar el volumen de contribuciones que se vayan a recibir. La última pregunta que quieres hacerte es: _¿Estoy/Estamos listo/s para responder a la comunidad?_

Encargados de mantenimiento que no respondan pueden volverse un cuello de botella en tu proyecto. Si alguien hace una contribuci&oacute;n pero no recibe noticia del encargado de mantenimiento, esta persona puede sentirse desmotivada y por ende abandonar el proyecto.

[Investigaci&oacute;n de Mozilla](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) sugiere que la sensibilidad y respuesta de los encargados de mantenimiento es un factor cr&iacute;tico a la hora de motivar nuevas contribuciones.

Considera rastrear cúanto te lleva a ti, o otro encargado, responder a contribuciones, ya sea in issue o un pull request. Responder no requiere realizar ninguna acci&oacute;n, puede ser tan simple c&oacute;mo decir: _"Graacias por tu contribuci&oacute;n, lo revisar&eacute; dentro de esta semana."_

Tambi&eacute;n puedes medir el tiempo que te lleva el moverte entre etapas del proceso de contribuci&oacute;n, como por ejemplo:

* Tiempo promedio en que un issue permanece abierto
* Si los issues quedan cerrados por pull requests
* Si los stale issues se cierran
* Tiempo promedio de merge de un pull request

## Usa 📊 para aprender acerca de las personas

Entender m&eacute;tricas te ayudar&aacute; a construir un proyecto activo y fruct&iacute;fero. Aunque no rastrees cada m&eacute;trica en un dashboard, usa un framework que te permita enfocarte en el tipo de comportamiento que ayudar&aacute; a tu proyecto a prosperar.
