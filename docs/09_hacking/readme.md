# Auditorías y Pentesting

[[TOC]]

## Tipos de auditorías

Auditorías de Seguridad vs Auditoría de vulnerabilidades vs Pruebas de penetración

### Auditoría de Seguridad
Una auditoría de seguridad se puede describir como una evaluación sistemática de las defensas de la infraestructura de TI de su organización. Durante el transcurso de esta revisión, los auditores medirán lo bien o mal que sus protocolos de seguridad cumplen con una lista de criterios establecidos para validar su postura de seguridad.

Estas auditorías deben ser exhaustivas y realizarse de forma regular para proteger sus datos y activos digitales. Si se encuentra en una industria altamente regulada (banca, salud, defensa), participar en esta actividad también ayudará a su empresa a garantizar el cumplimiento con la normas exigidas.

### Evaluación de Vulnerabilidades (o Auditoría de vulnerabilidades)
Una evaluación de vulnerabilidades, sin embargo, analiza las vulnerabilidades en el sistema de información (a menudo utilizando herramientas automatizadas) pero no proporciona ninguna indicación de si las vulnerabilidades pueden explotarse o cuánto podría costarle a la empresa una brecha o un ataque de ransomware exitoso.

Este enfoque tiene limitaciones, ya que el software de escaneo de vulnerabilidades solo analiza su sistema basándose en vulnerabilidades comunes pasadas. Por tanto, si está realizando una evaluación de vulnerabilidades, es muy importante que el software esté actualizado. 

### Pruebas de penetración
Las pruebas de penetración van más allá de las auditorías de seguridad y las evaluaciones de vulnerabilidades al intentar vulnerar su sistema como un atacante. En este escenario, el pentester intentará replicar los mismos métodos empleados por los atacantes para determinar si su infraestructura de TI podría resistir un ataque similar.

A menudo, las pruebas de penetración implicarán el uso de múltiples enfoques en conjunto para intentar vulnerar el sistema. Esto es muy efectivo ya que está simulando los mismos métodos empleados por los atacantes del mundo real.

Existen diferentes tipos de pruebas de penetración:
#### Pruebas de penetración externa
Las pruebas de penetración externas se centran en los sistemas expuestos públicamente en Internet o redes externas. 

#### Pruebas de penetración interna
Las pruebas de penetración interna se enfocan en todos sus sistemas conectados a redes internas (no expuestos directamente en Internet). 

#### Pruebas de penetración híbridas
Las pruebas de penetración híbrida aprovechan los ataques externos e internos para determinar si un enfoque combinado puede conducir a una brecha de seguridad. 

Para llevar a cabo este tipo de pruebas de penetración, los auditores/pentesters podrán emplear tres enfoques durante los "ataques".

#### Pruebas de caja negra
Las pruebas de penetración de caja negra implican pruebas de penetración externas en las que el atacante no tiene conocimiento previo del sistema. Apuntarán a su red como lo haría cualquier atacante para intentar obtener acceso a su red interna.

Este enfoque simula ataques del mundo real y contribuye en gran medida a reducir los falsos positivos. 

#### Pruebas de caja blanca
Las pruebas de penetración de caja blanca son lo opuesto a las pruebas de penetración de caja negra, ya que se proporcionará a los atacantes con un conocimiento detallado de la infraestructura de TI de la organización así como de la postura de seguridad actual. Esto podría implicar que conociesen:
* Código fuente del sistema de información
* Direcciones IP
* Entorno de red
* Sistema operativo (incluida la versión actual)

#### Pruebas de caja gris
El enfoque de prueba de caja gris encuentra un equilibrio entre las pruebas de caja negra y caja blanca. En este escenario, los atacantes tendrán algún conocimiento sobre la infraestructura interna y externa.

Esta simulación imita aquellos ataques en los que los atacantes (ya sea interna o externamente) acceden al sistema con privilegios de acceso restringido. 

