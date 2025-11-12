import { defineConfig } from 'vitepress'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = resolve(__dirname, '../public')

const wikiSections = [
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
  { text: 'Otros Repositorios Ciber', link: '/12_metarepos/' }
]

const GA_MEASUREMENT_ID = 'UA-180770730-1'

export default defineConfig({
  lang: 'es-ES',
  title: 'Wiki Prot',
  description:
    'Repositorio de documentación y referencias relativas al mundo de la ciberseguridad, creado y mantenido por la Comunidad de ProtAAPP',
  lastUpdated: true,
  ignoreDeadLinks: true,
  vite: {
    publicDir
  },
  head: [
    ['meta', { name: 'theme-color', content: '#42b883' }],
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'script',
      {
        async: '',
        src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
      }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
`
    ]
  ],
  themeConfig: {
    logo: '/img/Logo_PROTAAPP_webheader_small2.jpg',
    lastUpdatedText: 'Esta página ha sido actualizada por última vez',
    outline: {
      level: 'deep',
      label: 'En esta página'
    },
    nav: [
      { text: 'wiki prot', link: '/' },
      { text: 'web', link: 'https://www.protaapp.com/' },
      { text: 'X (twitter)', link: 'https://x.com/protaapp' },
      { text: 'github', link: 'https://github.com/ProtAAPP' },
      {
        text: 'wiki',
        items: wikiSections
      }
    ],
    sidebar: [
      {
        text: 'Índice wiki',
        items: wikiSections
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ProtAAPP' },
      { icon: 'x', link: 'https://x.com/protaapp' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Buscar',
            buttonAriaLabel: 'Buscar en esta documentación'
          },
          modal: {
            noResultsText: 'No se encontraron resultados',
            resetButtonTitle: 'Limpiar la búsqueda',
            footer: {
              selectText: 'Seleccionar',
              navigateText: 'Navegar',
              closeText: 'Cerrar'
            }
          }
        }
      }
    },
    footer: {
      message: 'CC BY-NC-SA 4.0',
      copyright: 'Copyright © 2020 ProtAAPP'
    }
  }
})
