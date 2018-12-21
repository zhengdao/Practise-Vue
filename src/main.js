// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
import Vue from 'vue'
import Vuex from 'vuex'
import Http from './net'
import App from './App'
import router from './router'
import i18n from './i18n'

import './assets/style/app.css'

Es6Promise.polyfill()

// Vue全局引入外部插件
Vue.prototype.$http = Http
Vue.use(Vuex);

Vue.config.productionTip = false

// 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: {App},
  template: '<App/>',

  mounted: function () {
    debugger
  },

  watch: {
    $route (to, from) {
      console.log(to.path)
      console.log(from.path)
    },
    '$route.path': function (nv, ov) {
      console.log(nv)
      console.log(ov)
    },
    '$route.params': {
      handler (nv, ov) {
        console.log(nv)
        console.log(ov)
      },

      // 深度观察监听
      deep: true
    }
  }
})
