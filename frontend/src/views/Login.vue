<template>
  <div id="container">
    <!-- <div id="login-form"> -->
    <LoginForm />
    <!-- </div> -->

    <!-- <div id="background"></div> -->
  </div>
</template>

<script>
import LoginForm from '@/components/login/LoginForm.vue'

export default {
  name: 'LoginView',
  components: {
    LoginForm
  }
}
</script>

<style scoped>
#container {
  width: 100vw;
  height: 100vh;
  padding: 0px 108px;

  background-image: url("../assets/background.svg");
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
}
</style>
