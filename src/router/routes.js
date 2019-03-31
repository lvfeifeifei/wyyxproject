/*
 多个路由模块
*/

//引入所有路由
import FirstPage from '../pages/FirstPage/FirstPage.vue'
import Classify from '../pages/Classify/Classify.vue'
import GeneralThings from '../pages/GeneralThings/GeneralThings.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue'

export default [
  {
    path: '/firstpage',
    component: FirstPage,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/classify',
    component: Classify,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/generalthings',
    component: GeneralThings,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/personal',
    component: Personal
  }
]
