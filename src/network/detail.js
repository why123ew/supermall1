import { request } from './request.js'
export function getDetailData(iid) {
    return request({
        url: '/detail',
        params: { iid }
    })
}

export function getRecommend() {
    return request({
        url: '/recommend'
    })
}
// export class Goods {
//     constructor(itemInfo, columns, services) {
//         this.title = itemInfo.title;
//         this.newPrice = itemInfo.price;
//         this.oldPrice = itemInfo.oldPrice;
//         this.discount = itemInfo.discountDesc;
//         this.columns = columns;
//         this.services = services;
//     }
// }