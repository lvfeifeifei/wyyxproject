<template>
  <div class="recommendsContainer">
    <div class="scrollContainer">
      <ul class="out">
        <li class="ulList" v-for="(rec, index) in recManual" :key="index">
          
          <ul class="xuanmei" >
            <li v-for="(topic, index) in rec.topics" v-if="topic.type===0">
              <div class="top">
                <img class="avatar" :src="topic.avatar" alt="">
                <span class="nickname">{{topic.nickname}}</span>
              </div>
              <span class="title">这些爆品火到断货，好不容易补到一批上架了！</span>
              <img class="bottomImg" v-lazy="topic.picUrl" :src="topic.picUrl" alt="">
              <div class="watchCount">
                <i class="iconfont"></i>
                <span>10.1k人看过</span>
              </div>
            </li>
          </ul>
          
          <ul class="typeTwo" >
            <li v-for="(topic, index) in rec.topics" v-if="topic.type===2">
              <div class="leftBox">
                <div class="topBox">
                  <img :src="topic.avatar" alt="">
                  <span>{{topic.nickname}}</span>
                </div>
                <p class="topTitle">{{topic.title}}</p>
                <p class="bottomTitle">{{topic.subTitle}}</p>
                <div class="watch">
                  <i ></i>
                  <span>10.1k人看过</span>
                </div>
              </div>
              <img class="bigImg" :src="topic.picUrl" alt="">
            </li>
          </ul>
          
        </li>
      </ul>
      
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data () {
      return {
      
      }
    },
    mounted () {
      this.$store.dispatch('getThingsRecManual',()=>{
        this.$nextTick(()=>{
          new BScroll('.recommendsContainer',{
            scrollY:true,
            click:true
  
          })
        })
      })
    },
    computed: {
      ...mapState({
        recManual:state=>state.things.recManual
      })
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommendsContainer
    padding-top 5px
    margin-top 164px
    background #f4f4f4
    .scrollContainer
      margin-top 20px
      .out
        .ulList
          .xuanmei
            li
              margin-top 20px
              background white
              padding 30px
              box-sizing border-box
              height 678px
              width 750px
              .top
                display flex
                height 56px
                line-height 56px
                width 690px
                .avatar
                  border-radius 50%
                  height 56px
                  width 56px
                .nickname
                  margin-left 10px
                  vertical-align middle
              .title
                margin-top 10px
                display flex
                font-size 34px
                line-height 52px
                width 100%
              .bottomImg
                border-radius 10px
                margin-top 20px
                height 376px
                width 100%
              .watchCount
                height 34px
                display flex
                color #999
                margin-top 20px
                width 100%
      
      
      
          .typeTwo
            li
              display flex
              margin-top 20px
              background white
              padding 30px
              box-sizing border-box
              width 100%
              height 336px
              .leftBox
                height 272px
                width 400px
                .topBox
                  display flex
                  height 56px
                  line-height 56px
  
                  width 400px
                  >img
                    border-radius 50%
                    height 56px
                    width 56px
                  >span
                    margin-left 10px
                    vertical-align middle
  
  
                .topTitle
                  margin-top 30px
                  font-size 36px
                  color #7f7f7f
                  line-height 44px
                  width 400px
                .bottomTitle
                  height 48px
                  width 400px
                  white-space nowrap
                  overflow hidden
                  text-overflow ellipsis
                  font-size 28px
                  color #7f7f7f
                  margin-top 20px
                .watch
                  height 32px
                  color #999
                  width 168px
              .bigImg
                height 272px
                border-radius 10px
                width 272px
  
</style>
