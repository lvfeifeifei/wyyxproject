<template>
  <div class="title">
    <div class="home same" @click="$router.replace('/firstpage/recommend')"></div>
    <div class="logo same"></div>
    <div class="search same" @click="$router.push('/search')"></div>
    <div class="cart same" @click="$router.push('/shopcart')"></div>
  </div>

</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .title
    width 100%
    height 90px
    display flex
    border-bottom 1px solid #ccc
    .home
      width 70px
      height 70px
      background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png")
      background-size 150px
      background-repeat no-repeat
      background-position 0 -49px
      margin-left 25px
      margin-right 200px
      margin-top 10px
    .logo
      width 220px
      height 60px
      background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png")
      background-size 180px
      background-repeat no-repeat
      background-position 0 -125px
      margin-right 120px
      margin-top 10px
    .search
      width 70px
      height 70px
      background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png")
      background-size 150px
      background-repeat no-repeat
      background-position 0 -310px
      margin-right 15px
      margin-top 15px
    .cart
      width 70px
      height 70px
      margin-right 10px
      background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png")
      background-size 150px
      background-repeat no-repeat
      background-position 0 5px
      margin-top 10px



</style>
