import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import "@/assets/style/style.scss"
import "@/assets/style/article.scss"
import "@/assets/style/buttons.scss"
import "@/assets/style/pagination.scss"
import "@/assets/style/category.scss"
import "@/assets/style/details.scss"
import "@/assets/style/footer.scss"
import "@/assets/style/slider.scss"
import "@/assets/style/blogStyle.scss"
import "@/assets/style/blogDetails.scss"
import "@/assets/style/notFound.scss"
import "@/assets/style/projectPage.scss"




createApp(App).use(store).use(router).mount('#app')
