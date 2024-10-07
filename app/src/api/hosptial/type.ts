export interface ResonData{
  code: number,
  message: string,
  ok: boolean
}

//医院详情的数据
export interface HosptialDeatail{
    "bookingRule": {
      "cycle": number,
      "releaseTime": string,
      "stopTime": string,
      "quitDay": number,
      "quitTime": string,
      "rule": string[]
    },
    "hospital": {
      "id": string,
      "createTime": string,
      "updateTime": string,
      "isDeleted": number,
      "param": {
        "hostypeString": string,
        "fullAddress": string
      },
      "hoscode": string,
      "hosname": string,
      "hostype": string,
      "provinceCode":string,
      "cityCode": string,
      "districtCode": string,
      "address": string,
      "logoData":string,
      "intro": null,
      "route":string,
      "status": number,
      "bookingRule": null
    }  
}

//医院详情返回的接口的数据类型
export interface HosptialDetailResponDate extends ResonData{
  data:HosptialDeatail
}