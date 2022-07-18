import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router";

// Import Bootstrap and BootstrapVue CSS files (order is important)
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
import "boxicons/css/boxicons.min.css";

const app = createApp(App);

app.use(Router).mount("#app");
