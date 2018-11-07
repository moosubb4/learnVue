import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(
  VueResource
);

Vue.http.options = {
  root: "https://vue-http-2ff89.firebaseio.com/",
};

Vue.http.interceptors.push((req, next) => {
  console.log('interceptors request', req);
  if (req.method == 'POST') {
    req.method = 'PUT';
  }
  next(res => {
    res.json = () => {
      return {
        messages: res.body
      }
    }
  })

});


Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase();
});

Vue.mixin({
  created() {
    console.log('Global Mixin Create Hokk');

  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
