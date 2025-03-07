// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  features:{
    inlineStyles: false
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: "LGRLSK2024",
      htmlAttrs: {
        lang: "fr"
      },
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {
          charset: "utf-8"
        },
        {
          "http-equiv": "x-ua-compatible",
          "content": "ie-edge"
        }
      ],
      link: [],
      style: [],
      script: [
        { src: "/js/jquery.min.js", type: 'text/javascript' },
        { src: "/js/bootstrap.min.js", type: 'text/javascript' },
        { src: "/js/owl.carousel.min.js", type: 'text/javascript' },
        { src: "/js/slick.min.js", type: 'text/javascript' },
        { src: "/js/imagesloaded.pkgd.min.js", type: 'text/javascript' },
        { src: "/js/wow.min.js", type: 'text/javascript' },
        { src: "/js/jquery.magnific-popup.min.js", type: 'text/javascript' },
        { src: "/js/rsmenu-main.js", type: 'text/javascript' },
        { src: "/js/plugins.js", type: 'text/javascript' },
        { src: "/js/time-circle.js", type: 'text/javascript' },
        { src: "/js/gmap.js", type: 'text/javascript' },
        { src: "/js/event-timeline.js", type: 'text/javascript' },
        { src: "/js/jquery.time-to.min.js", type: 'text/javascript' },
        { src: "/js/modernizr-2.8.3.min.js", type: 'text/javascript' },
        { src: "/js/main.js"}
      ],
      noscript: []
    }
  }
  ,
  css: ['~/assets/css/bootstrap.min.css', '~/assets/css/font-awesome.min.css', '~/assets/css/animate.css', '~/assets/css/owl.carousel.css',
    '~/assets/css/slick.css', '~/assets/css/magnific-popup.css', '~/assets/css/icofont.css', '~/assets/css/timeTo.css',
    '~/assets/css/rsmenu-main.css', '~/assets/css/rsmenu-transitions.css', '~/assets/css/style.css', '~/assets/css/responsive.css'
  ]
})
