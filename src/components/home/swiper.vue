<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
      <img class="img-swiper"
           src="http://img1.qunarzz.com/sight/p0/2004/95/954da2e7bf8d1038a3.water.jpg_250x250_fb233d74.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="img-swiper"
           src="http://img1.qunarzz.com/sight/p0/2007/3a/3a1bc0c1f351496da3.img.jpg_250x250_ed15bfee.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="img-swiper"
           src="http://img1.qunarzz.com/sight/p0/2005/1c/1ccff2940b61484ba3.water.jpg_250x250_9e38bb5e.jpg" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: 'home-swiper',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  }
}
</script>
<style scoped lang="stylus">
//样式应用在全局中
.swiper-container >>> .swiper-pagination-bullet-active
  background #ffffff !important

</style>
