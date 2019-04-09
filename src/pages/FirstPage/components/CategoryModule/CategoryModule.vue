<template>
  <div class="categoryModule">
    <div class="categoryItem"  v-for="(category,index) in categoryModule" :key="index">
      <img :src="category.titlePicUrl" alt="">
        <div class="categoryList" :class="'change'+index">
        <ul>
          <li v-for="(item,index) in category.itemList" :key="index">
            <img v-lazy="item.primaryPicUrl" :src="item.primaryPicUrl" alt="">
            <div class="product">
              <span class="detail">{{item.name}}</span>
              <p class="price">
                <span >￥{{item.counterPrice}}</span>
                <span style="text-decoration: line-through;color:#ccc" v-show="item.counterPrice!==item.retailPrice">￥{{item.retailPrice}}</span>
              </p>
            </div>
          </li>
          <li class="more">
            <div class="top">
              <span>查看更多</span>
              <i class="iconfont iconchevron-copy-copy"></i>
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
          const arr = document.querySelectorAll(".categoryList")
          const realArr = Array.from(arr)
          this.$nextTick((item,index)=>{
            realArr.map((item,index)=>{
              console.log(index);
              console.log(index);
              new BScroll(`.change${index}`,{
                scrollX: true,
                click:true
              })
  
            })
          })
      
      
      },
  
  
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .categoryModule
    background #f4f4f4
    margin-top 20px
    width 100%
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
            &:last-child
              .top
                height 200px
                line-height 200px
                text-align center
                font-size 28px
                width 200px
                background #f5f5f5
  
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
