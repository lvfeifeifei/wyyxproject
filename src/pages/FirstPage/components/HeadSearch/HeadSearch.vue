<template>
  <div class="headSearch">
    <!--头部-->
    <header class="head">
      <a class="logo">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      </a>
      <div class="search" @click="$router.push('/search')">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
        <span>搜索商品，共22110款好物</span>
      </div>
      <div class="login">登录</div>
    </header>
    <!--导航-->
    <div class="listNav">
      <div class="left">
        <ul class="list">
          <li :class="{active: $route.path==='/firstpage/recommend'}" @click="goto('/firstpage/recommend')">推荐</li>
          <li :class="{active: $route.path==='/firstpage/homeLife'}" @click="goto('/firstpage/homeLife')">居家生活</li>
          <li :class="{active: $route.path==='/firstpage/shoespackage'}" @click="goto('/firstpage/shoespackage')">服饰鞋包</li>
          <li :class="{active: $route.path==='/firstpage/foodbeverage'}" @click="goto('/firstpage/foodbeverage')">美食酒水</li>
          <li :class="{active: $route.path==='/firstpage/houseclean'}" @click="goto('/firstpage/houseclean')">个户清洁</li>
          <li :class="{active: $route.path==='/firstpage/childparent'}" @click="goto('/firstpage/childparent')">母婴亲子</li>
          <li :class="{active: $route.path==='/firstpage/sportstravel'}" @click="goto('/firstpage/sportstravel')">运动旅行</li>
          <li :class="{active: $route.path==='/firstpage/elextrical'}" @click="goto('/firstpage/elextrical')">数码家电</li>
          <li :class="{active: $route.path==='/firstpage/globalfeature'}" @click="goto('/firstpage/globalfeature')">全球特色</li>
        </ul>
      </div>
      <div class="linear"></div>
      <div class="arrowImg" @click="toggole">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png" alt="">
      </div>
      <div class="allChannel" v-show="is_open">
        <div class="title">
          <span>全部频道</span>
        </div>
        <ul class="channelList">
          <li class="active">推荐</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>个户清洁</li>
          <li>母婴亲子</li>
          <li>运动旅行</li>
          <li>数码家电</li>
          <li>全球特色</li>
        </ul>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    data () {
      return {
        is_open:false,
      }
    },
  
    methods: {
      toggole () {
        this.is_open = !this.is_open
      },
      goto(path){
        //编程式导航
        this.$router.replace(path)
      }
    
    },
  
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .headSearch
    position fixed
    left 0
    top 0
    z-index 50
    .head
      width 100%
      display flex
      align-items center
      box-sizing border-box
      padding 20px
      height 90px
      background-color white
      .logo
        margin-left 15px
        img
          width 138px
          height 40px
      .search
        display flex
        justify-content center
        align-items center
        box-sizing border-box
        width 442px
        height 56px
        background #ededed
        margin 0 15px
        border-radius 15px
        padding 10px
        color #666
        img
          width 28px
          height 28px
          margin-right 5px
      .login
        text-align center
        width 70px
        height 35px
        line-height 35px
        border 2px solid #b4282d
        border-radius 10px
        color #b4282d
    /*导航*/
    .listNav
      position relative
      display flex
      box-sizing border-box
      height 60px
      background-color white
      .left
        width 600px
        overflow hidden
        .list
          position relative
          display flex
          justify-content space-around
          width 1460px
          height 60px
          margin-left 10px
          li
            box-sizing border-box
            height 60px
            line-height 60px
            font-size 28px
            padding 0 15px
            &.active
              color #b4282d
              border-bottom 8px solid #b4282d
      .linear
        width 60px
        height 100%
        background-color rgba(255,255,255,.7)
      .arrowImg
        height 60px
        width 120px
        img
          position absolute
          left 674px
          top 12px
          width 30px
          height 30px
          z-index 20
      .allChannel
        position absolute
        left 0
        top 0
        width 100%
        height 370px
        z-index 2
        box-sizing border-box
        background #fff
        .title
          width 100%
          height 60px
          line-height 60px
          box-sizing border-box
          padding 0 20px
        .channelList
          display flex
          flex-wrap wrap
          li
            width 140px
            height 56px
            line-height 56px
            text-align center
            border 2px solid #ccc
            border-radius 5px
            margin 20px
            font-size 24px
            background #fafafa
            &.active
              color #b4282d
              border 2px solid #b4282d





</style>
