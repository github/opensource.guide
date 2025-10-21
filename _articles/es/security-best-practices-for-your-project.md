---
lang: es
untranslated: true
title: Buenas prácticas de seguridad para tu proyecto
description: Fortalece el futuro de tu proyecto generando confianza mediante prácticas esenciales de seguridad — desde la autenticación multifactor (MFA) y el análisis de código hasta la gestión segura de dependencias y la notificación privada de vulnerabilidades.
class: security-best-practices
order: -1
image: /assets/images/cards/security-best-practices.png
---

Dejando de lado los errores y las nuevas funciones, la longevidad de un proyecto depende no solo de su utilidad, sino también de la confianza que gane de sus usuarios. Mantener esa confianza requiere contar con sólidas medidas de seguridad. A continuación, se presentan algunas acciones importantes que puedes tomar para mejorar significativamente la seguridad de tu proyecto.

## Asegúrate de que todos los colaboradores con privilegios hayan activado la autenticación multifactor (MFA).

### Un actor malicioso que logre hacerse pasar por un colaborador con privilegios en tu proyecto causará daños catastróficos.

Una vez que obtienen el acceso con privilegios, este actor puede modificar tu código para que realice acciones no deseadas (por ejemplo, minar criptomonedas), distribuir malware en la infraestructura de tus usuarios, o acceder a repositorios de código privados para extraer propiedad intelectual y datos sensibles, incluyendo credenciales de otros servicios.

La autenticación multifactor (MFA) ofrece una capa adicional de seguridad contra la toma de control de cuentas. Una vez activada, debes iniciar sesión con tu nombre de usuario y contraseña y proporcionar otra forma de autenticación que solo tú conozcas o a la que tengas acceso.

## Asegura tu código como parte de tu flujo de trabajo de desarrollo.

### Las vulnerabilidades de seguridad en tu código son más baratas de corregir si se detectan temprano en el proceso, que más tarde, cuando ya se encuentran en producción.

Utiliza una herramienta de Pruebas de Seguridad de Aplicaciones Estáticas (SAST) para detectar vulnerabilidades de seguridad en tu código. Estas herramientas operan a nivel de código y no necesitan un entorno de ejecución; por lo tanto, pueden ejecutarse temprano en el proceso y pueden integrarse de manera fluida en tu flujo de trabajo de desarrollo habitual, ya sea durante la fase de compilación o durante la revisión de código.

Es como tener a un experto capacitado revisando tu repositorio de código, ayudándote a encontrar vulnerabilidades de seguridad comunes que podrían estar ocultas a simple vista mientras programas.

Cómo elegir tu herramienta SAST?
Revisa la licencia: Algunas herramientas son gratuitas para proyectos de código abierto. Por ejemplo, GitHub CodeQL o SemGrep.
Verifica la cobertura para tu(s) lenguaje(s)

* Selecciona una que se integre fácilmente con las herramientas que ya usas y con tu proceso existente. Por ejemplo, es mejor que las alertas estén disponibles como parte de tu proceso y herramienta de revisión de código actual, en lugar de tener que ir a otra herramienta para verlas.
* ¡Cuidado con los falsos positivos! No quieres que la herramienta te haga perder tiempo innecesariamente.
* Revisa las funcionalidades: algunas herramientas son muy potentes y pueden realizar seguimiento de flujo de datos (taint tracking, por ejemplo, GitHub CodeQL), otras ofrecen sugerencias de corrección generadas por IA, y algunas facilitan la creación de consultas personalizadas (por ejemplo, SemGrep). 

## No compartas tus credenciales ni secretos de desarrollo.

### Los datos sensibles, como claves de API, tokens y contraseñas, a veces pueden terminar accidentalmente comprometidos en tu repositorio.

Imagina este escenario: eres el mantenedor de un proyecto de código abierto popular, con contribuciones de desarrolladores de todo el mundo. Un día, un colaborador, sin darse cuenta, comete en el repositorio algunas claves de API de un servicio de terceros. Días después, alguien encuentra estas claves y las utiliza para acceder al servicio sin permiso. El servicio se ve comprometido, los usuarios de tu proyecto experimentan interrupciones y la reputación de tu proyecto se ve afectada. Como mantenedor, ahora te enfrentas a las abrumadoras tareas de revocar los secretos comprometidos, investigar qué acciones maliciosas podría haber realizado el atacante con estos secretos, notificar a los usuarios afectados e implementar soluciones.

Para prevenir este tipo de incidentes, existen soluciones de "escaneo de secretos" que te ayudan a detectar esos secretos en tu código. Algunas herramientas, como GitHub Secret Scanning y Trufflehog de Truffle Security, pueden impedir que los subas a ramas remotas desde el principio, y otras herramientas pueden revocar automáticamente algunos secretos por ti.

## Revisa y actualiza tus dependencias.

### Las dependencias de tu proyecto pueden tener vulnerabilidades que comprometan la seguridad del mismo. Mantenerlas actualizadas de manera manual puede ser una tarea que consume mucho tiempo.

