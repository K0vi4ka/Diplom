import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import DialogService from 'primevue/dialogservice';


const pinia = createPinia()
const app = createApp(App);
app.use(router)
app.use(pinia)
app.use(PrimeVue)
app.use(DialogService);
app.mount('#app')
window.app = app;


