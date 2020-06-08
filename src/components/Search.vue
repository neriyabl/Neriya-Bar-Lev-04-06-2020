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
      context.$store.dispatch("homeModule/autocomplete", value);
    }, 1000)
  },
  computed: {
    place: {
      get() {
        return this.$store.state.homeModule.selectedPlace;
      },
      set(place) {
        this.$store.commit("homeModule/SET_SELECTED_PLACE", place);
      }
    },
    places() {
      return this.$store.state.homeModule.places;
    },
    loading() {
      return this.$store.state.homeModule.loading;
    }
  },
  watch: {
    search(value) {
      this.getPlaces(this, value);
    }
  }
};
</script>
