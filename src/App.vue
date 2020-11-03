<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <app-car></app-car>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Go fuck yourself",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
