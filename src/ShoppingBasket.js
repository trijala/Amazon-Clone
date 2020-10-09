import React from 'react'
import "./ShoppingBasket.css";
import { useStateValue } from './StateProvider';

function ShoppingBasket({id, image, title, price, rating, hideButton}) {
    const [{ basket },dispatch] = useStateValue();

    const removeFromBasket =() => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,

        })
    }
    return (
        <div className="shoppingbasket">
            <img className= "shoppingbasket__image" src={image} />
            <div className="shoppingbasket__info">
                <p className="shoppingbasket__title">{title}</p>
                <p className="shoppingbasket__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="shoppingbasket__rating">
                    {Array(rating).fill().map((_,i) =>(
                        <p>⭐</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from basket</button>
                )}

            </div>
        </div>
    )
}

export default ShoppingBasket
