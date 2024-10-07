import requests from '../../utils/request'
import type{ HosptialDetailResponDate } from './type'
enum API{
  HOSTDETAIL_URL='/hosp/hospital/',
  //获取医院科室的接口
  HOSOTIALDEPARTMENT_URL='/hosp/hospital/department/',
  //获取短信的接口
  USERCODE_URL='/sms/send/',
  //登录请求的接口
  USERLOGIn_URL='/user/login'
}

//获取医院的数据接口
export const reqHosptialDetail=(hoscode:string)=>{
  return requests<any,HosptialDetailResponDate>({
    url:API.HOSTDETAIL_URL+hoscode,
    method:'get'
  })
}
//获取医院科室的接口
export const reqHosptialDepartment=(hoscode:string)=>{
  return requests<any,HosptialDetailResponDate>({
    url:API.HOSOTIALDEPARTMENT_URL+hoscode,
    method:'get'
  })
}

//获取短信的接口
export const reqUsercode=(phone:string)=>{
  return requests<any,any>({
    url:API.USERCODE_URL+phone,
    method:'get'
  })
}

//登录
export const reqUserLogin=(data)=>{
  return requests<any,any>({
    url:API.USERLOGIn_URL,
    method:'post',
    data
  })
}