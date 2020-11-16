<template>
  <div>
    <h2 v-colored:background.font="'red'">{{ title }}</h2>
    <h2 v-colored:color.delay="'blue'">{{ title }}</h2>
    <h2 v-font>Local font directive</h2>
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: "Hello, Im Vue!",
    };
  },

  /* eslint-disable */
  directives: {
    font: {
      bind(el, bindings, vnode) {
        el.style.fontSize = "40px";
      },
    },
  },
};
</script>
  /*eslint-enable*/


<style scoped>
</style>