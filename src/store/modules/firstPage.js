/*
首页模块
*/
import {
  RECEIVE_HOMEDATA,
}from '../mutation-types'
//引入接口请求函数
import {
  reqHomeData,  //请求首页recommend页面数据
} from '../../api'

const state = {
  homeData:{},

}
const mutations = {
  [RECEIVE_HOMEDATA](state,homeData){
    state.homeData = homeData
  },

}
const actions = {
  //获取首页数据的异步action
  async getHomeData ({commit},callback) {
    //1、发异步ajax请求
    const result = await reqHomeData()
    console.log(result)
    //2、根据提交mutation
    if(result.code===0){
      console.log('数据请求成功')
      const homeData = result.data
      commit(RECEIVE_HOMEDATA,homeData)
      // 在提交mutation更新状态之后调用callback
      typeof callback === 'function' && callback()

    }
  },

}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
