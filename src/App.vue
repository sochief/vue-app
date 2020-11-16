<template>
  <div>
    <h2>{{ title }}</h2>
    <h2>{{ title | lowercase }}</h2>
    <h2>{{ title | uppercase }}</h2>
    <h2>{{ title | uppercase | lowercase }}</h2>
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: "Hello, Im Vue!",
    };
  },
  filters: {
    //we can use filters more than once
    //register filter localy
    //functions here
    lowercase(value) {
      return value.toLowerCase();
    },
  },
};
</script>

<style scoped>
</style>