## Soluciones del CCN en materia de auditorías
- [ANA](https://www.ccn-cert.cni.es/soluciones-seguridad/ana.html). Carga los resultados de auditorías realizadas con otras herramientas y permite "gestionar" el ciclo de vida de las vulnerabilidades.

## Auditorías según tecnología

### Descubrimiento
- [NetblockTool: The Easy Way to Find IP Addresses Owned by a Company](https://blog.netspi.com/netblocktool/)
- [Recursos y herramientas para el descubrimiento de subdominios](https://www.hackplayers.com/2017/02/recopilatorio-para-descubrimiento-subdominios.html)

### Escaneo general
- [Nmap](https://nmap.org/) [Cheatsheet](https://i.redd.it/xdd1vq43e3331.png)

### Escaneo de Vulnerabilidades
- [Vulnerability Scanning Tools](https://owasp.org/www-community/Vulnerability_Scanning_Tools)
- [Flan Scan](https://github.com/cloudflare/flan)

### Auditorías de aplicaciones web

- [OWASP Top Ten](https://owasp.org/www-project-top-ten/)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [Aplicación insegura para probar OWASP](https://owasp.org/www-project-juice-shop/)

Herramientas:
- [Tools](https://hackr.io/blog/top-10-open-source-security-testing-tools-for-web-applications) 19 herramientas opensource para pentesting de aplicaciones web
- [Usando ZAP](https://medium.com/volosoft/running-penetration-tests-for-your-website-as-a-simple-developer-with-owasp-zap-493d6a7e182b) para auditar la seguridad de una web

Recursos interesantes:
- [Recopilatorio de ataques web](https://github.com/swisskyrepo/PayloadsAllTheThings)
- [Big List of Naughty Strings](https://github.com/minimaxir/big-list-of-naughty-strings) - The Big List of Naughty Strings is an evolving list of strings which have a high probability of causing issues when used as user-input data. This is intended for use in
  helping both automated and manual QA testing.
- [XSS Payload list](https://github.com/payloadbox/xss-payload-list)  


### Auditorías de sistemas Cloud

Recursos interesantes:
- [2020. AZURE AD INTRODUCTION FOR RED TEAMERS](https://www.synacktiv.com/en/publications/azure-ad-introduction-for-red-teamers.html)
- [2020. Lateral Movement in Azure App Services](https://blog.netspi.com/lateral-movement-azure-app-services/)
- [2020. Azure File Shares for Pentesters](https://blog.netspi.com/azure-file-shares-for-pentesters/)
- [Attacking Azure, Azure AD, and Introducing PowerZure](https://posts.specterops.io/attacking-azure-azure-ad-and-introducing-powerzure-ca70b330511a)
- [Abusing Azure AD SSO with the Primary Refresh Token](https://dirkjanm.io/abusing-azure-ad-sso-with-the-primary-refresh-token/)
- [Penetration Tester's Guide to Evaluating OAuth 2.0](https://maxfieldchen.com/posts/2020-05-17-penetration-testers-guide-oauth-2.html)
- [Azure Cloud Penetration Testing](https://dl.packetstormsecurity.net/papers/general/azure-pentest.pdf)

### Auditorías Dockers
- [Docker for pentesters](https://blog.ropnop.com/docker-for-pentesters/)

### Auditorías Kubernetes

- [Kubernetes Pentest Methodology](https://www.cyberark.com/resources/threat-research-blog/kubernetes-pentest-methodology-part-1)


### Auditorías de Directorio Activo
Recursos interesantes:
- [2020. Securing Active Directory: Performing an Active Directory Security Review](https://www.hub.trimarcsecurity.com/post/securing-active-directory-performing-an-active-directory-security-review)
- [Active Directory Exploitation Cheat Sheet](https://github.com/S1ckB0y1337/Active-Directory-Exploitation-Cheat-Sheet/blob/master/README.md)
- [Active Directory Exploitation](https://twitter.com/CyberWarship/status/1309127376283013120?s=20)
- [An Offensive Kerberos Overview](https://posts.specterops.io/kerberosity-killed-the-domain-an-offensive-kerberos-overview-eb04b1402c61)
- [Mapa mental para explotar el directorio activo](https://i.ibb.co/TKYNCNP/Pentest-ad.png)
- [12 charlas sobre cómo atacar el directorio activo en TroopersCON19](https://www.youtube.com/playlist?list=PL1eoQr97VfJnvOWo_Jxk2qUrFyB-BJh4Y)
- [2019. Pentesting Active Directory Forests. Carlos García Ciyi](https://www.youtube.com/watch?v=6aV5tZlQ2EQ)
- [2019. Bloodhound](https://en.hackndo.com/bloodhound/) Herramienta para visualizar el directorio activo como un grafo.
- [2019. En qué consiste un ataque "Pass the hash"](https://en.hackndo.com/pass-the-hash/)
- [2018. Pentesting Active Directory. Carlos García Ciyi](https://www.youtube.com/watch?v=-8HTqAxppEc)
- [FIREEYE. 2020. Atacando el directorio activo](https://www.fireeye.com/blog/threat-research/2020/08/hands-on-introduction-to-mandiant-approach-to-ot-red-teaming.html)
- [Active Directory Kill Chain Attack & Defense](https://github.com/infosecn1nja/AD-Attack-Defense/blob/master/README.md)
- [2016. Atacando LAPS](https://secureidentity.se/recover-laps-passwords/)
- [Atacando WSUS](https://www.gosecure.net/blog/2020/09/03/wsus-attacks-part-1-introducing-pywsus/)

"Writeups" o soluciones a retos de hacking sobre Directorio Activo:
- [Forest: A walk through in hacking active directory](https://rootsecdev.medium.com/forest-a-walk-through-in-hacking-active-directory-c83ecb21e1a9)

### Auditorías de aplicaciones móviles

Recursos interesantesg:
- [Mobile Application Security Testing Distributions](https://hackersonlineclub.com/mobile-security-penetration-testing/)
- [OWASP Mobile Security Testing Guide](https://owasp.org/www-project-mobile-security-testing-guide/)
- [Where to find the OWASP Mobile Top 10 Vulnerabilities](https://github.com/scspcommunity/Cyber-Sec-Resources/blob/master/Misc%20Content%20By%20SCSP/Where%20to%20find%20the%20OWASP%20Mobile%20Top%2010%20Vulnerabilities.pdf)
- [The Top 5 Most Common Mobile App Security Flaws](https://www.allysonomalley.com/2020/06/23/the-top-5-most-common-mobile-app-security-flaws/)


#### Android
Lista de recursos:
- [Recopilatorio enlaces Android Security](https://github.com/saeidshirazi/awesome-android-security)
- [Intercepting HTTPS on Android](https://httptoolkit.tech/blog/intercepting-android-https/)

#### IOS

![IOS Vulnerability Assesment](./img/ios-pentesting.jpg)

- [iOS Pentesting Tools Part 1: App Decryption and class-dump](https://www.allysonomalley.com/2018/08/10/ios-pentesting-tools-part-1-app-decryption-and-class-dump/)
- [iOS Pentesting Tools Part 2: Cycript](https://www.allysonomalley.com/2018/12/13/ios-pentesting-tools-part-2-cycript/)
- [iOS Pentesting Tools Part 3: Frida and Objection](https://www.allysonomalley.com/2018/12/20/ios-pentesting-tools-part-3-frida-and-objection/)
- [iOS Pentesting Tools Part 4: Binary Analysis and Debugging](https://www.allysonomalley.com/2019/01/06/ios-pentesting-tools-part-4-binary-analysis-and-debugging/)
- [iOS Bug Hunting – Web View XSS](https://www.allysonomalley.com/2018/12/03/ios-bug-hunting-web-view-xss/)


### Auditorías WIFI
- [WIFI Hacking Cheatsheets](https://github.com/koutto/pi-pwnbox-rogueap/wiki) Teoría sobre hacking WIFI, comandos
- Mapa mental sobre WIFI Hacking [PNG](https://raw.githubusercontent.com/koutto/pi-pwnbox-rogueap/main/mindmap/WiFi-Hacking-MindMap-v1.png) [PDF](https://github.com/koutto/pi-pwnbox-rogueap/raw/main/mindmap/WiFi-Hacking-MindMap-v1.pdf)
<!-- ![IMG](./img/wifi-hacking-mindmap.png) -->

## Pentesting

Recursos generales:
- [Pentesting cheatsheet](https://github.com/blaCCkHatHacEEkr/PENTESTING-BIBLE/blob/master/7-part-100-article/Pentesting%20Cheatsheet22.pdf)
- [Red Teaming Toolkit Collection](https://0xsp.com/offensive/red-teaming-toolkit-collection)
- [346 consejos para RedTeams](https://vincentyiu.com/red-team-tips)
- [Compilación de recursos de todo tipo](https://github.com/scspcommunity/Cyber-Sec-Resources)
- [10 formas de atacar el mecanismo de reseteo de contraseñas](https://www.anugrahsr.me/posts/10-Password-reset-flaws/)
- [shodan.io for pentesters](https://www.defcon.org/images/defcon-18/dc-18-presentations/Schearer/DEFCON-18-Schearer-SHODAN.pdf)
- [Recopilatorio enlaces Penetration Testing](https://www.hackingarticles.in/penetration-testing/) Muchísimos enlaces.
- [Recopilatorio enlaces Web Penetration Testing](https://www.hackingarticles.in/web-penetration-testing/) Muchísimos enlaces.

## Bug Bounties
Un "Bug Bounty" es un "trato" ofrecido por muchos sitios web, organizaciones y desarrolladores de software mediante el cual los investigadores pueden recibir reconocimiento y compensación por informar de errores, especialmente aquellos relacionados con vulnerabilidades de seguridad.

Estos programas permiten a los desarrolladores descubrir y resolver errores antes de que el público en general los conozca, evitando su abuso por parte de actores maliciosos. En los últimos años, un gran número de organizaciones han implementado programas de "Bug Bounty".

Es destacable que organizaciones tradicionalmente conservadoras, como el Departamento de Defensa de los Estados Unidos, han comenzado a utilizar "Bug Bounties" (véase ["Hack the Pentagon"](https://www.hackerone.com/hack-the-pentagon) o [Hack the Air Force](https://www.hackerone.com/press-release/us-department-defense-concludes-third-hack-air-force-bug-bounty-challenge-hackerone)). Se trata de un cambio de posición importante ya que, históricamente, este tipo de organizaciones eran mas proclives a amenazar a los investigadores con demandas legales en lugar de incentivarles a participar en estos programas como parte de una política de divulgación de vulnerabilidades integral.

- [Lista de Bug Bounties en HackerOne](https://hackerone.com/bug-bounty-programs)
- [Bug Bounty hunter](https://www.bugbountyhunter.com/) Recursos generales.
- [Bug Bounty cheatsheet](https://github.com/EdOverflow/bugbounty-cheatsheet/blob/master/cheatsheets/xss.md)


## Concursos para "revelar" vulnerabilidades "owneando" productos
- [Pwn2Own](https://en.wikipedia.org/wiki/Pwn2Own)



## Ejercicios ReadTeam
Un ejercicio RedTeam vs BlueTeam es una técnica de evaluación de la ciberseguridad que utiliza ataques simulados para medir la fortaleza de las capacidades de seguridad existentes de la organización e identificar áreas de mejora en un entorno de bajo riesgo.

Siguiendo el modelo de ejercicios de entrenamiento militar, este simulacro es un enfrentamiento entre dos equipos de profesionales de ciberseguridad altamente capacitados: un equipo rojo que utiliza técnicas de adversario del mundo real en un intento de comprometer el entorno, y un equipo azul que consta de personal de respuesta a incidentes que trabaja dentro de la unidad de seguridad para identificar, evaluar y responder a la intrusión.

Estos ejercicios ayudan a las organizaciones a:
- Identificar puntos vulnerables en lo que respecta a personas, tecnologías y sistemas.
- Determinar áreas de mejora en los procesos defensivos de respuesta a incidentes en cada fase de la cadena de eliminación.
- Desarrollar la experiencia de primera mano de la organización sobre cómo detectar y contener un ataque dirigido
- Desarrollar actividades de respuesta y remediación para devolver el entorno a un estado operativo normal.

- [Recopilatorio enlaces RedTeam](https://www.hackingarticles.in/red-teaming/)
- [Mas enlaces sobre herramientas RedTeam](https://cyberarch.eu/red-teaming-adversary-simulation-toolkit/)

### Threat Emulation
- [Comparing open source adversary emulation platforms for red teams](https://redcanary.com/blog/comparing-red-team-platforms/)
- [Which C2 framework is best for you?](http://ask.thec2matrix.com/)
- [CALDERA](https://github.com/mitre/caldera) CALDERA™ is a cyber security framework designed to easily run autonomous breach-and-simulation exercises. It can also be used to run manual red-team engagements or automated incident response.
- [Atomic Red Team](https://github.com/redcanaryco/atomic-red-team)
- [Mordor](https://github.com/OTRF/mordor)
- [Testing adversary technique variations with AtomicTestHarnesses](https://redcanary.com/blog/introducing-atomictestharnesses/?utm_source=twitter&utm_medium=social&utm_campaign=blog)  
- [Run your Microsoft 365 Defender attack simulations](https://github.com/MicrosoftDocs/microsoft-365-docs/blob/public/microsoft-365/security/mtp/mtp-pilot-simulate.md)
- [Cobalt Strike](https://www.cobaltstrike.com/)
- [Empire](https://github.com/EmpireProject/Empire)
- [Metasploit](https://github.com/rapid7/metasploit-framework) [Chuleta sobre Metasploit](https://www.comparitech.com/fr/net-admin/metasploit-cheat-sheet/)
- [Infection Monkey](https://www.guardicore.com/infectionmonkey/) Open source Breach and Attack Simulation (BAS) tool that assesses the resiliency of private and public cloud environments to post-breach attacks and lateral movement.


## OSINT 
- [Enlaces a Herramientas OSINT por Ciberpatrulla](https://ciberpatrulla.com/links/)

## Otros recursos
Lista de CTFs con orientación ofensiva (red):
- [Practice CTF List](https://captf.com/practice-ctf/)
- [Archive OOO](https://archive.ooo) 

Lista de "writeups" (soluciones) en CTFs ofensivos:
- [CTF Challenges](https://www.hackingarticles.in/ctf-challenges-walkthrough/). Cientos de ellos...
- [CTF Writeups](https://medium.com/ctf-writeups)

Lista de "writeups" (soluciones) en BugBounties:
- [+1500 List of bug bounty writeups](https://pentester.land/list-of-bug-bounty-writeups.html)
- [Top 25 XXE bug bounty reports](https://corneacristian.medium.com/top-25-xxe-bug-bounty-reports-ab4ca662afad)