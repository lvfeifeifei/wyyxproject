<template>
  <div class="container">
    <Header/>
    <div class="loginContainer">
      <img class="logo" src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      <form class="checkLogin">
        <input type="text" class="writePhone" placeholder="请输入手机号">
        <div class="messageCode">
          <input type="text" placeholder="请输入密码">
        </div>
        <div class="pwdLogin">
          <span class="left">忘记密码？</span>
          <span class="right" @click="$router.replace('/phonelogin')">使用短信验证登录</span>
        </div>
        <div class="loginWays">
          <span @click="$router.push('/phonelogin')">登录</span>
        </div>
        <div class="otherLoginWays">
          <span class="emailFont">其他登录方式</span>
        </div>
        <div class="rapidRegister">
          <span>注册账号</span>
          <i class="iconfont iconchevron-copy-copy"></i>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container
    .loginContainer
      width 100%
      padding 0 40px
      box-sizing border-box
      .logo
        display block
        margin 60px auto 130px
        width 192px
        height 64px
      .checkLogin
        .writePhone
          outline none
          height 100px
          display block
          border-bottom 1px solid #ccc
          width 100%
        .messageCode
          height 100px
          border-bottom 1px solid #ccc
          width 100%
          display flex
          justify-content center
          input
            outline none
            margin-top 15px
            height 80px
            width 100%
        .pwdLogin
          width 100%
          height 100px
          line-height 100px
          color #666
          .left
            float left
            font-size 28px
          .right
            font-size 28px
            float right
        .loginWays
          margin-top 10px
          width 100%
          height 90px
          line-height 90px
          border-radius 8px
          background #b4282d
          text-align center
          span
            color white
        .otherLoginWays
          box-sizing border-box
          margin-top 20px
          width 100%
          height 90px
          color #b4282d
          line-height 90px
          border-radius 8px
          border 2px solid #b4282d
          text-align center
        .rapidRegister
          height 90px
          line-height 90px
          text-align center
          width 100%
          span
            font-size 28px
            vertical-align middle
          .iconchevron-copy-copy
            margin-left -5px
            font-size 36px
            vertical-align middle




</style>
