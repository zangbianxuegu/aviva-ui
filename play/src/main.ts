import { createApp } from "vue";
import App from "./App.vue";
import "@simple/theme-chalk/src/index.scss";
// import CIcon from "@simple/components/src/icon";
import simple from "@simple/components";

const app = createApp(App);
app.use(simple);
app.mount("#app");
