
import Home from './components/Home.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Missing from './components/Error.vue';

export default[
  { path:'/', component:Home},
  { path:'/About', component:About},
  { path:'/Services', component:Services},
  // this route will catch all the unavailabe routes and display the Error component
  {path:'*', component:Missing}
]