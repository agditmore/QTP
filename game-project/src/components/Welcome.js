import React from 'react';
import { Button, Modal } from 'semantic-ui-react';

const Welcome = (props) => {
    return(
        <div className="welcome-page">
            <h1>
                Welcome to Game
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
    )
}

export default Welcome;