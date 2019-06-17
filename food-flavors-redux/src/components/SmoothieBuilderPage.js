import React from 'react';
import ChangeScreenView from './ChangeScreenView';
import IngredientSelector from './IngredientSelector';
import CreatedFoodItemDisplay from './CreatedFoodItemDisplay';
import { connect } from 'react-redux';
import { changeCreatedSmoothies } from './../redux/actions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class SmoothieBuilderPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIngredients: [],
            showSmoothie: false
        }
    }

    createSmoothie = () => {
        const newCreatedSmoothiesArray = [];
        let repeatedSmoothie = false;
        const newSmoothieItem = {
            ingredients: this.state.selectedIngredients.sort(),
            numberInCart: 0,
            id: this.state.selectedIngredients.sort().join(" ")+" Smoothie"
        }
        this.props.createdSmoothies.map((createdSmoothie) => 
            createdSmoothie.id === newSmoothieItem.id
            ? (repeatedSmoothie = true, newCreatedSmoothiesArray.push(createdSmoothie))
            : (newCreatedSmoothiesArray.push(createdSmoothie)))
        if (repeatedSmoothie === true){return}
        else {newCreatedSmoothiesArray.push(newSmoothieItem)}
        this.props.changeCreatedSmoothies(newCreatedSmoothiesArray)
        this.setState({
            showSmoothie: true
        })
    }

    handleIngredientChange = (selectedIngredientName) => {
        this.setState({
            selectedIngredients: [
                ...this.state.selectedIngredients,
                selectedIngredientName
            ]
        })
    }

    handleClearSmoothieClick = () => {
        this.setState({
            selectedIngredients: [],
            showSmoothie: false
        })
    }

    render() {
        return(
            <div className="App">
                <Typography variant="h4" align="center">Welcome to Smoothies</Typography>
                <p>Start Your Smoothie Journey</p>
                <ChangeScreenView newScreen="foodBuilder"/>
                <IngredientSelector
                selectedIngredients={this.state.selectedIngredients}
                handleIngredientChange={this.handleIngredientChange}
                />
                <Button variant="contained" color="primary" onClick={this.createSmoothie}>Create Your Smoothie</Button>
                {this.state.showSmoothie ? 
                    (
                        <div>
                            <h2>You have created...</h2>
                            <CreatedFoodItemDisplay
                                createdFoodItem={this.props.createdSmoothies[this.props.createdSmoothies.length-1]}
                                group="smoothie"
                            />
                        </div>
                    )
                    : null}
                <Button variant="contained" color="tertiary" onClick={this.handleClearSmoothieClick}>Clear and Create Another Smoothie</Button>
                <ChangeScreenView newScreen="cart"/>
                <div id="page-bottom" />
            </div>   
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        createdSmoothies: state.createdSmoothies
    }
}

const mapDispatchToProps = {
    changeCreatedSmoothies
}

export default connect(mapStateToProps, mapDispatchToProps)(SmoothieBuilderPage);