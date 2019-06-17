import React from 'react';
import FoodItemDisplay from './FoodItemDisplay';
import { connect } from 'react-redux';
import AddNewOption from './AddNewOption';
import Typography from '@material-ui/core/Typography';

class FlavorSelector extends React.Component {
    render(){
        return(
            <div>
                
                <Typography variant="h2">Second, select your flavors:</Typography>
                <div id="food-selector-container">
                    {
                        this.props.flavorOptions.map((flavorOption) => {
                            return(
                                <FoodItemDisplay
                                foodItem={flavorOption}
                                group="flavor"
                                handleItemChange={this.props.handleFlavorChange}
                                selectedItems={this.props.selectedFlavors}
                                key={flavorOption.id}
                                />
                            )
                        })
                    }
                    <AddNewOption
                    group="flavor"
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        flavorOptions: state.flavorOptions
    }
}
    
export default connect(mapStateToProps)(FlavorSelector);