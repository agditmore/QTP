import React from 'react';
import ShoppingCart from '../Images/ShoppingCart.png';

const ShoppingCartIcon = (props) =>
{
    return(
        <div id="shopping-cart-container">
            <button onClick={props.handleShoppingCartIcon}><img src={ShoppingCart} alt="Shopping Cart" id="shopping-cart-image" /></button>
            <p id="shopping-cart-statement">{props.numberOfItemsInShoppingCart} items in your shopping cart </p>
        </div>
    )
}

export default ShoppingCartIcon