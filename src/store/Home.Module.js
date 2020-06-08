import axios from "axios";

export const homeModule = {
  namespaced: true,
  state: {
    selectedPlace: {
      Version: 1,
      Key: "215793",
      Type: "City",
      Rank: 95,
      LocalizedName: "Tel-aviv Port",
      Country: {
        ID: "IL",
        LocalizedName: "Israel"
      },
      AdministrativeArea: {
        ID: "TA",
        LocalizedName: "Tel Aviv"
      },
      text: "Tel-aviv Port, Tel Aviv, IL"
    },
    places: [
      {
        Version: 1,
        Key: "215793",
        Type: "City",
        Rank: 95,
        LocalizedName: "Tel-aviv Port",
        Country: {
          ID: "IL",
          LocalizedName: "Israel"
        },
        AdministrativeArea: {
          ID: "TA",
          LocalizedName: "Tel Aviv"
        },
        text: "Tel-aviv Port, Tel Aviv, IL"
      }
    ],
    fiveDaysForecasts: null,
    currentWeather: null
  },
  mutations: {
    SET_PLACES: (state, places) => (state.places = places),
    SET_SELECTED_PLACE: (state, place) => (state.selectedPlace = place),
    SET_CURRENT_WEATHER: (state, weather) => (state.currentWeather = weather),
    SET_FIVE_DAYS_FORECASTS: (state, fiveDays) =>
      (state.fiveDaysForecasts = fiveDays)
  },
  actions: {
    autocomplete: async (context, value) => {
      if (
        !value ||
        (context.state.selectedPlace &&
          context.state.selectedPlace.text === value)
      )
        return;
      const {
        VUE_APP_WEATHER_API_BASE_URL: baseUrl,
        VUE_APP_WEATHER_API_VERSION: version,
        VUE_APP_API_KEY: apikey
      } = process.env;
      const url = `${baseUrl}locations/${version}/cities/autocomplete`;
      const params = {
        apikey,
        q: value
      };
      const { data } = await axios.get(url, { params });
      const places = data.map(place => ({
        ...place,
        text: `${place.LocalizedName}, ${place.AdministrativeArea.LocalizedName} ,${place.Country.ID}`
      }));
      context.commit("SET_PLACES", places);
    },
    getCurrentWeather: async context => {
      const {
        VUE_APP_WEATHER_API_BASE_URL: baseUrl,
        VUE_APP_WEATHER_API_VERSION: version,
        VUE_APP_API_KEY: apikey
      } = process.env;
      const url = `${baseUrl}currentconditions/${version}/${context.state.selectedPlace.Key}`;
      const params = {
        apikey,
        details: true
      };
      const {
        data: [currentWeather]
      } = await axios.get(url, { params });
      context.commit("SET_CURRENT_WEATHER", currentWeather);
    },
    getFiveDaysForecasts: async context => {
      const {
        VUE_APP_WEATHER_API_BASE_URL: baseUrl,
        VUE_APP_WEATHER_API_VERSION: version,
        VUE_APP_API_KEY: apikey
      } = process.env;
      const url = `${baseUrl}forecasts/${version}/daily/5day/${context.state.selectedPlace.Key}`;
      const params = {
        apikey,
        metric: context.rootState.metric
      };
      const { data } = await axios.get(url, { params });
      context.commit("SET_FIVE_DAYS_FORECASTS", data);
    }
  }
};
