import React from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends React.Component {
  handleColorChangeToBox1Click = (payload) => {
    this.props.dispatch({ type: 'ASSIGN_NEW_COLOR_TO_BOX_1', payload})
  }
  handleColorChangeToBox2Click = (payload) => {
    this.props.dispatch({ type: 'ASSIGN_NEW_COLOR_TO_BOX_2', payload})
  }

  render(){
    return (
      <div>Change color block 1: 
        <button onClick={() => this.handleColorChangeToBox1Click('blue')}>Red!</button>
        <button onClick={() => this.handleColorChangeToBox1Click('yellow')}>Coral!</button>
        <button onClick={() => this.handleColorChangeToBox1Click('green')}>Orange!</button>
        <button onClick={() => this.handleColorChangeToBox1Click('purple')}>Yellow!</button>
        <button onClick={() => this.handleColorChangeToBox1Click('coral')}>Green!</button>
        <button onClick={() => this.handleColorChangeToBox1Click('orange')}>Blue!</button>
        <button onClick={() => this.handleColorChangeToBox1Click('red')}>Purple!</button>
        <div className="color-block" style={{backgroundColor: this.props.reduxState.name1}}></div>
        <div className="color-block" style={{backgroundColor: this.props.reduxState.name2}}></div>
        Change color block 2:
        <button onClick={() => this.handleColorChangeToBox2Click('red')}>Blue!</button>
        <button onClick={() => this.handleColorChangeToBox2Click('coral')}>Yellow!</button>
        <button onClick={() => this.handleColorChangeToBox2Click('orange')}>Green!</button>
        <button onClick={() => this.handleColorChangeToBox2Click('yellow')}>Purple!</button>
        <button onClick={() => this.handleColorChangeToBox2Click('green')}>Coral!</button>
        <button onClick={() => this.handleColorChangeToBox2Click('blue')}>Orange!</button>
        <button onClick={() => this.handleColorChangeToBox2Click('purple')}>Red!</button>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reduxState: state
  }
}

export default connect(mapStateToProps)(App);
