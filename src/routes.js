// IMPORT THE COMPONENTS HERE
import Home from './components/Home.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';



//NOW WE DEFINE THE PATHS FOR THE RESPECTIVE COMPONENENTS
export default[
    { path:'/', component: Home},
    { path:'/About', component: About},
    { path:'/Services', component: Services}
]