---
sidebar: auto
---

# Content Security Policy (CSP)

[[TOC]]


## Concepto CSP

Una *Política de Seguridad de los Contenidos* ("Content Security Policy" ó CSP) es un pequeño texto que indica a los navegadores
web, cuando van a mostrar y ejecutar el código fuente de una página web (html, javascript, css, imágenes, etc), qué fuentes y 
recursos son **fiables** y cuáles otros no lo son y deben ser ignorados o bloqueados.

**El navegador, en lugar de confiar ciegamente en todo lo que entrega un servidor**, se guiará por la la CSP 
que define esa lista blanca de fuentes de contenido confiables, y ordena al navegador que solo ejecute o muestre 
recursos de esas fuentes. Incluso si un atacante puede encontrar un hueco a través del cual insertar una secuencia de 
comandos, esta no concordará con la lista blanca, y por lo tanto no se ejecutará.

:::warning Ataques XSS
La vulnerabilidad que aprovechan los ataques por XSS es la incapacidad de los navegadores para distinguir entre código fuente
que es parte de tu aplicación y código insertado maliciosamente por un tercero. La CSP es una defensa que puede reducir 
de manera significativa el riesgo e impacto de un ataque XSS en navegadores modernos.
:::

Ejemplos de textos que se pueden incluir en la CSP:

- ```font-src 'self';```: La aplicación sólo puede cargar fuentes del mismo dominio
- ```frame-src 'none';```: La aplicación no permite ningún tipo de *frames*
- ```img-src 'self'  https://www.google-analytics.com;```: La aplicación sólo puede mostrar imágenes del mismo dominio, o referencias de Google Analytics
- ```media-src 'self';```: La aplicación no podrá cargar ningún fichero de media (audios, vídeos...) salvo que se encuentren en la propia aplicación
- ```script-src 'self'  https://www.google-analytics.com;```: La aplicación sólo podrá ejecutar código javascript de la propia aplicación o de Google Analytics

Explicación básica sobre una CSP:

