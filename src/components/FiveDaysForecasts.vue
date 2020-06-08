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
                  <v-col class="pb-0" cols="6">
                    <v-img
                      class="mr-2"
                      :src="
                        `https://www.accuweather.com/images/weathericons/${day.Day.Icon}.svg`
                      "
                      :alt="day.Day.IconPhrase"
                      contain
                      height="80px"
                    ></v-img>
                    <div class="text-center mb-4">{{ day.Day.IconPhrase }}</div>
                    <span
                    >Maximum: {{ day.Temperature.Maximum.Value }}°{{
                        day.Temperature.Maximum.Unit
                      }}</span
                    >
                  </v-col>
                  <v-col cols="6">
                    <v-img
                      class="mr-3"
                      :src="
                        `https://www.accuweather.com/images/weathericons/${day.Night.Icon}.svg`
                      "
                      :alt="day.Night.IconPhrase"
                      contain
                      height="80px"
                    ></v-img>
                    <div class="text-center mb-4">
                      {{ day.Night.IconPhrase }}
                    </div>
                    <span
                    >Minimum: {{ day.Temperature.Minimum.Value }}°{{
                        day.Temperature.Minimum.Unit
                      }}</span
                    >
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
