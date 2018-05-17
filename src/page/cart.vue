<template>
  <div class="cart">
    <m-header :htitle="title"></m-header>
    <div class="wrap">
        <ul class="something">
            <li>
                <div class="something-left">
                    <label class="true">
                    <input type="checkbox">
                    </label>
                </div>
                <div class="something-middle">
                    <img src="http://dummyimage.com/400x400/ffcc33/FFF.png">
                </div>
                <div class="something-right">
                    <p>小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 </p>
                    <p style="color:rgb(199, 108, 28)">土豪金-16G</p>
                    <p>售价：2500元</p>
                    <div class="select-self">
                        <div class="select-self-area">
                            <a class="input-sub">-</a> 
                            <span class="select-ipt">2</span> 
                            <a class="input-add">+</a>
                        </div>
                    </div>
                    <a class="something-right-bottom">
                        删除
                    </a>
                </div>
            </li>
            <li>
                <div class="something-left">
                    <label class="true">
                    <input type="checkbox">
                    </label>
                </div>
                <div class="something-middle">
                    <img src="http://dummyimage.com/400x400/ffcc33/FFF.png">
                </div>
                <div class="something-right">
                    <p>小米6 全网通 6GB+128GB 陶瓷尊享版 移动联通电信4G手机 </p>
                    <p style="color:rgb(199, 108, 28)">土豪金-16G</p>
                    <p>售价：2500元</p>
                    <div class="select-self">
                        <div class="select-self-area">
                            <a class="input-sub">-</a> 
                            <span class="select-ipt">2</span> 
                            <a class="input-add">+</a>
                        </div>
                    </div>
                    <a class="something-right-bottom">
                        删除
                    </a>
                </div>
            </li>
        </ul>
    </div>
    <m-footer></m-footer>
  </div>
</template>
<style lang="scss" scoped>
.cart{
    padding-bottom:65px;
    padding-top:40px;
}
.wrap {
    width: 100%;
    background-color:#fff;
    .something {
        width: 100%;
        > li {
            display: flex;
            padding:10px 15px;
            border-bottom:1px solid #e2e0e0;
            .something-left {
                flex: 1;
                padding-top: 10%;
                label {
                    float: left;
                    // background: url("../../assets/car/images/t.svg") no-repeat center center/50% 50%;
                    input {
                    }
                }
                .false {
                    // background: url("../../assets/car/images/f.svg") no-repeat center center /50% 50%!important;
                }

            }
            .something-middle {
                flex: 3;
                height: 26vw;
                padding-left: 2vw;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            .something-right {
                flex: 6;
                height: 100%;
                display: -ms-flex;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-flow: column wrap;
                flex-flow: column wrap;
                -webkit-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                padding-left: 6vw;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                .select-self-area {
                    width: 100%;
                    border-radius: 3px;
                    height: 30px;
                    line-height: 30px;
                    display:flex;
                    justify-content:space-between;
                    .select-ipt {
                        display: inline-block;
                        padding: 0 3px;
                        width: 30px;
                        min-width: 30px;
                        vertical-align: top;
                        text-align: center;
                    }
                }   
                .input-sub, .input-add {
                    background: #f0f0f0;
                    min-width: 40px;
                    height: 100%;
                    border: 0;
                    color: #605F5F;
                    text-align: center;
                    font-size: 16px;
                    overflow: hidden;
                    display: inline-block;
                    background: #f0f0f0;
                }             
                p {
                    color: #666;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    line-height:25px;
                }
                p:last-of-type {
                    color: rgb(168, 168, 168);
                }
                .something-right-bottom {
                    display:inline-block;
                    text-align:right;
                    padding:15px 0;
                }
            }
        }
    }
    label,
    span {
        &:active {
            -webkit-transform: scale(1.3);
            transform: scale(1.3);
        }
    }
}
</style>
<script>
    import footer from '../components/common/footer';
    import header from '../components/common/header';
        export default {
            components: {
            'm-footer':footer,
            'm-header':header
            },
            data(){
                return{
                    title:'购物车'
                }
            }
        }
</script>
