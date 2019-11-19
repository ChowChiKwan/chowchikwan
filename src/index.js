/**
 * Created by ChowChiKwan on 2019/08/26.
 */
import '@babel/polyfill';

import Vue from 'vue';

import router from './routers';
import store from './stores';
import { i18n, loadLanguageAsync } from './i18n';
import './sass/reset.scss';
import './sass/common.scss';
import './sass/element.scss';

import App from './index.vue';

const lang = 'zh';
loadLanguageAsync(lang);

const app = new Vue({
  el: '.wrapper',
  router,
  store,
  i18n,
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  },
  render: h => h(App),
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('SW registered: ', registration);
    }).catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

export default { app };
