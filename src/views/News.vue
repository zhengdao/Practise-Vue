<template>
  <div>
    <div>新闻 {{ nid }}</div>
    <div>今日新闻</div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data: function () {
    return {nid: ''}
  },

  mounted: function () {
    this.nid = this.$route.params.nid
  },

  components: {},

  computed: {},

  methods: {}
}
</script>

<style scoped>

</style>
