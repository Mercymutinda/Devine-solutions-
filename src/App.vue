<script setup>
import NavBar from './components/NavBar.vue';
import FooterComponent  from './components/FooterComponent.vue';
</script>

<template>
<div  >
    <NavBar/>

<RouterView />

<FooterComponent/>
</div>
</template>

<style>

</style>
