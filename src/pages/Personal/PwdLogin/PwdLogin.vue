<template>
  <div class="container">
    <Header/>
    <div class="loginContainer">
      <img class="logo" src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      <div class="checkLogin">
        <input type="text" class="writePhone" placeholder="请输入手机号" v-model="user.phone">
        <div class="messageCode">
          <input type="tel" placeholder="请输入密码" v-model="user.pwd">
        </div>
        <label class="input_phone">
          <div class="login_tips">
            <p>{{promotMsg}}</p>
            <p>{{promotPwd}}</p>
          </div>
        </label>
        <div class="pwdLogin">
          <span class="left">忘记密码？</span>
          <span class="right" @click="$router.replace('/phonelogin')">使用短信验证登录</span>
        </div>
        <div class="loginWays" @click="toLogin">
          <span>登录</span>
        </div>
        <div class="otherLoginWays">
          <span class="emailFont">其他登录方式</span>
        </div>
        <div class="rapidRegister">
          <span>注册账号</span>
          <i class="iconfont iconchevron-copy-copy"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  
  export default {
    data () {
      return {
        user:{
          phone: '',
          pwd: '',
        },
        promotMsg:'',
        promotPwd:''
      }
    },
    watch: {//深度监视user对象的变化
      user:{
        handler(newUser){
          if (/^1\d{10}$/.test(newUser.phone)) {
            this.promotMsg = ''
          }else{
            this.promotMsg = '请输入正确的手机号'
          }
          
          if (/^[0-9]{6}$/.test(newUser.pwd)) {
            this.promotPwd = ''
          }else{
            this.promotPwd = '请输入正确密码'
          }
        }
      },
      deep:true
    },
    methods: {
      toLogin () {
        if(this.promotMsg==="" && this.promotPwd===""){
          console.log("登录成功")
        }
      }
    }
  
  }
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
        .input_phone
          position relative
        .login_tips
          position absolute
          left 50%
          top -100%
          width 50%
          transform translateX(-50%)
          color $themeColor
          font-size 28px
  
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
