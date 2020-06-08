import axios from "axios";

export const favoritesModule = {
  namespaced: true,
  state: {
    favorites: {},
    weathers: {}
  },
  getters: {
    getWeatherByKey: state => key => state.weathers[key]
  },
  mutations: {
    SET_FAVORITES: (state, favorites) => (state.favorites = favorites),
    SET_FAVORITE_WEATHER: (state, { key, weather }) =>
      (state.weathers = { ...state.weathers, [key]: weather })
  },
  actions: {
    getFavorites: context => {
      const favorites = JSON.parse(localStorage.getItem("favorites"));
      context.commit("SET_FAVORITES", favorites);
    },
    getPartialFavoritesWeather: async context => {
      for (const key of Object.keys(context.state.favorites)) {
        const {
          VUE_APP_WEATHER_API_BASE_URL: baseUrl,
          VUE_APP_WEATHER_API_VERSION: version,
          VUE_APP_API_KEY: apikey
        } = process.env;
        const url = `${baseUrl}currentconditions/${version}/${key}`;
        const params = {
          apikey
        };
        const {
          data: [weather]
        } = await axios.get(url, { params });
        context.commit("SET_FAVORITE_WEATHER", { key, weather });
      }
    }
  }
};
