<template>
  <div id="app">
    <h1>Virtual Meetup</h1>
     <h2>Routing In VueJs</h2>
      <div class="links">

          <router-link to="/">Home</router-link> | 
          <router-link to="/About">About</router-link> | 
          <router-link to="/Services">Services</router-link>

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
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  background-color: aliceblue;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
h1{
  
  text-align: center;
  padding-top: 20px;

  font-weight: 400;

}

h2{
  
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;

  font-weight: 400;
}
.links{
  text-align: center;
  padding: 1em 0;
  text-decoration: none;
}

</style>
