<template>
<v-app>
  <v-container class="pa-4 text-center">
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="4">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" @click="farmers() ">
            <v-img src="https://as1.ftcdn.net/jpg/02/14/06/86/500_F_214068679_Ws9DaxAJJnqKvlgQeTAtlQWOJJeT9mPW.jpg" height="200px"></v-img>
            <v-card-title >
              <v-spacer />
              เกษตรกร
              <v-spacer />
            </v-card-title>
            <v-card-text align="right">
              <p>จำนวนคงเหลือ 0 วัน</p>
              <p>ใช้งานได้ถึงวันที่ 10/10/2570 เวลา 23.00น.</p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="4">
        <v-hover v-slot:default="{ hover }" close-delay="100">
          <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" @click="manager()">
            <v-img src="https://as2.ftcdn.net/jpg/02/89/02/37/500_F_289023717_wetghuROCMxNKO6U3OedEA55QDnVyoXk.jpg" height="200px"></v-img>
            <v-card-title>
              <v-spacer />
              ผู้จัดการ
              <v-spacer />
            </v-card-title>
            <v-card-text align="right">
              <p>จำนวนคงเหลือ 0 วัน</p>
              <p>ใช้งานได้ถึงวันที่ 10/10/2570 เวลา 23.00น.</p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="4">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" @click="bussines()">
            <v-img src="https://as2.ftcdn.net/jpg/03/81/07/83/500_F_381078343_88dv5CXC54iuEGjdDpWl9c8E0D1GSkSQ.jpg" height="200px"></v-img>
            <v-card-title>
              <v-spacer />
              นักธุรกิจ
              <v-spacer />
            </v-card-title>
            <v-card-text align="right">
              <p>จำนวนคงเหลือ 0 วัน</p>
              <p>ใช้งานได้ถึงวันที่ 10/10/2570 เวลา 23.00น.</p>
            </v-card-text>
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
    farmers () {
      this.$router.push('/domain')
    },
    bussines () {
      this.$router.push('/farmers')
    },
    manager () {
      this.$router.push('/farmers')
    }
  }
}
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;

}

</style>
