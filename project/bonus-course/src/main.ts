import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from 'axios';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'https://vue-http-2ff89.firebaseio.com/';
axios.defaults.headers.common['Authorization'] = 'fasfdsa';
axios.defaults.headers.get['Accepts'] = 'application/json';

const reqInterceptor = axios.interceptors.request.use(config => { 
  console.log('request', config);
  return config;
});

const resInterceptor = axios.interceptors.response.use(res => {
  console.log('response', res);
  return res;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);




new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
