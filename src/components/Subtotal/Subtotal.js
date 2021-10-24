
import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../../context/StateProvider";

function Subtotal() {

  const [{ basket }] = useStateValue();


  return (
    <div className="subtotal">
       
  
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>${basket.reduce((amount, item)=> item.price + amount, 0)}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
       
   
      {/* push the user to another page use history */}
      <button>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;