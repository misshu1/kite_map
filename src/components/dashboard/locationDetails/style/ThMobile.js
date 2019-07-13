import styled from "styled-components";

export const ThMobile = styled.th`
    display: ${props => (props.show ? "box" : "box")};
    @media (max-width: 37.5rem) {
        && {
            display: ${props => (props.show ? "box" : "none")};
        }
    }
`;
