import Vue from 'vue'
import Vuex from 'vuex'
import cars from './cars.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        cars
    }
})