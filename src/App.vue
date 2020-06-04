<template>
  <v-app>
    <v-app-bar app class="px-md-10" dark color="primary">
      <div class="d-flex align-center">
        <h2>My Weather App</h2>
      </div>
      <v-spacer></v-spacer>
      <v-btn-toggle v-model="page" mandatory background-color="primary">
        <v-btn text @click="navigateTo('/')">Home</v-btn>
        <v-btn text @click="navigateTo('/favorites')">Favorites</v-btn>
      </v-btn-toggle>
    </v-app-bar>

    <v-content class="main-content">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  created() {
    this.page = ["/", "/favorites"].indexOf(this.$route.path);
  },
  data: () => ({
    page: 0
  }),
  methods: {
    navigateTo(path) {
      if (this.$route.path !== path) {
        this.$router.replace(path);
      }
    }
  }
};
</script>
