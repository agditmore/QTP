import React from 'react';

const TotalWithTax = (props) => {
    let salesTax = props.totalNoTax*0.098;
    let finalTotalWithTax=props.totalNoTax+salesTax
    return(
        <div>
            <div>
                Total (without tax): {props.totalNoTax.toFixed(2)}
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