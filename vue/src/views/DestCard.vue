<template>
    <div class="foodcard">
      <h1>{{ food.name }}</h1>
      <img :src="food.img" alt="" />
      <h2>{{ clicked }}</h2>
      <button @click="increment">no</button>
    </div>
  </template>
  
  <script setup>
  //import { ref } from "vue";
  const props = defineProps({
    food: Object,
  });
  //clicker logic
 
      
  </script>
  
  <style scoped>
 
  </style>
