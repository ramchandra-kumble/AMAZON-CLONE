import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from '../reducer'
import '../styles/Subtotal.css'
const Subtotal = () => {

    const [{ basket }, dispatch] = useStateValue();
    return (
        <>
        <div className="subtotal_div">
        <CurrencyFormat 
        renderText = {(value) => (
            <>
                <p>
                Subtatol ({basket.length} items ) : <strong>{`${value}`}</strong></p>
                <small className='subtotal_gift'>
                    <input type="checkbox"/>This order contain gift
                </small>
            </>
        )}
        decimalScale = {2}
        value = {getBasketTotal(basket)}
        displayType = {'text'}
        thousandSeparator={true}
        prefix = {'$'}
        />
            <button className='subtotal_btn'>Procced to Checkout</button>
        </div>
        </>
    );
}

export default Subtotal;