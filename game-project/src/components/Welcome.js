import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import Ocean from './../images/Ocean.jpg';


const Welcome = (props) => {
    const style = {
        backgroundImage: `url(${Ocean})`,
    }
    return(
        <div className="welcome-page" style={style}>
            <div className="welcome-text">
            <h1>
                Welcome to Shipwreact
            </h1>
            <h2>
                Are you ready to begin your sea voyage?
            </h2>
            <Button primary onClick={() => props.changeScreen("chooseCharacter")}>Aye, matey!</Button>
            <Modal trigger={<Button>Yikes! No!</Button>}>
                <Modal.Content>
                    <h3>Well, best get yourself back to shore! Farewell!</h3>
                </Modal.Content>
            </Modal>
            </div>
        </div>
    )
}

export default Welcome;