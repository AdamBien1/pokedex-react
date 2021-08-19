import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Themes } from '../../helpers/BadgeTypeThemes.style'
import { PokemonBadgeOuter, PokemonBadgeInner } from './PokemonBadge.style'

const PokemonBadge = (props) => {
    return (
        <ThemeProvider theme={Themes[props.type+"Theme"]}>
            <PokemonBadgeOuter>
                <PokemonBadgeInner />
                {props.type}
            </PokemonBadgeOuter>
        </ThemeProvider>
    )
}

export default PokemonBadge
