<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'HelloWord',
  data:{
      msg: 'Welcome to Your Vue.js App123456',
      goodsList:[],
      page:1,
      pageSize:8,
      sort:1,
      priceLevel:'all'
  },
   mounted: function () {
    this.$nextTick(function () {
        this.getGoodsList();
        alert('b');
      })
  },
  methods:{
      getGoodsList:function(flag){
        alert('a');
      let param = {
            page:this.page,
            pageSize:this.pageSize,
            sort:this.sortFlag?1:-1,
            priceLevel:this.priceLevel
        };
      axios.get("goods/list",{
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
    a:function(){
      console.log("aaaaaa");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
