import styled from "styled-components";

export const Details = styled.div`
    table {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
    }
    th,
    td {
        text-align: left;
        height: 2rem;
        padding: 0.5rem;
    }
    tbody td {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .buttons {
        width: fit-content;
        height: 2rem;
        display: flex;
        align-items: center;
        margin: 0;
    }

    .desktop {
        background: #ccc;
    }
    .mobile-thead {
        background: #6d6d6e;
        color: #d6d8de;
    }

    @media (min-width: 37.5rem) {
        .mobile {
            display: none;
        }
    }
    @media (max-width: 37.5rem) {
        /* table {
            max-width: 70%;
        } */
        .desktop {
            display: none;
        }
    }
`;
