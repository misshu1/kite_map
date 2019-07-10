import styled from "styled-components";

export const Form = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    p {
        margin: 0.5rem 0;
    }
    @media (min-width: 15rem) {
        && {
            width: 15rem;
        }
    }
`;
