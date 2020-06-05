<template>
  <v-autocomplete
    v-model="place"
    :items="places"
    :search-input.sync="search"
    :loading="loading"
    solo
    clearable
    style="border-radius: 25px"
    prepend-inner-icon="search"
    placeholder="Search places to find weather"
    item-text="text"
    item-value="text"
    hide-details
    hide-no-data
    return-object
    cache-items
  >
  </v-autocomplete>
</template>

<script>
import _ from "lodash";

export default {
  name: "Search",
  data: () => ({
    search: null
  }),
  methods: {
    getPlaces: _.debounce((context, value) => {
      context.$store.dispatch("autocomplete", value);
    }, 1000)
  },
  computed: {
    place: {
      get() {
        return this.$store.state.selectedPlace;
      },
      set(place) {
        this.$store.commit("SET_SELECTED_PLACE", place);
      }
    },
    places() {
      return this.$store.state.places;
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  watch: {
    search(value) {
      this.getPlaces(this, value);
    },
    async place(value) {
      if (!value) return;
      console.log(value.Key);
    }
  }
};
</script>
