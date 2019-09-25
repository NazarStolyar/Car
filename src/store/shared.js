export default {
    state: {
        loadding: false,
        error: null
    },
    mutations: {
        setLoading(state, payload) {
            state.loadding = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        clearAll(state) {
            state.error = null
        }

    },
    actions: {
        setLoading({commit}, payload) {
            commit('setLoading', payload)
        },
        setError({commit}, payload) {
            commit('setError', payload)
        },
        clearAll({commit}) {
            commit('clearAll')
        }

    },
    getters: {
        loadding(state) {
            return state.loadding
        },
        error(state) {
            return state.error
        }

    }


}