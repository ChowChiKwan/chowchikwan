/**
 * Created by ChowChiKwan on 2019/08/26.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: r => require.ensure([], (require) => {
        r(require('@/template/hello'));
      }, 'hello'),
    },
    {
      path: '*',
      name: 'error',
      component: r => require.ensure([], (require) => {
        r(require('@/components/exception'));
      }, 'error'),
    },
  ],
});
