<template>
  <v-navigation-drawer class="card" permanent @transitionend="show = !show">
    <!-- expand-on-hover -->
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          <!-- <v-img id="img" src="@/assets/cloud.png" v-show="show" contain> </v-img> -->
          <v-img id="img" src="@/assets/logo.png" contain> </v-img>
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
import logo from '@/assets/cloud.png'

export default {
  data: () => ({
    items: [
      { title: 'Meus arquivos', icon: 'home' },
      { title: 'Compartilhados', icon: 'supervisor_account' },
      { title: 'Favoritos', icon: 'star' },
      { title: 'Lixeira', icon: 'delete' }
    ],
    right: null,
    show: true,
    showIconTheme: false
  }),
  methods: {
    ...mapActions(['toggleDarkMode']),

    async toggle () {
      await this.toggleDarkMode()
      this.showIconTheme = !this.showIconTheme
    },

    teste () {
      console.log('teste')
      const img = document.getElementsByClassName(
        'v-image__image v-image__image--contain'
      )
      const url = `url(${logo})`
      console.log(this.show)
      if (this.show) {
        console.log('aqui ?')
        console.log(img[0].style['background-image'])
        img[0].style['background-image'] = url
        console.log(img[0].style['background-image'])
      }
      this.show = true
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
