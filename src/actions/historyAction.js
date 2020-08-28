import { ADD_PRODUCT_TO_HISTORY, SET_HISTORY } from '../constants/historyConstant';

export function addProductToHistory(product) {
    return {
        type: ADD_PRODUCT_TO_HISTORY,
        product
    }
};
export function setHistory(history) {
    return {
        type: SET_HISTORY,
        history
    }
};