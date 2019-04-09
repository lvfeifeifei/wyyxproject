<template>
  <div class="serverList">
    <ul class="serverUl" v-if="homeData.policyDescList">
      <li v-for="(item,index) in homeData.policyDescList" :key="index">
        <img  :src="item.icon" alt="">
        <span>{{item.desc}}</span>
      </li>
    </ul>
  </div>
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
  /*服务列表*/
  .serverList
    height 72px
    background-color white
    .serverUl
      height 72px
      display flex
      justify-content space-around
      li
        height 72px
        line-height 72px
        img
          display inline-block
          width 32px
          height 32px
          vertical-align middle
        span
          vertical-align middle
          font-size 24px
          color #B4282D




</style>
