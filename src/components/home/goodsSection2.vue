<template lang="html">
  <section class="section2" v-if='section2'>
    <div class="title1">
        <router-link :to="{'name':'详情页'}">
            商品1
            <i>&gt;</i>
        </router-link>
    </div>      
    <ul class="section2-list">
      <li v-for="k in section2">
        <router-link :to="{name:'详情页',params:{ id: k.productId }}" :key="k._id">
          <img v-lazy="'static/'+k.productImage">
          <p>测试测试测试</p>
        </router-link>
        <h3>{{k.productName}}</h3>
        <p>￥{{k.salePrice}}</p>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    props:['section2']
  }
</script>

<style lang="scss" scoped>
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
  .section2 {
    width: 100%;
    overflow: hidden;
    background-color:#fff;
    margin-bottom:10px;
    .section2-list {
      width: 100%;
      display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      overflow: hidden;
      li {
        width: 50%;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        padding:12px 13px;
        >a {
          display: block;
          width: 100%;
          position: relative;
          img {
            display: block;
            width: 100%;
          }
          p {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: rgba(0,0,0,0.5);
            -webkit-box-sizing: border-box;
                    box-sizing: border-box;
            padding:10px 12px;
            color: #fff;
          }
        }

        >h3 {
          padding-top: 9px;
          text-align: center;
          padding-bottom: 9px;
        }
        >p {
          padding-bottom: 5px;
          color: #b4282d;
          text-align: center;
        }
      }
    }
    .section2-banner {
      width: 100%;
      display: block;
      img {
        display: block;
        width: 100%;
      }
    }
  }
</style>
