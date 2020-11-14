import { v4 } from "uuid";
import { SET_ALERT, CANCEL_ALERT } from "./constants";

export const setAlert = (msg, alertType) => dispatch => {
    const id = v4();
    dispatch({
        type: SET_ALERT,
        payload: {
            msg,
            alertType,
            id,
        },
    });
};
