import "./Checkout.scss";
import { connect } from "react-redux";
import "./Checkout.scss";
import React, { PureComponent } from "react";
import CheckoutItem from "../../Components/Checkout-item/CheckoutItem.jsx";
import StripeButton from "../../Components/StripeButton/StripeButton";

class Checkout extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { totalPrice, cartItems } = this.props;
    const items = cartItems.map(item => (
      <CheckoutItem cartItem={item} key={item.id} />
    ));
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {items}
        <span className="total">TOTAL : {totalPrice} INR</span>
        <div className="test-warning">
          *Please use the following test card for payment* <br />
          >4242 4242 4242 4242 , 01/20 , 123
        </div>
        <StripeButton price={totalPrice} />
      </div>
    );
  }
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
  totalPrice: cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  )
});
export default connect(mapStateToProps)(Checkout);
