import React, { Component } from 'react';
import DateInfoBox from './DateInfoBox';

const style = {
  height: '50px',
  width: '100px',
  padding: '12px',
  textAlign: 'center'
}

class App extends Component {
  state = {}

  handleContextDate = (e) => {
    e.preventDefault();

    const { clientX : x, clientY : y } = e;
    const dataInfoBoxShow = true;
    
    this.setState({ dataInfoBoxShow, x, y });
  }

  changeMenuShow = () => {
    this.setState({
        menuShow: !this.state.menuShow
    })
  }

  render() {
    const { menuShow, x, y } = this.state;
    return (
      <div id="button-div">
      <button style={style} onContextMenu={this.handleContextDate} onClick={this.changeMenuShow}>
        Time Periods
        <DateInfoBox show={menuShow} x={x} y={y} >
          <div className="menu-item">3500-2900 BC EM I (Early Minoan)</div>
          <hr />
          <div className="menu-item">2900-2300 BC EM II (Early Minoan)</div>
          <hr />
          <div className="menu-item">2300-2100 BC EM III (Early Minoan)</div>
          <hr />
          <div className="menu-item">2100-1900 BC MM IA (Middle Minoan)</div>
          <hr />
          <div className="menu-item">1900-1800 BC MM IB (Middle Minoan)</div>
          <hr />
          <div className="menu-item">1800-1750 BC MM IIA (Middle Minoan)</div>
          <hr />
          <div className="menu-item">1750-1700 BC MM IIB (Middle Minoan)</div>
          <hr />
          <div className="menu-item">1700-1650 BC MM IIIA (Middle Minoan)</div>
          <hr />
          <div className="menu-item">1650-1600 BC MM IIIB (Middle Minoan)</div>
          <hr />
          <div className="menu-item">1600-1500 BC LM IA (Late Minoan)</div>
          <hr />
          <div className="menu-item">1500-1450 BC LM IB (Late Minoan)</div>
          <hr />
          <div className="menu-item">1450-1400 BC LM II (Late Minoan)</div>
          <hr />
          <div className="menu-item">1400-1350 BC LM IIIA (Late Minoan)</div>
          <hr />
          <div className="menu-item">1350-1100 BC LM IIIB (Late Minoan)</div>
          <hr />
          <div className="menu-item">1150-1100 BC Subminoan</div>
          <hr />
          <div className="menu-item">1100-1000 BC Sub-Mycenaean</div>
          <hr />
          <div className="menu-item">1050-900 BC Protogeometric</div>
          <hr />
          <div className="menu-item">900-700 BC Geometric</div>
          <hr />
          <div className="menu-item">700-500 BC Archaic</div>
          <hr />
          <div className="menu-item">500-323 BC Classical</div>
          <hr />
          <div className="menu-item">323-31 BC Hellenistic</div>
        </DateInfoBox>
      </button>
      </div>
    );
  }
}

export default App;
