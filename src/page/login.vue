<template lang="html">
  <div class="login">
    <m-header :htitle="title"></m-header>
    <section>
      <mt-field label="账号" placeholder="请输入账号" type = "text" v-model="account" :disableClear = '!toggle'></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password" :readonly='!toggle' :disableClear = '!toggle'>
      </mt-field>
      <p class="tip">Tip :账号admin,密码:123456</p>
    </section>
    <mt-button type="primary"  size="large" @click="login" v-if='toggle'>登录</mt-button>
    <mt-button type="primary"  size="large" @click="logout" v-else>退出登录</mt-button>
  </div>
</template>
<script>
import header from '../components/common/header';
import { Toast } from 'mint-ui'
import axios from 'axios'
export default {
  components: {
    'm-header':header
  },
  data(){
    return {
      title:'登录页',
      account:'admin',
      password:'123456',
      toggle:!this.$store.state.login.token
    }
  },
  methods:{
    // 登录
    login(){
      if(this.account!=="" && this.password!=="") {
        axios.post("/api/users/login",{
          userName:this.account,
          userPwd:this.password
        }).then((response)=>{
            let res = response.data;
            if(res.status=="0"){
              this.toggle = false;
              this.$store.commit('CHANGE_TOKEN',1);
              localStorage.setItem('CHANGE_TOKEN',1);
            }else{
              Toast('网络异常...');
            }
        });
        setTimeout(()=>{
          if(this.$route.query.redirect == "cart") {
            this.$router.push({
              path: "/cart"
            })
          }else {
            this.$router.push({
              path: "/user"
            })
          }
        },300);
      }else {
        Toast('账号密码不能为空');
      }
    },
    //退出登录
    logout(){
      axios.post("/api/users/logout").then((response)=>{
          let res = response.data;
          if(res.status=="0"){
            Toast('退出登录成功');
            this.$store.commit('CHANGE_TOKEN',0);
            localStorage.removeItem('CHANGE_TOKEN');
            this.toggle = true;
            this.account = '';
            this.password = '';            
          }
      })
    }
  }
}

</script>

<style lang="scss" scoped>
.login {
  padding-top:40px;
  >section {
    .tip {
      padding: 6vw 3vw;
      color:rgb(224, 145, 71);
      letter-spacing: 2px;
      font-size: 16px;
    }
  }
}
</style>
