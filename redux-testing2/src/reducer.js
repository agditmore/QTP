import { combineReducers } from 'redux';

const initialState1 = {
    foo: 'bar',
    whiz: 'bang'}

const initialState2 = {
    Stuff: [
        {
            name: 'Ping Pong table'
        }
    ],
    Locations: [
        {
            name: 'Living Room'
        }
    ]
}

export const reducer1 = (state = initialState1, action) => {
    switch(action.type){
        case 'RESET_STATE':
            return initialState1;
        case 'CHANGE_BAR_TO_RANDOM_NUMBER':
            return {...state, foo: action.payload};
        default:
            return state;
    }
}

export const reducer2 = (state = initialState2, action) => {
    switch(action.type){
        case 'RESET_STATE':
            return initialState2;
        case 'CHANGE_BAR_TO_RANDOM_NUMBER':
            return {...state, foo: action.payload};
        default:
            return state;
    }
}

export const rootReducer = combineReducers({potato: reducer1, tomato: reducer2})
