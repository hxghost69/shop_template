<template>
  <div class="detail">
        <m-header :htitle="title"></m-header>
        <m-banner :bannerData="datas.bannerlist"></m-banner>
        <div class="goodsdt">     
            <section class="chose">
                <div class="chose-view">
                    <h1 class="chose-view-title">
                        iPhoneX~~
                        <span>(已选 土豪金-256G)</span>
                    </h1>
                    <span>8888元</span>
                    <p class="chose-view-intro">机不可失，时不再来。大降价</p>
                </div>
                <!-- 添加空函数 解决Safari浏览器 :active无效 -->
                <div class="chose-mychosed" ontouchstart="">
                    <div class="colChose">
                        <span class="active">土豪金</span>
                        <span class="">啥啥银</span>
                        <span class="">喜庆红</span>
                    </div>
                    <div class="sizeChose" >
                        <span class="active">256G</span>
                        <span class="">128G</span>
                        <span class="">64G</span>
                    </div>
                </div>
            </section>  
            <div class="content">
                <div class="tab">
                    <span :class="{'active':tabState}" @click="tabState=true;">商品详情</span>
                    <span  :class="{'active':!tabState}" @click="tabState=false;">参数</span>
                </div>
                <div class="gdetail" v-show="tabState">
                    <h2>具体详情</h2>
                    <p>反正就是。。很多图片</p>
                </div>
                <div class="attr" v-show="!tabState">
                    <h2>参数</h2>
                    <p>反正还是有很多图片</p>
                </div>
            </div> 
            <div class="addCart">
                <router-link :to="{name:'首页'}">首页</router-link>
                <div class="add"  @click="butEvent"><span >加入购物车</span></div>
                <router-link :to="{name:'购物车'}">购物车</router-link>
            </div>         
        </div>
        <m-model ref="confirm" type="confirm" isHeadShow="true" @confirmEventf="confirmBtnEventc" confirmEventt="confirmBtnEvent" >
            <!-- @confirmEvent="confirmBtnEvent(num)" -->
            <div slot="confirm" class="confirm">
                <h5>您选择的产品</h5>
                <h6>iPhoneX 256G 土豪金</h6>
                <p>256G　　土豪金</p>
            </div>
        </m-model>
  </div>
</template>
<style lang="scss" scoped>
.detail{
    padding-top:40px;
}

.goodsdt{
    .chose{
        padding: 3vw;
        background-color:#fff;
        .chose-view {
            > h1 {
                color: #2c3e50;
                > span {
                    color: rgb(238, 113, 80);
                }
            }
            > span {
                line-height: 10vw;
                font-weight: 600;
            }

        }
        .chose-mychosed {
            background-color: #fff;
            > div {
                padding-top: 20px;
                display: -ms-flex;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;

                span {
                    padding: 6px 10px;
                    border: 1px solid rgb(111, 111,111);
                    margin-right: 6vw;
                    color: rgb(111, 111, 111);
                    &.active,
                    &:active {
                        color: #2ba1f7;
                        border-color:#2ba1f7;
                        -webkit-transform: scale(1.1);
                        transform: scale(1.1);
                    }

                }
            }
        }
    }
    .content{
        .tab {
            font-family: 'Microsoft YaHei';
            width: 100%;
            font-size: 0;
            height: 45px;
            box-sizing: border-box;
            background: #fff;
            border-top: 1px solid #d5d5d5;
            border-bottom: 1px solid #d5d5d5;
            span {
                
                display:inline-block;
            font-size: 16px;
            color: #333;
            width: 50%;
            box-sizing: border-box;
            text-align: center;
            line-height: 44px;
            display: inline-block;
            &:first-child {
                border-right: 1px solid #d5d5d5;
            }
            &.active {
                color: #2ba1f7;
            }
            }
        }
        .gdetail, .attr {
            width: 100%;
            font-size: 0;
            background-color:#ffffff;
            h2{
                font-size:16px;
                text-align:center;
            }
            p{
                font-size:12px;
            }
            img {
            width: 100%;
            }
        }        
    }
    .addCart {
      width: calc(100% - 10px);
      height: 50px;
      background: #fff;
      padding:0 5px;
      position: fixed;
      bottom: 0;
      left: 0;
      font-size: 0;
      border-top: 1px solid #efefef;
      a{
          display:inline-block;
        margin: 5px auto 0 auto;
          width:15%;
          color:#fff;
          font-size:12px;
        line-height: 40px;
        height: 40px;
        vertical-align: top;
        text-align: center;
        background-color: #44a8f9;
        border-radius: 6px;
      }
      div {
        text-align: center;
        line-height: 50px;
        display: inline-block;
        font-size: 0;
        overflow: hidden;
        height: 50px;
        &.add {
          width: 70%;
          color: #fff;
          height: 50px;
          span {
            text-align: center;
            line-height: 40px;
            background: #FF5722;
            width: 94%;
            height: 40px;
            display: block;
            margin: 5px auto 0 auto;
            font-size: 16px;
            &:active {
              background: #ec4c1a;
            }
          }
        }
      }
    }
}
</style>
<script>
    import footer from '../components/common/footer';
    import header from '../components/common/header';
    import banner from '../components/common/banner';
    import model from '../components/common/model';
    import { Toast } from 'mint-ui';
        export default {
            components: {
            'm-footer':footer,
            'm-header':header,
            'm-banner':banner,
            'm-model': model
            },
            data(){
                return{
                    title:'商品详情',
                    tabState:true,
                    headtitle:true,
                    datas:{
                        count:3,
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
                    }
                }
            },
            methods:{
                tabEvent1 () {
                    this.tabState = true;
                },
                tabEvent2 () {
                    this.tabState = false;
                },
                butEvent () {
                this.$refs.confirm.modelOpen();
                },
                confirmBtnEvent(){
                    Toast('已经加入购物车了');                
                },
                confirmBtnEventc(){

                }
            }
        }
</script>