import { connect } from "react-redux";
import ScanView from "../views/ScanView";
import { addProductToHistory } from "../actions/historyAction"

const mapDispatchToProps = (dispatch) => ({
    addProductToHistory: (product) => dispatch(addProductToHistory(product))
});

export default connect(null, mapDispatchToProps)(ScanView);