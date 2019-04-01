/*
包含n个间接更新数据的方法
*/
//引入接口请求函数
import {
  reqHomeData
} from '../api'

import {
  RECEIVE_HOMEDATA,
}from './mutation-types'

export default {
 //获取首页数据的异步action
  async getHomeData ({commit}) {
    //1、发异步ajax请求
    const result = await reqHomeData()
    console.log(result)
    //2、根据提交mutation
    if(result.code===0){
      console.log('数据请求成功')
      const homeData = result.data
      commit(RECEIVE_HOMEDATA,{homeData})
    }
  }
}
