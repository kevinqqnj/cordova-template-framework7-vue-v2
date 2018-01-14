import Vue from 'vue';
// import all F7 components
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';
// or you can import F7 core, and individual components
// import Framework7 from 'framework7';
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import App Custom Styles
// import AppStyles from './assets/sass/main.scss'

import app from './app.vue';
import routes from './routes';

// Install Plugin
Vue.use(Framework7Vue, Framework7);

let theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init Vue App
export default new Vue({
  // Root Element
  el: '#app',
  render: c => c('app'),
  components: {
    app,
  },
  framework7: {
    id: 'io.framework7.testapp',
    theme, // md or ios
  },
  routes,
});