- [html5rocks - Content Security Policy](http://www.html5rocks.com/en/tutorials/security/content-security-policy/)
- [Creating a CSP Policy from Scratch](https://diogomonica.com/2015/12/30/creating-a-csp-policy-from-scratch/)

Para hacer una CSP concreta, buenos artículos:

- [Implementing Content Security Policy](https://hacks.mozilla.org/2016/02/implementing-content-security-policy/)
- [CSP: Your future best friend](https://www.smashingmagazine.com/2016/09/content-security-policy-your-future-best-friend/)

Herramientas para ver cómo de bien está definida la CSP (y otras cosas):

- [securityheaders.io](https://securityheaders.io)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)

La CSP puede insertarse de muchas maneras, a continuación se explican varias formas, siendo necesario elegir 
únicamente una de ellas.


## Configurar CSP en Apache

Para configurar una Content Security Policy (CSP) para una aplicación concreta, en el fichero .htaccess (por ejemplo) 
de la raiz, hay que añadir esto:

```bash
# Se muestra en varias líneas por motivos de legibilidad, 
# pero en el fichero ha de estar todo en la misma línea:

Header always set Content-Security-Policy: "
  default-src 'self';
  font-src 'self';
  frame-src 'none';
  img-src 'self' www.google-analytics.com;
  media-src 'self';
  object-src 'none';
  script-src 'unsafe-inline' 'self' www.google-analytics.com;
  style-src 'unsafe-inline' 'self';
"
```

Detalle importante: el módulo headers del Apache ha de estar activado. Ejecutar en la línea de comandos:

```shell script
$ sudo a2enmod headers
$ sudo service apache2 restart
```


## Configurar CSP en Nginx

En Nginx podrá definirse la cabecera http relativa a la CSP dentro de la sección ```server```, en el fichero
de configuración de un sitio web:

```bash
server
{
    listen 443 ssl http2;
    listen [::]:443 ssl http2 ipv6only=on;
    server_name mi.sitio.maravilloso.com;

    # ... configuración

    ####################################################
    #######   CSP   ####################################
    set $csp      "  default-src 'self'  https://www.google-analytics.com; ";
    set $csp  "$csp  font-src 'self'; ";
    set $csp  "$csp  frame-src 'none'; ";
    set $csp  "$csp  img-src 'self'  https://www.google-analytics.com; ";
    set $csp  "$csp  media-src 'self'; ";
    set $csp  "$csp  object-src 'none'; ";
    set $csp  "$csp  script-src 'self'  https://www.google-analytics.com; ";
    set $csp  "$csp  style-src 'self' 'unsafe-inline'; ";
    set $csp  "$csp  form-action 'none'; ";
    set $csp  "$csp  base-uri 'self'; ";
    set $csp  "$csp  frame-ancestors 'none'; ";

    add_header Content-Security-Policy  "$csp";
    add_header 'Cache-Control' "public";
}
``` 


## Definir CSP en HTML

La CSP puede definirse en el propio código fuente HTML que se envía al navegador web desde el cliente. Simplemente habría
que incluir una etiqueta ```meta``` en la sección ```head``` de la página web:

```html
<meta http-equiv="Content-Security-Policy" 
      content="script-src self www.google-analytics.com" />
```


## Definir CSP en PHP

Concretamente, el siguiente ejemplo muestra cómo la aplicación podría inyectar una cabecera http con la CSP
a través del código fuente de la propia aplicación. En concreto este en un ejemplo que aplica a una aplicación PHP
que inyecta un *"middleware"* en el framework de [Laravel](https://laravel.com/):


```php
// Fichero en app/Http/Middleware/AnadirCSP.php
<?php
namespace App\Http\Middleware;
 
use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
 
class AnadirCSP
{
 
    /**
     * @param Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        /** @var Response $response */
        $response = $next($request);
        $response->header('Content-Security-Policy',
            "default-src 'self';  ".
            "font-src 'self'  https://fonts.googleapis.com https://fonts.gstatic.com; ".
            "frame-src 'none';  ".
            "img-src 'self';  ".
            "media-src 'self';  ".
            "object-src 'none';  ".
            "script-src 'self' 'unsafe-eval' www.google-analytics.com; ".
            "style-src 'self'  https://cdnjs.cloudflare.com 'unsafe-inline';  ");
 
        return $response;
    }
}
```

Para activar el *middleware*, habría que registrarlo en el fichero ```kernel.php```:

```php
// fichero app/Http/Kernel.php

use App\Http\Middleware\AnadirCSP;
 
    ...
 
    protected $middlewareGroups = [
        'web' => [
            AnadirCSP::class
        ],
    ];
```


## Definir CSP en Java

A continuación se muestra un ejemplo habitual en el que se define una cabecera http personalizada (custom header) utilizando
```HttpClient```, pero para definir la CSP:

```javascript
HttpClient client = new DefaultHttpClient();
HttpGet request = new HttpGet(SAMPLE_URL);
request.setHeader("Content-Security-Policy", 
        "default-src 'self';  " +
        "font-src 'self' https://fonts.googleapis.com https://cdnjs.cloudflare.com; " +
        "frame-src 'none'; " +
        "img-src 'self';  " +
        "media-src 'self';  " +
        "object-src 'none';  " +
        "script-src 'self' 'unsafe-eval' www.google-analytics.com; " +
        "style-src 'self'  https://cdnjs.cloudflare.com 'unsafe-inline';  ");
client.execute(request);
```

En lugar de configurar el encabezado en todas y cada una de las peticiones http, también podemos configurarlo como 
un encabezado predeterminado en el propio cliente. Esto es útil cuando el encabezado debe ser el mismo para todas
las peticiones, como un encabezado de aplicación personalizado:

```javascript
Header header = new BasicHeader("Content-Security-Policy", "... csp ...");
List<Header> headers = Lists.newArrayList(header);
HttpClient client = HttpClients.custom().setDefaultHeaders(headers).build();
HttpUriRequest request = RequestBuilder.get().setUri(SAMPLE_URL).build();
client.execute(request);
```

