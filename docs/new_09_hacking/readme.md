# Auditorías y Pentesting

[[TOC]]

## Tipos de auditorías
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

### Escaneo de Vulnerabilidades
- [Vulnerability Scanning Tools](https://owasp.org/www-community/Vulnerability_Scanning_Tools)
- [Flan Scan](https://github.com/cloudflare/flan)


### Auditorías de aplicaciones web

- [OWASP Top Ten](https://owasp.org/www-project-top-ten/)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)

Herramientas:
- [Tools](https://hackr.io/blog/top-10-open-source-security-testing-tools-for-web-applications) 19 herramientas opensource para pentesting de aplicaciones web
- [Usando ZAP](https://medium.com/volosoft/running-penetration-tests-for-your-website-as-a-simple-developer-with-owasp-zap-493d6a7e182b) para auditar la seguridad de una web
- [Big List of Naughty Strings](https://github.com/minimaxir/big-list-of-naughty-strings) - The Big List of Naughty Strings is an evolving list of strings which have a high probability of causing issues when used as user-input data. This is intended for use in
  helping both automated and manual QA testing.

### Auditorías de sistemas Cloud

Recursos interesantes:
- [2020. AZURE AD INTRODUCTION FOR RED TEAMERS](https://www.synacktiv.com/en/publications/azure-ad-introduction-for-red-teamers.html)
- [Attacking Azure, Azure AD, and Introducing PowerZure](https://posts.specterops.io/attacking-azure-azure-ad-and-introducing-powerzure-ca70b330511a)
- [Abusing Azure AD SSO with the Primary Refresh Token](https://dirkjanm.io/abusing-azure-ad-sso-with-the-primary-refresh-token/)
- [Penetration Tester's Guide to Evaluating OAuth 2.0](https://maxfieldchen.com/posts/2020-05-17-penetration-testers-guide-oauth-2.html)

### Auditorías Kubernetes

- [Kubernetes Pentest Methodology](https://www.cyberark.com/resources/threat-research-blog/kubernetes-pentest-methodology-part-1)


### Auditorías de Directorio Activo
Recursos interesantes:
- [Active Directory Exploitation Cheat Sheet](https://github.com/S1ckB0y1337/Active-Directory-Exploitation-Cheat-Sheet/blob/master/README.md)
- [Active Directory Exploitation](https://twitter.com/CyberWarship/status/1309127376283013120?s=20)
- [An Offensive Kerberos Overview](https://posts.specterops.io/kerberosity-killed-the-domain-an-offensive-kerberos-overview-eb04b1402c61)
- [Mapa mental para explotar el directorio activo](https://i.ibb.co/TKYNCNP/Pentest-ad.png)
- [12 charlas sobre cómo atacar el directorio activo en TroopersCON19](https://www.youtube.com/playlist?list=PL1eoQr97VfJnvOWo_Jxk2qUrFyB-BJh4Y)
- [2019. Pentesting Active Directory Forests. Carlos García Ciyi](https://www.youtube.com/watch?v=6aV5tZlQ2EQ)
- [2018. Pentesting Active Directory. Carlos García Ciyi](https://www.youtube.com/watch?v=-8HTqAxppEc)
- [FIREEYE. 2020. Atacando el directorio activo](https://www.fireeye.com/blog/threat-research/2020/08/hands-on-introduction-to-mandiant-approach-to-ot-red-teaming.html)
- [Active Directory Kill Chain Attack & Defense](https://github.com/infosecn1nja/AD-Attack-Defense/blob/master/README.md)
- [2016. Atacando LAPS](https://secureidentity.se/recover-laps-passwords/)
- [Atacando WSUS](https://www.gosecure.net/blog/2020/09/03/wsus-attacks-part-1-introducing-pywsus/)


### Auditorías de aplicaciones móviles

Recursos interesantesg:
- [Mobile Application Security Testing Distributions](https://hackersonlineclub.com/mobile-security-penetration-testing/)
- [Where to find the OWASP Mobile Top 10 Vulnerabilities](https://github.com/scspcommunity/Cyber-Sec-Resources/blob/master/Misc%20Content%20By%20SCSP/Where%20to%20find%20the%20OWASP%20Mobile%20Top%2010%20Vulnerabilities.pdf)
- [The Top 5 Most Common Mobile App Security Flaws](https://www.allysonomalley.com/2020/06/23/the-top-5-most-common-mobile-app-security-flaws/)


#### Android
Pendiente de desarrollar

#### IOS

![IOS Vulnerability Assesment](./img/ios-pentesting.jpg)

### Auditorías WIFI
Pendiente de desarrollar

## Pentesting
Pendiente de desarrollar

Recursos generales:
- [Pentesting cheatsheet](https://github.com/blaCCkHatHacEEkr/PENTESTING-BIBLE/blob/master/7-part-100-article/Pentesting%20Cheatsheet22.pdf)
- [Red Teaming Toolkit Collection](https://0xsp.com/offensive/red-teaming-toolkit-collection)
- [346 consejos para RedTeams](https://vincentyiu.com/red-team-tips)
- [Compilación de recursos de todo tipo](https://github.com/scspcommunity/Cyber-Sec-Resources)
- [10 formas de atacar el mecanismo de reseteo de contraseñas](https://www.anugrahsr.me/posts/10-Password-reset-flaws/)
- [shodan.io for pentesters](https://www.defcon.org/images/defcon-18/dc-18-presentations/Schearer/DEFCON-18-Schearer-SHODAN.pdf)


## Ejercicios ReadTeam
¿Qué es un ReadTeam? ¿Cual su propósito?

## OSINT 
- [Enlaces a Herramientas OSINT por Ciberpatrulla](https://ciberpatrulla.com/links/)

## Otros recursos
Lista de CTFs con orientación ofensiva (red):
- []()

Lista de "writeups" (soluciones) en CTFs:
- [CTF Writeups]()https://medium.com/ctf-writeups

Lista de "writeups" (soluciones) en BugBounties:
- [+1500 List of bug bounty writeups](https://pentester.land/list-of-bug-bounty-writeups.html)