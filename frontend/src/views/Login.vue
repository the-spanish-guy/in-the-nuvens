<template>
  <div id="container">
    <div id="login-form">
      <LoginForm />
    </div>

    <div id="background"></div>
  </div>
</template>

<script>
import LoginForm from "@/components/login/LoginForm.vue"

export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
}
</script>

<style scoped>
#container {
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  min-height: 450px;
  width: 100%;
}

#login-form {
  width: 50vw;
}
#background {
  background-image: url("../assets/login-background.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 50vw;
  height: 100vh;
}
</style>
