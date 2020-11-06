<template>
  <v-app>
    <v-container class="pa-4 text-center">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <form class="ma-5">
              <v-text-field
                v-model="username"
                label="Username"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                required
              ></v-text-field>
              <v-text-field
                v-model="name"
                label="name"
                required
              ></v-text-field>
              <v-btn class="ma-4" @click="submit()" color="success" dark>
                submit
              </v-btn>
              <v-btn class="ma-4" @click="clear()" color="red" dark>
                clear
              </v-btn>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      name: ''
    }
  },
  methods: {
    submit () {
      var config = { username: this.username, password: this.password, name: this.name }
      this.axios
        .post('http://127.0.0.1:4000/regis', config)
        .then(res => {
          console.log('responds : ', res.data)
          if (res.data.regisStatus === true) {
            alert('success')
            this.$router.push('/')
          } else {
            alert('Fail')
          }
        })
        .catch(err => {
          console.log('err : ', err.response)
        })
    },
    clear () {
      this.username = ''
      this.password = ''
      this.name = ''
    }

  }
}
</script>
