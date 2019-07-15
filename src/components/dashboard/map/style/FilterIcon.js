import styled from "styled-components";

export const FilterIcon = styled.div`
    position: absolute;
    z-index: 1;
    margin-top: 5rem;
    right: 0;
    background: #4287f5;
    clip-path: circle(10% at 85% 15%);
    transition: all 0.3s ease-in-out;
    padding: 1rem;
    &&:focus,
    &&:active,
    &&:hover {
        clip-path: circle(75%);
        outline: none;
        background: #fff;
        && input {
            background: #fff;
        }
    }
    p {
        margin: 0.5rem 0;
    }
    input {
        margin-bottom: 0.5rem;
        outline: none;
        border: none;
        border-bottom: 1px solid #4287f5;
        height: 2rem;
        line-height: 1.6;
        font-size: 1rem;
        background: #4287f5;
        transition: all 0.3s ease-in-out;
    }
    && input:focus {
        border-bottom: 3px solid #4287f5;
    }
`;
