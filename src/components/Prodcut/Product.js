import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../context/StateProvider";
const Product = ({ id, title, price, rating, image }) => {
  const [{basket}, dispatch] = useStateValue();


const addToBasket =()=>{
  dispatch({
    type : 'ADD_BASKET',
    item : {
      id,
      title,
      image,
      rating
    }
  })
}
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarIcon className="star" />
              </p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
