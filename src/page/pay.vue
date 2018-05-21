<template lang="html">

  <div class="pay">
    <m-header  :htitle="titleMsg"></m-header>
    <div class="pay-address">
      <div>
        <p class="main-address-per">收货人:<span>X先生</span></p>
        <p class="main-address-tel">137********</p>
      </div>
      <p>收货地址:<span>广东省深圳市南山区科技园XX路X号院XX号单元X层</span></p>
    </div>
    <div class="pay-product">
      <ul>
        <li>
          <a>
            <img src="http://dummyimage.com/400x400/ffcc33/FFF.png" alt="">
            <div>
              <h2><span style="color:#ee7150"> 128G - 土豪金 </span>- iPhoneX 全网通 128G -</h2>
              <p>8888元</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <h3 class="pay-allpay">总需要支付 : <i>￥</i><span>8888</span></h3>
    <footer class="pay-footer" ontouchstrat="" >
      <span>立即支付</span>
    </footer>
  </div>
</template>
<style lang='scss' scoped>
.pay {
    width: 100%;
    background-color: #F7F7F7;
    padding-top:40px;
    .pay-address {
        background-color: #fff;
        border-bottom: 1*10vw/75 solid #DEDEDE;
        padding: 30*10vw/75;
        > div {
            display: -webkit-flex;
            display: -ms-flex;
            display: flex;
            justify-content: space-between;
            p {
                color: #868686;
            }
        }
        > p {
            color: #868686;
            padding-top: 30*10vw/75;
            letter-spacing: 3*10vw/75;
            line-height: 45*10vw/75;
        }
    }
    .pay-product {
        background-color: #fff;
        height: 60vw;
        overflow: auto;
        li {
            a {
                display: -webkit-flex;
                display: -ms-flex;
                display: flex;
                box-sizing: border-box;
                padding: 20*10vw/75 30*10vw/75;
                color: #4D4D4D;
                border-bottom: 1*10vw/75 solid #DEDEDE;
                > img {
                    display: block;
                    width: 2.5*10vw;
                    height: 2.5*10vw;
                }
                > div {
                    box-sizing: border-box;
                    padding-left: 50*10vw/75;
                    width: 70%;
                    h2 {
                        padding-top: 0.09*10vw;
                        overflow: hidden;
                        word-break: keep-all;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }

                    p {
                        text-align: right;
                        padding-top: 1.4*10vw;
                    }
                }
            }
        }
    }

    .pay-allpay {
        text-align: right;
        margin-top: 6vw;
        padding: 4vw 5vw;
        color: #999999;
        background-color: #fff;
        i,
        span {
            
        }
    }

    .pay-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding-bottom: 4vw;
        span {
            display: block;
            width: 85%;
            background-color: #23c2fb;
            border-radius: 1.3vw;
            color: #fff;
            font-size: 17px;
            padding: 4vw;
            margin: 0 auto;
            text-align: center;
            &:active {
                
            }
        }

    }

    .pay-confirm {
        padding: 20px 0;
        text-align: center;
        color: #fff;
        line-height: 30px;
    }
}
</style>
<script>
import header from '../components/common/header';
  export default {
    components: {
        'm-header':header
    },
    data(){
      return{
          titleMsg:'支付页'
      }
    },
    methods:{
    },
    //组件实例创建完成，属性已绑定，Dom还未生成。el属性还不存在
    created(){
    //对应还有个beforeCreate
    },
    //模板编译/挂载之后
    mounted(){
       //对应还有个beforeMount
       this.$nextTick(function () {
       })
    },
    //组件更新后
    updated(){
    //对应还有个beforeUpdate
    },
    destory(){
    }
  }
</script>