import React, { PureComponent } from "react";
import { ReactComponent as Cart } from "../../assets/shopping-bag.svg";
import { toggleCart } from "../../redux/cart/cart-actions";
import { connect } from "react-redux";
import "./CartIcon.scss";
class CartIcon extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { itemCount, toggleCart } = this.props;

    return (
      <div className="cart-icon" onClick={toggleCart}>
        <Cart className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart)
});
const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((acc, item) => acc + item.quantity, 0)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps(toggleCart)
)(CartIcon);
