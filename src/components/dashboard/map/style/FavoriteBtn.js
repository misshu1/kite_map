import styled from "styled-components";

export const FavoriteBtn = styled.button`
    width: 100%;
    background: ${props => (props.favorite ? "#f00" : "#edb747")};
    color: #fff;
    outline: none;
    border: none;
    height: 2rem;
    margin-top: 1.5rem;
`;
