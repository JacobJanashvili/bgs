import "./assets/main.css";
import PrimeVue from "primevue/config";
import store from "./store";
import { createApp } from "vue";
import router from "./router";
import App from "@/App.vue";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(PrimeVue);
app.mount("#app");
