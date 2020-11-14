import { SET_ALERT, CANCEL_ALERT } from "../actions/constants";
const INITIAL_STATE = [];

export default (state = INITIAL_STATE, { type, payload }) => {
    console.log("state", state);
    console.log("type", type);
    console.log("payload", payload);
    switch (type) {
        case SET_ALERT:
            return { ...state, alerts: payload };
        case CANCEL_ALERT:
            return state.filter(e => e.id !== payload);
        default:
            return state;
    }
};
