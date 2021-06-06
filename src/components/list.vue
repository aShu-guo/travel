<template>
  <div>
    <ul>
      <li v-for="(item,index) of list" v-bind:key="index">{{ item }}----{{ index }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'List',
  data () {
    return {
      list: [1, 2, 3, 4]
    }
  }
}
</script>
<style scoped>
li {
  list-style: none;
}
</style>
