import Vue from 'vue'
//import the vue-router package into our application
import VueRouter from 'vue-router';
import Routes from './routes';
// import { component } from 'vue/types/umd';
import App from './App.vue'
// import Home from './components/Home.vue';
// import About from './components/About.vue';
// import Services from './components/Services.vue';
 
//instantiate the vue-router to be used in our application
Vue.use(VueRouter);

//now we add our routes here

// const routes = [
//       { path:'/', component: Home},
//       { path:'/About', component: About},
//       { path:'/Services', component: Services}

// ];
const router = new VueRouter({
  routes:Routes,
  mode:'history'

});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
