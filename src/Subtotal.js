import React, {useContext} from 'react'
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import {StateContext} from './StateProvider';

export default function Subtotal() {
    const {basket} = useContext(StateContext);
    const basketTotal = basket.map((item) => (item.price)).reduce((acc, item) => acc+=item).toFixed(2);
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox' /> This order contains a gift
                    </small>
                </>
            )} 
            decimalScale={2}
            value={basketTotal}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
        <button>Proceed to checkout</button>
    </div>
  )
}
