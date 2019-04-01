import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import 'lib-flexible/flexible'
import mock from './mockData/mockServer'


new Vue({
  el:'#app',
  components:{
    App
  },
  template:'<App/>',
  router,//配置路由器
  mock,//配置mock
  store//配置vuex
})
