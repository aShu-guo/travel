<!--以.vue结尾的文件成为：单文件组件-->
<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <!--  显示当前路由对应的内容  -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
