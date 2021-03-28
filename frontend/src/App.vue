<template>
  <v-app v-dark-mode>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons");
@import url("https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css");

@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&family=Roboto:wght@400;700&display=swap");
@import url(./styles/root.css);
@import url(./styles/global.css);
</style>
