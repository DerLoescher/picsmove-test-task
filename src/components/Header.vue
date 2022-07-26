<template>
  <div class="header">
    <h3>
      Товаров в корзине на: {{ cartPrice.toFixed(2) }}
      {{ this.$store.state.currency }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "Header",

  computed: {
    cartPrice() {
      return this.$store.getters.getCartSum;
    },
  },
};
</script>

<style scoped>
.header {
  padding: 10px;
  background: #e5e5e5;
}
</style>


