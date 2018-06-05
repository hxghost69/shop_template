<template>
  <div id="app">
    <router-view/>
    <m-loading v-show="showLoading"></m-loading>
  </div>
</template>
<script>
import Loading from '@/components/common/loading'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components:{
    'm-loading':Loading
  },
  computed:{
    showLoading(){
      return this.$store.state.detail.showLoading
       //return ...mapState(['showLoading'])

    }    
  },
  mouted(){
    this.checkLogin();
  },
  methods:{
      checkLogin(){
      this.$axios.get("/api/users/checkLogin").then((response)=>{
          var res = response.data;
          var path = this.$route.pathname;
          if(res.status=="0"){
            
          }else{
            if(this.$route.path!="/login"){
              this.$router.push("/login");
            }
          }
      });
    }
  }
}
</script>

