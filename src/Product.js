import React, {useContext} from "react";
import './Product.css';
import { StateContext } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  
  const {addToBasket} = useContext(StateContext);
  
  let item = {
    id: id,
    title: title,
    price: price,
    rating: rating,
    image: image
  }

  const addToCart = () => {
    addToBasket(item);
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToCart}>Add to basket</button>
    </div>
  );
}

export default Product;
