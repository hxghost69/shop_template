<template>
  <div>
      <m-header :htitle="title"></m-header>
      <m-footer></m-footer>
  </div>
</template>
<script>
    import footer from '../components/footer';
    import header from '../components/header';
        export default {
            components: {
            'm-footer':footer,
            'm-header':header
            },
            data(){
                return{
                    title:'分类'
                }
            }
        }
</script>