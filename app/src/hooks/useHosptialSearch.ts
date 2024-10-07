import { ref } from 'vue'
import { reqHosptialSearch } from '../api/home/index'

export default function useHosptialSearch(value){
let keyword=ref(value)
let searchArr=ref([])  
const showData=ref([])
let getdate=async()=>{
  let res=await reqHosptialSearch(keyword.value)
  if(res.data.code==200){
    searchArr.value=res.data.data
    showData.value=searchArr.value.map((item:any)=>{
      return {
        value:item.hosname,//医院的名字
        hoscode:item.hoscode//医院的编码
      }
    })
  }
}
return{
  searchArr,
  showData,
  getdate
}
}
