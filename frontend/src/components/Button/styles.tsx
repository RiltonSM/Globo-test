import styled from "styled-components";

import colors from '../../assets/css/colors';

const Button = styled.button`
  border: 0;
  outline: none;
  border-radius: 0;
  padding: 12px;
  font-size: 1rem;
  width: 100%;
  font-weight: 600;
  border-radius: 12px;
  background: ${colors.primary};
  color: ${colors.white};
  transition: all.5s ease;

  margin-top: 1rem;

  -webkit-box-shadow: -4px 17px 50px -26px ${colors.primary};
  -moz-box-shadow: -4px 17px 50px -26px ${colors.primary};
  box-shadow: -4px 14px 50px -15px ${colors.primary};

  
  &:hover {
    background: ${colors.secondary};
  }

  &:focus {
    background: ${colors.secondary};
    outline: none;
  }

`;

export default Button;