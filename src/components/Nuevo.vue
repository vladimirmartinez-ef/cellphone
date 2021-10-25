<template>
  <!-- formulario para agregar anuncio -->
  <div class="text-center">
    <v-dialog v-model="dialog" width="1200" persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="secondary" dark v-bind="attrs" v-on="on" large fab class="d-none d-md-flex">
          <v-icon x-large>mdi-plus-outline</v-icon>
        </v-btn>
        
        <v-btn color="green" dark v-bind="attrs" v-on="on" fab class="d-flex d-md-none">
          <v-icon >mdi-plus-outline</v-icon>
        </v-btn>

      </template>

      <v-card>
        <v-card-title class="headline info"> Nuevo Anuncio </v-card-title>

        <v-card-text>
          <v-form ref="formAgregar" v-model="valid">
            <v-row>
              <v-col cols="12" md="6">
                <!-- parte uno - titulo, descripcion, precio, vendedor, telefono -->
                <!-- titulo -->
                <v-text-field
                  v-model="titulo"
                  :rules="tituloRules"
                  label="Titulo"
                  prepend-icon="mdi-attachment"
                  required
                ></v-text-field>
                <!-- descripcion -->
                <v-textarea
                  v-model="descripcion"
                  :rules="descripRules"
                  label="Descripción"
                  prepend-icon="mdi-comment"
                  required
                ></v-textarea>
                <!-- precio -->
                <v-text-field
                  prefix="$"
                  type="number"
                  label="Cantidad"
                  v-model="precio"
                  :rules="precioRules"
                ></v-text-field>

                <v-row>
                  <v-col lg="6">
                    <!-- vendedor -->
                    <v-text-field
                      type="text"
                      label="Nombre Vendedor"
                      v-model="vendedor"
                      :rules="vendedorRules"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col lg="6">
                    <!-- telefono -->
                    <v-text-field
                      type="text"
                      label="Telefono"
                      v-model="telefono"
                      :rules="telefonoRules"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="6">
                <!-- parte dos - estado, marca, modelo, pantalla, sistema, rom, ram -->
                <!-- estado -->
                <v-radio-group v-model="estado" label="Estado" row>
                  <v-radio label="Nuevo" value="Nuevo"></v-radio>
                  <v-radio label="Usado" value="Usado"></v-radio>
                </v-radio-group>

                <!-- marca -->
                <v-text-field
                  type="text"
                  label="Marca"
                  v-model="marca"
                  :rules="marcaRules"
                  required
                ></v-text-field>
                <!-- modelo -->
                <v-text-field
                  type="text"
                  label="Modelo"
                  v-model="modelo"
                  :rules="modeloRules"
                  required
                ></v-text-field>
                <!-- pantalla -->
                <v-text-field
                  suffix="Pulg"
                  type="number"
                  label="Pantalla"
                  v-model="pantalla"
                  :rules="pantaRules"
                ></v-text-field>

                <!-- sistema -->
                <v-text-field
                  type="text"
                  label="Sistema"
                  v-model="sistema"
                  :rules="sisteRules"
                  required
                ></v-text-field>
                <!-- rom -->
                <v-text-field
                  suffix="GB"
                  type="number"
                  label="ROM"
                  v-model="rom"
                  :rules="romRules"
                ></v-text-field>

                <!-- ram -->
                <v-text-field
                  suffix="GB"
                  type="number"
                  label="RAM"
                  v-model="ram"
                  :rules="ramRules"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
          <v-row>
            <v-col lg="6">
              <v-file-input
                truncate-length="12"
                accept="image/*"
                v-model="archivo"
                label="Agregar imagen"
              ></v-file-input>
              <v-btn
                :loading="cargando"
                :disabled="(archivo == null || !valid )"
                class="d-inline"
                @click="continuarImg()"
                title="Para subir la primera imagen se debe hacer click dos veces no tan seguidas"
              >
              Subir
              </v-btn>
            </v-col>
            <v-col lg="6">
              <v-row>
                <v-col v-for="(item,index) in imagenes" :key="index" cols="3" 
                class="d-flex child-flex elevation-5">
                <v-img :src="item"></v-img>
                <v-btn class="ma-0" icon top dark small color="error" @click="eliminarImg(item)"><v-icon>mdi-delete</v-icon></v-btn>
                </v-col>
              </v-row>
               </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="cerrar()" :disabled="!procesarBooleano">
            Publicar
          </v-btn>
          <v-btn color="secondary" @click="cancelar" :disabled="procesarBooleano"> Cancelar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" :color="snackbarColor">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="info" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { db } from "../firebase";
import { storage } from "../firebase";

