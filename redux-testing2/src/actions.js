export const RESET_STATE = 'RESET_STATE'
export const CHANGE_BAR_TO_RANDOM_NUMBER = 'CHANGE_BAR_TO_RANDOM_NUMBER'

export const resetState={type: RESET_STATE}
export const changeNumber = () => ({ type: 'CHANGE_BAR_TO_RANDOM_NUMBER', payload: Math.floor(Math.random()*100)})