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
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12" class="inputs">
        <label>Senha</label>
        <v-text-field
          placeholder="Insira uma senha"
          solo
          color="#BFBFBF"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12" class="inputs">
        <label>Confirmar senha</label>
        <v-text-field
          placeholder="Confirme sua senha"
          solo
          color="#BFBFBF"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="12" md="12" class="btn">
        <v-btn depressed color="#8C7CFC" dark> Criar Conta </v-btn>
      </v-col>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  props: {
    msg: String,
  },
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

#container-form form .inputs .v-text-field{
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

.btn{
  height: 56px;
  padding: 0px !important

}
</style>
