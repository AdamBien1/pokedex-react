import React, { useContext } from 'react'
import AlertContext from "../../context/alert/alertContext"
import { ThemeProvider } from 'styled-components'
import { Themes } from "../../helpers/AlertTypeThemes.style"
import { Overlay } from '../../helpers/UtilClasses.style'
import { AlertContainer, AlertHeader, AlertMessage, CloseIcon } from './Alert.style'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'

const Alert = () => {
    const {alert, clearAlert} = useContext(AlertContext)
    useLockBodyScroll(alert.active, [alert.active]);

    if(alert.active) {
        return (
            <ThemeProvider theme={Themes[alert.type+"Theme"]}>
                <Overlay onClick={clearAlert}>
                    <AlertContainer>
                        <AlertHeader gameTitle>
                            {alert.header}
                            <CloseIcon onClick={clearAlert} />
                        </AlertHeader>
                        <AlertMessage>
                            {alert.message}
                        </AlertMessage>
                    </AlertContainer>   
                </Overlay>
            </ThemeProvider>
        )
    }
}

export default Alert