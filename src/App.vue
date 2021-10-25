<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="logo cellphone"
          class="shrink mr-2"
          contain
          src="./assets/columns-gap.svg"
          transition="scale-transition"
          width="40"
        />

        <h1>Tienda CellPhone</h1>
      </div>

      <v-spacer></v-spacer>
      <div class="d-none d-md-inline mr-5"><Estadisticas /></div>
      <div class="d-none d-md-inline ml-3"><Nuevo /></div>
      <v-row class="d-flex d-md-none">
        <v-col>
          <!-- -->
          <div class="text-center text-md-center">
            <v-bottom-sheet v-model="sheet">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="purple" dark v-bind="attrs" v-on="on">
                  <v-icon>mdi-format-list-bulleted</v-icon>
                </v-btn>
              </template>
              <v-list color="secondary">
                <v-row>
                  <v-col class="ml-4">
                    <Nuevo />
                  </v-col>
                  <v-col>
                    <Estadisticas />
                  </v-col>
                </v-row>
              </v-list>
            </v-bottom-sheet>
          </div>
          <!-- -->
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main class="accent">
      <!--  -->
      <!-- -->
      
      <!-- -->
      <Vista />
    </v-main>
    <v-footer padless>
      <v-col class="text-center grey" cols="12">
        <h3 class="primary--text">
          UNIVERSIDAD DE EL SALVADOR FACULTAD MULTIDISCIPLINARIA DE OCCIDENTE
        </h3>
        <h4 class="pink--text darken-4">
          FUNDAMENTOS DE PROGRAMACION EN INTERNET
        </h4>
        <h5 class="purple--text">VLADIMIR ENRIQUE MARTINEZ FLORES _ MF18030</h5>
        {{ new Date().getFullYear() }} — <strong class="info">FPI</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Vista from "./components/Vista";
import Nuevo from "./components/Nuevo";
import Estadisticas from "./components/Estadisticas";

export default {
  name: "App",

  components: {
    Vista,
    Nuevo,
    Estadisticas,
  },

  data: () => ({
    direction: "right",
    fab: false,
    tabs: null,
    top: true,
    right: false,
    bottom: false,
    left: true,
    transition: "slide-transition",
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>
