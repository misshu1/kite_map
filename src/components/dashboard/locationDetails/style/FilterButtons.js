import styled from "styled-components";

export const FilterButtons = styled.td`
    cursor: pointer;
    color: ${props => (props.selected ? "#fff" : "#d6d8de")};
    background: ${props => (props.selected ? "#6d6d6e" : "#333")};
    margin-right: 0.15rem;
    border-radius: 0.5rem 0.5rem 0 0;
    &&:hover {
        color: #fff;
    }
`;
