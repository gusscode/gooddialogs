import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "gooddialogs",
  description: "dialogs ts",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },

    ],

    sidebar: [
      {
        text: 'GoodDialogs',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Dialogs', link: '/dialogs/' },
          { text: 'Notifications', link: '/notifications/' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gusscode/gooddialogs' }
    ]
  },
  appearance: false,
  outDir: 'docs',

  base: '/gooddialogs/',
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-8LSVNLGR7N' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-8LSVNLGR7N');`
    ]
  ]

})
