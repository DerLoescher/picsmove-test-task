<script>
export default {
  name: "Header",
  props: {
    cart: Array,
    required: true,
    default: {},

    currency: String,
  },
  // все данные тянем из стора
  data() {
    return {
      cartPrice: 0,
    };
  },
  watch: {
    cart(cart) {
      let val = 0;
      cart.forEach((item) => {
        val += item.price * item.amount;
      });
      this.cartPrice = val;
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

<template>
  <!--  template должен быть сверху -->
  <div class="header">
    <h3>Товаров в корзине на: {{ cartPrice }} {{ currency }}</h3>
    <!-- toFixed() для нормального отображения стоимости корзины -->
  </div>
</template>
