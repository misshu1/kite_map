import styled from "styled-components";

export const FilterButtons = styled.td`
    cursor: pointer;
    color: #d6d8de;
    margin: 0 0.1rem;
    border-radius: 0.5rem 0.5rem 0 0;
    background: ${props => (props.selected ? "#6d6d6e" : "#333")};
`;
