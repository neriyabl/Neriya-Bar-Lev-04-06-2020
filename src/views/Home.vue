<template>
  <v-container class="pa-md-12">
    <v-row class="mx-md-12">
      <v-col cols="12" align-self="center" class="pa-md-12">
        <v-text-field solo append-icon="search"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    env: null
  })
};
</script>
