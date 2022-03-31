import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product }) => {
  const { name, img, price, shipping, quantity } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="No pic" />
      </div>
      <div className="review-item-details-container">
        <div className="review-item-details">
          <p className="product-name" title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>
            Price: <span className="orange-color">${price}</span>
          </p>
          <p>
            <small>
              Shipping charge:{" "}
              <span className="orange-color">
                <b>${shipping}</b>
              </span>
            </small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div className="delete-container">
          <button>delete</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
