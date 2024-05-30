<script setup lang="ts">
import {ref} from 'vue'
import {goodDialogs} from '../src/gooddialogs.service';
import GToggleDarkMode from "../components/GToggleDarkMode.vue";
import SelectTheme from "../components/SelectTheme.vue";
import SelectType from "../components/SelectType.vue";
const currentTheme = ref("gd-theme-indigo")
const currentType = ref(undefined)

</script>

# Notifications

<GToggleDarkMode></GToggleDarkMode>

<SelectTheme v-model="currentTheme"></SelectTheme>
<SelectType v-model="currentType"></SelectType>

<button class="gd-v-button" @click=" goodDialogs.createNotification('Notification', {timer:5000, theme: currentTheme, type: currentType})">Launch Notification</button>

``` ts
 goodDialogs.createNotification('Notification', {type: /* option type, undefined default */})
```