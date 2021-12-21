<template>
  <v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </v-layout>
</template>
<script>
import Stock from "./Stock.vue";
export default {
  components: { Stock },
  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: 290 },
        { id: 2, name: "Google", price: 300 },
        { id: 3, name: "Apple", price: 510 },
        { id: 4, name: "Twitter", price: 210 },
      ],
    };
  },
};
</script>

