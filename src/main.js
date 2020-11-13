import Vue from 'vue'
import Routes from './routes';
// import { component } from 'vue/types/umd';
import App from './App.vue'
//import vuerouter into out application
import VueRouter from 'vue-router';

//instantiate the vuerouter into our application
Vue.use(VueRouter);



const router = new VueRouter({
  routes:Routes,
  mode:'history'
})
 


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
