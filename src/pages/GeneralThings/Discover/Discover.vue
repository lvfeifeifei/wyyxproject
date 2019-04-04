<template>
  <div class="discoverContainer">
    <div class="headNav">
      <ul class="navList">
        <li v-for="(item,index) in thingsNavList" @click="goto(index)"
        :class="{active:curIndex===index}">{{item.tabName}}</li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  
  export default {
    data () {
      return {
        curIndex:0
      }
    },
    methods:{
      goto(index){
        //1、跳转路由
        //2、添加类名
        this.curIndex = index
        
      }
    },
    mounted(){
      this.$store.dispatch('getThingsNavList')
    },
    computed: {
      ...mapState({
        thingsNavList:state=>state.things.thingsNavList
      })
    },
    watch: {
      //监视thingsNavList变化
      thingsNavList () {
        this.$nextTick(()=>{
          new BScroll('.headNav',{
            scrollX:true,
            click:true
          })
        })
  
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .discoverContainer
    .headNav
      background white
      margin-top 90px
      position fixed
      left 0
      top 0
      height 72px
      width 750px
      .navList
        width 1100px
        height 72px
        display flex
        overflow hidden
        border-bottom 2px solid #ccc
        li
          &:first-child
            margin-left 10px
          box-sizing border-box
          height 72px
          padding 0 5px
          margin-right 30px
          line-height 72px
          &.active
            border-bottom 5px solid #B4282D
            color #B4282D
          
</style>
