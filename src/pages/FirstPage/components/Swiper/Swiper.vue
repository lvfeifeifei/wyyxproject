<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/6e37b752f9fce622da32f87a5d3ee12b.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/c5b8419cc5565df9a5df9cc38f36f209.jpg?imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/cc8d6a5deac2e97ef3fa4a171f97ec27.png?imageView&quality=75&thumbnail=750x0" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>

</template>
<script>
  
  export default {
    mounted() {
      new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*轮播*/
  .swiper-container
    margin-top 150px
    .swiper-wrapper
      .swiper-slide
        img
          width 100%
          height 400px


</style>
