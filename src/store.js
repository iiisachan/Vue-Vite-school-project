import { createStore } from 'vuex'

const state = {
  col1: [],
  col2: [],
  col3: []
}

const mutations = {
  updateQuery(state, value) {
    state.col1.push(...value.splice(-10))
    state.col2.push(...value.splice(-10))
    state.col3.push(...value.splice(-10))
  },
  clearOldQuery(state) {
    ;(state.col2 = []), (state.col3 = []), (state.col1 = [])
  }
}

const store = createStore({
  state,
  mutations
})

export default store
