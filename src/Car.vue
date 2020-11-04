<template>
  <div>
    <slot name="title"></slot>
    <hr />
    <hr />
    <slot name="text"></slot>
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