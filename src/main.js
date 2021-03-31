import { createApp } from 'vue';

import router from './router/index.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

require('./assets/sass/bulma.css');


const app = createApp(App)

app.use(router);

app.component('base-badge', BaseBadge);

app.mount('#app');
