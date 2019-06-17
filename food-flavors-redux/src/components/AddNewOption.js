import React from 'react';
import Plus from '../images/Plus.png';
import Question from '../images/Question.png';
import { connect } from 'react-redux';
import { changeFoodOptions, changeFlavorOptions, changeIngredientOptions } from '../redux/actions';

class AddNewOption extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            subShow: false
        }
    }

    handleAddNewClick = () => {
        this.props.group === "flavor" 
        ? this.setState({subShow: true})
        : this.setState({show: true})
    }

    handleAddNewEnterPress = (event, group) => {
        if (event.key === "Enter"){
            if (group === "food"){
                const updatedFoodOptions = [];
                this.props.foodOptions.map((foodOption) => updatedFoodOptions.push(foodOption))
                updatedFoodOptions.push({
                    id: this.props.foodOptions.length+1,
                    name: event.target.value,
                    img: Question
                })
                this.props.changeFoodOptions(updatedFoodOptions)
                this.setState({show: false})
            }
            else if (group === "smoothie"){
                const updatedIngredientOptions = [];
                this.props.ingredientOptions.map((ingredientOption) => updatedIngredientOptions.push(ingredientOption))
                updatedIngredientOptions.push({
                    id: this.props.ingredientOptions.length+1,
                    name: event.target.value,
                    img: Question
                })
                this.props.changeIngredientOptions(updatedIngredientOptions)
                this.setState({show: false})
            }
            else if (group === "flavor"){
                const updatedFlavorOptions = [];
                this.props.flavorOptions.map((flavorOption) => updatedFlavorOptions.push(flavorOption))
                updatedFlavorOptions.push({
                    id: this.props.flavorOptions.length+1,
                    name: event.target.value,
                    img: Question
                })
                this.props.changeFlavorOptions(updatedFlavorOptions)
                this.setState({subShow: false})
            }

        }
    }
    render() {
        return(
            this.state.show || this.state.subShow
            ? <div>
                New Item: <input type="text" placeholder="Add new item here" onKeyDown={(event) => this.handleAddNewEnterPress(event, this.props.group)} />
            </div>
            : (<div className="food-item-container" onClick={(event) => this.handleAddNewClick(event, this.props.group)}>
                <img src={Plus} alt="Add new"></img>
                <div><h3>Add New</h3></div>
            </div>)
        )
    }
}

const mapStateToProps = (state) => {
    return {
        foodOptions: state.foodOptions,
        flavorOptions: state.flavorOptions,
        ingredientOptions: state.ingredientOptions
    }
}

const mapDispatchToProps = {
    changeFoodOptions,
    changeFlavorOptions,
    changeIngredientOptions
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewOption);