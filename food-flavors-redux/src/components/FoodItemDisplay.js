import React from 'react';

const FoodItemDisplay = (props) => {
    return(
        <div className="food-item-container">
            <img src={props.foodItem.img} alt={props.foodItem.name}></img>
            <div>
            {props.group === "food" 
                ? <input 
                    type="radio" 
                    name={props.group}
                    checked={props.selectedFood.name === props.foodItem.name}
                    onChange={() => props.handleFoodChange(props.foodItem)}
                />
                : <input type="checkbox"
                    checked={props.selectedItems.includes(props.foodItem.name)}
                    onChange={() => props.handleItemChange(props.foodItem.name)}
                />
            }
            <h3>{props.foodItem.name}</h3>
            </div>
        </div>
    )
}

export default FoodItemDisplay;