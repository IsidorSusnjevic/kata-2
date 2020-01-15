import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputValue: ""
  },
  mutations: {
    changeInputValue (state, payload) {
      state.inputValue = payload.inputValue;
    }
  },
  actions: {
    changeInputValue (context, payload) {
      context.commit('changeInputValue', payload)
    }
  },
  getters: {
    inputValue: (state) => () => state.inputValue
  }
})
