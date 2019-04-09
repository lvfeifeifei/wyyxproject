<template>
  <div class="discoverContainer">
    <div class="contentWrap">
      <router-view/>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .discoverContainer
    width 100%
    position absolute
    top 0px
    bottom 0px
    .contentWrap
      width 100%
</style>
