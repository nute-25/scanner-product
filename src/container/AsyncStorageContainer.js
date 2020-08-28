import { connect } from "react-redux";
import AsyncStorageManager from "../components/AsyncStorageManager";
import { setHistory } from "../actions/historyAction";
import { setFavorite } from "../actions/favoriteAction";

const mapStateToProps = (state) => {
    return {
        favorite: state.favorite,
        history: state.history
    }
};

const mapDispatchToProps = (dispatch) => ({
    setHistory: (history) => dispatch(setHistory(history)),
    setFavorite: (favorite) => dispatch(setFavorite(favorite))
});

export default connect(mapStateToProps, mapDispatchToProps)(AsyncStorageManager);