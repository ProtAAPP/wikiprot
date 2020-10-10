module.exports = 
{
   title: 'Wiki Prot',
   description: 'Repositorio de documentación y referencias relativas al mundo de la ciberseguridad, creado y mantenido por la Comunidad de ProtAAPP',

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
               { text: 'Normativa', link: '/02_normativa/' },
               { text: 'Gestión de la seguridad', link: '/03_gestion/' },
/*
               { text: 'Logs', link: '/04_logs/' },
               { text: 'Criptografía', link: '/05_criptografia/' },
               { text: 'Malware', link: '/06_malware/' },
               { text: 'Seguridad perimetral', link: '/07_seguridad_perimetral/' },
               { text: 'Redes', link: '/08_redes/' },
               { text: 'Bastionado', link: '/09_bastionado/' },
               { text: 'Web', link: '/10_web/' },
               { text: 'OSINT', link: '/11_osint/' },
               { text: 'Reputación', link: '/12_reputacion/' },
               { text: 'Internet of Things', link: '/13_iot/' },
               { text: 'Auditorías', link: '/14_auditorias/' }
*/
               { text: 'Protección: Arquitecturas y Tecnologías', link: '/new_04_tecnologias/' },
               { text: 'Desarrollo', link: '/new_05_desarrollo/' },
               { text: 'Operaciones', link: '/new_06_operaciones/' },
               { text: 'Amenazas y Vulnerabilidades', link: '/new_08_amenazas/' },
               { text: 'Auditorías de Vulnerabilidades y Hacking Ético', link: '/new_09_hacking/' },
               { text: 'Formación y Concienciación', link: '/new_07_formacion/' },               
               { text: 'Eventos', link: '/new_10_eventos/' }               
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
         'new_04_tecnologias/',
         'new_05_desarrollo/',
         'new_06_operaciones/',
         'new_08_amenazas/',
         'new_09_hacking/',
         'new_07_formacion/',         
         'new_10_eventos/'
      ]
   }
   
};
