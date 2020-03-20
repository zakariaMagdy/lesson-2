import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingItem } from "../../assets/11.3 shopping-bag.svg.svg";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../../redux/Cart/CartActions";
import { selectCartItemscount } from "../../redux/Cart/cartSelector";

const CartIcon = ({ toggleCartDropdown, itemsnum }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdown}>
      <ShoppingItem className="cart-icon__shopping-icon" />
      <span className="cart-icon__item-count">{itemsnum}</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    itemsnum: selectCartItemscount(state)
  };
};

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
