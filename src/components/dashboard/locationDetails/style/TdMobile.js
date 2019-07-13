import styled from "styled-components";

export const TdMobile = styled.td`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: ${props => (props.show ? "box" : "box")};
    @media (max-width: 37.5rem) {
        && {
            display: ${props => (props.show ? "box" : "none")};
        }
    }
`;
