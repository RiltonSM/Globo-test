import styled from 'styled-components';

export const Content = styled.div`
    flex-grow: 2;

    display: flex;
    align-items: center;

    

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        padding-top: 3rem;
    }
`;
export const GraphicLineContainer = styled.div`
    width: 30%;
    height: 400px;

    @media (max-width: 1024px) {
        width: 50%;
        margin-bottom: 2rem;
        margin-left: -7%;
    }

    @media (max-width: 768px) {
        width: 70%;
    }

    @media (max-width: 500px) {
        width: 90%;
    }
`;

export const GraphicLineTitle = styled.h2`
    font-size: 1rem;
    text-align: center;

    margin: 0;
    margin-left: 12%;
    margin-bottom: 0.5rem;

    @media (max-width: 500px) {
        width: 90%;
        margin-left: 10%;
    }
`;

export const GraphicContainer = styled.div`
    width: 30%;
    height: 400px;

    @media (max-width: 1024px) {
        width: 50%;
        margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
        width: 70%;
    }

    @media (max-width: 500px) {
        width: 90%;
    }
`;

export const GraphicTitle = styled.h2`
    width: 100%;

    font-size: 1rem;
    text-align: center;

    margin: 0;
    margin-bottom: 0.5rem;
`;

