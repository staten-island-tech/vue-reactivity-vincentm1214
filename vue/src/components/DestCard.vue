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
 :root {
  --xaxa:#83C9F4;
  --noob:#E3E7AF;
  --top:#222A68;
  --mid:#D95D39;
  --hehe:#97A2FF;
  --moyai:#F3C677;
  --yar:#7FBEAB;
      --primary:var(--hehe);
    --secondary:var(--yar);
    --h1:7.594rem;
    --h2:5.063rem;
    --h3:3.375rem;
    --h4:2.25rem;
    --h5:1.5rem;
    } */
     body,
    html,
    * {
       padding: 0;
       margin: 0;
       box-sizing: border-box;
    }
  
body{
  background-color:pink;
}
    .container {
       display: flex;
       align-items: center;
       text-align: center;
       flex-wrap: wrap;
       justify-content: space-around;
    }
  
     .laquestion {
       font-size: 1rem;
       background-color: var(--noob);
       padding: 2%;
       margin: 2rem 2rem;
       width: 450px;
       height: 700px;
    }
 
    h3{
     border-radius: 5px;
     margin-top: 2rem;
    }
  
    h1{
     font-size: 3rem;
     text-align: center;
     color: var(--xaxa);
    }
    
    .image{
      height: 400px;
      width:400px;
    }

    .stat{
      color:var(--hehe)
  </style>
