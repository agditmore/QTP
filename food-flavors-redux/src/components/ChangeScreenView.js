import React from 'react';
import { connect } from 'react-redux';
import { changeScreen } from './../redux/actions';
import { getNumberOfItemsInCart } from './../redux/reducer';
import Button from '@material-ui/core/Button';


class ChangeScreenView extends React.Component {

    handleChangeScreen = () => {
        this.props.changeScreen(this.props.newScreen)
    }

    render() {
        return(
            <Button variant="contained" color="tertiary" onClick={() => this.handleChangeScreen()}>See {this.props.newScreen === "cart" ? ('Cart ('+this.props.numberOfItemsInCart+' items)') : this.props.newScreen === "foodBuilder" ? ("Food Creator") : ("Smoothie Creator")}</Button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        screen: state.screen,
        numberOfItemsInCart: getNumberOfItemsInCart(state)
    }
}

const mapDispatchToProps = {
    changeScreen
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeScreenView);