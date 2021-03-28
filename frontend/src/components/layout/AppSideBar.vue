<template>
  <v-navigation-drawer class="card" permanent expand-on-hover @transitionend="changeLogo">
    <!-- expand-on-hover -->
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          <v-img id="img" v-if="!show" src="@/assets/cloud.png" contain> </v-img>
          <v-img id="img" v-if="show" src="@/assets/logo.png" contain> </v-img>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list dense nav>
      <v-list-item-group color="#8C7CFC">
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item></v-list-item-group
      >
    </v-list>

    <v-list dense nav class="icon-theme">
      <v-list-item-group>
        <v-list-item @click="this.toggle">
          <v-list-item-icon>
            <v-img
              v-if="!showIconTheme"
              id="iconTheme"
              src="@/assets/moon.svg"
              contain
            >
            </v-img>
            <v-img
              v-if="showIconTheme"
              id="iconTheme"
              src="@/assets/sun.svg"
              contain
            >
            </v-img>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title></v-list-item-title>
          </v-list-item-content> </v-list-item
      ></v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    items: [
      { title: 'Meus arquivos', icon: 'home' },
      { title: 'Compartilhados', icon: 'supervisor_account' },
      { title: 'Favoritos', icon: 'star' },
      { title: 'Lixeira', icon: 'delete' }
    ],
    right: null,
    show: false,
    showIconTheme: false
  }),
  methods: {
    ...mapActions(['toggleDarkMode']),

    async toggle () {
      await this.toggleDarkMode()
      this.showIconTheme = !this.showIconTheme
    },

    changeLogo () {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>
.theme--dark .card {
  background-color: var(--background-dark) !important;
}
.card {
  height: 100vh !important;

  box-shadow: -7.97203px 0px 53.8112px #ccd8ec !important;
}

.icon-theme {
  position: absolute;
  bottom: 0px;
}

#img {
  transition: .8s background !important;
}

>>> .v-navigation-drawer__border {
  visibility: hidden;
}
>>> .v-list-item__title title #img:hover {
  transition: 0.4s all ease-in;
}
>>> .v-list-item__title title #img {
  transition: 0.4s all ease-in;
}
</style>
