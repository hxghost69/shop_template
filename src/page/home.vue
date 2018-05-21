<template>
  <div class="home">
        <m-header :htitle="titleMsg"></m-header>
        <m-search></m-search>
        <m-banner :bannerData="datas.bannerlist"></m-banner>
        <m-section1 :section1="datas.hotsection"></m-section1>
        <m-section2 :section2="datas.hotsection2"></m-section2>    
        <m-footer></m-footer>
  </div>
</template>
<style lang="scss" scoped>
    .home{
        padding-bottom:55px;
        padding-top:40px;
    }
</style>

<script>
import footer from '../components/common/footer';
import search from '../components/common/search';
import header from '../components/common/header';
import banner from '../components/common/banner';
import goodsSection1 from '../components/home/goodsSection1';
import goodsSection2 from '../components/home/goodsSection2';
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
            titleMsg:'商城主页1',
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

                ],
                hotsection:[
                    {
                        'id':1,
                        'title':'XX手机',
                        'price':100,
                        'intro': '反正就是就是便宜好用吧',
                        'imgPath':'https://dummyimage.com/200x200/9c999c/fff',
                    },
                    {
                        'id':2,
                        'title':'yy手机',
                        'price':200,
                        'intro': '反正就是同上',
                        'imgPath':'https://dummyimage.com/200x200/9c999c/fff',
                    },
                    {
                        'id':3,
                        'title':'zz手机',
                        'price':300,
                        'intro': '同上的同上你懂得',
                        'imgPath':'https://dummyimage.com/200x200/9c999c/fff',
                    },
                    {
                        'id':4,
                        'title':'zz手机',
                        'price':300,
                        'intro': '同上的同上你懂得',
                        'imgPath':'https://dummyimage.com/200x200/9c999c/fff',
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
            
        }
    }
}
</script>
