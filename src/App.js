import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/Shoppage/ShopPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
