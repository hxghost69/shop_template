import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import test from '@/components/test'


Vue.use(Router)


//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Home = resolve => require(['@/page/home.vue'], resolve)
const Cart = resolve => require(['@/page/cart.vue'], resolve)
const Category = resolve => require(['@/page/category.vue'], resolve)
const User = resolve => require(['@/page/user.vue'], resolve)
const Detail = resolve => require(['@/page/detail.vue'], resolve)



export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/cart',
      name: '购物车',
      component: Cart
    },
    {
      path: '/category',
      name: '分类',
      component: Category
    },
    {
      path: '/user',
      name: '我的',
      component: User
    },
    {
      path: '/detail',
      name: '详情页',
      component: Detail
    }
  ]
})
