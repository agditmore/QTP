import React from 'react';

const CheckoutButton = (props) => {
    return(
        <button onClick={props.handleCheckoutButtonClick}>Checkout</button>
    )
}

export default CheckoutButton;