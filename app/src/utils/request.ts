//二次封装axios
// 目的1：利用请求拦截器和响应拦截器
// 目的2：请求拦截器，一般可以在请求头中携带公共参数：token
// 目的3：响应拦截器，可以简化服务器返回的数据，处理http网路错误
import axios from 'axios'

import { ElMessage } from 'element-plus'

//创建一个axios的实例:设置基础的路径、超时的时间
const requests=axios.create({
  baseURL: '/api',
  timeout: 5000,//超时的时间设置
  // headers: headers
})

// 添加请求拦截器
//config配置对象上有一个重要的东西就是headers,可以通过请求头来拦截
requests.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
requests.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    let status=error.response.status
    switch (status) {
      case 404:
        ElMessage({
          type:"error",
          message:error.message
        })
      break;
      case 500|501|502|503|504:
        ElMessage({
          type:"error",
          message:error.message
        })
      break;      
      case 401:
        ElMessage({
          type:"error",
          message:error.message
        })
      break;    
      default:
        break;
    }
    return Promise.reject(error);
  });

export default   requests;