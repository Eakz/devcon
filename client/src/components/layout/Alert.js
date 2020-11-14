import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = props => {
    const alerts = [props.alerts[0].alerts];
    console.log("ASDASDAS", props.alerts[0].alerts?.id);
    return (
        alerts !== null &&
        alerts?.length > 0 &&
        alerts?.map(e => (
            <div key={e?.id} className={`alert alert-${alert.alertType}`}>
                {e?.msg}
            </div>
        ))
    );
};

Alert.propTypes = {
    alertReducer: PropTypes.array.isRequired,
};
const mapStateToProps = state => {
    console.log("STATE IN AL", state);
    return {
        alerts: [state.alertReducer],
    };
};
export default connect(mapStateToProps)(Alert);
