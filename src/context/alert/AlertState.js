import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import {
    SET_ALERT,
    CLEAR_ALERT,
} from "../types"

const AlertState = props => {
    const initialState = {
        alert: {
            active: false,
            type: undefined,
            autoclear: false,
            header: "",
            message: "",
        }
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const setAlert = ({type, autoclear, header, message}) => {
        let payload = {
            active: true,
            type,
            autoclear,
            header,
            message,
        }

        dispatch({type: SET_ALERT, payload: payload})
    }

    const clearAlert = () => dispatch({type: CLEAR_ALERT})

    return <AlertContext.Provider
                value={{
                    alert: state.alert,

                    setAlert: setAlert,
                    clearAlert: clearAlert,
                }}
            >
                {props.children}
            </AlertContext.Provider>
}

export default AlertState;