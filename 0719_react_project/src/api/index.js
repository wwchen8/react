/* 
  1.项目中所有请求由该文件发出
  2.以后每当发请求之前，都要在该文件里添加一个方法
*/

//引入我们自定义的myAxios
import myAxios from './myAxios'
import jsonp from 'jsonp'
import {message} from 'antd'
//引入请求的基本路径
import {BASE_URL,WEATHER_AK,CITY} from '../config'

//登录请求
export const reqLogin = (username,password)=> myAxios.post(`${BASE_URL}/login`,{username,password})

//获取商品列表请求
export const reqCategoryList = ()=> myAxios.get(`${BASE_URL}/manage/category/list`)

//获取天气信息（百度接口,使用jsonp的方式请求）
export const reqWeather = ()=>{
  return new Promise((resolve,reject)=>{
      jsonp(`http://api.map.baidu.com/telematics/v3/weather?location=${CITY}&output=json&ak=${WEATHER_AK}`,(err,data)=>{
      if(err){
        message.error('请求天气接口失败，请联系管理员')
        return new Promise(()=>{})
      }else{
        const {dayPictureUrl,temperature,weather} = data.results[0].weather_data[0]
        let weatherObj = {dayPictureUrl,temperature,weather}
        resolve(weatherObj)
      }
    })
  })
}

//新增商品分类
export const reqAddCategory = ({categoryName})=> myAxios.post(`${BASE_URL}/manage/category/add`,{categoryName})

//更新一个商品分类
export const reqUpdateCategory = ({categoryId,categoryName})=> myAxios.post(`${BASE_URL}/manage/category/update`,{categoryId,categoryName})

//请求商品分页列表
export const reqProductList = (pageNum,pageSize)=> myAxios.get(`${BASE_URL}/manage/product/list`,{params:{pageNum,pageSize}})

//请求更新商品状态
export const reqUpdateProdStatus = (productID,status)=> myAxios.post(`${BASE_URL}/manage/product/updateStatus`,{productID,status})

//搜索商品
export const reqSearchProduct = (pageNum,pageSize,searchType,keyWord)=> myAxios.get(`${BASE_URL}/manage/product/search`,{params:{pageNum,pageSize,[searchType]:keyWord}})

//根据商品id获取商品信息
export const reqProdById = (productId)=> myAxios.get(`${BASE_URL}/manage/product/info`,{params:{productId}})

//请求删除图片（根据图片唯一名删除）
export const reqDeletePicture = (name)=> myAxios.post(`${BASE_URL}/manage/img/delete`,{name})

//请求添加商品
export const reqAddProduct = (productObj)=> myAxios.post(`${BASE_URL}/manage/product/add`,{...productObj})

//请求更新商品
export const reqUpdateProduct = (productObj)=> myAxios.post(`${BASE_URL}/manage/product/update`,{...productObj})

//请求所有角色列表
export const reqRoleList = ()=> myAxios.get(`${BASE_URL}/manage/role/list`)

//请求添加角色
export const reqAddRole = ({roleName})=> myAxios.post(`${BASE_URL}/manage/role/add`,{roleName})

//请求给角色授权export const reqAddRole = ({roleName})=> myAxios.post(`${BASE_URL}/manage/role/add`,{roleName})
export const reqAuthRole = (roleObj)=> myAxios.post(`${BASE_URL}/manage/role/update`,{...roleObj,auth_time:Date.now()})

//请求获取所有用户列表（同时携带着角色列表）
export const reqUserList = ()=> myAxios.get(`${BASE_URL}/manage/user/list`)

//请求添加用户
export const reqAddUser = (userObj)=> myAxios.post(`${BASE_URL}/manage/user/add`,{...userObj})
