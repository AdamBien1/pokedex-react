import React from 'react'
import PokemonBadge from '../PokemonBadge/PokemonBagde'
import { Themes } from '../../helpers/BadgeTypeThemes.style'
import { CardBadges, CardBadgesWrapper, CardID, CardImg, CardTitle, CardWrapper } from './PokemonCard.style'
import { ThemeProvider } from 'styled-components'

const PokemonCard = ({pokemon, forwardRef}) => {
    return (
        <ThemeProvider theme={Themes[pokemon.types[0].type.name+"Theme"]}>
            <CardWrapper ref={forwardRef}>
                <CardTitle>
                    <CardID>#{pokemon.id}</CardID>
                    {pokemon.name}
                </CardTitle>
                <CardImg src={pokemon.img} alt={pokemon.name}/>
                <CardBadgesWrapper>
                    <CardBadges>
                        {pokemon.types.map((type) => (
                            <PokemonBadge key={type.slot} type={type.type.name}/>
                        ))}
                    </CardBadges>
                </CardBadgesWrapper>
            </CardWrapper>
        </ThemeProvider>
    )
}

export default PokemonCard
