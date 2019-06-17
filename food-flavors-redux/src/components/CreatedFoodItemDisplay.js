import React from 'react';
import AddToCartInput from './AddToCartInput';

const CreatedFoodItemDisplay = (props) => {
    return(
            <div>
                <h1>
                    {props.createdFoodItem.id}
                </h1>
                <AddToCartInput
                    createdFoodItem={props.createdFoodItem}
                    group={props.group}
                />
            </div>
    )
}

export default CreatedFoodItemDisplay;