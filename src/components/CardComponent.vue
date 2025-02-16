<script setup>

props[ 'title' ,'description','image']


</script>
<template>
<div class="card" style="width: 18rem;">
  <img :src=" `/public/${image}`" class="card-img-top" alt="service image">
  
  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ description }}</p>
    <a href="#" class="card-link">Card link</a>
  </div>
</div>

</template>
<style>

</style>