import React from 'react';
import TotalNoTaxCalculation from './TotalNoTaxCalculation';
import TotalWithTax from './TotalWithTax';
import CheckoutButton from './CheckoutButton';

const CartPageLayout = (props) => {

return (
    <div>
        <button onClick={props.handleShoppingCartIcon}>
            Go Back to Main Page
        </button>
        <p>
            {props.numberOfItemsInShoppingCart} items are in your shopping cart
        </p>
        <div className="shopping-cart-list-item">
            <div className="shopping-cart-list-column">Item</div>
            <div className="shopping-cart-list-column">Number</div>
            <div className="shopping-cart-list-column">Cost per Item</div>
            <div className="shopping-cart-list-column">Total Cost</div>
            <div className="shopping-cart-list-column">Running Total</div>
        </div>
        <TotalNoTaxCalculation 
            itemsForSale={props.itemsForSale}
        />
        <TotalWithTax
            itemsForSale={props.itemsForSale}
        />
        <CheckoutButton 
            handleCheckoutButtonClick={props.handleCheckoutButtonClick}
        />
    </div>
)
}

export default CartPageLayout;