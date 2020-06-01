import Vue from 'vue'
import axios from 'axios'

import App from './App'
import Antd from 'ant-design-vue';
import router from './router'
import store from './store'

import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;

Vue.use(Antd);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))


//引入test主进程
console.log(__dirname);
const test = require('electron').remote.require('./foo');


const grpcClient = require('electron').remote.require('./grpcClient');
 

//将 test 挂载到 vue 的原型上

Vue.prototype.foo = test;
Vue.prototype.grpcClient = grpcClient;
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
