<template>
  <v-app>
    <v-img src="../assets/login.jpeg" aspect-ratio="2.3">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-1" max-width="1000" id="card">
              <v-toolbar height="100px" color="#004D40" dark flat>
                <v-spacer />
                <v-toolbar-title class="headline">Agrino</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <!-- <v-card-text> -->
              <v-form ref="form" v-model="valid">
                <div id="text">
                  <v-row class="mx-5">
                    <h1 class="headline my-5">เข้าสู่ระบบ</h1>
                  </v-row>
                  <h5 class="mx-10">Username</h5>
                  <v-text-field
                    class="mx-4"
                    filled
                    rounded
                    background-color="rgba(128, 203, 196, 0.5)"
                    required
                    :rules="[v => !!v || 'Username is required.']"
                    v-model="user.username"
                  ></v-text-field>
                  <h5 class="mx-10">Password</h5>
                </div>
                <v-text-field
                  class="mx-4"
                  id="password"
                  color="#009688"
                  filled
                  rounded
                  required
                  background-color="rgba(128, 203, 196, 0.5)"
                  :rules="[v => !!v || 'Password is required.']"
                  :type="show ? 'text' : 'password'"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show = !show"
                  v-model="user.password"
                ></v-text-field>
                <v-alert v-model="alert" text color="error" dense rounded class="mx-5 text-center">
                  ชื่อหรือรหัสผ่านไม่ถูกต้อง
                </v-alert>
                <v-row>
                  <!-- <v-col cols="5"> -->
                  <v-checkbox
                    class="mx-7"
                    label="Keep me Signed in"
                    color="#00695C"
                    value="#00695C"
                    hide-details
                  ></v-checkbox>
                  <!-- </v-col> -->
                  <v-spacer></v-spacer>
                  <v-col cols="4" class="mt-2">
                    <router-link color="#00897B" to="/forget"
                      >Forget Password</router-link>
                  </v-col>
                </v-row>
              </v-form>
              <!-- </v-card-text> -->
              <!-- <v-card-actions> -->
                <v-row>
                  <v-col cols="11">
                    <v-btn
                      v-on:keyup.native.enter="login"
                      class="mx-5"
                      :elevation="0"
                      color="#00897B"
                      x-large
                      block
                      dark
                      rounded
                      @click="login()"
                      >เข้าสู่ระบบ</v-btn
                    >
                    <v-btn
                      to='/regis'
                      class="my-5 mx-5"
                      :elevation="0"
                      color="#00897B"
                      x-large
                      block
                      rounded
                      outlined
                      >สมัครสมาชิก</v-btn
                    >
                  </v-col>
                  <v-spacer></v-spacer>
                </v-row>
              <!-- </v-card-actions> -->
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data () {
    return {
      alert: false,
      show: false,
      valid: true,
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log('login()')
      // console.log(process.env.PATH)
      if ((this.user.username && this.user.password) === '') {
        this.$refs.form.validate()
        console.log('NO DATA')
      } else {
        this.axios
          .post('http://127.0.0.1:4000/login', this.user)
          .then(res => {
            console.log('responds : ', res.data)
            this.$cookies.set('token', res.data.token)
            this.$cookies.set('name', res.data.name)
            if (res.data.loginStatus === true) {
              console.log('success')
              this.$router.push('/permis')
            } else {
              this.alert = true
            }
          })
          .catch(err => {
            console.log('err : ', err.response)
          })
      }
    },
    forget () {
      alert('forget password')
    }
  }
}
</script>

<style scope>
template {
  overflow: hidden; /* Hide scrollbars */
}
.template::-webkit-scrollbar {
  display: none;
}
#card {
  background-color: rgba(224, 242, 241, 0.87);
}
/* #background {
  background-image: "url('https://github.com/wiphaphim/workshop_docker/blob/master/AdobeStock_212015511.jpeg?raw=true')";
} */
#text {
  color: rgba(77, 86, 86);
}

a {
  color: rgb(252, 152, 2);
}
</style>
