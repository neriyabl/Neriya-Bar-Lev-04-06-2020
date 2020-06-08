<template>
  <v-container>
    <v-row>
      <v-col offset-md="3" md="6" cols="12" :class="!place ? 'mt-12' : ''">
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

export default {
  name: "Home",
  components: {
    Search,
    WeatherDetails,
    FiveDaysForecasts
  },
  computed: {
    place() {
      return this.$store.state.homeModule.selectedPlace;
    }
  }
};
</script>
