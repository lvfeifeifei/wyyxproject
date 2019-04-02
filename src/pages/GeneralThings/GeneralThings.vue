<template>
  <div class="thingsContainer">
    <div class="container">
      <div class="home" @click="$router.replace('/firstpage/recommend')">
        <i class="iconfont iconhome1"></i>
      </div>
      <div class="middle">
        <span class="discover" @click="goto('/generalthings/discover')"
              :class="{active:$route.path==='/generalthings/discover'}">发现</span>
        <span @click="goto('/generalthings/selection')"
              :class="{active:$route.path==='/generalthings/selection'}"
        >甄选家</span>
      </div>
      <div class="right">
        <span class="search" @click="$router.push('/search')">
          <i class="iconfont iconartboard9-copy"></i>
        </span>
        <span class="cart" @click="$router.push('/shopcart')">
          <i class="iconfont icongouwuche"></i>
        </span>

      </div>
    </div>
    <router-view/>

  </div>
</template>
<script>
  export default {
    methods: {
      goto (path) {
        //编程式导航
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .thingsContainer
    background #f4f4f4
    .container
      padding 0 30px
      box-sizing border-box
      width 100%
      height 90px
      display flex
      align-items center
      justify-content space-between
      border-bottom 1px solid #ccc
      .home
        i
          font-size 48px
      .middle
        margin-left 35px
        .discover
          margin-right 20px
        span
          &.active
            color #b4282d
            font-weight bold
            font-size 40px
      .right
        display flex
        font-size 28px
        .search
          margin-right 20px
          font-size 28px
          i
            font-size 48px

        .cart
          i
            font-size 48px
</style>
