import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
const Cart = ({ cart }) => {
  // console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    // tax=tax+product+
  }
  const tax = (total * 0.1).toFixed(3);
  const grandTotal = parseFloat(total) + parseFloat(shipping) + parseFloat(tax);
  return (
    <div className="cart">
      <h4 className="order-summary">Order Summary</h4>
      <div className="price-total">
        <p>Selected Items: {quantity}</p>
        <p>Total price:${total}</p>
        <p>Total Shipping Charge:${shipping}</p>
        <p>Tax:${tax}</p>
        <h4>Grand Total:${grandTotal}</h4>
      </div>
      <button className="clear-cart-btn">
        Clear Cart <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
      </button>
      <button className="review-order-btn">
        Review Order <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Cart;
