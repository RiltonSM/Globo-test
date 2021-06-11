import { ReactNode }  from 'react';

//Styles
import { Container } from './styles';

//Assets
import colors from '../../assets/css/colors';

interface Props{
    children?: ReactNode;
}

const Card = (props:Props) => {
  return (
  <Container
    initial={{
      boxShadow: 'none'
    }}
    animate={{
      boxShadow: `-1px 15px 55px -21px ${colors.primary}` ,
    }}
    transition={{
      delay: 0,
      duration: 1
    }}
  >
      {props.children}
  </Container>);
}

export default Card;