<script setup lang="ts">
import {computed, ref, onMounted} from 'vue'


const mode = ref<boolean>()
const emit = defineEmits(["update:modelValue"])

onMounted(()=>{
    mode.value = document.documentElement.classList.contains('dark')
})
const darkModeName = computed(()=> {

    if(mode.value){
        return 'Dark Mode'
    }
    
    return 'Light Mode'
    
})

function changeMode(){
    mode.value = !mode.value
    if(mode.value){
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')
    }

}

</script>

<template>
    <div style="display:flex; align-items: center; gap: 16px;">
        <div class="g-toggle-container" @click="changeMode">
            <div class="g-toggle-lever" :class="mode?'g-toggle-lever-active':'g-toggle-lever-inactive'"></div>
        </div>
        <div>{{ darkModeName }}</div>
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