import { connect } from "react-redux";
import HistoryView from "../views/HistoryView";

const mapStateToProps = (state) => {
    return {
        history: state.history
    }
};

export default connect(mapStateToProps)(HistoryView);