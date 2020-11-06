<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">
        AGRINO
      </h1>
    </v-card-title>

    <!-- <template v-slot:extension> -->
    <!-- <v-tabs v-model="tabs" background-color="transparent" color="basil" grow centered>
        <v-tab href="#mobile-tabs-5-1">
        <v-icon>mdi-phone</v-icon>
      </v-tab>

      <v-tab href="#mobile-tabs-5-2">
        <v-icon>mdi-heart</v-icon>
      </v-tab>

      <v-tab href="#mobile-tabs-5-3">
        <v-icon>mdi-account-box</v-icon>
      </v-tab>
      </v-tabs> -->
    <!-- </template> -->

    <v-tabs
      v-model="tabs"
      centered
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab href="#mobile-tabs-5-1">
        <v-icon>mdi-phone</v-icon>
      </v-tab>

      <v-tab href="#mobile-tabs-5-2">
        <v-icon>mdi-heart</v-icon>
      </v-tab>

      <v-tab href="#mobile-tabs-5-3">
        <v-icon>mdi-account-box</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-title class="headline">
            An awesome title
          </v-card-title>
          <v-card-text>
            <p>
              Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor
              rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis,
              ligula mi congue nunc, vitae euismod ligula urna in dolor.
              Praesent congue erat at massa.
            </p>

            <p>
              Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
              nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque
              egestas, neque sit amet convallis pulvinar, justo nulla eleifend
              augue, ac auctor orci leo non est. Etiam sit amet orci eget eros
              faucibus tincidunt. Donec sodales sagittis magna.
            </p>

            <p class="mb-0">
              Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque
              suscipit. Fusce pharetra convallis urna.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-title class="headline">
            An even better title
          </v-card-title>
          <v-card-text>
            <p>
              Maecenas ullamcorper, dui et placerat feugiat, eros pede varius
              nisi, condimentum viverra felis nunc et lorem. Sed hendrerit.
              Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin
              faucibus arcu quis ante.
            </p>

            <p class="mb-0">
              Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed
              magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam
              lobortis. Suspendisse potenti.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      tab: null,
      items: ['Home', 'ข้อมูลผู้ใช้', 'เพิ่มผลผลิต'],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
