import styled from "styled-components";
import pokeball from "../../assets/Images/pokeball.png"
import { SearchBarContainer } from "../SearchBar/SearchBar.style";

export const Nav = styled.nav`
    display: block;
    overflow: hidden;
    position: sticky;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;


    width: 100%;
    height: 80px;
    margin: 0;
    padding: 0 1rem;
    background-color: #CC0000;
    color: #fff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom: 4px solid rgba(0, 0, 0, .25);
    border-top: 4px solid rgba(255, 255, 255, .25);
    box-shadow: 0 15px 25px -10px rgba(0, 0, 0, .25);

    @media (max-width: 1024px) {
        height: 200px;
        padding: 0;
    }
`

export const NavLayout = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: space-evenly;

        & ${SearchBarContainer} {
            order: 3;
        }
    }
`

export const NavLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 .5rem;
    cursor: pointer;

    @media screen and (min-width: 1440px) {
        margin: 0 .5rem;
    }

    @media screen and (max-width: 1024px) {
        margin: .5rem 1rem;
    }

    @media screen and (max-width: 768px) {
        margin: 1rem .5rem;
    }
`

export const NavLogoTitle = styled.h3`
    font-family: "PressStart2P";
    font-size: 1.2rem;
    padding: 0 .75rem;
    color: #fff;
    text-transform: capitalize;
    text-align: center;
    text-shadow: 4px 4px #666;

    @media screen and (min-width: 1440px) {
        font-size: 1.75rem;
    }

    @media screen and (max-width: 1024px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.25rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 360px) {
        font-size: 1rem;
    }
`

export const NavLogoImg = styled.img.attrs(props => ({
    src: pokeball,
}))`
    display: inline-block;
    height: 60px;
    width: 60px;
    object-fit: contain;
    margin: auto;
    border-radius: 50%;
    box-shadow: -4px -2px 4px 0px rgba(255, 255, 255, .4),
    2px 1px 8px -2px rgba(0, 0, 0, .4);
    z-index: 999;

    @media screen and (max-width: 1024px) {
        height: 50px;
        width: 50px;
    }
    
    @media screen and (max-width: 768px) {
        height: 45px;
        width: 45px;
    }

    @media screen and (max-width: 480px) {
        height: 40px;
        width: 40px;
    }
`

export const NavLinks = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: auto;
`

export const NavLinkItem = styled.li`
    position: relative;
    display: inline-block;
    font-family: "PressStart2P";
    font-size: .8rem;
    font-weight: bold;
    padding: 0 .5rem;
    color: #fff;
    text-transform: capitalize;
    text-align: center;
    text-shadow: 4px 4px #666;
    cursor: pointer;

    &:after {
        content: '';
        position: absolute;
        left: 10%;
        top: 150%;
        width: 0;
        height: 2px;
        background-color: #fff;
        border: 0px solid rgba(0, 0, 0, 0);
        border-top: 0px solid rgba(255, 255, 255, 0);
        transition: all 300ms ease-in-out;
    }

    &:hover:after {
        width: 80%;
        border: 2px solid rgba(0, 0, 0, .25);
        border-top: 2px solid rgba(255, 255, 255, .25);
    }

    @media screen and (min-width: 1440px) {
        font-size: 1.2rem;
        padding: 0 1rem;
    }

    @media screen and (max-width: 1024px) {
        font-size: 1.2rem;
        padding: 0 1rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        padding: 0 1rem;
    }
    
    @media screen and (max-width: 480px) {
        font-size: .8rem;
        padding: 0 .5rem;
    }
`