import styled from 'styled-components';

import colors from '../../assets/css/colors';

const Input = styled.input`
  width: calc(100% - 2em);
  background: ${colors.white};
  color: ${colors.black};
  border-radius: 7px;
  border: 1px solid rgba(194, 194, 194, 0.2);
  font-size: 0.8em;
  font-weight: 300;
  line-height: 1.45;
  outline: none;
  padding: 0.4em 1em 0.4em;
  -webkit-transition: 0.18s ease-out;
  -moz-transition: 0.18s ease-out;
  -o-transition: 0.18s ease-out;
  transition: 0.18s ease-out;

  margin-top: 0.5rem;
  margin-bottom: 1rem;

  -webkit-box-shadow:  -4px 3px 19px -8px rgba(194, 194, 194, 0.726);
  -moz-box-shadow:  -4px 3px 19px -8px rgba(194, 194, 194, 0.726);
  box-shadow:  -4px 3px 19px -8px rgba(194, 194, 194, 0.726);

  &:hover {
    border: 1px solid rgba(255, 169, 89, 0.2);
    -webkit-box-shadow: 0px 3px 33px -4px ${colors.primary};
    -moz-box-shadow: 0px 3px 33px -4px ${colors.primary};
    box-shadow: 0px 3px 33px -4px ${colors.primary};
  }

  &:focus {
    color: var(--gray);
    border: 1px solid ${colors.secondary};
    -webkit-box-shadow: 0px 3px 33px -4px ${colors.primary};
    -moz-box-shadow: 0px 3px 33px -4px ${colors.primary};
    box-shadow: 0px 3px 33px -4px ${colors.primary};
  }

  &:disabled {
    background-color: ${colors.grayLight};
  }

  &::-webkit-input-placeholder {
    /* WebKit browsers */
    text-transform: none;
  }
  &:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    text-transform: none;
  }
  &::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    text-transform: none;
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    text-transform: none;
  }
  &::placeholder {
    /* Recent browsers */
    text-transform: none;
  }
`;

export default Input;