import Vue from 'vue';
import Router from 'vue-router';
import ViewHome from './views/ViewHome.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: ViewHome,
    },
    {
      path: '/*',
      name: 'ViewMap',
      component: () => import('./views/ViewMap.vue'),
    },
  ],
});
