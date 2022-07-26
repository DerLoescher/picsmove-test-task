<template>
  <div class="product-list">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  name: "List",
  components: { ProductItem },
  methods: {
    startPricesMonitoring() {
      setInterval(this.getList, 2000);
    },
    getList() {
      this.$store.dispatch("getProductsList");
    },
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  created() {
    this.getList();

    this.startPricesMonitoring();
  },
};
</script>

<style scoped>
.product-list {
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

@media (max-width: 840px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 420px) {
  .product-list {
    grid-template-columns: 1fr;
  }
}
</style>
