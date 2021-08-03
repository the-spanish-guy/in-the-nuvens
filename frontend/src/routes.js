import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro" component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
}
