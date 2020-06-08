<template>
  <v-app>
    <v-snackbar top v-model="siteAlertModel" color="error">
      <span v-text="siteAlert.text" />
      <v-btn small rounded text @click="siteAlertModel = false">Close</v-btn>
    </v-snackbar>

    <v-app-bar
      app
      dark
      color="primary"
      :src="require(`@/assets/${darkMode ? 'night.jpg' : 'day.jpg'}`)"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(0,80,122,.4), rgba(128,208,199,.4)"
        ></v-img>
      </template>

      <div class="d-flex align-center">
        <h2>Weather</h2>
      </div>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-switch
            class="ml-4"
            v-on="on"
            v-model="darkMode"
            hide-details
            inset
            color="white"
          ></v-switch>
        </template>
        <span v-text="`${darkMode ? 'Dark' : 'Light'} Theme`" />
      </v-tooltip>

      <v-spacer></v-spacer>
      <v-btn :outlined="page === 0" :text="page !== 0" @click="navigateTo('/')">
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

    <v-content class="main-content secondary">
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
        this.$router.push(path);
      }
    }
  },
  computed: {
    page() {
      return ["/", "/favorites"].indexOf(this.$route.path);
    },
    darkMode: {
      get() {
        return this.$vuetify.theme.dark;
      },
      set(value) {
        this.$vuetify.theme.dark = value;
      }
    },
    siteAlert() {
      return this.$store.state.siteAlert;
    },
    siteAlertModel: {
      get() {
        return this.siteAlert.model;
      },
      set(value) {
        this.$store.commit("SET_SITE_ALERT_MODEL", value);
      }
    }
  }
};
</script>
