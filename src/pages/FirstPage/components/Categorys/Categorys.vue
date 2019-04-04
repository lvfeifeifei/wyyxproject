<template>
  <ul class="categorys" v-if="homeData.kingKongModule">
    <li v-for="(item,index) in homeData.kingKongModule.kingKongList" :key="index">
      <img :src="item.picUrl" alt="">
      <span>{{item.text}}</span>
    </li>
  </ul>

</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        homeData:state=>state.firstPage.homeData
      })
      
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*商品分类*/
  .categorys
    display flex
    flex-wrap wrap
    justify-content space-around
    width 100%
    height 340px
    padding-bottom 35px
    li
      width 110px
      height 156px
      padding 10px
      color #333
      text-align center
      img
        width 110px
        height 110px
        margin-bottom 10px

</style>
