<script setup lang="ts">
import {ref} from 'vue'
import GoodDialog from './GoodDialog.vue'
import {goodDialogs} from '../src/gooddialogs.service'
import GToggleDarkMode from "../components/GToggleDarkMode.vue";
const pruebaBool = ref(false)
</script>

# Dialogs



## Install

``` bash
npm install gooddialogs
```
## Import single
``` ts
import {goodDialogs} from 'gooddialogs';
```
## Import and create instance

``` ts
import {GoodDialogs} from 'gooddialogs';
const goodDialogs = new GoodDialogs('Message');
```

## Use

``` ts
const resDialog = await goodDialogs.confirm('Message')
```
<button class="gd-v-button" @click="goodDialogs.confirm('Message')">Launch Dialog</button>


## With Options
<GoodDialog></GoodDialog>

## Confirm Dialog



``` ts
const resDialog = await goodDialogs.confirm('Mensaje')
```

::: code-group

``` ts [config.js]
const resDialog = await goodDialogs.confirm('Mensaje')
```

``` ts
const resDialog = await goodDialogs.confirm('Mensaje')
```

:::

## Option Properties


| Parameter             | Type                                                                 | Explanation                                                                                   |
|-----------------------|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| `alertClass`          | `string`                                                            | Additional CSS class for the alert.                                                           |
| `alertIn`             | `string`                                                            | Defines the entry animation for the alert.                                                    |
| `alertOut`            | `string`                                                            | Defines the exit animation for the alert.                                                     |
| `cancelButtonClass`   | `string`                                                            | CSS class for the cancellation button.                                                        |
| `cancelButtonText`    | `string`                                                            | Text for the cancellation button.                                                             |
| `confirmButtonClass`  | `string`                                                            | CSS class for the confirmation button.                                                        |
| `confirmButtonText`   | `string`                                                            | Text for the confirmation button.                                                             |
| `containerClass`      | `string`                                                            | CSS class for the alert container.                                                            |
| `darkForce`           | `boolean`                                                           | Forces the use of the dark theme.                                                             |
| `divIconClass`        | `string`                                                            | CSS class for the icon within the alert.                                                      |
| `footerClass`         | `string`                                                            | CSS class for the alert footer.                                                               |
| `lightForce`          | `boolean`                                                           | Forces the use of the light theme.                                                            |
| `onConfirm`           | `() => void`                                                        | Function that executes when the user confirms the alert.                                      |
| `persistent`          | `boolean`                                                           | Indicates whether the alert should remain visible until the user manually closes it.           |
| `position`            | `'top' \| 'left' \| 'right' \| 'center' \| 'top-left' \| 'top-center' \| 'top-right'` | Defines the position of the alert on the screen.                                              |
| `subtitle`            | `string \| null`                                                    | Subtitle of the alert.                                                                        |
| `theme`               | `OptionTheme`                                                       | Theme of the alert, defined by `OptionTheme`.                                                 |
| `timer`               | `number \| null`                                                    | Sets the time in milliseconds before the alert automatically closes.                          |
| `title`               | `string \| null`                                                    | Title of the alert.                                                                           |
