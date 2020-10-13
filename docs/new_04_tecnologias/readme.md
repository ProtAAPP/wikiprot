# Protección: Arquitecturas y Tecnologías

[[TOC]]

## Estrategias de protección integral de una organización

### Frameworks para abordar una proteccion integral
Pendiente de desarrollo

### Recursos interesantes
Algunas charlas con un enfoque de protección integral:
* [Zarancon City: ciudad bastionada](https://www.youtube.com/watch?v=VJIzFuTTRb4&feature=youtu.be). RootedCon 2019, con [Miguel Angel Rodriguez](https://twitter.com/marodriguezz), [Guillermo Obispo](https://twitter.com/gobispo) y [Jose Angel Alvarez](https://twitter.com/joseangel_a76)


## Productos revisados por organismos independientes

### Catálogo de Productos de Seguridad de las Tecnologías de la Información y la Comunicación
El CCN publica este catálogo (CPSTIC) con el objetivo de ofrecer a los organismos de la Administración un conjunto de productos STIC de referencia cuyas funcionalidades de seguridad relacionadas con el objeto de su adquisición han sido certificadas.

- [CCN-STIC-105 Catálogo CPSTIC](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/2536-ccn-stic-105-catalogo-de-productos-de-seguridad-de-las-tecnologias-de-la-informacion-y-la-comunicacion/file.html)
- [CCN-STIC 140 Taxonomías de referencia para productos de seguridad TIC](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/2518-ccn-stic-140-taxonomia-de-referencia-para-productos-de-seguridad-tic/file.html)

### Common Criteria
- [Lista de productos certificados CC](https://commoncriteriaportal.org/products/)


## Gestión de Identidades

## Protección Perimetral

### Modelos de interconexion según la guía CCN-STIC-811:

La guía [CCN-STIC-811 Interconexión en el ENS](https://www.ccn-cert.cni.es/series-ccn-stic/800-guia-esquema-nacional-de-seguridad/521-ccn-stic-811-interconexion-en-el-ens/file.html) tienen como objetivo analizar los elementos disponibles para interconectar sistemas afectados por el Esquema Nacional de Seguridad a otros sistemas,
adscritos o no al ENS. El objetivo de establecer un perímetro de seguridad es siempre proteger los flujos de información entre el sistema de información propio y el sistema al que queremos conectarnos. En base a unas reglas que determinen qué flujos son
permisibles y cuáles deben ser bloqueados, se decide permitir el paso o detener dicho flujo.

<!--
El  término  seguridad  perimetral  es  muy  amplio  y  ha  tenido  diversas  atribuciones  a  lo  largo del tiempo. El perímetro está formado por las máquinas y los dispositivos que se sitúan en la frontera de nuestra red, donde ésta interactúa con el exterior, con otras redes. La seguridad perimetral  ha  controlado  tradicionalmente  esta  frontera,  vigilando  las  comunicaciones  para evitar accesos no autorizados, salida dedatos desde el interior y ataques desde el exterior.
-->

- APP-1 Cortafuegos ![APP-1](https://www.ccn-cert.cni.es/images/Faq-INES/Arquitectura-de-proteccion-de-perimetro-tipo-1-APP-1.png)
- APP-2 Proxy ![APP-2](https://www.ccn-cert.cni.es/images/Faq-INES/Arquitectura-de-proteccion-de-perimetro-tipo-2-APP-2.png)
- APP-3 Cortafuegos + Proxy ![APP-3](https://www.ccn-cert.cni.es/images/Faq-INES/Arquitectura-de-proteccion-de-perimetro-tipo-3-APP-3.png)
- APP-4 DMZ con 1 cortafuegos + proxy ![APP-4](https://www.ccn-cert.cni.es/images/Faq-INES/Arquitectura-de-proteccion-de-perimetro-tipo-4-APP-4.png)
- APP-5 DMZ con 2 cortafuegos + proxy ![APP-5](https://www.ccn-cert.cni.es/images/Faq-INES/Arquitectura-de-proteccion-de-perimetro-tipo-5-APP-5.png)

<!--
- APP-6 ![APP-6](https://www.ccn-cert.cni.es/images/Faq-INES/Arquitectura-de-proteccion-de-perimetro-tipo-6-APP-6.png)
- APP-7 ![APP-7](https://www.ccn-cert.cni.es/images/Faq-INES/Arquitectura-de-proteccion-de-perimetro-tipo-7-APP-7.png)
-->


## Redes de Comunicaciones

### Cortafuegos (firewall)

Guías CCN-STIC:
- [CCN-STIC-653 Seguridad en Check Point](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/5404-ccn-stic-653-seguridad-en-check-point-1.html)
- [CCN-STIC-652 Seguridad en Palo Alto](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/600-guias-de-otros-entornos/2467-ccn-stic-652-seguridad-en-palo-alto/file.html)



### IPS

### IDS

### Proxies

Guías CCN-STIC:
- [CCN-STIC-660 Seguridad en Proxies](https://www.ccn-cert.cni.es/series-ccn-stic/600-guias-de-otros-entornos/454-ccn-stic-660-seguridad-en-proxies/file.html)

### Wifi

Protocolos de seguridad:

- [WPA-3](https://es.wikipedia.org/wiki/WPA3) - Cifrado 128 bits (modo WPA3-personal) ó 192 bits (modo WPA-3-Enterprise).
- [WPA-2](https://es.wikipedia.org/wiki/WPA2)
- [WPA](https://es.wikipedia.org/wiki/Wi-Fi_Protected_Access)
- [WEP](https://es.wikipedia.org/wiki/Wired_Equivalent_Privacy) - No utilizar ya que es vulnerable.


Guías CCN-STIC:
- [CCN-CERT BP/11. Recomendaciones de seguridad en redes Wi-Fi corporativas](https://www.ccn-cert.cni.es/informes/informes-de-buenas-practicas-bp/3137-ccn-cert-bp-11-recomendaciones-redes-wifi-corporativas/file.html)
- [CCN-STIC-406 Seguridad en redes inalámbricas](http://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/400-guias-generales/71-ccn-stic-406-seguridad-en-redes-inalambricas/file.html)
- [CCN-STIC-816 Seguridad en Redes Inalámbricas](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/2317-ccn-stic-816-seguridad-en-redes-inalambricas-en-el-ens/file.html)


### Bluetooth

Guías CCN-STIC:
- [CCN-STIC-837 Seguridad en Bluetooth](https://www.ccn-cert.cni.es/series-ccn-stic/800-guia-esquema-nacional-de-seguridad/2707-ccn-stic-837-ens-seguridad-en-bluetooth/file.html)


### Switches

Guías CCN-STIC:
- [CCN-STIC 647C - Seguridad en conmutadores HPE Aruba](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/600-guias-de-otros-entornos/3695-ccn-stic-647c-seguridad-en-conmutadores-hpe-aruba/file.html)
- [CCN-STIC-646B Seguridad en Conmutadores Huawei S7700](https://www.ccn-cert.cni.es/series-ccn-stic/600-guias-de-otros-entornos/2200-ccn-stic-646b-seguridad-en-conmutadores-huawei-s7700/file.html)
- [CCN-STIC-648 Seguridad en conmutadores Netgear Prosafe](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/2524-ccn-stic-648-seguridad-en-conmutadores-netgear-prosafe/file.html)
- [CCN-STIC-644 Seguridad en Equipos de comunicaciones. Switches Cisco](https://www.ccn-cert.cni.es/series-ccn-stic/600-guias-de-otros-entornos/444-ccn-stic-644-seguridad-en-equipos-de-comunicaciones-switches-cisco/file.html)

### Routers

Guías CCN-STIC:
- [CCN-STIC-641 Seguridad en Equipos de Comunicaciones. Routers Cisco](https://www.ccn-cert.cni.es/series-ccn-stic/600-guias-de-otros-entornos/435-ccn-stic-641-seguridad-en-equipos-de-comunicaciones-routers-cisco/file.html)


### Análisis de redes


### Control de Acceso a la Red (NAC)

## Acceso Remoto Seguro
[Guía CCN-STIC-836 ENS: Seguridad en VPN](https://www.ccn-cert.cni.es/series-ccn-stic/800-guia-esquema-nacional-de-seguridad/2299-ccn-stic-836-seguridad-en-vpn-en-el-marco-del-ens/file.html)


## Seguridad del Cloud

### Seguridad en la nube de Microsoft

- [CCN-STIC-884A Secure Configuration Guide for Azure](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/800-guia-esquema-nacional-de-seguridad/4634-ccn-stic-884a-secure-configuration-guide-for-azure.html)
- [CCN-STIC-884B Secure configuration guide for Azure Kubernetes Services](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/800-guia-esquema-nacional-de-seguridad/4829-ccn-stic-884b-secure-configuration-guide-for-azure-kubernetes-services.html)
- [CCN-STIC-884C Secure configuration guide for Azure SQL Database](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/800-guia-esquema-nacional-de-seguridad/4832-ccn-stic-884c-secure-configuration-guide-for-azure-sql-database.html)
- [CCN-STIC-884D Guía de configuración segura para Azure Cognitive Services](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/800-guia-esquema-nacional-de-seguridad/4330-ccn-stic-884d-guia-de-configuracion-segura-para-azure-cognitive-services.html)
- [CCN-STIC-885A Secure Setup Guide for Office 365](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/800-guia-esquema-nacional-de-seguridad/4584-ccn-stic-885a-secure-setup-guide-for-office-365.html)
- [CCN-STIC-885B Guía de configuración segura para Sharepoint Online](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/800-guia-esquema-nacional-de-seguridad/4336-ccn-stic-885b-guia-de-configuracion-segura-para-sharepoint-online.html)
- [CCN-STIC-885C Guía de configuración segura para Exchange Online](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/4516-ccn-stic-885c-guia-de-configuracion-segura-para-exchange-online.html)
- [CCN-STIC-885D Guía de configuración segura para Microsoft Teams](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/4519-ccn-stic-885d-guia-de-configuracion-segura-para-microsoft-teams.html)

## Contenedores

Guías CCN-STIC:
- [CCN-STIC-652A Seguridad en contenedores](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/5189-ccn-stic-652a-seguridad-en-contenedores.html)


## IOT

A tener en cuenta el ["Servicio de Alerta Temprana para Sistemas de Control Industrial" SAT-ICS](https://www.ccn-cert.cni.es/gestion-de-incidentes/sistema-de-alerta-temprana-sat/sat-ics.html) del [CCN](https://www.ccn-cert.cni.es/).

Documentos CCN:
- [CCN-CERT BP/05 Internet de las Cosas](https://www.ccn-cert.cni.es/informes/informes-de-buenas-practicas-bp/2258-ccn-cert-bp-05-internet-de-las-cosas/file.html)


## Aplicaciones web

Algunas referencias interesantes:

- [Awesome AppSec](https://github.com/paragonie/awesome-appsec) - curated list of resources for learning about application security. Contains books,
  websites, blog posts, and self-assessment quizzes.


### HTTPS y TLS

Documentos CCN-STIC:
-  [CCN-CERT BP/07 Recomendaciones implementación HTTPS](https://www.ccn-cert.cni.es/informes/informes-de-buenas-practicas-bp/2109-ccn-cert-bp-07-recomendaciones-implementacion-https-1/file.html)

Si tienes que configurar un servidor SSL y no sabes qué TLS  poner o qué cipher suites habilitar, mira [esta página de Mozilla](https://wiki.mozilla.org/Security/Server_Side_TLS) que además te dice qué versiones de navegadores van a funcionar según la configuración elegida.

Herramientas online para chequear mi web: 

- [Mozilla observatory](https://observatory.mozilla.org) - Observatory by Mozilla is a project designed to help developers, system administrators, 
  and security professionals configure their sites safely and securely.
- [HTTP Security report](https://httpsecurityreport.com/)
- [SSLLab test](https://www.ssllabs.com/ssltest/) - SSL Server test para verificar la configuración.
- cnd77 TLS Checker - This testing tool will quickly verify which SSL and TLS versions are enabled.

Charlas específicas sobre seguridad HTTPS/SSL:
- [2018. Habías Tenido Tiempo para Securizarlo… (Raúl Siles, Dinosec) (CCN)](https://www.youtube.com/watch?v=SiVuwY1AYVA)
- [2017. Has Tenido Tiempo Para Securizarlo: Te Lo Suplico, no Sigas Solo Leyéndolo (Raúl Siles, DinoSec)](https://www.youtube.com/watch?v=87GNHBXKkfg) [PDF](https://www.dinosec.com/docs/HTTPS_TLS_SSL_X_Jornadas_STIC_CCN-CERT-RaulSiles_DinoSec_v1.0.pdf)



### Windows Application Firewall (WAF)

Un WAF (Web Application Firewall) es un dispositivo hardware o software que permite proteger los servidores de aplicaciones web de
determinados ataques específicos en Internet. Principalmente filtra y monitoriza el tráfico HTTP. 
Por lo general proteger las aplicaciones web de ataques tales como la falsificación de cross-site, cross-site-scripting (XSS), 
la inclusión de archivos, y la inyección de SQL, entre otros. 

Productos:

- [ModSecurity](https://github.com/SpiderLabs/ModSecurity-nginx) - Módulo Nginx ampliamente extendido para implantar un WAF. Open Source.

## DNS

Guías CCN-STIC:
- [CCN-STIC-663 Seguridad en DNS (BIND)](https://www.ccn-cert.cni.es/series-ccn-stic/600-guias-de-otros-entornos/459-ccn-stic-663-seguridad-en-dns-bind/file.html)

Charlas interesantes sobre DNS:
- [2019. To SEC or not to SEC: DNS question (Raúl Siles y Mónica Salas, Dinosec)](https://www.youtube.com/watch?v=HmiK51kA1QY)



## Sistemas operativos

### Unix/Linux

Guías CCN-STIC:
- [CCN-STIC-619B Configuración segura de CentOS 8](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/5332-ccn-stic-619b-configuracion-segura-de-centos-8.html)
- [CCN-STIC-681 Implementación de seguridad en Postfix sobre CentOS 7](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/475-ccn-stic-681-seguridad-en-servidores-de-correo-postfix.html)
- [CCN-STIC-617 Implementación de seguridad sobre Suse Linux Enterprise 12 (cliente independiente)](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/3638-ccn-stic-617-implementacion-de-seguridad-sobre-suse-linux-enterprise-12-servidor-independiente/file.html)



Artículos:

- [How To Secure A Linux Server](https://github.com/imthenachoman/How-To-Secure-A-Linux-Server)

### Servidores Windows

Guías CCN-STIC:
- [CCN-STIC-570B Implementación de Seguridad sobre Microsoft Windows Server 2016 (servidor independiente)](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/3200-ccn-stic-570b-implementacion-de-seguridad-sobre-microsoft-windows-server-2016-servidor-independiente/file.html)
- [CCN-STIC-570A Implementación de Seguridad sobre Microsoft Windows Server 2016 (controlador de dominio o servidor miembro)](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/3179-ccn-stic-570a-implementacion-de-seguridad-sobre-microsoft-windows-server-2016/file.html)
- [CCN-STIC-576 Microsoft Exchange Server 2016 en Windows Server 2016](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/3782-ccn-stic-576-microsoft-exchange-server-2016-en-windows-server-2016.html)
- [CCN-STIC-575 Implementación de seguridad Implementación de Seguridad en Microsoft SQL Server 2016 sobre Microsoft Windows Server 2016](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/3701-ccn-stic-575-implementacion-de-seguridad-en-ms-sql-server-2016-sobre-ms-windows-server-2016/file.html)
- [CCN-STIC-578 Implementación de Seguridad en Microsoft Hyper-V sobre Windows server 2016](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/3516-ccn-stic-578-implatacion-de-seguridad-en-ms-hyper-v-sobre-windows-server-2016/file.html)
- [CCN-STIC-574 Implementación de Seguridad en Internet Information Services 10 sobre Microsoft Windows Server 2016](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/3245-ccn-stic-574-implementacion-de-seguridad-en-internet-information-services-10-sobre-microsoft-windows-server-2016.html)
- [CCN-STIC-573 Implementación de Seguridad en Servidor de Ficheros Sobre Microsoft Windows Server 2016](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/3230-ccn-stic-573-implementacion-de-seguridad-en-servidor-de-ficheros-sobre-microsoft-windows-server-2016.html)
- [CCN-STIC-572 Implementación de Seguridad en Servidor de Impresión sobre Microsoft Windows Server 2016](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/3215-ccn-stic-572-implementacion-de-seguridad-en-servidor-de-impresion-sobre-microsoft-windows-server-2016.html)

#### Seguridad en Directorio Activo

Recursos interesantes:
- [2020. 118 páginas sobre seguridad en el Directorio Activo](https://github.com/incredibleindishell/Windows-AD-environment-related/blob/master/ad-security-fundamentals-1.pdf)
- [2020. 18 WAYS TO DETECT MALCIOUS ACTIONS IN YOUR ACTIVE DIRECTORY LOGS USING SIEM](https://blueteamblog.com/18-ways-to-detect-malcious-actions-in-your-active-directory-logs-using-siem)
- [2019. Presentaciones de Sean Metcalf sobre seguridad del directorio activo](https://adsecurity.org/?page_id=1352)
- [2019. Privileged Access Workstations (PAW)](https://docs.microsoft.com/en-us/windows-server/identity/securing-privileged-access/privileged-access-workstations)
- [2019. Mejores prácticas en la seguridad del Directorio Activo](https://www.dnsstuff.com/active-directory-best-practices)
- [2017. Detectando Kerberoasting](https://adsecurity.org/?p=3458)
- [2018. 21 consejos para una gestion eficaz del Directorio Activo](https://activedirectorypro.com/active-directory-management-tips/)
- [2018. Microsoft. Azure AD and ADFS best practices: Defending against password spray attacks](https://www.microsoft.com/en-us/microsoft-365/blog/2018/03/05/azure-ad-and-adfs-best-practices-defending-against-password-spray-attacks/)

Herramientas para diagnosticar el nivel de seguridad del Directorio Activo:
- [PingCastle](https://www.pingcastle.com/). "Get Active Directory Security At 80% In 20% Of The Time". [Usando PingCastle](https://www.pwndefend.com/2020/02/04/active-directory-security-securing-the-crown-jewels-with-pingcastle-2-8-0-0/)
 ![IMG](https://dfir.ch/wp-content/uploads/2019/12/AD-768x680.png)



### Clientes Windows

Guías CCN-STIC:
- [CCN-STIC-599B Configuración segura de Windows 10 (cliente independiente)](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/4095-ccn-stic-599b19-configuracion-segura-de-windows-10-cliente-independiente.html)
- [CCN-STIC-599A Seguridad en Windows 10 (cliente miembro de dominio)](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/4047-ccn-stic-599a19-seguridad-en-windows-10-cliente-miembro-de-dominio/file.html)
- [CCN-STIC-585 Implementación de seguridad en Microsoft Office 2016 sobre Microsoft Windows 10](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/3531-ccn-stic-585-implementacion-de-seguridad-en-microsoft-office-2016-sobre-microsoft-windows-10/file.html)

Recursos interesantes:
- [2019- Microsoft. Introducing the security configuration framework: A prioritized guide to hardening Windows 10](https://www.microsoft.com/security/blog/2019/04/11/introducing-the-security-configuration-framework-a-prioritized-guide-to-hardening-windows-10/)
 ![IMG](https://www.microsoft.com/security/blog/wp-content/uploads/2019/04/seccon-framework.png)



## Dispositivos móviles

### Android

Guías CCN-STIC:
- [Guía práctica de seguridad en dispositivos móviles Android 9](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/400-guias-generales/3588-ccn-stic-453g-guia-practica-de-seguridad-en-dispositvos-moviles-android-9/file.html)
- [Guía práctica de seguridad en dispositivos móviles Android 8](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/3579-ccn-stic-453f-guia-practica-de-seguridad-en-dispositvos-moviles-android-8/file.html)
- [Procedimiento de empleo seguro de dispositivos Samsung Galaxy (Android 10)](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/1000-procedimientos-de-empleo-seguro/5102-ccn-stic-1608-procedimiento-de-empleo-seguro-de-dispositivos-samsung-galaxy-android-10/file.html)
- [Ciberconsejo: Configuración segura de dispositivos ANDROID](https://www.ccn.cni.es/index.php/es/docman/documentos-publicos/168-ciberconsejos-configuracion-segura-android/file)

### iPhone

Guías CCN-STIC:
- [Guía práctica de seguridad en dispositivos móviles iOS 13](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/400-guias-generales/4569-ccn-stic-455e-configuracion-segura-de-ios-13/file.html)
- [Guía práctica de seguridad en dispositivos móviles: iPhone (iOS 12.x)](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/3158-ccn-stic-455d-guia-practica-de-seguridad-en-dispostivos-moviles-iphone-ios-12/file.html)
- [Guía práctica de seguridad en dispositivos móviles: iPhone (iOS 11.x)](https://www.ccn-cert.cni.es/pdf/guias/series-ccn-stic/guias-de-acceso-publico-ccn-stic/3161-ccn-stic-455c-guia-practica-de-seguridad-en-dispositivos-moviles-iphone-ios-11x-1/file.html)





## Virtualización

Guías CCN-STIC:
- [CCN-CERT BP/15 Buenas Prácticas en Virtualización](https://www.ccn-cert.cni.es/informes/informes-de-buenas-practicas-bp/4010-ccn-cert-bp-15-buenas-practicas-en-virtualizacion/file.html)



## Criptografía

### Conceptos y recursos

Recursos interesante:
- Certificación en criptografía: [CryptoCert](https://www.criptocert.com/)
- [Curso sobre criptografía de criptored](https://www.youtube.com/watch?v=rm8W5XD3lUg)
- [Crypto Go Game](https://www.cryptogogame.com/ES/juego) - Juego de cartas educativo sobre criptografía simétrica actual. El principal objetivo de _Crypto Go_ es   familiarizar a los jugadores de una manera lúdica y social con las principales herramientas criptográficas actuales,  su nivel de seguridad, y la forma correcta de combinarlas.

### Algoritmos cifrado simétrico

### Algoritmos de clave asimétrica 

### Hash

### Aplicaciones criptográficas

