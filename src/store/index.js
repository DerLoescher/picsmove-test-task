import api from "../../api/products.js";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    getProductsList(ctx, data) {
      return api.getProductsList();
    },
  },
  // изменение стора выполняется через мутации
  // добавляем продукты, корзину и валюту в стор
  modules: {},
});
