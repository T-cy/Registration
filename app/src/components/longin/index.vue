<template>
  <div class="login">
    <el-dialog  :close-on-click-modal="false" v-model="userStore.dialogFormVisible" title="用户登录" width="800">
      <el-row>
        <el-col :span="12">
          <div class="input_login" v-show="login_style==1">
            <div class="login_from">
              <el-form class="login_input" :model="loginParams" :rules="rules" ref="From">
                <el-form-item prop="userPhone">
                  <el-input placeholder="请你输入手机号码" :prefix-icon="User" v-model="loginParams.userPhone"></el-input>
                </el-form-item>
                <el-form-item prop="userComplete">
                  <el-input placeholder="请你输入手机验证码" :prefix-icon="Lock" v-model="loginParams.userComplete"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button size="small" :disabled="ValidatePhone||flag==1?true:false"  @click="getCode" class="code">
                    <span v-show="flag==0">获取验证码</span>
                    <span v-show="flag==1">获取验证码（{{time}}）秒</span>
                  </el-button>
                </el-form-item>
                <el-form-item >
                  <el-button type="primary"  style="width: 100%;margin:0 10px" @click="comfirmLogin(From)" :disabled="ValidatePhone&&loginParams.userComplete.length!==0?true:false">用户登录</el-button>
                  <div class="icons" @click="changeWechatLogin">
                    <div>
                    <p>微信扫码登录</p>
                    </div>
                    <div>
                      <svg t="1728206925501" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4291" width="32" height="32"><path d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z" fill="#28C445" p-id="4292"></path><path d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z" fill="#28C445" p-id="4293"></path></svg>
                    </div>
                  </div>
                </el-form-item>
              </el-form>
            </div>            
          </div>
          <div class="input_login" v-show="login_style==2">
            <div class="login_from">
              <el-form class="login_input">
                <el-form-item >
                  <el-button type="primary"  style="width: 100%;margin:0 10px" >用户登录</el-button>
                  <div class="icons" @click="changePhoneLogin">
                    <div>
                    <p>手机账号登录</p>
                    </div>
                    <div>
                      <svg t="1728207892938" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5709" width="32" height="32"><path d="M820.409449 797.228346q0 25.19685-10.07874 46.866142t-27.716535 38.299213-41.322835 26.204724-50.897638 9.574803l-357.795276 0q-27.212598 0-50.897638-9.574803t-41.322835-26.204724-27.716535-38.299213-10.07874-46.866142l0-675.275591q0-25.19685 10.07874-47.370079t27.716535-38.80315 41.322835-26.204724 50.897638-9.574803l357.795276 0q27.212598 0 50.897638 9.574803t41.322835 26.204724 27.716535 38.80315 10.07874 47.370079l0 675.275591zM738.771654 170.330709l-455.559055 0 0 577.511811 455.559055 0 0-577.511811zM510.992126 776.062992q-21.165354 0-36.787402 15.11811t-15.622047 37.291339q0 21.165354 15.622047 36.787402t36.787402 15.622047q22.173228 0 37.291339-15.622047t15.11811-36.787402q0-22.173228-15.11811-37.291339t-37.291339-15.11811zM591.622047 84.661417q0-8.062992-5.03937-12.598425t-11.086614-4.535433l-128 0q-5.03937 0-10.582677 4.535433t-5.543307 12.598425 5.03937 12.598425 11.086614 4.535433l128 0q6.047244 0 11.086614-4.535433t5.03937-12.598425z" p-id="5710"></path></svg>
                    </div>
                  </div>
                </el-form-item>
              </el-form>
            </div>            
          </div>
        </el-col>
        <el-col :span="12">
          <div class="left">
            <div class="top">
              <div class="left_top">
                <div class="logo">
                <img src="../../assets/images/code_login_wechat.png" alt="">
                </div>
                <div class="text">
                  <div>
                    <svg t="1728207693837" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4546" width="32" height="32"><path d="M474.697931 463.133036c52.537564-55.155181 119.125121-74.453712 197.466374-70.189595-1.747807-8.009418-1.814322-14.22191-4.389984-19.11843-12.712533-24.170492-22.698978-50.789757-39.787168-71.474868-102.242616-123.764791-308.057121-138.461515-427.463652-31.18935-61.691037 55.423287-87.38421 124.68986-69.739341 206.809159 11.298324 52.575426 43.588751 92.715635 85.609797 124.551714 13.697977 10.382465 15.916505 19.665899 10.030447 34.608216-7.30436 18.535145-12.809747 37.781488-19.0908 56.720839 17.596773-3.874237 31.816636-9.761318 44.911886-17.542538 30.707372-18.24555 61.189617-28.17162 98.18623-16.900925 22.337751 6.800893 47.565319 4.123924 74.762751 5.92085C405.477406 585.486688 421.574013 518.909363 474.697931 463.133036zM497.939261 319.220369c19.834744-0.284479 31.798217 10.92277 32.226982 30.178323 0.442068 19.85521-10.726296 31.997762-29.841655 32.44597-21.970384 0.51677-38.566364-12.741185-38.723953-30.930453C461.449185 333.410556 477.38411 319.510988 497.939261 319.220369zM309.594639 381.837498c-21.693068 0.073678-37.788651-13.573133-37.541011-31.828916 0.233314-17.353227 16.143679-30.628578 36.897352-30.79333 19.576871-0.150426 33.157167 13.06148 32.867572 31.983435C341.537142 369.591593 328.722278 381.778146 309.594639 381.837498z" p-id="4547"></path><path d="M835.363224 471.499587c-81.796958-78.773088-215.099986-91.444689-312.212768-29.66974-125.474736 79.81379-124.392078 243.768933 2.771113 320.735885 61.081147 36.97103 127.145795 47.321772 196.581214 28.592198 14.377452-3.879354 26.002211-2.758834 38.630832 5.067412 17.174148 10.645454 35.464723 19.495006 53.278437 29.115108 1.274016-0.950651 2.548032-1.901303 3.822049-2.852978-4.882194-17.019629-10.796904-33.842783-14.117532-51.16531-1.249457-6.507204 1.530866-15.896038 5.932106-20.968567 11.326976-13.038968 25.615401-23.515576 36.914748-36.58115C913.685034 636.613112 908.943033 542.366611 835.363224 471.499587zM589.682755 564.978609c-14.864546 0.228197-26.891464-11.264555-26.424836-25.248034 0.456395-13.707187 11.322883-23.429619 26.14752-23.38971 16.312524 0.041956 29.684066 11.452843 29.205159 24.921599C618.16239 553.809221 604.82257 564.746318 589.682755 564.978609zM737.859539 565.009308c-13.485129-0.203638-26.317389-11.747555-26.63359-23.958668-0.340761-13.07069 12.692067-24.846898 27.374464-24.735357 16.766872 0.12996 28.897144 11.084453 28.241204 25.499767C766.255263 554.683125 753.061776 565.241598 737.859539 565.009308z" p-id="4548"></path></svg>
                  </div>
                  <div>
                    微信扫一扫关注
                  </div>
                  <div>
                    "快速预约挂号"
                  </div>
                </div>
              </div>
              <div class="left_top">
                <div class="logo">
                <img src="../../assets/images/code_login_wechat.png" alt="">
                </div>
                <div class="text">
                  <div>
                    <svg t="1728207892938" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5709" width="32" height="32"><path d="M820.409449 797.228346q0 25.19685-10.07874 46.866142t-27.716535 38.299213-41.322835 26.204724-50.897638 9.574803l-357.795276 0q-27.212598 0-50.897638-9.574803t-41.322835-26.204724-27.716535-38.299213-10.07874-46.866142l0-675.275591q0-25.19685 10.07874-47.370079t27.716535-38.80315 41.322835-26.204724 50.897638-9.574803l357.795276 0q27.212598 0 50.897638 9.574803t41.322835 26.204724 27.716535 38.80315 10.07874 47.370079l0 675.275591zM738.771654 170.330709l-455.559055 0 0 577.511811 455.559055 0 0-577.511811zM510.992126 776.062992q-21.165354 0-36.787402 15.11811t-15.622047 37.291339q0 21.165354 15.622047 36.787402t36.787402 15.622047q22.173228 0 37.291339-15.622047t15.11811-36.787402q0-22.173228-15.11811-37.291339t-37.291339-15.11811zM591.622047 84.661417q0-8.062992-5.03937-12.598425t-11.086614-4.535433l-128 0q-5.03937 0-10.582677 4.535433t-5.543307 12.598425 5.03937 12.598425 11.086614 4.535433l128 0q6.047244 0 11.086614-4.535433t5.03937-12.598425z" p-id="5710"></path></svg>
                  </div>
                  <div>
                    扫一扫下载
                  </div>
                  <div>
                    "预约挂号"APP
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div>微信官方指定平台</div>
            <div>快速挂号 &nbsp;&nbsp;&nbsp; 安全放心</div>
          </div>
        </el-col>
      </el-row>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="userStore.dialogFormVisible = false">
          关闭窗口
        </el-button>
      </div>
    </template>      
    </el-dialog>    
  </div>
