import { v4 } from "uuid";
import { SET_ALERT, CANCEL_ALERT } from "./constants";

export const setAlert = (msg, alertType, timer = 5555) => dispatch => {
    const id = v4();
    dispatch({
        type: SET_ALERT,
        payload: {
            msg,
            alertType,
            id,
        },
    });
    setTimeout(() => dispatch({ type: CANCEL_ALERT, payload: id }, timer));
};
