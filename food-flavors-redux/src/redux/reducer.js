import { foodOptions, flavorOptions, ingredientOptions } from './../Data';
import { 
    CHANGE_CREATED_FOODS, 
    CHANGE_CREATED_SMOOTHIES,
    CHANGE_SCREEN,
    CHANGE_FOOD_OPTIONS,
    CHANGE_FLAVOR_OPTIONS,
    CHANGE_INGREDIENT_OPTIONS, 
} from './actions';

const initialState = {
    foodOptions,
    flavorOptions,
    ingredientOptions,
    createdFoods: [],
    createdSmoothies: [],
    screen: "foodBuilder"
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_CREATED_FOODS:
            return {...state, createdFoods: action.payload};
        case CHANGE_CREATED_SMOOTHIES:
            return {...state, createdSmoothies: action.payload};
        case CHANGE_SCREEN:
            return {...state, screen: action.payload};
        case CHANGE_FOOD_OPTIONS:
            return {...state, foodOptions: action.payload};
        case CHANGE_FLAVOR_OPTIONS:
            return {...state, flavorOptions: action.payload};
        case CHANGE_INGREDIENT_OPTIONS:
            return {...state, ingredientOptions: action.payload};
        default:
            return state;
    }
}

export const getNumberOfItemsInCart = (state) => {
    return state.createdFoods.filter((createdFood) => createdFood.numberInCart > 0).length + state.createdSmoothies.filter((createdSmoothie) => createdSmoothie.numberInCart > 0).length
}

export default reducer;