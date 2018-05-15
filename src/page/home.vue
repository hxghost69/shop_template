<template>
  <div class="home">
      <p-header :title="titleMsg"></p-header>
      <m-header></m-header>
      <m-banner></m-banner>
      <m-footer></m-footer>
  </div>
</template>
<script>
import footer from '../components/footer';
import header from '../components/mheader';
import pheader from '../components/header';
import banner from '../components/banner';
    export default {
        components: {
           'p-header':pheader,
           'm-footer':footer,
           'm-header':header,
           'm-banner':banner
        },
        data(){
            return{
                 msg:'abc',
                 titleMsg:'商城主页'
            }          
        },
        mounted:function(){
            this.$nextTick(function () {
                this.init();
            });
        },
        methods:{
            init:function(){
                console.log("init");
            }
        }
    }

</script>
