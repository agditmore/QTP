const initialState = {
    name1: 'white',
    name2: 'white'
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ASSIGN_NEW_COLOR_TO_BOX_1':
            return {
                ...state,
                name1: action.payload
            };
        case 'ASSIGN_NEW_COLOR_TO_BOX_2':
            return {
                ...state,
                name2: action.payload
            }
        default:
            return initialState;
    }
}

export default reducer;