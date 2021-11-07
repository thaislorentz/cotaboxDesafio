import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import store from "./store";
import VueApexCharts from "vue3-apexcharts";

library.add(fas)
createApp(App).component('fa', FontAwesomeIcon).use(store).use(VueApexCharts).component('apexchart', VueApexCharts).mount('#app')