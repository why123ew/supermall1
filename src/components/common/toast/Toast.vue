<template>
    <div id="toast" v-show="isshow" class="toast">
    <div >{{message}}</div>
    </div>
</template>
<script>
export default {
    name:'Toast',
    data(){
        return{
           message:null,
           isshow:false,
           duration:0
        }
    },
    methods:{
        show(message,duration){
          this.message=message,
          this.isshow=true

          setTimeout(()=>{
              this.isshow=false;
              this.message=''
          },duration)
        }
    }
}
</script>
<style scoped>
 .toast {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 8px 10px;
        background-color: rgba(0, 0, 0, .7);
        color: #fff;
        z-index: 9999;
 }
</style>