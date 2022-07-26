<template>
  <div class="cart-wrapper" v-if="this.cart.toString()">
    <p class="cart-header">Корзина</p>
    <ul class="cart-list">
      <CartItem v-for="item in this.cart" :key="item.id" :item="item" />
    </ul>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  name: "Cart",
  components: { CartItem },
  props: {},
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },
};
</script>

<style scoped>
.cart-wrapper {
  margin: 10px;
}
.cart-header {
  margin: 5px;
  font-weight: 600;
  font-size: 20px;
}
.cart-list {
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
}
</style>
