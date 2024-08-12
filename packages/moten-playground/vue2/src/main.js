import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import '@moten/ui/vue2/style'
new Vue({
  render: h => h(App),
}).$mount('#app')
