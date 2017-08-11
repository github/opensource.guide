Cómo colaborar en un proyecto GitHub y como hacer un pull-request

Si hay algún proyecto en GitHub en el cual deseas colaborar para corregir un error o para sugerir nuevas características, esta completa guía es lo que necesitas saber antes de comenzar a ser colaborador de proyectos en GitHub.

El flujo de trabajo de los “pull-request” para contribuir con código:

Paso 1: Haz un fork:
En el sitio de Github en la página del repositorio presiona el botón Fork.

Paso 2: Clona el repositorio:
Clona el repositorio usando la URL que está en el sidebar en la página que te direccionó Git al hacer Fork.

Paso 3: Añade el upstream remoto:
Cambiate dentro de la carpeta del repositorio clonado y después en este punto, puedes añadir el upstream remoto.

Ejemplo:
cd bootstrap
git remote add upstream git@github.com:twbs/bootstrap.git
Esto ahora te permitirá que hacer un pull de cambios del origen localmente y combinarlos, así:

Ejemplo:
git fetch upstream
git merge upstream/master

Paso 4: Crea una nueva rama y cámbiate a ella con checkout:
Sin embargo, antes de hacer tus propios cambios, crea una rama para el tema.

Ejemplo:
git checkout -b mejora_345

Paso 5: Haz un commit:
Ahora, puedes hacer tus cambios y crear un commit que registre solamente esos cambios.

Ejemplo:
git add .
git commit -am "Importantes cambios en....."

Paso 6: Haz un push:
Enseguida, haz un push de la rama tema hacia tu propio fork del proyecto.

Ejemplo:
git push origin mejora_345

Paso 7: Crea un Pull Request:
Por último, se creará un pull request. En primer lugar, ve a tu fork del repositorio. Es posible que veas un mensaje que dice “your recently pushed branches“, y si es así, puedes elegir “Compare and Pull Request“. De lo contrario, puedes seleccionar tu rama en el menú desplegable, y luego hacer clic en “Pull Request” o “Compare” en la parte superior derecha del repositorio.




