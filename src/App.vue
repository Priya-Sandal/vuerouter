<template>
  
  <div id="nav-bar">
  
<router-link to="/" class="nav">Home</router-link>
<router-link to="/About" class="nav">About</router-link>
<router-link to="/Jobs" class="nav">Jobs</router-link>
</div>
<router-view></router-view>
    
 
</template>
<script>


export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(44, 35, 102);
  margin-top: 60px;
}
.nav-bar{
  font-size: 1.5em;
  text-align: center;
  padding: 10px;

  background-color: blue;
}
.nav{
  color:white;
  background-color: red;
  padding:10px 30px;
  height:100%;
  text-decoration: none;
  margin: 10px 0;
}
.nav:hover{
  color:white;
  background-color: blue;
}
.nav:active{
  background-color: pink;
}
h1,h2,h3{
  margin:50px;
}
</style>
