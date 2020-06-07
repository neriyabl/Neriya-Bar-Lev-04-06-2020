<template>
  <v-container>
    <v-row>
      <v-col offset-md="3" md="6" cols="12">
        <search class="mx-md-12" />
      </v-col>
      <v-col offset-lg="3" lg="6" offset-md="2" md="8" cols="12">
        <weather-details />
      </v-col>
      <v-col cols="12">
        <five-days-forecasts></five-days-forecasts>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Search from "../components/Search";
import WeatherDetails from "../components/WeatherDetails";
import FiveDaysForecasts from "../components/FiveDaysForecasts";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Search,
    WeatherDetails,
    FiveDaysForecasts
  },
  computed: {
    ...mapState("homeModule", {
      place: s => s.selectedPlace,
      weather: s => s.currentWeather[0],
      fiveDays: s => s.fiveDaysForecasts
    })
  }
};
</script>
