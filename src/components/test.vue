<template>
  <div>
      <p>测试</p>
      <mt-button @click.native="handleClick">按钮</mt-button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
        goodsList:[],
        page:1,
        pageSize:8,
        sort:1,
        priceLevel:'all'
        }
    },
    created (){
      //alert("1234");
    },
    mounted: function () {
      this.$nextTick(function () {
        this.getGoodsList();
      })
    },
    methods:{
        getGoodsList:function(flag){
        var param = {
                page:this.page,
                pageSize:this.pageSize,
                sort:this.sortFlag?1:-1,
                priceLevel:this.priceLevel
            };
        axios.get("/api/goods/list",{
            params:param
            }).then((response)=>{
            var res = response.data;
            if(res.status=="0"){
                if(flag){
                    this.goodsList = this.goodsList.concat(res.result.list);

                    if(res.result.count==0){
                        this.busy = true;
                    }else{
                        this.busy = false;
                    }
                }else{
                    this.goodsList = res.result.list;
                    this.busy = false;
                }
            }else{
                this.goodsList = [];
            }
            });
        },
        handleClick:function(){
            this.$toast('hello World!');
        }
    }
}
</script>