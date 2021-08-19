import React, { useContext } from 'react'
import AlertContext from "../context/alert/alertContext"
import Alert from '../components/Alert/Alert';
import useTriggerAlert from '../hooks/useTriggerAlert'

const About = () => {
    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;
    const alertPayload = {
        type: "info",
        autoclear: false,
        header: "Coming Soon :)",
        message: "This application is still under development. More content will come!"
    };
    useTriggerAlert(true, alertPayload, [])

    return (
        <div>
            {alert.active && <Alert />}
        </div>
    )
}

export default About
