<template>
  <div>
    Clicked: {{ $store.state.count }} times, count is {{ $store.getters.evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <div>{{ count }}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'timer',
  computed: {
    // 使用展开运算符将getter混入computed对象中
    ...mapGetters([
      'evenOrOdd'
    ]),
    count (val) {
      let nums = [1, 2, 3, 4]
      // let newNums = nums.reduce(function (perSum, curVal, array) {
      //   return perSum + curVal
      // }, 1000)
      let newNums = nums.map(function (item, index, array) {
        return 1
      })
      nums.every(function (v, i, arr) {
        // if (i === 1) {
        //   console.log(v)
        //   // return true
        // }
        console.log(v)
        return true
      })
      nums.flat()
      return newNums
    }
  },
  methods: {
    increment () {
      this.$store.dispatch('increment', 2)
    },
    decrement () {
      this.$store.dispatch('decrement')
    },
    incrementIfOdd ({commit, state}) {
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync ({commit, state}) {
      this.$store.dispatch('incrementAsync')
    }

  }
}
/*

需要对属性做一些派生时，例如：过滤，转换。使用getter方法，

*/
</script>

<style scoped>

</style>