Imagina esto: un proyecto construido sobre la sólida base de una biblioteca muy utilizada. Más tarde, la biblioteca descubre un gran problema de seguridad, pero las personas que desarrollaron la aplicación que la utiliza no lo saben. Los datos sensibles de los usuarios quedan expuestos cuando un atacante aprovecha esta vulnerabilidad para acceder a ellos. Esto no es un caso teórico: es exactamente lo que le ocurrió a Equifax en 2017. No actualizaron su dependencia de Apache Struts después de recibir la notificación de una vulnerabilidad grave. Esta fue explotada, y la famosa brecha de seguridad de Equifax afectó los datos de 144 millones de usuarios.

Para prevenir estos escenarios, las herramientas de Análisis de Composición de Software (SCA), como Dependabot y Renovate, revisan automáticamente tus dependencias en busca de vulnerabilidades conocidas publicadas en bases de datos públicas como la NVD o la GitHub Advisory Database, y luego crean solicitudes de extracción (pull requests) para actualizarlas a versiones seguras. Mantenerse al día con las últimas versiones seguras de las dependencias protege tu proyecto de posibles riesgos.

## Evita cambios no deseados con ramas protegidas.

### El acceso sin restricciones a tus ramas principales puede provocar cambios accidentales o maliciosos que introduzcan vulnerabilidades o afecten la estabilidad de tu proyecto.

Un nuevo colaborador obtiene acceso de escritura a la rama principal y accidentalmente sube cambios que no han sido probados. Como resultado, se descubre una grave falla de seguridad debido a estos últimos cambios. Para prevenir este tipo de problemas, las reglas de protección de ramas aseguran que no se puedan subir o fusionar cambios en ramas importantes sin antes someterlos a revisiones y pasar los controles de estado especificados. Con esta medida adicional, tu proyecto está más seguro y garantiza calidad de primera en todo momento.

## Configura un mecanismo de recepción para el reporte de vulnerabilidades.

### Es una buena práctica facilitar a tus usuarios el reporte de errores, pero la gran pregunta es: cuando este error tiene un impacto en la seguridad, ¿cómo pueden reportarlo de manera segura sin exponerte como objetivo a hackers maliciosos?

Imagina esto: un investigador de seguridad descubre una vulnerabilidad en tu proyecto, pero no encuentra una forma clara o segura de reportarla. Sin un proceso designado, podría crear un issue público o comentarlo abiertamente en redes sociales. Incluso si tiene buenas intenciones y propone una solución, si lo hace mediante un pull request público, ¡otros lo verán antes de que se fusione! Esta divulgación pública expondrá la vulnerabilidad a actores maliciosos antes de que tengas oportunidad de solucionarla, lo que podría derivar en un exploit de día cero, atacando tu proyecto y a sus usuarios.

### Política de Seguridad

Para evitar esto, publica una política de seguridad. Una política de seguridad, definida en un archivo SECURITY.md, detalla los pasos para reportar problemas de seguridad, creando un proceso transparente de divulgación coordinada y estableciendo las responsabilidades del equipo del proyecto para atender los problemas reportados. Esta política de seguridad puede ser tan simple como: "Por favor, no publiques detalles en un issue o PR público; envíanos un correo privado a security@example.com", pero también puede incluir otros detalles, como el tiempo estimado de respuesta. Cualquier información que ayude a mejorar la efectividad y eficiencia del proceso de divulgación es recomendable.

### Reporte privado de vulnerabilidades.

En algunas plataformas, puedes agilizar y fortalecer tu proceso de gestión de vulnerabilidades, desde la recepción hasta la divulgación, utilizando issues privados. En GitLab, esto se logra con issues privados. En GitHub, se denomina reporte privado de vulnerabilidades (PVR, por sus siglas en inglés). El PVR permite a los mantenedores recibir y atender los reportes de vulnerabilidades, todo dentro de la plataforma de GitHub. GitHub crea automáticamente un fork privado para desarrollar las correcciones y un borrador de aviso de seguridad. Todo esto permanece confidencial hasta que decidas divulgar los problemas y publicar las correcciones. Para cerrar el ciclo, los avisos de seguridad se publicarán, informando y protegiendo a todos tus usuarios a través de su herramienta de SCA.

## Conclusión: unos pocos pasos para ti, una gran mejora para tus usuarios.

Estos pocos pasos pueden parecerte sencillos o básicos, pero son muy efectivos para hacer tu proyecto más seguro para sus usuarios, ya que ofrecen protección frente a los problemas más comunes.

## Colaboradores

### Muchas gracias a todos los mantenedores que compartieron sus experiencias y consejos con nosotros para esta guía!

Esta guía fue escrita por [@nanzggits](https://github.com/nanzggits) y [@xcorail](https://github.com/xcorail) con contribuidores de: 

[@JLLeitschuh](https://github.com/JLLeitschuh)
[@intrigus-lgtm](https://github.com/intrigus-lgtm) !y muchos mas!
