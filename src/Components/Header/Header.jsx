import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
export default function Header(props) {
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
          <Link onClick={() => auth.signOut()}>
            Log Out from {props.currentUser.displayName}
          </Link>
        ) : (
          <div>
            <Link to="/signin">Log In</Link>
          </div>
        )}
      </div>
    </div>
  );
}
