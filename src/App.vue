<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="d-block">
  <NavBar />
 <router-view />
  </div>
</template>

<style>

</style>
