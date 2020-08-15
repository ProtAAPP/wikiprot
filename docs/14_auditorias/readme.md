# Auditorías de seguridad

En esta sección se va a incluir documentación relativa a la **ejecución práctica de auditorías** de seguridad.

[[TOC]]


## Auditoría interna


## Auditoría externa o perimetral

## Auditoría web

Herramientas:

- [Big List of Naughty Strings](https://github.com/minimaxir/big-list-of-naughty-strings) - The Big List of Naughty Strings is an evolving 
  list of strings which have a high probability of causing issues when used as user-input data. This is intended for use in
  helping both automated and manual QA testing.

## Test de intrusión (pentesting)

Herramientas:

- [w3af](http://w3af.org/) - Herramienta para realizar pentesting sobre una aplicación: hace ataques de sql-injection, xss, etc.
- [Burp](https://portswigger.net/burp) - considerada la navaja suiza del pentester: Burp Suite. Utilizada principalmente 
  para las auditorías de seguridad en aplicaciones web, permite combinar pruebas tanto automáticas. como manuales y que dispone de un gran número de funcionalidades.
- [OWASP Zed Attack Proxy - ZAP](https://owasp.org/www-project-zap/) - Easy to use pentest tool, freeware and open source. Automatically find
  security vulnerabilities in your web applications. Great tool for experienced pentesters. 
- [Nikto scanning tool](https://cirt.net/Nikto2) - Herramienta linux, gratuita, para realizar un montonazo de tipos de ataques sobre una web.
  Es la que utilizan en el libro del WAF de NGinx (ModSecurity) para probar su WAF (https://github.com/sullo/nikto).
 
## Análisis forense


## Auditoría de código fuente

Herramientas:

- [Retire.js](http://retirejs.github.io/retire.js/) - Herramienta para analizar las vulnerabilidades de las librerías javascript que utilice una 
  página (chequea versiones y vulnerabilidades conocidas en librerías conocidas)

## Ejercicio de Red Team

El _equipo rojo_ simulará el rol de un adversario cuyo objetivo será realizar una intrusión con la que lograr comprometer 
los principales activos de la organización.


## Auditoría de red inalámbrica


