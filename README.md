# Entrega-semana-5-MISO4103

**Funcionalidades bajo prueba**

 * Creación, edición Tags
 * Gestión de Staff
 * Posts
 * Pages
 * Drafts

**ESCENARIOS DE PRUEBA**

**Creación, edición Tags**

  * Login en la pagina, listar etiquetas y crear una etiqueta nueva
  * Login en la pagina, listar etiquetas, crear una etiqueta nueva y luego editarla
  * Login en la pagina, listar etiquetas, crear una etiqueta nueva y luego borrarla
  * Login en la pagina, listar etiquetas y crear una etiqueta INTERNA nueva

**Gestión de Staff** 

  * Login en la pagina, ver los usuarios de staff y editar el usuario Ghost
  * Login en la pagina, ver los usuarios de staff y editar la contraseña del usuario Ghost
  * Login en la pagina, ver los usuarios de staff y suspender al usuario Ghost luego volver a habilitarlo
  * Login en la pagina, ver los usuarios de staff e invitar a un nuevo usuario

**Posts** 

  * Login en la pagina, listar posts y crear un post.
  * Login en la pagina, listar posts, crear un post, y editar el post.
  * Login en la pagina, listar posts, crear un post, y dejarlo programado para publicarse mas tarde.
  * Login en la pagina, listar posts, crear un post, y eliminarlo.
  
**Pages** 

  * Login en la pagina, listar pages y crear una page.
  * Login en la pagina, listar pages, crear una page, y editar la page.
  * Login en la pagina, listar pages, crear una page, y dejarla programada para publicarse mas tarde.
  * Login en la pagina, listar pages, crear una page, y eliminarla.
  
**Drafts** 

  * Login en la pagina, y crear un post draft.
  * Login en la pagina, crear un post draft, y editarlo.
  * Login en la pagina, crear un post draft, y publicarlo.
  * Login en la pagina, crear un post draft, y eliminarlo.
  
  
**INSTRUCCIONES PARA EJECUCIÓN DE ESCENARIOS**

KRAKEN

  1. Pararse en la carpeta de PruebasKraken desde el directorio raíz sería cd PruebasKraken
  2. Tener corriendo en la máquina local Ghost (para ello instale Ghost en su máquina local la versión con la que actualmente se corren estas pruebas es la v3.41.1 con NodeJS v 14.19.0 y una vez instalado corra el comando ghost start  ), para la correcta ejecución de las pruebas es importante que el usuario creado en Ghost tenga unas credenciales que correspondan con las especificadas en la pruebas:
      ```
        email: myjachis@gmail.com
        password: Mr.hellno19 
      ```
  4. Dado que kraken tiene problemas al correr los escenarios de cada feature de manera secuencial, se siguio la recomendacion que se menciono en slack: [link](https://uniandes-miso.slack.com/archives/C04V1M6EC3Y/p1683384377176309?thread_ts=1683383737.972989&cid=C04V1M6EC3Y). Por lo cual, puede encontrar las features siguiendo el path ./features/features. Selecciona la feature que quiere ejecutar y la coloca al nivel de ./features . En caso de que ya haya una feature debe moverla al directorio ./features/features y dejar solo la feature que que quiere ejecutar en ./features
  4. Correr el comando npx kraken-node run

PLAYWRIGHT
 1. Clonar repositorio
 2. Ir a la carpeta "PruebasPlayWright" (e.g. `cd Entrega-semana-5-MISO4103/PruebasPlayWright`)
 3. Ejecutar el comando `npm install playwright`
 4. Ejecutar el comando `node index.js`

