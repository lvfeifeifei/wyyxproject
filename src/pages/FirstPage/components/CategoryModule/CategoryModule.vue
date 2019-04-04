<template>
  <div class="categoryModule">
    <div class="categoryItem">
      <img src="https://yanxuan.nosdn.127.net/fc2388e61c4e083924689c889987cc10.jpg" alt="">
      <div class="categoryList">
        <ul>
          <li>
            <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="product">
              <span class="detail">网易智造N520除螨吸尘器</span>
              <p class="price">￥440</p>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="product">
              <span class="detail">网易智造N520除螨吸尘器</span>
              <p class="price">
                <span>￥254</span>
                <span style="text-decoration: line-through;color:#999">￥299</span>
              </p>
            </div>
            <div class="status">
              <p>爆品</p>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="product">
              <span class="detail">网易智造N520除螨吸尘器</span>
              <p class="price">
                <span>￥254</span>
                <span style="text-decoration: line-through;color:#999">￥299</span>
              </p>
            </div>
            <div class="status">
              <p>爆品</p>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="product">
              <span class="detail">网易智造N520除螨吸尘器</span>
              <p class="price">
                <span>￥254</span>
                <span style="text-decoration: line-through;color:#999">￥299</span>
              </p>
            </div>
            <div class="status">
              <p>爆品</p>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="product">
              <span class="detail">网易智造N520除螨吸尘器</span>
              <p class="price">
                <span>￥254</span>
                <span style="text-decoration: line-through;color:#999">￥299</span>
              </p>
            </div>
            <div class="status">
              <p>爆品</p>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="product">
              <span class="detail">网易智造N520除螨吸尘器</span>
              <span class="price">￥440</span>
            </div>
            <div class="status">
              <p>爆品</p>
              <p>限时购</p>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="product">
              <span class="detail">网易智造N520除螨吸尘器</span>
              <span class="price">￥440</span>
            </div>
            <div class="status">
              <p>爆品</p>
              <p>限时购</p>
            </div>
          </li>
          <li>
            <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt="">
            <div class="product">
              <span class="detail">网易智造N520除螨吸尘器</span>
              <span class="price">￥440</span>
            </div>
            <div class="status">
              <p>爆品</p>
              <p>限时购</p>
            </div>
          </li>
          <li>
            <div class="moreProduct">
              <span class="lookMore">查看更多 ></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    data (){
      return {
        categoryModule: []
      }
    },
    mounted () {
      this.$store.dispatch('getHomeData',()=>{
        this.$nextTick(()=>{
          new BScroll('.categoryList',{
            scrollX: true,
            click:true
          })
        })
      })
    },
    computed: {
      ...mapState({
        homeData: state=>state.firstPage.homeData
      })
    },
    watch: {
      homeData (newValue) {
        this.categoryModule = newValue.categoryModule
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .categoryModule
    background #f4f4f4
    margin-top 20px
    width 100%
    height 3200px
    .categoryItem
      margin-bottom 20px
      width 750px
      background white
      height 781px
      img
        width 750px
        height 370px
      .categoryList
        overflow hidden
        height 390px
        width 720px
        margin-left 20px
        box-sizing border-box
        ul
          display flex
          margin 20px 30px 0 30px
          width 2000px
          height 100%
          li
            height 361px
            width 200px
            margin-right 20px
            img
              height 200px
              width 200px
              background #f5f5f5
            .product
              margin 10px 0
              line-height 35px
              .detail
                font-size 24px
                color #333
              .price
                color #b4282d
            .status
              p
                display inline-block
                height 32px
                line-height 32px
                border 1px solid red
                border-radius 15px
                color red
                padding 2px 15px



</style>
