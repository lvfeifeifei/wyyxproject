/*
 包含n个直接更新数据的方法
*/
import {
  RECEIVE_HOMEDATA,
  RECEIVE_REQCATEGORYDATA,
  RECEIVE_REQSEARCHLIST
}from './mutation-types'

export default {
  [RECEIVE_HOMEDATA](state,homeData){
    state.homeData = homeData
  },
  [RECEIVE_REQCATEGORYDATA](state,categoryData){

    state.categoryData = categoryData
  },
  [RECEIVE_REQSEARCHLIST](state,searchList){

    state.searchList = searchList
  },
}
