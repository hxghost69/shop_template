<template>
  <div class="home">
        <m-header :title="titleMsg"></m-header>
        <m-search></m-search>
        <m-banner :bannerData="datas.list"></m-banner>
        <div class="title1">
            <router-link :to="{'name':'详情页'}">
                热门商品
                <i>&gt;</i>
            </router-link>
        </div>
        <m-section1 :section1="datas.hotsection"></m-section1>
        <div class="title1">
            <router-link :to="{'name':'详情页'}">
                商品1
                <i>&gt;</i>
            </router-link>
        </div>
        <m-section2 :section2="datas.hotsection2"></m-section2>    
        <m-footer></m-footer>
  </div>
</template>
<style lang="scss" scoped>
    .home{
        padding-bottom:55px;
        .title1{
            border-bottom:1px solid #ccc;
            text-align: center;
            font-size: 20px;
            padding: 8px 0;
            margin-top: 10px;
            margin-bottom: 10px;
            position: relative;
            background-color: #ffffff;
            position:relative;
            i{
                position:absolute;
                right:15px;
                top:26%;
            }
        }
    }
</style>

<script>
import footer from '../components/footer';
import search from '../components/search';
import header from '../components/header';
import banner from '../components/banner';
import goodsSection1 from '../components/goodsSection1';
import goodsSection2 from '../components/goodsSection2';
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
            datas:{
                count:3,
                list:[
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

                ],
                hotsection:[
                    {
                        'id':1,
                        'title':'XX手机',
                        'price':100,
                        'intro': '反正就是就是便宜好用吧',
                        'imgPath':'https://dummyimage.com/200x200/f29afc/fafafa',
                    },
                    {
                        'id':2,
                        'title':'yy手机',
                        'price':200,
                        'intro': '反正就是同上',
                        'imgPath':'https://dummyimage.com/200x200/f29afc/fafafa',
                    },
                    {
                        'id':3,
                        'title':'zz手机',
                        'price':300,
                        'intro': '同上的同上你懂得',
                        'imgPath':'https://dummyimage.com/200x200/f29afc/fafafa',
                    },
                    {
                        'id':4,
                        'title':'zz手机',
                        'price':300,
                        'intro': '同上的同上你懂得',
                        'imgPath':'https://dummyimage.com/200x200/f29afc/fafafa',
                    }
                ],
                hotsection2:[
                    {
                        'id':1,
                        'title':'XX手机',
                        'price':100,
                        'intro': '反正就是就是便宜好用吧',
                        'imgPath':'https://dummyimage.com/200x200/b7ddf2/333',
                    },
                    {
                        'id':2,
                        'title':'yy手机',
                        'price':200,
                        'intro': '反正就是同上',
                        'imgPath':'https://dummyimage.com/200x200/b7ddf2/333',
                    },
                ]
            }
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
