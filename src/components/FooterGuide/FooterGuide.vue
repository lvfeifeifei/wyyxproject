<template>
  <footer class="footer_guide">
    <a href="javascript:;" class="footer_item" :class="{on: $route.path.indexOf('/firstpage')===0}" @click="goto('/firstpage')">
      <span class="footer_icon">
        <i class="iconfont  iconhome1"></i>
      </span>
      <span class="footer_title">首页</span>
    </a>
    <a href="javascript:;" class="footer_item" :class="{on: $route.path==='/classify'}"  @click="goto('/classify')">
      <span class="footer_icon">
        <i class="iconfont iconleimupinleifenleileibie"></i>
      </span>
      <span class="footer_title">分类</span>
    </a>
    <a href="javascript:;" class="footer_item" :class="{on: $route.path.indexOf('/generalthings')===0}"  @click="goto('/generalthings')">
      <span class="footer_icon">
        <i class="iconfont iconshiwu"></i>
      </span>
      <span class="footer_title">识物</span>
    </a>
    <a href="javascript:;" class="footer_item" :class="{on: $route.path==='/shopcart'}"  @click="goto('/shopcart')">
      <span class="footer_icon">
        <i class="iconfont icongouwuche"></i>
      </span>
      <span class="footer_title">购物车</span>
    </a>
    <a href="javascript:;" class="footer_item" :class="{on: $route.path==='/personal'}"  @click="goto('/personal')">
      <span class="footer_icon">
        <i class="iconfont iconuser"></i>
      </span>
      <span class="footer_title">个人</span>
    </a>
  </footer>
</template>
<script>
  export default {
    methods: {
      goto(path){
        //编程式导航
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer_guide
    position fixed
    bottom 0
    left 0
    display flex
    width 100%
    height 98px
    justify-content space-around
    background white
    .footer_item
      display flex
      flex-direction column
      justify-content center
      align-items center
      width 20%
      &.on
        color #B4282D
      .footer_icon
        margin-bottom 6px
      .footer_title
        font-size 16px
</style>
