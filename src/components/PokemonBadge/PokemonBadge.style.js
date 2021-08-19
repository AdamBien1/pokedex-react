import styled from "styled-components";

export const PokemonBadgeOuter = styled.span`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    padding: .25rem 1rem;
    margin: .5rem .5rem;
    border-radius: 5px;
    border: 4px solid rgba(0, 0, 0, .25);
    border-top: 4px solid rgba(255, 255, 255, .25);
    background-color: ${props => props.theme.backgroundColor};

    font-size: .7rem;
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
    opacity: .9;
    border-radius: 50%;
`
