import React from "react";
import { useStateValue } from "../StateProvider";
import '../styles/Product.css'
const Product = ({id, title, imgSrc, price, ratings}) => {

    const [{}, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                id : id,
                title : title,
                imgSrc  : imgSrc,
                price : price,
                ratings  :ratings,
            },
        });
    }

    return(
        <>
        <div className="product">
            <div className="product_info">
                <p className='product_title'>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(ratings) //crate an array Array(5)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))
                    }
            </div>
        </div>
            <img className='product_img' src={imgSrc} alt="Product"/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
        </>
    );
}

export default Product;