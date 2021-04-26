<template>
<div>
  <navbar class="center" >  <div  slot="center">购物车({{cartCounter}})</div></navbar>  
</div>
</template>
<script>
 import Navbar from 'components/content/navBar/Navbar'
import {mapGetters} from 'vuex'
export default {
  components: { Navbar },
    name:'CartNavBar',
    computed:{
        ...mapGetters(['cartList','cartCounter'])
    }
}
</script>
<style scoped>
 .center {
        font-size: 24px;
        color: #fff;
        background-color: var(--color-tint);
    }
</style>