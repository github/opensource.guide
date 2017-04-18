---
locale: en-US
title: Open Source Metrics
description: Make informed decisions to help your open source project thrive by measuring and tracking its success.
class: metrics
toc:
  why-measure-anything: "Why measure anything?"
  discovery: "Discovery"
  usage: "Usage"
  retention: "Retention"
  maintainer-activity: "Maintainer activity"
order: 9
image: /assets/images/cards/metrics.png
---

## ¿Para qué medir algo?

Los datos, usados de forma sabia, pueden ayudarte a tomar mejores decisiones.

Con más información puedes:

* Entender cómo los usuarios responden a una nueva característica
* Determinar de dónde provienen nuevos usuarios
* Identificar y decidir si conviene brindar soporte a una parte separada de funcionalidad
* Cuantificar la popularidad de tu proyecto
* Entender cómo es usado tu proyecto
* Obtener dinero a través de publicidad, donaciones, entre otros

Por ejemplo, [Homebrew](https://github.com/Homebrew/brew/blob/bbed7246bc5c5b7acb8c1d427d10b43e090dfd39/docs/Analytics.md) descubrió que Google Analytics los ayuda a priorizar el trabajo

> Homebrew es gratuito y lo trabajan por completo voluntarios con algo de tiempo libre. Como resultado, no tenemos los recursos para obtener estudios detallados de usuarios, y así determinar cómo diseñar características y priorizar nuestro trabajo actual. Análisis de usuarios anónimos nos permiten priorizar arreglos y características basadas en cómo, dónde y cuándo las personas utilizan Homebrew.

La popularidad no lo es todo. Todos se involucran en el Código Abierto por diferentes razones. Si tu meta como encargado de mantener un proyecto es mostrar tu trabajo, mantener transparente el código, o simplemente divertirte, las métricas quizás no sean tan importantes.

Si tu _estás_ interesado en entender tu proyecto a un nivel más profundo, debes leer formas de analizar la actividad del mismo.

## Descubrimiento

Antes de que alguien pueda usar o contribuir a tu proyecto, quizás necesiten saber que el mismo existe. Debes preguntarte: _¿las personas pueden encontrar el proyecto?_

![traffic graph](/assets/images/metrics/repo_traffic_graphs_tooltip.png)

Si tu proyecto está hospedado en GitHub, [puedes ver](https://help.github.com/articles/about-repository-graphs/#traffic) cuántas personas lo visitan, y de dónde vienen. En la página de tu proyecto haz click en "Graphs", y luego "Traffic". En esta página puedes ver:

* **Total de vistas:** Informa la cantidad de veces que tu página fue vista

* **Total de visitantes únicos:** Te dice la cantidad de personas que vieron tu proyecto

* **Sitios de referencia:** Te dice de dónde vienen las visitas. Puede ayudar a detectar el público al cual apuntar, o para determinar si tu publicidad está dando resultado.

* **Contenido popular:** Te informa sobre las partes del proyecto que la gente más visita.

[GitHub stars](https://help.github.com/articles/about-stars/) puede brindarte una línea base para medir popularidad. No necesariamente tiene que ver con uso o cantidad de decargas, si no más bien según la cantidad de notoriedad de tu proyecto.

Quizás también quieras [rastrear la forma que te descubren desde lugares específicos](https://opensource.com/business/16/6/pirate-metrics): por ejemplo, Google PageRank, tráfico que hace referencia a tu página web del proyecto, o referencias desde otros proyectos.

## Uso

Las personas hallan tu proyecto en ese lugar salvaje y loco llamado Internet. Lo mejor sería que, cuando vean tu proyecto, se sientan obligados o atraídos a hacer algo. La segunda pregunta que queremos hacer es: _¿Las personas están usando tu proyecto?_

Si usas un administrador de paquetes, como npm o Rubygems.org para distribuir tu proyecto, quizás quieras rastrear las descargas del mismo

Cada administrador de paquetes usa diferentes definiciones de "descarga", y las descargas no están necesariamente relacionadas con la instalación o el uso, pero provee una línea base para la comparación. Trata de usar [Libraries.io](https://libraries.io/) para rastrear el uso de estadísticas a través de algunos de los administradores de paquetes más populares.

Si tu proyecto está en GitHub, navega nuevamente a "Traffic". Puedes usar [clone graph](https://github.com/blog/1873-clone-graphs) para ver cuántas veces tu proyecto ha sido clonado en un día determinado.

![clone graph](/assets/images/metrics/clone_graph.png)

Si el uso es bajo comparado con el número de personas descubriendo tu proyecto, debes considerar que estás enfrentando uno de dos problemas:

* Tu proyecto no está atrayendo exitosamente a la audiencia, o
* estás atrayendo a la audiencia incorrecta

Por ejemplo, si tu proyecto figura en la página principal de Hacker New, muy probablmente vas a ver un salto en "Traffic", pero una tasa de conversión baja, porque estás alcanzando a todos en Hacker News. En cambio, si tu proyecto en Ruby está siendo publicitado en una conferencia de Ruby, muy probablmente verás una tasa de conversión mayor. 

Trata de deducir de dónde proviene tu audiencia, y pide feedback a otros para saber cuál de los dos problemas estás enfrentando.

Una vez que sepas que las personas usan tu proyecto, quizás quieras probar determinar qué es lo que hacen con él. ¿Lo usan para proyectos de investigación o negocios? ¿Realizan "fork" al mismo y están agregando nuevas características?

## Retener

La gente está hallando tu proyecto y lo están usando. La siguiente pregunta que debes hacerte es: _¿Las personas están contribuyendo al proyecto?_

Nunca es demasiado temprano para comenzar a pensar en los contribuyentes. Sin otras personas te arriesgas a enfrentar una situación donde tu proyecto es _popular_ (muchas personas lo usan) pero no _soportado_ (no hay tiempo suficiente para mantener el proyecto y afrontar la demanda).

Retener también requiere un [flujo de nuevos contribuyentes](http://blog.abigailcabunoc.com/increasing-developer-engagement-at-mozilla-science-learning-advocacy#contributor-pathways_2), debido a que contribuyentes activos pueden, en algún momento, continuar hacia en otros proyectos. 

Ejemplos de métricas de comunidad que quieres rastrear incluyen:

* **El total de commits por contribuyente, y el número de ellos: ** Te informa cuántos contribuyentes tienes y quién es más o menos activo. En GitHub, pudes ver esto debajo de "Graphs" -> "Contributors". Actualmente esté gráfico solo cuenta los contribuyentes que han hecho algún commit a la rama por defecto del repositorio.

![Gráfico de contribuyentes](/assets/images/metrics/repo_contributors_specific_graph.png)

* **Contribuyentes nuevos, casuales y repetidos** Te ayuda a rastrear si estás obteniendo nuevos contribuyentes, y si vuelven. (Los casuales son aquellos con un número bajo de commits, elige tu criterio para definir dicho número). Sin nuevos contribuyentes, la comunidad de tu proyecto puede permanecer estancada.

* **Número de issues y pull requests abiertos: ** Si estos números se hacen muy grandes necesitarás ayuda para revisar el código.

* **Número de issues y pull requests que _han sido abiertos_: ** Los issues abiertos significan que alguien se preocupa lo suficiente por tu proyecto para abrir un issue. Si ese número incremente con el tiempo sugiere que las personas están interesadas en tu proyecto.

* **Tipos de contribución:** Por ejemplo commits, arreglar typos, solucionar bugs o comentando en un issue.

<aside markdown="1" class="pquote">
  <img src="https://avatars1.githubusercontent.com/u/4483" class="pquote-avatar" alt="avatar">
  Código Abierto es más que solo código. Proyectos de este tipo exitosos han incluido contribuciones de código y documentación acompañados por una conversación acerca de estos cambios.
  <p markdown="1" class="pquote-credit">
— @arfon, ["The Shape of Open Source"](https://github.com/blog/2195-the-shape-of-open-source)
  </p>
</aside>

## Actividad de mantenimiento

Finalmente, quizás quieras cerrar el ciclo de asegurarte si los encargados de mantener tu proyecto pueden manejar el volumen de contribuciones que se vayan a recibir. La última pregunta que quieres hacerte es: _¿Estoy/Estamos listo/s para responder a la comunidad?_

Encargados de mantenimiento que no respondan pueden volverse un cuello de botella en tu proyecto. Si alguien hace una contribución pero no recibe noticia del encargado de mantenimiento, esta persona puede sentirse desmotivada y por ende abandonar el proyecto.

[Investigación de Mozilla](https://docs.google.com/presentation/d/1hsJLv1ieSqtXBzd5YZusY-mB8e1VJzaeOmh8Q4VeMio/edit#slide=id.g43d857af8_0177) sugiere que la sensibilidad y respuesta de los encargados de mantenimiento es un factor crítico a la hora de motivar nuevas contribuciones.

Considera rastrear cúanto te lleva a ti, o otro encargado, responder a contribuciones, ya sea in issue o un pull request. Responder no requiere realizar ninguna acción, puede ser tan simple cómo decir: _"Graacias por tu contribución, lo revisaré dentro de esta semana."_ 

También puedes medir el tiempo que te lleva el moverte entre etapas del proceso de contribución, como por ejemplo:

* Tiempo promedio en que un issue permanece abierto
* Si los issues quedan cerrados por pull requests
* Si los stale issues se cierran
* Tiempo promedio de merge de un pull request


## Usa 📊 para aprender acerca de las personas

Entender métricas te ayudará a construir un proyecto activo y fructífero. Aunque no rastrees cada métrica en un dashboard, usa un framework que te permita enfocarte en el tipo de comportamiento que ayudará a tu proyecto a prosperar.
