<template>
  <div class="product-list">
    <div
      class="card"
      v-for="product in products"
      :style="{ width: cardsWidth + '%' }"
    >
      <!-- отсутствие директивы v-bind:key -->
      <!-- карточку продукта вынести в отдельный компонент, вместе с кнопкой -->
      <p class="card-title">{{ product.title }}</p>
      <img class="card-image" :src="product.image" alt="" />
      <p class="card-price">Цена: {{ product.price }} {{ currency }}</p>

      <div>
        <input type="number" ref="amount" :id="product.id" />
        <!-- к инпуту добавить лейбл -->
        <span>кг</span>
      </div>

      <button @click="addToCart(product)">В корзину</button>
    </div>
  </div>
</template>

<script>
// добавить имя компоненту
// вынести список продуктов в стор
export default {
  props: {
    currency: String,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    cardsWidth() {
      let width = window.innerWidth;
      let count = 1;
      if (width > "840px") {
        count = 3;
      } else if (width > "420px" && width < "840px") {
        count = 2;
      }

      return 100 / count;
    },
    // адаптивность вынести в стили через медиа запрос
  },
  methods: {
    startPricesMonitoring() {
      setInterval(this.getList, 1000);
    },
    async getList() {
      let data = await this.$store.dispatch("getProductsList");

      this.products = data;
    },
    // данные пушить в стор
    addToCart(product) {
      let amount = this.$refs.amount.find(
        (input) => input.id === product.id
      ).value;

      let data = {
        amount,
        price: product.price,
        title: product.title,
      };
      this.$parent.cart.push(data);
    },
  },
  created() {
    this.startPricesMonitoring();
  },
  // данные о продуктах загрузить сразу, затем интервально
};
</script>

<style>
.product-list {
  padding: 10px;
}

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
button {
  padding: 5px;
  margin: 5px;
}
</style>
