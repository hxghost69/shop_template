<template>
    <div :class="{screen: focus}">
        <mt-search
        :value.sync="value"
        cancel-text="取消"
        placeholder="搜索" >
        </mt-search>
        <div class="main" v-show="focus">
            <div class="title">热门搜索</div> 
            <ul>
                <li>红米4 超长续航</li>
                <li>小米Note 2</li>
                <li>小米5s</li>
                <li>笔记本</li>
                <li>小米电视3s</li>
                <li>智能电饭煲</li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .mint-search{
        height:auto;
    }
    .mint-searchbar{        
        background-color: #26a2ff;
    }
    .mint-searchbar-inner{
        border-radius:20px;
    }
.screen{
    width: 100%;
    height: 100%;
    background: #fff;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index:100;
}    
    .main{
        width: 100%;
        .title{
            line-height: 40px;
            font-size: 12px;
            color: #333;
            text-indent: 20px;
        }
        ul{
            padding: 0 10px;
            li{
                list-style-type: none;
                font-size: 12px;
                padding: 8px 10px;
                margin: 5px;
                display: inline-block;
                background: #ecf3f8;
                border: 1px solid #a5d4f7;
            }
        }
    }
</style>

<script>
    export default {
        data(){
            return{
                value:'',
                focus:false
            }          
        },
        mounted:function(){
            this.$nextTick(function () {
               this.focecli();
               this.cancle();
            });
        },
        methods:{
            focecli:function(){
                var that=this;
                 document.querySelectorAll(".mint-searchbar-core")[0].addEventListener("click",function(){
                     that.handleFocus();
                 })
            },
            cancle:function(){
                //mint-searchbar-cancel
                var that=this;
                 document.querySelectorAll(".mint-searchbar-cancel")[0].addEventListener("click",function(){
                     that.goBackEvent();
                 })
            },
            handleFocus:function(){
                this.focus = true;
                this.$emit("searchEvent",true);
            },
            goBackEvent () {
                this.focus = false;
                this.$emit('searchEvent', false);
            },
        }
    }
</script>
