<template>
  <div>
    <app-car carName="Mazda"></app-car>
  </div>
</template>


<script>
import Car from "./Car";
export default {
  components: {
    appCar: Car,
  },
};
</script>