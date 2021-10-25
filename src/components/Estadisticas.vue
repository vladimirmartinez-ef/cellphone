<template>
  <v-row justify="center">
    <v-dialog
     persistent
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="secondary" dark v-bind="attrs" v-on="on" large class="d-none d-md-flex">
          <v-icon x-large>mdi-chart-areaspline</v-icon>
        </v-btn>
        <v-btn color="red" dark v-bind="attrs" fab v-on="on" class="d-flex d-md-none">
          <v-icon >mdi-chart-areaspline</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Estadisticas</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false"> Salir </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader> Estadistica en Ventas </v-subheader>
          <v-row>
            <v-col cols="12" lg="6">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Marcas</v-list-item-title>
                  <v-list-item-subtitle>
                      Las 5 marcas más vendidas en CellPhone
                    </v-list-item-subtitle>
                    <p style="color: grey">
                        Las siguientes marcas son las más vendidas en CellPhone:
                        Samsung, Huawei, Nokia, IPhone y Xiomi. Estas marcas fueron las mas proporcionadas
                        por los usuarios que buscan vender sus telefonos, ya sea usados o nuevos. Ademas 
                        se han caracterizado por poseer una muy buena demanda de los compradores. Por la misma 
                        razón se le otorgaron filtros.
                        <br>
                        En el gráfico a la derecha, se muestra la cantidad de compras por marcas a razon de miles de compras por marca.
                        Lo que deja a Samsung, Huawei y Nokia como las marcas preferidas de nuestros usuarios para la compra. 
                    </p>

                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="12" lg="6">
              <chartjs-doughnut
                v-bind:labels="labels"
                v-bind:datasets="datasets"
                v-bind:option="option"
              ></chartjs-doughnut>
            </v-col>
          </v-row>
        <v-divider></v-divider>
          <v-row>
            <v-col cols="12" lg="6">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Sistemas</v-list-item-title>
                  <v-list-item-subtitle>Preferencia en Sistemas</v-list-item-subtitle>
                  <p style="color: grey">
                      La grafica a la derecha muestra la cantidad en miles de compras con respecto a 
                      los sistemas operativos que prefieren nuestros usuarios en sus telefonos celulares,
                      y para ello se estima que Windows, Android y Ios, son hasta el momento los más solicitados
                      en un telefono para la compra.
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="12" lg="6">
              <chartjs-bar
                v-bind:labels="labels2"
                v-bind:datasets="datasets2"
                v-bind:option="option2"
              ></chartjs-bar>
            </v-col>
          </v-row>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>Preferencias en los ultimos meses</v-subheader>
          <v-row>
            <v-col cols="12" lg="6">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Calidad de Uso</v-list-item-title>
                  <v-list-item-subtitle>Telefonos Nuevos o Usados?</v-list-item-subtitle>
                  <p style="color: grey">
                      A través de una encuesta a nuestros usuarios, durante los ultimos meses 
                      se pregunto acerca de que tan aceptable les parece la calidad de los telefonos comprados
                      por medio de esta pagina, y las respuestas que obtuvimos mostraban variaciones de mes en mes.
                      La calidad de estos telefonos y su uso o no uso del mismo se le asigno una calificacion del -100 a 100.
                      Lo que nos denota que las calificaciones en negativo, son una calidad mala o muy mala. cero es media, y
                      numeros positivos indican calidad buena, muy buena y excelente. 
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="12" lg="6">
              <chartjs-bar
                v-bind:labels="labels3"
                v-bind:datasets="datasets3"
                v-bind:option="option3"
              ></chartjs-bar>
            </v-col>
          </v-row>
        <v-divider></v-divider>
          <v-row>
            <v-col cols="12" lg="6">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Preferencias</v-list-item-title>
                  <v-list-item-subtitle> Marcas o Sistemas </v-list-item-subtitle>
                  <p style="color: grey">
                      Se le pregunto a nuestros usuarios acerca de que usualmente 
                      buscaban mas en sus celulares, si preferian mas que su celular fuera de cierta marca o 
                      que posea cierto sistema operativo en el. Las respuestas obtenidas variaron un poco en algunos meses
                      pero la preferencia final y mas estable fue que buscaban que su telefono fuera de cierta marca en especifico.
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="12" lg="6">
              <chartjs-line
                v-bind:labels="labels4"
                v-bind:datasets="datasets4"
                v-bind:option="option4"
              ></chartjs-line>
            </v-col>
          </v-row>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>



<script>
export default {
  data() {
    return {
      dialog: false,
      labels: ["Samsumg", "Huawei", "Nokia", "IPhone", "Xiomi"],
      datasets: [
        {
          data: [30, 22, 15, 18, 15],
          backgroundColor: ["Grey", "Red", "Brown", "Blue", "Green"],
        },
      ],
      option: {
        title: {
          display: true,
          position: "top",
          text: "Marcas",
        },
      },
      labels2: ["Android", "Windows", "Ios"],
      datasets2: [
        {
          label: "Sistemas mas vendidos",
          data: [22, 16, 12],
          backgroundColor: ["Green", "Orange", "Pink"],
        },
      ],
      option2: {
        title: {
          display: true,
          position: "top",
          text: "Sistemas",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },

      //algo

      labels3: ["January", "February", "March", "April", "May", "June"],
      datasets3: [
        {
          label: "Usados",
          backgroundColor: "rgba(135, 99, 132, 0.2)",
          data: [-32, -47, 29, 65, 32, 71],
        },
        {
          label: "Nuevos",
          backgroundColor: "rgba(54, 162, 235, 0.4)",
          data: [82, -22, 31, 45, 73, 85],
        },
      ],

      options3: {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          rectangle: {
            borderWidth: 2,
          },
        },
        responsive: true,
        legend: {
          position: "right",
        },
        title: {
          display: true,
          position: "top",
          text: "Mas vendidos",
        },
      },

      //other
      labels4: ["January", "February", "March", "April", "May", "June"],
      datasets4: [
        {
          label: "Marcas",
          backgroundColor: "rgba(255, 99, 132, 0.8)",
          borderColor: "rgba(255, 99, 132, 1)",
          fill: false,
          data: [47, -47, 29, 99, -32, 78],
        },
        {
          label: "Sistemas",
          backgroundColor: "rgba(54, 162, 235, 0.8)",
          borderColor: "rgba(54, 162, 235, 1)",
          fill: false,
          data: [82, -45, 5, 56, -83, 70],
        },
      ],

      options4: {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        responsive: true,
        title: {
          display: true,
          text: "Intereses",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Value",
              },
            },
          ],
        },
      },
    };
  },
};
</script>

<style scoped>
</style>