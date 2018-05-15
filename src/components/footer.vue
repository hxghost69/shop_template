<template>
    <mt-tabbar >
        <mt-tab-item id="首页" class="is-selected">
            <img slot="icon" src="../assets/images/svg/footer_home1.svg">
            首页
        </mt-tab-item>
        <mt-tab-item id="分类">
            <img slot="icon" src="../assets/images/svg/footer_lei1.svg">
            分类
        </mt-tab-item>
        <mt-tab-item id="购物车">
            <img slot="icon" src="../assets/images/svg/footer_cart1.svg">
            购物车
        </mt-tab-item>
        <mt-tab-item id="我的">
            <img slot="icon" src="../assets/images/svg/footer_me1.svg">
            我的
        </mt-tab-item>
    </mt-tabbar>
</template>
<style lang="scss" scoped>
.mint-tabbar>.mint-tab-item.is-selected {
    background-color: #eaeaea;
    color: #26a2ff;
}
</style>

