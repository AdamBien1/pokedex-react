import styled from "styled-components"
import { LeadingText, SubText } from "../../helpers/UtilClasses.style"
import { TimesCircle } from "@styled-icons/fa-regular/TimesCircle";
import { sharedIconStyles } from "../../helpers/SharedStyles.style";

export const AlertContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: inline-block;
    padding: .75rem 1.5rem;
    background-color: ${props => props.theme.backgroundColor};
    color: #444;
    text-shadow: 1px 1px #aaa;
    width: auto;
    opacity: .9;

    border-radius: 4px;
    border: 12px solid rgba(0, 0, 0, .2);
    border-top: 12px solid rgba(255, 255, 255, .2);

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`

export const AlertHeader = styled(LeadingText)`
    position: relative;
    color: inherit;
    padding: .5rem;
`

export const AlertMessage = styled(SubText)`
    color: inherit;
    padding: .5rem;
`

export const CloseIcon = styled(TimesCircle)`
    ${sharedIconStyles}

    max-width: 2rem;
    max-height: 2rem;
    color: inherit;

    position: absolute;
    top:-10px;
    right: -10px;
`