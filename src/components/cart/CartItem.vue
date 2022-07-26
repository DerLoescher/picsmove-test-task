<template>
  <li class="cart-item">
    <div class="item-info">
      <p class="item-title">{{ item.title }}</p>
      <span>{{ item.amount }} кг</span>
    </div>
    <p class="item-sum">
      На сумму: {{ this.itemSum }} {{ this.$store.state.currency }}
    </p>
  </li>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    itemSum() {
      const result = this.item.price * this.item.amount;
      return result.toFixed(2);
    },
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #908888;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 5px;
  padding: 10px;
}
.item-info {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
}
.item-title {
  margin-right: 10px;
  width: 100px;
}
</style>