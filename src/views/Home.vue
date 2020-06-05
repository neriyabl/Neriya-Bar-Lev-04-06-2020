<template>
  <v-container>
    <v-row class="ma-md-12">
      <v-col offset-md="3" md="6" cols="12" align-self="center">
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
        >
        </v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import _ from "lodash";
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data: () => ({
    loading: false,
    places: [],
    place: {},
    search: null
  }),
  methods: {
    getPlaces: _.debounce(async (value, context) => {
      if (!value || context.place.text === value) return;
      context.loading = true;
      const url =
        "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";
      const params = {
        apikey: process.env.VUE_APP_API_KEY,
        q: value
      };
      // const { data } = await axios.get(url, { params });
      const data = [
        {
          Version: 1,
          Key: "213225",
          Type: "City",
          Rank: 30,
          LocalizedName: "Jerusalem",
          Country: {
            ID: "IL",
            LocalizedName: "Israel"
          },
          AdministrativeArea: {
            ID: "JM",
            LocalizedName: "Jerusalem"
          }
        },
        {
          Version: 1,
          Key: "250835",
          Type: "City",
          Rank: 65,
          LocalizedName: "Jerusalem",
          Country: {
            ID: "NZ",
            LocalizedName: "New Zealand"
          },
          AdministrativeArea: {
            ID: "MWT",
            LocalizedName: "Manawatu-Wanganui"
          }
        },
        {
          Version: 1,
          Key: "128752",
          Type: "City",
          Rank: 65,
          LocalizedName: "Jerusalen",
          Country: {
            ID: "SV",
            LocalizedName: "El Salvador"
          },
          AdministrativeArea: {
            ID: "PA",
            LocalizedName: "La Paz"
          }
        },
        {
          Version: 1,
          Key: "32864",
          Type: "City",
          Rank: 75,
          LocalizedName: "Jerusalen",
          Country: {
            ID: "BO",
            LocalizedName: "Bolivia"
          },
          AdministrativeArea: {
            ID: "B",
            LocalizedName: "El Beni"
          }
        },
        {
          Version: 1,
          Key: "221483",
          Type: "City",
          Rank: 75,
          LocalizedName: "Jerusalem",
          Country: {
            ID: "JM",
            LocalizedName: "Jamaica"
          },
          AdministrativeArea: {
            ID: "10",
            LocalizedName: "Westmoreland"
          }
        },
        {
          Version: 1,
          Key: "2310187",
          Type: "City",
          Rank: 85,
          LocalizedName: "Jerusalém",
          Country: {
            ID: "BR",
            LocalizedName: "Brazil"
          },
          AdministrativeArea: {
            ID: "MT",
            LocalizedName: "Mato Grosso"
          }
        },
        {
          Version: 1,
          Key: "1376675",
          Type: "City",
          Rank: 85,
          LocalizedName: "Jerusalem",
          Country: {
            ID: "CZ",
            LocalizedName: "Czechia"
          },
          AdministrativeArea: {
            ID: "20",
            LocalizedName: "Central Bohemian"
          }
        },
        {
          Version: 1,
          Key: "3537004",
          Type: "City",
          Rank: 85,
          LocalizedName: "Jerusalem",
          Country: {
            ID: "IE",
            LocalizedName: "Ireland"
          },
          AdministrativeArea: {
            ID: "KE",
            LocalizedName: "County Kildare"
          }
        },
        {
          Version: 1,
          Key: "1062987",
          Type: "City",
          Rank: 85,
          LocalizedName: "Jerusalem",
          Country: {
            ID: "MX",
            LocalizedName: "Mexico"
          },
          AdministrativeArea: {
            ID: "DUR",
            LocalizedName: "Durango"
          }
        },
        {
          Version: 1,
          Key: "2115414",
          Type: "City",
          Rank: 85,
          LocalizedName: "Jerusalem",
          Country: {
            ID: "US",
            LocalizedName: "United States"
          },
          AdministrativeArea: {
            ID: "OH",
            LocalizedName: "Ohio"
          }
        }
      ];
      context.places = data.map(place => ({
        ...place,
        text: `${place.LocalizedName}, ${place.AdministrativeArea.LocalizedName} ,${place.Country.ID}`
      }));
      context.loading = false;
    }, 1000)
  },
  watch: {
    search(value) {
      this.getPlaces(value, this);
    },
    async place(value) {
      console.log(value.Key);
    }
  }
};
</script>
