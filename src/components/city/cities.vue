<template>
  <div class="cities-container">
    <div class="banner-box">
      <a class="iconfont">&#xe7c2;</a>
      <h1 class="choose-city">城市选择</h1>

    </div>
    <div class="cities-box">
      <div class="check-border-box">
        <div class="border-box">
          <span class="in-border">境内</span>
          <span class="out-border">境外·港澳台</span>
        </div>
      </div>
      <div class="hot-cities">
        <h2>热门城市</h2>
        <div class="hot-city-item-list">
          <div class="city-item" v-for="item of cities" :key="item.id">{{ item.city }}</div>
          <!--          <div class="city-item">北京</div>-->
          <!--          <div class="city-item">北京</div>-->
          <!--          <div class="city-item">北京</div>-->
        </div>
        <!--   iter list     -->
      </div>
      <div class="apl-order">
        <h2>热门城市</h2>
        <!--   iter list     -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'cities',
  data () {
    return {
      cities: []
    }
  },
  methods: {
    async listCities () {
      // const method = 'get'
      const url = '/api/city.json'
      // const params = {id: 1}
      const this_ = this
      await axios.get(url).then(function (res) {
        const data = res.data
        if (data.success) {
          this_.cities = data.data
        }
        console.log(data.data)
      })
    }
  },
  created () {
    this.listCities()
  }
}
</script>

<style scoped lang="stylus">
@import "~styles/var.styl"
.cities-container

  .banner-box
    height .88rem
    background-color $bgColor

    .choose-city
      height .88rem
      line-height .88rem
      font-size .32rem
      color $fontColor
      margin 0 1rem
      text-align center

    .iconfont
      height .88rem
      line-height .88rem
      position absolute
      color #ffffff
      width .8rem
      text-align center

  .cities-box

    .check-border-box
      height .6rem
      background-color $bgColor
      padding 0 1rem

      .border-box
        display flex
        height .4rem
        line-height .4rem
        font-size .28rem
        text-align center
        border-radius .05rem

        .in-border
          background-color #ffffff
          color $bgColor
          flex 1

        .out-border
          flex 1
          background-color $bgColor
          color #ffffff
          border 1px solid #ffffff

    .hot-cities
      font-size .24rem
      background-color #ffffff
      border .02rem solid transparent

      h2
        margin .24rem .3rem

      .hot-city-item-list
        display flex
        flex-direction row
        flex-wrap wrap

        .city-item
          width 33%
          height .9rem
          text-align center
          line-height .9rem
          border-top .02rem solid #cacaca
          border-right .02rem solid #cacaca
</style>
