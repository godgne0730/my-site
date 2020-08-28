import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "首頁",
    component: Index
  },
  // 當連到不存在的頁面時 導回首頁
  {
    path: "*",
    redirect: "/"
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router