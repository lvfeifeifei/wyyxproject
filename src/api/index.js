/*
 包含n个接口请求函数的模块
 每个函数返回promise
 */
import ajax from './ajax'

const BASE = '/api'
export const reqHomeData = () => ajax('/home')

export const reqCategoryData = () => ajax('/category')
export const reqCategoryListData = () => ajax('/category/list')
//获取分类页面search列表数据
export const reqSearchList = () => ajax(BASE+"/xhr/search/init.json",)
