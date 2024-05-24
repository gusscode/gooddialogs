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
  import {ref} from 'vue'
import {goodDialogs, GoodDialogs} from './src/gooddialogs.service';
import GToggleDarkMode from "./components/GToggleDarkMode.vue";
import SelectType from "./components/SelectType.vue";

const currentType = ref<string | undefined>(undefined)

async function pruebaBorrar() {
  const goodDialogs = new GoodDialogs();
  const resDialog = await goodDialogs.confirm("Delete?", );
  if (!resDialog) return goodDialogs.cancelled("cancelled");
  //const response = await apiService.delete('api/v1/document/' + 4)

  if (true) {
    goodDialogs.success("Success Delete!");
  } else {
    goodDialogs.cancelled("Error");
  }
}
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

<button class="gd-v-button" @click="pruebaBorrar">Delete Example</button>


``` ts
async function deleteDocument() {
  
  const resDialog = await goodDialogs.confirm("Delete?");
  if (!resDialog) return goodDialogs.cancelled("cancelled");
  const response = await apiService.delete('/api/v1/document/' + 4)

  if (response.status < 400) {
    goodDialogs.success("Success Delete!");
  } else {
    goodDialogs.cancelled("Error");
  }
}

```