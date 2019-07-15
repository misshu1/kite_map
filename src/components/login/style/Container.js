import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    && button {
        color: #fff;
        background: #3bbf4f;
        border: none;
        outline: none;
        width: 4rem;
        height: 2rem;
        margin: 0 auto;
        margin-top: 3rem;
    }
`;
