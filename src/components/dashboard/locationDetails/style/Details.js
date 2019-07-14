import styled from "styled-components";

export const Details = styled.div`
    padding: 0 0.5rem;
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
        display: flex;
        height: 2rem;
        margin: 0;
    }

    .desktop,
    .mobile-thead {
        background: #6d6d6e;
        color: #d6d8de;
    }

    @media (min-width: 37.555rem) {
        .mobile {
            display: none;
        }
    }
    @media (max-width: 37.555rem) {
        .desktop {
            display: none;
        }
    }
`;
