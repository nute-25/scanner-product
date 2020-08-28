import { ADD_PRODUCT_TO_FAVORITE, REMOVE_PRODUCT_FROM_FAVORITE, SET_FAVORITE } from '../constants/favoriteConstant';

export function addProductToFavorite(product) {
    return {
        type: ADD_PRODUCT_TO_FAVORITE,
        product
    }
};
export function removeProductFromFavorite(product) {
    return {
        type: REMOVE_PRODUCT_FROM_FAVORITE,
        product
    }
};
export function setFavorite(favorite) {
    return {
        type: SET_FAVORITE,
        favorite
    }
};