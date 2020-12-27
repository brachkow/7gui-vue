import Vue from 'vue';
import VueRouter from 'vue-router';

import Counter from '@components/pages/Counter/Counter.vue';
import Converter from '@components/pages/Converter/Converter.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/counter', component: Counter },
  { path: '/converter', component: Converter },
];

const router = new VueRouter({
  routes,
});

export default router;
