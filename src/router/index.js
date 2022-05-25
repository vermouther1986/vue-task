 import { createRouter,createWebHistory } from "vue-router"
 import DetailPage from "../pages/DetailPage.vue"
 import HomePage from "../pages/HomePage.vue"
// import ReviewPage from "../components/review/ReviewContainer.vue"



 const routes = [
  { path: '/', name:"Home ",component: HomePage    },
    // { path: '/detail/review/:goodsId', name:"detail ",component: DetailPage    },
  { path: '/goods/detail/:goodsId', name:"review ",component: DetailPage    },
  ]


 const router = createRouter({
  //no hash createWebHistory
   history:createWebHistory (),
   routes
 })

 export default router

