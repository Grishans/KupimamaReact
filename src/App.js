import React from "react";

import {
  Home,
  Sale,
  Delivery,
  Warranty,
  Contacts,
  Input,
  Registration,
} from "./Pages";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sale" component={Sale} />
        <Route exact path="/delivery" component={Delivery} />
        <Route exact path="/warranty" component={Warranty} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/input" component={Input} />
        <Route exact path="/registration" component={Registration} />
      </Switch>
    </>
  );
}

export default App;
