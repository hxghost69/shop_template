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
const Login = resolve => require(['@/page/login.vue'], resolve)
const Register = resolve => require(['@/page/register.vue'], resolve)



export default new Router({
  // mode: 'history',
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
      component: Cart,
      meta: {
				nav: 'cart'
			},
			beforeEnter: (to, from, next) => {
				if(localStorage.getItem('CHANGE_TOKEN')) {
					next()
				} else {
					next({
						name: "登录",
						query: {
							redirect: "cart"
						}
					})
				}
			}
    },
    {
      path: '/category',
      name: '分类',
      component: Category
    },
    {
      path: '/user',
      name: '我的',
      component: User,
      meta: {
				nav: 'user'
			},
			beforeEnter: (to, from, next) => {
				if(localStorage.getItem('CHANGE_TOKEN')) {
					next()
				} else {
					next({
						name: "登录",
						query: {
							redirect: "user"
						}
					})
				}
			}
    },
    {
      path: '/detail',
      name: '详情页',
      component: Detail
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/register',
      name: '注册',
      component: Register
    }
  ]
})
