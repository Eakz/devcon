import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {
    console.log('alerts',alerts);
    return (
        alerts !== null &&
        alerts?.length > 0 &&
        alerts?.map(e => (
            <div key={e?.id} className={`alert alert-${e.alertType}`}>
                {e?.msg}
            </div>
        ))
    );
};

Alert.propTypes = {
    alertReducer: PropTypes.array.isRequired,
};
const mapStateToProps = state => {
    return {
        alerts: state.alertReducer,
    };
};
export default connect(mapStateToProps)(Alert);
