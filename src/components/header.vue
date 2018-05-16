<template>
    <mt-header fixed :title="htitle">
    <!-- <div slot="left">
        <mt-button  icon="back">返回</mt-button>
    </div> -->
    <mt-button  slot="right">
      <router-link v-show="getToken() || currentPage('login')" :to="{'name':'登录'}">登录</router-link>
      <router-link v-show="getToken() || currentPage('register')" :to="{'name':'注册'}">注册</router-link>
    </mt-button>
    </mt-header>
</template>
<script>
  export default {
    props:['htitle'],
    data(){
      return{
      }
    },
    mounted:function(){
        this.$nextTick(function () {
        });
    },
    methods:{
      currentPage:function(pagename){
        return !(window.location.hash.indexOf(pagename)==-1);
      },
      getToken:function(){
        return !(this.$store.state.login.token)
      }
    }
  }
</script>
<style lang="scss" scoped>
  a{color:#fff;}
</style>

