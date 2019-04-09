<template>
  <div class="thingsContainer">
    <div class="headContainer">
      <div class="home" @click="$router.replace('/firstpage/recommend')">
        <i class="iconfont iconhome1"></i>
      </div>
      <div class="middle">
        <span class="discover" @click="goto('/generalthings/discover')"
              :class="{active:$route.path.includes('/generalthings/discover')}">发现</span>
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
    <div class="headNav">
      <ul class="navList">
        <li v-for="(item,index) in thingsNavList" @click="goTo(index)"
            :class="{active:curIndex===index}">{{item.tabName}}</li>
      </ul>
    </div>
    
    <router-view/>
    
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  
  export default {
    methods: {
      goto (path) {
        //编程式导航
        this.$router.replace(path)
      },
      goTo(index){
        //1、跳转路由
        //2、添加类名
        this.curIndex = index
      }
    },
    data () {
      return {
        curIndex:0
      }
    },
    mounted(){
      this.$store.dispatch('getThingsNavList')
    },
    computed: {
      ...mapState({
        thingsNavList:state=>state.things.thingsNavList
      })
    },
    watch: {
      //监视thingsNavList变化
      thingsNavList () {
        this.$nextTick(()=>{
          new BScroll('.headNav',{
            scrollX:true,
            scrollY:false,
            click:true,
            bounce: {
              left: false,
              right: false
            }
          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .thingsContainer
    background #f4f4f4
    .headContainer
      position fixed
      top 0
      left 0
      background white
      z-index 200
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
    .headNav
      background white
      margin-top 90px
      position fixed
      left 0
      top 0
      z-index 20
      height 72px
      width 750px
      .navList
        width 1030px
        height 72px
        display flex
        overflow hidden
        border-bottom 2px solid #ccc
        li
          &:first-child
            margin-left 10px
          box-sizing border-box
          height 72px
          padding 0 5px
          margin-right 30px
          line-height 72px
          &.active
            border-bottom 5px solid #B4282D
            color #B4282D
  
  
</style>
