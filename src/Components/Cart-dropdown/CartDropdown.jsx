import React from "react";
import "./CartDropdown.scss";
import Button from "../Buttons/Button";
import { connect } from "react-redux";
import CartItem from "../Cart-Item/CartItem";
function CartDropdown({ cartItems }) {
  return (
    <div class="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
        <Button value="GO TO CHECKOUT"></Button>
      </div>
    </div>
  );
}
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
export default connect(mapStateToProps)(CartDropdown);
