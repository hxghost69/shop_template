<template>
  <div class="cawrap">
      <m-header :htitle="title"></m-header>
      <section class="view">
        <m-aside></m-aside> 
        <router-view></router-view>
      </section>
      <m-footer></m-footer>
  </div>
</template>
<script>
    import footer from '../components/common/footer';
    import header from '../components/common/header';
    import aside from '../components/category/aside'
        export default {
            components: {
            'm-footer':footer,
            'm-header':header,
            'm-aside':aside
            },
            data(){
                return{
                    title:'商品分类'
                }
            }
        }
</script>
<style lang="scss" scoped>
.cawrap{
    padding-bottom:65px;
    padding-top:40px;
}
.view{
    display:flex;
}
</style>