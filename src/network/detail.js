 import {request} from "./request";

 export function getDetail(iid){
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class Goods {
     constructor(itemInfo, cloumns, services) {
         this.title = itemInfo.title
         this.desc = itemInfo.desc
         this.newPrice = itemInfo.price
         this.oldPrice = itemInfo.oldPrice
         this.discount = itemInfo.discountDesc
         this.columns = cloumns
         this.services = services
         this.realPrice = itemInfo.lowNowPrice
     }
}