<template>
  <v-container v-if="favorites">
    <v-row>
      <v-col
        cols="12"
        offset-md="2"
        md="8"
        offset-lg="3"
        lg="6"
        offset-xl="4"
        xl="4"
        v-for="[key, favorite] of Object.entries(favorites)"
        :key="key"
      >
        <favorite-item :favorite="favorite" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FavoriteItem from "../components/FavoriteItem";
export default {
  name: "Favorites",
  components: {
    FavoriteItem
  },
  created() {
    this.$store.dispatch("favoritesModule/getFavorites");
  },
  computed: {
    favorites() {
      return this.$store.state.favoritesModule.favorites;
    }
  }
};
</script>
