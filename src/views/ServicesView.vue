<script setup> 
import { ref} from 'vue'
import CardComponent from '../components/CardComponent.vue'

const services = ref([

    {title: " Phone", description: " phone repairs", image: "phone1.avif"},
    {title: " Laptop", description: " phone repairs" ,image: "phone1.avif"},
    {title: " Tablet", description: " phone repairs" ,image: "phone1.avif"},

    ]);


</script>
<template>
  <div class="container">
  <h1 class=" text-primary mb-5"> Services</h1>
  <div class="myCards" id="cards">
<CardComponent
 v-for="(service  ,index) in services"
  v-bind:title= service.title 
  v-bind:description= service.description 
  v-bind:image= service.image 
  class="me-4">
</CardComponent>
</div>
</div>
</template>
<style scoped>
.myCards{
display: flex;
flex-wrap: wrap;
gap:20px;

}
</style>  