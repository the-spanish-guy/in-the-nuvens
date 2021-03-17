<template>
  <div id="container">
    <!-- <div id="login-form"> -->
    <LoginForm v-show="this.isVisible.login" @toggleLoginForm="toggleForm" />
    <RegisterForm v-show="this.isVisible.register" @toggleLoginForm="toggleForm" />
    <!-- </div> -->

    <!-- <div id="background"></div> -->
  </div>
</template>

<script>
import LoginForm from '@/components/login/LoginForm.vue'
import RegisterForm from '@/components/login/RegisterForm.vue'

export default {
  name: 'LoginView',
  components: {
    LoginForm,
    RegisterForm
  },
  data: () => ({
    isVisible: {
      login: true,
      register: false
    }
  }),
  methods: {
    toggleForm () {
      this.isVisible.login = this.isVisible.register
      this.isVisible.register = !this.isVisible.register
    }
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
