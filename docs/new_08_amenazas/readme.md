# Amenazas, Ataques y Vulnerabilidades

[[TOC]]

## Tácticas, Técnicas y Procedimientos de los atacantes
MITRE ha creado [ATT&CK](https://attack.mitre.org) que es una base de datos de conocimiento del comportamiento real de los adversarios, TTPS (Técnicas, tácticas y procedimientos).

- [2019. Getting Started with ATT&CK: Detection and Analytics](https://medium.com/mitre-attack/getting-started-with-attack-detection-a8e49e4960d0)
- [2019. Getting Started with ATT&CK: Adversary Emulation and Red Teaming](https://medium.com/mitre-attack/getting-started-with-attack-red-29f074ccf7e3)
- [2019. Getting Started with ATT&CK: Assessments and Engineering](https://medium.com/mitre-attack/getting-started-with-attack-assessment-cc0b01769cb4)
- [2019. USING ATT&CK TO ADVANCE CYBER THREAT INTELLIGENCE – PART 1](https://www.mitre.org/capabilities/cybersecurity/overview/cybersecurity-blog/using-attck-to-advance-cyber-threat)
- [2019. Launching ATT&CK for ICS](https://medium.com/mitre-attack/launching-attack-for-ics-2be4d2fb9b8)


## Tipos de Amenazas

### Virus

Se incorporan a los programas existentes y se activan cuando el usuario abre el programa. Normalmente la primera consecuencia es la ralentización 
del dispositivo que infectan, pero en el peor de los casos, los virus pueden corromper o eliminar datos, usar el correo electrónico del usuario 
para propagarse o borrar todo en un disco duro.

### Gusanos

Su principal característica es la posibilidad de autorreplicación que les permite propagarse automáticamente a través de dispositivos y redes. 
Normalmente no alteran archivos ocultándose en la memoria RAM, pasando desapercibidos hasta que su extensión alcanza una escala que consume recursos
 significativos del sistema o ancho de banda de la red.
 
### Troyanos

Software malicioso disfrazado de lo que parece ser un software legítimo. Una vez activados, los troyanos realizarán cualquier acción que hayan sido
programados para llevar a cabo. A diferencia de los virus y gusanos, los troyanos no se replican ni se reproducen a través de la infección.

### Spyware

Software malicioso que se instala en el sistema operativo del dispositivo con la intención de robar información del usuario con cualquier finalidad
delictiva: extorsionarle, venderla, utilizarla en su contra, etc… Suele ir incorporado en software o aplicaciones shareware o en software crackeado
para saltarse licencias o limitaciones.

### Herramientas de administración remota (RAT)

Software que permite a un operador remoto el control administrativo del sistema, lo que permite a un atacante hacer casi cualquier cosa en una
computadora infectada. Son difíciles de detectar, ya que no suelen aparecer en listas de programas o tareas en ejecución, y sus acciones a
menudo se confunden con las acciones de programas legítimos.

### Ransomware

El ransomware es un tipo de malware que cifra el dispositivo que infecta, bloqueando su uso y exigiendo un rescate por devolver la plena
funcionalidad al usuario.

## FakeNews y Amenazas en redes sociales

### Tipología de redes sociales

### Amenazas y mitigantes en redes sociales

### DOXING y SOCINT

## Vulnerabilidades
Vulnerabilidades recientes que calificamos de MUERTE:
- [CVE-2020-1472](https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2020-1472) "Zerologon" - CVSS 10.0 - El atacante escala a Domain Admin, simplement pudiendo ejecutar comandos en la red interna. 
- [CVE-2020-12271](https://es-la.tenable.com/blog/cve-2020-12271-zero-day-sql-injection-vulnerability-in-sophos-xg-firewall-exploited-in-the-wild) Sophos XG Firewall - CVSS 10.0
- [CVE-2019-11510](https://kb.pulsesecure.net/articles/Pulse_Security_Advisories/SA44101/) PULSE SECURE - CVSS 10.0
- [CVE-2019-19781](https://support.citrix.com/article/CTX267027) Citrix ADC/Netscaler - CVSS 9.8
- [CVE-2020-5902](https://www.f5.com/services/support/big-ip-vulnerability-cve-2020-5902) F5 Big Ip - CVSS 9.8. Ejecución remota de código sin autenticación del usuario.
- [CVE-2020-0688](https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2020-0688) Microsoft Exchange - CVSS 8.8.  Ejecución remota de código.
- [CVE-2020-1147](https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2020-1147) Sharepoint - CVSS 7.8 - Cuidado si tienes un Sharepoint expuesto directamente en Internet.
- [CVE-2019-0604](https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2019-0604) Sharepoint - CVSS 9.8





