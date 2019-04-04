/*
 分类模块
 */
import {
  RECEIVE_REQCATEGORYDATA,
  RECEIVE_REQSEARCHLIST,
}from '../mutation-types'
import {
  reqCategoryData,  //请求分类页面category数据
  reqSearchList,  //请求分类页面搜索数据
} from '../../api'

const state = {
  categoryData: {},
  searchList:{},

}
const mutations = {
  [RECEIVE_REQCATEGORYDATA](state,categoryData){

    state.categoryData = categoryData
  },
  [RECEIVE_REQSEARCHLIST](state,searchList){

    state.searchList = searchList
  },

}
const actions = {
  //获取分类列表数据的异步action
  async getCategoryData ({commit},callback) {
    const result = await reqCategoryData()
    console.log(result)
    if (result.code===0) {
      //请求数据成功
      console.log('请求数据成功')
      const categoryData = result.data
      commit(RECEIVE_REQCATEGORYDATA,categoryData)
      // 在提交mutation更新状态之后调用callback
      typeof callback === 'function' && callback()
    }
  },

  //获取分类页面搜索数据的异步action
  async getSearchList ({commit}) {
    const result = await reqSearchList()
    console.log(result,'searchList()')
    if(result.code==='200'){
      console.log('searchList数据请求成功')
      const searchList = result.data
      commit(RECEIVE_REQSEARCHLIST,searchList)
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
