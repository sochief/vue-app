<template>
  <div>
    <h2>{{ carName }}</h2>
  </div>
</template>

<script>
export default {
  props: ["carName"],
};
</script>


<style scoped>
div {
  border: 1px solid black;
  padding: 10px;
}
</style>