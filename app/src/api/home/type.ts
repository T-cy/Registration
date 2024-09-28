export interface ResponData{
  code:number,
  message:string,
  ok:boolean,
}


export interface Hosptial{
  id:string,
  createTime:string,
  updateTime:string,
  isDeleted:number,
  param:{
    hostypeString: string,
    fullAddress: string,
  },
  hoscode: string,
  hosname: string,
  hostype: number,
  provinceCode: string,
  cityCode:string,
  districtCode: string,
  address: string,
  logoData:string,
  intro: string,
  route: string,
  status: number,
  bookingRule: {
    cycle: number,
    releaseTime: string,
    stopTime: string,
    quitDay: number,
    quitTime: string,
    rule: string[]
  }  
}

export type Content=Hosptial[]

//获取已有接口返回的数据类型
export interface HosptialResponDate extends ResponData{
  data:{
    content:Content,
    pageable: {
      sort: {
        sorted: boolean,
        unsorted: boolean,
        empty: boolean
      },
      pageNumber: number,
      pageSize: number,
      offset: number,
      paged: boolean,
      unpaged: boolean
    },
    totalPages: number,
    totalElements: number,
    last: boolean,
    first: boolean,
    sort: {
      sorted: boolean,
      unsorted: boolean,
      empty: boolean
    },
    numberOfElements: number,
    size: number,
    number: number,
    empty: boolean,
  }
  }

  //医院等级和地区数据的ts类型
  export interface HosptialLevelAndRegion{
    id:number,
    createTime:string,
    updateTime:string,
    isDeleted:number,
    params:{},
    name:string,
    value:string,
    dictCode:string,
    hasChildren:boolean,
  }

 export type  HosptialLevelAndRegionArr=HosptialLevelAndRegion[]

 //获取等级或者医院接口的类型
 export interface HosptialLevelAndRegionResponData extends ResponData{
  data:HosptialLevelAndRegionArr
 }