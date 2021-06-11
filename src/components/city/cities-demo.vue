<template>
  <div class="cities-demo">
    <div class="border">
      <span>境内</span>
      <span>境外</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cities-demo'
}
</script>

<style scoped lang="stylus">
.cities-demo
  display flex
  flex-flow row nowrap

  .border + span
    flex 1
</style>
