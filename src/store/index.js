import api from "../../api/products.js";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    currency: "VGBT",
  },
  getters: {
    getCart(state) {
      return state.cart.sort((prev, next) => next.date - prev.date);
    },
    getCartSum(state) {
      return state.cart.reduce(
        (acc, item) => (acc += item.amount * item.price),
        0
      );
    },
  },
  mutations: {
    addProducts(state, products) {
      state.products = products;
    },
    addProductToCart(state, productAmt) {
      const currentProduct = state.products.find(
        (item) => item.id === productAmt.id
      );
      const productInCart = state.cart.find(
        (item) => item.id === productAmt.id
      );
      const date = new Date().getTime();
      if (productInCart) {
        const newCart = state.cart.map((item) => {
          if (item.id === productInCart.id) {
            item.amount += productAmt.amount;
            item.date = date;
          }
          return item;
        });
        state.cart = newCart;
      } else {
        const newProductInCart = {
          ...currentProduct,
          amount: productAmt.amount,
          date: date,
        };
        const newCart = [...state.cart, newProductInCart];
        state.cart = newCart;
      }
    },
  },
  actions: {
    async getProductsList({ commit }) {
      try {
        commit("addProducts", await api.getProductsList());
      } catch (error) {
        console.log(error);
      }
    },
  },
});
