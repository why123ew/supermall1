<template>
    <div  class="base-info">
      <div class="info-title">2018春季新款八色纯色时尚简约韩范纯棉学生休闲百搭基础纯色T恤上衣</div>
      <div class="info-price">
        <span class="n-price">￥39.00</span>
        <span class="o-price">￥98.00</span>
        <span v-if="goods.discount" class="discount">今日特价</span>
      </div>
      <div class="info-other">
        <span>销售12894</span>
        <span>收藏234人</span>
        <span>退货补运费</span>
      </div>
      <div class="info-service">
        <span class="info-service-item" v-for="(item,index) in serve" :key="index">
        
          <span>{{item}}</span>
        </span>
      </div>
    </div>
  </template>

<script>
export default {
     name: "DetailGoods",
        props: {
            goods: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        data(){
            return{
                serve:['7天无理由退款','72小时内发货']
            }
        }
}
</script>

<style scoped>
    .base-info {
        margin-top: 15px;
        padding: 0 8px;
        color: #999;
        border-bottom: 5px solid #f2f5f8;
    }
    
    .info-title {
        color: #222
    }
    
    .info-price {
        margin-top: 10px;
    }
    
    .info-price .n-price {
        font-size: 24px;
        color: var(--color-high-text);
    }
    
    .info-price .o-price {
        font-size: 13px;
        margin-left: 5px;
        text-decoration: line-through;
    }
    
    .info-price .discount {
        font-size: 12px;
        padding: 2px 5px;
        color: #fff;
        background-color: var(--color-high-text);
        border-radius: 8px;
        margin-left: 5px;
        /*让元素上浮一些: 使用相对定位即可*/
        position: relative;
        top: -8px;
    }
    
    .info-other {
        margin-top: 15px;
        line-height: 30px;
        display: flex;
        font-size: 13px;
        border-bottom: 1px solid rgba(100, 100, 100, .1);
        justify-content: space-between;
    }
    
    .info-service {
        display: flex;
        justify-content: space-between;
        line-height: 60px;
    }
    
    .info-service-item img {
        width: 14px;
        height: 14px;
        position: relative;
        top: 2px;
    }
    
    .info-service-item span {
        font-size: 13px;
        color: #333;
    }
</style>