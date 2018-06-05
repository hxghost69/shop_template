<template>
  <div class="home" v-show="show">
        <m-header :htitle="titleMsg"></m-header>
        <m-search></m-search>
        <m-banner :bannerData="datas.bannerlist"></m-banner>
        <m-section1 :section1="goodsList"></m-section1>
        <!-- <m-section2 :section2="goodsList"></m-section2>     -->
        <section class="section2" v-if='goodsList' style="overflow: scroll;">
            <div class="title1">
                <router-link :to="{'name':'详情页'}">
                    商品1
                    <i>&gt;</i>
                </router-link>
            </div>      
            <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :autoFill="false" ref="loadmore">
                <ul class="section2-list">
                    <li v-for="k in goodsList" :key="k._id">
                    <router-link :to="{name:'详情页',params:{ id: k.productId }}">
                        <img v-lazy="'static/'+k.productImage" src="">
                        <p>测试测试测试</p>
                    </router-link>
                    <h3>{{k.productName}}</h3>
                    <p>￥{{k.salePrice}}</p>
                    </li>
                </ul>
            </mt-loadmore>
        </section>
        <m-footer></m-footer>
  </div>
</template>
<style lang="scss" scoped>
    .home{
        padding-bottom:55px;
        padding-top:40px;
    }
.title1{
    border-bottom:1px solid #ccc;
    text-align: center;
    font-size: 16px;
    position: relative;
    background-color: #ffffff;
    position:relative;
    a{
        display:inline-block;
        width:100%;
        padding: 8px 0;
    }
    i{
        position:absolute;
        right:15px;
        top:26%;
    }
}
  .section2 {
    width: 100%;
    overflow: hidden;
    background-color:#fff;
    margin-bottom:10px;
    .section2-list {
      width: 100%;
      display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      overflow: hidden;
      li {
        width: 50%;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        padding:12px 13px;
        >a {
          display: block;
          width: 100%;
          position: relative;
          img {
            display: block;
            width: 100%;
          }
          p {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: rgba(0,0,0,0.5);
            -webkit-box-sizing: border-box;
                    box-sizing: border-box;
            padding:10px 12px;
            color: #fff;
          }
        }

        >h3 {
          padding-top: 9px;
          text-align: center;
          padding-bottom: 9px;
        }
        >p {
          padding-bottom: 5px;
          color: #b4282d;
          text-align: center;
        }
      }
    }
    .section2-banner {
      width: 100%;
      display: block;
      img {
        display: block;
        width: 100%;
      }
    }
  }    
</style>

<script>
import footer from '../components/common/footer';
import search from '../components/common/search';
import header from '../components/common/header';
import banner from '../components/common/banner';
import goodsSection1 from '../components/home/goodsSection1';
import goodsSection2 from '../components/home/goodsSection2';
import axios from 'axios'
import { Indicator } from 'mint-ui';
export default {
    components: {
        'm-header':header,
        'm-footer':footer,
        'm-search':search,
        'm-banner':banner,
        'm-section1':goodsSection1,
        'm-section2':goodsSection2
    },
    data(){
        return{
            msg:'abc',
            titleMsg:'商城主页',
            show:false,
            datas:{
                bannerlist:[
                    {
                        id:1,
                        imgPath:'https://dummyimage.com/800x400/ffbe19/fafafa'
                    },
                    {
                        id:2,
                        imgPath:'https://dummyimage.com/800x400/ffae63/fafafa'
                    },
                    {
                        id:3,
                        imgPath:'https://dummyimage.com/800x400/84cc06/fafafa'
                    },

                ]
            },
            goodsList:[],
            allLoaded: false,
            sortFlag:true,
            page:1,
            pageSize:8,
            priceChecked:'all'
        }          
    },
    mounted:function(){
        this.$nextTick(function () {
            //this.init();
            this.getList();
        });
    },
    methods:{
        init:function(){
            this.$api({
            method: 'post',
            url: '/index'
            }).then((response) => {
                console.log(response);
            console.log(response.data);
            }).catch(function(error) {
            console.log(error);
            })
        },
        getList(flag){
            var param={
                page:this.page,
                pageSize:this.pageSize,
                sort:this.sortFlag?1:-1,
                priceLevel:this.priceChecked
            };
            Indicator.open('加载中...');
            axios.get("/api/goods/list",{
                params:param
            }).then((response)=>{
                var res = response.data;
                if(res.status=="0"){
                  if(flag){
                      this.goodsList = this.goodsList.concat(res.result.list);
                      if(res.result.count==0){
                         // this.busy = true;
                         this.allLoaded = true;
                      }else{
                         // this.busy = false;
                         this.allLoaded = false;
                      }
                  }else{
                      this.goodsList = res.result.list;
                      console.log(this.goodsList);
                      //this.busy = false;
                      this.allLoaded = false;
                  }
                }else{
                  this.goodsList = [];
                }
                Indicator.close();
                this.show=true;                               
            })
        },
        loadTop:function(){
            console.log("下拉");
        },
        loadBottom:function(){
            console.log("上拉");
            // 加载更多数据
            // this.allLoaded = true;// 若数据已全部获取完毕
            // this.$broadcast('onBottomLoaded', id);
            this.allLoaded = true;
            //（allLoaded：为false时，说明你还没有加载完，可以继续加载；为true时，说明你已经加载完了，不能再继续加载
            // this.busy = true;
            setTimeout(() => {
                this.page++;
                this.getList(true);
                this.$refs.loadmore.onBottomLoaded();
            }, 500);            
        }
    }
}
</script>
