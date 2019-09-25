import Vue from 'vue'
import Vuex from 'vuex'
import cars from './cars.js'
import user from './user.js'
import shared from './shared.js'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cars,
        user,
        shared
    }
})