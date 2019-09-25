import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import * as fb from 'firebase'


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  axios,
  store,
  created () {
    fb.initializeApp ({
      apiKey: "AIzaSyA1N2q4c3O5zlFNqR6KwgE8munDq4vPDas",
      authDomain: "vw-cars.firebaseapp.com",
      databaseURL: "https://vw-cars.firebaseio.com",
      projectId: "vw-cars",
      storageBucket: "",
      messagingSenderId: "512860677525",
      appId: "1:512860677525:web:293f5e75b6eede582bc29c"
    });
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  },

}).$mount('#app');
