<script setup lang="ts">
import {ref} from 'vue'
import GoodDialogOptions from './GoodDialogOptions.vue'
import {goodDialogs} from '../src/gooddialogs.service'
import GToggleDarkMode from "../components/GToggleDarkMode.vue";
const pruebaBool = ref(false)
</script>

# Form

---

<GToggleDarkMode></GToggleDarkMode>
<br/>
<GoodDialogOptions></GoodDialogOptions>

```ts
const result = await goodDialogs.withOptions("Select option.", [
  { label: "one", value: "value 1" },
  { label: "two", value: "value 2" },
  { label: "three", value: "value 3" },
]);
if (!result) {
  return goodDialogs.cancelled();
}
goodDialogs.success(result);
```
