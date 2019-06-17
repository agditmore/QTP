import React from 'react';
import { connect } from 'react-redux';
import CartItemDisplay from './CartItemDisplay';
import { getNumberOfItemsInCart } from '../../redux/reducer';
import { changeCreatedFoods, changeCreatedSmoothies } from '../../redux/actions';
import ChangeScreenView from '../ChangeScreenView';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class CartPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            changedNumberInCart: 0,
            totalNumberOfItemsInCart: 0,
            showTotalNumber: false
        }
    }
 
    handleChangedFoodNumberInCartEnter = (event, itemId) => {
        if (event.key === "Enter"){
            const updatedCreatedFoodsArray = [];
            this.props.createdFoods.map((createdFood) => createdFood.id === itemId
                ? updatedCreatedFoodsArray.push({ ...createdFood, numberInCart: event.target.value })
                : updatedCreatedFoodsArray.push(createdFood)
            )
            this.props.changeCreatedFoods(updatedCreatedFoodsArray)
        }
    }

    handleChangedSmoothieNumberInCartEnter = (event, itemId) => {
        if (event.key === 'Enter'){
            const updatedCreatedSmoothiesArray = [];
            this.props.createdSmoothies.map((createdSmoothie) => createdSmoothie.id === itemId
                ? updatedCreatedSmoothiesArray.push({...createdSmoothie, numberInCart: event.target.value })
                : updatedCreatedSmoothiesArray.push(createdSmoothie)
            )
            this.props.changeCreatedSmoothies(updatedCreatedSmoothiesArray)
        } 
    }

    getTotalNumberOfItemsInCart = () => {
        let newTotalNumberOfItemsInCart = 0;
        this.props.createdFoods.map((createdFood) => newTotalNumberOfItemsInCart = newTotalNumberOfItemsInCart+parseInt(createdFood.numberInCart))
        this.props.createdSmoothies.map((createdSmoothie) => newTotalNumberOfItemsInCart = newTotalNumberOfItemsInCart+parseInt(createdSmoothie.numberInCart))
        this.setState({totalNumberOfItemsInCart: newTotalNumberOfItemsInCart, showTotalNumber: !this.state.showTotalNumber});
    }
    

    render() {
        return (
            <div className="cart-page-container">
                <Typography variant="h2">Your Cart: {this.props.numberOfItemsInCart} items</Typography>
                {
                    this.props.createdFoods.map((createdFood) => 
                    createdFood.numberInCart > 0 ?
                    (<CartItemDisplay
                        handleNumberInCartChange={this.handleChangedFoodNumberInCartEnter}
                        createdFoodItem={createdFood}
                        group="food"
                    />)
                    : null
                    )
                }
                {
                    this.props.createdSmoothies.map((createdSmoothie) => 
                    createdSmoothie.numberInCart > 0 ?
                    (<CartItemDisplay
                        handleNumberInCartChange={this.handleChangedSmoothieNumberInCartEnter}
                        createdFoodItem={createdSmoothie}
                        group="smoothie"
                    />)
                    : null
                    )
                }
                <Button variant="contained" color="primary" onClick={this.getTotalNumberOfItemsInCart}>
                    Ready to check out?
                </Button>
                {this.state.showTotalNumber 
                    ? <div>{this.state.totalNumberOfItemsInCart} items are in your cart</div>
                    : null
                }
                <ChangeScreenView 
                    newScreen="foodBuilder"
                />
                <ChangeScreenView 
                    newScreen="smoothieBuilder"
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        createdFoods: state.createdFoods,
        createdSmoothies: state.createdSmoothies,
        numberOfItemsInCart: getNumberOfItemsInCart(state)
    }
}

const mapDispatchToProps = {
    changeCreatedFoods,
    changeCreatedSmoothies
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);