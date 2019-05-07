# Blog - Prueba aplicada por G-Global

[![N|Solid](https://img.shields.io/badge/AngularJS-1.7.8-red.svg)](https://angularjs.org/)
[![N|Solid](https://img.shields.io/badge/MaterializeCSS-1.0.0-%23ee6e73.svg)](https://materializecss.com/)

Pequeño proyecto realizado en el lapso de 2~3 horas, se consume una API propia de G-Global, se tomaron en cuenta algunos factores importantes para su función.

  - Se utiliza JSONP debido a problemas con el CORS del servidor y las peticiones GET regulares de AngularJS
  - Se utilizan placeholders en las imágenes de los posts debido a que no hay imágenes guardadas en el servidor remoto
  - Debido a que no todos los posts tienen contenido o link a un video se valida e incrusta el video de Youtube cuando corresponde

## Características
  - Consumo de APIproveída por G-Global
  - Uso de **MaterializeCSS** para el estilo *Material Design*
  - Se utiliza **AngularJS** para que la aplicación sea *SPA* (Single Page Application/Aplicación de una sola página)
  - Al ser SPA los posts se cargan dinámicamente con una petición GET a la API y se muestran en un modal
 
## Funcionalidades pendientes y por qué

  - No hay paginación ya que el servidor retorna cada página en bloques de 1000 posts, es algo que sería más plausible modificar si hubiera acceso al servidor.
  - Hay botones a modo de prueba sin una función actual, son perfectos para filtrar los posts por categoría o etiqueta.
  - Barra de paginación, por la misma falta de la función de paginación no hay una barra.
  - De ser necesario se podría incluir una barra de navegación a la altura del logotipo, así se podría navegar entre la página inicial y el blog.
  - Detalles visuales, fondo, fuentes específicas para cada elemento, iconos, etc. no fueron tomadas en cuenta debido a el margen de tiempo utilizado para realizar el proyecto.

## Autor
**David Garay** - [**Garaekz**](https://github.com/garaekz)

Licencias
----
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)