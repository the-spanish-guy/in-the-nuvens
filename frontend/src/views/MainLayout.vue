<template>
  <div class="home">
    <v-row>
      <v-col cols="12" sm="2" lg="2" class="menu">
        <AppSideBar />
      </v-col>
      <v-col cols="12" sm="10">
        <router-view />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import AppSideBar from '@/components/layout/AppSideBar.vue'

export default {
  name: 'Home',
  components: {
    AppSideBar
  }
}
</script>

<style scoped>
.home{
  margin: 0;
  padding: 0;
}
.menu {
  height: 100vh !important
}
</style>
