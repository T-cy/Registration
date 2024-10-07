import { defineStore } from 'pinia'
import { reqUserLogin } from '../../api/hosptial/index'
import { setToken,getToken,setName,getName } from '../../utils/user'
const useUserStore=defineStore('userStore',{
  state:()=>{
    return {
      dialogFormVisible:false,
      name:getName(),
      token:getToken(),
    }
  },
  actions:{
    async getLogin(data){
      let res=await reqUserLogin(data)      
      if(res.data.code==200){
        this.name=res.data.data.name
        this.token=res.data.data.token
        setToken(this.token)
        setName(this.name)
      }
    },
  },
  getter:{

  }
})

export default useUserStore