import { connect } from "react-redux";
import FavoriteView from "../views/FavoriteView";

const mapStateToProps = (state) => {
    return {
        favorite: state.favorite
    }
};

export default connect(mapStateToProps)(FavoriteView);