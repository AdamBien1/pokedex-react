import styled from "styled-components";

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-gap: 20px;

    align-items: center;
    justify-content: center;

    @media (max-width: 1300px) {
        grid-template-columns: repeat(3, 300px);
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 300px);
    }

    @media (max-width: 700px) {
        grid-template-columns: repeat(1,300px);
    }
`