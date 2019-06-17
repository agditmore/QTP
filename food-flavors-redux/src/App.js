import React from 'react';
import './App.css';
import FoodBuilderPage from './components/FoodBuilderPage';
import CartPage from './components/cartComponents/CartPage';
import SmoothieBuilderPage from './components/SmoothieBuilderPage';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return(
      this.props.screen === "foodBuilder" ?
      (
        <FoodBuilderPage />
      )
      : this.props.screen === "cart" ?
      (
        <CartPage />
      )
      :
      (
        <SmoothieBuilderPage />
      )
    )
  }
}

const mapStateToProps = (state) => {
  return {screen: state.screen}
}

export default connect(mapStateToProps)(App);
