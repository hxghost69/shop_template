<template>
    <aside class="aside">
        <ul>
            <li>
                <router-link class="active" :to="{path:'/category/'+'电子类别'}" >电子类别</router-link>
            </li>
            <li>
                <router-link :to="{path:'/category/'+'食品'}" >食品</router-link>
            </li>
        </ul>
    </aside>
</template>
<style lang="scss" scoped>
  .aside {
    flex: 2.2;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {display:none}
    > ul {
      height: 100%;
      width: 100%;
      li {
        text-align: center;
        border-right: 1px solid #e2e0e0;
        border-bottom: 1px solid #e2e0e0;
        a {
          display: block;
          padding: 4vw 0;
          position: relative;
          font-size: 16px;
        }
        .active {
          position: relative;
          &::before {
            width: 3px;
            height: 28px;
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            margin-top: -14px;
            background-color: green;
          }
        }
      }
    }
  }
</style>