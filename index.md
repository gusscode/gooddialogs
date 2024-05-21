---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "gooddialogs"
  #text: "clean develop"
  tagline: clean develop
  actions:
    - theme: brand
      text: Dialogs
      link: /dialogs/
    - theme: alt
      text: Notifications
      link: /notifications/

#features:
#  - title: Vue
#    details: Funciona con Vue, React y angular
#  - title: React
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
#  - title: Angular
#    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup lang="ts">
import {goodDialogs} from './src/gooddialogs.service';
import GToggleDarkMode from "./components/GToggleDarkMode.vue";

</script>
<GToggleDarkMode></GToggleDarkMode>
<button class="gd-v-button" @click="goodDialogs.confirm('Mensaje')">Launch Dialog</button>

``` ts
const resDialog = await goodDialogs.confirm('Mensaje')
```

- Multi themes
- Dark and Light Mode
- Custom Styles
- All Frameworks
- Typescript and Module JS
- It's not political spam
- MIT