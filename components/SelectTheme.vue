<script setup lang="ts">
import { ref, watch, nextTick } from "vue";
import { OptionTheme } from "../src/gooddialogs.service";

interface Props {
  modelValue: string;
}

const porps = defineProps<Props>();
const emit = defineEmits(["update:modelValue"])

const themes = ref(["gd-theme-indigo", "gd-theme-primary", "gd-theme-blue"]);
const currentTheme = ref<OptionTheme>("gd-theme-indigo");

function changeValue() {


nextTick(()=>{
    emit('update:modelValue', currentTheme.value)
  
  })
}

</script>

<template>
  <select
    style="margin-top: 16px; margin-bottom: 16px"
    name=""
    id=""
    v-model="currentTheme"
    @change="changeValue"
  >
    <option :value="option" v-for="(option, index) in themes">
      {{ option }}
    </option>
  </select>
</template>

<style scoped lang="scss"></style>
