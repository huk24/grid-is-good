import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import VueResizable from 'vue-resizable'
import FixedNav from '@/components/nav/template.vue'


Vue.config.productionTip = false
Vue.component('vue-resizable', VueResizable)
Vue.component('fixed-nav', FixedNav)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
