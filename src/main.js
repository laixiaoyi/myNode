// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Icon, Pagination } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './assets/css/commonality.scss'
import './components/config/filter'

Vue.config.productionTip = false
// 将$ajax写入vue原型中，之后可以在组件中调用this.$http.get()
Vue.prototype.$http = axios
Vue.prototype.oUrl = 'https://cnodejs.org/api/v1/'
Vue.use(Button)
Vue.use(Icon)
Vue.use(Pagination)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
