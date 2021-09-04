import { createStore } from 'vuex'
import { state } from './state'
import { actions } from './actions'
import { mutations } from './mutations'
import {modules } from './modules'

const store = createStore({
  state,
  actions,
  mutations,
  modules
})

export default store