/*
 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // 去掉#
  routes
})


export default router
