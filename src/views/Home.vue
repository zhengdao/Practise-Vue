<template>
  <!-- 注意：组件只能有一个根元素，所以我们包装到这个div中 -->
  <div>
    <h2>{{ $t('message.home') }}</h2>
    <router-link to="login">{{ $t('message.login') }}</router-link>
    <router-link to="reg">{{ $t('message.reg') }}</router-link>

    <router-link :to="{name:'user', params: {userId: 'admin'}}">{{ $t('message.user') }}</router-link>

    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view/>
  </div>
</template>

<script>
import User from '@/views/User'

export default {
  name: 'Home',

  mounted () {
    this.$router.addRoutes([
      {name: 'user', path: 'user', component: User}
    ])
  }
}
</script>

<style scoped>

</style>
