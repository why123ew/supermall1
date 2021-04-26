<template>
    <div class="param-info" >
        <!-- <table v-for="(tables, index) in tables1" -->
               <!-- class="info-size" :key="index"> -->
               <table class="info-size">
          <tr v-for="(tr, indey) in tables1" :key="indey">
            <td v-for="(td, index) in tr" :key="index">{{td}}</td>
          </tr>
        </table>
        <table class="info-param">
          <tr v-for="(info, index) in tables2" :key="index">
            <td class="info-param-key">{{info.key}}</td>
            <td class="param-value">{{info.valu}}</td>
          </tr>
        </table>
        <!-- <div class="info-img" v-if="paramInfo.info.image">
          <img :src="paramInfo.image" alt="">
        </div> -->
      </div>
</template>

<script>
    export default {
        name: "DetailParamInfo",
        data() {
            return {
               tables1:[["尺寸",'M','L','XL','XXL'],["衣长",'69','65','66','43'],["胸围",'45','56','65','34'],["袖长",'45','56','65','34']] ,
               tables2:[{key:'图案',valu:'宫廷复古图、民族复古图'},{key:'厂名',valu:'华府有限公司'},{key:'颜色',valu:'黑白拼接'},{key:'袖型',valu:'常规袖'},
               {key:'上衣厚度',valu:'适中'},{key:'尺码',valu:'XM,L,M,XXL'},{key:'衣长',valu:'常规款'},{key:'版型',valu:'宽松'},{key:'季节',valu:'春秀'},
               {key:'厂址',valu:'广东省广州市'},{key:'材质',valu:'棉'},{key:'领型',valu:'圆领'},{key:'元素',valu:'画料拼接'},{key:'风格',valu:'原宿'}
               ]
            }
        },
        props: {
            paramInfo: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
    }
</script>

<style scoped>
    .param-info {
        padding: 20px 15px;
        font-size: 14px;
        border-bottom: 5px solid #f2f5f8;
    }
    
    .param-info table {
        width: 100%;
        border-collapse: collapse;
    }
    
    .param-info table tr {
        height: 42px;
    }
    
    .param-info table tr td {
        border-bottom: 1px solid rgba(100, 100, 100, .1);
    }
    
    .info-param-key {
        /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
        width: 95px;
    }
    
    .info-param {
        border-top: 1px solid rgba(0, 0, 0, .1);
    }
    
    .param-value {
        color: #eb4868
    }
    
    .info-img img {
        width: 100%;
    }
</style>