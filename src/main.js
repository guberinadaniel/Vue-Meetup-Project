
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert'

Vue.use(Vuetify);
Vue.config.productionTip = false;

Vue.filter('date', DateFilter);
Vue.component('app-alert', AlertCmp);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDPxrvifVegInqc9me6w4OEv_RWdhy1LEE',
      authDomain: 'vue-meetup-fixed.firebaseapp.com',
      databaseURL: 'https://vue-meetup-fixed.firebaseio.com',
      projectId: 'vue-meetup-fixed',
      storageBucket: 'vue-meetup-fixed.appspot.com',
    })
  }
});
