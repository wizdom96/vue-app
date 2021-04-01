import { createStore } from 'vuex'

import cartModule from './modules/cart/index'
import productModule from './modules/product/index'
import rootGetters from './getters'
import rootMutations from './mutations'
import rootActions from './actions'

export default createStore({
  modules:{
      prods: productModule,
      cart: cartModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
})
