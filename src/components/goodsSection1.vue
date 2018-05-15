<template>
  <section class="section1" v-if='section1'>
    <div class="section1-list">
      <ul>
        <li v-for="k in section1" :key="k.id">
          <router-link :to="{name:'详情页'}">
            <img v-lazy="k.imgPath">
          </router-link>
          <h2 class="section1-list-title ac">
            {{k.title}}
          </h2>
          <p class="section1-list-intro">
            {{k.intro}}
          </p>
          <p class="section1-list-price">
            ￥{{k.price}}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    props:['section1']

  }
</script>

<style lang="scss" scoped>
.section1{
    background-color:#fff;
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
       width: 280%;
      li {
        margin-right: 10px;
        // max-width:150px;
        a,
        img {
          display: block;
          width: 100%;
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
