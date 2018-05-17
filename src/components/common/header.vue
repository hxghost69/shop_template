<template>
    <mt-header fixed :title="htitle">
    <!-- <div slot="left">
        <mt-button  icon="back">返回</mt-button>
    </div> -->
    <mt-button  slot="right">
      <router-link v-show="flag" :to="{'name':'登录'}">登录</router-link>
      <router-link v-show="flag" :to="{'name':'注册'}">注册</router-link>
    </mt-button>
    </mt-header>
</template>
<script>
  export default {
    props:['htitle'],
    data(){
      return{
        flag:true
      }
    },
    mounted:function(){
        this.$nextTick(function () {
          this.isshow();
        });
    },
    methods:{
      isshow:function(){
        //1.当前登录页，不管登录了没，都不显示登录按钮。
        //2.当前页面不是登录页，没登录，显示按钮。登录了不显示按钮。
        if(window.location.hash.indexOf('login')!=-1){
          this.flag=false;
        }else{
          if(this.$store.state.login.token){
            this.flag=false;
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  a{color:#fff;}
</style>

