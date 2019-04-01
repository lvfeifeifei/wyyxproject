import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import 'lib-flexible/flexible'
// import './mockData/mockServer' //第二种方式
import mock from './mockData/mockServer'

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
