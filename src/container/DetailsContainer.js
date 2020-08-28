import { connect } from "react-redux";
import DetailsView from "../views/DetailsView";
import { addProductToFavorite, removeProductFromFavorite } from "../actions/favoriteAction";

const mapDispatchToProps = (dispatch) => ({
    addProductToFavorite: (product) => dispatch(addProductToFavorite(product)),
    removeProductFromFavorite: (product) => dispatch(removeProductFromFavorite(product))
});

const mapStateToProps = (state) => {
    return {
        favorite: state.favorite
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsView);