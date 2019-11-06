import React from "react";
import "./CartDropdown.scss";
import Button from "../Buttons/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../Cart-Item/CartItem";
function CartDropdown({ cartItems }) {
  return (
    <div class="cart-dropdown">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span>Your cart is empty!</span>
        )}
        <Link to="/checkout">
          {" "}
          <Button value="GO TO CHECKOUT"></Button>
        </Link>
      </div>
    </div>
  );
}
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
export default connect(mapStateToProps)(CartDropdown);
