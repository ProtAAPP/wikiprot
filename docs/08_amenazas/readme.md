# Amenazas, Tácticas y Técnicas de ataque

[[TOC]]

## Tipos de atacantes
En función del origen y propósito de los atacantes podrían ser:
* Estados
* Ciberterrorismo
* Ciberdelincuencia
* Hacktivismo
* Insiders

Los atacantes con capacidades avanzadas (APTs) se nombran como APT-XX. En esta [lista](https://attack.mitre.org/groups/), están recopilados algunos de los más importantes.

## Informes sobre ciberamenazas

### Informes sobre ciberamenazas de organismos públicos
- [2020. Informe Anual sobre Ciberamenazas y Tendencias. CCN](https://www.ccn-cert.cni.es/informes/informes-ccn-cert-publicos/5377-ccn-cert-ia-13-20-ciberamenazas-y-tendencias-edicion-2020/file.html)
- [2020. ENISA Threat Landscape - The year in review](https://www.enisa.europa.eu/publications/year-in-review/at_download/fullReport)
- [2020. ENISA Threat Landscape. List of top 15 threats](https://www.enisa.europa.eu/publications/enisa-threat-landscape-2020-list-of-top-15-threats/at_download/fullReport)
- [2019. Informe Anual sobre Hacktivismo y Ciberyihadismo. CCN](https://www.ccn-cert.cni.es/informes/informes-ccn-cert-publicos/4714-ccn-cert-ia-04-20-informe-anual-2019-hactivismo-y-ciberyihadismo-1/file.html)
- [Lista de informes publicados por el CCN](https://www.ccn-cert.cni.es/informes/informes-ccn-cert-publicos.html?limit=100)

### Informes sobre ciberamenazas de entidades privadas
- [2020 Cyber Threatscape Report. Accenture](https://www.accenture.com/_acnmedia/PDF-136/Accenture-2020-Cyber-Threatscape-Full-Report.pdf)
- [2020 Crowdstrike Global Threat Report](https://www.crowdstrike.com/resources/reports/2020-crowdstrike-global-threat-report/)


## Tácticas, Técnicas y Procedimientos de los atacantes
MITRE ha creado [ATT&CK](https://attack.mitre.org) que es una base de datos de conocimiento del comportamiento real de los adversarios, TTPS (Técnicas, tácticas y procedimientos).

Lista de recursos:
- [2019. Getting Started with ATT&CK: Detection and Analytics](https://medium.com/mitre-attack/getting-started-with-attack-detection-a8e49e4960d0)
- [2019. Getting Started with ATT&CK: Adversary Emulation and Red Teaming](https://medium.com/mitre-attack/getting-started-with-attack-red-29f074ccf7e3)
- [2019. Getting Started with ATT&CK: Assessments and Engineering](https://medium.com/mitre-attack/getting-started-with-attack-assessment-cc0b01769cb4)
- [2019. USING ATT&CK TO ADVANCE CYBER THREAT INTELLIGENCE – PART 1](https://www.mitre.org/capabilities/cybersecurity/overview/cybersecurity-blog/using-attck-to-advance-cyber-threat)
- [2019. Launching ATT&CK for ICS](https://medium.com/mitre-attack/launching-attack-for-ics-2be4d2fb9b8)

 ### Descripción de las técnicas:
 ATT&CK Initial Access. [Por dónde llegan los malos](https://attack.mitre.org/tactics/TA0001/)

### Amenazas con nombre propio
En este [repositorio de MITRE ATT&CK](https://attack.mitre.org/software/) se describen las técnicas utilizadas por cada una de las amenazas relevantes.

#### EMOTET
- [ATT&CK Emotet](https://attack.mitre.org/software/S0367/)
- [Informe CCN Emotet](https://www.ccn-cert.cni.es/informes/informes-ccn-cert-publicos/4183-ccn-cert-id-23-19-emotet/file.html)
- [Prevención](https://www.ccn-cert.cni.es/informes/informes-ccn-cert-publicos/4119-ccn-cert-ia-51-19-prevencion-de-la-campana-de-codigo-danino-emotet-con-medidas-tecnicas-de-las-guias-ccn-stic-de-ens-nivel-alto-1/file.html) de la campaña de código dañino EMOTET con medidas técnicas de las guías CCN-STIC de ENS nivel ALTO

#### MAZE
- [ATT&CK Maze](https://attack.mitre.org/software/S0449/)
- [Informe CCN Maze](https://www.ccn-cert.cni.es/informes/informes-ccn-cert-publicos/4976-ccn-cert-id-14-20-maze-1/file.html)

#### Ragnar locker
- [ATT&CK Ragnar Locker](https://attack.mitre.org/software/S0481/)
- [Informe CCN Ragnar Locker](https://www.ccn-cert.cni.es/informes/informes-ccn-cert-publicos/4811-ccn-cert-id-11-20-ragnar-locker/file.html)

#### Agent Tesla
- [ATT&CK Agent Tesla](https://attack.mitre.org/software/S0331/)
- [Informe CCN Agent Tesla](https://www.ccn-cert.cni.es/informes/informes-ccn-cert-publicos/4744-ccn-cert-id-06-20-agent-tesla/file.html)

## Tipos de Amenazas

### Virus

Se incorporan a los programas existentes y se activan cuando el usuario abre el programa. Normalmente la primera consecuencia es la ralentización 
del dispositivo que infectan, pero en el peor de los casos, los virus pueden corromper o eliminar datos, usar el correo electrónico del usuario 
para propagarse o borrar todo en un disco duro.

### Gusanos

Su principal característica es la posibilidad de autoreplicación que les permite propagarse automáticamente a través de dispositivos y redes. 
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

### El Fraude del CEO
- [¿Qué es y cómo funcional el fraude del CEO?](https://www.yolandacorral.com/ciberdebate-estafa-del-ceo/) Ciberdebate en "Palabra de Hacker"

### FakeNews y Amenazas en redes sociales

### DOXING y SOCINT
Pendiente de desarrollar.


## Otros recursos
- [Explicando cada tipo de vulnerabilidad](https://www.hacksplaining.com/lessons)




