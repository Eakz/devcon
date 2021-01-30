import { SET_ALERT, CANCEL_ALERT } from "../actions/constants";
const INITIAL_STATE = [];

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_ALERT:
            console.log('pay',payload)
            return [...state, payload];
        case CANCEL_ALERT:
            return state.filter(e => e.id !== payload);
        default:
            return state;
    }
};
