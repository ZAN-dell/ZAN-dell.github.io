import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Idb from 'idb-js'
import dataConfig from '@/db_config'
import router from '@/router/index'

Vue.config.productionTip = false
Vue.config.silent = true
Vue.use(ElementUI)
Vue.prototype.$dataConfig = Idb(dataConfig)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
