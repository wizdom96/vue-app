import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default({
namespaced: true,
  state(){
    return { 
        items: [],
        total: 0,
        qty: 0,
    }
  },
  mutations: mutations,
  actions: actions,
  getters: getters
})
