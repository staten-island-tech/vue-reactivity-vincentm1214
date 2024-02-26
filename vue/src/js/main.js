// import './asset/main.css'
import {food} from 'FoodArr.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import App from './App.vue'

const app = createApp(app)

app.use(createPinia())

app.mount('#app')
console.log(food)