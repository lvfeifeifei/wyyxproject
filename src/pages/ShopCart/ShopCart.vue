<template>
  <div id="cart">
    <div class="header">
      <div>购物车</div>
      <div class="getPaper">领券</div>
    </div>
    <div class="rules">
      <div>
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png" alt="">
        <span>30天无忧退货</span>
      </div>
      <div>
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png" alt="">
        <span>30天无忧退货</span>
      </div>
      <div>
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png" alt="">
        <span>30天无忧退货</span>
      </div>
    
    
    </div>
    <div class="cartPicture">
      <div class="picture">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
        <span>去添加点什么吧</span>
      </div>
      <div class="btn">
        登录
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    
    },
    data(){
      return {}
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  #cart
    .header
      width 100%
      height 80px
      display flex
      justify-content space-between
      align-items center
      font-size 35px
      padding 0 25px
      box-sizing border-box
      .getPaper
        color red
        font-size 30px
    .rules
      width 100%
      height 70px
      background #f4f4f4
      display flex
      padding 0 20px
      align-items center
      box-sizing border-box
      justify-content space-between
    
    .cartPicture
      width 100%
      height 100%
      padding-top 290px
      padding-bottom 420px
      background #f4f4f4
      .picture
        width 100%
        justify-content center
        align-items center
        display flex
        flex-direction column
        img
          width 248px
          height  248px
      .btn
        width 480px
        height 92px
        background #b4282d
        text-align center
        line-height 92px
        font-size 35px
        margin 0 auto
        border-radius 5px
        margin-top 35px
</style>
