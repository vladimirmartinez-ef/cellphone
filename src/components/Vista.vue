<template>
  <v-container fluid>
    <v-row class="d-flex d-lg-none">
      <v-col>
        <!-- -->
        <div class="text-right text-md-center">
          <v-bottom-sheet v-model="sheet">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="blue" dark v-bind="attrs" v-on="on">
                <v-icon>mdi-filter</v-icon>
              </v-btn>
            </template>
            <v-list class="grey lighten-3">
              <v-row>
                <v-subheader title="Solo puede seleccionar un filtro de los que existen, para habilitar los demas deseleccione">Estado</v-subheader>
                <v-col>
                  <v-checkbox
                    color="pink lighten-2"
                    :disabled="estadoNuevo2"
                    v-model="estadoNuevo"
                    @click="filtros(estadoNuevo, stdNuevo)"
                    :label="`Nuevo`"
                  ></v-checkbox>
                </v-col>
                <v-col>
                  <v-checkbox
                    color="yellow lighten-2"
                    :disabled="estadoUsado2"
                    v-model="estadoUsado"
                    @click="filtros(estadoUsado, stdUsado)"
                    :label="`Usado`"
                  ></v-checkbox>
                </v-col>
              </v-row>

              <v-row>
                <v-subheader title="Solo puede seleccionar un filtro de los que existen, para habilitar los demas deseleccione">Marca</v-subheader>
                <v-col>
                  <v-checkbox
                    color="blue lighten-2"
                    :disabled="marcaSamsung2"
                    v-model="marcaSamsung"
                    @click="filtros(marcaSamsung, mrSamsung)"
                    :label="`Samsung`"
                  ></v-checkbox>
                </v-col>
                <v-col>
                  <v-checkbox
                    color="green lighten-2"
                    :disabled="marcaHuawei2"
                    v-model="marcaHuawei"
                    @click="filtros(marcaHuawei, mrHuawei)"
                    :label="`Huawei`"
                  ></v-checkbox>
                </v-col>
                <v-col>
                  <v-checkbox
                    color="grey lighten-2"
                    :disabled="marcaNokia2"
                    v-model="marcaNokia"
                    @click="filtros(marcaNokia, mrNokia)"
                    :label="`Nokia`"
                  ></v-checkbox>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-checkbox
                    color="black lighten-2"
                    :disabled="marcaIPhone2"
                    v-model="marcaIPhone"
                    @click="filtros(marcaIPhone, mrIPhone)"
                    :label="`IPhone`"
                  ></v-checkbox>
                </v-col>
                <v-col>
                  <v-checkbox
                    color="red lighten-2"
                    :disabled="marcaXiomi2"
                    v-model="marcaXiomi"
                    @click="filtros(marcaXiomi, mrXiomi)"
                    :label="`Xiomi`"
                  ></v-checkbox>
                </v-col>
              </v-row>

              <v-row>
                <v-subheader title="Solo puede seleccionar un filtro de los que existen, para habilitar los demas deseleccione">Sistema</v-subheader>
                <v-col>
                  <v-checkbox
                    color="brown lighten-2"
                    :disabled="sistemaAndroid2"
                    v-model="sistemaAndroid"
                    @click="filtros(sistemaAndroid, stmAndroid)"
                    :label="`Android`"
                  ></v-checkbox>
                </v-col>
                <v-col>
                  <v-checkbox
                    color="orange lighten-2"
                    :disabled="sistemaWindows2"
                    v-model="sistemaWindows"
                    @click="filtros(sistemaWindows, stmWindows)"
                    :label="`Windows`"
                  ></v-checkbox>
                </v-col>
                <v-col>
                  <v-checkbox
                    color="purple lighten-2"
                    :disabled="sistemaIos2"
                    v-model="sistemaIos"
                    @click="filtros(sistemaIos, stmIos)"
                    :label="`Ios`"
                  ></v-checkbox>
                </v-col>
              </v-row>

              <v-row>
                <v-subheader title="Solo puede seleccionar un filtro de los que existen, para habilitar los demas deseleccione">Pantalla</v-subheader>
                <v-col>
                  <v-checkbox
                    color="teal lighten-2"
                    :disabled="pantallaSeis2"
                    v-model="pantallaSeis"
                    @click="filtros(pantallaSeis, ptaSeis)"
                    :label="`6.0`"
                  ></v-checkbox>
                </v-col>
                <v-col>
                  <v-checkbox
                    color="amber lighten-2"
                    :disabled="pantallaCincop2"
                    v-model="pantallaCincop"
                    @click="filtros(pantallaCincop, ptaCincop)"
                    :label="`5.5`"
                  ></v-checkbox>
                </v-col>
                <v-col>
                  <v-checkbox
                    color="indigo lighten-2"
                    :disabled="pantallaCinco2"
                    v-model="pantallaCinco"
                    @click="filtros(pantallaCinco, ptaCinco)"
                    :label="`5.0`"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-list>
          </v-bottom-sheet>
        </div>
        <!-- -->
      </v-col>
    </v-row>
    <v-row>
      <!-- filtros -->
      <v-col lg="4" class="text-left grey lighten-2 d-none d-lg-block" fixed>
        <div>
          <h3 title="Solo puede seleccionar un filtro de los que existen, para habilitar los demas deseleccione">Estado</h3>
          <v-checkbox
            color="red"
            :disabled="estadoNuevo2"
            v-model="estadoNuevo"
            @click="filtros(estadoNuevo, stdNuevo)"
            :label="`Nuevo: ${estadoNuevo.toString()}`"
          ></v-checkbox>
          <v-checkbox
            color="pink"
            :disabled="estadoUsado2"
            v-model="estadoUsado"
            @click="filtros(estadoUsado, stdUsado)"
            :label="`Usado: ${estadoUsado.toString()}`"
          ></v-checkbox>
        </div>

        <div>
          <h3 title="Solo puede seleccionar un filtro de los que existen, para habilitar los demas deseleccione">Marca</h3>
          <v-badge
            :content="contSamsung"
            :value="contSamsung"
            color="purple"
            overlap
          >
          <v-checkbox
            color="purple"
            :disabled="marcaSamsung2"
            v-model="marcaSamsung"
            @click="filtros(marcaSamsung, mrSamsung)"
            :label="`Samsung`"
          ></v-checkbox>
          </v-badge>
          <br>
          <v-badge
            :content="contHuawei"
            :value="contHuawei"
            color="indigo"
            overlap
          >
          <v-checkbox
            color="indigo"
            :disabled="marcaHuawei2"
            v-model="marcaHuawei"
            @click="filtros(marcaHuawei, mrHuawei)"
            :label="`Huawei`"
          ></v-checkbox>
          </v-badge><br>
          <v-badge
            :content="contNokia"
            :value="contNokia"
            color="blue"
            overlap
          >
          <v-checkbox
            color="blue"
            :disabled="marcaNokia2"
            v-model="marcaNokia"
            @click="filtros(marcaNokia, mrNokia)"
            :label="`Nokia`"
          ></v-checkbox>
          </v-badge><br>
          <v-badge
            :content="contIphone"
            :value="contIphone"
            color="teal"
            overlap
          >
          <v-checkbox
            color="teal"
            :disabled="marcaIPhone2"
            v-model="marcaIPhone"
            @click="filtros(marcaIPhone, mrIPhone)"
            :label="`IPhone`"
          ></v-checkbox>
          </v-badge><br>
          <v-badge
            :content="contXiomi"
            :value="contXiomi"
            color="green"
            overlap
          >
          <v-checkbox
            color="green"
            :disabled="marcaXiomi2"
            v-model="marcaXiomi"
            @click="filtros(marcaXiomi, mrXiomi)"
            :label="`Xiomi`"
          ></v-checkbox>
          </v-badge>
        </div>

        <div>
          <h3 title="Solo puede seleccionar un filtro de los que existen, para habilitar los demas deseleccione">Sistema</h3>
          <v-badge
            :content="contAndroid"
            :value="contAndroid"
            color="lime"
            overlap
          >
            <v-checkbox
              color="lime"
              :disabled="sistemaAndroid2"
              v-model="sistemaAndroid"
              @click="filtros(sistemaAndroid, stmAndroid)"
              :label="`Android`"
            ></v-checkbox>
          </v-badge><br>
          <v-badge
            :content="contWindows"
            :value="contWindows"
            color="amber"
            overlap
          >
          <v-checkbox
            color="amber"
            :disabled="sistemaWindows2"
            v-model="sistemaWindows"
            @click="filtros(sistemaWindows, stmWindows)"
            :label="`Windows`"
          ></v-checkbox>
          </v-badge><br>
          <v-badge
            :content="contIos"
            :value="contIos"
            color="orange"
            overlap
          >
          <v-checkbox
            color="orange"
            :disabled="sistemaIos2"
            v-model="sistemaIos"
            @click="filtros(sistemaIos, stmIos)"
            :label="`Ios`"
          ></v-checkbox>
          </v-badge>
        </div>

        <div>
          <h3 title="Solo puede seleccionar un filtro de los que existen, para habilitar los demas deseleccione">Pantalla</h3>
          <v-checkbox
            color="brown"
            :disabled="pantallaSeis2"
            v-model="pantallaSeis"
            @click="filtros(pantallaSeis, ptaSeis)"
            :label="`6.0`"
          ></v-checkbox>
          <v-checkbox
            color="grey"
            :disabled="pantallaCincop2"
            v-model="pantallaCincop"
            @click="filtros(pantallaCincop, ptaCincop)"
            :label="`5.5`"
          ></v-checkbox>
          <v-checkbox
            color="black"
            :disabled="pantallaCinco2"
            v-model="pantallaCinco"
            @click="filtros(pantallaCinco, ptaCinco)"
            :label="`5.0`"
          ></v-checkbox>
        </div>
      </v-col>

      <!-- data iterator -->
      <v-col lg="8" sm="12">
        <v-row>
          <!-- dataiterador -->
          <v-data-iterator
            class="mx-3"
            :items="items"
            :items-per-page.sync="itemsPerPage"
            :page="page"
            :search="search"
            :sort-by="sortBy.toLowerCase()"
            :sort-desc="sortDesc"
            hide-default-footer
          >
            <template v-slot:header>
              <v-toolbar dark color="purple darken-5" class="mb-1">
                <v-text-field
                  v-model="search"
                  clearable
                  flat
                  solo-inverted
                  hide-details
                  prepend-inner-icon="mdi-magnify"
                  label="Search"
                ></v-text-field>
                <template v-if="$vuetify.breakpoint.mdAndUp">
                  <v-spacer></v-spacer>
                  <v-select
                    v-model="sortBy"
                    flat
                    solo-inverted
                    hide-details
                    :items="keys"
                    prepend-inner-icon="mdi-magnify"
                    label="Sort by"
                  ></v-select>
                  <v-spacer></v-spacer>
                  <v-btn-toggle v-model="sortDesc" mandatory>
                    <v-btn large depressed color="purple" :value="false">
                      <v-icon>mdi-arrow-up</v-icon>
                    </v-btn>
                    <v-btn large depressed color="purple" :value="true">
                      <v-icon>mdi-arrow-down</v-icon>
                    </v-btn>
                  </v-btn-toggle>
                </template>
              </v-toolbar>
            </template>

            <template v-slot:default="props">
              <v-row>
                <v-col
                  v-for="(item, index) in props.items"
                  :key="index"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <!-- cardsinfiltros -->
                  <v-card class="mx-auto" max-width="344">
                    <v-img
                      src="https://t.ipadizate.es/2020/10/Resonance_Space_Gray_Light-428w-926h@3xiphone-320x692.png"
                      height="200px"
                    >
                      <h2 class="white--text text-center my-15">
                        {{ item.titulo }}
                      </h2>
                    </v-img>
                    <h1 class="text-center">$ {{ item.precio }}</h1>

                    <v-card-actions>
                      <Anuncio :idAnuncio="item.id" />
                      <v-spacer></v-spacer>

                      <v-btn icon @click="show = !show">
                        <v-icon>{{
                          show ? "mdi-chevron-up" : "mdi-chevron-down"
                        }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                          Descripcion: <br>
                          {{ item.descripcion }} <br>
                          Modelo: {{ item.modelo }} <br>
                          Marca: {{ item.marca }} <br>
                          Sistema: {{ item.sistema }} 
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-col>
              </v-row>
            </template>

            <template v-slot:footer>
              <v-row class="mt-2" align="center" justify="center">
                <span class="white--text">Items per page</span>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      dark
                      text
                      color="purple"
                      class="ml-2"
                      v-bind="attrs"
                      v-on="on"
                    >
                      {{ itemsPerPage }}
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(number, index) in itemsPerPageArray"
                      :key="index"
                      @click="updateItemsPerPage(number)"
                    >
                      <v-list-item-title>{{ number }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>

                <v-spacer></v-spacer>

                <span class="mr-4 white--text">
                  Page {{ page }} of {{ numberOfPages }}
                </span>
                <v-btn
                  fab
                  dark
                  color="purple darken-5"
                  class="mr-1"
                  @click="formerPage"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn
                  fab
                  dark
                  color="purple darken-5"
                  class="ml-1"
                  @click="nextPage"
                >
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-row>
            </template>
          </v-data-iterator>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from "../firebase";
import { storage } from "../firebase";
import Anuncio from "./Anuncio";

export default {
  components: {
    Anuncio,
  },
  data() {
    return {
      items: [],
      itemsDos: ["hello"],
      item: [],
      show: false,
      estadoNuevo: false,
      estadoNuevo2: false,
      stdNuevo: "Nuevo",
      estadoUsado: false,
      estadoUsado2: false,
      stdUsado: "Usado",
      marcaSamsung: false,
      marcaSamsung2: false,
      mrSamsung: "Samsung",
      marcaHuawei: false,
      marcaHuawei2: false,
      mrHuawei: "Huawei",
      marcaNokia: false,
      marcaNokia2: false,
      mrNokia: "Nokia",
      marcaIPhone: false,
      marcaIPhone2: false,
      mrIPhone: "Iphone",
      marcaXiomi: false,
      marcaXiomi2: false,
      mrXiomi: "Xiomi",
      sistemaAndroid: false,
      sistemaAndroid2: false,
      stmAndroid: "Android",
      sistemaWindows: false,
      sistemaWindows2: false,
      stmWindows: "Windows",
      sistemaIos: false,
      sistemaIos2: false,
      stmIos: "Ios",
      pantallaSeis: false,
      pantallaSeis2: false,
      ptaSeis: "6",
      pantallaCincop: false,
      pantallaCincop2: false,
      ptaCincop: "5.5",
      pantallaCinco: false,
      pantallaCinco2: false,
      ptaCinco: "5",
      itemsPerPageArray: [25, 30, 35],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 25,
      sortBy: "titulo",
      keys: ["Precio", "Modelo", "Marca","Sistema"],
      sheet: false,
      contSamsung: 0,
      contHuawei: 0,
      contNokia: 0,
      contIphone: 0,
      contXiomi: 0,
      contAndroid: 0,
      contWindows: 0,
      contIos: 0,
      llamar: false,
    };
  },
  firestore: {
    items: db.collection("anuncios"),
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Titulo");
    },
  },
  methods: {
    filtros(booleano, cadena) {
      var prueba = false;
      this.itemsDos = [];
      
      for (let index = 0; index < this.items.length; index++) {
        const element = this.items[index];

        switch (cadena) {
          case "Nuevo":
          case "Usado":
            if (element.estado === cadena && booleano === true) {
              console.log("coincide =>" + element.titulo);
              console.log("element =>" + element);
              this.itemsDos.push(element);
              prueba = true;
              if (cadena == "Nuevo") {
                this.estadoNuevo2 = false;
                this.estadoUsado2 = true;
                this.marcaSamsung2 = true;
                this.marcaHuawei2 = true;
                this.marcaNokia2 = true;
                this.marcaIPhone2 = true;
                this.marcaXiomi2 = true;
                this.sistemaAndroid2 = true;
                this.sistemaWindows2 = true;
                this.sistemaIos2 = true;
                this.pantallaSeis2 = true;
                this.pantallaCincop2 = true;
                this.pantallaCinco2 = true;
              } else {
                this.estadoNuevo2 = true;
                this.estadoUsado2 = false;
                this.marcaSamsung2 = true;
                this.marcaHuawei2 = true;
                this.marcaNokia2 = true;
                this.marcaIPhone2 = true;
                this.marcaXiomi2 = true;
                this.sistemaAndroid2 = true;
                this.sistemaWindows2 = true;
                this.sistemaIos2 = true;
                this.pantallaSeis2 = true;
                this.pantallaCincop2 = true;
                this.pantallaCinco2 = true;
              }
            } else {
              console.log("no coincide =>" + element.titulo);
            }

            break;

          case "Samsung":
          case "Huawei":
          case "Nokia":
          case "Iphone":
          case "Xiomi":
            if (element.marca === cadena && booleano === true) {
              console.log("coincide =>" + element.titulo);
              console.log("element =>" + element);
              this.itemsDos.push(element);
              prueba = true;
              if (cadena == "Samsung") {
                this.estadoNuevo2 = true;
                this.estadoUsado2 = true;
                this.marcaSamsung2 = false;
                this.marcaHuawei2 = true;
                this.marcaNokia2 = true;
                this.marcaIPhone2 = true;
                this.marcaXiomi2 = true;
                this.sistemaAndroid2 = true;
                this.sistemaWindows2 = true;
                this.sistemaIos2 = true;
                this.pantallaSeis2 = true;
                this.pantallaCincop2 = true;
                this.pantallaCinco2 = true;
              } else if (cadena == "Huawei") {
                this.estadoNuevo2 = true;
                this.estadoUsado2 = true;
                this.marcaSamsung2 = true;
                this.marcaHuawei2 = false;
                this.marcaNokia2 = true;
                this.marcaIPhone2 = true;
                this.marcaXiomi2 = true;
                this.sistemaAndroid2 = true;
                this.sistemaWindows2 = true;
                this.sistemaIos2 = true;
                this.pantallaSeis2 = true;
                this.pantallaCincop2 = true;
                this.pantallaCinco2 = true;
              } else if (cadena == "Nokia") {
                this.estadoNuevo2 = true;
                this.estadoUsado2 = true;
                this.marcaSamsung2 = true;
                this.marcaHuawei2 = true;
                this.marcaNokia2 = false;
                this.marcaIPhone2 = true;
                this.marcaXiomi2 = true;
                this.sistemaAndroid2 = true;
                this.sistemaWindows2 = true;
                this.sistemaIos2 = true;
                this.pantallaSeis2 = true;
                this.pantallaCincop2 = true;
                this.pantallaCinco2 = true;
              } else if (cadena == "Iphone") {
                this.estadoNuevo2 = true;
                this.estadoUsado2 = true;
                this.marcaSamsung2 = true;
                this.marcaHuawei2 = true;
                this.marcaNokia2 = true;
                this.marcaIPhone2 = false;
                this.marcaXiomi2 = true;
                this.sistemaAndroid2 = true;
                this.sistemaWindows2 = true;
                this.sistemaIos2 = true;
                this.pantallaSeis2 = true;
                this.pantallaCincop2 = true;
                this.pantallaCinco2 = true;
              } else {
                this.estadoNuevo2 = true;
                this.estadoUsado2 = true;
                this.marcaSamsung2 = true;
                this.marcaHuawei2 = true;
                this.marcaNokia2 = true;
                this.marcaIPhone2 = true;
                this.marcaXiomi2 = false;
                this.sistemaAndroid2 = true;
                this.sistemaWindows2 = true;
                this.sistemaIos2 = true;
                this.pantallaSeis2 = true;
                this.pantallaCincop2 = true;
                this.pantallaCinco2 = true;
              }
            } else {
              console.log("no coincide =>" + element.titulo);
            }
            break;
          case "Android":
          case "Windows":
          case "Ios":
            if (element.sistema === cadena && booleano === true) {
              console.log("coincide =>" + element.titulo);
              console.log("element =>" + element);
              this.itemsDos.push(element);
              prueba = true;
              if (cadena == "Android") {
                this.estadoNuevo2 = true;
                this.estadoUsado2 = true;
                this.marcaSamsung2 = true;
                this.marcaHuawei2 = true;
                this.marcaNokia2 = true;
                this.marcaIPhone2 = true;
                this.marcaXiomi2 = true;
                this.sistemaAndroid2 = false;
                this.sistemaWindows2 = true;
                this.sistemaIos2 = true;
                this.pantallaSeis2 = true;
                this.pantallaCincop2 = true;
                this.pantallaCinco2 = true;
              } else if (cadena == "Windows") {
                this.estadoNuevo2 = true;
                this.estadoUsado2 = true;
                this.marcaSamsung2 = true;
                this.marcaHuawei2 = true;
                this.marcaNokia2 = true;
                this.marcaIPhone2 = true;
                this.marcaXiomi2 = true;
                this.sistemaAndroid2 = true;
                this.sistemaWindows2 = false;
                this.sistemaIos2 = true;
                this.pantallaSeis2 = true;
                this.pantallaCincop2 = true;
                this.pantallaCinco2 = true;
              } else {
                this.estadoNuevo2 = true;
                this.estadoUsado2 = true;
                this.marcaSamsung2 = true;
                this.marcaHuawei2 = true;
                this.marcaNokia2 = true;
                this.marcaIPhone2 = true;
                this.marcaXiomi2 = true;
                this.sistemaAndroid2 = true;
                this.sistemaWindows2 = true;
                this.sistemaIos2 = false;
                this.pantallaSeis2 = true;
                this.pantallaCincop2 = true;
                this.pantallaCinco2 = true;
              }
            } else {
              console.log("no coincide =>" + element.titulo);
            }
            break;

          case "6":
          case "5.5":
          case "5":
            console.log(element.pantalla + "==" + parseFloat(cadena));
            if (element.pantalla == parseFloat(cadena) && booleano === true) {
              console.log("coincide =>" + element.titulo);
              console.log("element =>" + element);
              this.itemsDos.push(element);
              prueba = true;
              if (cadena == "6") {
                this.estadoNuevo2 = true;
                this.estadoUsado2 = true;
                this.marcaSamsung2 = true;
                this.marcaHuawei2 = true;
                this.marcaNokia2 = true;
                this.marcaIPhone2 = true;
                this.marcaXiomi2 = true;
                this.sistemaAndroid2 = true;
                this.sistemaWindows2 = true;
                this.sistemaIos2 = true;
                this.pantallaSeis2 = false;
                this.pantallaCincop2 = true;
                this.pantallaCinco2 = true;
              } else if (cadena == "5.5") {
                this.estadoNuevo2 = true;
                this.estadoUsado2 = true;
                this.marcaSamsung2 = true;
                this.marcaHuawei2 = true;
                this.marcaNokia2 = true;
                this.marcaIPhone2 = true;
                this.marcaXiomi2 = true;
                this.sistemaAndroid2 = true;
                this.sistemaWindows2 = true;
                this.sistemaIos2 = true;
                this.pantallaSeis2 = true;
                this.pantallaCincop2 = false;
                this.pantallaCinco2 = true;
              } else {
                this.estadoNuevo2 = true;
                this.estadoUsado2 = true;
                this.marcaSamsung2 = true;
                this.marcaHuawei2 = true;
                this.marcaNokia2 = true;
                this.marcaIPhone2 = true;
                this.marcaXiomi2 = true;
                this.sistemaAndroid2 = true;
                this.sistemaWindows2 = true;
                this.sistemaIos2 = true;
                this.pantallaSeis2 = true;
                this.pantallaCincop2 = true;
                this.pantallaCinco2 = false;
              }
            } else {
              console.log("no coincide =>" + element.titulo);
            }
            break;
        }
      }

      if (prueba == true && booleano === true) {
        this.item = this.items;
        this.itemsDos.forEach((element) => {
          console.log("titulo = " + element.titulo);
          console.log("descripcion = " + element.descripcion);
          console.log("precio = " + element.precio);
          console.log("id =>" + element.id);
        });
        this.items = this.itemsDos;
      } else {
        console.log("no hay conincidencias");
        this.items = this.item;
        this.estadoNuevo2 = false;
        this.estadoUsado2 = false;
        this.marcaSamsung2 = false;
        this.marcaHuawei2 = false;
        this.marcaNokia2 = false;
        this.marcaIPhone2 = false;
        this.marcaXiomi2 = false;
        this.sistemaAndroid2 = false;
        this.sistemaWindows2 = false;
        this.sistemaIos2 = false;
        this.pantallaSeis2 = false;
        this.pantallaCincop2 = false;
        this.pantallaCinco2 = false;
      }
    },
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    crearFiltros() {
      console.log("entre!!!!");
      console.log("elemento =>" + this.items.length);

      for (let index = 0; index < this.items.length; index++) {
        const element = this.items[index];
        if (element.marca == "Samsung") {
          console.log("samsung => " + element.marca);
          this.contSamsung += 1;
        } else if (element.marca == "Huawei") {
          this.contHuawei += 1;
        } else if (element.marca == "Nokia") {
          this.contNokia += 1;
        } else if (element.marca == "Iphone") {
          this.contIphone += 1;
        } else if (element.marca == "Xiomi") {
          this.contXiomi += 1;
        }

        if (element.sistema == "Android") {
          this.contAndroid += 1;
        } else if (element.sistema == "Windows") {
          this.contWindows += 1;
        } else if (element.sistema == "Ios") {
          this.contIos += 1;
        }
      }
    },
    contador(){
      var this2= this; 
      this.contSamsung = 0;
      this.contHuawei = 0;
      this.contNokia = 0;
      this.contIphone = 0;
      this.contXiomi = 0;
      this.contAndroid = 0;
      this.contWindows = 0;
      this.contIos = 0;

      db.collection("anuncios")
      .get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log("length =>" + querySnapshot.length);
            var marca = doc.data().marca;
            switch (marca) {
              case "Samsung":
                this2.contSamsung +=1;
                break;
            
              case "Huawei":
                this2.contHuawei +=1;
                break;
              case "Nokia":
                this2.contNokia +=1;
                break;
              case "Iphone":
                this2.contIphone +=1;
                break;
              case "Xiomi":
                this2.contXiomi +=1;
                break;  
            }

            var sistema = doc.data().sistema;
            switch (sistema) {
              case "Android":
                this2.contAndroid +=1;
                break;
            
              case "Windows":
                this2.contWindows +=1;
                break;
              case "Ios":
                this2.contIos +=1;
                break;
            }
        });
    }).catch(function(error) {
        console.log("Error getting documents: ", error);
    });


    },
  },
  mounted() {
    this.contador();
  },
};
</script>

<style scoped>
</style>