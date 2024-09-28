//主页的api接口
import requests from '../../utils/request'
import { type HosptialResponDate,type HosptialLevelAndRegionResponData } from './type'
enum API{
  //获取已有的医院数据
  HPSPTIAL_URL='/hosp/hospital/',
  //获取医院的等级和地址
  HOSPTIALLEVELANDREGION_URL='/cmn/dict/findByDictCode/'
}

export const getHasHosptial=(page:number,limit:number)=>{
  return requests<any,HosptialResponDate>({
    url:API.HPSPTIAL_URL+`${page}/${limit}`,
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