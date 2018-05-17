<template>
  <footer class="footer" @click.stop='gotoRouter'>
    <mt-tabbar v-model="selected" fixed >
        <mt-tab-item id="首页">
            <img slot="icon" src="../../assets/images/svg/footer_home1.svg">
            首页
        </mt-tab-item>
        <mt-tab-item id="分类">
            <img slot="icon" src="../../assets/images/svg/footer_lei1.svg">
            分类
        </mt-tab-item>
        <mt-tab-item id="购物车">
            <img slot="icon" src="../../assets/images/svg/footer_cart1.svg">
            购物车
        </mt-tab-item>
        <mt-tab-item id="我的">
            <img slot="icon" src="../../assets/images/svg/footer_me1.svg">
            我的
        </mt-tab-item>
    </mt-tabbar>
  </footer>
</template>
<script>
  export default {
    methods: {
      gotoRouter() {
        this.$router.push({
          name: this.selected
        })
      }
    },
    data() {
      return {
        //对应mt-tab-item 的id值
        selected: ''
      }
    },
    mounted() {
      //获取当前路由名称，根据该名称给当前footer添加is-selected
      let Rname = this.$route.name;
      switch (Rname) {
        case '首页':
          this.selected = '首页';
          break;
        case '分类':
          this.selected = '分类';

          break;
        case '购物车':
          this.selected = '购物车';

          break;
        case '我的':
          this.selected = '我的';
          break;
      }
    }

  }
</script>
<style lang="scss" scoped>
.mint-tabbar>.mint-tab-item.is-selected {
    background-color: #eaeaea;
    color: #26a2ff;
}
</style>

