import React from 'react';

const TotalWithTax = (props) => {
    let finalTotalNoTax = 0;
    for (let i=0; i<props.itemsForSale.length; i++){
        finalTotalNoTax = finalTotalNoTax + props.itemsForSale[i].numberInCart*props.itemsForSale[i].price
    }
    let salesTax = finalTotalNoTax*0.098;
    let finalTotalWithTax=finalTotalNoTax+salesTax
    return(
        <div>
            <div>
                Total (without tax): {finalTotalNoTax.toFixed(2)}
            </div>
            <div>
                Sales tax (9.8%): {salesTax.toFixed(2)}
            </div>
            <div>
                Total (with tax): {finalTotalWithTax.toFixed(2)}
            </div>
        </div>
    )
}

export default TotalWithTax;