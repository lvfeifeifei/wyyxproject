/*
 多个路由模块
*/

//引入所有路由
import FirstPage from '../pages/FirstPage/FirstPage.vue'
import Classify from '../pages/Classify/Classify.vue'
import GeneralThings from '../pages/GeneralThings/GeneralThings.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Recommend from '../pages/FirstPage/Recommend/Recommend.vue'
import Elextrical from '../pages/FirstPage/Elextrical/Elextrical.vue'
import ChildParent from '../pages/FirstPage/ChildParent/ChildParent.vue'
import FoodBeverage from '../pages/FirstPage/FoodBeverage/FoodBeverage.vue'
import GlobalFeature from '../pages/FirstPage/GlobalFeature/GlobalFeature.vue'
import HomeLife from '../pages/FirstPage/HomeLife/HomeLife.vue'
import HouseClean from '../pages/FirstPage/HouseClean/HouseClean.vue'
import ShoesPackage from '../pages/FirstPage/ShoesPackage/ShoesPackage.vue'
import SportsTravel from '../pages/FirstPage/SportsTravel/SportsTravel.vue'
import SearchGoods from '../pages/Classify/SearchGoods/SearchGoods.vue'
import PhoneLogin from '../pages/Personal/PhoneLogin/PhoneLogin.vue'
import PwdLogin from '../pages/Personal/PwdLogin/PwdLogin.vue'
import Discover from '../pages/GeneralThings/Discover/Discover.vue'
import Selection from '../pages/GeneralThings/Selection/Selection.vue'
import Recommends from '../pages/GeneralThings/Discover/Recommends/Recommends.vue'
export default [
  {
    path: '/firstpage',
    component: FirstPage,
    meta: {
      showFooter: true
    },
    children: [
      {
        path: '/firstpage/recommend',
        component: Recommend,
        meta: {
          showFooter: true
        },
      },
      {
        path: '/firstpage/sportstravel',
        component: SportsTravel,
        meta: {
          showFooter: true
        },

      },
      {
        path: '/firstpage/shoespackage',
        component: ShoesPackage,
        meta: {
          showFooter: true
        },

      },
      {
        path: '/firstpage/homelife',
        component: HomeLife,
        meta: {
          showFooter: true
        },

      },
      {
        path: '/firstpage/houseclean',
        component: HouseClean,
        meta: {
          showFooter: true
        },

      },
      {
        path: '/firstpage/globalfeature',
        component: GlobalFeature,
        meta: {
          showFooter: true
        },

      },
      {
        path: '/firstpage/foodbeverage',
        component: FoodBeverage,
        meta: {
          showFooter: true
        },

      },
      {
        path: '/firstpage/childparent',
        component: ChildParent,
        meta: {
          showFooter: true
        },

      },
      {
        path: '/firstpage/elextrical',
        component: Elextrical,
        meta: {
          showFooter: true
        },

      },
      {
        path: '/firstpage',
        redirect:'/firstpage/recommend'
      },

    ]
  },
  {
    path: '/classify',
    component: Classify,
    meta: {
      showFooter: true
    }
  },
  {
    path:'/search',
    component:SearchGoods
  },
  {
    path: '/generalthings',
    component: GeneralThings,
    meta: {
      showFooter: true
    },
    children: [
      {
        path: '/generalthings/discover',
        component: Discover,
        meta: {
          showFooter: true
        },
        children: [
          {
            path:'/generalthings/discover/recommends',
            component:Recommends,
            meta: {
              showFooter: true
            },

          },
          {
            path:'/generalthings/discover',
            redirect:'/generalthings/discover/recommends'
          }
        ]
      },
      {
        path: '/generalthings/selection',
        component: Selection
      },
      {
        path: '/',
        redirect: '/generalthings/discover/recommends'
      }
    ]

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
    component: Personal,
  },
  {
    path: '/phonelogin',
    component: PhoneLogin
  },
  {
    path: '/pwdlogin',
    component: PwdLogin
  },
  {
    path: '/',
    redirect:'/firstpage'
  }
]
