<template>
  <div id="container-form">
    <img src="@/assets/logo.png" alt="" />

    <p>Armazene seus arquivos com facilidade</p>

    <v-form>
      <v-col cols="12" sm="12" md="12" class="inputs">
        <label>Usuário</label>
        <v-text-field
          placeholder="Insira um nome de usuário"
          solo
          color="#BFBFBF"
          v-model="user.username"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12" class="inputs">
        <label>Senha</label>
        <v-text-field
          placeholder="Insira uma senha"
          solo
          color="#BFBFBF"
          v-model="user.password"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="12" md="12" class="btn">
        <v-btn depressed color="#85AFF9" dark @click="tryLogin"> Login </v-btn>
      </v-col>
      <v-col cols="12" sm="12" md="12" class="btn">
        <v-btn depressed color="#85AFF9" dark @click="toggleForma">
          Cadastrar
        </v-btn>
      </v-col>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'RegisterForm',
  data: () => ({
    user: {
      username: '',
      password: ''
    }
  }),
  methods: {
    ...mapActions(['login']),

    async tryLogin () {
      this.login(this.user)
        .then(() => {
          console.log('sucesso')
        })
        .catch((errror) => {
          console.log('error')
          // usuario ou senha incorretos
          console.log(errror)
        })
    },
    toggleForma () {
      this.$emit('toggleLoginForm')
    }
  }
}
</script>

<style scoped>
#container-form {
  width: 485px;
  height: 100vh;
}
#container-form img {
  width: 150px;
  /* height: 50px; */
  margin-top: 18px;
}
#container-form p {
  margin-top: 30px;
  margin-bottom: 30px;
  color: #141c5f;
  font-size: 32px;

  width: 458px;
  height: 87px;
  word-wrap: normal;
}
#container-form form {
  padding: 0;
  margin: 0;
  width: 484px;
  height: auto;
}

#container-form form .inputs {
  color: #5f5c5c;
  padding: 0;
  padding-bottom: 2px;
}

#container-form form .inputs .v-text-field {
  padding-top: 4px;
  padding-bottom: -4px;
}

>>> .v-input__slot {
  box-shadow: -4px 3px 12px rgba(157, 191, 250, 0.35) !important;
}

>>> .v-btn {
  width: 484px;
  height: 100% !important;
  text-transform: uppercase;
}

.btn {
  height: 56px;
  padding: 0px !important;
  margin-bottom: 8px;
}
.btn button:hover {
  background-color: #8c7cfc !important;
  border-color: #8c7cfc !important;
  transition: 0.6s all;
  border-radius: 4px;
}

/* On screens that are 992px or less, set the background color to blue */
@media screen and (min-width: 1367px) {
  * {
    margin: 0;
    padding: 0;
  }
  #container-form {
    width: 640px;
    height: 871px;
    margin: 60px 20px;
  }
  #container-form img {
    width: 263px;
    height: 66px;
    margin-top: 18px;
  }
  #container-form p {
    margin-top: 64px;
    margin-bottom: 56px;
    color: #141c5f;
    font-size: 48px;

    width: 640px;
    height: 132px;
    word-wrap: normal;
  }
  #container-form form {
    padding: 0;
    margin: 0;
    width: 638px;
    height: auto;
  }

  #container-form form .inputs {
    color: #5f5c5c;
    padding: 0;
    padding-bottom: 24px;
  }

  #container-form form .inputs .v-text-field {
    padding-top: 16px;
    padding-bottom: -16px;
  }

  >>> .v-btn {
    width: 638px;
    height: 100% !important;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
}
</style>
