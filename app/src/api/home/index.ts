//主页的api接口
import requests from '../../utils/request'
import { type HosptialResponDate,type HosptialLevelAndRegionResponData } from './type'
enum API{
  //获取已有的医院数据
  HPSPTIAL_URL='/hosp/hospital/',
  //获取医院的等级和地址
  HOSPTIALLEVELANDREGION_URL='/cmn/dict/findByDictCode/',
  //获取搜索医院名字提示的接口
  HOSPTIALSEARVH_URL='/hosp/hospital/findByHosname/',
}

export const getHasHosptial=(page:number,limit:number,hostype='',districtCode='')=>{
  return requests<any,HosptialResponDate>({
    url:API.HPSPTIAL_URL+`${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`,
    method:'get'
  })
}

//获取医院的等级或者是区域的接口
export const reqHosptialLevelAndRegion=(dictCode)=>{
  return requests<any,HosptialLevelAndRegionResponData>({
    url:API.HOSPTIALLEVELANDREGION_URL+`${dictCode}`,
    method:'get'
  })
}

export const reqHosptialSearch=(hosname:string)=>{
  return requests({
    url:API.HOSPTIALSEARVH_URL+`${hosname}`,
    method:'get'
  })
}