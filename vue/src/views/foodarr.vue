<template>
  <div>
    <DestCard 
      v-for="food in foods" 
    : key ="food.name" 
    : Food="food"
      />
  </div>

   <div class="list">
      <h2>list</h2>
    </div>
</template>


<script setup>

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
    }</style>
