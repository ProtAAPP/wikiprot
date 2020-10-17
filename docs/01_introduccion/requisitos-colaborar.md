---
sidebar: auto
---


# Requisitos para colaborar

Vamos a desarrollar con mayor detalle los requisitos para poder colaborar en
el desarrollo de esta guía:


[[TOC]]


## Instalar Node

La forma rápida y fácil es [descargar la última versión de Node](https://nodejs.org/es/download/) e instalarla, 
y ya está. Si no utilizas habitualmente Node en otros proyectos, este es el método más rápido y sencillo. Recuerda actualizar la
versión cada ciertos meses volviendo a descargar la última versión.

Sin embargo, en el caso de que utilices Node de forma razonablemente habitual para este y otros proyectos, es **recomendable utilizar NVM**. 
NVM permite tener instaladas varias versiones de Node en tu PC, cambiando de forma sencilla de una versión a otra en caso de que
varios proyectos estuvieran configurados con versiones distintas.

Para instalar NVM, 
antes de nada hay que **desinstalar todas las versiones de Node**, y eliminar todos los directorios de instalación (ej: _C:\Program Files\nodejs_)
y de npm (ej: _C:\Users\AppData\Roaming\npm_).

Después Descargar [Nvm for Windows](https://github.com/coreybutler/nvm-windows) o 
[Nvm for linux](https://github.com/creationix/nvm) según corresponda.

Instalar NVM, pero en Windows cambiar las rutas para que sean **c:\nvm** y **c:\nodejs**. 
Así podrán entrar todos los usuarios. 

::: warning
Es MUY IMPORTANTE que las rutas no tengan espacios, porque si no después casca. Y además así cualquier usuario 
tiene permisos de crear carpetas dentro de la ruta de nvm.
:::

Para verificar que está correctamente instalado, ejecuta y comprueba la versión:

```bash
nvm --version
```

En Windows, reiniciar el PC, porque en la instalación se ha añadido *“c:\nodejs”* al path, pero todavía no se ha enterado. Así se puede utilizar 
node. Ese directorio es un enlace virtual.

Por último, hay que instalar al menos una versión de Node. Cada vez que instales una nueva versión de node, hay
 que instalar en esa versión concreta todos los paquetes npm globales que quieras tener. Es decir, **yarn** y aquellos otros que tengas:

```bash
nvm install 14.8.0        # Instalar última versión de Node
nvm use 14.8.0            # Establecer esa versión como la que vamos a usar ahora
npm install -g yarn       # instalar yarn
node --version            # verificar que está instalado Node
yarn --version            # verificar que está instalado yarn
```


## Instalar yarn

[Yarn](https://yarnpkg.com/) es un gestor de paquetes que permite la descarga y utilización de todos los paquetes y librerías de código
fuente que se encuentra en muchos repositorios de Internet. Estos paquetes se pueden descargar en el proyecto de forma gratuita para 
poder construir la aplicación.

Si ya está instalado _Node_ en tu PC o portátil, ya tienes acceso al gestor de paquetes de _Node_, llamado **npm**. Utilizaremos ese gestor _npm_
para instalar _yarn_, para lo cual sólo hay que abrir la línea de comandos, y en cualquier carpeta (da igual dónde estés ubicado), ejecutar lo 
siguiente para instalar _yarn_ de forma global:

 ```bash
 npm install -g yarn
 ```

Ya está, ya puedes verificar que está instalado consultando la versión:

 ```bash
 yarn --version
 ```


## Pasos para insertar una modificación

Para trabajar en desarrollo, desde la **raíz del proyecto**, ejecutar:

```bash
yarn dev
```

Para construir la web estática del proyecto en la carpeta **docs\.vuepress\dist**, ejecutar:

```bash
yarn build
```

## Aprender Markdown en 3 minutos

El formato [markdown](https://markdown.es/) es un formato de texto plano que sirve para incorporar al texto raso algunas capacidades
como negritas, cursivas, listas, tablas, enlaces, etc; de forma sencilla para cualquier persona alejada del mundo de la informática.
De esta manera, cualquier texto ya es un texto en markdown:

```markdown
Esto es un texto en markdown
```

Pero si encerramos entre dobles asteriscos, como en este **ejemplo**, el programa o librería que muestre el markdown lo mostrará con el formato
de negrita:

```markdown
si encerramos entre dobles asteriscos, este **ejemplo** saldrá en negrita
```

Si queremos mostrar una **lista**, simplemente ponemos cada elemento en una línea precedido de un guión. Para mostrar esta lista:

- Perro
- Gato
- León (**salvaje**)

Este sería el "código fuente" en markdown

```markdown
- Perro
- Gato
- León (**salvaje**)
```

Los [enlaces](https://www.protaapp.com) se escriben con corchetes seguidos de paréntesis. Entre los corchetes ponemos el texto, y entre los paréntesis la url
de destino del enlace:

```markdown
Este es un enlace a la [Web de ProtAAPP](https://www.protaapp.com/)
```

Añadir una **imagen**:

```markdown
![foto](./imagen.png)
```

Si quieres poner un _tip_, _warning_ o _error_ (advertencia):

::: tip ¡Sé feliz!
Recuerda que debes disfrutar modificando esta guía. Siempre se percibe la esencia de las cosas hechas con alegría
:::

::: warning Cuidado con el deporte
Ya sabes, el mundo está lleno de gente que se lesiona practicándolo. Pero nunca he visto a nadie lesionado por estar en la barra del bar
:::

::: danger ¿hace cuánto que no actualizas Windows?
Si hace más de 2 meses, estás en grave riesgo
:::

Esta es la sintaxis:

```markdown
::: tip ¡Sé feliz!
Recuerda que debes disfrutar modificando esta guía. 
Siempre se percibe la esencia de las cosas hechas con alegría
:::

::: warning Cuidado con el deporte
Ya sabes, el mundo está lleno de gente que se lesiona practicándolo.
:::

::: danger ¿hace cuánto que no actualizas Windows?
Si hace más de 2 meses, estás en grave riesgo
:::
```

Se pueden incluir muchas más cosas, tablas, títulos, líneas separadoras, emojis...
Referencia a la sintaxis completa:

- [Sintaxis markdown](http://cesarhdz.com/articulos/escribir-en-markdown#sintaxis-de-markdown) 

Algunas referencias rápidas:

- [Tips, warnings, danger](https://vuepress.vuejs.org/guide/markdown.html#custom-containers)
- [Insertar Código fuente](https://vuepress.vuejs.org/guide/markdown.html#line-highlighting-in-code-blocks)
- [Emojis](https://vuepress.vuejs.org/guide/markdown.html#emoji)


## Configurar este repositorio con Vuepress

El fichero de configuración principal se encuentra en el fichero ```docs/.vuepress.config.js```.

Referencias:

- [Configuración del tema principal](https://vuepress.vuejs.org/theme/default-theme-config.html) (theme)

