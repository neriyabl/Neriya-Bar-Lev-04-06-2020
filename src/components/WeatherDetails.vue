<template>
  <v-card raised v-if="place">
    <v-card-title class="pa-0 secondary">
      <span
        class="white--text headline font-weight-bold pa-2"
        v-text="`Weather in ${place.text}`"
      ></span>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleFavorite()">
        <v-icon v-if="favorite" color="white">star</v-icon>
        <v-icon v-else color="white">star_outline</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider />

    <v-card-text>
      <div>
        {{ new Date(weather.LocalObservationDateTime).toDateString() }}
      </div>
      <div>
        {{ weather.WeatherText }}
      </div>
      <div>
        {{ weather.Temperature.Metric.Value }}
        {{ weather.Temperature.Metric.Unit }}
      </div>
      <div>
        {{ weather.RealFeelTemperature.Metric }}
      </div>
      <div>
        {{ weather }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "WeatherDetails",
  created() {
    this.checkFavorite();
  },
  data: () => ({
    favorite: false
  }),
  methods: {
    checkFavorite() {
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
    }
  },
  computed: {
    place() {
      return this.$store.state.homeModule.selectedPlace;
    },
    weather() {
      return this.$store.state.homeModule.currentWeather[0];
    }
  },
  watch: {
    place() {
      this.checkFavorite();
    }
  }
};
</script>
