import React from "react";
import StarIcon from "@material-ui/icons/Star";
import './CheckoutProduct.css'
import { useStateValue } from "../../context/StateProvider";
const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{basket}, dispatch] = useStateValue()
  const removeFromBasket = ()=>{
      dispatch({
          type : "REMOVE_FROM_BASKET",
          id: id,
      })
      // remove item from the basket
  }
    return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt='' />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
        {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p className='star'><StarIcon/></p>
                    ))}
            
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
