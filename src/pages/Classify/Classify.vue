<template>
  <div class="classifyContainer">
    <header class="head">
      <div class="search">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
        <span>搜索商品, 共22110款好物</span>
      </div>
    </header>
    <div class="classifyContent">
      <div class="leftNav">
        <div class="listContainer">
          <ul class="ulList">
            <li class="active">周年庆专区</li>
            <li>春夏专区</li>
            <li>爆品专区</li>
            <li>新品专区</li>
            <li>居家生活</li>
            <li>服饰鞋包</li>
            <li>美食酒水</li>
            <li>个护清洁</li>
            <li>母婴亲子</li>
            <li>运动旅行</li>
            <li>数码家电</li>
            <li>全球特色</li>
          </ul>
        </div>
      </div>
      <div class="rightList">
        <div class="rightDetail">
          <div class="scrollBox">
            <div class="image"></div>
            <div class="bottomContent">
              <ul class="list">
                <li>
                  <img src="http://yanxuan.nosdn.127.net/35d4b6b281f7ab4c5524e8d1c317dd1d.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <p>9.9元最高抵399</p>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/35d4b6b281f7ab4c5524e8d1c317dd1d.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <p>9.9元最高抵399</p>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/35d4b6b281f7ab4c5524e8d1c317dd1d.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <p>9.9元最高抵399</p>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/35d4b6b281f7ab4c5524e8d1c317dd1d.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <p>9.9元最高抵399</p>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/35d4b6b281f7ab4c5524e8d1c317dd1d.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <p>9.9元最高抵399</p>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/35d4b6b281f7ab4c5524e8d1c317dd1d.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <p>9.9元最高抵399</p>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/35d4b6b281f7ab4c5524e8d1c317dd1d.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <p>9.9元最高抵399</p>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/35d4b6b281f7ab4c5524e8d1c317dd1d.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <p>9.9元最高抵399</p>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/35d4b6b281f7ab4c5524e8d1c317dd1d.png?imageView&quality=85&thumbnail=144x144" alt="">
                  <p>9.9元最高抵399</p>
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
  export default {
    mounted () {
      new BScroll('.listContainer',{
        scrollY:true,
        click:true
      })
      new BScroll('.rightDetail',{
        scrollY:true,
        click:true
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .classifyContainer
    width 750px
    height 1334px
    .head
      position relative
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
      display flex
      width 750px
      height 1148px
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
              background-image url("http://yanxuan.nosdn.127.net/d574677c2dede0bf7a8376cc07fa5f64.jpg?imageView&thumbnail=0x196&quality=75")
              background-size 100% 100%
            .bottomContent
              .list
                margin-top 30px
                display flex
                justify-content space-around
                flex-wrap wrap
                li
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
