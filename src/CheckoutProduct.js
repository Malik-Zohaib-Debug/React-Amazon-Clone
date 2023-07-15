import React, { useContext } from 'react'
import {StateContext} from './StateProvider'
import './CheckoutProduct.css';

export default function CheckoutProduct({id, title, price, image, rating}) {
    const {removeFromBasket} = useContext(StateContext);

    const RemoveFromBasket = () => {
        removeFromBasket(id);
    }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt={title}/>
        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                <p>⭐</p>
                ))}
            </div>
            <button onClick={RemoveFromBasket}>Remove from basket</button>
        </div>
    </div>
  )
}
