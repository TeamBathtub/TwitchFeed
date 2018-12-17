import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Streamers from './components/streamers/Streamers.vue';
import Favorites from './components/favorites/Favorites.vue';
import AboutUs from './components/AboutUs';
import Ratings from './components/ratings/Ratings.vue';


export default new VueRouter ({
  routes : [
    { path: '/', component: Home },
    { path: '/streamers', component: Streamers },
    { path: '/favorites', component: Favorites },
    { path: '/ratings', component: Ratings },
    { path: '/about', component: AboutUs },
    { path: '*', redirect: '/' }
  ]
});