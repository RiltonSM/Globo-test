import styled from 'styled-components';

import colors from '../../assets/css/colors';

export const Content = styled.div`
    flex-grow: 2;

    display: flex;
    padding-top: 6rem;
`;

export const AddButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const AddButton = styled.button`
    padding: 0.5rem;

    background-color: ${colors.primary};
    
    border: none;
    border-radius: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 1rem;

    transition: background-color 0.5s ease;

    &:hover {
        background-color: ${colors.secondary};
    }
`;

export const TableContainer = styled.div`
    width: 80%;
    height: 420px;
    overflow-x: auto;

    ::-webkit-scrollbar-track {
        background-color: ${colors.scrollBarBackground};
    }
    ::-webkit-scrollbar {
        height: 6px;
        background: ${colors.scrollBarBackground};
    }
    ::-webkit-scrollbar-thumb {
        background: ${colors.scrollBarThumb};
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Table = styled.table`
    width: 100%;
    height: min-content;
    
    max-height: 420px;

    border-collapse: collapse;
`;

export const Tr = styled.tr`
    height: 2.5rem;
`;

export const Th = styled.th`
    text-align: center;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const Td = styled.td`
    text-align: center;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;