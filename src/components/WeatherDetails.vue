<template>
  <v-expand-transition>
    <v-card raised v-if="weather && place" class="ma-auto">
      <v-card-title class="pa-0 primary">
        <v-list-item two-line dense>
          <v-list-item-content>
            <v-list-item-title
              class="white--text headline font-weight-bold"
              v-text="place.text"
            ></v-list-item-title>
            <v-list-item-subtitle
              class="subtitle-1"
              v-text="new Date(weather.LocalObservationDateTime).toDateString()"
            ></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn color="white" icon @click="toggleFavorite()" v-on="on">
                  <v-icon v-if="favorite">star</v-icon>
                  <v-icon v-else>star_outline</v-icon>
                </v-btn>
              </template>
              <span
                v-text="favorite ? 'Remove from favorites' : 'Add to favorites'"
              ></span>
            </v-tooltip>
          </v-list-item-action>
        </v-list-item>
      </v-card-title>

      <v-card-text>
        <v-row align="center">
          <v-col class="text-center" cols="6">
            <v-list-item three-line dense>
              <v-list-item-content>
                <v-list-item-title>
                  <span
                    class="primary--text display-3"
                    v-text="getMetricText(weather.Temperature)"
                  />
                </v-list-item-title>
                <v-list-item-subtitle>
                  <span>Real Feel: </span>
                  <span v-text="getMetricText(weather.RealFeelTemperature)" />
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <span>Real Feel Shade: </span>
                  <span
                    v-text="getMetricText(weather.RealFeelTemperatureShade)"
                  />
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <v-col cols="6" class="text-center">
            <v-img
              :src="
                `https://www.accuweather.com/images/weathericons/${weather.WeatherIcon}.svg`
              "
              :alt="weather.WeatherText"
              contain
              height="120px"
            ></v-img>
            <span class="title" v-text="weather.WeatherText"></span>
          </v-col>
          <v-col>
            <v-row class="subtitle-1">
              <v-col cols="12" class="pa-0 pl-4">
                <span>Wind: </span>
                <span
                  v-text="
                    `${weather.Wind.Direction.Localized} at ${getMetricText(
                      weather.Wind.Speed,
                      ' '
                    )}`
                  "
                ></span>
              </v-col>
              <v-col cols="12" class="pa-0 pl-4">
                <span>WindGust: </span>
                <span
                  v-text="getMetricText(weather.WindGust.Speed, ' ')"
                ></span>
              </v-col>
              <v-col cols="12" class="pa-0 pl-4">
                <span>Humidity: </span>
                <span v-text="`${weather.RelativeHumidity} %`"></span>
              </v-col>
              <v-col
                v-if="weather.HasPrecipitation"
                cols="12"
                class="pa-0 pl-4"
              >
                <span>Precipitation: </span>
                <span
                  v-text="
                    getMetricText(
                      weather.PrecipitationSummary.Precipitation,
                      ' '
                    )
                  "
                ></span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-expand-transition>
</template>

<script>
export default {
  name: "WeatherDetails",
  created() {
    this.refreshData();
  },
  data: () => ({
    favorite: false
  }),
  methods: {
    refreshData() {
      this.checkFavorite();
      this.$store.dispatch("homeModule/getCurrentWeather");
      this.$store.dispatch("homeModule/getFiveDaysForecasts");
    },
    checkFavorite() {
      if (!this.place) return;
      const favorites = JSON.parse(localStorage.getItem("favorites"));
      this.favorite = !!(favorites && favorites[this.place.Key]);
    },
    toggleFavorite() {
      this.favorite = !this.favorite;
      const favorites = JSON.parse(localStorage.getItem("favorites")) || {};
      if (this.favorite) {
        favorites[this.place.Key] = this.place;
      } else {
        delete favorites[this.place.Key];
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
    },
    getMetricText(data, separator = "°") {
      return `${data.Metric.Value}${separator}${data.Metric.Unit}`;
    }
  },
  computed: {
    place() {
      return this.$store.state.homeModule.selectedPlace;
    },
    weather() {
      return this.$store.state.homeModule.currentWeather;
    }
  },
  watch: {
    place() {
      this.refreshData();
    }
  }
};
</script>
