import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/style/global.less";
import {pinia} from "@/store";

let app = createApp(App);

app.use(router);
app.use(pinia);
app.mount('#app');
