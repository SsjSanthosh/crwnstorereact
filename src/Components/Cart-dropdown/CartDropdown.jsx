import React from "react";
import "./CartDropdown.scss";
import Button from "../Buttons/Button";
export default function CartDropdown() {
  return (
    <div class="cart-dropdown">
      <div className="cart-items">
        <Button value="GO TO CHECKOUT"></Button>
      </div>
    </div>
  );
}
