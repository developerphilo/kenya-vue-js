<template>
  <div id="app">
    <h1>KENYAVUEJS MEETING</h1>
     <h2>Handling Routes And Best Practices</h2>
     
     <hr>

     <router-view></router-view>
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

</style>
