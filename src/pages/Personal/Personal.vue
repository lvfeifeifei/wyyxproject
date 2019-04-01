<template>
  <div class="personalContainer">
    <header class="firstHead">
      <div class="home" @click="goTo"></div>
      <div class="logo"></div>
      <div class="search"></div>
      <div class="shopCart"></div>
    </header>
    <div class="content">
      <div class="imageBox">
        <img class="image" src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div>
        <div>
          <i class="icon"></i>
          <span>手机号码登录</span>
        </div>
      </div>
    
    </div>

  </div>
</template>
<script>
  export default {
    methods: {
      goTo () {
        this.$router.push('/firstPage')
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personalContainer
    .firstHead
      display flex
      width 100%
      height 86px
      background white
      .home
        background-size 185px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png  ")
        width 88px
        height 88px
        margin-left 30px
        background-position 0 -59px
      .logo
        background-size 185px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png  ")
        width 210px
        height 90px
        margin-left 160px
        background-position 0 -128px
      .search
        background-size 185px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png  ")
        width 88px
        height 88px
        margin-left 160px
        background-position 0 -373px
      .shopCart
        background-size 185px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png  ")
        width 88px
        height 88px
       
        background-position 0 10px
  
  
    .content
      width 750px
      background #f2f5f4
      height 1246px
      .imageBox
        width 750px
        height 410px
        line-height 410px
        text-align center
        .image
          width 268px
          height 90px
</style>
