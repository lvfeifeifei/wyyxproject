<template>
  <div class="classifyContainer">
    <header class="head">
      <div class="search" @click="$router.push('/search')">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
        <span>搜索商品, 共22110款好物</span>
      </div>
    </header>
    <div class="classifyContent">
      <div class="leftNav">
        <div class="listContainer">
          <ul class="ulList">
            <li :class="{active:categoryL1List[curIndex]===item}"
                v-for="(item,index) in categoryL1List"
                @click="addClass(index)" :key="index">{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="rightList">
        <div class="rightDetail">
          <div class="scrollBox" v-if="categoryL1List[curIndex]">
            <img :src="categoryL1List[curIndex].wapBannerUrl" class="image" alt="">
            <div class="bottomContent">
              <ul class="list" >
                <li v-for="(subcate,index) in categoryL1List[curIndex].subCateList" :key="index">
                  <img :src="subcate.bannerUrl" alt="">
                  <p>{{subcate.name}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>
<script>
  import BScroll from 'better-scroll'
  
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
        categoryL1List:[],
        curIndex:0
      }
    },
    methods:{
      addClass (index) {//当点击的curIndex == index时添加active。把curIndex定义为状态，更新为index
        this.curIndex = index
      }
    },
    mounted () {
      this.$store.dispatch('getCategoryData',()=>{
        this.$nextTick(()=>{
          new BScroll('.listContainer',{
            scrollY:true,
            click:true
          })
          new BScroll('.rightDetail',{
            scrollY:true,
            click:true
          })
        })
      })
    },
    computed: {
      ...mapState({
        categoryData:state=>state.categoryData
      })
    },
    watch: {
      categoryData (newValue) {
        this.categoryL1List = newValue.categoryL1List
        
      }
    }
    
    
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .classifyContainer
    position relative
    width 750px
    height 1334px
    .head
      position fixed
      left 0
      top 0
      z-index 20
      background white
      width 750px
      height 88px
      padding 13px 30px
      box-sizing border-box
      border-bottom 2px solid #ededed
      .search
        display flex
        justify-content center
        align-items center
        box-sizing border-box
        width 690px
        height 56px
        background #ededed
        border-radius 10px
        color #666
        font-size 28px
        img
          width 28px
          height 28px
          margin-right 5px
    .classifyContent
      margin-top 88px
      display flex
      width 750px
      height 1060px
      .leftNav
        width 162px
        height 1148px
        .listContainer
          height 1120px
          margin-top 15px
          .ulList
            height 1121px
            li
              box-sizing border-box
              margin-top 40px
              width 162px
              height 50px
              line-height 50px
              background white
              color #333
              font-size 28px
              text-align center
              &.active
                color #ab2b2b
                border-left 4px solid #ab2b2b
      .rightList
        width 588px
        height 1148px
        padding 30px 30px 21px 30px
        box-sizing border-box
        .rightDetail
          width 528px
          height 430px
          .scrollBox
            height 431px
            .image
              width 528px
              height 192px
            .bottomContent
              .list
                margin-top 30px
                display flex
                flex-wrap wrap
                li
                  margin 0 13px
                  img
                    width 144px
                    height 144px
                  p
                    width 144px
                    color #333
                    text-align center
                    font-size 24px
                    height 72px


</style>
