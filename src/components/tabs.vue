<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-card width="1000" class="my-10">
        <v-tabs
          v-model="tabs"
          icons-and-text
          height="100"
          background-color="#DCFFE4"
          dark
          grow
          slider-size="5"
        >
          <v-tab disabled></v-tab>
          <v-tab
            style="font-weight: bold"
            active-class="teal darken-2"
            class="teal lighten-2"
          >
            ข้อมูลผู้ใช้
            <v-icon x-large>mdi-account-details</v-icon>
          </v-tab>
          <v-tab
            style="font-weight: bold"
            active-class="teal darken-2"
            class="teal lighten-2"
          >
            ฟาร์มของฉัน
            <v-icon x-large>mdi-sprout</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tabs">
          <v-tab-item>
            <v-card flat>
              <v-img src="../assets/home.jpeg" aspect-ratio="1.3"></v-img>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat color="#DCFFE4" height="500" elevation="0">
              <v-row>
                <v-col cols="5">
                  <v-sheet color="#DCFFE4" align="center" justify="center">
                    <!-- <v-card
                      class="ml-3"
                      elevation="0"
                      color="#DCFFE4"
                      height="500"
                    > -->
                    sdfghggfd
                    <!-- </v-card> -->
                  </v-sheet>
                </v-col>
                <v-col cols="7">
                  <v-sheet
                    align="center"
                    justify="center"
                    class="ml-n3 mr-3"
                    color="#DCFFE4"
                  >
                    <v-row>
                      <v-col cols="6">
                        <v-card :elevation="1" height="100" width="300">
                          <v-card-title align="left">
                            {0} บ่อ
                          </v-card-title>
                        </v-card>
                      </v-col>
                      <v-col cols="6">
                        <v-card :elevation="1" height="100" width="300">
                          <v-card-title align="left">
                            {5268} ตารางเมตร
                          </v-card-title>
                        </v-card>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="6">
                        <v-card :elevation="1" height="100" width="300">
                          <v-card-title align="left">
                            {0} บ่อ
                          </v-card-title>
                        </v-card>
                      </v-col>
                      <v-col cols="6">
                        <v-card :elevation="1" height="100" width="300">
                          <v-card-title align="left">
                            {5264} กิโลกรัม
                          </v-card-title>
                        </v-card>
                      </v-col>
                    </v-row>
                    <!-- <v-spacer/> -->
                  </v-sheet>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card
              flat
              height="500"
              color="#B2DFDB"
            >
              <v-card-title>
                An even better title
              </v-card-title>
              <v-card-text>
                <p>
                  Maecenas ullamcorper, dui et placerat feugiat, eros pede
                  varius nisi, condimentum viverra felis nunc et lorem. Sed
                  hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris
                  at ligula. Proin faucibus arcu quis ante.
                </p>

                <p class="mb-0">
                  Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed
                  magna purus, fermentum eu, tincidunt eu, varius ut, felis.
                  Aliquam lobortis. Suspendisse potenti.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      clTab: '',
      tabs: null,
      items: ['เพิ่ม', 'ข้อมูลผู้ใช้', 'ฟาร์มของฉัน']
      // text:
      //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style>
#tab2 {
  background-color: #26a69a;
  font-weight: bold;
}
.border {
  border: 2px dashed orange;
}
</style>
