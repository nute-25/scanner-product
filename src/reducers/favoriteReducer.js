import { ADD_PRODUCT_TO_FAVORITE, REMOVE_PRODUCT_FROM_FAVORITE, SET_FAVORITE } from '../constants/favoriteConstant';

const favoriteReducer = (state = {}, action) => {
    const new_state = {...state}

    switch(action.type) {
        case ADD_PRODUCT_TO_FAVORITE:
            new_state[action.product.id] = action.product
            return new_state;
        case REMOVE_PRODUCT_FROM_FAVORITE:
            delete new_state[action.product.id];
            return new_state;
        case SET_FAVORITE:
            return action.favorite;
        default:
            return state;
    }
}

export default favoriteReducer;