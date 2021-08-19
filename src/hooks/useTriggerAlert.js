import { useEffect, useContext } from "react";
import AlertContext from "../context/alert/alertContext";

export default function useTriggerAlert(trigger, payload, dependencyArr = []) {
    const alertContext = useContext(AlertContext);

    useEffect(() => {
       if(trigger) {
           alertContext.setAlert(payload)
       } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencyArr)
}