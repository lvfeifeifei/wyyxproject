/*
vue最核心管理对象模块
*/

import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './state'
import mutations from './state'
import getters from './state'


//声明使用
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
