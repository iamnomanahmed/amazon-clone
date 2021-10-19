import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../context/StateProvider";
import { getBasketTotal } from "../../context/reducer";


function Subtotal() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
     
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
     

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;