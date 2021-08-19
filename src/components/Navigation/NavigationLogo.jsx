import React from 'react'
import PropTypes from 'prop-types'
import { NavLogoImg, NavLogoTitle, NavLogoWrapper } from './Navigation.style'
import { StyledLink } from '../../helpers/UtilClasses.style'

const NavigationLogo = ({title}) => {
    return (
        <StyledLink to="/">
            <NavLogoWrapper>
                    <NavLogoImg />
                    <NavLogoTitle>
                        {title}
                    </NavLogoTitle>
            </NavLogoWrapper>
        </StyledLink>
    )
}

NavigationLogo.propTypes = {
    title: PropTypes.string.isRequired,
}

export default NavigationLogo
