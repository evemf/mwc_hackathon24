<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,
html {
  height: 100%;
   font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  background-color: #13274F;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fefefe;
  display:grid;
  height:100vh;
  margin:0;
  place-items: center;
}
</style>
