import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/Shoppage/ShopPage";
import Signin from "./Pages/Signin/Signin";
import { auth } from "./firebase/firebase.utils";
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </div>
    );
  }
}

export default App;
