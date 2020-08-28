import { ADD_PRODUCT_TO_HISTORY } from '../constants/historyConstant';

const historyReducer = (state = {}, action) => {
    switch(action.type) {
        case ADD_PRODUCT_TO_HISTORY:
            const new_state = {...state}
            new_state[action.product.id] = action.product
            return new_state;
        default:
            return state;
    }
}

export default historyReducer;