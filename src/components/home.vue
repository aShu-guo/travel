<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './home/header'
import HomeSwiper from './home/swiper'
import HomeIcons from './home/icons'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    'home-header': HomeHeader,
    'home-swiper': HomeSwiper,
    'home-icons': HomeIcons
  },
  methods: {
    getJson () {
      axios.get('/api/index.json').then(
        (res) => {
          console.log(res)
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
