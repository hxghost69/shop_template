<template>
    <mt-swipe :auto="3000">
        <mt-swipe-item class="slide1">
        </mt-swipe-item>
        <mt-swipe-item class="slide2">
        </mt-swipe-item>
        <mt-swipe-item class="slide3">
        </mt-swipe-item>
    </mt-swipe>
</template>
<style lang="scss" scoped>
.mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}
    .mint-swipe-item{
        &.slide1{
            background-color:green ;
        }
        &.slide2{
            background-color:#ffd705;
        }
        &.slide3{
            background-color: #ff2d4b;
        }
    }
</style>

