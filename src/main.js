import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import router from './router';
import Alert from 'vue-sweetalert2';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Alert);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
