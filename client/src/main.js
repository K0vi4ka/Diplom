import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import DialogService from 'primevue/dialogservice';


//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";

//icons
import "primeicons/primeicons.css";

const pinia = createPinia()
const app = createApp(App);
app.use(router)
app.use(pinia)
app.use(PrimeVue)
app.use(DialogService);
app.mount('#app')
window.app = app;


