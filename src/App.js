import React from "react";

import {
  Home,
  Sale,
  Delivery,
  Warranty,
  Contacts,
  Input,
  Registration,
  PersonalArea,
  MyPurchases,
  Basket,
  EditProfile,
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
        <Route exact path="/personalArea" component={PersonalArea} />
        <Route exact path="/myPurchases" component={MyPurchases} />
        <Route exact path="/basket" component={Basket} />
        <Route exact path="/editProfile" component={EditProfile} />
      </Switch>
    </>
  );
}

export default App;
