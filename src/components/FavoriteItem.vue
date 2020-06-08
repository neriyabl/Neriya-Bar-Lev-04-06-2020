<template>
  <v-card raised color="accent" @click="getDetails()">
    <v-card-title>
      {{ favorite.text }}
    </v-card-title>
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
    }
  }
};
</script>
