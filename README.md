# Creando una Red Social

## Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos y/u odiamos, y muchos no podemos vivir sin ellas.

Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo,
en una ronda de financiamiento con inversionistas, se presentó una red social
para químicos en la que los usuarios podían publicar artículos sobre sus
investigaciones, comentar en los artículos de sus colegas, y filtrar artículos
de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo
más comentado.

## Introducción

Una emprendedora nos ha encargado crear una red social. No nos da mucho detalle
sobre qué tipo de red social quiere, sólo nos dice que creemos la mejor que
podamos, y que luego la convenzamos de lanzarla al mercado. Nos da ciertos temas
en los que le gustaría invertir:

* Alimentación
* Feminismo
* Educación
* Salud
* Energías Renovables
* o la idea que mejor les parezca

## Objetivos de Aprendizaje

El objetivo principal de aprendizaje de este proyecto es construir una
[Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
[_responsive_](https://github.com/Laboratoria/curricula-js/tree/master/topics/css/02-responsive)
 (con más de una vista / página) en la que podamos **leer y escribir datos.**

Dicho en palabras sencillas, aprenderás a:

* Aplicar y profundizar todo lo que aprendiste en el proyecto anterior.
* Entender las necesidades de los usuarios para los que crearás el producto y
  que ayudarás a resolver.
* Poner en juego tu creatividad para generar ideas que lleven a una solución
  original y valiosa del problema.
* Contar con el apoyo de tus compañeras, debes trabajar en equipo buscando
  _feedback_ constante.
* Definir como crear la estructura de tu propia data y de qué forma mostrarla en
  el producto.

## Consideraciones generales

Este proyecto se debe "resolver" en tríos.

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6),
HTML y CSS :smiley:. Para este proyecto no está permitido utilizar
frameworks de JS.

Para comenzar tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## Parte obligatoria

### General

En este proyecto, tú junto a tus compañeras de equipo deberán definir los
_tests_ que consideren necesarios; puedes guiarte de los proyectos
anteriores. Igualmente el proyecto cuenta con una estructura de carpetas
y archivos ya definida pero pueden modificarla de acuerdo a como desean
trabajar la estructura de su proyecto :smiley:.

### Definición del producto

En el `README.md` colocar cómo conociste el mercado de las redes sociales, cómo
descubriste las necesidades de los usuarios, cómo llegaste  la definición final
de tu producto. Si tienes fotos de entrevistas, cuestionarios y/o sketches
(bocetos) compártelos. Es importante que detalles:

* Cuáles son los elementos básicos que tiene una red social
* Quiénes son los principales usuarios de producto
  Los principales usuarios del producto son padres que educan a sus hijos en casa y que pertencen a una comunidad llamada Aprendizaje Orgánico
* Cómo descubriste las necesidades de los usuarios
  Porque una de las integrantes del equipo pertence a esta comunidad y ha notado las necesidades de estos usuarios
* Qué problema resuelve el producto para estos usuarios
  Que los problemas y necesidades encontradas, serán personalizadas al grupo. Y que no será necesario tener FB para registrarse en la aplicación
* Cuáles son los objetivos de estos usuarios en relación con el producto
  
* Cuáles son las principales funcionalidades del producto y cuál es su prioridad
* Cómo verificaste que el producto les está resolviendo sus problemas
* Cómo te asegurarás que estos usuarios usen este producto

Para poder llegar a estas definiciones te recomendamos ver: entrevistas con
usuarios y tests de usabilidad.

### Historias de usuario

* PRIMER HISTORIA DE USUARIO
  El usuario necesita registrarse en una página que muestre un formulario para poner su correo y contraseña en inputs, así como un botón para guardar sus datos.
    
    D.O.D.
      - Existe un input para que el usuario ingrese con Facebook y/o Google y/o Email que tendrá que ser validado para no repetirse.
      - Existe un input para que el usuario ingrese una contraseña que no debe ser visible.
      - Existe un botón que guarda los datos del usuario y regresa al usuario a pantalla de inicio. 

* SEGUNDA HISTORIA DE USUARIO
  El usuario necesita una pantalla para poder ingresar a la red social poniendo su usuario y contraseña en inputs validando la coincidencia con los que registró, e ingresar a través de un botón.

    D.O.D.
      - Existe un input para que el usuario ingrese un correo válido.
      - Existe un input para que el usuario ingrese su contraseña no visible previamente definida.
      - Aparece un popup box si el usuario ingresa datos incorrectos.
      - Existe un botón para iniciar sesión una vez ingresados los datos correctos y dirige a la pantalla de publicaciones.
      - Existe un botón o link para ir a registrarse.

* TERCER HISTORIA DE USUARIO 
  El usuario necesita visualizar un muro o lista de publicaciones una vez que inició sesión.

    D.O.D.
    - Existe una pantalla que muestra sección sobre legalidad para homeschoolers.
    - Existe un sidebar para mostrar secciones a las que puede ingresar el usuario; ir a su perfil, publicaciones, legalidad, recursos educativos, organización en casa, eventos, publicaciones guardadas.
    - En la publicaciones existentes se visualizan botón para guardar publicación.

* CUARTA HISTORIA DE USUARIO
  El usuario necesita tener un input para publicar, editar y eliminar publicaciones en el muro a través de botones que indiquen cada acción. Además el usuario necesita un botón para definir si sus publicaciones son públicas o privadas

    D.O.D.
    - Existe un text area para publicar dentro del muro con botones que le permitan publicar.
    - Existe un select para  que el usuario pueda definir si su publicación es pública o privada.
    - Existe un botón para salir de la publicación por si se arrepiente.


* QUINTA HISTORIA DE USUARIO
 El usuario necesita iconos o botones para darle like a una publicación, así como visualizar el conteo de likes.

    D.O.D.
    - Existe un icono de like que lleva un conteo, lo muestra y cambia de color.
    - El icono al ser presionado nuevamente puede revertir la acción de contador restando el like.

* SEXTA HISTORIA DE USUARIO
  El usuario necesita acceder a su perfil y un botón para poder cerrar sesión y salir de la aplicación.

    D.O.D.
    - Existe un menú donde el usuario pueda cambiar de sección o topics 
    - Existe dentro del menú un botón para cerrar sesión.


### Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

En esta primer imagen se muestra la forma en que tendrá acceso el usuario a la red social. Ya sea por perfil de Facebook, Google ó correo electrónico.

![imagen1](https://i.ibb.co/9sNHSgS/Imagen-de-i-OS-1.jpg)

Una vez que el usuario tiene una cuenta en esta red social, la pantalla que se mostrará será la siguiente:

![imagen2](https://i.ibb.co/Sw6PRcN/Imagen-de-i-OS-2.jpg)

La información en la red social se introducirá como en el primer cuadro de texto, donde el usuario podrá seleccionar la privacidad de su publicación por medio de un select y guardar su publicación por medio de un botón. 
Cuando su publicación sea parte del historial, el cuadro de texto contendrá tres botones, uno para likes, otro para eliminar la publicación y finalmente otro para editarla.
En la parte inferior habrá un menú de navegación para ir al HOME, agregar publicación, ir al perfil del usuario y ver publicaciones guardadas.
En la parte superior izquierda se encontrará el logo y del lado derecho habrá un menú hamburguesa.

![imagen3](https://i.ibb.co/41CvXHn/Imagen-de-i-OS-3.jpg)

En el menú hamburguesa se presentarán los diversos tópicos del usuario y cerrar sesión.

![imagen4](https://i.ibb.co/X8mLftY/Imagen-de-i-OS-4.jpg)

Debes definir cuál será el flujo que seguirá el usuario dentro de tu producto y
con eso deberás diseñar la Interfaz de Usuario (UI por sus siglas en inglés) de
esta red social que siga este flujo.
Este diseño debe representar la solución que se implementará finalmente en
código.
### Responsive

Debe verse bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (tablets, celulares, etc.). Te
sugerimos seguir la técnica de `mobile first` (más detalles sobre esta técnica
al final).

### Pruebas unitarias (unit tests)

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_, y _branches_.

### Implementación de la Interfaz de Usuario (UI y comportamiento de Interfaz de Usuario)

La idea para este producto es que el producto a desarrollar siga los
lineamientos propuestos en el diseño de la interfaz de usuario. Asegúrate a lo
largo de la implementación que los elementos propuestos están siendo
implementados correctamente.

La interfaz debe permitir lo siguiente:

#### Creación de cuenta de usuario e inicio de sesión

* Login con Firebase:
  - Para el login y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - Autenticación con Facebook y/o Google y/o Email.
* Validaciones:
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse un formulario de registro o inicio de sesión, debe validarse.
  - En caso haya errores, el sistema debe mostrar mensajes de error para
    ayudar al usuario a corregirlos.
  - La aplicación solo permitirá el acceso a usuarios con cuentas válidas.
  - Al recargar la aplicación, se debe verificar si el usuario está
    logueado antes de mostrarle el contenido privado.
* Perspectiva de interfaz:

  ![Login](https://user-images.githubusercontent.com/9284690/40994765-c3cf9602-68c2-11e8-89ac-8254859b5ebb.png)

#### Muro/timeline de la red social

* Validaciones:
  - Al apretar el botón de publicar, debe validar que exista contenido en el input.
* Comportamiento:
  - Poder publicar un post.
  - Poder poner like a una publicación.
  - Llevar un conteo de los likes.
  - Poder eliminar un post específico.
  - Poder filtrar los posts sólo para mis amigos y para todo público.
  - Pedir confirmación antes de eliminar un post.
  - Al darle click en el botón editar, debe cambiar el texto por un input que
    permita editar el texto y cambiar el link por guardar.
  - Al darle guardar debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados
* Perspectiva de interfaz:

  ![Muro](https://user-images.githubusercontent.com/9284690/40994768-c52c3442-68c2-11e8-99a5-9e127e700dee.png)

#### Otras consideraciones

* La aplicación no debe dejar hacer publicaciones vacías de ningun tipo.
* El usuario debe poder agregar, editar y eliminar contenido de la red
  social.
* El usuario debe poder definir la privacidad de lo que pública.
* Al editar contenido, el contenido editado se verá automáticamente,
  inmediatamente después de guardar.
* Al recargar la página se deben poder ver los contenidos editados.

Personaliza estas guías con los colores y/o tipografías que creas convenientes.

### Hacker edition

* Crear posts con imágenes.
* Permite ver una parte de la aplicación así el usuario no tenga conexión a Internet usando [LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
* Permite agregar amigos.
* Permite eliminar amigos.
* Permite compartir publicación (en twitter esto es retwittear, en facebook
  es compartir).
* Permite comentar o responder una publicación.
* Permite editar perfil.
* Permite ver perfil o resumen desde el _muro_ o lista de publicaciones.

### Consideraciones técnicas

El corazón de este proyecto incluye:

* Separar la manipulación del DOM de la lógica (Separación de responsabilidades).
* Contar con multiples vistas para esto tu aplicacion debera ser una
 [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Que el sitio sea responsive, ya dicho.
* Alterar y persistir datos. Los datos que agregues o modifiques deberán
  persistir a lo largo de la aplicación, te recomendamos que uses
  [Firebase](https://firebase.google.com/).

Además, podrías agregar algunas tareas nuevas de acuerdo a tus decisiones:

* Recuerda que no hay un setup de **tests** definido, dependerá de
  la estructura de tu proyecto también, pero algo que no debes de olvidar es
  pensar en éstas pruebas, incluso te podrían ayudar a definir la estructura y
  nomenclatura de tu lógica.

### Consideraciones UX

Desde el punto de vista de UX, deberás:

* Hacer al menos 2 o 3 entrevistas con usuarios.
* Hacer un  prototipo de baja fidelidad.
* Hacer sesiones de testing con el producto en HTML.

### Habilidades Blandas

Trabajar en equipo es un gran desafío porque coordinarse no es una tarea fácil,
y es más difícil entre tres que entre dos. Trata que tu equipo te entienda,
facilitando siempre el diálogo en dentro del squad.

Planifica enumerando las tareas y distribuyéndolas, considerando los
recursos, las habilidades, y el tiempo del que dispones. Planifica de manera
que te permita avanzar en los distintos aspectos del proyecto de forma paralela,
teniendo un tablero donde puedas ver en qué está trabajando cada compañera.

Entrega tu trabajo a tu equipo a tiempo y colabora con el objetivo
final del proyecto, lo que puede implicar ayudar a los demás miembros del equipo
con sus pendientes, con el fin de entregar una red social de calidad.

**La división del trabajo debe permitir que todo el equipo
practique el aprendizaje de todas las habilidades esperadas. No se dividan el
trabajo como en una fábrica**

Para conocer a los usuario para eso debes salir e investigar. Tienes que
ejercitar tus habilidades de comunicación y toma de decisiones.
Existen infinitas opciones, depende de ti el camino que escoges.
Para que tu red social responda a las necesidades de sus usuarios, probablemente
deberás adquirir nuevos conocimientos para implementar sus preferencias.

Esta vez, haz _code review_(feedback de tu código) con **otro squad**, para
que puedas mejorar el producto. Mientras más feedback reciban, mejor.

Esperamos que valores y escuches los comentarios y críticas de los demás,
rescatando aquellos aspectos que sirven para tu crecimiento. Entrega siempre
tu opinión de manera constructiva, fundamentada y coherente, con el propósito
de ayudar a tus compañeras. Estos comentarios los debes hacer de manera honesta,
empática e inmediata.

Finalmente, deberás presentar el proyecto que creaste, al usuario que escogiste
y las necesidades que lograste resolver en este proceso. Como siempre, sabemos
que presentar puede ser una tarea difícil, esperamos que tengas capacidad de
síntesis y articules tus ideas con claridad para que logres mostrar tu trabajo
y que los demás lo comprendan.

## Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

## Evaluación

### Tech

| Habilidad |  |
|-----------|----------------|
| **JavaScript** | |
| Estilo |
| Nomenclatura/semántica |
| Funciones/modularidad |
| Estructuras de datos |
| Tests |
| **HTML** | |
| Validación |
| Estilo |
| Semántica |
| SEO | N/A
| **CSS** | |
| DRY |
| Responsive |
| **SCM** | |
| Git |
| GitHub |
| **CS** |
| Lógica |
| Arquitectura |

### UX

| Habilidad | |
|-----------|----------------|
| User Centricity |
| Visual Desing |

### Habilidades Blandas

Para este proyecto esperamos que ya hayas alcanzado el nivel 3 en todas tus
habilidades blandas. Te aconsejamos revisar la rúbrica:

| Habilidad | |
|-----------|----------------|
| Planificación y organización |
| Autoaprendizaje |
| Solución de Problemas |
| Dar y recibir feedback |
| Adaptabilidad |
| Trabajo en equipo (trabajo colaborativo y responsabilidad) |
| Comunicación eficaz |
| Presentaciones |

***

## Pistas / Tips / Lecturas complementarias

### Mobile first

El concepto de [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve como adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop. Esto es en contraposición al
modelo tradicional, donde primero se diseñaban los websites (o webapps) para
desktop y después se trataba de _arrugar_ el diseño para que entre en pantallas
más chicas. La clave acá es asegurarse de que desde el principio diseñan usando
la vista _responsive_ de las herramientas de desarrollador (developer tools) del
navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una
pantalla y entorno móvil.

### Múltiples vistas y Single-page Applications (SPAs)

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre estas vistas. Este problema se puede
afrontar de muchas maneras: con archivos HTML independientes (cada uno con su
URL) y links tradicionales, manteniendo estado en memoria y rederizando
condicionalmente (sin refrescar la página), [manipulando el historial del
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
con [`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history),
o usando algun Library de Routing del cual puedes preguntarle a tus coachxs.
En este proyecto te invitamos a explorar opciones y decidir una opción
de implementación.

### Escritura de datos

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (salvar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (salvar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar de forma remota
usando [Firebase](https://firebase.google.com/).

Otras:

* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)

***

## Checklist (no olvides llenarla)

### General

* [ ] Producto final sigue los lineamientos del diseño.

### `README.md`

* [ ] Definición del producto
* [ ] Resumen de entrevistas con usuarios.
* [ ] Link/screenshots prototipo de baja fidelidad.
* [ ] Conclusiones de pruebas con el producto en HTML.

### Pruebas / tests

* [ ] Pruebas unitarios cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* [ ] Pasa tests (y linters) (`npm test`).

### Creación de cuenta (sign up)

* [ ] Permite crear cuenta.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Inicio de sesión (sign in)

* [ ] Permite iniciar sesión.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Muro (wall/feed)

* [ ] Muestra _muro_, o lista de publicaciones.
* [ ] Permite hacer nuevas publicaciones.
* [ ] Permite eliminar publicaciones.
* [ ] Pide confirmación antes de borrar publicación.
* [ ] Permite editar publicación en el mismo lugar (in place).
* [ ] Permite filtrar publicaciones por público/privado.
* [ ] Permite marcar publicaciones como _gustados_ (like, corazón, estrella,
  etc...).
* [ ] Permite ver cuántas marcas, likes, estrellas, corazones o lo que se haya
  elegido, ha recibido una publicación.

### Hacker Edition

* [ ] Permite agregar amigos.
* [ ] Permite eliminar amigos.
* [ ] Permite compartir publicación (en twitter esto es retwittear, en facebook
  es compartir).
* [ ] Permite comentar o responder una publicación.
* [ ] Permite editar perfil.
* [ ] Permite ver perfil o resumen desde el _muro_ o lista de publicaciones.
* [ ] Permite ver cuántas marcas, likes, estrellas, corazones o lo que se haya
  elegido, ha recibido una publicación.
