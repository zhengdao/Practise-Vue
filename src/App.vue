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
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-size: 14px;
    line-height: 24px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", Tahoma, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
