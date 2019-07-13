import styled from "styled-components";

export const DashboardContainer = styled.div`
    max-width: 60rem;
    display: flex;
    flex-direction: column;
    table {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
    }
    thead {
        background: #ccc;
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
`;
