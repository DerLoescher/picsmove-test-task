<template>
  <div class="card">
    <p class="card-title">{{ product.title }}</p>

    <img class="card-image" :src="product.image" alt="card-image" />
    <p class="card-price">
      Цена: {{ product.price }} {{ this.$store.state.currency }}
    </p>

    <div>
      <input class="amount-input" type="number" v-model="amount" id="id" />
      <label for="id">кг</label>
    </div>

    <button class="add-btn" @click="addToCart">В корзину</button>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      amount: 1,
    };
  },
  methods: {
    addToCart() {
      this.$store.commit("addProductToCart", {
        id: this.product.id,
        amount: +this.amount,
      });
      this.amount = 1;
    },
  },
};
</script>

<style scoped>
.card {
  display: inline-block;
  width: 100%;
  border: 1px solid #908888;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}
.card-image {
  width: 100%;
}
.add-btn {
  padding: 5px;
  margin: 5px;
}
.amount-input {
  margin: 5px;
}
</style>