<script setup lang="ts">
import { ref, Ref, onMounted } from "vue";
import {
  OptionTheme,
  GoodDialogs,
  Options,
  goodDialogs,
} from "../src/gooddialogs.service";

async function launchForm() {
  const result = await goodDialogs.withOptions("Select option.", [
    { label: "one", value: "value 1" },
    { label: "two", value: "value 2" },
    { label: "three", value: "value 3" },
  ]);
  if (!result) {
    return goodDialogs.cancelled();
  }
  goodDialogs.success(result);
}
</script>

<template>
  <button class="gd-v-button" @click="launchForm">Launch with Options</button>
</template>

<style scoped lang="scss"></style>
