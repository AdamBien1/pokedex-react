import { css } from "styled-components"

export const sharedIconStyles = css`
position: relative;
display: inline-block;
width: 2.5rem;
height: 2.5rem;
color: #fff;
margin: 0 .5rem;
cursor: pointer;
transition: opacity 300ms ease-in;

&:hover {
    opacity: .8;
}

@media screen and (min-width: 1440px) {
    width: 3rem;
    height: 3rem;
    margin: 0 1rem;
}

@media screen and (max-width: 768px) {
    width: 2rem;
    height: 2rem;
}

@media screen and (max-width: 480px) {
    width: 1.5rem;
    height: 1.5rem;
}
`
