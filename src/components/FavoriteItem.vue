<template>
  <v-card v-if="favorite" raised @click="getDetails()">
    <v-card-text class="accent">
      <v-row align="center">
        <v-col cols="9" sm="6">
          <span class="title" v-text="favorite.text" />
        </v-col>
        <template v-if="weather">
          <v-col class="text-end">
            <span class="title" v-text="getMetricText(weather.Temperature)" />
          </v-col>
          <v-col cols="12" sm="3" class="text-center">
            <v-img
              :src="
                `https://www.accuweather.com/images/weathericons/${weather.WeatherIcon}.svg`
              "
              :alt="weather.WeatherText"
              contain
              height="30px"
            ></v-img>
            <span class="subtitle-2" v-text="weather.WeatherText"></span>
          </v-col>
        </template>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "FavoriteItem",
  props: {
    favorite: Object
  },
  methods: {
    getDetails() {
      this.$store.commit("homeModule/SET_SELECTED_PLACE", this.favorite);
      this.$router.push("/");
    },
    getMetricText(data, separator = "°") {
      return `${data.Metric.Value}${separator}${data.Metric.Unit}`;
    }
  },
  computed: {
    weather() {
      return this.$store.getters["favoritesModule/getWeatherByKey"](
        this.favorite.Key
      );
    }
  }
};
</script>
