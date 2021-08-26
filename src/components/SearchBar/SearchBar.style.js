import styled from "styled-components";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt"
import { Container } from "../../helpers/UtilClasses.style";
import { sharedIconStyles } from "../../helpers/SharedStyles.style";

export const SearchBarContainer = styled(Container)`
    margin: 0;
    width: 30vw;

    @media screen and (max-width: 1024px) {
        width: 60vw;
        padding: 0 20px;
    }

    @media screen and (max-width: 768px) {
        width: 80vw;
    }

    @media screen and (max-width: 480px) {
        width: 100vw;
    }
`

export const SearchBarForm = styled.form`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    margin: 1rem auto;
    width: 100%;
    height: auto;
    border: 4px solid rgba(0, 0, 0, .25);
    border-top: 4px solid rgba(255, 255, 255, .25);
    background-color: #fff;

    @media screen and (max-width: 1024px) {
        margin: .5rem auto;
    }

    @media screen and (max-width: 768px) {
        margin: 0 auto;
    }
    `

export const SearchBarPlaceholder = styled.div`
    position: absolute;
    display: inline-flex;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 1;

    width: 100%;
    height: auto;

    padding: .1rem .5rem;
    align-items: center;
    
    color: #777;
    font-size: .9rem;
    font-family: "PressStart2P";
    font-weight: 200;
    white-space: nowrap;
    transition: opacity 250ms ease-in-out, transform 2s ease;

    @media screen and (max-width: 1024px) {
        width: calc(100% - 35px);
        font-size: .8rem;
    }
`

export const SearchBarField = styled.input`
    height: auto;
    width: calc(100% - 45px);
    padding: .1rem .5rem;
    background-color: transparent;
    color: #333;

    z-index: 999;
    font-size: 1rem;
    font-family: "PressStart2P";
    font-weight: 200;

    outline: none;
    border: none;

    &:focus {
        outline-style: none;
        box-shadow: none;

        ~${SearchBarPlaceholder} {
            opacity: 0;
        }
    }
    
    &:hover {
        ~${SearchBarPlaceholder} {
            transform: ${props => props.overflowX}
        }
    }

    @media screen and (max-width: 1024px) {
        width: calc(100% - 35px);
        font-size: .8rem;
    }
`


export const MagnifyingGlassIcon = styled(SearchAlt)`
    ${sharedIconStyles}
    margin: 0 !important;
    padding: 0;
    
    color: #333;
    background-color: #fff;
    `

export const SearchBarButton = styled.button`
    padding: 0 5px 0 15px;
    z-index: 999;
    width: auto;
    height: 100%;
    background-color: #fff;
    border: none;
    outline: none;
`