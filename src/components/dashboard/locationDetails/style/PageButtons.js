import styled from "styled-components";

export const PageButtons = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem;
    span {
        width: 100%;
        flex: 1;
        text-align: center;
    }
    button {
        height: 2rem;
        padding: 0.5rem;
        background: #595959;
        color: #d6d8d3;
        border: none;
        outline: none;
    }
    button:hover {
        background: #4c4c4c;
    }
`;
