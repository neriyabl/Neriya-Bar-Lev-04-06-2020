export const favoritesModule = {
  namespaced: true,
  state: {
    favorites: null
  },
  mutations: {
    SET_FAVORITES: (state, favorites) => (state.favorites = favorites)
  },
  actions: {
    getFavorites: context => {
      const favorites = JSON.parse(localStorage.getItem("favorites"));
      context.commit("SET_FAVORITES", favorites);
    }
  }
};
