import React from 'react';
import { connect } from 'react-redux';
import FoodItemDisplay from './FoodItemDisplay';
import AddNewOption from './AddNewOption';

class IngredientSelector extends React.Component {
    render(){
        return(
            <div>
                <h2>Select your ingredients:</h2>
                <div id="food-selector-container">
                { this.props.ingredientOptions.map((ingredient) => 
                    <FoodItemDisplay
                        group="ingredient"
                        foodItem={ingredient}
                        handleItemChange={this.props.handleIngredientChange}
                        selectedItems={this.props.selectedIngredients}
                        key={ingredient.id}
                    />
                    ) }
                    <AddNewOption
                    group="smoothie"
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ingredientOptions: state.ingredientOptions
    }
}

export default connect(mapStateToProps)(IngredientSelector);