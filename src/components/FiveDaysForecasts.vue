<template>
  <v-container>
    <v-row dense>
      <v-col v-if="place" cols="12" class="text-center">
        <span v-text="fiveDaysForecasts.Headline.Text"></span>
      </v-col>
      <v-scale-transition>
        <v-col cols="12" v-if="place">
          <v-row justify="center" align="center">
            <v-card
              v-for="day of fiveDaysForecasts.DailyForecasts"
              :key="day.EpochDate"
              raised
              max-width="300"
              class="ma-2"
            >
              <v-card-title class="primary ma-auto">
                <span
                  class="white--text"
                  v-text="new Date(day.Date).toDateString()"
                ></span>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col
                    class="pb-0"
                    cols="6"
                    v-for="time of ['Day', 'Night']"
                    :key="time"
                  >
                    <v-img
                      class="mr-2"
                      :src="
                        `https://www.accuweather.com/images/weathericons/${day[time].Icon}.svg`
                      "
                      :alt="day[time].IconPhrase"
                      contain
                      height="80px"
                    ></v-img>
                    <div class="text-center mb-4">
                      {{ day[time].IconPhrase }}
                    </div>
                    <span
                      v-text="getExtremeTemperature(time, day.Temperature)"
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-row>
        </v-col>
      </v-scale-transition>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FiveDaysForecasts",
  methods: {
    getExtremeTemperature(time, temperature) {
      const extreme = time === "Day" ? "Maximum" : "Minimum";
      return `${extreme}: ${temperature[extreme].Value}°${temperature[extreme].Unit}`;
    }
  },
  computed: {
    fiveDaysForecasts() {
      return this.$store.state.homeModule.fiveDaysForecasts;
    },
    place() {
      return this.$store.state.homeModule.selectedPlace;
    }
  }
};
</script>
