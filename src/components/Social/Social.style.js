import styled from "styled-components";
import { Github } from "@styled-icons/bootstrap/Github";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
import { sharedIconStyles } from "../../helpers/SharedStyles.style";

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 1rem;
    width: auto;

    @media screen and (max-width: 1440px) {
        padding: 0 .5rem;
    }
`

export const GithubIcon = styled(Github)`
        ${sharedIconStyles}
    `

export const LinkedInIcon = styled(Linkedin)`
    ${sharedIconStyles}
`