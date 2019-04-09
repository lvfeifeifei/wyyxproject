<template>
  <div class="timeToBuy">
    <div class="timeTitle">
      <span>限时购</span>
      <div class="right">
        <span>更多</span>
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-193a1a730c.png" alt="">
      </div>
    </div>
    <ul class="TimeList">
      <li v-for="(item,index) in flashSaleModule.itemList" :key="item.itemId">
        <img v-lazy="item.picUrl" :src="item.picUrl" alt="">
        <div class="productPrice">
          <span>￥{{item.activityPrice}}</span>
          <span>￥{{item.originPrice}}</span>
        </div>
      </li>
    </ul>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return  {
        flashSaleModule:{}
      }
    },
    computed: {
      ...mapState({
        homeData:state=>state.firstPage.homeData
      })
    },
    watch: {
      homeData(newValue){
        this.flashSaleModule = newValue.flashSaleModule
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*限时购*/
  .timeToBuy
    height 700px
    background white
    padding 0 20px
    box-sizing border-box
    margin-top 20px
    width 750px
    .timeTitle
      height 100px
      line-height 100px
      width 100%
      span
        float left
        color #333
        font-size 32px
      .time
        span
          margin-left 10px
          display inline-block
          &:nth-child(2n+1)
            background rgba(0,0,0,.7)
            width 36px
            height 36px
            font-size 24px
            color white
            margin-top 35px
            border-radius 5px
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
    
    .TimeList
      display flex
      flex-wrap wrap
      justify-content space-between
      width 100%
      height 598px
      li
        height 280px
        width 216px
        margin-bottom 20px
        img
          height 216px
          width 216px
          background #f5f5f5
        .productPrice
          margin 20px 0 0 20px
          span
            &:first-child
              font-size 28px
              color #b4282d
            &:last-child
              font-size 24px
              text-decoration line-through
              color #7f7f7f

</style>
