<template>
  <div id="app">
    <!-- nav bar -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/history">History</router-link> |
      <router-link to="/desertification">Desertification</router-link> |
      <router-link to="/recovery">Recovery</router-link>
    </div>
    <!-- header -->
    <header class="jumbotron">
    <div class="container">
      <h1 class="text-primary mt-5">Restoration of Mu Us Desert Ecosystems</h1>
    </div>
    </header>

    <router-view/>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
