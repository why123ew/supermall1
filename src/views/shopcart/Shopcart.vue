<template>
<div class="shop-cart">
  <cart-nav-bar></cart-nav-bar>  
  <cart-list></cart-list>
   <cart-bottom :cart-list="cartList" ></cart-bottom>

</div>
</template>
<script>

import CartNavBar from './shopchild/CartNavBar'
import CartList from './shopchild/CartList'
import CartBottom from './shopchild/CartBottom'

import {mapGetters} from 'vuex'
export default {
  components: {
      CartNavBar,
      CartList,
       CartBottom

   },
   computed:{
        ...mapGetters(['cartList','cartCounter'])
    },
    name:'Shopcar',
    
}
</script>
<style scoped>
.shop-cart{
    height: 100vh;
}
</style>