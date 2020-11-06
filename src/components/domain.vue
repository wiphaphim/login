<template>
<v-app>
  <v-container class="pa-4 text-center">
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="3">
        <v-hover v-slot:default="{ hover }">
          <v-card max-height="300" :elevation="hover ? 5 : 1" @click="veget() ">
            <v-img class='mx-3' src="https://as1.ftcdn.net/jpg/02/38/19/22/500_F_238192268_khI2bvGTqioIIIy3CIe6HGn8zju26Nhh.jpg" height="150px"></v-img>
            <v-card-title >
              <v-spacer />
              พืช-ผัก
              <v-spacer />
            </v-card-title>
          </v-card>
        </v-hover>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="3">
        <v-hover v-slot:default="{ hover }" close-delay="100">
          <v-card max-height="300" :elevation="hover ? 5 : 1" @click="livestock()">
            <v-img class='mx-3' src="https://as2.ftcdn.net/jpg/02/66/25/45/500_F_266254574_0L7rceoBDnEJs6jquZ5NBhijR2AUwV8m.jpg" height="150px"></v-img>
            <v-card-title>
              <v-spacer />
              ปศุสัตว์
              <v-spacer />
            </v-card-title>
          </v-card>
        </v-hover>
      </v-col>
        <v-spacer></v-spacer>
      <v-col cols="3">
        <v-hover v-slot:default="{ hover }">
          <v-card max-height="300" :elevation="hover ? 5 : 1" @click="fishing()">
            <v-img class="mx-3" src="https://as1.ftcdn.net/jpg/03/05/62/32/500_F_305623239_RMXF5lK4uT3RPR2VGF4Y0dtxwOrDRBQj.jpg" height="150px"></v-img>
            <v-card-title>
              <v-spacer />
              ประมง
              <v-spacer />
            </v-card-title>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</v-app>
</template>

<script>
export default {
  data: () => ({

  }),
  methods: {
    veget () {
      this.$router.push('/farmers')
    },
    livestock () {
      this.$router.push('/farmers')
    },
    fishing () {
      this.$router.push('/tabs')
    }
  }
}
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

</style>
