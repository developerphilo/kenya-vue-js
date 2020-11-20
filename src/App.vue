<template>
  <div id="app">
    <div class="header-nav">
        <h2>Routing In VueJs</h2>
      <div class="links">
          <router-link to="/">Home</router-link>  
          <router-link to="/About">About</router-link> 
          <router-link to="/Services">Services</router-link>

      </div>
    </div>

     
     <hr>
  
     <router-view>
       <!-- this is where our routes component views will be rendered -->
     </router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  background-color: aliceblue;
  font-family: 'Montserrat', sans-serif;
}
.header-nav{
  height: 20vh;
  background: url('https://images.pexels.com/photos/5365875/pexels-photo-5365875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-size: cover;
  display: flex;
  justify-content: space-around;
  color: white;
}
.links{
  color: white;
  padding-top: 2rem;
}
a{
  color: white;
  text-decoration: none;
  padding-left: 1rem;
}
h2{
  padding-top: 2rem;
}
</style>
