import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Streamers from './components/search/Streamers.vue';
import Favorites from './components/favorites/Favorites.vue';
import Community from './components/community/Community.vue';
import AboutUs from './components/AboutUs';
import Ratings from './components/ratings/Ratings.vue';

export default new VueRouter ({
  routes : [
    { path: '/', component: Home },
    { path: '/search', component: Streamers },
    { path: '/community', component: Community },
    { path: '/favorites', component: Favorites },
    { path: '/ratings', component: Ratings },
    { path: '/about', component: AboutUs },
    { path: '*', redirect: '/' }
  ]
});