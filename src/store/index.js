/*
vue最核心管理对象模块
*/

import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import firstPage from './modules/firstPage'
import classify from './modules/classify'
import things from './modules/things'


//声明使用
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    firstPage,
    classify,
    things
  }//总的state：{firstPage：{}，classify：{}，things：{}}
})
