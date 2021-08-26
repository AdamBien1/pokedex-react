import styled from "styled-components";

export const PokemonBadgeOuter = styled.span`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    padding: .25rem .75rem;
    margin: .5rem;
    border-radius: 25px;
    border: solid 2px ${props => props.theme.backgroundColor};
    background-color: ${props => props.theme.backgroundColorOpacity};

    font-size: .7rem;
    text-shadow: .5px .5px #bbb;
    font-family: "PressStart2P";
    color: #fff;
    text-transform: uppercase;
`

export const PokemonBadgeInner = styled.img.attrs(props => ({
    src: props.theme.icon,
}))`
    width: 100%;
    display: inline-block;
    margin-right: .5rem;
    border-radius: 50%;
`
