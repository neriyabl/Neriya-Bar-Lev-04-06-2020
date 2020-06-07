<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" class="text-sm-center">
        <span v-text="fiveDaysForecasts.Headline.Text"></span>
      </v-col>
      <v-col
        v-for="day of fiveDaysForecasts.DailyForecasts"
        :key="day.EpochDate"
      >
        <v-card>
          <v-card-title class="primary">
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
                  aspect-ratio="3"
                ></v-img>
              </v-col>
              <v-col class="pb-0">
                <v-img
                  class="mr-2"
                  :src="
                    `https://www.accuweather.com/images/weathericons/${day.Night.Icon}.svg`
                  "
                  :alt="day.Night.IconPhrase"
                  contain
                  aspect-ratio="3"
                ></v-img>
              </v-col>
              <v-col cols="6">
                <span
                  >Maximum: {{ day.Temperature.Maximum.Value }}°{{
                    day.Temperature.Maximum.Unit
                  }}</span
                >
              </v-col>
              <v-col>
                <span
                  >Minimum: {{ day.Temperature.Minimum.Value }}°{{
                    day.Temperature.Minimum.Unit
                  }}</span
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FiveDaysForecasts",
  computed: {
    fiveDaysForecasts() {
      return this.$store.state.homeModule.fiveDaysForecasts;
    }
  }
};
</script>
