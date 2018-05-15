<template lang="html">
  <section class="section2" v-if='section2'>
    <ul class="section2-list">
      <li v-for="k in section2">
        <router-link :to="{name:'详情页'}" :key="k.id">
          <img v-lazy="k.imgPath">
          <p>{{k.intro}}</p>
        </router-link>
        <h3>{{k.title}}</h3>
        <span>$ {{k.price}}</span>
      </li>

    </ul>
  </section>
</template>

<script>
import { Lazyload } from 'mint-ui';
  export default {
    props:['section2']
  }
</script>

<style lang="scss" scoped>
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
        padding:2vw 3vw;
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
            background-color: #000;
            -webkit-box-sizing: border-box;
                    box-sizing: border-box;
            padding:1.2vw 2vw;
            color: #fff;
          }
        }

        >h3 {
          padding-top: 3vw;
        }
        >span {
          display: inline-block;
          padding-bottom: 3vw;
          color: #b4282d;
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
