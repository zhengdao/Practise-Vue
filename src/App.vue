<template>
  <div id="app">
    <h1>{{ $t('message.title') }}</h1>
    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/home">{{ $t('message.home') }}</router-link>
      <router-link to="/news">{{ $t('message.news') }}</router-link>
    </p>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view/>

    <div>
      <h1>My Todo App!</h1>
      <TodoList/>
    </div>

    <Msg ref="msgbox" id="test"/>

  </div>
</template>

<script>
import {getData, getSynData, getError} from './service'
import Msg from '@/views/Msg'
import TodoList from '@/todo/TodoList'

export default {
  name: 'App',

  components: {
    Msg,
    TodoList
  },

  data: function () {
    return {info: ''}
  },

  mounted: function () {
    this.getMsg()
  },

  methods: {
    getMsg: () => {
      // Fetch data by asyn way
      getData().then(data => {
        console.log(data)
      })

      // Handle error of asyn way
      getError().then(data => {
        // Do nothing
      }, err => {
        console.error(err)
      })

      // Fetch data by syn way
      console.log(getSynData())
    }
  }
}
</script>

<style lang="scss">
  @import '@/todo/variables.scss';

  *, *::before, *::after {
    box-sizing: border-box;
  }

  #app {
    max-width: 400px;
    margin: 0 auto;
    line-height: 1.4;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $vue-blue;
  }

  h1 {
    text-align: center;
  }
</style>
