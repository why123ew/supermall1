<template>
    <swiper class="detail-swiper">
        <swiper-item :key="index" v-for="(item,index) in swiperImage">
            <img :src="item">
        </swiper-item>
    </swiper>
</template>

<script>
    import {
        Swiper,
        SwiperItem
    } from 'components/common/swiper/index'


    export default {
        name: "DetailSwiper",
        data() {
            return {
            swiperImage:['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yao51.com%2Fjiankangtuku%2Fearshahcx.jpeg&refer=http%3A%2F%2Fimg.yao51.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621864472&t=eb4e681a878a64c0e7e99cc989804229',
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn%2Fw920h1329%2F20180313%2F0178-fyscsmv2570574.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621864472&t=1b765fabfecca57369a19bb272ead287',
            'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn13%2F496%2Fw555h741%2F20180807%2F3707-hhkuskt0427601.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621864472&t=d4756ef16bfe3538f52119a46cde6d62']
            }
        },
        props: {
            // swiperImage: {
            //     type: Array,
            //     default () {
            //         return []
            //     }
            // }
            
        },
        components: {
            Swiper,
            SwiperItem,
        }
    }
</script>

<style scoped>
    .detail-swiper {
        height: 300px;
    }
</style>