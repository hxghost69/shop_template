<template>
    <mt-search
    :value.sync="value"
    cancel-text="取消"
    placeholder="搜索">
    </mt-search>
</template>
<style lang="scss" scoped>
    .mint-search{
        height:auto;
    }
</style>

<script>
    export default {
        data(){
            return{
                value:''
            }          
        },
        mounted:function(){
            this.$nextTick(function () {
                
            });
        },
        methods:{
        }
    }
</script>
