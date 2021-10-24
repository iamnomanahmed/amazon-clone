import React from 'react'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../../context/StateProvider'
const Checkout = () => {
    const [{ basket }, user] = useStateValue();
    console.log(user.email);
    console.log(basket);
    return (
        <div className='checkout'>
            <div className='checkout_left'>
           
                <img className='checkout_ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''/>
       <div className='checkout_title'>
           <h3>{user.email}</h3>
           <h2 className='checkout_title'>
Your Shopping Basket
           </h2>

           {basket.map(item =>  (
        
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              
            />
          ))}
          
       </div>
         </div>
         <div className='checkout_right'>
             <h2>The Subtotal will go Here</h2>
         <Subtotal/>
         </div>
        </div>
    )
}

export default Checkout
