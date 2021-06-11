import styled from 'styled-components';


//Assets
import colors from '../../assets/css/colors';

export const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: 99999;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 40%;
    max-height: 95%;


    border-radius: 2rem;

    background-color: ${colors.white};

    @media (max-width: 768px){
        width: 85%;
    }

    @media (max-width: 650px){
        overflow-y: auto;
    }

    @media (max-width: 500px){
        width: 95%;
    }
`;

export const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    margin-top: 1rem;
    margin-right: 1rem;
`


export const Close = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: transparent;

    border: none;

    cursor: pointer;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

    flex-grow: 2;

    padding: 2rem;
    padding-top: 1rem;
`;

export const FormContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;

    @media (max-width: 650px){
        flex-direction: column;
    }
`

export const ButtonContainer = styled.div`
    width: 100%;

    margin-top: 2rem;
`;

export const ErrorMessage = styled.p`
    width: 100%;

    color: ${colors.primary};
    text-align: center;

    margin-bottom: 0px;
`;

export const Label = styled.label`
    font-size: 1rem;
`;