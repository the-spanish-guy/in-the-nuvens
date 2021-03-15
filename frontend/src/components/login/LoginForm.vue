<template>
  <div id="container-form">
    <img src="@/assets/logo.png" alt="" />

    <p>Armazene seus arquivos com facilidade</p>

    <v-form>
      <v-col cols="12" sm="12" md="12">
        <v-text-field
          label="Usuário"
          placeholder="Usuário"
          solo
          color="rgba(157, 191, 250, 0.35)"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field
          label="Senha"
          placeholder="Senha"
          solo
          color="rgba(157, 191, 250, 0.35)"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="12">
        <v-text-field
          label="Confirmar senha"
          placeholder="Confirmar senha"
          solo
          color="rgba(157, 191, 250, 0.35)"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="12" md="12">
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
  width: 640px;
  height: 871px;
  margin: 40px 52px;
}

p {
  margin-top: 64px;
  margin-bottom: 64px;
  color: #141c5f;
  font-size: 48px;
}

>>> .v-input__slot {
  box-shadow: -4px 3px 12px rgba(157, 191, 250, 0.35) !important;
}

>>> .v-btn {
  width: 100%;
  height: 60px !important;
  margin-top: 24px;
  text-transform: uppercase;
}
</style>
