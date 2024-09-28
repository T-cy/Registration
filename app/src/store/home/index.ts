import { defineStore } from "pinia";
import { getHasHosptial } from '../../api/home/index'
export const useHosptialStore = defineStore("hosptial", {
  //真正存储数据的地方
  state() {
    return {
      hosptialArr:[],
    };
  },
  //方法
  actions:{

  },
  //计算属性getter
  getter:{

  }
});