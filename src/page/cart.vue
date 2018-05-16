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
                    <img src="">
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
                    <div class="something-right-bottom">
                        删除
                    </div>
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
    .something {
        width: 100%;
        > li {
            display: flex;
            .something-left {
                -ms-flex: 2;
                -webkit-box-flex: 2;
                flex: 2;
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
                -ms-flex: 3;
                -webkit-box-flex: 3;
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
                -ms-flex: 7;
                -webkit-box-flex: 7;
                flex: 7;
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
                    width: auto;
                    background: #f0f0f0;
                    border-radius: 3px;
                    min-width: 50px;
                    max-width: 240px;
                    height: 30px;
                    line-height: 30px;
                    .select-ipt {
                        display: inline-block;
                        padding: 0 3px;
                        width: 30px;
                        min-width: 30px;
                        text-align: center;
                    }
                }   
                .input-sub, .input-add {
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
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                p:last-of-type {
                    color: rgb(168, 168, 168);
                }
                .something-right-bottom {

                    > div {
                        display: -ms-flex;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;
                        input {
                            width: 6vw;
                            text-align: center;
                        }

                        span {
                            height: 7vw;
                            line-height: 7vw;
                            width: 8vw;
                            display: inline-block;
                            border: 0.2vw solid #f1f1f1;
                            border-radius: 1vw;
                            text-align: center;
                            font-size: 20px;
                            cursor: pointer;
                        }
                    }
                    > span {
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        width: 13vw;
                        height: 13vw;
                        // background: url("../../assets/car/images/laji.svg") no-repeat center/50%;
                    }
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
    import footer from '../components/footer';
    import header from '../components/header';
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