</template>

<script setup lang="ts">
import { User,Lock } from '@element-plus/icons-vue'
import {reqUsercode} from '../../api/hosptial/index'
import { ref,computed,watch} from 'vue'
import useUserStore from '../../store/modules/user'
import { ElMessage } from 'element-plus'
let userStore=useUserStore()
let login_style=ref<number>(1)//1为手机登录，2为微信登录
let changeWechatLogin=()=>{
  //切换微信登录页面
  login_style.value=2
  //微信登录的逻辑
  new WxLogin({
  self_redirect:true,
  id:"login_container", 
  appid: "", 
  scope: "", 
  redirect_uri: "",
    state: "",
  style: "",
  href: ""
  });  
  
}
let changePhoneLogin=()=>{
  login_style.value=1
}
//表单验证规则
let validatePass=(_: any, value: any, callback: any)=>{
  const regex = /^1[3-9]\d{9}$/;
  if (regex.test(value)&&loginParams.value.userPhone.trim()!=='') {
    callback()
  } else {
    callback(new Error('请输入正确的手机号'))
  }
}
let validatePass1=(_: any, value: any, callback: any)=>{
  if(value==''||value.trim().length==0){
    callback(new Error('验证码不能为空'))
  }else{
    callback()
  }
}
const rules =ref({
  userPhone:[{ validator: validatePass, trigger: 'blur' }],
  userComplete:[{validator: validatePass1, trigger: 'blur'}]
})

