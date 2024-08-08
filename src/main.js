import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

axios.defaults.baseURL = 'https://ecommerce-24fq.onrender.com:5000';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
