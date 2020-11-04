<template>
  <div>
    <app-car>
      <h2 slot="title">{{ carName }}</h2>
      <p slot="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore
        dicta praesentium quae dolor. Tempora asperiores in sapiente fugiat
        magni necessitatibus voluptates assumenda atque suscipit autem. Natus ex
        beatae consequuntur.
      </p>
    </app-car>
  </div>
</template>

<script>
import Car from "./Car";
export default {
  data() {
    return {
      carName: "Ford",
    };
  },
  components: {
    appCar: Car,
  },
};
</script>

<style scoped>
h2 {
  color: red;
}
</style>