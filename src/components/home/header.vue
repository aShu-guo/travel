<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe7c2;</span>
    </div>
    <div class="header-center">
      <span class="iconfont">&#xe669;</span>
      请输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe65a;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home-header'

}
</script>
<style scoped lang="stylus">
//@import "@/assets/var.styl"
@import "~styles/var.styl"
.header
  display: flex
  height: .88rem
  line-height: .88rem
  background-color: $bgColor
  color #fff

  .header-left
    width: .8rem
    float: left
    //margin 0 .2rem
    //padding 0 .2rem
    text-align: center

  .header-center
    //文本垂直居中
    line-height: .6rem
    height .6rem
    //元素垂直居中
    margin auto
    //margin-top: .12rem
    //margin-left .2rem
    background: #fff
    border-radius: .1rem
    flex: 1
    color #e4e7ea

    .iconfont
      margin 0 .1rem

  .header-right
    width: 1.28rem
    float: right
    text-align: center

</style>
