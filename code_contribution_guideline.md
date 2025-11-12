[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](http://www.firsttimersonly.com/)


# Guía de contribución a este repositorio

Si tienes conocimientos de cualquier ámbito de la ciberseguridad, te animamos a participar en el desarrollo de este repositorio de documentación. Está construido a base de ficheros de texto plano en formato [markdown](https://markdown.es/) y las contribuciones se controlan mediante el repositorio git, en [GitHub](https://github.com/). Seguimos la filosofía del código abierto para que contribuyas: http://opensource.guide/es/how-to-contribute/

El repositorio de documentación está construido con la librería [VitePress](https://vitepress.dev/).

La licencia es CC BY-NC-SA 4.0.

Si no tienes git en tu equipo, puedes encontrar instrucciones para instalarlo en [este enlace]( https://help.github.com/articles/set-up-git/ ).

## Bifurca (*Fork*) este repositorio

Haz un *fork* de este repositorio haciendo click en el botón "*Fork*" en la parte superior derecha en esta página.
Esto creará una copia de este repositorio en tu cuenta.

<img style="float: right;" src="./assets/fork.png" alt="fork de este repositorio" />

## Clona (*Clone*) el repositorio

Ahora clona este repositorio en tu equipo. Dirígete a tu cuenta de GitHub, haz click en el botón "*clone or download*" y luego haz click en el icono para *copiar al portapapeles*.

<img style="float: right;" src="./assets/clone.png" alt="clonar este repositorio" />

Abre tu consola o terminal y ejecuta el siguiente comando de git:

```
git clone "url que acabas de copiar"
```

Donde pone "url que acabas de copiar" (sin las comillas dobles) es la *url* a este repositorio (tu *fork* a este proyecto). Mira los pasos previos para obtener la *url*.

<img style="float: right;" src="./assets/copy-to-clipboard.png" alt="copiar URL al portapapeles" />

Por ejemplo:
```
git clone https://github.com/este-eres-tu/wikiprot.git
```
La parte de `este-eres-tu` la reemplazarás con tu usuario de GitHub. Aquí estás copiando los contenidos del repositorio *first-contributions* en GitHub a tu equipo.

## Crea una rama (*Branch*)

Cambia al directorio del repositorio en tu equipo (si es que no estás ahí ya).

```
cd wikiprot
```

Ahora crea una rama (*branch*) usando el comando  `git checkout`:
```
git checkout -b <añade tu nombre>
```

Por ejemplo:
```
git checkout -b add-alonzo-church
```
(El nombre de la rama no tiene por qué contener la palabra *add*, pero es razonable que lo tenga porque el objetivo de esta rama es añadir tu nombre a la lista.)

## Haz los cambios necesarios y confirma (*Commit*) esos cambios

Para ayudarte en los cambios puedes ayudarte con el tutorial [Pasos de instalación](https://github.com/ProtAAPP/wikiprot/tree/master/docs/01_introduccion#instalación-para-preparar-el-entorno-local)

Abre el archivo `contributors.md` en un editor de texto y añade tu nombre. No lo añadas ni al principio ni al final del archivo, hazlo en cualquier otro sitio. Guarda el archivo.

<img style="float: right;" src="./assets/git-status.png" alt="git status" />

Si vas al directorio del proyecto y ejecutas el comando  `git status`, verás que hay cambios.

Agrega esos cambios a la rama (*branch*) que creaste anteriormente usando el comando `git add`:

```
git add contributors.md
```

Ahora haz un *commit* sobre estos cambios ejecutando el comando `git commit`:
```
git commit -m "Add <tu-nombre> to Contributors list"
```
cambiando `<tu-nombre>` con tu nombre.

## Manda (*Push*) tus cambios a GitHub

Haz *push* de tus cambios usando el comando `git push`:
```
git push origin <añade-el-nombre-de-la-rama>
```
Reemplaza `<añade-el-nombre-de-la-rama>` con el nombre de la rama que creaste anteriormente.

## Envía (*Submit*) tus cambios para ser revisados

Si vas a tu repositorio en GitHub, verás un botón `Compare & pull request`. Haz click sobre este botón.

<img style="float: right;" src="./assets/compare-and-pull.png" alt="crea una pull request" />

Ahora envía la *pull request*.

<img style="float: right;" src="./assets/submit-pull-request.png" alt="enviar la pull request" />

Pronto estaré fusionando tus cambios (haciendo *merge*) con la rama master de este proyecto. Recibirás una notificación por correo electrónico cuando los cambios hayan sido fusionados.

## ¿Cuáles son los siguientes pasos?

¡Enhorabuena! ¡Has completado el flujo de trabajo *_fork -> clone -> edit -> PR_* que encontrarás habitualmente como contribuidor!

Si encuentras recursos adicionales, por favor contribuye con un `pull request` a este repositorio.

Si tienes alguna pregunta o comentario, por favor crea un `issue` en este repositorio.

Muchísimas gracias por aportar tu conocimiento y tiempo a este proyecto.
