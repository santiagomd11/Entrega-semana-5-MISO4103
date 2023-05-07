# Entrega-semana-5-MISO4103

Funcionalidades bajo prueba

* Creación, edición Tags
* Gestión de Staff
* Creación, edición notas


**ESCENARIOS DE PRUEBA**

**Creación, edición Tags**

 Login en la pagina, listar etiquetas y crear una etiqueta nueva
 Login en la pagina, listar etiquetas, crear una etiqueta nueva y luego editarla
 Login en la pagina, listar etiquetas, crear una etiqueta nueva y luego borrarla
 Login en la pagina, listar etiquetas y crear una etiqueta INTERNA nueva

**Gestión de Staff** 

  Login en la pagina, ver los usuarios de staff y editar el usuario Ghost
  Login en la pagina, ver los usuarios de staff y editar la contraseña del usuario Ghost
  Login en la pagina, ver los usuarios de staff y suspender al usuario Ghost luego volver a habilitarlo
  Login en la pagina, ver los usuarios de staff e invitar a un nuevo usuario


**INSTRUCCIONES PARA EJECUCIÓN DE ESCENARIOS**

KRAKEN

  1. Pararse en la carpeta de PruebasKraken desde el directorio raíz sería cd PruebasKraken
  2. Tener corriendo en la máquina local Ghost, para la correcta ejecución de las pruebas es importante que el usuario creado en Ghost tenga unas credenciales que correspondan con las especificadas en la pruebas:
      ```
        email: myjachis@gmail.com
        password: Mr.hellno19 
      ```
  4. Dado que kraken tiene porblemas al correr los escenarios de cada feature de manera secuencial, se siguio la recomendacion que se menciono en slack: https://uniandes-miso.slack.com/archives/C04V1M6EC3Y/p1683384377176309?thread_ts=1683383737.972989&cid=C04V1M6EC3Y. Por lo cual, puede encontrar las features siguiendo el path ./features/features. Selecciona la feature que quiere ejecutar y la coloca al nivel de ./features . En caso de que ya haya una feature debe moverla al directorio ./features/features y dejar solo la feature que que quiere ejecutar en ./features
  4. Correr el comando npx kraken-node run

PLAYWRIGHT
 1. Clonar repositorio
 2. Ir a la carpeta "PruebasPlayWright" (e.g. `cd Entrega-semana-5-MISO4103/PruebasPlayWright`)
 3. Ejecutar el comando `npm install playwright`
 4. Ejecutar el comando `node index.js`

