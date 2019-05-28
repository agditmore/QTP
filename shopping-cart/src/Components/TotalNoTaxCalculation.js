import React from 'react';

const TotalNoTaxCalculation = (props) => {
    const itemsToPurchase = props.itemsForSale.filter((item) => item.numberInCart>0 ? item: null)
    let totalNoTax = 0;
    return(
        itemsToPurchase.map((item) => {
            totalNoTax = totalNoTax + item.numberInCart*item.price
            return(
                <div className="shopping-cart-list-item">
                    <div className="shopping-cart-list-column">{item.name}</div>
                    <div className="shopping-cart-list-column">{item.numberInCart}</div>
                    <div className="shopping-cart-list-column">{item.price}</div>
                    <div className="shopping-cart-list-column">{item.numberInCart*item.price}</div>
                    <div className="shopping-cart-list-column">{totalNoTax.toFixed(2)}</div>
                </div>
            )
        }
        )
    )
}

export default TotalNoTaxCalculation;