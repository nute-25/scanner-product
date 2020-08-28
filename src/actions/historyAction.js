import { ADD_PRODUCT_TO_HISTORY } from '../constants/historyConstant';

export function addProductToHistory(product) {
    return {
        type: ADD_PRODUCT_TO_HISTORY,
        product
    }
};