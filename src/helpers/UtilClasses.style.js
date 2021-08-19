import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

export const App = styled.div`

`

export const Container = styled.div`
    max-width: 1320px;
    padding: 20px;
    margin: auto;

    @media (max-width: 576px) {
        max-width: 100%;
    }

    @media (max-width: 768px) {
        max-width: 540px;
    }

    @media (max-width: 992px) {
        max-width: 720px;
    }

    @media (max-width: 1200px) {
        max-width: 960px;
    }

    @media (max-width: 1400px) {
        max-width: 1140px;
    }
`

const blink = keyframes`
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #fff;
    }
`

export const CaretUnderscore = styled.span`
    animation: ${blink} 1s step-end infinite;
    border-bottom: 2px solid white;
`

export const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const MainHeader = styled.h1`
    font-size: ${props => props.fontSize ? props.fontSize : "4rem"};
    font-family: ${props => props.fontFamily ? props.fontFamily : "Roboto, sans-serif"};
    font-weight: ${props => props.fontWeight ? props.fontWeigth : 600};
    color: ${props => props.color ? props.color : "#FFF"};
    text-align: ${props => props.textAlign ? props.textAlign : "center"};
    text-transform: ${props => props.textTransform ? props.textTransform : "capitalize"};

    margin: 1rem 0;
    line-height: 1.6;

    ${props => props.gameTitle && css`
        font-family: "PressStart2P";
        text-shadow: 4px 4px #666;
    `};

    @media screen and (max-width: 768px) {
        font-size: ${props => props.fontSize ? `calc(${props.fontSize} * 9 / 10)` : `calc(4rem * 9 / 10)`};
    }

    @media screen and (max-width: 420px) {
        font-size: ${props => props.fontSize ? `calc(${props.fontSize} * 8 / 10)` : `calc(4rem * 8 / 10)`};
    }
`

export const SubHeader = styled.h2`
    font-size: ${props => props.fontSize ? props.fontSize : "2.5rem"};
    font-family: ${props => props.fontFamily ? props.fontFamily : "Roboto, sans-serif"};
    font-weight: ${props => props.fontWeight ? props.fontWeigth : 400};
    color: ${props => props.color ? props.color : "#000"};
    text-align: ${props => props.textAlign ? props.textAlign : "center"};
    text-transform: ${props => props.textTransform ? props.textTransform : "capitalize"};

    margin: 1rem 0;

    @media screen and (max-width: 768px) {
        font-size: ${props => props.fontSize ? `calc(${props.fontSize} * .9)` : `calc{2.5rem * .9)`};
    }

    
    @media screen and (max-width: 420px) {
        font-size: ${props => props.fontSize ? `calc(${props.fontSize} * 8 / 10)` : `calc(2.5rem * 8 / 10)`};
    }
`

export const LeadingText = styled.p`
    font-size: ${props => props.fontSize ? props.fontSize : "1.8rem"};
    font-family: ${props => props.fontFamily ? props.fontFamily : "Roboto, sans-serif"};
    font-weight: ${props => props.fontWeight ? props.fontWeigth : 400};
    color: ${props => props.color ? props.color : "#000"};
    text-align: ${props => props.textAlign ? props.textAlign : "center"};
    text-transform: ${props => props.textTransform ? props.textTransform : "none"};

    margin: .5rem 0;
    padding: .5rem;

    
    @media screen and (max-width: 768px) {
        font-size: ${props => props.fontSize ? `calc(${props.fontSize} * .9)` : `calc{1.8rem * .9)`};
    }

    
    @media screen and (max-width: 420px) {
        font-size: ${props => props.fontSize ? `calc(${props.fontSize} * 8 / 10)` : `calc(1.8rem * 8 / 10)`};
    }
`

export const SubText = styled.p`
    font-size: ${props => props.fontSize ? props.fontSize : "1.2rem"};
    font-family: ${props => props.fontFamily ? props.fontFamily : "Roboto, sans-serif"};
    font-weight: ${props => props.fontWeight ? props.fontWeigth : 400};
    color: ${props => props.color ? props.color : "#000"};
    text-align: ${props => props.textAlign ? props.textAlign : "center"};
    text-transform: ${props => props.textTransform ? props.textTransform : "none"};

    margin: 0;
    padding: 0;
`

export const Card = styled.div`
    border-radius: ${props => props.borderRadius ? props.borderRadius : "0px"};
    border-width: ${props => props.borderWidth ? props.borderWidth : "1px"};
    border-color: ${props => props.borderColor ? props.borderColor : "#000"};
    border-style: ${props => props.borderStyle ? props.borderStyle : "solid"};


    background-color: ${props => props.backgroundColor ? props.backgroundColor : "transparent"};

    display: block;
    overflow: hidden;
    margin: 1rem 0;
    padding: 1rem;

    ${props => props.gameBorder && css`
        border-radius: ${props => props.borderRadius ? props.borderRadius : '15px'} !important;
        border-style: ${props => props.borderStyle ? props.borderStyle : "solid"} !important;
        border-width: ${props => props.borderWidth ? props.borderWidth : "4px"} !important;
        border-color: rgba(0, 0, 0, .25) !important;
        border-top-color: rgba(255, 255, 255, .25) !important;

        background-color: ${props => props.backgroundColor ? props.backgroundColor : "#eee"};
    `};

    ${props => props.boxShadow && css`
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, .25);
    `};
`

export const ImageTag = styled.img`
    display: block;
    width: 350px;
    height: auto;
    margin: 1rem auto;
    object-fit: contain;

    opacity: ${props => props.opacity ? props.opacity : 1};
    border-radius: ${props => props.borderRadius ? props.borderRadius : 0};

    ${props => props.size === "small" && css`
        width: 250px;
    `};

    ${props => props.size === "medium" && css`
        width: 350px;
        
    `};

    ${props => props.size === "large" && css`
        width: 450px;
    `};

    ${props => props.size === "block" && css`
        width: 100%;
    `};
`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: block;
    overflow: hidden;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
`