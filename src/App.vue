<template>
  <div id="app">
    <router-view/><!--显示路由组件-->
    <FooterGuide v-show="$route.meta.showFooter"/><!--底部导航-->
  </div>
</template>
<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  export default {
    components: {
      FooterGuide
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped></style>
