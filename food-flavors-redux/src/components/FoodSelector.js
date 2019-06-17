import React from 'react';
import FoodItemDisplay from './FoodItemDisplay';
import { connect } from 'react-redux';
import AddNewOption from './AddNewOption';

class FoodSelector extends React.Component {
    render() {
        return(
            <div>
                <h2>
                    First, select a food type:
                </h2>
                <div id="food-selector-container">
                    {
                        this.props.foodOptions.map((foodOption) => {
                            return(
                                <FoodItemDisplay
                                foodItem={foodOption}
                                group="food"
                                handleFoodChange={this.props.handleFoodChange}
                                selectedFood={this.props.selectedFood}
                                key={foodOption.id}
                                />
                            )
                        })
                    }
                    <AddNewOption
                    group="food"
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        foodOptions: state.foodOptions
    }
}

export default connect(mapStateToProps)(FoodSelector);