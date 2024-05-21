<script setup lang="ts">

import {goodDialogs} from './gooddialogs.service'


async function viewAlerts(){
    const resDialog =await goodDialogs.confirm('Ver siguiente notificación?', {title: 'Este es el título', subtitle: 'subtitulo'})
    if(resDialog){
        goodDialogs.success('Esta es la siguiente Notificación')
    }else{
        goodDialogs.cancelled('Cancelado')
    }
}
</script>

<template>
<main>

    <button @click="viewAlerts">Dialog</button>

    <button @click="goodDialogs.createNotification('Esto est una notificación')"> notificacion</button>
</main>
</template>

<style scoped lang="scss">

</style>