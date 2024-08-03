import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import Bootstrap and Bootstrap-Vue-3 CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// Import Bootstrap and Bootstrap-Vue-3 JS files (optional)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import Bootstrap-Vue-3
import BootstrapVue3 from 'bootstrap-vue-3';

const app = createApp(App);

app.use(router);
app.use(BootstrapVue3);

app.mount('#app');