export default {
  data() {
    return {
      valid: true,
      dialog: false,
      titulo: "",
      tituloRules: [
        (v) => !!v || "Campo Requerido",
        (v) => v.length >= 15 || "El Titulo debe tener mas de 15 caracteres",
      ],
      descripcion: "",
      descripRules: [
        (v) => !!v || "Campo Requerido",
        (v) =>
          v.length >= 20 || "La Descripción debe ser de mas de 20 caracteres",
      ],
      snackbar: false,
      snackbarText: "",
      snackbarColor: "",
      precio: 0,
      precioRules: [(v) => (v && v > 0) || "El precio debe ser mayor que cero"],
      vendedor: "",
      vendedorRules: [
        (v) => !!v || "Campo Requerido",
        (v) =>
          v.length >= 10 ||
          "Se requiere nombre y apellido con caracteres mayores a 10",
      ],
      telefono: "",
      telefonoRules: [
        (v) => !!v || "Campo Requerido",
        (v) =>
          /^[0-9]{4,}\-[0-9]{4,}$/.test(v) ||
          "debe poner un numero (0000-0000), y deben ser 8",
      ],
      estado: "Nuevo",
      marca: "",
      marcaRules: [(v) => !!v || "Campo Requerido",
      (v) =>
          /^[A-Z]{1,1}[a-z0-9\s]{0,30}$/.test(v) ||
          "la primer letra debe ser mayuscula y las demas minusculas",],
      modelo: "",
      modeloRules: [(v) => !!v || "Campo Requerido",
      (v) =>
          /^[A-Z]{1,1}[a-z0-9\s]{0,30}$/.test(v) ||
          "la primer letra debe ser mayuscula y las demas minusculas",],
      pantalla: 0,
      pantaRules: [
        (v) => (v && v > 4) || "la pantalla debe ser mayor que 4 pulgadas ",
      ],
      sistema: "",
      sisteRules: [(v) => !!v || "Campo Requerido",
      (v) =>
          /^[A-Z]{1,1}[a-z0-9\s]{0,30}$/.test(v) ||
          "la primer letra debe ser mayuscula y las demas minusculas",],
      rom: 0,
      romRules: [(v) => (v && v >= 2) || "la rom debe ser mayor que 2 GB "],
      ram: 0,
      ramRules: [(v) => (v && v >= 1) || "la ram debe ser mayor que 1 GB "],
      archivo: null,
      cargando: false,
      img: "",
      procesarBooleano: false,
      imagenes: [],
      nameImg: [],
      nomeSelect: "",
      
    };
  },
  methods: {
    procesar() {
      var thisVue = this;
      db.collection("anuncios")
        .add({
          titulo: this.titulo,
          descripcion: this.descripcion,
          precio: this.precio,
          vendedor: this.vendedor,
          marca: this.marca,
          modelo: this.modelo,
          pantalla: this.pantalla,
          sistema: this.sistema,
          telefono: this.telefono,
          ram: this.ram,
          rom: this.rom,
          estado: this.estado,
        })
        .then(function (doc) {
          thisVue.img= doc.id;
          thisVue.procesarBooleano = true;
        })
        .catch(function (error) {
          thisVue.snackbarText = error;
          thisVue.snackbarColor = "danger";
          thisVue.snackbar = true;
        });
    },
    cancelar() {
      this.$refs.formAgregar.reset();
      this.dialog = false;
    },
    subirImg(id) {
       if (this.archivo) {
         const ref = storage.ref();
         const carpeta = id;
         const archivoRef = ref.child(carpeta + "/" + this.archivo.name);
         this.cargando = true;
         var thisVue = this;

         archivoRef
           .put(this.archivo)
           .then(function (snapshot) {
               console.log( 'imagen subida')
             thisVue.cargando = false;
             thisVue.archivo = null;
             thisVue.leerImg(carpeta);
           })
           .catch(function (error) {
             console.log(error);
           });
       }
      },
    continuarImg(){
        if (this.procesarBooleano === true) {
            this.subirImg(this.img);
        } else {
            this.procesar();
            if (this.procesarBooleano === true) {
            this.subirImg(this.img);
        }
            
        }
    },
    cerrar(){
        this.snackbarText = "Nuevo anuncio agregado";
           this.snackbarColor = "success";
          this.snackbar = true;
          this.procesarBooleano = false;
          this.nameImg = [];
           this.imagenes = [];
           this.dialog = false;
        this.$refs.formAgregar.reset();
    },
      leerImg(id){
        this.imagenes = []
        const ref = storage.ref()
        const carpeta = id
        var thisVue = this;

        ref.child(carpeta + "/").listAll()
        .then(function(result){
          result.items.forEach(function (imgRef){
            // console.log('imgRef.name: ' + imgRef.name)
            var nombreImg = imgRef.name;
            thisVue.nameImg.push(nombreImg);
            thisVue.nomeSelect = "";
            imgRef.getDownloadURL().then(function(url){
            thisVue.imagenes.push(url);
            })

          })
        })
      },
      eliminarImg(url){
        const carpeta = this.img
        var thisVue = this;
        const refe = storage.ref();
        var urll= url;
        console.log('urll= '+ urll);

          this.nameImg.forEach(function(element){
            if (urll.includes(element)) {
              
              console.log( 'index= '+ element);
            thisVue.nomeSelect = element;
            
          }
          });


        if(this.nomeSelect!= ""){
          console.log('nomeSelect= '+this.nomeSelect);
          var newref = refe.child( carpeta + "/"+ this.nomeSelect);
          
          newref.delete().then(function(){
            console.log('se elimino la imagen');
            thisVue.leerImg(carpeta);
          }).catch(function(error){
            console.log('error: '+ error);
          })
        }
      }
  },
  
};
</script>

<style scoped>
</style>
