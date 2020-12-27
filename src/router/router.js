import Vue from 'vue';
import VueRouter from 'vue-router';

import Counter from '@components/pages/Counter/Counter.vue';
import Converter from '@components/pages/Converter/Converter.vue';
import Booker from '@components/pages/Booker/Booker.vue';

Vue.use(VueRouter);

const routes = [
  { name: 'Counter', path: '/counter', component: Counter },
  { name: 'Converter', path: '/converter', component: Converter },
  { name: 'Booker', path: '/booker', component: Booker },
];

const router = new VueRouter({
  routes,
});

export default router;
