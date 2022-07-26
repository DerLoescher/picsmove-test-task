<template>
  <div class="cart-list">
    <div v-for="item in spisok_dlya_rendera">
      <!-- нет директивы v-bind:key -->
      <!-- выносим item в отдельный компонент  -->
      <!-- для валидной верстки список должен быть сделан с помощью ul -->
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
  computed: {
    // неправильный нейминг, должен быть на английском и в стиле кебаб
    spisok_dlya_rendera() {
      return this.cart.reverse();
    },
    // таким методом корзина не будет работать так, как нам необходимо (будем записывать время добавления)
  },
};
</script>

<style>
</style>
