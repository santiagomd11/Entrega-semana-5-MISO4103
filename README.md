# Entrega-semana-5-6-7-8-MISO4103
## Semana  8
* Estrategia de pruebas: https://uniandes-my.sharepoint.com/:w:/g/personal/vs_montano_uniandes_edu_co/EXsAKNrO4YpFthLrWhZ4_iMBvBfHi8ZjJuw6R7EPorlqag?e=dDIQ5L
* Inventario de pruebas: https://uniandes-my.sharepoint.com/:x:/g/personal/vs_montano_uniandes_edu_co/EfVnwmC9bZZHnNpBpDJ3GHkBe2DT-UoSVGe_CRYYh2cIuA?e=08RbKR

## Semana  7 

Ejecucion sobre la version 3.41.1 de ghost, con node 14.19.0

Para esta semana se aplicaron las siguientes tecnicas de generacion de datos, para cada uno de los escenarios de prueba tanto en kraken como en playwright. Dando un total de 120 escenarios de prueba, kraken (60),playwright(60).

**Estrategia 1**: Datos a priori (40 -> 20 kraken + 20 playwright) 

**Estrategia 2**: Datos Pseudoaleatorios dinamicos (40 -> 20 kraken + 20 playwright)

**Estrategia 3**: Datos aleatorios (40 -> 20 kraken + 20 playwright)


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

