# Introducción

## La Comunidad ProtAAPP

ProtAAPP es una **comunidad** que surgió en 2018 y que integra a profesionales de las Administraciones Públicas con un denominador común: su pasión por la ciberseguridad.

ProtAAPP persigue un triple objetivo:

- Permitir la compartición de ideas, experiencias, nuevos proyectos, propuestas de colaboración, etc., en materia de ciberseguridad dentro del sector público.

- Facilitar el establecimiento de contactos y el conocimiento de otros profesionales con las mismas inquietudes y a los que poder acudir, o con los que poder colaborar.

- Ofrecer un foro de conocimiento a través del que continuar aprendiendo en múltiples sectores relacionados con la ciberseguridad: normativo, técnico, organizativo, etc.

Para hacer todo esto posible, la comunidad dispone, entre otras herramientas, de la [web](https://www.protaapp.com), a través de la que se da a conocer la comunidad y se divulga 
conocimiento de forma pública para todos los interesados, así como de una lista de distribución privada con múltiples temáticas, a través de la que los 
miembros de la comunidad realizan propuestas, debaten, consultan por experiencias similares en otros organismos, estrechan lazos, organizan quedadas y 
ejercitan a diario sus conocimientos sobre ciberseguridad.

**¿Te interesa formar parte de nuestra comunidad?** ¿Quieres ayudarnos a conseguir que nuestras Administraciones Públicas dispongan de un gran equipo de profesionales
cualificados, comunicados y cohesionados?, ¿y que podamos ofrecer un servicio público más seguro para los ciudadanos?, ¿y, por supuesto, disfrutar de toda esta experiencia?

::: tip Entra en la comunidad
No lo dudes, escríbenos a [info@protaapp.com](info@protaapp.com), ¡te esperamos!
:::

Síguenos en:

- [Twitter](https://twitter.com/protaapp) 
- [www.protaapp.com/](https://www.protaapp.com/)
- [LinkedIn](https://www.linkedin.com/company/protaapp/)
- [Github](https://github.com/ProtAAPP)
- [Grupo de Google](https://groups.google.com/group/ProtAAPP)
- Correo electrónico: [info@protaapp.com](mailto:info@protaapp.com)

Difunde ProtAAPP con nuestras [infografías](https://www.protaapp.com/p/blog-page.html).



## Colabora con esta documentación

Este repositorio está (y estará siepre) "en construccion", ya que el conocimiento en esta materia está en continua evolución.
Por esta razón, si tienes conocimientos de cualquier ámbito de la ciberseguridad, te animamos a participar en el desarrollo de este repositorio de documentación. Está construido a base de ficheros de texto plano en formato [markdown](https://markdown.es/) y las contribuciones se controlan mediante el repositorio git, en [GitHub](https://github.com/).

Este repositorio de documentación está construido con la librería [Vuepress](https://vuepress.vuejs.org/). 
El código fuente de este repositorio se encuentra en github: [ProtAAPP/wikiprot](https://github.com/ProtAAPP/wikiprot).
Consulta el [código de conducta](https://github.com/ProtAAPP/wikiprot/blob/master/code_of_conduct.md) y la [guía para contribuir](https://github.com/ProtAAPP/wikiprot/blob/master/code_contribution_guideline.md)



### Requisitos 

Los requisitos para poder colaborar en el desarrollo de esta guía son:

1. Pertenecer al colectivo de empleados públicos de las Administraciones Públicas españolas (funcionarios, laborales, etc)
2. Tener conocimientos básicos de git ([guía básica](https://medium.com/@sthefany/primeros-pasos-con-github-7d5e0769158c))
3. Tener conocimientos básicos de markdown (muy muy sencillo, [aprende lo básico en 3 minutos](./requisitos-colaborar.md#aprender-markdown-en-3-minutos))
4. Instalar [git](https://git-scm.com/downloads) en tu PC *(ó editar directamente en Github)*
5. Instalar Node en tu PC ([explicación más detallada](./requisitos-colaborar.md#instalar-node))
6. Instalar yarn ([cómo hacerlo en 10 segundos](./requisitos-colaborar.md#instalar-yarn))
7. Seguir la [guía para contribuir](https://github.com/ProtAAPP/wikiprot/blob/master/code_contribution_guideline.md)
8. ¡ya está! listo para insertar tu primera aportación 


### Pasos de instalación

Una vez cumplidos los requisitos definidos en el apartado anterior, una vez hecho el fork lo primero es descargarse la última versión del repositorio, antes de modificar ningún contenido. 

Si fuera la primera vez que me descargo el respositorio:

```bash
cd /proyectos
git clone https://github.com/ProtAAPP/wikiprot.git
cd wiki-prot
yarn install    # Instalar librerías, principalmente vuepress  
```

Si por el contrario ya lo tuviera descargado, sólo hay que actualizarlo con los últimos cambios:

```bash
cd /proyectos/wikiprot
git pull                     # Traer los últimos cambios
yarn install                 # Instalar/actualizar librerías. Ejecutar siempre  
```

*(Si no tienes conocimientos suficientes de git o no puedes instalarlo, es posible utilizar Github para navegar a través de
las carpetas del repositorio [para editar, previsualizar y enviar contenidos.](https://docs.github.com/es/free-pro-team@latest/github/managing-files-in-a-repository/editing-files-in-your-repository))*

Ahora toca **modificar los ficheros markdown** para introducir o modificar los contenidos de la guía. Gracias por aportar
tus conocimientos a la causa. Se puede utilizar cualquier editor de texto 
(notepad, [notepad++](https://notepad-plus-plus.org/downloads/), [Atom](https://atom.io/), [VSCode](https://code.visualstudio.com/), etc).   

Aunque no es estrictamente necesario, sí es muy recomendable lanzar el servidor de desarrollo de _Vuepress_, de forma que
según modificas cualquier contenido, en el momento veas cómo va quedando. Para ello:

```bash
cd /proyectos/wikiprot
yarn dev
```

Ahora abre un navegador (firefox, chrome, edge...) y entra en [http://localhost:8080](http://localhost:8080), donde podrás 
ver este repositorio. Cada vez que cambies una palabra de la documentación y guardes el fichero, el cambio se reflejará
automáticmaente en el navegador.

Si tienes dos monitores, lo suyo es tener en un monitor el programa en el que estés editando los ficheros, y en el otro
monitor tener abierto el navegador para ver cómo van quedando los cambios en el momento.

Por último, una vez finalizados los cambios, simplemente añade todo lo modificado a las "propuestas a incorporar", realiza
un commit (paquete de modificaciones), y súbelo a github:

```bash
# Situado en la raíz del proyecto (por ejemplo /proyectos/wikiprot):
git add .                     # Proponer todos ficheros modificados para próximo commit
git commit -m "Aportación X"  # Hacer commit
git push                      # Subir a Github 
```

Muchísimas gracias por aportar tu conocimiento y tiempo a este proyecto.


<!--
## La ética en la ciberseguridad

El mundo digital en el que nos encontramos, y que está sufriendo una fuerte aceleración, tiene como casi todas las cosas una 
doble cara, la de aquellos que pueden aprovechar tal potencia para hacer el mal. La implantación de la sociedad digital en todos
los ámbitos de la sociedad ha de pagar un **importante peaje: el de la seguridad**.

De acuerdo con el antiguo responsable de cibersegurida y protección de la información del gobierno de Australia, Stephen Day, 
**la ética y la honradez deben regir las prácticas de la industria de la seguridad cibernética**.

La rapidez y la disponibilidad de los recursos generados por el desarrollo de internet y los entornos digitales han favorecido el 
crecimiento exponencial de numerosas compañías y negocios, pero los riesgos a los que estas se exponen también se han multiplicado.

Podría ocurrir que un profesionarl de la ciberseguridad rompa viole ciertas reglas e invada la privacidad de otros para lograr sus cometidos. 
-->

<!--
## Formación en ciberseguridad

Cursos:


Libros:


Entornos para practicar:

- [Vulnhub](https://www.vulnhub.com/) - Colección de máquinas virtuales vulnerables para jugar con ellas para hackearlas.
-->



