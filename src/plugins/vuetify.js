import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#5C821A',
        secondary: '#0F1B07',
        accent: '#232122',
        error: '#D72C16',
        info: '#C6D166',
        success: '#128277',
        warning: '#8E9B97'
      },
    },
  },
});
