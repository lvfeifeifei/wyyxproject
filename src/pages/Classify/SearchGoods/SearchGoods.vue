<template>
  <div class="searchMain">
    <div class="searchheader">
      <div class="search">
          <span>
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
        </span>
        <input type="text" placeholder="网易严选">
      </div>
      <div class="cancle" @click="$router.back()">
        取消
      </div>
    </div>
    <div class="hotSearch">
      <div class="fontSearch">热门搜索</div>
      <div class="searchList">
        <ul>
          <li :class="{highlight:item.highlight}" v-for="(item,index) in hotKeywordVOList">{{item.keyword}}</li>
        
        </ul>
      </div>
    </div>
  
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    components: {
    
    },
    data(){
      return {
        hotKeywordVOList:[],
      }
    },
    mounted(){
      this.$store.dispatch('getSearchList')
      console.log(this.searchContent);
    },
    computed:{
      ...mapState({
        searchList:state=>state.classify.searchList
      })
    },
    watch:{
      searchList (newValue) {
        this.hotKeywordVOList = newValue.hotKeywordVOList
      }
    },
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  .searchMain
    width 100%
    height 100%
    background #f4f4f4
    dia
    .searchheader
      width 100%
      height 80px
      line-height 80px
      background white
      border-radius 5px
      display flex
      .search
        width 600px
        height 70px
        margin-bottom 15px
        background #f4f4f4
        margin 0 auto
        text-align center
        margin-top 10px
        padding-bottom 15px
        span
          img
            width 30px
            height 30px
        input
          width 500px
          height 80%
          outline 0 none
          background #f4f4f4
          margin-top -30px
          font-size 40px
          &::-webkit-input-placeholder
            font-size 40px
      
      
      .cancle
        font-size 30px
        margin-right 20px
    
    .hotSearch
      width 100%
      box-sizing border-box
      /*height 400px*/
      background white
      padding 25px
      font-size 25px
      .fontSearch
        margin 25px
      .searchList
        width 100%
        ul
          width 100%
          overflow hidden
          li
            float left
            border 0.5px solid #999
            margin 10px
            padding 10px
            &.highlight
              color #b4282d
              border 0.5px solid #b4282d
</style>
