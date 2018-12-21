import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import router from './router';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueSweetalert2);

Vue.directive('focus', {
  inserted(el) {
    el.focus();
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
