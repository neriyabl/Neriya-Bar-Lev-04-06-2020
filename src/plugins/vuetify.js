import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: colors.lightGreen.darken1,
        secondary: colors.lightGreen.lighten5,
        accent: colors.teal.lighten3
      }
    }
  },
  icons: {
    iconfont: "md"
  }
};
export default new Vuetify(opts);
