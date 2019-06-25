export const changeScreen = (payload) => ({ type: CHANGE_SCREEN, payload })
export const changeCharacterName = (payload) => ({ type: CHANGE_CHARACTER_NAME, payload })
export const changeCharacterImage = (payload) => ({ type: CHANGE_CHARACTER_IMAGE, payload })
export const updatePlayerTurn = (payload) => ({ type: UPDATE_PLAYER_TURN, payload })
export const changePlayerScore = (payload) => ({ type: CHANGE_PLAYER_SCORE, payload })
export const changeComputerScore = (payload) => ({ type: CHANGE_COMPUTER_SCORE, payload })
export const resetScores = () => ({ type: RESET_SCORES })
export const updateGameBoard = (payload) => ({ type: UPDATE_GAME_BOARD, payload })
export const increasePlayerLevel = () => ({ type: INCREASE_PLAYER_LEVEL })
export const decreaseComputerLives = () => ({ type: DECREASE_COMPUTER_LIVES })
export const decreasePlayerLives = () => ({ type: DECREASE_PLAYER_LIVES })
export const resetLives = (payload) => ({ type: RESET_LIVES, payload })
export const changeChallengeQuestions = (payload) => ({ type: CHANGE_CHALLENGE_QUESTIONS, payload })
export const addKrakenQuestion = (payload) => ({ type: ADD_KRAKEN_QUESTION, payload })


export const CHANGE_SCREEN = 'CHANGE_SCREEN'
export const CHANGE_CHARACTER_NAME = 'CHANGE_CHARACTER_NAME'
export const CHANGE_CHARACTER_IMAGE = 'CHANGE_CHARACTER_IMAGE'
export const UPDATE_PLAYER_TURN = 'UPDATE_PLAYER_TURN'
export const CHANGE_PLAYER_SCORE = 'CHANGE_PLAYER_SCORE'
export const CHANGE_COMPUTER_SCORE = 'CHANGE_COMPUTER_SCORE'
export const RESET_SCORES = 'RESET_SCORES'
export const UPDATE_GAME_BOARD = 'UPDATE_GAME_BOARD'
export const INCREASE_PLAYER_LEVEL = 'INCREASE_PLAYER_LEVEL'
export const DECREASE_PLAYER_LIVES = 'DECREASE_PLAYER_LIVES'
export const DECREASE_COMPUTER_LIVES = 'DECREASE_COMPUTER_LIVES'
export const RESET_LIVES = 'RESET_LIVES'
export const CHANGE_CHALLENGE_QUESTIONS = 'CHANGE_CHALLENGE_QUESTIONS'
export const ADD_KRAKEN_QUESTION = 'ADD_KRAKEN_QUESTION'
