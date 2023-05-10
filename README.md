# Proyecto Fullstack Junior

Este proyecto contiene la implementación de un sitio web de comercio electrónico, con la posibilidad de ver productos en una lista, detalles de cada producto y cambiar las variantes del producto seleccionado.

## Estructura del proyecto

El proyecto está dividido en dos carpetas principales:

- `cliente`: Contiene la implementación del cliente del sitio web, utilizando React y React Router. Para iniciar el servidor localmente, ejecute el comando `npm run dev`.

- `servidor`: Contiene la implementación del servidor, utilizando Node.js y Express. Antes de iniciar el servidor, renombre el archivo `.env.example` a `.env` y complete las variables de entorno necesarias. Para iniciar el servidor localmente, ejecute el comando `npm run start`.

## Configuración del entorno

Antes de iniciar el cliente o el servidor, asegúrese de tener Node.js y npm instalados en su sistema. Puede descargarlos desde el sitio web oficial de Node.js: https://nodejs.org/

Una vez que haya instalado Node.js y npm, abra una terminal en la carpeta `cliente` o `servidor` y ejecute el comando `npm install` para instalar todas las dependencias necesarias.

## Comandos disponibles

En la carpeta `cliente`, puede ejecutar los siguientes comandos:

### `npm run dev`

Inicia la aplicación en modo de desarrollo.<br />
Abra [http://127.0.0.1:5173/](http://127.0.0.1:8080/) para verla en el navegador.

La página se volverá a cargar si realiza modificaciones.<br />
También verá cualquier error de lint en la consola.

### `npm run build`

Compila la aplicación para producción en la carpeta `build`.<br />
Agrupa correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hashes.<br />
Tu aplicación está lista para ser implementada!

En la carpeta `servidor`, puede ejecutar los siguientes comandos:

### `npm run start`

Inicia el servidor en modo de producción.<br />
El servidor se ejecutará en el puerto definido en la variable de entorno `PORT`.

### `npm run dev`

Inicia el servidor en modo de desarrollo.<br />
El servidor se ejecutará en el puerto definido en la variable de entorno `PORT`.

## Contribuciones

Las contribuciones son bienvenidas. Si desea contribuir a este proyecto, haga un fork de este repositorio y envíe una pull request con sus cambios. Asegúrese de seguir los lineamientos de contribución y código de conducta del proyecto.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulte el archivo LICENSE para obtener más información.
```

Asegúrate de reemplazar el archivo README.md actual en tu repositorio con este nuevo archivo.
