import Vue from "vue";
import Vuex from "vuex";
import { homeModule } from "./HomeModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { homeModule }
});
