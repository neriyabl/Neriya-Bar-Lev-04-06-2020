import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { addInterceptors } from "./interceptors";
import { homeModule } from "./Home.Module";
import { favoritesModule } from "./Favorites.Module";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: { homeModule, favoritesModule },
  state: {
    activeRequests: 0,
    loading: false,
    metric: true,
    siteAlert: ""
  },
  mutations: {
    INCREASE_ACTIVE_REQUESTS: state => state.activeRequests++,
    DECREASE_ACTIVE_REQUESTS: state => state.activeRequests--,
    SET_LOADING: (state, loading) => (state.loading = loading),
    SET_SITE_ALERT: (state, errorMessage) => (state.siteAlert = errorMessage)
  }
});

addInterceptors(axios, store);

export default store;
