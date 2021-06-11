import styled from 'styled-components';

export const Container = styled.div`
  width: 85%;
  display: flex;
  padding-left: 37px;
  padding-right: 30px;

  height: 100vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 500px) {
    width: 100% !important;
    height: 100%;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 70px;
  }

  @media (max-width: 1280px) {
    width: 90%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;