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
        <div className="shopping-cart-list-item" >
            <div className="shopping-cart-list-top">Item</div>
            <div className="shopping-cart-list-top">Number</div>
            <div className="shopping-cart-list-top">Cost per Item</div>
            <div className="shopping-cart-list-top">Total Cost</div>
            <div className="shopping-cart-list-top">Running Total</div>
        </div>
        <TotalNoTaxCalculation 
            itemsForSale={props.itemsForSale}
        />
        <TotalWithTax
            itemsForSale={props.itemsForSale}
            totalNoTax={props.totalNoTax}
        />
        <CheckoutButton 
            handleCheckoutButtonClick={props.handleCheckoutButtonClick}
        />
    </div>
)
}

export default CartPageLayout;