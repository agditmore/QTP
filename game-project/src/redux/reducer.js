import { challenges } from './../Data';
import {
    CHANGE_SCREEN,
    CHANGE_CHARACTER_NAME,
    CHANGE_CHARACTER_IMAGE,
    UPDATE_PLAYER_TURN,
    CHANGE_PLAYER_SCORE,
    CHANGE_COMPUTER_SCORE,
    RESET_SCORES,
    UPDATE_GAME_BOARD,
    INCREASE_PLAYER_LEVEL,
    DECREASE_COMPUTER_LIVES,
    DECREASE_PLAYER_LIVES,
    RESET_LIVES,
    CHANGE_CHALLENGE_QUESTIONS,
    ADD_KRAKEN_QUESTION,
    PLAY_EASTER_EGG,
    UPDATE_ALL_CHALLENGE_QUESTIONS,
} from './actions';

const initialState = {
    screen: 'welcome',
    characterName: 'Testing Pirate',
    characterImage: '',
    gameBoard: [],
    playerScore: 0,
    playerLives: 3,
    computerScore: 0,
    computerLives: 3,
    playerTurn: true,
    playerLevel: 1,
    challengeQuestions: challenges,
    allChallengeQuestions: challenges,
    easterEgg: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case CHANGE_SCREEN:
            return {...state, screen: action.payload};
        case CHANGE_CHARACTER_NAME:
            return {...state, characterName: action.payload};
        case CHANGE_CHARACTER_IMAGE:
            return {...state, characterImage: action.payload}
        case UPDATE_PLAYER_TURN:
            return {...state, playerTurn: action.payload};
        case UPDATE_GAME_BOARD:
            return {...state, gameBoard: action.payload};
        case CHANGE_PLAYER_SCORE:
            return {...state, playerScore: state.playerScore + action.payload};
        case CHANGE_COMPUTER_SCORE:
            return {...state, computerScore: state.computerScore + action.payload};
        case RESET_SCORES:
            return {...state, playerScore: 0, computerScore: 0};
        case INCREASE_PLAYER_LEVEL:
            return {...state, playerLevel: state.playerLevel+1};
        case DECREASE_COMPUTER_LIVES:
            return {...state, computerLives: state.computerLives-1};
        case DECREASE_PLAYER_LIVES:
            return {...state, playerLives: state.playerLives-1};
        case RESET_LIVES:
            return {...state, playerLives: action.payload.playerLives, computerLives: action.payload.computerLives};
        case CHANGE_CHALLENGE_QUESTIONS:
            return {...state, challengeQuestions: action.payload}
        case ADD_KRAKEN_QUESTION:
            return {...state, allChallengeQuestions: state.allChallengeQuestions.push(action.payload)}
        case PLAY_EASTER_EGG:
            return{...state, easterEgg: true}
        case UPDATE_ALL_CHALLENGE_QUESTIONS:
            return {...state, allChallengeQuestions: action.payload}
        default:
            return state;
    }
}

export default reducer;