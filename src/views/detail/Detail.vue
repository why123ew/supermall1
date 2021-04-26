<template>
    <div id="detail">
       <!-- <ul>
        <li v-for="item in $store.state.cartlist">{{item}}</li>  
        </ul> -->
        <detail-nav-bar @navClick='navclick($event)' ref="navBar">   
        </detail-nav-bar  >
        <scroll ref="scroll" class="content2" :probe-type='3'   :pull-up-load="true"  @scroll="scroll2($event)" >
        <detail-swiper ref="swiper">
        </detail-swiper>
        <detail-goods ></detail-goods>
        <detail-show-info></detail-show-info>
        <detail-goods-info  @GoodsListInfoImgLoad="imgLoad"></detail-goods-info>
        <detail-param-info ref="param"></detail-param-info>
        <detail-comment-info ref="comment" ></detail-comment-info>
        <goods-list ref="recommends" :goods="recommends"></goods-list>
        </scroll>
        <back-top @click.native='backtop' v-show='isshow'></back-top>
        <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
         <!-- <toast ref="toast"></toast> -->
    </div>
</template>
<script>
 import DetailNavBar from './detailchild/DetailNavBar'
  import DetailSwiper from './detailchild/DetailSwiper'
  import DetailGoods from './detailchild/DetailGoods'
 import DetailShowInfo from './detailchild/DetailShowInfo'
import DetailGoodsInfo from './detailchild/DetailGoodsInfo'
 import DetailParamInfo from './detailchild/DetailParamInfo'
  import DetailCommentInfo from './detailchild/DetailCommentInfo'
  import GoodsList from 'components/content/goods/GoodList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backtop/BackTop'
   import DetailBottomBar from './detailchild/DetailBottomBar'
  //  import Toast from 'components/common/toast/Toast'
  
 import {
        getRecommend
    } from 'network/detail'
    import { debounce } from 'common/utils.js'
    import {mapActions} from 'vuex'
export default {
    name:'Detail',
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailGoods,
      DetailShowInfo,
      DetailGoodsInfo,
      DetailParamInfo,
       DetailCommentInfo,
        GoodsList,
       Scroll,
        BackTop,
        // Toast,
        DetailBottomBar,
        checked:true,
        count:0
        

    },
    
    data(){
      return{
     id:null,
    swiperImage: [],
    recommends:[],
      isshow:false,
      scrollY:[],
      y:0,
      currentindex:0,
      oldPrice:'￥99',
      title:'2021秋季韩版女装',
      swiperImage:['https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=128340015,236262769&fm=11&gp=0.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2877070696,4156893206&fm=224&gp=0.jpg'],
      desc:'你的运动套装，也可以一起承包了~'


    } 

    },
   
    created(){
        this.id=this.$route.query.iid;
      console.log(this.$route.query.iid);
          getRecommend().then(res => {
                // console.log(res);
                const data = res.data
                this.recommends = res.data.list
            })
    }, 
    methods:{
      ...mapActions(['addCart']),
        imgLoad()
        {
       this.$refs.scroll.refresh()
        },
      scroll2(position){
      //  console.log(position);
       this.isshow=(-position.y)>1000;
       this.y=-this.$refs.scroll.getscrolly();
      //  console.log(this.y);
      // console.log(this.scrollY);
       for(let i=0;i<this.scrollY.length-1;i++){
          if (this.currentindex!==i && ((i < this.scrollY.length-1) && (this.y >= this.scrollY[i] && this.y < this.scrollY[i + 1])) ){
              this.currentindex = i
              // console.log(11);
              // console.log(i);
              // console.log(this.$refs.navBar);
                  this.$refs.navBar.currentIndex = this.currentindex

          }
       }
      },
      backtop(){
        this.$refs.scroll.backtop1(0,0)
      },
      navclick(index){
      this.$refs.scroll.backtop1(0,-this.scrollY[index])
      },
      // loadMore(){
      //   console.log(上拉加载更多);
        //  this.getHomeGood(this.currentIndex)
      addToCart(){
        // console.log(11);
        const product = {};
                // console.log(this.goods);
                console.log(this.id);
                product.iid = this.id;
                console.log(product.iid );
                product.newPrice = this.oldPrice;
                product.title = this.title;
                product.imgURL = this.swiperImage[0];
                 product.desc = this.desc;
                  product.checked = this.checked;
                   product.count = this.count;
                   console.log(this.$toast);
              //  this.$store.dispatch('addCart',product)
            this.addCart(product).then((res)=>{
              return this.$toast.show(res,1000)
              console.log(this.$toast);
            })
                 
      }

    },
    mounted(){
      const newRefresh1 = debounce(this.$refs.scroll.refresh,1000);
      this.$bus.$on('DetailItemImageLoad',()=>{
      // this.$refs.scroll.refresh
 newRefresh1()

      })
      this.scrollY.push(this.$refs.swiper.$el.offsetTop,this.$refs.param.$el.offsetTop,this.$refs.comment.$el.offsetTop,this.$refs.recommends.$el.offsetTop,Number.MAX_VALUE)
      // console.log(this.scrollY);

    }
    }
</script>
<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content2{
  position: absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>