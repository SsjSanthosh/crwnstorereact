import React from "react";
import { ReactComponent as Cart } from "../../assets/shopping-bag.svg";
import { toggleCart } from "../../redux/cart/cart-actions";
import { connect } from "react-redux";
import "./CartIcon.scss";
function CartIcon({ toggleCart }) {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <Cart className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart)
});

export default connect(
  null,
  mapDispatchToProps(toggleCart)
)(CartIcon);
