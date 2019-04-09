<template>
  <div class="contentWrap">
    <div class="recommendContainer">
      <!--轮播-->
      <Swiper/>
      <!--服务列表-->
      <ServerList/>
      <div class="container">
        <!--商品分类-->
        <Categorys/>
        <!--新人专享-->
        <div class="freshManServe">
          <div class="freshManTitle">
            <span>—  新人专享礼  —</span>
          </div>
          <div class="freshClassify">
            <div class="left">
              <a href="javascript:;">
                <span>新人专享礼包</span>
                <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
              </a>
            </div>
            <div class="right">
              <ul class="rightList">
                <li>
                  <div class="title">
                    <h2>福利社</h2>
                    <span>今日特价</span>
                  </div>
                  <img src="https://yanxuan.nosdn.127.net/3cdd30edad8157fb520954293c5eccd2.png?imageView&thumbnail=200x200&quality=75" alt="">
                </li>
                <li>
                  <div class="title">
                    <h2>新人拼</h2>
                    <span>1元起包邮</span>
                  </div>
                  <img src="https://yanxuan.nosdn.127.net/d1f507667274d2bda8371faf24872961.png?imageView&thumbnail=200x200&quality=75" alt="">
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <!--品牌制造商专供-->
        <div class="brandServer">
          <div class="brandTitle">
            <span>品牌制造商直供</span>
            <div class="right">
              <span>更多</span>
              <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-193a1a730c.png" alt="">
            </div>
          </div>
          <ul class="brandList" >
            <li style="background-image: url('https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1');background-size: 100% 100%">
              <a href="javascript:;">
                <h4>海外制造商</h4>
                <div class="price">
                  <span>9.9元起</span>
                  <span class="iconfont">上新</span>
                </div>
              </a>
            </li>
            <li style="background-image: url('https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1');background-size: 100% 100%">
              <a href="javascript:;">
                <h4>CK制造商</h4>
                <div class="price">
                  <span>32.9元起</span>
                  <span class="iconfont">上新</span>
                </div>
              </a>
            </li>
            <li style="background-image: url('https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1');background-size: 100% 100%">
              <a href="javascript:;">
                <h4>新秀丽制造商</h4>
                <div class="price">
                  <span>34.9元起</span>
                  <span class="iconfont">上新</span>
                </div>
              </a>
            </li>
            <li style="background-image: url('https://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1');background-size: 100% 100%">
              <a href="javascript:;">
                <h4>Nine West制造商</h4>
                <div class="price">
                  <span>219元起</span>
                  <span class="iconfont">上新</span>
                </div>
              </a>
            </li>
          </ul>

        </div>
        <!--类目热销-->
        <div class="hotSell">
          <div class="hotTitle">
            <span>类目热销榜</span>
          </div>
          <div class="hotList">
            <ul class="hotClassify">
              <li>
                <span>好评榜</span>
              </li>
              <li>
                <span>好评榜</span>
              </li>
            </ul>
            <ul class="productList">
              <li>
                <span>居家生活榜</span>
                <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&quality=65&thumbnail=200x200" alt="">
              </li>
              <li>
                <span>居家生活榜</span>
                <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&quality=65&thumbnail=200x200" alt="">
              </li>
              <li>
                <span>居家生活榜</span>
                <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&quality=65&thumbnail=200x200" alt="">
              </li>
              <li>
                <span>居家生活榜</span>
                <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&quality=65&thumbnail=200x200" alt="">
              </li>
              <li>
                <span>居家生活榜</span>
                <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&quality=65&thumbnail=200x200" alt="">
              </li>
              <li>
                <span>居家生活榜</span>
                <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&quality=65&thumbnail=200x200" alt="">
              </li>
              <li>
                <span>居家生活榜</span>
                <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&quality=65&thumbnail=200x200" alt="">
              </li>
              <li>
                <span>居家生活榜</span>
                <img src="http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?imageView&quality=65&thumbnail=200x200" alt="">
              </li>
            </ul>
          </div>
        </div>
        <!--人气推荐-->
        <BestPopular/>
        <!--限时购-->
        <TimeToBuy/>
        <!--新品首发-->
      
        <NewProducts  />
        <!--无题列表-->
        <div class="noTitleList">
          <ul class="list">
            <li>
              <a href="javascript:;">
                <h4>春茶尝鲜季</h4>
                <div class="price">
                  <span>预售好价75折</span>
                </div>
                <div class="imgs">
                  <img src="https://yanxuan.nosdn.127.net/b097972db0ed9d5b47fbed0e2dbd1d99.png?imageView&thumbnail=150x150&quality=75" alt="">
                  <img src="https://yanxuan.nosdn.127.net/c4e35beeba46bf138c4ec54a30210b2c.png?imageView&thumbnail=150x150&quality=75" alt="">
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <h4>早春添新鞋</h4>
                <div class="price">
                  <span>休闲鞋/高跟鞋/等等</span>
                </div>
                <div class="imgs">
                  <img src="https://yanxuan.nosdn.127.net/b093cd15ca7de193d46f0ac44dde71da.png?imageView&thumbnail=150x150&quality=75" alt="">
                  <img src="https://yanxuan.nosdn.127.net/09475c95ae7792fd011053b9fe2735c1.png?imageView&thumbnail=150x150&quality=75" alt="">
                </div>
            
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <h4>春季包包大种草</h4>
                <div class="price">
                  <span>复古桶包/双肩包89元起</span>
                </div>
                <div class="imgs">
                  <img src="https://yanxuan.nosdn.127.net/5a35cc42a23794c2f0def85aa079172f.png?imageView&thumbnail=150x150&quality=75" alt="">
                  <img src="https://yanxuan.nosdn.127.net/fc8a8080b46ce5be4fc2cf0662ac397c.png?imageView&thumbnail=150x150&quality=75" alt="">
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <h4>按摩神器大赏</h4>
                <div class="price">
                  <span>仿真人手按摩</span>
                </div>
                <div class="imgs">
                  <img src="https://yanxuan.nosdn.127.net/838f3d6c83de39019f1a127a3a11f499.png?imageView&thumbnail=150x150&quality=75" alt="">
                  <img src="https://yanxuan.nosdn.127.net/5e9b2d7e09794c96e60149dbe2ccac1d.png?imageView&thumbnail=150x150&quality=75" alt="">
                </div>
            
              </a>
            </li>
          </ul>
      
        </div>
        <CategoryModule/>
        <div class="footerBox">
          <div class="topLink">
            <a href="javascript:;">下载APP</a>
            <a href="javascript:;">电脑版</a>
          </div>
          <p class="bottomContent">
            <span>网易公司版权所有 © 1997-2019</span><br/>
            <span>食品经营许可证：JY13301080111719</span>
          </p>
        </div>
  
        <img  class="go-top" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-f502426678.png" @click="backTop">
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from '../components/Swiper/Swiper.vue'
  import BScroll from 'better-scroll'
  
  import ServerList from '../components/ServerList/ServerList.vue'
  import Categorys from '../components/Categorys/Categorys.vue'
  import TimeToBuy from '../components/TimeToBuy/TimeToBuy.vue'
  import NewProducts from '../components/NewProducts/NewProducts.vue'
  import BestPopular from '../components/BestPopular/BestPopular.vue'
  import CategoryModule from '../components/CategoryModule/CategoryModule.vue'
  
  import {mapState} from 'vuex'
  export default {
    data (){
      return {
        kingKongModule:{},
      }
    },
    components: {
      ServerList,
      Categorys,
      TimeToBuy,
      NewProducts,
      BestPopular,
      CategoryModule,
      Swiper
    },
    mounted () {
      this.$store.dispatch('getHomeData',()=>{
      
      })
  
      window.addEventListener('scroll', this.scrollToTop)
      
    },
    methods: {
        // 点击图片回到顶部方法，加计时器是为了过渡顺滑
        backTop () {
          let that = this
          let timer = setInterval(() => {
            let ispeed = Math.floor(-that.scrollTop / 5)
            document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
            if (that.scrollTop === 0) {
              clearInterval(timer)
            }
          }, 16)
        },
    
        // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
        scrollToTop () {
          let that = this
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          that.scrollTop = scrollTop
          if (that.scrollTop > 60) {
            that.btnFlag = true
          } else {
            that.btnFlag = false
          }
        }
    },
    destroyed () {
      window.removeEventListener('scroll', this.scrollToTop)
    },
  
    computed: {
      ...mapState({
        homeData: state=>state.firstPage.homeData
      })
    },
    watch:{
      homeData(){
        const arr = document.querySelectorAll(".contentWrap")
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .contentWrap
    width 100%
    height 100%
    position absolute
    top 0px
    left 0
  .recommendContainer
    width 100%
    .container
      width 750px
      
      /*新人专享*/
      .freshManServe
        box-sizing border-box
        width 750px
        height 558px
        background-color white
        padding 0 30px 30px
        .freshManTitle
          height 90px
          color #333
          font-size 32px
          text-align center
          line-height 90px
        .freshClassify
          width 100%
          height 438px
          display flex
          .left
            width 343px
            height 434px
            background-color #F9E9CF
            a
              box-sizing border-box
              span
                display block
                height 78px
                color #333
                font-size 32px
                padding 30px 0 0 30px
              img
                width 258px
                height 257px
                margin 0 0 40px 40px
          .right
            margin-left 3px
            width 343px
            height 215px
            .rightList
              li
                display flex
                padding 20px 0 0 30px
                box-sizing border-box
                &:first-child
                  background-color #FBE2D3
                  margin-bottom 4px
                &:last-child
                  background-color #FFECC2
                .title
                  display flex
                  flex-direction column
                  width 343px
                  height 20px
                  h2
                    display block
                    font-size 32px
                    color #333
                    margin-bottom 8px
                  span
                    display block
                    color #7f7f7f
                    font-size 24px
                img
                  width 195px
                  height 195px
                  float right
      /*品牌制造专供*/
      .brandServer
        width 100%
        padding 0 30px
        box-sizing border-box
        height 655px
        background-color white
        margin-top 20px
        .brandTitle
          height 100px
          line-height 100px
          width 100%
          span
            float left
            color #333
            font-size 32px
          .right
            float right
            img
              width 13px
              height 23px
              vertical-align middle
              margin-left 10px
            span
              font-size 28px
              vertical-align middle
      
        .brandList
          display: flex
          flex-wrap wrap
          li
            width 340px
            height 260px
            background-color #f4f4f4
            margin-right 4px
            margin-bottom 4px
            background-image url("http://yanxuan.nosdn.127.net/c097be1….png?imageView&thumbnail=343y260&enlarge=1")
            a
              text-align center
              h4
                margin 30px 0 5px 0
                color #333
                font-size 28px
              .iconfont
                display inline-block
                width 64px
                height 32px
                line-height 32px
                color #ffffff
                font-size 24px
                border-radius 5px
                background-color #CBB693
  
      /*类目热销*/
      .hotSell
        width 100%
        height 710px
        padding 0 30px
        box-sizing border-box
        background-color white
        margin-top 30px
        .hotTitle
          height 100px
          line-height 100px
          width 100%
          font-size 32px
        .hotList
          width 100%
          height 610px
          .hotClassify
            display flex
            li
              position relative
              width 340px
              height 200px
              line-height 200px
              background-size 200px 200px
              background-repeat no-repeat
              background-position-x 130px
              margin-bottom 10px
              &:first-child
                background-image url("http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?imageView&quality=65&thumbnail=200x200")
                background-color #F9F3E4
                margin-right 10px
              &:last-child
                background-color #EBEFF6
                background-image url("http://yanxuan.nosdn.127.net/1fa535e25330987297a27e63c27db2e6.png?imageView&quality=65&thumbnail=200x200")
              span
                position absolute
                left 30px
                color #333
                font-size 28px
                display block
          .productList
            display flex
            flex-wrap wrap
            box-sizing border-box
            li
              width 162px
              height 180px
              background-color #f5f5f5
              text-align center
              padding 20px 0
              box-sizing border-box
              margin-right 10px
              margin-bottom 10px
              span
                margin-top 50px
              img
                height 120px
                width 120px
      
      .noTitleList
        width 100%
        height 576px
        margin-top 20px
        padding 20px 30px
        box-sizing border-box
        background white
        .list
          display: flex
          flex-wrap wrap
          li
            padding 20px 0 0 20px
            box-sizing border-box
            width 340px
            height 260px
            background-color #f4f4f4
            margin-right 4px
            margin-bottom 4px
            background-image url("http://yanxuan.nosdn.127.net/c097be1….png?imageView&thumbnail=343y260&enlarge=1")
            a
              h4
                color #333
                font-size 28px
              .price
                margin 10px 0
              .imgs
                img
                  width 150px
                  height 150px
      
      .footerBox
        width 750px
        height 244px
        background #414141
        margin-bottom 100px
        margin-top 20px
        text-align center
  
        .topLink
          display flex
          a
            &:first-child
              margin-left 180px
            margin-top 60px
            margin-left 50px
            width 172px
            font-size 24px
            color white
            border 2px solid #fff
            height 62px
            border-radius 4px
            outline none
            text-align center
            line-height 62px
        .bottomContent
          height 42px
          line-height 30px
          margin-top 30px
          color #999
          width 100%
          text-align center
  
      .go-top
        position fixed
        right 30px
        width 90px
        height 90px
        border-radius 50%
        background red
        bottom 150px
</style>
