import React from 'react'
import { StyledLink } from '../../helpers/UtilClasses.style'
import useValidPage from '../../hooks/useValidPage'
import SearchBar from '../SearchBar/SearchBar'
import Social from '../Social/Social'
import { NavLinkItem, NavLinks } from './Navigation.style'
import NavigationBar from './NavigationBar'
import NavigationLogo from './NavigationLogo'

const Navigation = () => {
    return (
        <NavigationBar>
            <NavigationLogo title="Pokedex React"/>
            {useValidPage() && <SearchBar />}
            <NavLinks>
                <StyledLink to="/home">
                    <NavLinkItem>
                        Home
                    </NavLinkItem>
                </StyledLink>
                <StyledLink to="/about">
                    <NavLinkItem>
                        About
                    </NavLinkItem>
                </StyledLink>
                <Social />
            </NavLinks>
        </NavigationBar>
    )
}

export default Navigation
