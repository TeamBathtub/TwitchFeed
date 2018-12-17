import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Streamers from './components/streamers/Streamers.vue';


export default new VueRouter ({
  routes : [
    { path: '/', component: Home },
    { path: '/streamers', component: Streamers },
    { path: '*', redirect: '/' }
  ]
});