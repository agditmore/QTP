import React from 'react';
import { connect } from 'react-redux';
import { changeCreatedFoods, changeCreatedSmoothies } from './../redux/actions';
import { getNumberOfItemsInCart } from '../redux/reducer';

class AddToCartInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            amountCounter: 0
        }
    }

    handleInputChange = (event) => {
        this.setState({
            amountCounter: event.target.value
        })
    }

    handleSubmitClick = () => {
        switch (this.props.group) {
            case "food":
                const updatedCreatedFoods = this.props.createdFoods.map((createdFood) => 
                createdFood.id === this.props.createdFoodItem.id 
                    ? ({...createdFood, numberInCart: parseInt(this.props.createdFoodItem.numberInCart)+parseInt(this.state.amountCounter)})
                    : (createdFood))
                return this.props.changeCreatedFoods(updatedCreatedFoods);
            case "smoothie":
                const updatedCreatedSmoothies = this.props.createdSmoothies.map((createdSmoothie) =>
                createdSmoothie.id === this.props.createdFoodItem.id
                    ? ({...createdSmoothie, numberInCart: parseInt(this.props.createdFoodItem.numberInCart)+parseInt(this.state.amountCounter)})
                    : (createdSmoothie))
                return this.props.changeCreatedSmoothies(updatedCreatedSmoothies);
            default:
                return
        }
        
    }

    render() {
        return(
            <div className="add-to-cart-container">
                <h3>Add</h3> 
                <input className="add-to-cart-input" type="number" min="0" onChange={this.handleInputChange} ></input>
                <h3>to your cart</h3>
                <button className="add-to-cart-button" onClick={this.handleSubmitClick}>Submit</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        createdFoods: state.createdFoods,
        createdSmoothies: state.createdSmoothies,
        numberOfItemsInCart: getNumberOfItemsInCart,
    }
}

const mapDispatchToProps = {
    changeCreatedFoods,
    changeCreatedSmoothies
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartInput);