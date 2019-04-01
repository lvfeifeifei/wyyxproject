/*
 包含n个直接更新数据的方法
*/
import {
  RECEIVE_HOMEDATA,
}from './mutation-types'

export default {
  [RECEIVE_HOMEDATA](state,{homeData}){
    state.homeData = homeData
  },
}
