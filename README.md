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
  3. Correr el comando npx kraken-node run
  
