<template>
  <div id="personal">
    <Header/>
    <div class="login">
      <div class="logo">
        <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="LoginWays">
        <div class="icon"></div>
        <span @click="$router.push('/phonelogin')">手机号码登录</span>
      </div>
      <div class="LoginWays emailBackground">
        <div class="icon emailLogin" ></div>
        <span class="emailFont">邮箱账号登录</span>
      </div>
      <div class="rapidRegister">
        <span>手机号快速注册</span>
        <span>
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-8d47138d73.png" alt="">
          </span>
      </div>
      <div class="otherLoginWays">
        <div class="wechat">
          <!--<span class="icon "></span>-->
          <span class="iconfont iconweixin2 "></span>
          <span>微信</span>
        </div>
        <div class="QQ">
          <!--<span class="icon"></span>-->
          <span class="iconfont iconQQ1 "></span>
          
          <span>QQ</span>
        </div>
        <div class="weibo">
          <!--<span class="icon"></span>-->
          <span class="iconfont iconweibo "></span>
          <span>微博</span>
        </div>
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
  #personal
    width 100%
    height 100%
    background white
    .login
      width 100%
      position absolute
      left 0
      right 0
      top 90px
      bottom 0
      background #f4f4f4
      .logo
        width 100%
        text-align center
        margin-top 150px
        margin-bottom 200px
        img
          width 268px
          height 90px
      .LoginWays
        width 670px
        height 100px
        line-height 100px
        background #b4282d
        margin 0 auto
        position relative
        display flex
        text-align center
        margin-bottom 25px
        &.emailBackground
          background white
          border 1px solid #b4282d
        .icon
          width 60px
          height 60px
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-156f617841.png")
          background-repeat no-repeat
          background-size 45px
          background-position 0 -60px
          margin-left 210px
          margin-top 30px
          &.emailLogin
            background-position 0 0px
        span
          font-size 30px
          color white
          &.emailFont
            color #b4282d
      
      
      .rapidRegister
        width 100%
        height 100px
        font-size 30px
        text-align center
        line-height 100px
        span
          img
            width 30px
            height 30px
            vertical-align middle
      .otherLoginWays
        width 540px
        height 50px
        /*background pink*/
        margin 0 auto
        margin-top 350px
        display flex
        .wechat
          width 33%
          height 100%
          text-align center
          line-height 50px
          .icon
            width 50px
            height 100%
            display inline-block
            background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-156f617841.png")
            background-size 50px
            background-position 0 170px
          span
            font-size 25px
            margin-bottom -15px
        
        .QQ
          padding 0 10px
          box-sizing border-box
          width 33%
          height 100%
          border-left 1px solid gray
          border-right 1px solid gray
          .iconfont
            margin-top 15px
            margin-left 20px
            width 80px
            height 100%
            display inline-block
          span
            font-size 25px
            margin-bottom -15px
        .weibo
          width 33%
          height 100%
          .iconfont
            margin-top 15px
            margin-left 20px
            display inline-block
          span
            font-size 25px
            margin-bottom -15px
</style>
