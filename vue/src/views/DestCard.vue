<template>
    <div>
      <h1>{{ Destination.name }}</h1>
      <img :src="Destination.img" alt="" />
      <h2>{{ clicked }}</h2>
      <button @click="increment">Click ME</button>
    </div>
  </template>
  
  <script setup>
  //import { ref } from "vue";
  const props = defineProps({
    Destination: Object,
  });
  //clicker logic
  const food=[
 {
          name: "starbux",
          secret:false,
          limited:false,
          calories: 280,
          img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_201906_7659_MediumIcedMocha_Glass_A1_832x472:nutrition-calculator-tile",
        },
        {
          name: "happy birthday grimace",
          secret: false,
          limited:true,
          calories: 580,
          img: "https://www.news-journalonline.com/gcdn/presto/2023/06/26/PNJM/e3011fa8-8b58-4689-8d6a-c2300294fd25-grimace.jpeg",
        },
        {
          name: "mcrobber",
          secret: false,
          limited:true,
          calories: 480,
          img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_201910_0010_McRib_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
        },
        {
          name: "depression package",
          secret: false,
          limited:false,
          calories: 475,
          img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202103_6975_HamburgerHappyMeal_AppleSlices_WhiteMilkJug_Left_832x472:nutrition-calculator-tile",
        },
        {
          name: "big boy meal",
          secret: false,
          limited:false,
          calories: 475,
          img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202103_6975_HamburgerHappyMeal_AppleSlices_WhiteMilkJug_Left_832x472:nutrition-calculator-tile",
        },
        {
          name: "mcfurry",
          secret: false,
          limited:false,
          calories: 510,
          img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_3832_OREOMcFlurry_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        },
        {
          name: "twice",
          secret: false,
          limited:true,
          calories: 510,
          img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_3832_OREOMcFlurry_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        },
        {
          name: "Saussy baka",
          secret: false,
          limited:false,
          calories: 460,
          img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0062_SausageBiscuit_832x472:nutrition-calculator-tile",
        },
        {name: "chai chai",
          secret: false,
          limited:false,
          calories: 2,
          img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_201909_9449_UnsweetTea_Glass_A1_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        },
        {name: "nuclear radiation",
          false: false,
          limited:true,
          calories: 460,
          img: "https://dinnerthendessert.com/wp-content/uploads/2017/02/McDonalds-Shamrock-Shake.jpg",
        },
        {name: "oui oui",
          secret: false,
          limited:false,
          calories: 70,
          img: "https://www.onceuponachef.com/images/2022/10/macarons.jpg",
        },
        {name: "wintermelon",
          secret: false,
          limited:false,
          calories: 120,
          img: "https://images.openfoodfacts.org/images/products/200/000/002/6846/ingredients_fr.5.full.jpg",
        },
        {name: "morozenoe",
          secret: false,
          limited:false,
          calories: 330,
          img: "https://pbs.twimg.com/media/F1Vr8efXwAEmPCJ?format=jpg&name=large",
        },
        {name: "deez nuts",
          secret: true,
          limited:false,
          calories: 194,
          img: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Sugar-Donut-3:product-header-desktop?wid=829&hei=455&dpr=off",
        },
        {name: "waffles",
          secret: false,
          limited:false,
          calories: 770,
          img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202208_0032_3HotCakes_Sausage_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        },
        {name: "avatar",
          secret: true,
          limited:false,
          calories: 1330,
          img: "https://images.secretmenus.com/wp-content/uploads/2017/12/The-Land-Sea-and-Air-Burger-478x500.png",
        },
        {name: "lgbtqia+",
          secret: true,
          limited:false,
          calories: 315,
          img: "https://images.secretmenus.com/wp-content/uploads/2017/12/Neapolitan-Shake.jpg",
        },
        {name: "bangbang",
          secret: true,
          limited:false,
          calories: 795,
          img: "https://images.secretmenus.com/wp-content/uploads/2017/12/The-McGangBang.jpg",
        },
        {name: "stayhydrated",
          secret: false,
          limited:false,
          calories: 0,
          img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202106_5474_DasaniBottledWater_832x472:product-header-desktop?wid=830&hei=456&dpr=off",
        },
      ]
      
  </script>
  
  <style scoped>
 
  </style>