import Vue from "vue";
import Vuex from "vuex";
import { homeModule } from "./Home.Module";
import { favoritesModule } from "./Favorites.Module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { homeModule, favoritesModule },
  state: {
    loading: false
  }
});
