<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './home/header'
import HomeSwiper from './home/swiper'

export default {
  name: 'home',
  components: {
    'home-header': HomeHeader,
    'home-swiper': HomeSwiper
  }
}
</script>

<style scoped>

</style>
