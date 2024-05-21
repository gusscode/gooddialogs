<script setup lang="ts">
import {goodDialogs} from '../src/gooddialogs.service';
import GToggleDarkMode from "../components/GToggleDarkMode.vue";

</script>

# Notifications

<GToggleDarkMode></GToggleDarkMode>

<button style="background-color: green;border-radius: 4px;color: white;font-size: 16px;padding: 4px 8px;" @click=" goodDialogs.createNotification('Notification')">Dialog</button>

``` ts
 goodDialogs.createNotification('Notification')
```