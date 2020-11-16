<template>
  <div>
    <h2 v-colored:background.font="'red'">{{ title }}</h2>
    <h2 v-colored:color.delay="'blue'">{{ title }}</h2>
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: "Hello, Im Vue!",
    };
  },
};
</script>


<style scoped>
</style>