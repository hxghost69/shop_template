<template>
    <!-- <mt-swipe :auto="3000">
        <mt-swipe-item >
            <a href="">
                <img src="https://dummyimage.com/800x400/ffbe19/fafafa" alt="">
            </a>          
        </mt-swipe-item>
        <mt-swipe-item class="slide2">
            <a href="">
                <img src="https://dummyimage.com/800x400/ffae63/fafafa" alt="">
            </a>
        </mt-swipe-item>
        <mt-swipe-item class="slide3">
            <img src="https://dummyimage.com/800x400/84cc06/fafafa" alt="">
        </mt-swipe-item>
    </mt-swipe> -->
    <mt-swipe :auto="3000" v-if='bannerData'>
        <mt-swipe-item v-for="k in bannerData" :key="k.id">
            <router-link :to="{ name: '首页'}">
            <img :src="k.imgPath">
            </router-link>
        </mt-swipe-item>
    </mt-swipe>
</template>
<script>
    export default {
        props:['bannerData']
    }
</script>
<style lang="scss" scoped>
.mint-swipe {
    height: 50vw;
    width:100%;
}
a{display:inline-block;width:100%;height:auto;}
img{
    width:100%;
    height:auto;
}

</style>