### INSTRUCCIONES PARA EJECUCIÓN DE ESCENARIOS
**KRAKEN**

  1. Pararse en la carpeta de PruebasKraken desde el directorio raíz sería cd PruebasKraken
  2. Tener corriendo en la máquina local Ghost (para ello instale Ghost en su máquina local la versión con la que actualmente se corren estas pruebas es la v3.41.1 con NodeJS v 14.19.0 y una vez instalado corra el comando ghost start  ), para la correcta ejecución de las pruebas es importante que el usuario creado en Ghost tenga unas credenciales que correspondan con las especificadas en la pruebas:
      ```
        email: myjachis@gmail.com
        password: Mr.hellno19 
      ```
  3. Abrir la carpeta de la semana 7 cd EntregaSemana7/PruebasKraken
  4. Escoger la estrategia que desea ejecutar, ej: cd PruebasKrakenEstrategia1
  5. Dado que kraken tiene problemas al correr los escenarios de cada feature de manera secuencial, se siguio la recomendacion que se menciono en slack: [link](https://uniandes-miso.slack.com/archives/C04V1M6EC3Y/p1683384377176309?thread_ts=1683383737.972989&cid=C04V1M6EC3Y). Por lo cual, puede encontrar las features siguiendo el path ./features/features. Selecciona la feature que quiere ejecutar y la coloca al nivel de ./features . En caso de que ya haya una feature debe moverla al directorio ./features/features y dejar solo la feature que que quiere ejecutar en ./features
  6. Correr el comando npx kraken-node run
  7. En caso de tener problemas con faker al ejecutar npx kraken-node run. Ejecutar npm install faker o npm install faker@5.5.3, si es necesario tambien ejecutar npm audit fix --force.
 
 **Playwright**

  1. Ubicarse en la carpeta de EntregaSemana7 desde el directorio raíz sería cd EntregaSemana7
  2. Luego ubicarse en el directroio de PruebasPlaywright, que el comando sería cd PruebasPlaywright
  3. Tener corriendo en la máquina local Ghost (para ello instale Ghost en su máquina local la versión con la que actualmente se corren estas pruebas es la v3.41.1 con NodeJS v 14.19.0 y una vez instalado corra el comando ghost start  ), para la correcta ejecución de las pruebas es importante que el usuario creado en Ghost tenga unas credenciales que correspondan con las especificadas en la pruebas:
      ```
        email: myjachis@gmail.com
        password: Mr.hellno19 
      ```
  4. Escoger la estrategia que desea ejecutar ingresando a ese directorio, ej: cd PruebasPlaywrightEstrategia1
  5. Hacer npm install
  7. En caso de tener problemas con faker al intentar ejecutar los escenarios de pruebas, ejecute npm install faker o npm install faker@5.5.3.
  8. Luego ejecute node index.js y verá como los escenarios de pruebas empiezan a ejecutarse uno a uno

## Semana  6

Ejecucion sobre la version 5.46.1 de ghost, con node 18.16.0

**VIDEO SEMANA 6:** [LINK](https://uniandes-my.sharepoint.com/:v:/g/personal/vs_montano_uniandes_edu_co/Eb28Oz6dYxtFtBH7LrZ_0k4BQ9Ea_yfKRf1i__w0o76HBg?e=uxL2Uu)

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

**Posts** 

  * Login en la pagina, listar posts y crear un post.
  * Login en la pagina, listar posts, crear un post, y editar el post.
  * Login en la pagina, listar posts, crear un post, y dejarlo programado para publicarse mas tarde.
  * Login en la pagina, listar posts, crear un post, y eliminarlo.
  
**Drafts** 

  * Login en la pagina, y crear un post draft.
  * Login en la pagina, crear un post draft, y editarlo.
  
  
## INSTRUCCIONES PARA EJECUCIÓN DE ESCENARIOS

KRAKEN

  1. Pararse en la carpeta de PruebasKraken desde el directorio raíz sería cd PruebasKraken
  2. Tener corriendo en la máquina local Ghost (para ello instale Ghost en su máquina local la versión con la que actualmente se corren estas pruebas es la v3.41.1 con NodeJS v 14.19.0 y una vez instalado corra el comando ghost start  ), para la correcta ejecución de las pruebas es importante que el usuario creado en Ghost tenga unas credenciales que correspondan con las especificadas en la pruebas:
      ```
        email: myjachis@gmail.com
        password: Mr.hellno19 
      ```
  4. Dado que kraken tiene problemas al correr los escenarios de cada feature de manera secuencial, se siguio la recomendacion que se menciono en slack: [link](https://uniandes-miso.slack.com/archives/C04V1M6EC3Y/p1683384377176309?thread_ts=1683383737.972989&cid=C04V1M6EC3Y). Por lo cual, puede encontrar las features siguiendo el path ./features/features. Selecciona la feature que quiere ejecutar y la coloca al nivel de ./features . En caso de que ya haya una feature debe moverla al directorio ./features/features y dejar solo la feature que que quiere ejecutar en ./features
  4. Correr el comando npx kraken-node run


  KRAKEN - ESCENARIOS NUEVOS

  1. Pararse en la carpeta de PruebasKraken_Semana6 desde el directorio raíz sería cd PruebasKraken_Semana6
  2. Tener corriendo en la máquina local Ghost (para ello instale Ghost en su máquina local la versión con la que actualmente se corren estas pruebas es la v5.46.1 con NodeJS v 14.19.0 y una vez instalado corra el comando ghost start  ), para la correcta ejecución de las pruebas es importante que el usuario creado en Ghost tenga unas credenciales que correspondan con las especificadas en la pruebas, por las especificaciones de la nueva versión se tuvo que cambiar la clave para hacerla más robusta:
      ```
        email: myjachis@gmail.com
        password: Mr.hellno1998 
      ```
  4. Dado que kraken tiene problemas al correr los escenarios de cada feature de manera secuencial, se siguio la recomendacion que se menciono en slack: [link](https://uniandes-miso.slack.com/archives/C04V1M6EC3Y/p1683384377176309?thread_ts=1683383737.972989&cid=C04V1M6EC3Y). Por lo cual, puede encontrar las features siguiendo el path ./features/features. Selecciona la feature que quiere ejecutar y la coloca al nivel de ./features . En caso de que ya haya una feature debe moverla al directorio ./features/features y dejar solo la feature que que quiere ejecutar en ./features
  4. Correr el comando npx kraken-node run

PLAYWRIGHT
 1. Clonar el repositorio del proyecto
 2. Abrir la terminal y navegar hasta la carpeta "PruebasPlayWright". Puedes hacerlo ejecutando el siguiente comando:  (e.g. `cd Entrega-semana-5-MISO4103/PruebasPlayWright`)
 3. Instalar las dependencias de Playwright ejecutando el siguiente comando: `npm install playwright`
 4. Tener corriendo en la máquina local Ghost (para ello instale Ghost en su máquina local la versión con la que actualmente se corren estas pruebas es la v3.41.1 con NodeJS v 14.19.0 y una vez instalado corra el comando `ghost start`, para la correcta ejecución de las pruebas es importante que el usuario creado en Ghost tenga unas credenciales que correspondan con las especificadas en la pruebas:
      ```
        email: myjachis@gmail.com
        password: Mr.hellno19 
      ```
 5. Asegurarse de que en el archivo `index.js`, la función principal incluya los escenarios que se quieran probar (e.g. `testScenario1`)
 6. Una vez que las dependencias se hayan instalado correctamente, puedes ejecutar el archivo principal utilizando el siguiente comando `node index.js`. Esto iniciará la ejecución de las pruebas automatizadas con Playwright.
Asegúrate de tener Node.js y npm instalados en tu sistema antes de seguir estas instrucciones.

## INSTRUCCIONES PARA EJECUCIÓN DE SCRIPT DE COMPARACIÓN

  1. Primero ejecute las pruebas de la carpeta de pruebas de PruebasKraken, dentro de la carpeta reports generada se genera una carpeta screenshots le recomendamos moverla la carpeta root de este proyecto.
  2. Ahora ejecute las pruebas de la carpeta de pruebas de PrubasKraken_Semana6,, dentro de la carpeta reports generada se genera una carpeta screenshots le recomendamos moverla la carpeta root de este proyecto.
  3. Una vez cuente con ambas carpetas de screenshots dirijase al archivo reports.js y en la línea 7 y 6 escriba la ruta en la que están las dos carpetas de screenshots a comparar (Tenga en cuenta que se hará una comparación uno a uno) le aconsejamos mover las carpetas de screenshots a la raíz del proyecto para facilitar este proceso.
  4. Una vez hecho esto guarde cambios y desde la carpeta raíz ejecute el comando node reports.js (IMPORTANTE: Usar una versión de node superior a 15, aquí se ha usado la 18.16.0. dado que Kraken funciona con la versión 14.9.0 se aconseja el uso de nvm para poder cambiar entre versiones)
  5. Una vez corra el script podrá ver varios archivos html e imagenes (con el resultado de las diferencias) y al final un documento html llamado reports.html abralo y verá una lista con el reporte por cada imagene incluyendo la imagen de la carpeta 1 vs la carpeta 2, las diferencias y el porcentaje de diferencias. 

## Semana  5 

Ejecucion sobre la version 3.41.1 de ghost, con node 14.19.0

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
 
