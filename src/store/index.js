import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import * as actions from './action.js'
import * as mutations from './mutation.js'

console.log('store/index.js>>>>', mutations)

const state = {
    loginUser: {}
}
export default new Vuex.Store({
    state,
    actions: actions,
    mutations: mutations.default,
})
