<template>
  <v-app>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#004D40"
      dark
      prominent
      dense
    >
      <v-toolbar-title :class="$style.toolbar1" >Agrino</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        style="color:#1A237E"
        @click="logout()"
        class="ma-1"
        color="#E0F2F1"
      >
        {{Username}}<v-icon color="#00897B">mdi-logout</v-icon>
      </v-btn>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" >
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <!-- <v-footer
      app
      padless
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>INET</strong>
      </v-col>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  created () {
    this.username()
  },
  methods: {
    username () {
      this.Username = this.$cookies.get('name')
    },
    logout () {
      this.cookies = this.$cookies.remove('token')
      this.cookies = this.$cookies.remove('name')
      this.$router.push('/')
    }
  },
  data: () => ({
    Username: '',
    snackbar: false,
    dialog: false,
    drawer: null,
    confirm: {
      password: ''
    }
  })
}
</script>
<style module>
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@200&family=Orbitron:wght@900&display=swap");
.toolbar {
  color: #cd5c5c;
}
.toolbar1 {
  color: white;
  font-weight: bold;
  font-size: 100px;
  font-family: "Orbitron", sans-serif;
}
.toolbar2 {
  color: white;
  font-weight: bold;
  font-size: 20px;
}
/* h1 {
  font-weight: bold;
  text-align: center;
  font-family: 'Varela Round', sans-serif;
  color:  #C2185B;
} */
</style>
