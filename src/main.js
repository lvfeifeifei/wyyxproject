import Vue from 'vue'
import App from './App.vue'

import store from './store/index'
import router from './router'
import 'lib-flexible/flexible'

// import './mockData/mockServer' //第二种方式
import mock from './mockData/mockServer'
import Header from './components/Header/Header.vue'
import {Button} from 'mint-ui'

import VueLazyLoad from 'vue-lazyload'
import loadingGIF from "../static/imgs/loading.gif"

Vue.use(VueLazyLoad,{
  loading: loadingGIF,
})

//注册为全局组件标签
Vue.component(Button.name, Button)
Vue.component('Header',Header)

new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<App/>',
  router,//配置路由器
  store,//配置vuex
  mock
})
