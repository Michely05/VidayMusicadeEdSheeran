# Vida y Musica de Ed Sheeran

Este proyecto representa la primera entrega de la asignatura "Herramientas HTML & CSS" del máster en Desarrollo de Sitios y Aplicaciones Web de la Universitat Oberta de Catalunya.

La temática de la página web gira entorno al cantante Ed Sheeran, ofreciendo información al usuario sobre su biografía, sus álbumes, su impacto en la industria musical, así como información sobre sus próximas actuaciones.

El desarrollo se ha llevado a cabo por la alumna Michely Paredes Galeano, exceptuando el contenido escrito y audiovisual.

- [Enlace al repositorio en GitHub](https://github.com/Michely05/VidayMusicadeEdSheeran)

- [URL pública a la web](https://viday-y-musica-de-ed-sheeran.vercel.app/)

- [Mockup en Figma](https://www.figma.com/file/NtnNHMrlo8VZU7K6GAnuxj/Vida-y-m%C3%BAsica-de-Ed-Sheeran?type=design&node-id=0%3A1&mode=design&t=GXJ1s76rDRSzIdFo-1)

## Tabla de Contenidos

- [Instalación](#instalación)
- [Gestión de Dependencias](#gestión-de-dependencias)
- [Creación del repositorio Git](#creación-del-repositorio-git)
- [Adecuación a la temática y estructura de la práctica](#adecuación-a-la-temática-y-estructura-de-la-práctica)
- [Diseño responsive, complejidad y estética](#diseño-responsive-complejidad-y-estética)
- [Semántica y accesibilidad](#semántica-y-accesibilidad)
- [Publicación a internet](#publicación-a-internet)

## Instalación

Se ha definido el entorno de desarrollo con Parcel. Para ello, es necesario introducir los siguientes comandos:

Para la instalación del gestor de paquetes:

```bash
npm install
```

Para instalar Parcel:

```bash
npm install --save-dev parcel-bundler
```

Para eliminar directorios de forma recursiva antes de construir el proyecto:

```bash
npm install --save-dev rimraf npm-run-all
```

Para inicializar el proyecto y abrirlo desde el explorador:

```bash
npm run build
```

o bien:

```bash
npx parcel src/index.html
```

## Gestión de Dependencias

A parte del Post-HTML incluido por defecto en Parcel, el proyecto usa el Preprocesador _Sass_ para compilar los estilos en el archivo css. A forma de testeo, se ha utilizado para etiquetar los colores principales de la página web y utilizar la anidación de estilos para así agilizar su asignación.

Para la instalación global de Sass:

```bash
npm install -g sass
```

Para compilar los estilos de Sass, indicando el fichero de entrada y el fichero de salida:

```bash
sass --watch src/styles.scss src/styles.css
```

De esta manera, los estilos se asignan en el archivo .scss pero se envían y compilan al archivo .css.

## Creación del repositorio Git

Para la creación del repositorio en Git, primeramente se creó el repositorio local y se enlazó al repositorio remoto en GitHub con los siguientes comandos desde la terminal local:

```bash
git remote add origin https://github.com/Michely05/VidayMusicadeEdSheeran.git
git branch -M main
git push -u origin main
```

El desarrollo se ha llevado a cabo desde la rama _dev_ y se enviaron a _main_ para su publicación.

## Adecuación a la temática y estructura de la práctica

Como requisito de este proyecto, la temática de la página web gira en torno a un artista musical. La estructura que se ha seguido para la organización del contenido es la siguiente:

- Portada: Primera página a la que accede el usuario al entrar a la web. Consta únicamente del título y un botón que conduce a la página de categoría.

- Categoría y presentación: Esta página consta de una pequeña introducción sobre la temática de la página y 5 elementos que, al hacer click sobre uno de ellos, conduce al usuario a una página de detalle con información acorde al elemento clicado.

- Detalle: Desde la página de categoría se puede acceder a las 5 páginas de detalle: biografía, álbumes, impacto, tour y bibliografía. Cada página contiene textos, imágenes, vídeos, listas o tablas dependiendo de su tipo de contenido.

- Enlaces: En concreto, el apartado de bibliografía incluye una lista con los enlaces consultados así como el aviso de que el contenido escrito se ha redactado con IA para centrarse en el desarrollo de la página web.

## Diseño responsive, complejidad y estética

Para la parte responsive, se ha optado por el uso de medidas relativas como _rem_ y porcentajes. Queda pendiente el uso de Media Queries para la adaptación completa a pantallas pequeñas. La estética ha seguido una estructura sencilla donde el contenido escrito queda visualmente separado del contenido audiovisual. En algunos apartados, se han utilizado columnas o filas para la estructura.

En cuando al uso de colores, se ha optado por una paleta neutra de tonos en black y negro. En casos puntuales se utiliza el naranja, color característico del cantante, como en el caso del botón de la pantalla de inicio o los enlaces externos.

## Semántica y Accesibilidad

Con tal de crear una web lo más accesible posible, se ha optado por los siguientes métodos:

- Paleta de colores: una gama de colores que contiene blanco, negro y un tono claro (naranja) para así crear contraste entre ellos y que el texto sea fácilmente legible.

- Tamaños: se ha tenido en cuenta las dimensiones de la fuente para los títulos, texto de párrafos, e imágenes para que los elementos de la página sean fácilmente reconocibles incluso desde una distancia más alejada de la pantalla.

- Descripción de las imágenes: cada una de las imágenes disponen de una descripción con alt, de manera que pueden ser reconocidos por lectores de pantalla.

- Distribución: La distribución de las cajas con el texto y contenido audiovisual siguen un estilo sencillo y fácil de identificar, dejando espacio entre cada elemento y que no resulte en pantallas demasiado cargadas de información.

## Publicación a internet

La publicación a internet se ha hecho a través de Vercel, enlazando el repositorio de GitHub y realizando el deploit desde la misma plataforma. El enlace a la web publicada se encuentra en la introducción de este documento.
