<template>
    <div class="main">
        <ul>
            <li>
                <router-link :to="{name:'详情页'}">
                <img src="http://dummyimage.com/2000x2000/5169b4/FFF.png"/><span>商品一</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'详情页'}">
                <img src="http://dummyimage.com/2000x2000/5169b4/FFF.png"/><span>商品一</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{name:'详情页'}">
                <img src="http://dummyimage.com/2000x2000/5169b4/FFF.png"/><span>商品一</span>
                </router-link>
            </li>
        </ul>
  </div>
</template>
<script>
export default {
  props:['datas'],
  computed:{
    // 获取当前aside栏选择的是第几个
    tabIndex(){
      return this.$store.state.category.tabIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 9.8;
  height: 100%;
  &::-webkit-scrollbar {display:none}
  >h2 {
    font-size: 24px;
    padding: 2vw 4vw;
    color:#333;
    letter-spacing: 2px;
    background-color: rgb(247, 247, 247);
  }
  >ul {
    width: 100%;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: rgb(247, 247, 247);

    li {
      background-color: rgb(247, 247, 247);
      width: 33%;
      text-align: center;
      a {
        color: #666;
        display: block;
        img {
          display: block;
          width: 60%;
          margin: 4vw auto;
        }
        span {
          text-align: center;
        }
      }
    }
  }
}
</style>
