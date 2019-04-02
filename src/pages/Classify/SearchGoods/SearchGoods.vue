<template>
  <div class="shopcar_box clearfix">
    <div class="top_search">
      <label class="input_label">
        <div class="scale_img">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt="搜索" />
        </div>
        <div class="clear_img" >X</div>
        <input  type="text" :placeholder="'美妆护肤 女王专享7折起'" />
      </label>
      <span class="right_back" @click="$router.back()">取消</span>
      
      <div class="result_show" >
        <ul>
          <li >
            888
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom_title">热门搜索</div>
    <ul>
      <li >
        <a class="active" href="javascript:">
          优选
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
  
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  
  .shopcar_box
    width 100%
    .top_search
      position relative
      width 690px
      height 56px
      margin 20px 0 0 30px
      font-size 0
      display flex
      align-items center
      .result_show
        position absolute
        left 0
        bottom 0
        z-index 1
        width 750px
        min-height 1258px
        box-sizing border-box
        transform translate(-30px ,100%)
        background-color: #f4f4f4
        >ul
          width 100%
          padding 0 30px
          box-sizing border-box
          background-color: #fff
          >li
            width 100%
            height 90px
            border-bottom  1px solid #eee
            font-size 28px
            line-height 120px
      .input_label
        position relative
        width 100%
        height 100%
        .clear_img
          position absolute
          top 14px
          right 28px
          width 28px
          height 28px
          border-radius 50%
          line-height: 28px;
          text-align: center;
          font-size: 28px;
          color #f2f2f2
          background-color: #888
        .scale_img
          position absolute
          width 60px
          height 100%
          background-color: #f4f4f4
          display flex
          align-items center
          justify-content center
          >img
            width 28px
            height 28px
        >input
          display block
          width 552px
          height 100%
          padding-left 60px
          outline none
          border 0 none
          margin 0
          background-color #f4f4f4
          font-size 28px
      .right_back
        width 66px
        font-size 28px
        color #333
    .bottom_title
      padding 30px 0 0 30px
      font-size 28px
      color #999
    >ul
      padding 30px 0 0 30px
      font-size 28px
      display flex
      flex-wrap wrap
      >li
        margin 0 32px 32px 0
        a
          margin-right 32px
          padding 8px 15px
          border 1px solid #999
          height 46px
          line-height 46px
          text-align center
          font-size 28px
          &.active
            border-color $themeColor
</style>
