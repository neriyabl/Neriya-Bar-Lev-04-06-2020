<template>
  <v-app>
    <v-app-bar app dark color="primary" src="./assets/phmUaj.jpg">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <div class="d-flex align-center">
        <h2>My Weather App</h2>
      </div>

      <v-spacer></v-spacer>
      <v-btn :outlined="page === 0" :text="page !== 0" @click="navigateTo('/')"
      >
        <v-icon left>home</v-icon>
        Home
      </v-btn>
      <v-btn
        :outlined="page === 1"
        :text="page !== 1"
        @click="navigateTo('/favorites')"
      >
        <v-icon left>star</v-icon>
        Favorites
      </v-btn>
    </v-app-bar>

    <v-content class="main-content">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  methods: {
    navigateTo(path) {
      if (this.$route.path !== path) {
        this.$router.replace(path);
      }
    }
  },
  computed: {
    page() {
      return ["/", "/favorites"].indexOf(this.$route.path);
    }
  }
};
</script>
