import styled from "styled-components";

export const CardWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    max-width: 300px;
    width: 100%;

    max-height: 450px;

    border-radius: 15px;
    background-color: ${props => props.theme.backgroundColorOpacity};
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, .25);
    margin: 1.5rem 0;
    cursor: pointer;
`

export const CardTitle = styled.h4`
    font-weight: bold;
    font-size: 1.2rem;

    width: 100%;
    padding: 1rem 0 .5rem;
    margin: 0;
    font-family: "PressStart2P";
    text-transform: capitalize;
    text-align: center;
    color: #fff;
    text-shadow: 2px 2px #666;

    border: 4px solid rgba(0, 0, 0, .1);
    border-top: 3px solid rgba(255, 255, 255, .1);
    background-color: ${props => props.theme.backgroundColor};
`

export const CardID = styled.span`
    color: #ddd;
    text-shadow: 1px 1px #666;
    font-size: 1rem;
    font-weight: normal;
    display: block;
    margin-bottom: .5rem;
`

export const CardImg = styled.img`
    max-width: 100%;
    height: auto;
    border-right: 4px solid rgba(0, 0, 0, .1);
    border-left: 4px solid rgba(0, 0, 0, .1);
`

export const CardBadgesWrapper = styled.div`
    text-align: center;
    padding-bottom: 10px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border: 4px solid rgba(0, 0, 0, .1);
    border-top: 3px solid rgba(255, 255, 255, .1);
    background-color: ${props => props.theme.backgroundColorOpacity};
    width: 100%;
    `

export const CardBadges = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`