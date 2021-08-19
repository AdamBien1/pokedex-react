import React from 'react'
import { StyledLink } from '../../helpers/UtilClasses.style'
import { GithubIcon, LinkedInIcon, SocialContainer } from './Social.style'

const Social = () => {
    return (
        <SocialContainer>
            <StyledLink to={{  pathname: "https://github.com/AdamBien1" }} target="_blank">
                <GithubIcon />
            </StyledLink>
            <StyledLink to={{  pathname: "https://linkedin.com/in/adam-bień-39782021a" }} target="_blank">
                <LinkedInIcon />
            </StyledLink>
        </SocialContainer>
    )
}

export default Social
