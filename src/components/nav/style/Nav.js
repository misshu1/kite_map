import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    height: 4rem;
    padding: 0.5rem;
    align-items: center;
    && span {
        flex: 1;
    }
    && button {
        border: none;
        outline: none;
        height: 2rem;
        background: #4287f5;
        color: #fff;
    }
    && button:hover {
        background: #1c64d9;
    }
`;
