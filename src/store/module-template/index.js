import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const myCustomModule = {
    namespaced: true,

    actions,
    getters,
    mutations,
    state
}

export default myCustomModule