import Vue from 'vue'
import Router from 'vue-router'

// Use 'import {} from xxx' for 'export xxx'
// Use 'import xxx from xxx' for 'export default xxx'
import Home from '@/views/Home'
import NewsList from '@/views/NewsList'
import News from '@/views/News'
import spinRoute from '@/util/Loading'

Vue.use(Router)

// Declare the lazy component
const Register = resolve => {
  require.ensure(['@/views/Register'], () => {
    resolve(require('@/views/Register'))
  })
}

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',

    // required
    component: Home,

    children: [
      {
        path: 'login',
        name: 'login',
        component: resolve => {
          spinRoute.show()
          require(['@/views/Login'], spinRoute.resolve(resolve))
        }
      },
      {
        path: 'reg',
        name: 'register',
        component: Register
      }
    ]
  },
  {path: '/news', name: 'newslist', component: NewsList},
  {path: '/news/:nid', name: 'news', component: News}
]

const router = new Router({
  mode: process.env.routerMode, // "hash" | "history" | "abstract"
  routes
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log('navigation-guards')

  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  const nextRoute = ['home', 'good-list', 'good-detail', 'cart', 'profile']
  let isLogin = global.isLogin // 是否登录

  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.name) >= 0) {
    if (!isLogin) {
      console.log('what fuck')
      router.push({name: 'login'})
    }
  }
  // 已登录状态；当路由到login时，跳转至home
  if (to.name === 'login') {
    if (isLogin) {
      router.push({name: 'home'})
    }
  }
  next()
})

/*
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
*/

export default router
