import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))


//引入test主进程
console.log(__dirname);
const test = require('electron').remote.require('./foo');

 

//将 test 挂载到 vue 的原型上

Vue.prototype.foo = test;
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
