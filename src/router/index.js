import { createRouter, createWebHistory } from 'vue-router'
import PhotoApp from "../views/PhotoApp";

const routes = [
  {
    name: 'root',
    path: '/',
    component: PhotoApp
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
