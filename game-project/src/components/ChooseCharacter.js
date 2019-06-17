import React from 'react';

class ChooseCharacter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characterName: '',
            showNameChoice: false
        }
    }

    handleNameInputChange = (event) => {
        this.setState({
            characterName: event.target.value
        })
    }

    handleNameEnterPress = (event) => {
        if (event.key === "Enter"){
            this.props.changeCharacterName(this.state.characterName);
            this.setState({
                showNameChoice: true
            })
        }
    }

    render() {
        return(
            <div>
                <h1>
                    Name your vessel
                </h1>
                <input type="text" placeholder="Type name here" onChange={this.handleNameInputChange} onKeyDown={this.handleNameEnterPress}></input>
                {
                    this.state.showNameChoice === true ?
                    <div>
                        <h2>You've chosen {this.props.reduxCharacterName}</h2>
                        <button onClick={() => this.props.changeScreen("playGame")}>Let's get sailing!</button>
                    </div>
                    : null
                }
            </div>
        )
    }
}

export default ChooseCharacter;