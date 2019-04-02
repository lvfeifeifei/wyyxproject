/*
包含n个间接更新数据的方法
*/
//引入接口请求函数
import {
  reqHomeData,
  reqCategoryData,
  reqSearchList
} from '../api'

import {
  RECEIVE_HOMEDATA,
  RECEIVE_REQCATEGORYDATA,
  RECEIVE_REQSEARCHLIST
}from './mutation-types'

export default {
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

  async getSearchList ({commit}) {
    const result = await reqSearchList()
    console.log(result,'searchList()')
    if(result.code==='200'){
      console.log('searchList数据请求成功')
      const searchList = result.data
      commit(RECEIVE_REQSEARCHLIST,searchList)
    }
  }
}
