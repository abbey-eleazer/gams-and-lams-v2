import { createWebHistory, createRouter } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import ServicesView from "@/views/ServicesView.vue"
import AboutView from "@/views/AboutView.vue"
import ContactView from "@/views/ContactView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutView,
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactView,
    },
    {
      path: '/services/painting',
      name: 'painting',
      component: ServicesView,
    },
    {
      path: '/services/wallpaper',
      name: 'wallpaper',
      component: ServicesView,
    },
    {
      path: '/services/pop-and-plasterboard',
      name: 'pop-and-plasterboard',
      component: ServicesView ,
    },
  ]
})

export default router