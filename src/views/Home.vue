<template>
  <v-container>
    <v-row class="ma-md-12">
      <v-col offset-md="3" md="6" cols="12" align-self="center">
        <search />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Search from "../components/Search";

export default {
  name: "Home",
  components: {
    Search
  },
};
</script>
