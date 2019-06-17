import React from 'react';
import './App.css';
import { changeNumber } from './actions';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class App extends React.Component {

  handleClick = () => {
    this.props.changeNumber()
  }

  handleResetClick = () => {
    this.props.dispatch({type: 'RESET_STATE'})
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <button onClick={this.handleClick}>button</button>
        <div>{this.props.stuff[0].name}</div>
        <div>{this.props.location.name}</div>
        <div>{this.props.foo}</div>
        <button onClick={this.handleResetClick}>reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    foo: state.potato.foo,
    stuff: state.tomato.Stuff,
    location: state.tomato.Locations[0]
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return(
//     {
//       //action: bindActionCreators(changeNumber, dispatch) alternate way with bindActionCreators but must import from Redux
//       changeNumber: () => dispatch(changeNumber())
//     }
//   )
// }

const mapDispatchToProps = {
  changeNumber: changeNumber
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
