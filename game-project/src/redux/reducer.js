import {
    CHANGE_SCREEN,
    CHANGE_CHARACTER_NAME,
    UPDATE_PLAYER_TURN,
    UPDATE_PLAYER_LOCATION
} from './actions';
import { gameBoard } from './../Data';

const initialState = {
    screen: 'playGame',
    characterName: 'Testing Pirate',
    gameBoard: gameBoard,
    playerScore: 0,
    playerLives: 3,
    computerScore: 0,
    computerLives: 3,
    playerTurn: true,
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_SCREEN:
            return {...state, screen: action.payload};
        case CHANGE_CHARACTER_NAME:
            return {...state, characterName: action.payload};
        case UPDATE_PLAYER_TURN:
            return {...state, playerTurn: action.payload};
        case UPDATE_PLAYER_LOCATION:
            return {...state, gameBoard: action.payload}
        default:
            return state;
    }
}

export default reducer;