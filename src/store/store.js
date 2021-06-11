import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: Number(localStorage.count) || 0
}

const mutations = {
  increment (state, val) {
    // 为什么是string
    state.count = state.count + val
    localStorage.count = state.count
  },
  decrement (state) {
    state.count--
  }
}

const actions = {
  increment: (ctx, val) => ctx.commit('increment', val),
  decrement: (ctx, val) => ctx.commit('decrement'),
  incrementIfOdd ({commit, state}) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({commit}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
