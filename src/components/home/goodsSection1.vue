<template>
  <section class="section1" v-if='section1'>
    <div class="title1">
        <router-link :to="{'name':'详情页'}">
            热门商品
            <i>&gt;</i>
        </router-link>
    </div>      
    <div class="section1-list">
      <ul>
        <li  v-for="item in section1" :key="item._id">
          <router-link :to="{name:'详情页',params:{ id: item.productId }}">
            <img v-lazy="'static/'+item.productImage"/>
          </router-link>
          <h2 class="section1-list-title ac">
            {{item.productName}}
          </h2>
          <p class="section1-list-intro">
            反正就是好
          </p>
          <p class="section1-list-price">
            ￥{{item.salePrice}}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    props:['section1'],
    mounted:function(){
        this.$nextTick(function () {

        })
    }
  }
</script>

<style lang="scss" scoped>
.section1{
    background-color:#fff;
}
.title1{
    border-bottom:1px solid #ccc;
    text-align: center;
    font-size: 16px;
    position: relative;
    background-color: #ffffff;
    position:relative;
    a{
        display:inline-block;
        width:100%;
        padding: 8px 0;
    }
    i{
        position:absolute;
        right:15px;
        top:26%;
    }
}
  .section1-list {
    overflow-x: auto;
    width: 100%;
    /*原生滑动*/
    -webkit-overflow-scrolling: touch;
    margin-bottom:10px;
    >ul {
      display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      padding: 10px;
      li {
        margin-right: 10px;
        min-width:112px;
        // max-width:150px;
        a,
        img {
          height: auto;
          max-width: 100%; 
          display: block;
        }

        h2,
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        h2 {
          padding-top: 3px;
          color: #333;
        }

        p.section1-list-intro {
          padding-top: 2px;
          color: rgb(150, 150, 150);
        }

        p.section1-list-price {
          color: #b4282d;
        }
      }
    }

  }

  .section1-banner {
    display: block;
    width: 100px;
    img {
      display: block;
      height: 24px;
      width: 100%;
    }
  }
</style>
