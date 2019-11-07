import React, { Component } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import setCurrentUser from "./redux/user/user-actions";
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/Shoppage/ShopPage";
import Signin from "./Pages/Signin/Signin";
import Checkout from "./Pages/Checkout/Checkout";
import { auth, createUserProfile } from "./firebase/firebase.utils";
class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfile(user);
        userRef.onSnapshot(snapshot => {
          setCurrentUser(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            },
            () => console.log(this.state.currentUser)
          );
        });
      } else {
        setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Signin />
            }
          />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
