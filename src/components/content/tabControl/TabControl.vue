
<template>
    <div id="tab-control" >
        <div class="tab-control-item" :key="index" v-for="(item,index) in control" 
        @click="xuan(index)" :class="{active:index==curenindex }">
<span>{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'TabControl',
    props:{
control:{
    type:Array,
    default(){
        return []
    }
}
    },
    data(){
    return{
     
     curenindex:0
     
     }
    },
    methods:{
        xuan(index){
        this.curenindex=index
        this.$emit('tabclick',index)
        }
    }
}

</script>
<style scoped>
 #tab-control {
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
    }
    
    .tab-control-item {
        flex: 1;
    }
    
    .tab-control-item span {
        padding: 5px;
        
    }
     .active {
        color: var(--color-high-text);
      
    }
    
    .active span{
          border-bottom: 3px solid var(--color-tint);
    }
</style>