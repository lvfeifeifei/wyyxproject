/*
 包含n个接口请求函数的模块
 每个函数返回promise
 */
import ajax from './ajax'


export const reqHomeData = () => ajax('/home')

export const reqCategoryData = () => ajax('/category')
export const reqCategoryListData = () => ajax('/category/list')
