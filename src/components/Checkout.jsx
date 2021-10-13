import React from "react";
import { useStateValue } from "../StateProvider";
import CheckOutProduct from './CheckOutProduct'
import Subtotal from './Subtotal'
import '../styles/Checkout.css'
const Checkout = () => {

    const [{ basket }] = useStateValue();
    return(
        <>
        <img src="https://services.mv3marketing.com/hosted/images/6b/7c8e05e5694ef69edb0c09396611c4/amazonads.png" alt="" className="checkout_Ad"/>
        <div className="checkout">
        { basket?.length === 0 ? (
            <div>
            <h2>Your basket is empty !</h2>
            <p>
            You have no item in your basket. To buy one or more products click on "Add t basket" next to the item.</p>
            </div>
        ) : (
            <div>
                <h2 className='checkout_title'>Your shopping Basket</h2>
                {
                    basket.map(item => (
                        <CheckOutProduct
                        id = {item.id}
                        title = {item.title}
                        imageSrc = {item.imgSrc}
                        price = {item.price}
                        ratings = {item.ratings}
                        />
                    ))
                }
            </div>
        )}
        <div className='subtotal'>
        {
            basket.length > 0 && (
                <div className="checkout_right">
                    <h2 className='subtotal_title'>Subtotal</h2>
                    <Subtotal/>
                </div>
            )
        }
        </div>
        </div>
    
    </>
    );
}

export default Checkout;