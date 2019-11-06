import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
function Header(props) {
  return (
    <div className="Header">
      <Link to="/">
        <div className="HeaderLogo">
          <Logo className="logo" />
        </div>
      </Link>
      <div className="HeaderLinks">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        {props.currentUser ? (
          <Link onClick={() => auth.signOut()}>Log Out</Link>
        ) : (
          // from {props.currentUser.displayName.split(" ")[0]}
          <div>
            <Link to="/signin">Log In</Link>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
