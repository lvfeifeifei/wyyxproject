/*
 识物模块
 */
import {
  RECEIVE_REQTHINGSNAVLIST,
  RECEIVE_THINGSRECMANUAL
}from '../mutation-types'

import {
  reqThingsNavList,  //请求识物页面导航栏数据
  reqThingsRecManual, //识物页面推荐数据
} from '../../api'

const state = {
  thingsNavList:{},
  recManual:{}

}
const mutations = {
  [RECEIVE_REQTHINGSNAVLIST](state,thingsNavList){

    state.thingsNavList = thingsNavList
  },
  [RECEIVE_THINGSRECMANUAL](state,recManual){

    state.recManual = recManual
  },

}
const actions = {
  //获取识物页面头部导航栏的数据
  async getThingsNavList ({commit}) {
    const result = await reqThingsNavList()
    if (result.code==='200') {
      const thingsNavList = result.data
      // console.log(thingsNavList,'reqThingsNavList()')
      commit(RECEIVE_REQTHINGSNAVLIST,thingsNavList)

    }
  },

  //获取识物页面推荐数据
  async getThingsRecManual ({commit},callback) {
    const result = await reqThingsRecManual()
    if(result.code==='200'){
      const recManual = result.data
      // console.log(recManual,'reqThingsRecManual()')
      commit(RECEIVE_THINGSRECMANUAL,recManual)
      typeof callback === 'function' && callback()
    }
  }

}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
