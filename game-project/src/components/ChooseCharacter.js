import React from 'react';
import { Button, Modal, Input } from 'semantic-ui-react';
import {boats} from './../Data';

class ChooseCharacter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characterName: '',
            showNameChoice: false,
            boatChoice: ''
        }
    }

    handleNameInputChange = (event) => {
        this.setState({
            characterName: event.target.value
        })
    }

    handleNameEnterPress = (event) => {
        if (event.key === "Enter" && this.state.characterName.trim() !== ''){
            this.props.changeCharacterName(this.state.characterName);
            this.setState({
                showNameChoice: true
            })
        }
    }

    handleCloseModal = () => {
        this.setState({showNameChoice: false})
    }

    handleBoatSelection = (boat) => {
        this.setState({boatChoice: boat})
    }

    handleStartClick = (newScreen, selectedBoat) => {
        this.props.changeScreen(newScreen);
        this.props.changeCharacterImage(selectedBoat);
    }

    render() {
        return(
            <div className="character-choice-container">
            <div className="image-selection-container">
                <h1>
                    Choose your watercraft!
                </h1>
                <div className="boats-container">
                {
                    boats.map((boat) =>
                        <div className="boat-card">
                            <img src={boat} alt="boat" />
                            <div className="boat-input-container"><input type="radio" name="boats" className="boat-input" checked={boat === this.state.boatChoice} onChange={()=>this.handleBoatSelection(boat)}></input></div>
                        </div>
                    )
                }
                </div></div>
                {
                this.state.boatChoice === '' ?
                null
                :
                <div className="name-selection-container">
                <h1>
                    Name your vessel!
                </h1>
                <Input focus type="text" placeholder="Type name here" onChange={this.handleNameInputChange} onKeyDown={this.handleNameEnterPress}>
                </Input> 
                    <div>
                        <br />
                        <Modal open={this.state.showNameChoice} size='tiny' closable="true">
                            <Modal.Header><h2>Thar she blows!</h2></Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <div className="character-choice-card">
                                    <h2>
                                        You've chosen: {this.props.reduxCharacterName} Ship 
                                    </h2>
                                    <div className="character-image-choice-container"><img src={this.state.boatChoice} alt="player ship" /></div>
                                    </div>
                                    <br />
                                </Modal.Description>
                                <Modal.Actions>
                                <Button primary onClick={() => this.handleStartClick("playGame", this.state.boatChoice)}>Let's get sailing!</Button>
                                <Button onClick={() => this.handleCloseModal()}>Change my ship's name</Button>
                                </Modal.Actions>
                            </Modal.Content>
                        </Modal>
                    </div>
                    </div>
                }
            </div>
        )
    }
}

export default ChooseCharacter;