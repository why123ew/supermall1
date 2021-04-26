<template>
<div id="detail-nav-bar">
    <navbar class="wo">
        <div slot="left" class="left" @click="back" >
            <img src="~assets/img/common/back.svg">
        </div>
        <div slot="center" class="center">
            <div id="center-item" 
            :class="{active:index === currentIndex}" 
            :key="index" 
            v-for="(item,index) in title"
            @click="itemClick(index)">{{item}}</div>
        </div>
        <div slot="right" class="right"></div>

    </navbar>
</div>
</template>

<script>
    import Navbar from 'components/content/navBar/Navbar'

    export default {
        name: "DetailNavBar",
        data() {
            return {
                title: ['商品', '参数', '评论', '推荐'],
                currentIndex: 0,
            }
        },
        components: {
            Navbar
        },

        methods: {
            // leftClick() {
            //     this.$router.back()
            // },
            itemClick(index) {
                this.currentIndex = index;
                this.$emit('navClick', index)
            },
            back(){
                this.$router.back()
            }

        }
    }
</script>

<style scoped>
.wo{
    position: relative;
    z-index: 99;
    background-color: #fff;
}
    .center {
        display: flex;
        z-index: 10;
    }
    
    #center-item {
        flex: 1;
        /* margin-top: 10px; */
    }
    
    .left {
        width: 60px;
    }
    
    .left img {
        margin-top:8px;
    }
    
    .right {
        width: 60px;
    }
    
    .active {
        color: var(--color-high-text);
    }
</style>