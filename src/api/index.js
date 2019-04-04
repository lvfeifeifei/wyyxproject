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
//获取识物页面导航栏数据
export const reqThingsNavList = () => ajax(BASE+"/topic/v1/find/getTabs.json")
//获取识物推荐页面数据
export const reqThingsRecManual= () => ajax(BASE+"/topic/v1/find/recManual.json")
