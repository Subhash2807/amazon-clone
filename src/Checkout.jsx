import './CheckoutProduct.css'

import React from 'react'
import Subtotal from './Subtotal.jsx'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct.jsx'
function Checkout() {
    const [{basket},dispatch] = useStateValue();
    console.log(basket)
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/GGD/December20/Price-drop/V247139993_IN_PC_Laptops_Grand_Gaming_days_1500.jpg" alt="banner" className="checkout__ad"/>

                <div><h2  className="checkout__title">Your shopping Basket</h2>
                {/* <CheckoutProduct 
                    id="12345" 
                    price={892}
                    title="Oliveware Teso Lunch Box with Bottle 3 Stainless Steel Containers, Pickle Boxes)"
                    image="https://m.media-amazon.com/images/I/71mRT+nLhbL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={4}
                     /> */}
                {/* <CheckoutProduct 
                    id="12345" 
                    price={892}
                    title="Oliveware Teso Lunch Box with Bottle 3 Stainless Steel Containers, Pickle Boxes)"
                    image="https://m.media-amazon.com/images/I/71mRT+nLhbL._AC_UL480_FMwebp_QL65_.jpg"
                    rating={4}
                     /> */}
                {basket.map(item=>(
                    <CheckoutProduct 
                    id={item.id} 
                    price={item.price}
                    title={item.title}
                    image={item.image}
                    rating={item.rating}
                     />
                
                ))}
                </div>
            </div>
            <div className="checkout__right">
                
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
