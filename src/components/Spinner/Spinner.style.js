import styled from "styled-components";
import { ImageTag } from "../../helpers/UtilClasses.style";

export const SpinnerGif = styled(ImageTag)`
    position: absolute;
    top: 50%;
    bottom: 50%;
    left: 0;
    right: 0;

    transform: translateY(-50%);
`