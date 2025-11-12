# Gestión de Vulnerabilidades

<!--[[TOC]]-->

<!-- ## Vulnerabilidades -->
::: tip
Antes de empezar... si no tienes un inventario de equipos HW y de servicios/componentes SW, ¿cómo vas a saber si una vulnerabilidad te aplica o no?

¿Tienes claro qué servicios/componentes tienes expuestos en Internet? ¿IP? ¿Puerto?
:::

## Herramientas para identificación de vulnerabilidades
[Vulnerability Scanning Tools List](https://owasp.org/www-community/Vulnerability_Scanning_Tools)

Soluciones opensource:
- [OpenVAS](https://www.openvas.org/)
    - [Usando OpenVAS](http://www.reydes.com/d/?q=Escaneo_de_Vulnerabilidades_Externo_utilizando_OpenVAS)
    - [Cómo instalar OpenVAS en Kali Linux 2020](https://www.solvetic.com/tutoriales/article/8278-como-instalar-openvas-en-kali-linux/)
    - [Actualizando OpenVAS](http://kinomakino.blogspot.com/2020/11/openvas-i-hate-you-and-i-love-you.html)
- [Nessus](https://en.wikipedia.org/wiki/Nessus_(software)) 
    - [Usando Nessus + Metasploit](https://blog.isecauditors.com/2019/12/como-combinar-nessus-con-metasploit.html)
- [Nmap](https://nmap.org/)
    - [Ejemplo de uso](https://www.redeszone.net/seguridad-informatica/nmap/)
- [Nikto](https://cirt.net/Nikto2)
    - [Ejemplo de uso](http://www.reydes.com/d/?q=Escanear_un_Servidor_Web_utilizando_Nikto)

## Herramientas para gestión de vulnerabilidades
- Solución CCN [ANA](https://www.ccn-cert.cni.es/soluciones-seguridad/ana.html) 


## Vulnerabilidades MEGAMUERTE
Vulnerabilidades recientes que pueden acabar en un compromiso total de la organización:
- [CVE-2021-26855, CVE- 2021-26857, CVE-2021-26858 y CVE-2021-27065](https://msrc-blog.microsoft.com/2021/03/05/microsoft-exchange-server-vulnerabilities-mitigations-march-2021/) "ProxyLogon" - CVSS 9.1 - RCE sin autenticar en servidores Exchange.
- [CVE-2020-16898](https://www.ccn-cert.cni.es/seguridad-al-dia/avisos-ccn-cert/10594-ccn-cert-av-72-20-vulnerabilidad-en-bad-neighbor.html). "Bad Neighbor" - CVSS 9.8 - Vulnerabilidad en la gestión de IPV6. "Gusanable"
- [CVE-2020-1472](https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2020-1472) "Zerologon" - CVSS 10.0 - El atacante escala a Domain Admin, simplement pudiendo ejecutar comandos en la red interna. 
- [CVE-2020-12271](https://es-la.tenable.com/blog/cve-2020-12271-zero-day-sql-injection-vulnerability-in-sophos-xg-firewall-exploited-in-the-wild) Sophos XG Firewall - CVSS 10.0
- [CVE-2019-11510](https://kb.pulsesecure.net/articles/Pulse_Security_Advisories/SA44101/) PULSE SECURE - CVSS 10.0
- [CVE-2019-19781](https://support.citrix.com/article/CTX267027) Citrix ADC/Netscaler - CVSS 9.8
- [CVE-2020-5902](https://www.f5.com/services/support/big-ip-vulnerability-cve-2020-5902) F5 Big Ip - CVSS 9.8. Ejecución remota de código sin autenticación del usuario.
- [CVE-2020-0688](https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2020-0688) Microsoft Exchange - CVSS 8.8.  Ejecución remota de código.
- [CVE-2020-1147](https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2020-1147) Sharepoint - CVSS 7.8 - Cuidado si tienes un Sharepoint expuesto directamente en Internet.
- [CVE-2019-0604](https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2019-0604) Sharepoint - CVSS 9.8

Páginas que listan vulnerabilidades en todo tipo de tecnologías:
- [Buscador de Common Vulnerabilities & Exposures (MITRE)](https://cve.mitre.org/cve/)
- [Buscador de CERT](https://www.kb.cert.org/vuls/)
- [Buscador de scoring NIST](https://nvd.nist.gov/vuln/search)
- [CVEDetails](https://www.cvedetails.com/)
- [Base de Datos de Exploits (Offensive Security)](https://www.exploit-db.com/)
- [Vulnerabilidades recopiladas por CCN](https://www.ccn-cert.cni.es/seguridad-al-dia/vulnerabilidades.html)

De manera orientativa, en los siguientes casos el [gobierno USA](https://cyber.dhs.gov/directives/) ha ordenado a sus agencias federales parchear con urgencia (sin esperar al ciclo de actualizaciones habitual) las siguientes vulnerabilidades:
- [2021-02](https://cyber.dhs.gov/ed/21-02/) Exchange-ProxyLogon.
- [2021-01](https://cyber.dhs.gov/ed/21-01/) SolarWinds.
- [2020-04](https://cyber.dhs.gov/ed/20-04/) Netlogon.
- [2020-03](https://cyber.dhs.gov/ed/20-03/) Windows DNS server.
- [2020-02](https://cyber.dhs.gov/ed/20-02/) Problema con las curvas elípticas.
- [2019-01](https://cyber.dhs.gov/ed/19-01/) DNS.

Y lista de la NSA (octubre 2020) con las 25 vulnerabilidades que los grupos de APTs chinos, mas están utilizando [aquí](https://www.zdnet.com/article/nsa-publishes-list-of-top-25-vulnerabilities-currently-targeted-by-chinese-hackers/)
