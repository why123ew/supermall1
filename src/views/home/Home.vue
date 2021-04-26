<template>
    <div id="home">
        <nav-bar class="nav" >
            <div slot="center" class="fashion">小时尚</div>
        </nav-bar>
        <scroll class="content1" :probe-type='3' :pull-up-load="true" ref="scroll" 
         @scroll="contentScroll($event)"
         @pullingUp="loadMore">
       <home-swiper :banners="banner" @swiperImagLoad='swiperImagLoad'></home-swiper>      
    <reccoment :recommends="recommends"></reccoment>
   <feature></feature>
   <tab-control :control="control" @tabclick="tabclick($event)" class="tab" ref='tabControl1'></tab-control>
   <good-list :goods="showGoods"></good-list>
        </scroll>
        <back-top @click.native='backtop' v-show='isshow'></back-top>
    </div>
</template>
<script>
import  Feature from './homechild/Feature'
import  Reccoment from './homechild/Reccoment'
import  HomeSwiper from './homechild/HomeSwiper'
import NavBar from 'components/content/navBar/Navbar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from 'components/content/goods/GoodList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backtop/BackTop'

import {getHomeMultidata,getHomeGoods} from 'network/home.js'
import { debounce } from 'common/utils.js'



export default {
    name:'Home',
    components:{
Feature,
Reccoment,
HomeSwiper,
NavBar,
TabControl,
 GoodList,
Scroll,
 BackTop 
    },
 
         data(){
        return{
       banner:[],
        recommends: [],
        control:['流行','新品','精选'],
        goods:{
            'pop':{
                    page:0,
                    list:[]         
            },
            'new':{
                    page:0,
                    list:[]         
            },
            'sell':{
                    page:0,
                    list:[]         
            }
        },
           currentIndex: 'pop',
           isshow:false,
        //    newRefresh:null,
        //    temImgListend:null,
           tabControlTop: 0,
        //    probeType:3,
        //    pullUpLoad:true
        saveY:0
        }

        
    },
created(){
     this.getHomeMultidata();
     this.getHomeGood('pop');
      this.getHomeGood('new');
     this.getHomeGood('sell');

 },

 activated() {
            //跳转到vue活跃时的滚动的高度
            this.$refs.scroll.backtop1(0, this.saveY, 0)
            this.$refs.scroll.refresh()
        },
        deactivated() {
            //获得当前页面高度
            this.saveY = this.$refs.scroll.getscrolly()

            //取消接收的刷新页面高度信息
            // this.$bus.$off('itemImageLoad', this.itemImgListend)
        },
mounted(){
const newRefresh = debounce(this.$refs.scroll.refresh,1000);
 this.$bus.$on('itemImageLoad',()=>{
     newRefresh()
    // this.$refs.scroll.
    // this.$refs.scroll.refresh()
     
 } );
// wiperImagLoad()
// {
// console.log(11);
// this.newRefresh()
// }},
},

 computed: {
            showGoods() {
                return this.goods[this.currentIndex].list
            },

        },



 methods:{
getHomeMultidata(){
    getHomeMultidata().then(res=>{
        // console.log(res);
       this.banner=res.data.banner.list;
       this.recommends = res.data.recommend.list;

    })
    
},
getHomeGood(type){
const page=this.goods[type].page+1
getHomeGoods(type,page).then(res=>{
    // console.log(res);
    this.goods[type].list.push(...res.data.list)
    this.goods[type].page+=1
      this.$refs.scroll.scroll.finishPullUp()
})
},
tabclick(index){
switch(index){
    case 0 : this.currentIndex='pop'
    break;
    case 1 : this.currentIndex='new'
    break;
    case 2 : this.currentIndex='sell'

};
},
contentScroll(position){
    // console.log(position);
    this.isshow=(-position.y)>1000
},
loadMore(){
    this.getHomeGood(this.currentIndex)
    // console.log('上拉加载更多');
},
backtop(){
    this.$refs.scroll.backtop1(0,0)
},
swiperImagLoad() {
                // console.log(this.contentScroll());
                this.$refs.scroll.refresh()
                this.tabControlTop = this.$refs.tabControl1.$el.offsetTop;
            },
 }      
}
  
</script>
<style scoped>
 .fashion{
   
     font-size: 20px;
     width: 100%;
    
        color: #fff;
        
    }
     #home {
        height: 100vh;
        position: relative;
    }
    .nav{
        position: fixed;
      background-color: var(--color-tint);
    }
    .content1 {  
        /* height: calc(100%-93px); */
         position: absolute;
        overflow: hidden;

        /* margin-top: 44px;  */
       
        top: 44px;
        bottom:49px;
        left: 0;
        right: 0;
    } 
    /* .tab{
        position: sticky;
        top: 49px;
    }
    .fas{
        position: fixed;
        top: 0;
    } */
</style>