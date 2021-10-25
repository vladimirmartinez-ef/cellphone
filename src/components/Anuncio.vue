<template>
  <div>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="info" dark v-bind="attrs" v-on="on" @click="leerImg(idAnuncio)">
          Ver Anuncio
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Anuncios</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false"> Salir </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          <v-row>
            <v-col>
              <!-- carousel -->
              <v-carousel
                cycle
                height="400"
                width="200"
                hide-delimiter-background
                show-arrows-on-hover
              >
                <template v-slot:prev="{ on, attrs }">
                  <v-btn color="success" v-bind="attrs" v-on="on"
                    >Previous slide</v-btn
                  >
                </template>
                <template v-slot:next="{ on, attrs }">
                  <v-btn color="info" v-bind="attrs" v-on="on"
                    >Next slide</v-btn
                  >
                </template>
                <v-carousel-item width="500"
                  v-for="(item, i) in imagenes"
                  :key="i"
                  :src="item"
                >
                </v-carousel-item>
              </v-carousel>
              <!-- FIN -->
            </v-col>
            <v-col>
              <v-list-item>
                <v-list-item-content>
                  <h1> {{ anuncios.titulo }} </h1>
                  <h2 class="grey--text " >
                    $ {{ anuncios.precio }}
                    </h2>
                    <br><br><br>
                    <v-btn color="primary" class="d-none d-md-flex">Comprar</v-btn>
                    
                   <v-row class="my-7 blue--text accent-2">
                       <v-list-item-subtitle>Vendedor</v-list-item-subtitle>
                       <v-col>
                           <h4>Nombre: {{ anuncios.vendedor }} </h4>
                       </v-col>
                       <v-col>
                           <h4>Telefono: {{ anuncios.telefono }}</h4>
                       </v-col>
                   </v-row>

                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>Especificaciones</v-subheader>
          <v-row>
            <v-col>
              <v-list-item>
                <v-list-item-content>
                  <v-col class="text-left">
                      <v-list-item-title> Estado </v-list-item-title>
                  <v-list-item-subtitle>
                      {{  anuncios.estado }}
                    </v-list-item-subtitle><br>
                    <v-list-item-title> Marca </v-list-item-title>
                  <v-list-item-subtitle>
                      {{  anuncios.marca }}
                    </v-list-item-subtitle><br>
                    <v-list-item-title> Modelo </v-list-item-title>
                  <v-list-item-subtitle>
                      {{  anuncios.modelo }}
                    </v-list-item-subtitle>
                  </v-col>

                  <v-col class="text-left">
                        <v-list-item-title> Pantalla </v-list-item-title>
                  <v-list-item-subtitle>
                      {{  anuncios.pantalla }}  Pulg.
                    </v-list-item-subtitle><br>
                    <v-list-item-title> Sistema </v-list-item-title>
                  <v-list-item-subtitle>
                      {{  anuncios.sistema }}
                    </v-list-item-subtitle><br>
                    <v-row>
                    <v-col>
                        <v-list-item-title> ROM </v-list-item-title>
                  <v-list-item-subtitle>
                      {{  anuncios.rom }} GB
                    </v-list-item-subtitle>
                    </v-col>
                    <v-col>
                        <v-list-item-title> RAM </v-list-item-title>
                  <v-list-item-subtitle>
                      {{  anuncios.ram }} GB
                    </v-list-item-subtitle>
                    </v-col>
                    </v-row>
                  </v-col>

                </v-list-item-content>
              </v-list-item>
              
            </v-col>
            <v-col>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title> Descripcion </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ anuncios.descripcion }}
                    </v-list-item-subtitle>
                    
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
          <v-btn color="primary"
             fixed  large dark bottom right class="d-flex d-md-none">Comprar</v-btn>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db } from "../firebase";
import { storage } from "../firebase";

export default {
    props: {
        idAnuncio: String
    },
  data() {
    return {
      anuncios: [],
      dialog: false,
      imagenes: [],
    };
  },
  methods: {
    anuncioSelect() {
      var id = this.idAnuncio;
      var thisVue = this;
      var docRef = db.collection("anuncios").doc(id);

      docRef
        .get()
        .then(function (doc) {
          if (doc.exists) {
            thisVue.anuncios = doc.data();
            console.log("doc.data = " + doc.data());
          } else {
            console.log("Error => ");
          }
        })
        .catch(function (error) {
          console.log("Error ==>" + error);
        });
    },
    leerImg(id) {
      this.imagenes = [];
      const ref = storage.ref();
      const carpeta = id;
      var thisVue = this;
    
      ref
        .child(carpeta + "/")
        .listAll()
        .then(function (result) {
          result.items.forEach(function (imgRef) {
            // console.log('imgRef.name: ' + imgRef.name)
            imgRef.getDownloadURL().then(function (url) {
              thisVue.imagenes.push(url);
            });
          });
        });

       this.anuncioSelect(carpeta);     
    },
  },
};
</script>

<style scoped>
.v-btn--example {
    bottom: 0;
    position: absolute;
    margin: 0 0 16px 16px;
  }
</style>