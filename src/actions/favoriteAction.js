import { ADD_PRODUCT_TO_FAVORITE } from '../constants/favoriteConstant';
import { REMOVE_PRODUCT_FROM_FAVORITE } from '../constants/favoriteConstant';

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
}