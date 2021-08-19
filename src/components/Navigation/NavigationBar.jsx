import React from 'react'
import { Nav, NavLayout } from './Navigation.style'

const NavigationBar = (props) => {
    return (
        <Nav>
            <NavLayout>
                {props.children}
            </NavLayout>
        </Nav>
    )
}

export default NavigationBar
