import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/characters",
    name: "characters",
    alias: "/characters",
    component: () => import("../components/CharactersList.vue")
  },
  {
    path:"/characters/:id",
    name:"character-details",
    component: () => import("../components/Character.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
