<template>
  <!--  <v-list-item-content class="py-0 px-12">-->
  <!--    <v-list-item-subtitle>-->
  <v-card raised class="ma-5" @click="getDetails()">
    <v-card-title>
      {{ favorite.text }}
    </v-card-title>
  </v-card>
  <!--    </v-list-item-subtitle>-->
  <!--  </v-list-item-content>-->
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
      this.$router.replace("/");
    }
  }
};
</script>