//表单收集数据
let loginParams=ref({
  userPhone:'',
  userComplete:''
})

// 倒计时的处理
let time=ref(5)//倒计时时间
let flag=ref(0)//显示倒计时与否，0为获取验证码，1为显示倒计时
let timer:any=null
//获取验证码按钮
let ValidatePhone=computed(()=>{
  const regex = /^1[3-9]\d{9}$/
  if(regex.test(loginParams.value.userPhone)){
      return false
  }
  else{
    return true
  }
})

watch([()=>flag.value],()=>{
  timer=setInterval(() => {
    if(time.value>0){
      time.value--
    }
    if(time.value==0){
      clearInterval(timer)
      flag.value=0
    }
  }, 1000);
})


//获取验证码
let getCode=async()=>{
  flag.value=1
  time.value=5
  let res=await reqUsercode(loginParams.value.userPhone)
  if(res.data.code==200){
    loginParams.value.userComplete=res.data.data
  }
}
let From=ref()
//用户登录
let comfirmLogin=async(ruleFrom:any)=>{
  try {
     await ruleFrom.validate()
     let data={
      phone:loginParams.value.userPhone,
      code:loginParams.value.userComplete
    }
    userStore.getLogin(data)
  } catch (error:any) {
      ElMessage({
        message: '输入有误，请重新输入',
        type: 'error',
      })
      console.log(error);
      
  }
}

</script>

<style scoped lang="scss">
.login{
  ::v-deep(.el-dialog__body){
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }
  .login_from{
    border: 1px solid #ccc;
    margin: 5px;
    .login_input{
      padding: 20px;
      margin-top: 10px;
        .icons{
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
    }
  }
  .left{
    .top{
      display: flex;
      margin-right: 20px;
      .left_top{
        padding-left: 30px;
        .text{
          margin-top: 10px;
          color: #aaa;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
  .bottom{
        width: 100%;
        margin:0 auto;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        margin-top: 20px;
        color: #aaa;
   }
}
</style>