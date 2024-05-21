<script setup lang="ts">
import {computed, ref} from 'vue'
interface Props {
    modelValue: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(["update:modelValue"])


</script>

<template>
    <div style="display:flex; align-items: center; gap: 16px;">
        <div class="g-toggle-container" @click="emit('update:modelValue', !modelValue)">
            <div class="g-toggle-lever" :class="modelValue?'g-toggle-lever-active':'g-toggle-lever-inactive'"></div>
        </div>
        <slot></slot>
    </div>

</template>

<style scoped lang="scss">
.g-toggle-container {
    width: 32px;
    height:16px;
    background-color: rgb(121, 129, 126);
    border-radius: 99999px;
    margin-top: 8px;
    margin-bottom: 8px;
    outline: solid 1px rgba(255, 255, 255, 0.836);
}
.g-toggle-lever {
    user-select: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    outline: solid 1px rgba(84, 117, 84, 0.836);    
    transition: all 300ms ease-in-out;
}
.g-toggle-lever-inactive {
   
    transform: scale(1.2);
    background-color: rgb(83, 125, 179);
    
}
.g-toggle-lever-active {
    
    transform: scale(1.4) translateX(16px);
    
    background-color: rgb(20, 182, 20);
    
}

</style>