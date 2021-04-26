<template>
    <div  class="goods-info">
        <div class="info-desc clear-fix">
        <div class="start">
        </div>
        <div class="desc">很符合度防护护肤</div>
        <div class="end"></div>
        </div>
        <div class="info-key"></div>
        <div class="info-list">
        <img v-for="(item, index) in detailImage" :key="index" :src="item" @load="itemImgLoad" >
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailGoodsInfo",
        data() {
            return {
                detailImage:['https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3940338250,3613852189&fm=26&gp=0.jpg',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.t-chs.com%2FtuhsJDEwLmFsaWNkbi5jb20vdGZzY29tL2k0LzY3MTIwODMwMy9UQjJqSklnbmY5VEJ1Tmp5MXpiWFhYcGVwWGFfISE2NzEyMDgzMDMkOQ.jpg&refer=http%3A%2F%2Fwww.t-chs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621921627&t=c3ab634fea26b57a0b3281dce04b19bb',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Faims.qm41.com%2Fimgextra%2Fqm41%2F20170729%2F597c0ab30cb33.jpg&refer=http%3A%2F%2Faims.qm41.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621921683&t=eb324874a93c123ddb5c8cd7a00fb374',
                'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3839942795,1644739767&fm=26&gp=0.jpg',
                'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=788674157,3281447656&fm=26&gp=0.jpg',
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.62a.net%2Ftbimg%2Fimg%2Fimgextra%2Fi1%2F2001613724%2FTB2.OxhaH8kpuFjy0FcXXaUhpXa_%21%212001613724.jpg&refer=http%3A%2F%2Fwww.62a.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621921764&t=c08f7c9dc9a7c61556e53cc3639dc3b9'],
                // counter:0,
                // imageLength:0
            }
        },
        props: {
            // detailInfo: {
            //     type: Object,
            //     default () {
            //         return {}
            //     }
            // }
        },
        methods: {
            itemImgLoad() {
               
                this.$emit('GoodsListInfoImgLoad')
            }}
        }
    
</script>

<style scoped>
    .goods-info {
        padding: 20px 0;
        border-bottom: 5px solid #f2f5f8;
    }
    
    .info-desc {
        padding: 0 15px;
    }
    
    .info-desc .start,
    .info-desc .end {
        width: 90px;
        height: 1px;
        background-color: #a3a3a5;
        position: relative;
    }
    
    .info-desc .start {
        float: left;
    }
    
    .info-desc .end {
        float: right;
    }
    
    .info-desc .start::before,
    .info-desc .end::after {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #333;
        bottom: 0;
    }
    
    .info-desc .end::after {
        right: 0;
    }
    
    .info-desc .desc {
        padding: 15px 0;
        font-size: 14px;
    }
    
    .info-key {
        margin: 10px 0 10px 15px;
        color: #333;
        font-size: 15px;
    }
    
    .info-list img {
        width: 100%;
    }
</style>