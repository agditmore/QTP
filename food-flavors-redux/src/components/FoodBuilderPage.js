import React from 'react';
import FlavorSelector from './FlavorSelector';
import FoodSelector from './FoodSelector';
import CreatedFoodItemDisplay from './CreatedFoodItemDisplay';
import { connect } from 'react-redux';
import { changeCreatedFoods } from './../redux/actions';
import ChangeScreenView from './ChangeScreenView';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class FoodBuilderPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedFlavors: [],
            selectedFood: {},
            showCreation: false,
            createdFoodItem: {}
        }
    }

    handleFlavorChange = (selectedFlavorName) => {
        this.setState({
            selectedFlavors: [
                ...this.state.selectedFlavors,
                selectedFlavorName
            ]
        })
    }

    handleFoodChange = (selectedFood) => {
        this.setState({
            selectedFood
        })
    }

    handleClearFoodClick = () => {
        this.setState({
            selectedFlavors: [],
            selectedFood: {},
            showCreation: false
        })
    }

    createFood = () => {
        const newCreatedFoodsArray = [];
        let repeatedFood = false;
        let newFoodItem = {
            food: this.state.selectedFood, 
            flavors: this.state.selectedFlavors.sort(), 
            numberInCart: 0, 
            id: this.state.selectedFlavors.sort().join(" ")+" "+this.state.selectedFood.name
        }
        this.props.createdFoods.map((createdFood) => 
            {
                if (createdFood.id === newFoodItem.id) 
                    {
                        repeatedFood = true
                        newFoodItem = createdFood
                    }
                newCreatedFoodsArray.push(createdFood)
            }
        )
        if (repeatedFood !== true) 
            {
                newCreatedFoodsArray.push(newFoodItem)
            }
        this.props.changeCreatedFoods(newCreatedFoodsArray)
        this.setState({
            showCreation: true,
            createdFoodItem: newFoodItem
        })
    }

    render() {
        return(
            <div className="App">
                <Typography variant="h4" align="center">Welcome to Food</Typography>
                <p>Start Your Food Journey</p>
                <ChangeScreenView newScreen="smoothieBuilder"/>
                <FoodSelector 
                    selectedFood={this.state.selectedFood}
                    handleFoodChange={this.handleFoodChange}
                />
                {Object.keys(this.state.selectedFood).length > 0 ?(
                <>
                <FlavorSelector
                    selectedFlavors={this.state.selectedFlavors}
                    handleFlavorChange={this.handleFlavorChange}
                />
                <Button variant="contained" color="primary" onClick={this.createFood}>Create Your Food</Button>
                {this.state.showCreation ? (
                    <div>
                        <h2>You have created...</h2>
                        <CreatedFoodItemDisplay
                            createdFoodItem={this.state.createdFoodItem}
                            group="food"
                        />
                    </div>
                )
                : null}
                </>
                )
                : null}
                <Button variant="contained" color="tertiary" onClick={this.handleClearFoodClick}>Clear and Create Another Food</Button>
                <ChangeScreenView newScreen="cart" />
                <div id="page-bottom" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        createdFoods: state.createdFoods,
    } 
}

const mapDispatchToProps = {
    changeCreatedFoods
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodBuilderPage);