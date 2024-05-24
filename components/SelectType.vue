<script setup lang="ts">
import { ref, watch, nextTick } from "vue";
import { OptionTheme } from "../src/gooddialogs.service";

interface Props {
  modelValue?: string ;
}

const porps = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);

const types = ref(['success' , 'info' , 'error' , 'warning', undefined ]);
const currentType = ref<string | undefined>(undefined);

function changeValue() {
  nextTick(() => {
    emit("update:modelValue", currentType.value);
  });
}
</script>

<template>
  <select
    style="margin-top: 16px; margin-bottom: 16px"
    name=""
    id=""
    v-model="currentType"
    @change="changeValue"
  >
    <option :value="option" v-for="(option, index) in types">
      {{ option }}
    </option>
  </select>
</template>

<style scoped lang="scss"></style>