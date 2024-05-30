<script setup lang="ts">
import {ref} from 'vue'
import GoodDialogForm from './GoodDialogForm.vue'
import {goodDialogs} from '../src/gooddialogs.service'
import GToggleDarkMode from "../components/GToggleDarkMode.vue";
const pruebaBool = ref(false)
</script>

# Form
---
<GToggleDarkMode></GToggleDarkMode>
<br/>
<GoodDialogForm></GoodDialogForm>

``` ts
const result = await goodDialogs.form("Send your data", [
    { name: "name", label: "Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
]);
if (!result) return goodDialogs.cancelled();

goodDialogs.success(JSON.stringify(result).toString());

```