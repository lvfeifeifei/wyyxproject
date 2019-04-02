<template>
  <div class="firstContainer">
    <HeadSearch/>
    <router-view/>
  </div>
</template>
<script>
  import HeadSearch from './components/HeadSearch/HeadSearch.vue'
  
  export default {
    components: {
      HeadSearch
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .firstContainer
    position relative
    background-color #f4f4f4
</style>
