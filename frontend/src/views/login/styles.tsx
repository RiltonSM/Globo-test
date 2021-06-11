import styled from 'styled-components';

import colors from '../../assets/css/colors';

export const ContantContainer = styled.main`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    text-align: center;

    margin: 0px;
    margin-bottom: 2rem;
`;

export const Label = styled.label`
    font-size: 1rem;
`;

export const ErrorMessage = styled.p`
    text-align: center;
    font-size: 1rem;

    color: ${colors.primary};
`;