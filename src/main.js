import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

/* Main stylesheet file */
import '../main.css'
/* 
Font awesome icons 
*/
import '@fortawesome/fontawesome-free/css/all.min.css'
/* 
Bootstrap css and bundle js
*/
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

app.mount('#app')
