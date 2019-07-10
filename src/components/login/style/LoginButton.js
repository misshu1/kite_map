import styled from "styled-components";

export const LoginButton = styled.input.attrs(() => ({
    type: "submit"
}))`
    color: #fff;
    background: #4287f5;
    border: none;
    outline: none;
    width: 8rem;
    height: 2rem;
    margin-top: 3rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
`;
