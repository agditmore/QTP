export const changeScreen = (payload) => ({ type: CHANGE_SCREEN, payload })
export const changeCharacterName = (payload) => ({ type: CHANGE_CHARACTER_NAME, payload })
export const updatePlayerTurn = (payload) => ({ type: UPDATE_PLAYER_TURN, payload })
export const updatePlayerLocation = (payload) => ({ type: UPDATE_PLAYER_LOCATION, payload })

export const CHANGE_SCREEN = 'CHANGE_SCREEN'
export const CHANGE_CHARACTER_NAME = 'CHANGE_CHARACTER_NAME'
export const UPDATE_PLAYER_TURN = 'UPDATE_PLAYER_TURN'
export const UPDATE_PLAYER_LOCATION = 'UPDATE_PLAYER_LOCATION'
