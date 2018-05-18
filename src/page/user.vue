<template lang="html">
    <div class="user">
        <m-header :htitle="title"></m-header>
        <router-link class="usertop" :to="{ name: ''}">
            <img  src="https://dummyimage.com/75x75/7c7d7d/fff" alt=""/>
            <p>13725845585 <em>未认证</em></p>
        </router-link>
        <div class="main">
            <mt-cell title="我的订单"  is-link value="查看全部" data-text='0' :to="{ name: '我的订单'}"></mt-cell>
            <section class="my-pay">
                <router-link :to="{ name: ''}">
                    <img src="https://dummyimage.com/25x25/9c9a9c/fff" alt="待付款" />
                    <p>待付款</p>
                    <!-- <mt-badge class="badge" type="error">1</mt-badge> -->
                </router-link>
                <router-link :to="{ name: ''}">
                    <img src="https://dummyimage.com/25x25/9c9a9c/fff" alt="待收货" />
                    <p>待收货</p>
                    <mt-badge class="badge" type="error">1</mt-badge>
                </router-link>
                <router-link :to="{ name: ''}">
                    <img src="https://dummyimage.com/25x25/9c9a9c/fff" alt="待提货" />
                    <p>待提货</p>
                    <!-- <mt-badge class="badge" type="error">1</mt-badge> -->
                </router-link>
                <router-link :to="{ name: ''}">
                    <img src="https://dummyimage.com/25x25/9c9a9c/fff" alt="已完成" />
                    <p>已完成</p>
                    <!-- <mt-badge class="badge" type="error">1</mt-badge> -->
                </router-link>
                <router-link :to="{ name: ''}">
                    <img src="https://dummyimage.com/25x25/9c9a9c/fff" alt="退款" />
                    <p>退款</p>
                    <!-- <mt-badge  class="badge" type="error">1</mt-badge> -->
                </router-link>
            </section>
            <mt-cell title="优惠券" :to="{ name: ''}" is-link></mt-cell>
            <mt-cell title="地址管理" :to="{ name: ''}" is-link></mt-cell>
            <mt-cell title="个人资料" :to="{ name: ''}" is-link></mt-cell>
            <mt-cell title="系统设置" :to="{ name: ''}" is-link></mt-cell>
            <mt-cell title="帮助中心" :to="{ name: ''}" is-link></mt-cell>
            <mt-cell title="客服热线" :to="{ name: ''}" is-link></mt-cell>
        </div>
        <m-footer></m-footer>
    </div>
</template>
<style lang="scss" scoped>
.user{
    padding-bottom:65px;
    padding-top:40px;
    .usertop{
        width:100%;  
        display:inline-block;  
        height:150px;
        background:url('https://dummyimage.com/750x380/2be6e6/fff&text=.') no-repeat center center;
        background-size:100% 100%;       
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        img{
            max-width:100%;
            display:block;
            height:auto;            
        }
        p{
            text-align: center;
            margin-top:10px;
            position:relative;
            em{
                font-size:12px;
                font-style:normal;
                background-color:#ccc;
                color:#000;
                margin-left:10px;              
            }
        }
    }
    .main{
        .my-pay{
            background-color:#fff;
            padding:20px 10px;
            display:flex;
            justify-content: space-between;            
            a{
                position:relative;
                img{
                    max-width:100%;
                    height:auto;
                    display:block;
                    margin:0 auto;
                }
                p{
                    margin-top:10px;
                }
                .badge{
                    position:absolute;
                    top:-10px;
                    right:0;
                }

            }
        }
    }
}
</style>

<script>
    import header from '../components/common/header';
    import footer from '../components/common/footer';
        export default {
            components: {
                'm-footer':footer,
                'm-header':header
            },
            data(){
                return{
                    title:"我的"
                }
            },
            methods:{
                gourl:function(url){
                    this.$router.push({ name: url })
                }
            }
        }
</script>
