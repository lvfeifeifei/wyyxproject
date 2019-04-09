<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in homeData.focusList" :key="index">
        <img v-lazy="item.picUrl" :src="item.picUrl" alt="">
        
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" ></div>
  </div>

</template>
<script>
  import "swiper/dist/css/swiper.min.css"
  import Swiper from "swiper"
  import {mapState} from 'vuex'
  export default {
    
    mounted() {
      this.$store.dispatch('getHomeData',()=>{
        this.$nextTick(()=>{
          new Swiper ('.swiper-container', {
            autoplay:true,
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              type: 'custom',
              clickable: true,
              // 自定义分页器
              renderCustom: function (swiper, current, total) {
                var customPaginationHtml = "";
                for (var i = 0; i < total; i++) {
                  //判断哪个分页器此刻应该被激活
                  if (i === (current - 1)) {
                    customPaginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                  } else {
                    customPaginationHtml += '<span class="swiper-pagination-customs"></span>';
                  }
                }
                return customPaginationHtml;
              }
            },
          })
  
        })
  
      })
    },
    computed: {
      ...mapState({
        homeData:state=>state.firstPage.homeData
      })
    },
  
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    width 100%
    margin-top 150px
    .swiper-wrapper
      .swiper-slide
        width 100%
        img
          width 100%
          height 400px
  

</style>
<style>
  /* 注意： 不能在 scoped 中写轮播图的样式 */
  /* 自定义分页器的样式，这个你自己想要什么样子自己写 */
  .swiper-pagination-customs {
    width: 40px;
    height: 4px;
    display: inline-block;
    background: #fff;
    opacity: 0.4;
    border-radius: 0;
    margin: 0 10px 0 0;
  }
  
  /*自定义分页器激活时的样式表现*/
  .swiper-pagination-customs-active {
    opacity: 1;
    background: #f00;
    border-radius: 0;
  }
  
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #333;
    border: none;
    vertical-align: middle;
  }
  
  .swiper-pagination-bullet-active {
    border: none;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bullet-active-90b9116b84.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 12px;
    height: 12px;
  }
</style>
