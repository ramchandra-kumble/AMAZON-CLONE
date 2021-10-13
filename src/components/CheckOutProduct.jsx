import React from 'react'
import '../styles/CheckOutProduct.css';
import { useStateValue } from "../StateProvider";

const CheckOutProduct = ({id,title,ratings,imageSrc,price}) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id : id,
        })
    }
    return (
        <>
        <div className="checkout_product">
            <img src={imageSrc} alt="image"/>
            <div className="checkout_info">
                <p className="checkoutProduct_rating">{title}</p>
                <p className="checkout_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout_rating">
                            {
                                Array(ratings) //crate an array Array(5)
                                .fill()
                                .map((_) => (
                                    <p>⭐</p>
                                ))
                            }
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
        </>
    );
};

export default CheckOutProduct;