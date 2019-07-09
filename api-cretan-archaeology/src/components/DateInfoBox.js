import React from 'react';

class DateInfoBox extends React.Component {
  state = {
  }

  showDateInfoBox = () => {
    this.setState({ 
        show: !this.state.show 
    });
  }

  componentWillReceiveProps ({ show }) {
    this.showDateInfoBox(show);
  }
  
  render() {
    const { x, y, show : dateInfoBoxShow } = this.props;
    const { show = dateInfoBoxShow } = this.state;
    const dateInfoBoxStyle = {
      top: y,
      left: x
    };

    return show ?
      (
        <div style={dateInfoBoxStyle} className="menu">
          {this.props.children}
        </div>
      ) :
      null;
  }
}

export default DateInfoBox;
