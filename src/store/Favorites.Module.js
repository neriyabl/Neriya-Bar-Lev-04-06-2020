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
    SET_FAVORITE_WEATHER: (state, { key, data }) =>
      (state.weathers = { ...state.weathers, [key]: data })
  },
  actions: {
    getFavorites: context => {
      const favorites = JSON.parse(localStorage.getItem("favorites"));
      context.commit("SET_FAVORITES", favorites);
    },
    getPartialFavoritesWeather: async context => {
      for (const key of Object.keys(context.state.favorites)) {
        const url = `${key}`;
        const params = {
          apiKey: process.env.VUE_APP_API_KEY
        };
        // const { data } = await axios.get(url, { params });
        const data = {
          LocalObservationDateTime: "2020-06-05T11:45:00+12:00",
          EpochTime: 1591314300,
          WeatherText: "Mostly cloudy",
          WeatherIcon: 6,
          HasPrecipitation: false,
          PrecipitationType: null,
          IsDayTime: true,
          Temperature: {
            Metric: {
              Value: 9.5,
              Unit: "C",
              UnitType: 17
            },
            Imperial: {
              Value: 49,
              Unit: "F",
              UnitType: 18
            }
          },
          MobileLink:
            "http://m.accuweather.com/en/nz/jerusalem/250835/current-weather/250835?lang=en-us",
          Link:
            "http://www.accuweather.com/en/nz/jerusalem/250835/current-weather/250835?lang=en-us"
        };
        context.commit("SET_FAVORITE_WEATHER", { key, data });
      }
    }
  }
};
