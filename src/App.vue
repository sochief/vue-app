<template>
  <div>
    <h2>{{ title }}</h2>
    <input type="text" v-model="searchName" />
    <ul>
      <li v-for="name of filteredNames" v-bind:key="name.id">{{ name }}</li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return {
      title: "Hello, Im Vue!",
      searchName: "",
      names: ["you", "are", "such", "good"],
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
  computed: {
    filteredNames() {
      return this.names.filter((name) => {
        return name.indexOf(this.searchName) !== -1;
      });
    },
  },
};
</script>

<style scoped>
</style>