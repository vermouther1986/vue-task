import { createApp } from 'vue'
// import { BootstrapVue, IconsPlugin  } from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import VueViewer from 'v-viewer'
// import  'bootstrap/dist/css/bootstrap.css' 
// import  'bootstrap-vue/dist/bootstrap-vue.css'


const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueViewer)
// app.use(BootstrapVue);
// app.use(IconsPlugin);
app.mount('#app');
