import React from 'react'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import { Overlay } from '../../helpers/UtilClasses.style'
import spinner from "../../assets/Images/Spinner.gif"
import { SpinnerGif } from './Spinner.style'

const Spinner = ({loading}) => {
    useLockBodyScroll(loading, [loading])

    return (
        <Overlay>
            <SpinnerGif src={spinner} size="md"/>
        </Overlay>
    )
}

export default Spinner
