import Vue from 'vue';
import App from '@/App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import '@mdi/font/css/materialdesignicons.css';
import BootstrapVue from 'bootstrap-vue';
import router from '@/router';
import EventBus from '@/bus.ts';
import store from '@/store/';
import Initializer from './config/bootstrap';

import './permission'; // permission control

Vue.config.productionTip = false;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
Vue.use(Vuetify, {
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
});

Vue.use(EventBus);

new Vue({
  router,
  store,
  render: (h) => h(App),
  vuetify: new Vuetify({
    theme: { dark: true },
  }),
}).$mount('#app');
