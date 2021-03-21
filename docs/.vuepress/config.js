module.exports = 
{
   title: 'Wiki Prot',
   description: 'Repositorio de documentación y referencias relativas al mundo de la ciberseguridad, creado y mantenido por la Comunidad de ProtAAPP',

   plugins: [
      [
         '@vuepress/google-analytics',
         {
            'ga': 'UA-180770730-1'
         }
      ]
   ],
   
   themeConfig: {
      searchMaxSuggestions: 15,
      lastUpdated: 'Esta página ha sido actualizada por última vez',
      activeHeaderLinks: true, // Default: true https://vuepress.vuejs.org/theme/default-theme-config.html#active-header-links
      smoothScroll: true,
      logo: '/img/Logo_PROTAAPP_webheader_small2.jpg',

      /************************
       ***** Navbar - Barra de navegación
       *************************/
      nav: [
         { text: 'wiki prot', link: '/' },
         { text: 'web', link: 'https://www.protaapp.com/' },
         { text: 'twitter', link: 'https://twitter.com/protaapp' },
         { text: 'github', link: 'https://github.com/ProtAAPP' },
         {
            text: 'wiki',
            ariaLabel: 'Índice wiki',
            items: [
               { text: 'Introducción', link: '/01_introduccion/' },
               { text: 'Normativa y Organismos', link: '/02_normativa/' },
               { text: 'Gestión de la seguridad', link: '/03_gestion/' },
               { text: 'Protección: Arquitecturas y Tecnologías', link: '/04_tecnologias/' },
               { text: 'Seguridad en el Desarrollo', link: '/05_desarrollo/' },
               { text: 'Gestión de Vulnerabilidades', link: '/11_vulnerabilities/' },
               { text: 'Detección y Respuesta de Ciberincidentes', link: '/06_operaciones/' },
               { text: 'Amenazas, Ataques y Vulnerabilidades', link: '/08_amenazas/' },
               { text: 'Auditorías de Vulnerabilidades y Hacking Ético', link: '/09_hacking/' },
               { text: 'Formación, Concienciación y Difusión', link: '/07_formacion/' },               
               { text: 'Eventos de Ciberseguridad', link: '/10_eventos/' },
               { text: 'Otros Respositorios Ciber', link: '/12_metarepos/' }
            ]
         }
      ],
      
      /************************
       ***** Sidebar
       *************************/
      sidebarDepth: 2,
      displayAllHeaders: false, // Default: false
      sidebar: 
      [
         '01_introduccion/',
         '02_normativa/',
         '03_gestion/',
         '04_tecnologias/',
         '05_desarrollo/',
         '11_vulnerabilities/',
         '06_operaciones/',
         '08_amenazas/',
         '09_hacking/',
         '07_formacion/',         
         '10_eventos/',
         '12_metarepos/'
      ]
   }
   
};
