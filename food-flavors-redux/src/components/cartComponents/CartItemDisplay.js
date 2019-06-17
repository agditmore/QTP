import React from 'react';
import Smoothie from './../../images/Smoothie.jpeg'

const CartItemDisplay = (props) => {
    return(
        <div className="cart-item-container">
            {props.group==="food"
                ? <img src={props.createdFoodItem.food.img}  alt={props.createdFoodItem.food.name} />
                : <img src={Smoothie} alt="Smoothie" />
            }
            <div className="item-name-column">
                {props.createdFoodItem.id}
            </div>
            <div className="item-number-column">
                <input type="number" min="0" onKeyDown={(event) => props.handleNumberInCartChange(event, props.createdFoodItem.id)} defaultValue={props.createdFoodItem.numberInCart} />
            </div>
        </div>
    )
}

export default CartItemDisplay;