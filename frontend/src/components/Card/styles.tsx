import styled from "styled-components";
import { motion } from 'framer-motion';

import colors from '../../assets/css/colors';

export const Container = styled(motion.div)`
  height: max-content;
  max-width: 400px;
  /* width: 90%; */
  border-radius: 42px;
  display: flex;

  padding:40px;
  margin:0px;
  flex-direction: column;

  background-color: ${colors.white};
  -webkit-box-shadow: -1px 15px 55px -21px ${colors.primary};
  -moz-box-shadow: -1px 15px 55px -21px ${colors.primary};
  box-shadow: -1px 15px 55px -21px ${colors.primary};
`;