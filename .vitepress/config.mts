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
      { icon: 'github', link: 'https://github.com/vuejs/ggg' }
    ]
  },
  appearance: false,
  outDir:'docs'
  
})
