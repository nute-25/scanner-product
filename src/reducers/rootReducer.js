import { combineReducers } from "redux";
import historyReducer from "./historyReducer";
import favoriteReducer from "./favoriteReducer";

const rootReducer = combineReducers(
    {
        history: historyReducer,
        favorite: favoriteReducer
    }
);

export default rootReducer;