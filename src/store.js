import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedPlace: {
      Version: 1,
      Key: "215793",
      Type: "City",
      Rank: 95,
      LocalizedName: "Tel-aviv Port",
      Country: {
        ID: "IL",
        LocalizedName: "Israel"
      },
      AdministrativeArea: {
        ID: "TA",
        LocalizedName: "Tel Aviv"
      },
      text: "Tel-aviv Port, Tel Aviv, IL"
    },
    places: [
      {
        Version: 1,
        Key: "215793",
        Type: "City",
        Rank: 95,
        LocalizedName: "Tel-aviv Port",
        Country: {
          ID: "IL",
          LocalizedName: "Israel"
        },
        AdministrativeArea: {
          ID: "TA",
          LocalizedName: "Tel Aviv"
        },
        text: "Tel-aviv Port, Tel Aviv, IL"
      }
    ],
    loading: false
  },
  mutations: {
    SET_PLACES: (state, places) => (state.places = places),
    SET_SELECTED_PLACE: (state, place) => (state.selectedPlace = place)
  },
  actions: {
    autocomplete: async (context, value) => {
      if (
        !value ||
        (context.state.selectedPlace &&
          context.state.selectedPlace.text === value)
      )
        return;
      context.state.loading = true;
      const url = `${process.env.VUE_APP_WEATHER_BASE_URL}cities/autocomplete`;
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
      const places = data.map(place => ({
        ...place,
        text: `${place.LocalizedName}, ${place.AdministrativeArea.LocalizedName} ,${place.Country.ID}`
      }));
      context.commit("SET_PLACES", places);
      context.state.loading = false;
    }
  }
});
