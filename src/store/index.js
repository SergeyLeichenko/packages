import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    packages: []
  },
  getters: {
    PACKAGES(state) {
      return state.packages;
    },
  },
  mutations: {
    SET_PACKAGES_TO_STATE: (state, packages) => {
      state.packages = packages;
    },
  },
  actions: {
    GET_PACKAGES_FROM_API({ commit }) {
      return axios("/stats/packages", {
        method: "GET",
      })
        .then((packages) => {
          commit("SET_PACKAGES_TO_STATE", packages.data);
          return packages;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  modules: {},
});
