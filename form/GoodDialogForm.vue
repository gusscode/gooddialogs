<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import {
  OptionTheme,
  GoodDialogs,
  Options,
  goodDialogs,
} from "../src/gooddialogs.service";

async function launchForm() {
  const result = await goodDialogs.form("Send your data", [
    { name: "name", label: "Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
  ]);
  if (!result) {
    return goodDialogs.cancelled();
  }
  goodDialogs.success(JSON.stringify(result).toString());
}
</script>

<template>
  <button class="gd-v-button" @click="launchForm">Launch dialog Form</button>
</template>

<style scoped lang="scss"></style>
