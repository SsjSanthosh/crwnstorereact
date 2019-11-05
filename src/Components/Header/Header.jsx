import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
export default function Header() {
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
      </div>
    </div>
  );
}
