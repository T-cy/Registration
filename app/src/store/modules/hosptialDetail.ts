import { defineStore } from 'pinia'
import { reqHosptialDetail ,reqHosptialDepartment} from '../../api/hosptial/index'
import type{ HosptialDetailResponDate,HosptialDeatail } from '../../api/hosptial/type'
const useHosptialDetail=defineStore('hosptialDetail',{
  state:()=>{
    return {
      hosptialInfo:({} as HosptialDeatail),
      hosptialDepatement:[]
    }
  },
  actions:{
    // 获取医院详情的方法    
    async getHosptial(hoscode:string){  
      let res:HosptialDetailResponDate=await reqHosptialDetail(hoscode)
      if(res.data.code==200){
        this.hosptialInfo=res.data.data
      }
    },
    //获取医院的科室
    async getHosptialDepartment(hoscode:string){  
      let res=await reqHosptialDepartment(hoscode)
      if(res.data.code==200){
        this.hosptialDepatement=res.data.data
      }
    },
  },
  getter:{

  }
})

export default useHosptialDetail