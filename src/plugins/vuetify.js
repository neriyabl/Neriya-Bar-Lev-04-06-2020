import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);
const hours = new Date().getHours();

const opts = {
  theme: {
    dark: hours > 19 || hours < 5,
    themes: {
      light: {
        primary: colors.lightGreen.darken1,
        secondary: colors.lightGreen.lighten5,
        accent: colors.teal.lighten5
      },
      dark: {
        primary: colors.green.darken3,
        accent: colors.blueGrey.darken2
      }
    }
  },
  icons: {
    iconfont: "md"
  }
};
export default new Vuetify(opts);
